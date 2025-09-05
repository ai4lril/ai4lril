// GDPR Consent Management System
// Implements comprehensive consent management for data collection and processing

import { recordConsent } from './compliance';
import { reportSecurityEvent } from './securityMonitor';

interface ConsentPreferences {
    necessary: boolean; // Always true, cannot be disabled
    analytics: boolean;
    marketing: boolean;
    functional: boolean;
    dataCollection: boolean;
    dataProcessing: boolean;
    dataSharing: boolean;
}

interface ConsentRecord {
    id: string;
    timestamp: Date;
    preferences: ConsentPreferences;
    ipAddress?: string;
    userAgent?: string;
    consentVersion: string;
}

class GDPRConsentManager {
    private readonly CONSENT_VERSION = '1.0';
    private readonly CONSENT_STORAGE_KEY = 'gdpr_consent';
    private readonly CONSENT_EXPIRY_DAYS = 365;
    private consentBanner: HTMLElement | null = null;
    private consentModal: HTMLElement | null = null;

    constructor() {
        this.initializeConsentManagement();
    }

    private initializeConsentManagement(): void {
        if (typeof window === 'undefined') return;

        // Check if consent has been given
        const existingConsent = this.getStoredConsent();

        if (!existingConsent || this.isConsentExpired(existingConsent)) {
            this.showConsentBanner();
        }

        // Listen for consent-related events
        document.addEventListener('consentGiven', this.handleConsentGiven.bind(this));
        document.addEventListener('consentWithdrawn', this.handleConsentWithdrawn.bind(this));
        document.addEventListener('showConsentPreferences', this.showConsentModal.bind(this));
    }

    private getStoredConsent(): ConsentRecord | null {
        try {
            const stored = localStorage.getItem(this.CONSENT_STORAGE_KEY);
            return stored ? JSON.parse(stored) : null;
        } catch {
            return null;
        }
    }

    private storeConsent(consent: ConsentRecord): void {
        try {
            localStorage.setItem(this.CONSENT_STORAGE_KEY, JSON.stringify(consent));
        } catch {
            reportSecurityEvent('consent_storage_failed', 'medium', 'Failed to store consent preferences');
        }
    }

    private isConsentExpired(consent: ConsentRecord): boolean {
        const consentDate = new Date(consent.timestamp);
        const expiryDate = new Date(consentDate.getTime() + (this.CONSENT_EXPIRY_DAYS * 24 * 60 * 60 * 1000));
        return new Date() > expiryDate;
    }

    private showConsentBanner(): void {
        // Remove existing banner if present
        const existingBanner = document.getElementById('gdpr-consent-banner');
        if (existingBanner) existingBanner.remove();

        // Create consent banner
        const banner = document.createElement('div');
        banner.id = 'gdpr-consent-banner';
        banner.className = 'fixed bottom-0 left-0 right-0 bg-gray-900 text-white p-4 z-50 shadow-lg';
        banner.innerHTML = `
            <div class="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
                <div class="flex-1">
                    <h3 class="font-semibold mb-2">🍪 Cookie Preferences</h3>
                    <p class="text-sm text-gray-300">
                        We use cookies and similar technologies to improve your experience and analyze our traffic.
                        By clicking "Accept All", you consent to our use of cookies.
                    </p>
                </div>
                <div class="flex flex-col sm:flex-row gap-2">
                    <button id="gdpr-customize" class="px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg text-sm transition-colors">
                        Customize
                    </button>
                    <button id="gdpr-accept-all" class="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm transition-colors">
                        Accept All
                    </button>
                    <button id="gdpr-reject-all" class="px-4 py-2 bg-gray-600 hover:bg-gray-500 text-white rounded-lg text-sm transition-colors">
                        Reject All
                    </button>
                </div>
            </div>
        `;

        document.body.appendChild(banner);
        this.consentBanner = banner;

        // Add event listeners
        document.getElementById('gdpr-accept-all')?.addEventListener('click', () => {
            this.acceptAllConsent();
        });

        document.getElementById('gdpr-reject-all')?.addEventListener('click', () => {
            this.rejectAllConsent();
        });

        document.getElementById('gdpr-customize')?.addEventListener('click', () => {
            this.showConsentModal();
        });
    }

    private showConsentModal(): void {
        // Remove existing modal if present
        const existingModal = document.getElementById('gdpr-consent-modal');
        if (existingModal) existingModal.remove();

        // Create consent modal
        const modal = document.createElement('div');
        modal.id = 'gdpr-consent-modal';
        modal.className = 'fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4';
        modal.innerHTML = `
            <div class="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
                <div class="p-6">
                    <div class="flex justify-between items-center mb-6">
                        <h2 class="text-2xl font-bold text-gray-900">Cookie Preferences</h2>
                        <button id="gdpr-modal-close" class="text-gray-400 hover:text-gray-600 text-2xl">&times;</button>
                    </div>

                    <div class="space-y-6">
                        <!-- Necessary Cookies -->
                        <div class="border border-gray-200 rounded-lg p-4">
                            <div class="flex items-center justify-between mb-3">
                                <div>
                                    <h3 class="font-semibold text-gray-900">Necessary Cookies</h3>
                                    <p class="text-sm text-gray-600">Required for the website to function properly.</p>
                                </div>
                                <input type="checkbox" checked disabled class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500">
                            </div>
                            <p class="text-xs text-gray-500">These cookies are essential for the website to work and cannot be disabled.</p>
                        </div>

                        <!-- Analytics Cookies -->
                        <div class="border border-gray-200 rounded-lg p-4">
                            <div class="flex items-center justify-between mb-3">
                                <div>
                                    <h3 class="font-semibold text-gray-900">Analytics Cookies</h3>
                                    <p class="text-sm text-gray-600">Help us understand how visitors interact with our website.</p>
                                </div>
                                <input type="checkbox" id="analytics-consent" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500">
                            </div>
                        </div>

                        <!-- Functional Cookies -->
                        <div class="border border-gray-200 rounded-lg p-4">
                            <div class="flex items-center justify-between mb-3">
                                <div>
                                    <h3 class="font-semibold text-gray-900">Functional Cookies</h3>
                                    <p class="text-sm text-gray-600">Enable enhanced functionality and personalization.</p>
                                </div>
                                <input type="checkbox" id="functional-consent" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500">
                            </div>
                        </div>

                        <!-- Data Collection -->
                        <div class="border border-gray-200 rounded-lg p-4">
                            <div class="flex items-center justify-between mb-3">
                                <div>
                                    <h3 class="font-semibold text-gray-900">Language Data Collection</h3>
                                    <p class="text-sm text-gray-600">Allow collection of language data for research purposes.</p>
                                </div>
                                <input type="checkbox" id="data-collection-consent" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500">
                            </div>
                            <p class="text-xs text-gray-500">Your contributions help advance AI and NLP research for Indian languages.</p>
                        </div>
                    </div>

                    <div class="flex flex-col sm:flex-row gap-3 mt-8">
                        <button id="gdpr-save-preferences" class="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-semibold transition-colors">
                            Save Preferences
                        </button>
                        <button id="gdpr-accept-all-modal" class="flex-1 bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded-lg font-semibold transition-colors">
                            Accept All
                        </button>
                    </div>
                </div>
            </div>
        `;

        document.body.appendChild(modal);
        this.consentModal = modal;

        // Add event listeners
        document.getElementById('gdpr-modal-close')?.addEventListener('click', () => {
            this.hideConsentModal();
        });

        document.getElementById('gdpr-save-preferences')?.addEventListener('click', () => {
            this.saveCustomPreferences();
        });

        document.getElementById('gdpr-accept-all-modal')?.addEventListener('click', () => {
            this.acceptAllConsent();
        });

        // Close modal when clicking outside
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                this.hideConsentModal();
            }
        });
    }

    private hideConsentModal(): void {
        if (this.consentModal) {
            this.consentModal.remove();
            this.consentModal = null;
        }
    }

    private acceptAllConsent(): void {
        const preferences: ConsentPreferences = {
            necessary: true,
            analytics: true,
            marketing: true,
            functional: true,
            dataCollection: true,
            dataProcessing: true,
            dataSharing: true
        };

        this.saveConsent(preferences);
        this.hideConsentBanner();
        this.hideConsentModal();
    }

    private rejectAllConsent(): void {
        const preferences: ConsentPreferences = {
            necessary: true,
            analytics: false,
            marketing: false,
            functional: false,
            dataCollection: false,
            dataProcessing: false,
            dataSharing: false
        };

        this.saveConsent(preferences);
        this.hideConsentBanner();
        this.hideConsentModal();
    }

    private saveCustomPreferences(): void {
        const preferences: ConsentPreferences = {
            necessary: true,
            analytics: (document.getElementById('analytics-consent') as HTMLInputElement)?.checked || false,
            marketing: false, // Not used in current implementation
            functional: (document.getElementById('functional-consent') as HTMLInputElement)?.checked || false,
            dataCollection: (document.getElementById('data-collection-consent') as HTMLInputElement)?.checked || false,
            dataProcessing: (document.getElementById('data-collection-consent') as HTMLInputElement)?.checked || false,
            dataSharing: false // Not used in current implementation
        };

        this.saveConsent(preferences);
        this.hideConsentBanner();
        this.hideConsentModal();
    }

    private saveConsent(preferences: ConsentPreferences): void {
        const consentRecord: ConsentRecord = {
            id: this.generateConsentId(),
            timestamp: new Date(),
            preferences,
            consentVersion: this.CONSENT_VERSION,
            ipAddress: undefined, // Not available in browser
            userAgent: typeof navigator !== 'undefined' ? navigator.userAgent : undefined
        };

        this.storeConsent(consentRecord);

        // Record consent in compliance system
        recordConsent('anonymous_user', 'cookie_consent', true, new Date(Date.now() + (this.CONSENT_EXPIRY_DAYS * 24 * 60 * 60 * 1000)));

        reportSecurityEvent('consent_given', 'low', 'User provided consent preferences');
    }

    private generateConsentId(): string {
        return 'consent_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
    }

    private hideConsentBanner(): void {
        if (this.consentBanner) {
            this.consentBanner.remove();
            this.consentBanner = null;
        }
    }

    private handleConsentGiven(event: Event): void {
        const customEvent = event as CustomEvent;
        const preferences = customEvent.detail as ConsentPreferences;
        this.saveConsent(preferences);
    }

    private handleConsentWithdrawn(): void {
        // Clear stored consent
        localStorage.removeItem(this.CONSENT_STORAGE_KEY);
        this.showConsentBanner();

        recordConsent('anonymous_user', 'consent_withdrawn', false);
        reportSecurityEvent('consent_withdrawn', 'low', 'User withdrew consent');
    }

    // Public API methods
    public getConsentPreferences(): ConsentPreferences | null {
        const consent = this.getStoredConsent();
        return consent ? consent.preferences : null;
    }

    public hasConsentFor(category: keyof ConsentPreferences): boolean {
        const preferences = this.getConsentPreferences();
        if (!preferences) return false;

        // Necessary cookies are always allowed
        if (category === 'necessary') return true;

        return preferences[category];
    }

    public withdrawConsent(): void {
        this.handleConsentWithdrawn();
    }

    public showConsentPreferences(): void {
        this.showConsentModal();
    }
}

// Create singleton instance
export const gdprConsentManager = new GDPRConsentManager();

// Export utility functions
export const getConsentPreferences = () => gdprConsentManager.getConsentPreferences();
export const hasConsentFor = (category: keyof ConsentPreferences) => gdprConsentManager.hasConsentFor(category);
export const withdrawConsent = () => gdprConsentManager.withdrawConsent();
export const showConsentPreferences = () => gdprConsentManager.showConsentPreferences();

export default gdprConsentManager;
