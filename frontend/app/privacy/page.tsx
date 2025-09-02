export default function PrivacyPage() {
    return (
        <div className="container mx-auto py-12 px-4 max-w-3xl">
            <h1 className="text-3xl font-bold text-slate-800">Privacy Policy</h1>
            <p className="mt-2 text-slate-600">Last updated: {new Date().toLocaleDateString()}</p>

            <section className="mt-8 space-y-4 text-slate-700 leading-relaxed">
                <p>
                    This Privacy Policy explains how we collect, use, store, and share information when you contribute
                    language data on this website. Our goal is to support research and development for Indian
                    languages and scripts while respecting your privacy and choices.
                </p>
            </section>

            <section className="mt-10">
                <h2 className="text-xl font-semibold text-slate-800">What we collect</h2>
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

            <section className="mt-10">
                <h2 className="text-xl font-semibold text-slate-800">How we use the data</h2>
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

            <section className="mt-10">
                <h2 className="text-xl font-semibold text-slate-800">Contact</h2>
                <p className="mt-3 text-slate-700">
                    Questions about this Privacy Policy or your data? Contact us via the Contact page or email the site
                    maintainers. We aim to respond within a reasonable timeframe.
                </p>
            </section>
        </div>
    );
}
