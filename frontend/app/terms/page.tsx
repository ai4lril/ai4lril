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
                <p>
                    These Terms of Service (&quot;Terms&quot;) govern your access to and use of this website and related
                    services (the &quot;Service&quot;) for contributing and reviewing language data, including but not limited to
                    speech, text, and token-level annotations. By using the Service, you agree to these Terms.
                </p>
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
                    Our processing of data is described in the <a href="/privacy" className="text-indigo-700 underline">Privacy Policy</a>.
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

            <section className="mt-10">
                <h2 className="text-xl font-semibold text-slate-800">14. Contact</h2>
                <p className="mt-3 text-slate-700">
                    For questions about these Terms, please reach out via the Contact page.
                </p>
            </section>
            </div>
        </div>
    );
}
