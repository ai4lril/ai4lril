// Compliance and Data Protection Framework
// Implements GDPR, CCPA, ISO 27001, and SOC 2 requirements

import { reportSecurityEvent } from './securityMonitor';

export interface DataSubject {
    id: string;
    email?: string;
    consentGiven: boolean;
    consentDate?: Date;
    dataProcessingPurposes: string[];
    dataRetentionPeriod: number; // in days
    lastActivity: Date;
    dataCategories: string[];
}

export interface DataProcessingRecord {
    id: string;
    subjectId: string;
    purpose: string;
    legalBasis: string;
    dataCategories: string[];
    timestamp: Date;
    ipAddress?: string;
    userAgent?: string;
}

export interface ConsentRecord {
    id: string;
    subjectId: string;
    consentType: string;
    granted: boolean;
    timestamp: Date;
    ipAddress?: string;
    userAgent?: string;
    expiresAt?: Date;
}

export interface DataBreachRecord {
    id: string;
    timestamp: Date;
    severity: 'low' | 'medium' | 'high' | 'critical';
    affectedSubjects: number;
    dataCategories: string[];
    description: string;
    containmentActions: string[];
    notificationStatus: 'pending' | 'sent' | 'completed';
    reportedToAuthorities: boolean;
}

class ComplianceManager {
    private dataSubjects: Map<string, DataSubject> = new Map();
    private processingRecords: DataProcessingRecord[] = [];
    private consentRecords: ConsentRecord[] = [];
    private breachRecords: DataBreachRecord[] = [];
    private readonly MAX_RECORDS = 10000;

    constructor() {
        this.initializeComplianceMonitoring();
    }

    private initializeComplianceMonitoring(): void {
        if (typeof window === 'undefined') return;

        // Monitor for data access patterns
        this.monitorDataAccess();

        // Monitor for consent compliance
        this.monitorConsentCompliance();

        // Monitor for data retention compliance
        this.monitorDataRetention();

        // Set up periodic compliance checks
        setInterval(() => {
            this.performComplianceAudit();
        }, 24 * 60 * 60 * 1000); // Daily audit
    }

    // GDPR Article 6: Lawful basis for processing
    public recordDataProcessing(subjectId: string, purpose: string, legalBasis: string, dataCategories: string[]): void {
        const record: DataProcessingRecord = {
            id: this.generateId(),
            subjectId,
            purpose,
            legalBasis,
            dataCategories,
            timestamp: new Date(),
            ipAddress: this.getClientIP(),
            userAgent: navigator?.userAgent
        };

        this.processingRecords.push(record);

        // Maintain data limits
        if (this.processingRecords.length > this.MAX_RECORDS) {
            this.processingRecords = this.processingRecords.slice(-this.MAX_RECORDS);
        }

        // Store in localStorage for persistence (in production, this would be server-side)
        this.persistRecord('processing_records', record as unknown as Record<string, unknown>);
    }

    // GDPR Article 7: Consent management
    public recordConsent(subjectId: string, consentType: string, granted: boolean, expiresAt?: Date): void {
        const record: ConsentRecord = {
            id: this.generateId(),
            subjectId,
            consentType,
            granted,
            timestamp: new Date(),
            ipAddress: this.getClientIP(),
            userAgent: navigator?.userAgent,
            expiresAt
        };

        this.consentRecords.push(record);

        // Update subject consent status
        const subject = this.dataSubjects.get(subjectId);
        if (subject) {
            if (consentType === 'general') {
                subject.consentGiven = granted;
                subject.consentDate = granted ? new Date() : undefined;
            }
            this.dataSubjects.set(subjectId, subject);
        }

        this.persistRecord('consent_records', record as unknown as Record<string, unknown>);
    }

    // GDPR Article 17: Right to erasure
    public requestDataErasure(subjectId: string): boolean {
        try {
            // Remove all data for this subject
            this.dataSubjects.delete(subjectId);

            // Filter out processing records for this subject
            this.processingRecords = this.processingRecords.filter(
                record => record.subjectId !== subjectId
            );

            // Filter out consent records for this subject
            this.consentRecords = this.consentRecords.filter(
                record => record.subjectId !== subjectId
            );

            // Clear localStorage data
            this.clearSubjectData(subjectId);

            // Log erasure request
            reportSecurityEvent(
                'data_erasure',
                'medium',
                `Data erasure requested and completed for subject: ${subjectId}`,
                { subjectId, timestamp: new Date().toISOString() }
            );

            return true;
        } catch (error) {
            reportSecurityEvent(
                'data_erasure_failed',
                'high',
                `Data erasure failed for subject: ${subjectId}`,
                { subjectId, error: error instanceof Error ? error.message : 'Unknown error' }
            );
            return false;
        }
    }

    // GDPR Article 15: Right to access
    public getDataAccessReport(subjectId: string): Record<string, unknown> {
        const subject = this.dataSubjects.get(subjectId);
        const processingRecords = this.processingRecords.filter(
            record => record.subjectId === subjectId
        );
        const consentRecords = this.consentRecords.filter(
            record => record.subjectId === subjectId
        );

        return {
            subject,
            processingRecords,
            consentRecords,
            dataPortability: this.generateDataPortabilityExport(subjectId)
        };
    }

    // GDPR Article 20: Right to data portability
    public generateDataPortabilityExport(subjectId: string): Record<string, unknown> {
        const subject = this.dataSubjects.get(subjectId);
        const processingRecords = this.processingRecords.filter(
            record => record.subjectId === subjectId
        );

        return {
            exportFormat: 'JSON',
            exportDate: new Date().toISOString(),
            subjectData: subject,
            processingHistory: processingRecords,
            consentHistory: this.consentRecords.filter(
                record => record.subjectId === subjectId
            )
        };
    }

    // GDPR Article 33-34: Data breach notification
    public recordDataBreach(
        severity: DataBreachRecord['severity'],
        affectedSubjects: number,
        dataCategories: string[],
        description: string
    ): void {
        const breach: DataBreachRecord = {
            id: this.generateId(),
            timestamp: new Date(),
            severity,
            affectedSubjects,
            dataCategories,
            description,
            containmentActions: [],
            notificationStatus: 'pending',
            reportedToAuthorities: false
        };

        this.breachRecords.push(breach);

        // Immediate security alert
        reportSecurityEvent(
            'data_breach',
            severity === 'critical' ? 'critical' : 'high',
            `Data breach detected: ${description}`,
            {
                breachId: breach.id,
                severity,
                affectedSubjects,
                dataCategories
            }
        );

        // In a real system, this would trigger:
        // 1. Immediate containment actions
        // 2. Notification to data protection authorities
        // 3. Notification to affected individuals
        // 4. Forensic investigation
    }

    // CCPA compliance: Do Not Sell My Personal Information
    public handleCCPADoNotSell(subjectId: string): boolean {
        const subject = this.dataSubjects.get(subjectId);
        if (subject) {
            subject.dataProcessingPurposes = subject.dataProcessingPurposes.filter(
                purpose => purpose !== 'marketing' && purpose !== 'advertising'
            );
            this.dataSubjects.set(subjectId, subject);
            return true;
        }
        return false;
    }

    // ISO 27001: Access control monitoring
    private monitorDataAccess(): void {
        // Monitor for unauthorized access patterns
        let accessCount = 0;
        let lastAccessTime = Date.now();

        // This would be enhanced with actual access monitoring
        const monitorAccess = () => {
            accessCount++;
            const now = Date.now();

            if (now - lastAccessTime < 1000 && accessCount > 5) {
                reportSecurityEvent(
                    'suspicious_access_pattern',
                    'medium',
                    'Unusual data access pattern detected',
                    { accessCount, timeWindow: now - lastAccessTime }
                );
            }

            if (now - lastAccessTime > 60000) { // Reset every minute
                accessCount = 0;
                lastAccessTime = now;
            }
        };

        // Monitor localStorage access (simplified)
        const originalGetItem = Storage.prototype.getItem;
        Storage.prototype.getItem = function (key: string) {
            monitorAccess();
            return originalGetItem.call(this, key);
        };
    }

    // SOC 2: Continuous monitoring and auditing
    private performComplianceAudit(): void {
        const now = new Date();

        // Check for expired consents
        const expiredConsents = this.consentRecords.filter(
            record => record.expiresAt && record.expiresAt < now
        );

        if (expiredConsents.length > 0) {
            reportSecurityEvent(
                'expired_consents',
                'medium',
                `${expiredConsents.length} expired consent records found`,
                { expiredConsents: expiredConsents.map(r => r.id) }
            );
        }

        // Check data retention compliance
        const subjectsNeedingDeletion = Array.from(this.dataSubjects.values()).filter(
            subject => {
                const daysSinceActivity = Math.floor(
                    (now.getTime() - subject.lastActivity.getTime()) / (1000 * 60 * 60 * 24)
                );
                return daysSinceActivity > subject.dataRetentionPeriod;
            }
        );

        if (subjectsNeedingDeletion.length > 0) {
            subjectsNeedingDeletion.forEach(subject => {
                this.requestDataErasure(subject.id);
            });
        }

        // Audit log
        reportSecurityEvent(
            'compliance_audit',
            'low',
            'Daily compliance audit completed',
            {
                totalSubjects: this.dataSubjects.size,
                totalProcessingRecords: this.processingRecords.length,
                totalConsentRecords: this.consentRecords.length,
                expiredConsents: expiredConsents.length,
                subjectsDeleted: subjectsNeedingDeletion.length
            }
        );
    }

    // Helper methods
    private generateId(): string {
        return `cmp_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    }

    private getClientIP(): string | undefined {
        // In a real implementation, this would be obtained from the server
        // For client-side, we can't reliably get the real IP
        return undefined;
    }

    private persistRecord(type: string, record: Record<string, unknown>): void {
        try {
            const records = JSON.parse(localStorage.getItem(`compliance_${type}`) || '[]');
            records.push(record);
            // Keep only recent records
            const recentRecords = records.slice(-100);
            localStorage.setItem(`compliance_${type}`, JSON.stringify(recentRecords));
        } catch (error) {
            console.warn('Failed to persist compliance record:', error);
        }
    }

    private clearSubjectData(subjectId: string): void {
        try {
            // Clear any subject-specific data from localStorage
            const keys = Object.keys(localStorage);
            keys.forEach(key => {
                if (key.includes(subjectId)) {
                    localStorage.removeItem(key);
                }
            });
        } catch (error) {
            console.warn('Failed to clear subject data:', error);
        }
    }

    private monitorConsentCompliance(): void {
        // Monitor for consent withdrawal requests
        // In a real implementation, this would integrate with your consent management system
    }

    private monitorDataRetention(): void {
        // Monitor data retention periods
        // This is already handled in the daily audit
    }
}

// Export singleton instance
export const complianceManager = new ComplianceManager();

// Utility functions for compliance
export const recordDataProcessing = (
    subjectId: string,
    purpose: string,
    legalBasis: string,
    dataCategories: string[]
) => {
    complianceManager.recordDataProcessing(subjectId, purpose, legalBasis, dataCategories);
};

export const recordConsent = (
    subjectId: string,
    consentType: string,
    granted: boolean,
    expiresAt?: Date
) => {
    complianceManager.recordConsent(subjectId, consentType, granted, expiresAt);
};

export const requestDataErasure = (subjectId: string) => {
    return complianceManager.requestDataErasure(subjectId);
};

export const getDataAccessReport = (subjectId: string): Record<string, unknown> => {
    return complianceManager.getDataAccessReport(subjectId);
};

export const recordDataBreach = (
    severity: DataBreachRecord['severity'],
    affectedSubjects: number,
    dataCategories: string[],
    description: string
) => {
    complianceManager.recordDataBreach(severity, affectedSubjects, dataCategories, description);
};

export const handleCCPADoNotSell = (subjectId: string) => {
    return complianceManager.handleCCPADoNotSell(subjectId);
};
