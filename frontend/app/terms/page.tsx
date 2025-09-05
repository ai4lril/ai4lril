import Link from 'next/link';
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Terms of Service | Usage Guidelines",
    description: "Read the terms of service for Language Data Collection. Understand our usage guidelines, data handling policies, and user responsibilities for contributing to linguistic research.",
    keywords: [
        "terms of service",
        "usage guidelines",
        "user agreement",
        "data contribution terms",
        "linguistic research terms",
        "platform usage rules",
        "open source terms",
        "language data terms"
    ],
    openGraph: {
        title: "Terms of Service | Language Data Collection",
        description: "Understand our usage guidelines and terms for contributing to linguistic research and AI development.",
        type: "website",
        images: [
            {
                url: "/og-terms.jpg",
                width: 1200,
                height: 630,
                alt: "Terms of Service - Language Data Collection",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Terms of Service | Language Data Collection",
        description: "Read our usage guidelines and terms for contributing to linguistic research.",
        images: ["/og-terms.jpg"],
    },
};

export default function TermsPage() {
    return (
        <div className="container mx-auto py-12 px-4 max-w-3xl animate-fade-in-up">
            <div className="glass rounded-2xl p-6 md:p-8 border border-slate-100 animate-bounce-in">
                <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 rounded-full bg-gradient-to-br from-purple-100 to-pink-100 animate-pulse">
                        <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                    </div>
                    <div>
                        <h1 className="text-3xl font-bold text-slate-800">Terms of Service</h1>
                        <p className="mt-1 text-slate-600">Last updated: {new Date().toLocaleDateString()}</p>
                    </div>
                </div>

                <section className="mt-8 space-y-4 text-slate-700 leading-relaxed">
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
                    <h3 className="text-lg font-semibold text-blue-800 mb-2">📋 Legal Compliance Notice</h3>
                    <p className="text-blue-700 text-sm">
                        These terms comply with international standards including GDPR, CCPA, and other privacy regulations.
                        By using this platform, you agree to our data processing practices and legal obligations.
                    </p>
                </div>

                <p>
                    These comprehensive Terms of Service (&quot;Terms&quot;) govern your access to and use of the Language Data Collection
                    platform and related services (the &quot;Service&quot;) for contributing and reviewing language data, including but
                    not limited to speech, text, and token-level annotations. These Terms incorporate our Privacy Policy,
                    Cookie Policy, and Data Processing Agreement by reference and together form the complete agreement
                    between you and us.
                </p>

                <div className="bg-green-50 border border-green-200 rounded-lg p-4 mt-4">
                    <h3 className="text-lg font-semibold text-green-800 mb-2">⚖️ Binding Legal Agreement</h3>
                    <p className="text-green-700 text-sm">
                        These Terms constitute a legally binding agreement. Please read them carefully before using our Platform.
                        If you do not agree to these Terms, you must not use our Platform.
                    </p>
                </div>
            </section>

            <section className="mt-10 animate-fade-in-up animate-delay-200">
                <h2 className="text-xl font-semibold text-slate-800 flex items-center gap-3">
                    <div className="p-2 rounded-full bg-blue-100">
                        <span className="text-sm font-bold text-blue-600">1</span>
                    </div>
                    Eligibility & Accounts
                </h2>
                <div className="mt-3 h-1 w-20 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full"></div>
                <ul className="mt-3 list-disc ml-6 space-y-2 text-slate-700">
                    <li>You must be able to form a binding contract in your jurisdiction to use the Service.</li>
                    <li>You are responsible for maintaining the confidentiality of any credentials you use.</li>
                </ul>
            </section>

            <section className="mt-10 animate-fade-in-up animate-delay-300">
                <h2 className="text-xl font-semibold text-slate-800 flex items-center gap-3">
                    <div className="p-2 rounded-full bg-emerald-100">
                        <span className="text-sm font-bold text-emerald-600">2</span>
                    </div>
                    Contributions
                </h2>
                <div className="mt-3 h-1 w-20 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-full"></div>
                <p className="mt-3 text-slate-700">
                    You may submit voice recordings, text, and annotations (collectively, &quot;Contributions&quot;). You represent
                    and warrant that you have the necessary rights to provide your Contributions and that they do not
                    infringe or violate any third-party rights, including privacy, publicity, or intellectual property
                    rights.
                </p>
                <ul className="mt-3 list-disc ml-6 space-y-2 text-slate-700">
                    <li>Do not submit content that is unlawful, defamatory, harassing, hateful, or otherwise harmful.</li>
                    <li>Do not include sensitive personal information (e.g., government IDs, financial data).</li>
                    <li>Only include third-party content if you have permission to do so.</li>
                </ul>
            </section>

            <section className="mt-10">
                <h2 className="text-xl font-semibold text-slate-800">3. Licenses to Your Contributions</h2>
                <p className="mt-3 text-slate-700">
                    To support research and development for Indian languages and scripts, you grant us and our research
                    collaborators a worldwide, non-exclusive, royalty-free, sublicensable license to use, reproduce,
                    adapt, publish, distribute, and create derivative works from your Contributions for research,
                    educational, and product-improvement purposes. Where we release datasets, we will use reasonable
                    efforts to remove direct identifiers and document any curation steps.
                </p>
            </section>

            <section className="mt-10">
                <h2 className="text-xl font-semibold text-slate-800">4. Privacy</h2>
                <p className="mt-3 text-slate-700">
                    Our processing of data is described in the <Link href="/privacy" className="text-indigo-700 underline">Privacy Policy</Link>.
                    By using the Service, you agree to that policy.
                </p>
            </section>

            <section className="mt-10">
                <h2 className="text-xl font-semibold text-slate-800">5. Community & Attribution</h2>
                <ul className="mt-3 list-disc ml-6 space-y-2 text-slate-700">
                    <li>We may publish aggregated statistics about the project and datasets.</li>
                    <li>Published datasets may include attribution and documentation describing sources and methods.</li>
                </ul>
            </section>

            <section className="mt-10">
                <h2 className="text-xl font-semibold text-slate-800">6. Prohibited Conduct</h2>
                <ul className="mt-3 list-disc ml-6 space-y-2 text-slate-700">
                    <li>Do not misuse the Service, including attempting unauthorized access or disrupting operations.</li>
                    <li>Do not submit spam, malware, or any content that harms others or the Service.</li>
                    <li>Do not attempt to reidentify individuals from anonymized datasets released by the project.</li>
                </ul>
            </section>

            <section className="mt-10">
                <h2 className="text-xl font-semibold text-slate-800">7. Intellectual Property</h2>
                <p className="mt-3 text-slate-700">
                    The Service, including its UI, code, and content (excluding user Contributions), is protected by
                    applicable intellectual property laws. You may not copy, modify, or create derivative works except as
                    permitted by law or with written permission.
                </p>
            </section>

            <section className="mt-10">
                <h2 className="text-xl font-semibold text-slate-800">8. Disclaimers</h2>
                <p className="mt-3 text-slate-700">
                    THE SERVICE IS PROVIDED &quot;AS IS&quot; WITHOUT WARRANTIES OF ANY KIND, WHETHER EXPRESS OR IMPLIED,
                    INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE,
                    AND NON-INFRINGEMENT. We do not guarantee that the Service will be uninterrupted, error-free, or
                    secure.
                </p>
            </section>

            <section className="mt-10">
                <h2 className="text-xl font-semibold text-slate-800">9. Limitation of Liability</h2>
                <p className="mt-3 text-slate-700">
                    TO THE MAXIMUM EXTENT PERMITTED BY LAW, WE AND OUR COLLABORATORS WILL NOT BE LIABLE FOR ANY INDIRECT,
                    INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR REVENUES, WHETHER
                    INCURRED DIRECTLY OR INDIRECTLY, OR ANY LOSS OF DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES,
                    RESULTING FROM YOUR ACCESS TO OR USE OF (OR INABILITY TO USE) THE SERVICE.
                </p>
            </section>

            <section className="mt-10">
                <h2 className="text-xl font-semibold text-slate-800">10. Indemnification</h2>
                <p className="mt-3 text-slate-700">
                    You agree to indemnify and hold harmless the project maintainers and collaborators from and against
                    any claims, liabilities, damages, losses, and expenses arising out of or in any way connected with
                    your use of the Service or your Contributions.
                </p>
            </section>

            <section className="mt-10">
                <h2 className="text-xl font-semibold text-slate-800">11. Termination</h2>
                <p className="mt-3 text-slate-700">
                    We may suspend or terminate your access to the Service at any time for any reason, including for
                    violating these Terms. Upon termination, Sections that by their nature should survive will survive
                    (e.g., Licenses to Contributions, Disclaimers, Limitation of Liability, Indemnification).
                </p>
            </section>

            <section className="mt-10">
                <h2 className="text-xl font-semibold text-slate-800">12. Changes to the Service or Terms</h2>
                <p className="mt-3 text-slate-700">
                    We may update the Service and these Terms from time to time. If changes are material, we will take
                    reasonable steps to notify users (e.g., via this page). Your continued use of the Service after
                    changes become effective constitutes acceptance of the updated Terms.
                </p>
            </section>

            <section className="mt-10">
                <h2 className="text-xl font-semibold text-slate-800">13. Governing Law</h2>
                <p className="mt-3 text-slate-700">
                    These Terms are governed by the laws of the jurisdiction where the project is primarily operated,
                    without regard to its conflict of law principles.
                </p>
            </section>

            {/* Data Processing Agreement */}
            <section className="mt-10 animate-fade-in-up animate-delay-400">
                <h2 className="text-xl font-semibold text-slate-800 flex items-center gap-3">
                    <div className="p-2 rounded-full bg-purple-100">
                        <span className="text-sm font-bold text-purple-600">15</span>
                    </div>
                    Data Processing Agreement (GDPR Article 28)
                </h2>
                <div className="mt-3 h-1 w-20 bg-gradient-to-r from-purple-400 to-purple-600 rounded-full"></div>

                <div className="mt-4 space-y-4">
                    <p className="text-slate-700">
                        If you are processing personal data on behalf of a controller (data controller), you agree to:
                    </p>

                    <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                        <h3 className="font-semibold text-purple-800 mb-2">Controller-Processor Obligations</h3>
                        <ul className="list-disc ml-6 space-y-1 text-purple-700">
                            <li>Process personal data only on documented instructions from the controller</li>
                            <li>Implement appropriate technical and organizational measures for security</li>
                            <li>Ensure that persons authorized to process data are committed to confidentiality</li>
                            <li>Assist the controller in responding to data subject rights requests</li>
                            <li>Cooperate with supervisory authorities regarding data processing activities</li>
                            <li>Notify the controller of any personal data breaches within 24 hours</li>
                            <li>Make available all information necessary to demonstrate compliance</li>
                            <li>Delete or return personal data at the end of the processing relationship</li>
                        </ul>
                    </div>

                    <p className="text-slate-700">
                        Our Data Processing Agreement template is available upon request and incorporates these GDPR requirements.
                    </p>
                </div>
            </section>

            {/* Limitation of Liability */}
            <section className="mt-10 animate-fade-in-up animate-delay-500">
                <h2 className="text-xl font-semibold text-slate-800 flex items-center gap-3">
                    <div className="p-2 rounded-full bg-red-100">
                        <span className="text-sm font-bold text-red-600">16</span>
                    </div>
                    Limitation of Liability
                </h2>
                <div className="mt-3 h-1 w-20 bg-gradient-to-r from-red-400 to-red-600 rounded-full"></div>

                <div className="mt-4 space-y-4">
                    <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                        <h3 className="font-semibold text-red-800 mb-2">⚠️ Important Liability Limitations</h3>
                        <p className="text-red-700 text-sm mb-3">
                            Please read this section carefully as it limits our liability to you.
                        </p>
                        <ul className="list-disc ml-6 space-y-1 text-red-700">
                            <li><strong>Exclusion of Indirect Damages:</strong> We are not liable for indirect, incidental, consequential, special, or punitive damages</li>
                            <li><strong>Data Loss:</strong> We are not liable for any loss or corruption of your data</li>
                            <li><strong>Service Interruptions:</strong> We are not liable for service interruptions or unavailability</li>
                            <li><strong>Third-Party Actions:</strong> We are not liable for actions of third parties using our platform</li>
                            <li><strong>Maximum Liability:</strong> Our total liability is limited to the amount paid by you in the 12 months preceding the claim</li>
                        </ul>
                    </div>

                    <p className="text-slate-700">
                        These limitations apply to the maximum extent permitted by applicable law. Some jurisdictions
                        do not allow the exclusion of certain warranties or limitation of liability, so some of the
                        above limitations may not apply to you.
                    </p>
                </div>
            </section>

            {/* Indemnification */}
            <section className="mt-10 animate-fade-in-up animate-delay-600">
                <h2 className="text-xl font-semibold text-slate-800 flex items-center gap-3">
                    <div className="p-2 rounded-full bg-orange-100">
                        <span className="text-sm font-bold text-orange-600">17</span>
                    </div>
                    Indemnification
                </h2>
                <div className="mt-3 h-1 w-20 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full"></div>

                <div className="mt-4 space-y-4">
                    <p className="text-slate-700">
                        You agree to indemnify, defend, and hold harmless Language Data Collection, its officers,
                        directors, employees, agents, and affiliates from and against any and all claims, demands,
                        actions, damages, losses, costs, liabilities, and expenses (including attorneys&apos; fees)
                        arising out of or related to:
                    </p>

                    <ul className="list-disc ml-6 space-y-2 text-slate-700">
                        <li>Your use of the Service</li>
                        <li>Your violation of these Terms</li>
                        <li>Your violation of any third-party rights</li>
                        <li>Your violation of applicable laws or regulations</li>
                        <li>Any content you submit or make available through the Service</li>
                    </ul>

                    <p className="text-slate-700">
                        We reserve the right to assume the exclusive defense and control of any matter subject to
                        indemnification by you, and you agree to cooperate with our defense of such claims.
                    </p>
                </div>
            </section>

            {/* Dispute Resolution */}
            <section className="mt-10 animate-fade-in-up animate-delay-700">
                <h2 className="text-xl font-semibold text-slate-800 flex items-center gap-3">
                    <div className="p-2 rounded-full bg-teal-100">
                        <span className="text-sm font-bold text-teal-600">18</span>
                    </div>
                    Dispute Resolution
                </h2>
                <div className="mt-3 h-1 w-20 bg-gradient-to-r from-teal-400 to-teal-600 rounded-full"></div>

                <div className="mt-4 space-y-4">
                    <div className="bg-teal-50 border border-teal-200 rounded-lg p-4">
                        <h3 className="font-semibold text-teal-800 mb-2">Dispute Resolution Process</h3>
                        <ol className="list-decimal ml-6 space-y-2 text-teal-700">
                            <li><strong>Informal Resolution:</strong> Contact us first to seek an informal resolution</li>
                            <li><strong>Mediation:</strong> If informal resolution fails, we agree to participate in mediation</li>
                            <li><strong>Arbitration:</strong> Any disputes not resolved through mediation will be resolved through binding arbitration</li>
                            <li><strong>Class Action Waiver:</strong> You agree to resolve disputes only on an individual basis, not as a class action</li>
                        </ol>
                    </div>

                    <p className="text-slate-700">
                        This dispute resolution process applies to the maximum extent permitted by applicable law.
                        Nothing in this section prevents us from seeking injunctive relief in court for violations
                        of intellectual property rights or other proprietary rights.
                    </p>
                </div>
            </section>

            {/* Force Majeure */}
            <section className="mt-10 animate-fade-in-up animate-delay-800">
                <h2 className="text-xl font-semibold text-slate-800 flex items-center gap-3">
                    <div className="p-2 rounded-full bg-gray-100">
                        <span className="text-sm font-bold text-gray-600">19</span>
                    </div>
                    Force Majeure
                </h2>
                <div className="mt-3 h-1 w-20 bg-gradient-to-r from-gray-400 to-gray-600 rounded-full"></div>

                <p className="mt-3 text-slate-700">
                    We will not be liable for any failure or delay in performing our obligations under these Terms
                    that is due to events beyond our reasonable control, including but not limited to natural disasters,
                    war, terrorism, riots, embargoes, acts of civil or military authorities, fire, floods, accidents,
                    pandemics, strikes, or shortages of transportation facilities, fuel, energy, labor, or materials.
                </p>
            </section>

            {/* Severability */}
            <section className="mt-10 animate-fade-in-up animate-delay-900">
                <h2 className="text-xl font-semibold text-slate-800 flex items-center gap-3">
                    <div className="p-2 rounded-full bg-indigo-100">
                        <span className="text-sm font-bold text-indigo-600">20</span>
                    </div>
                    Severability
                </h2>
                <div className="mt-3 h-1 w-20 bg-gradient-to-r from-indigo-400 to-indigo-600 rounded-full"></div>

                <p className="mt-3 text-slate-700">
                    If any provision of these Terms is found to be unenforceable or invalid, that provision will be
                    limited or eliminated to the minimum extent necessary so that the Terms will otherwise remain
                    in full force and effect and enforceable.
                </p>
            </section>

            {/* Waiver */}
            <section className="mt-10 animate-fade-in-up animate-delay-1000">
                <h2 className="text-xl font-semibold text-slate-800 flex items-center gap-3">
                    <div className="p-2 rounded-full bg-pink-100">
                        <span className="text-sm font-bold text-pink-600">21</span>
                    </div>
                    Waiver
                </h2>
                <div className="mt-3 h-1 w-20 bg-gradient-to-r from-pink-400 to-pink-600 rounded-full"></div>

                <p className="mt-3 text-slate-700">
                    No waiver of any term of these Terms shall be deemed a further or continuing waiver of such term
                    or any other term, and our failure to assert any right or provision under these Terms shall not
                    constitute a waiver of such right or provision.
                </p>
            </section>

            {/* Entire Agreement */}
            <section className="mt-10 animate-fade-in-up animate-delay-1100">
                <h2 className="text-xl font-semibold text-slate-800 flex items-center gap-3">
                    <div className="p-2 rounded-full bg-green-100">
                        <span className="text-sm font-bold text-green-600">22</span>
                    </div>
                    Entire Agreement
                </h2>
                <div className="mt-3 h-1 w-20 bg-gradient-to-r from-green-400 to-green-600 rounded-full"></div>

                <p className="mt-3 text-slate-700">
                    These Terms, together with our Privacy Policy, Cookie Policy, and any other legal notices
                    published by us on the Service, constitute the entire agreement between you and us regarding
                    the use of the Service and supersede all prior and contemporaneous written or oral agreements
                    between you and us.
                </p>
            </section>

            <section className="mt-10">
                <h2 className="text-xl font-semibold text-slate-800">Contact & Legal Notices</h2>
                <div className="mt-4 space-y-4">
                    <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                        <h3 className="font-semibold text-gray-800 mb-2">General Inquiries</h3>
                        <p className="text-gray-700">
                            For questions about these Terms, please reach out via the Contact page or email us at:
                            <strong> legal@language-data-collection.org</strong>
                        </p>
                    </div>

                    <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                        <h3 className="font-semibold text-gray-800 mb-2">Legal Notices</h3>
                        <p className="text-gray-700">
                            For service of legal notices, please contact our legal department at:
                            <strong> legal@language-data-collection.org</strong>
                        </p>
                    </div>

                    <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                        <h3 className="font-semibold text-gray-800 mb-2">Data Protection Officer</h3>
                        <p className="text-gray-700">
                            Our Data Protection Officer can be contacted at:
                            <strong> dpo@language-data-collection.org</strong>
                        </p>
                    </div>

                    <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                        <h3 className="font-semibold text-yellow-800 mb-2">⚠️ Important Notice</h3>
                        <p className="text-yellow-700 text-sm">
                            These Terms were last updated on {new Date().toLocaleDateString()}. We reserve the right to
                            modify these Terms at any time. Your continued use of the Service after any such changes
                            constitutes your acceptance of the new Terms.
                        </p>
                    </div>
                </div>
            </section>
            </div>
        </div>
    );
}
