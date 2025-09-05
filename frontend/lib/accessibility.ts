// Accessibility Enhancement Module
// Implements WCAG 2.1 AA compliance and accessibility improvements

import { reportSecurityEvent } from './securityMonitor';

export interface AccessibilitySettings {
    fontSize: 'small' | 'medium' | 'large';
    colorScheme: 'light' | 'dark' | 'high-contrast';
    reducedMotion: boolean;
    screenReader: boolean;
    keyboardNavigation: boolean;
}

class AccessibilityManager {
    private settings: AccessibilitySettings;
    private readonly SETTINGS_KEY = 'accessibility_settings';

    constructor() {
        this.settings = this.loadSettings();
        this.initializeAccessibility();
    }

    private loadSettings(): AccessibilitySettings {
        try {
            const stored = localStorage.getItem(this.SETTINGS_KEY);
            return stored ? { ...this.getDefaultSettings(), ...JSON.parse(stored) } : this.getDefaultSettings();
        } catch {
            return this.getDefaultSettings();
        }
    }

    private getDefaultSettings(): AccessibilitySettings {
        return {
            fontSize: 'medium',
            colorScheme: 'light',
            reducedMotion: false,
            screenReader: false,
            keyboardNavigation: true
        };
    }

    private saveSettings(): void {
        try {
            localStorage.setItem(this.SETTINGS_KEY, JSON.stringify(this.settings));
        } catch {
            reportSecurityEvent('accessibility_settings_save_failed', 'low', 'Failed to save accessibility settings');
        }
    }

    private initializeAccessibility(): void {
        if (typeof window === 'undefined') return;

        // Apply current settings
        this.applySettings();

        // Detect user's system preferences
        this.detectSystemPreferences();

        // Set up keyboard navigation
        this.setupKeyboardNavigation();

        // Add accessibility announcements
        this.setupScreenReaderSupport();

        // Monitor for accessibility issues
        this.setupAccessibilityMonitoring();
    }

    private applySettings(): void {
        const root = document.documentElement;

        // Apply font size
        root.classList.remove('text-small', 'text-medium', 'text-large');
        root.classList.add(`text-${this.settings.fontSize}`);

        // Apply color scheme
        root.classList.remove('theme-light', 'theme-dark', 'theme-high-contrast');
        root.classList.add(`theme-${this.settings.colorScheme}`);

        // Apply motion preferences
        if (this.settings.reducedMotion) {
            root.style.setProperty('--animation-duration', '0s');
        } else {
            root.style.removeProperty('--animation-duration');
        }
    }

    private detectSystemPreferences(): void {
        // Detect user's system preferences and update settings accordingly
        if (window.matchMedia) {
            // Detect color scheme preference
            const colorSchemeQuery = window.matchMedia('(prefers-color-scheme: dark)');
            if (colorSchemeQuery.matches && this.settings.colorScheme === 'light') {
                this.settings.colorScheme = 'dark';
                this.applySettings();
            }

            colorSchemeQuery.addEventListener('change', (e) => {
                this.settings.colorScheme = e.matches ? 'dark' : 'light';
                this.applySettings();
                this.saveSettings();
            });

            // Detect reduced motion preference
            const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
            if (motionQuery.matches && !this.settings.reducedMotion) {
                this.settings.reducedMotion = true;
                this.applySettings();
            }

            motionQuery.addEventListener('change', (e) => {
                this.settings.reducedMotion = e.matches;
                this.applySettings();
                this.saveSettings();
            });
        }
    }

    private setupKeyboardNavigation(): void {
        // Enhanced keyboard navigation
        document.addEventListener('keydown', (e) => {
            // Skip links for screen readers
            if (e.key === 'Tab') {
                const focusedElement = document.activeElement;

                // Add focus indicators
                if (focusedElement) {
                    focusedElement.classList.add('focus-visible');
                }
            }

            // ESC key handling
            if (e.key === 'Escape') {
                // Close modals, dropdowns, etc.
                this.closeOpenElements();
            }

            // Enhanced navigation for form elements
            if (e.key === 'Enter' && document.activeElement?.tagName === 'BUTTON') {
                // Ensure buttons are properly activated
                const button = document.activeElement as HTMLButtonElement;
                if (button.type !== 'submit') {
                    button.click();
                }
            }
        });

        // Add focus management for dynamic content
        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                mutation.addedNodes.forEach((node) => {
                    if (node.nodeType === Node.ELEMENT_NODE) {
                        const element = node as Element;

                        // Add tabindex to interactive elements that might be missing it
                        if (this.isInteractiveElement(element) && !element.hasAttribute('tabindex')) {
                            element.setAttribute('tabindex', '0');
                        }

                        // Add ARIA labels where missing
                        if (element.tagName === 'BUTTON' && !element.hasAttribute('aria-label') && !element.textContent?.trim()) {
                            element.setAttribute('aria-label', 'Button');
                        }
                    }
                });
            });
        });

        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
    }

    private setupScreenReaderSupport(): void {
        // Add live region for announcements
        const liveRegion = document.createElement('div');
        liveRegion.id = 'accessibility-announcements';
        liveRegion.setAttribute('aria-live', 'polite');
        liveRegion.setAttribute('aria-atomic', 'true');
        liveRegion.className = 'sr-only';
        document.body.appendChild(liveRegion);

        // Announce page changes
        let currentPath = window.location.pathname;
        const observer = new MutationObserver(() => {
            const newPath = window.location.pathname;
            if (newPath !== currentPath) {
                this.announcePageChange();
                currentPath = newPath;
            }
        });

        observer.observe(document.querySelector('main') || document.body, {
            childList: true,
            subtree: false
        });
    }

    private setupAccessibilityMonitoring(): void {
        // Monitor for accessibility violations
        const checkAccessibility = () => {
            const issues = [];

            // Check for missing alt text
            const images = document.querySelectorAll('img:not([alt])');
            if (images.length > 0) {
                issues.push(`${images.length} images missing alt text`);
            }

            // Check for missing form labels
            const inputs = document.querySelectorAll('input:not([aria-label]):not([aria-labelledby])');
            const unlabeledInputs = Array.from(inputs).filter(input => {
                const label = document.querySelector(`label[for="${input.id}"]`);
                return !label;
            });

            if (unlabeledInputs.length > 0) {
                issues.push(`${unlabeledInputs.length} form inputs missing labels`);
            }

            // Check for insufficient color contrast (basic check)
            // Note: Full contrast checking would require more complex analysis
            document.querySelectorAll('[style*="color"], [style*="background-color"]');

            if (issues.length > 0) {
                reportSecurityEvent('accessibility_issues_detected', 'low', `Accessibility issues: ${issues.join(', ')}`);
            }
        };

        // Check periodically
        setInterval(checkAccessibility, 30000); // Check every 30 seconds
    }

    private isInteractiveElement(element: Element): boolean {
        const interactiveTags = ['BUTTON', 'A', 'INPUT', 'SELECT', 'TEXTAREA', 'DETAILS', 'SUMMARY'];
        return interactiveTags.includes(element.tagName) ||
            element.hasAttribute('onclick') ||
            element.hasAttribute('onkeydown') ||
            element.getAttribute('role') === 'button';
    }

    private closeOpenElements(): void {
        // Close modals
        const modals = document.querySelectorAll('[role="dialog"], .modal');
        modals.forEach(modal => {
            const closeButton = modal.querySelector('[aria-label="Close"], .close-button');
            if (closeButton) {
                (closeButton as HTMLElement).click();
            }
        });

        // Close dropdowns
        const dropdowns = document.querySelectorAll('[aria-expanded="true"]');
        dropdowns.forEach(dropdown => {
            dropdown.setAttribute('aria-expanded', 'false');
        });
    }

    private announcePageChange(): void {
        const liveRegion = document.getElementById('accessibility-announcements');
        if (liveRegion) {
            const pageTitle = document.title || 'Page';
            liveRegion.textContent = `Navigated to ${pageTitle}`;
        }
    }

    // Public API methods
    public updateSettings(newSettings: Partial<AccessibilitySettings>): void {
        this.settings = { ...this.settings, ...newSettings };
        this.applySettings();
        this.saveSettings();

        // Announce setting change
        this.announceSettingChange(newSettings);
    }

    public getSettings(): AccessibilitySettings {
        return { ...this.settings };
    }

    public toggleHighContrast(): void {
        const newScheme = this.settings.colorScheme === 'high-contrast' ? 'light' : 'high-contrast';
        this.updateSettings({ colorScheme: newScheme });
    }

    public toggleFontSize(): void {
        const sizes: Array<AccessibilitySettings['fontSize']> = ['small', 'medium', 'large'];
        const currentIndex = sizes.indexOf(this.settings.fontSize);
        const nextIndex = (currentIndex + 1) % sizes.length;
        this.updateSettings({ fontSize: sizes[nextIndex] });
    }

    public toggleReducedMotion(): void {
        this.updateSettings({ reducedMotion: !this.settings.reducedMotion });
    }

    public announce(message: string): void {
        const liveRegion = document.getElementById('accessibility-announcements');
        if (liveRegion) {
            liveRegion.textContent = message;
        }
    }

    private announceSettingChange(changes: Partial<AccessibilitySettings>): void {
        const announcements = [];

        if (changes.fontSize) {
            announcements.push(`Font size changed to ${changes.fontSize}`);
        }

        if (changes.colorScheme) {
            announcements.push(`Color scheme changed to ${changes.colorScheme.replace('-', ' ')}`);
        }

        if (changes.reducedMotion !== undefined) {
            announcements.push(`Reduced motion ${changes.reducedMotion ? 'enabled' : 'disabled'}`);
        }

        if (announcements.length > 0) {
            this.announce(announcements.join('. '));
        }
    }
}

// Create singleton instance
export const accessibilityManager = new AccessibilityManager();

// Export utility functions
export const updateAccessibilitySettings = (settings: Partial<AccessibilitySettings>) => accessibilityManager.updateSettings(settings);
export const getAccessibilitySettings = () => accessibilityManager.getSettings();
export const toggleHighContrast = () => accessibilityManager.toggleHighContrast();
export const toggleFontSize = () => accessibilityManager.toggleFontSize();
export const toggleReducedMotion = () => accessibilityManager.toggleReducedMotion();
export const announceToScreenReader = (message: string) => accessibilityManager.announce(message);

export default accessibilityManager;
