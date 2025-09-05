// Security monitoring utilities for the application
// This module provides centralized security monitoring and event tracking

interface SecurityEvent {
    type: string;
    severity: 'low' | 'medium' | 'high' | 'critical';
    message: string;
    timestamp: number;
    userAgent?: string;
    url?: string;
    data?: Record<string, unknown>;
}

class SecurityMonitor {
    private events: SecurityEvent[] = [];
    private readonly MAX_EVENTS = 100;
    // Increase threshold in development to reduce false positives
    private readonly REPORT_THRESHOLD = process.env.NODE_ENV === 'development' ? 15 : 5;

    constructor() {
        this.initializeMonitoring();
    }

    private initializeMonitoring(): void {
        if (typeof window === 'undefined') return;

        // Monitor for security policy violations
        document.addEventListener('securitypolicyviolation', (e) => {
            this.reportEvent({
                type: 'csp_violation',
                severity: 'high',
                message: `CSP Violation: ${e.violatedDirective}`,
                timestamp: Date.now(),
                data: {
                    violatedDirective: e.violatedDirective,
                    blockedURI: e.blockedURI,
                    sourceFile: e.sourceFile
                }
            });
        });

        // Monitor for unhandled promise rejections (potential security issues)
        window.addEventListener('unhandledrejection', (e) => {
            this.reportEvent({
                type: 'unhandled_rejection',
                severity: 'medium',
                message: 'Unhandled promise rejection detected',
                timestamp: Date.now(),
                data: { reason: e.reason?.toString() }
            });
        });

        // Monitor for errors that might indicate security issues
        window.addEventListener('error', (e) => {
            // Only report potentially security-related errors
            if (e.message && (
                e.message.includes('script') ||
                e.message.includes('eval') ||
                e.message.includes('injection') ||
                e.message.includes('xss')
            )) {
                this.reportEvent({
                    type: 'security_error',
                    severity: 'high',
                    message: `Security-related error: ${e.message}`,
                    timestamp: Date.now(),
                    data: {
                        filename: e.filename,
                        lineno: e.lineno,
                        colno: e.colno
                    }
                });
            }
        });
    }

    public reportEvent(event: Omit<SecurityEvent, 'userAgent' | 'url'>): void {
        const fullEvent: SecurityEvent = {
            ...event,
            userAgent: typeof navigator !== 'undefined' ? navigator.userAgent : undefined,
            url: typeof window !== 'undefined' ? window.location.href : undefined
        };

        this.events.push(fullEvent);

        // Keep only the most recent events
        if (this.events.length > this.MAX_EVENTS) {
            this.events = this.events.slice(-this.MAX_EVENTS);
        }

        // Log to console in development (reduced verbosity)
        if (process.env.NODE_ENV === 'development' && fullEvent.severity === 'critical') {
            console.warn('Critical Security Event:', fullEvent.message);
        }

        // Check if we need to escalate
        this.checkEscalation();
    }

    private checkEscalation(): void {
        // Skip escalation in development mode to prevent console spam
        if (process.env.NODE_ENV === 'development') {
            return;
        }

        const recentEvents = this.events.filter(
            event => Date.now() - event.timestamp < 300000 // Last 5 minutes
        );

        const highSeverityEvents = recentEvents.filter(
            event => event.severity === 'high' || event.severity === 'critical'
        );

        if (highSeverityEvents.length >= this.REPORT_THRESHOLD) {
            // In a real application, this would send a report to security monitoring service
            console.error(`Security Alert: ${highSeverityEvents.length} high-severity events in the last 5 minutes`);
        }
    }

    public getEvents(): SecurityEvent[] {
        return [...this.events];
    }

    public getRecentEvents(minutes: number = 5): SecurityEvent[] {
        const cutoff = Date.now() - (minutes * 60 * 1000);
        return this.events.filter(event => event.timestamp > cutoff);
    }

    public clearEvents(): void {
        this.events = [];
    }

    public clearRecentEvents(minutes: number = 5): void {
        const cutoff = Date.now() - (minutes * 60 * 1000);
        this.events = this.events.filter(event => event.timestamp <= cutoff);
    }

    // Development helper to reset escalation counter
    public resetEscalation(): void {
        if (process.env.NODE_ENV === 'development') {
            this.clearRecentEvents(5);
            console.log('Security escalation counter reset');
        }
    }
}

// Create a singleton instance
export const securityMonitor = new SecurityMonitor();

// Export utility functions for common security events
export const reportSecurityEvent = (type: string, severity: SecurityEvent['severity'], message: string, data?: Record<string, unknown>) => {
    securityMonitor.reportEvent({
        type,
        severity,
        message,
        timestamp: Date.now(),
        data
    });
};

// Export for use in components
export default securityMonitor;
