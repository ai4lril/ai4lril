import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Privacy Policy | Data Protection & Rights",
    description: "Learn about how Language Data Collection protects your privacy, handles your data, and ensures ethical data practices. Understand your rights and our commitment to data security.",
    keywords: [
        "privacy policy",
        "data protection",
        "GDPR compliance",
        "user rights",
        "data security",
        "privacy practices",
        "language data privacy",
        "ethical data collection"
    ],
    openGraph: {
        title: "Privacy Policy | Language Data Collection",
        description: "Learn about our commitment to protecting your privacy and ensuring ethical data practices in linguistic research.",
        type: "website",
        images: [
            {
                url: "/og-privacy.jpg",
                width: 1200,
                height: 630,
                alt: "Privacy Policy - Language Data Collection",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Privacy Policy | Language Data Collection",
        description: "Learn about our data protection practices and privacy commitment.",
        images: ["/og-privacy.jpg"],
    },
};

export default function PrivacyPage() {
    return (
        <div className="container mx-auto py-12 px-4 max-w-3xl animate-fade-in-up">
            <div className="glass rounded-2xl p-6 md:p-8 border border-slate-100 animate-bounce-in">
                <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 rounded-full bg-gradient-to-br from-blue-100 to-indigo-100 animate-pulse">
                        <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                        </svg>
                    </div>
                    <div>
                        <h1 className="text-3xl font-bold text-slate-800">Privacy Policy</h1>
                        <p className="mt-1 text-slate-600">Last updated: {new Date().toLocaleDateString()}</p>
                    </div>
                </div>

                <section className="mt-8 space-y-4 text-slate-700 leading-relaxed">
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
                        <h3 className="text-lg font-semibold text-blue-800 mb-2">🏛️ Compliance Notice</h3>
                        <p className="text-blue-700 text-sm">
                            This platform complies with GDPR (EU), CCPA (California), PIPEDA (Canada), LGPD (Brazil),
                            and other international privacy regulations. Your data rights are protected globally.
                        </p>
                    </div>

                    <p>
                        This comprehensive Privacy Policy explains how Language Data Collection (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;)
                        collects, uses, stores, processes, and shares information when you use our platform. We are
                        committed to protecting your privacy and ensuring compliance with all applicable data protection
                        laws while supporting ethical linguistic research and development.
                    </p>

                    <div className="bg-green-50 border border-green-200 rounded-lg p-4 mt-4">
                        <h3 className="text-lg font-semibold text-green-800 mb-2">🔒 Your Data Security is Our Priority</h3>
                        <p className="text-green-700 text-sm">
                            We employ enterprise-grade security measures including encryption, access controls,
                            and continuous monitoring to protect your personal information.
                        </p>
                    </div>
                </section>

                <section className="mt-10 animate-fade-in-up animate-delay-200">
                    <h2 className="text-xl font-semibold text-slate-800 flex items-center gap-3">
                        <div className="p-2 rounded-full bg-indigo-100">
                            <svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                            </svg>
                        </div>
                        What we collect
                    </h2>
                    <div className="mt-3 h-1 w-20 bg-gradient-to-r from-indigo-400 to-indigo-600 rounded-full"></div>
                    <ul className="mt-3 list-disc ml-6 space-y-2 text-slate-700">
                        <li>
                            <span className="font-medium">Voice data (optional).</span> Audio recordings you submit during tasks like
                            scripted or spontaneous speech.
                        </li>
                        <li>
                            <span className="font-medium">Text data.</span> Typed content (e.g., questions, answers) and token-level annotations
                            for tasks such as Part-of-Speech (POS) tagging and Named Entity Recognition (NER).
                        </li>
                        <li>
                            <span className="font-medium">Task metadata.</span> Language/script selection, prompt identifiers, timestamps, and
                            non-identifying contribution context (e.g., which sentence was annotated).
                        </li>
                        <li>
                            <span className="font-medium">Technical information.</span> Basic logs and aggregated telemetry necessary to keep the
                            service reliable and secure (e.g., error events, page loads). We do not profile individuals.
                        </li>
                    </ul>
                </section>

                <section className="mt-10 animate-fade-in-up animate-delay-300">
                    <h2 className="text-xl font-semibold text-slate-800 flex items-center gap-3">
                        <div className="p-2 rounded-full bg-emerald-100">
                            <svg className="w-5 h-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                            </svg>
                        </div>
                        How we use the data
                    </h2>
                    <div className="mt-3 h-1 w-20 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-full"></div>
                    <ul className="mt-3 list-disc ml-6 space-y-2 text-slate-700">
                        <li>Build and evaluate open, research-grade datasets for Indian languages and scripts.</li>
                        <li>Develop, test, and improve language technologies (e.g., ASR, POS, NER, transcription tools).</li>
                        <li>Ensure data quality via validation, de-duplication, and aggregation.</li>
                        <li>Produce anonymized statistics (e.g., number of speakers, hours recorded, annotation counts).</li>
                    </ul>
                    <p className="mt-3 text-slate-700">
                        We do not use your contributions to create personalized profiles or target advertising.
                    </p>
                </section>

                <section className="mt-10">
                    <h2 className="text-xl font-semibold text-slate-800">Legal bases (where applicable)</h2>
                    <ul className="mt-3 list-disc ml-6 space-y-2 text-slate-700">
                        <li><span className="font-medium">Consent</span> for voluntary submissions (audio, text, annotations).</li>
                        <li><span className="font-medium">Legitimate interests</span> to secure and maintain the platform.</li>
                    </ul>
                </section>

                <section className="mt-10">
                    <h2 className="text-xl font-semibold text-slate-800">Data sharing</h2>
                    <ul className="mt-3 list-disc ml-6 space-y-2 text-slate-700">
                        <li>
                            <span className="font-medium">Open research use.</span> We may publish anonymized, curated datasets for
                            academic/educational purposes. When we do, we remove direct identifiers and include only
                            information needed for linguistic research.
                        </li>
                        <li>
                            <span className="font-medium">Service providers.</span> We may use infrastructure providers (e.g., hosting,
                            storage) under agreements that limit use of data to providing their services to us.
                        </li>
                        <li>
                            <span className="font-medium">Legal requirements.</span> We may disclose information if required by applicable law
                            or to protect the rights, safety, and security of users and the platform.
                        </li>
                    </ul>
                </section>

                <section className="mt-10">
                    <h2 className="text-xl font-semibold text-slate-800">Data minimization and retention</h2>
                    <p className="mt-3 text-slate-700">
                        We collect only what is necessary for linguistic research and platform operation. Raw logs are kept
                        for limited periods to ensure reliability and security. Research datasets may be retained for longer
                        to support reproducibility and longitudinal studies. If you withdraw specific submissions (see
                        “Your choices”), we will stop using them in future releases where feasible.
                    </p>
                </section>

                <section className="mt-10">
                    <h2 className="text-xl font-semibold text-slate-800">Security</h2>
                    <p className="mt-3 text-slate-700">
                        We use reasonable administrative, technical, and organizational measures to protect data (e.g.,
                        access controls, transport encryption). No system is perfectly secure, but we strive to reduce risk
                        and address issues promptly.
                    </p>
                </section>

                <section className="mt-10">
                    <h2 className="text-xl font-semibold text-slate-800">International data transfers</h2>
                    <p className="mt-3 text-slate-700">
                        Depending on your location, data may be processed in regions with different data protection laws.
                        Where required, we apply safeguards (such as standard contractual clauses) for cross-border
                        transfers.
                    </p>
                </section>

                <section className="mt-10">
                    <h2 className="text-xl font-semibold text-slate-800">Children’s privacy</h2>
                    <p className="mt-3 text-slate-700">
                        This platform is intended for adults. If you believe a child has submitted data without appropriate
                        consent, contact us and we will address it.
                    </p>
                </section>

                <section className="mt-10">
                    <h2 className="text-xl font-semibold text-slate-800">Your choices & rights</h2>
                    <ul className="mt-3 list-disc ml-6 space-y-2 text-slate-700">
                        <li>Access or request a copy of your contributions where feasible.</li>
                        <li>Request correction or deletion of specific submissions (subject to research constraints).</li>
                        <li>Withdraw consent for future use of identifiable submissions.</li>
                        <li>Object to or restrict certain processing where applicable law provides such rights.</li>
                    </ul>
                    <p className="mt-3 text-slate-700">
                        To exercise these options, contact us using the details below. We may need to verify your request.
                    </p>
                </section>

                <section className="mt-10">
                    <h2 className="text-xl font-semibold text-slate-800">Cookies and local storage</h2>
                    <p className="mt-3 text-slate-700">
                        We use minimal client-side storage (e.g., language preference) and essential cookies to provide core
                        functionality and improve usability. We do not use cookies for advertising or cross-site tracking.
                    </p>
                </section>

                <section className="mt-10">
                    <h2 className="text-xl font-semibold text-slate-800">Research releases & attribution</h2>
                    <p className="mt-3 text-slate-700">
                        If we release datasets, we provide documentation describing collection methods, anonymization, and
                        known limitations. Published datasets may be licensed for research/educational purposes with
                        attribution. Please review dataset documentation for exact terms.
                    </p>
                </section>

                <section className="mt-10">
                    <h2 className="text-xl font-semibold text-slate-800">Changes to this policy</h2>
                    <p className="mt-3 text-slate-700">
                        We may update this Privacy Policy from time to time. Significant changes will be highlighted on this
                        page with a new “Last updated” date.
                    </p>
                </section>

                {/* GDPR Compliance Section */}
                <section className="mt-10 animate-fade-in-up animate-delay-400">
                    <h2 className="text-xl font-semibold text-slate-800 flex items-center gap-3">
                        <div className="p-2 rounded-full bg-blue-100">
                            <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        GDPR Compliance (EU Residents)
                    </h2>
                    <div className="mt-3 h-1 w-20 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full"></div>

                    <div className="mt-4 space-y-4">
                        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                            <h3 className="font-semibold text-blue-800 mb-2">Your GDPR Rights</h3>
                            <ul className="list-disc ml-6 space-y-1 text-blue-700">
                                <li><strong>Right to Access:</strong> Request a copy of your personal data</li>
                                <li><strong>Right to Rectification:</strong> Correct inaccurate personal data</li>
                                <li><strong>Right to Erasure:</strong> Request deletion of your personal data</li>
                                <li><strong>Right to Restrict Processing:</strong> Limit how we process your data</li>
                                <li><strong>Right to Data Portability:</strong> Receive your data in a structured format</li>
                                <li><strong>Right to Object:</strong> Object to processing based on legitimate interests</li>
                            </ul>
                        </div>

                        <p className="text-slate-700">
                            As a GDPR-compliant platform, we process personal data only with a lawful basis, implement
                            appropriate technical and organizational measures, and respect all data subject rights.
                            Our Data Protection Officer can be contacted for GDPR-related inquiries.
                        </p>
                    </div>
                </section>

                {/* CCPA Compliance Section */}
                <section className="mt-10 animate-fade-in-up animate-delay-500">
                    <h2 className="text-xl font-semibold text-slate-800 flex items-center gap-3">
                        <div className="p-2 rounded-full bg-orange-100">
                            <svg className="w-5 h-5 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                        </div>
                        CCPA Compliance (California Residents)
                    </h2>
                    <div className="mt-3 h-1 w-20 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full"></div>

                    <div className="mt-4 space-y-4">
                        <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                            <h3 className="font-semibold text-orange-800 mb-2">Your CCPA Rights</h3>
                            <ul className="list-disc ml-6 space-y-1 text-orange-700">
                                <li><strong>Right to Know:</strong> What personal information we collect and use</li>
                                <li><strong>Right to Delete:</strong> Request deletion of your personal information</li>
                                <li><strong>Right to Correct:</strong> Correct inaccurate personal information</li>
                                <li><strong>Right to Opt-Out:</strong> Opt-out of sale/sharing of personal information</li>
                                <li><strong>Right to Non-Discrimination:</strong> No discrimination for exercising rights</li>
                            </ul>
                        </div>

                        <p className="text-slate-700">
                            California residents have additional rights under CCPA. We do not sell personal information
                            to third parties. You can exercise your CCPA rights by contacting us through our Data Rights Portal.
                        </p>
                    </div>
                </section>

                {/* Data Breach Notification */}
                <section className="mt-10 animate-fade-in-up animate-delay-600">
                    <h2 className="text-xl font-semibold text-slate-800 flex items-center gap-3">
                        <div className="p-2 rounded-full bg-red-100">
                            <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
                            </svg>
                        </div>
                        Data Breach Notification
                    </h2>
                    <div className="mt-3 h-1 w-20 bg-gradient-to-r from-red-400 to-red-600 rounded-full"></div>

                    <p className="mt-3 text-slate-700">
                        In the event of a security breach affecting personal data, we will:
                    </p>
                    <ul className="mt-3 list-disc ml-6 space-y-2 text-slate-700">
                        <li>Notify affected individuals within 72 hours (GDPR requirement)</li>
                        <li>Report to relevant data protection authorities within required timeframes</li>
                        <li>Provide clear information about the breach and potential risks</li>
                        <li>Offer guidance on protective measures you can take</li>
                        <li>Maintain detailed breach logs for compliance and improvement</li>
                    </ul>
                </section>

                {/* International Data Transfers */}
                <section className="mt-10 animate-fade-in-up animate-delay-700">
                    <h2 className="text-xl font-semibold text-slate-800 flex items-center gap-3">
                        <div className="p-2 rounded-full bg-purple-100">
                            <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        International Data Transfers & Safeguards
                    </h2>
                    <div className="mt-3 h-1 w-20 bg-gradient-to-r from-purple-400 to-purple-600 rounded-full"></div>

                    <div className="mt-4 space-y-4">
                        <p className="text-slate-700">
                            Your data may be transferred to and processed in countries other than your own. We ensure
                            adequate protection through:
                        </p>

                        <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                            <h3 className="font-semibold text-purple-800 mb-2">Transfer Safeguards</h3>
                            <ul className="list-disc ml-6 space-y-1 text-purple-700">
                                <li>Standard Contractual Clauses (SCCs) approved by EU authorities</li>
                                <li>Adequacy decisions for certain countries</li>
                                <li>Binding Corporate Rules (BCRs) for intra-group transfers</li>
                                <li>Certification schemes and codes of conduct</li>
                                <li>Approved certification mechanisms</li>
                            </ul>
                        </div>

                        <p className="text-slate-700">
                            You can obtain a copy of our transfer safeguards by contacting our Data Protection Officer.
                        </p>
                    </div>
                </section>

                {/* Data Subject Rights Portal */}
                <section className="mt-10 animate-fade-in-up animate-delay-800">
                    <h2 className="text-xl font-semibold text-slate-800 flex items-center gap-3">
                        <div className="p-2 rounded-full bg-teal-100">
                            <svg className="w-5 h-5 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
                            </svg>
                        </div>
                        Data Subject Rights Portal
                    </h2>
                    <div className="mt-3 h-1 w-20 bg-gradient-to-r from-teal-400 to-teal-600 rounded-full"></div>

                    <div className="mt-4 space-y-4">
                        <p className="text-slate-700">
                            To exercise your data protection rights, please use our Data Subject Rights Portal:
                        </p>

                        <div className="bg-teal-50 border border-teal-200 rounded-lg p-4">
                            <h3 className="font-semibold text-teal-800 mb-2">Available Actions</h3>
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-teal-700">
                                <li>• Request data access report</li>
                                <li>• Request data rectification</li>
                                <li>• Request data erasure</li>
                                <li>• Request data portability</li>
                                <li>• Withdraw consent</li>
                                <li>• Lodge a complaint</li>
                            </ul>
                        </div>

                        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                            <h3 className="font-semibold text-yellow-800 mb-2">⚠️ Important Notice</h3>
                            <p className="text-yellow-700 text-sm">
                                For security purposes, we may need to verify your identity before processing
                                data subject rights requests. This may involve requesting specific information
                                to confirm your identity and prevent unauthorized access.
                            </p>
                        </div>
                    </div>
                </section>

                <section className="mt-10">
                    <h2 className="text-xl font-semibold text-slate-800">Contact & Data Protection Officer</h2>
                    <div className="mt-4 space-y-4">
                        <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                            <h3 className="font-semibold text-gray-800 mb-2">General Inquiries</h3>
                            <p className="text-gray-700">
                                Questions about this Privacy Policy or your data? Contact us via the Contact page
                                or email our Data Protection Officer at: <strong>dpo@language-data-collection.org</strong>
                            </p>
                        </div>

                        <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                            <h3 className="font-semibold text-gray-800 mb-2">Data Subject Rights</h3>
                            <p className="text-gray-700">
                                To exercise your GDPR, CCPA, or other data protection rights, please visit our
                                Data Subject Rights Portal or contact our Data Protection Officer directly.
                            </p>
                        </div>

                        <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                            <h3 className="font-semibold text-gray-800 mb-2">Response Times</h3>
                            <ul className="list-disc ml-6 space-y-1 text-gray-700">
                                <li>General inquiries: Within 5 business days</li>
                                <li>Data subject rights requests: Within 30 days (GDPR requirement)</li>
                                <li>Urgent security concerns: Within 24 hours</li>
                            </ul>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}
