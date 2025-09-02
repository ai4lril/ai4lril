import { contributors } from './contributors';
import Image from 'next/image';

export default function AboutPage() {

    return (
        <div className="w-full max-w-2xl md:max-w-4xl mx-auto py-12 md:py-16 px-4">
            {/* Hero / Mission */}
            <header className="relative" id="mission">
                <div className="absolute inset-0 -z-10 bg-gradient-to-b from-blue-50/40 to-indigo-50/20 rounded-2xl blur-xl"></div>
                <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-800">About us</h1>
                <p className="mt-3 text-slate-600 text-lg leading-relaxed">
                    We build practical tools to collect, annotate, and curate language data for underrepresented Indian languages and scripts. Our mission is to empower communities and researchers with ethical, accessible, and extensible workflows—aligned with the spirit of community projects like Common Voice, but focused on Indian languages.
                </p>
                <div className="mt-6 flex justify-center">
                    <Image src="/globe.svg" alt="Illustration of global languages and scripts" width={120} height={120} />
                </div>
                <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
                    <div className="rounded-lg border border-slate-200 bg-white py-3 px-2">
                        <div className="text-xl font-bold text-slate-900">3</div>
                        <div className="text-xs text-slate-600">Languages</div>
                    </div>
                    <div className="rounded-lg border border-slate-200 bg-white py-3 px-2">
                        <div className="text-xl font-bold text-slate-900">6</div>
                        <div className="text-xs text-slate-600">Scripts</div>
                    </div>
                    <div className="rounded-lg border border-slate-200 bg-white py-3 px-2">
                        <div className="text-xl font-bold text-slate-900">1000+</div>
                        <div className="text-xs text-slate-600">Tokens annotated</div>
                    </div>
                    <div className="rounded-lg border border-slate-200 bg-white py-3 px-2">
                        <div className="text-xl font-bold text-slate-900">Community-first</div>
                        <div className="text-xs text-slate-600">Ethical collection</div>
                    </div>
                </div>
            </header>

            {/* What we collect */}
            <section className="mt-12" id="what-we-collect">
                <h2 className="text-xl font-semibold text-slate-800">
                    <span className="inline-block relative pb-1">
                        What we collect
                        <span className="absolute -bottom-0.5 left-0 w-full h-[2px] bg-gradient-to-r from-indigo-500 to-purple-500"></span>
                    </span>
                </h2>
                <p className="mt-2 text-slate-600">We support multiple data types to build robust, inclusive language resources.</p>

                <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="card rounded-2xl p-4 transition hover:shadow-lg hover:-translate-y-0.5">
                        <Image src="/window.svg" alt="Scripted speech icon" width={28} height={28} className="mb-2 opacity-80" />
                        <h3 className="font-medium text-slate-800">Scripted Speech</h3>
                        <p className="mt-1 text-sm text-slate-600">Contributors read prompts aloud to gather clear pronunciation across scripts and dialects.</p>
                    </div>
                    <div className="card rounded-2xl p-4 transition hover:shadow-lg hover:-translate-y-0.5">
                        <Image src="/vercel.svg" alt="Spontaneous speech icon" width={28} height={28} className="mb-2 opacity-80" />
                        <h3 className="font-medium text-slate-800">Spontaneous Speech</h3>
                        <p className="mt-1 text-sm text-slate-600">Upcoming: natural responses to prompts for conversational diversity and realistic acoustic conditions.</p>
                    </div>
                    <div className="card rounded-2xl p-4 transition hover:shadow-lg hover:-translate-y-0.5">
                        <Image src="/file.svg" alt="Transcription icon" width={28} height={28} className="mb-2 opacity-80" />
                        <h3 className="font-medium text-slate-800">Transcriptions</h3>
                        <p className="mt-1 text-sm text-slate-600">Text transcriptions of audio clips help train ASR models and enable search.</p>
                    </div>
                    <div className="card rounded-2xl p-4 transition hover:shadow-lg hover:-translate-y-0.5">
                        {/* <Image src="/next.svg" alt="Token classification icon" width={28} height={28} className="mb-2 opacity-80" /> */}
                        <h3 className="font-medium text-slate-800">Token Classification (POS & NER)</h3>
                        <p className="mt-1 text-sm text-slate-600">Word-by-word UPOS tags and span-level BIO tags to support downstream NLP tasks.</p>
                    </div>
                </div>
            </section>

            {/* How it works */}
            <section className="mt-12" id="how-it-works">
                <div className="flex justify-end mb-3">
                    <Image src="/file.svg" alt="How it works diagram" width={80} height={80} />
                </div>
                <h2 className="text-xl font-semibold text-slate-800">
                    <span className="inline-block relative pb-1">
                        How it works
                        <span className="absolute -bottom-0.5 left-0 w-full h-[2px] bg-gradient-to-r from-indigo-500 to-purple-500"></span>
                    </span>
                </h2>
                <ol className="mt-3 grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-slate-700">
                    <li className="card rounded-2xl p-4 border border-slate-200 transition hover:shadow-lg">
                        <div className="font-semibold text-slate-800 flex items-center gap-2"><span className="inline-flex items-center justify-center w-5 h-5 text-xs rounded-full bg-indigo-100 text-indigo-700">1</span> Contribute</div>
                        <p className="mt-1">Record speech, transcribe, or annotate tokens. Choose your language and script via the language switcher.</p>
                    </li>
                    <li className="card rounded-2xl p-4 border border-slate-200 transition hover:shadow-lg">
                        <div className="font-semibold text-slate-800 flex items-center gap-2"><span className="inline-flex items-center justify-center w-5 h-5 text-xs rounded-full bg-indigo-100 text-indigo-700">2</span> Validate</div>
                        <p className="mt-1">Peers review submissions for clarity and correctness using simple yes/no checks.</p>
                    </li>
                    <li className="card rounded-2xl p-4 border border-slate-200 transition hover:shadow-lg">
                        <div className="font-semibold text-slate-800 flex items-center gap-2"><span className="inline-flex items-center justify-center w-5 h-5 text-xs rounded-full bg-indigo-100 text-indigo-700">3</span> Token Classification</div>
                        <p className="mt-1">Assign UPOS tags or BIO entity labels, with script-aware tokenization and span support.</p>
                    </li>
                    <li className="card rounded-2xl p-4 border border-slate-200 transition hover:shadow-lg">
                        <div className="font-semibold text-slate-800 flex items-center gap-2"><span className="inline-flex items-center justify-center w-5 h-5 text-xs rounded-full bg-indigo-100 text-indigo-700">4</span> Release</div>
                        <p className="mt-1">Aggregated, anonymized datasets will be made available for research with clear licenses.</p>
                    </li>
                </ol>
            </section>

            {/* Community impact */}
            <section className="mt-12" id="community-impact">
                <h2 className="text-xl font-semibold text-slate-800">
                    <span className="inline-block relative pb-1">
                        Community impact
                        <span className="absolute -bottom-0.5 left-0 w-full h-[2px] bg-gradient-to-r from-indigo-500 to-purple-500"></span>
                    </span>
                </h2>
                <p className="mt-2 text-slate-600">We center low‑resourced languages and zero‑resourced scripts, with community review to ensure quality and respect.</p>
                <div className="mt-4 flex justify-center">
                    <Image src="/globe.svg" alt="Community impact illustration" width={96} height={96} />
                </div>
                <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
                    <div className="rounded-lg border border-slate-200 bg-white py-3 px-2">
                        <div className="text-sm text-slate-600">Focus</div>
                        <div className="text-base font-semibold text-slate-900">Indian languages</div>
                    </div>
                    <div className="rounded-lg border border-slate-200 bg-white py-3 px-2">
                        <div className="text-sm text-slate-600">Inclusion</div>
                        <div className="text-base font-semibold text-slate-900">Low/zero resourced</div>
                    </div>
                    <div className="rounded-lg border border-slate-200 bg-white py-3 px-2">
                        <div className="text-sm text-slate-600">Quality</div>
                        <div className="text-base font-semibold text-slate-900">Peer validation</div>
                    </div>
                    <div className="rounded-lg border border-slate-200 bg-white py-3 px-2">
                        <div className="text-sm text-slate-600">Access</div>
                        <div className="text-base font-semibold text-slate-900">Open practices</div>
                    </div>
                </div>
            </section>

            {/* Roadmap */}
            <section className="mt-12" id="roadmap">
                <h2 className="text-xl font-semibold text-slate-800">
                    <span className="inline-block relative pb-1">
                        Roadmap
                        <span className="absolute -bottom-0.5 left-0 w-full h-[2px] bg-gradient-to-r from-indigo-500 to-purple-500"></span>
                    </span>
                </h2>
                <div className="mt-2 flex justify-center">
                    {/* <Image src="/next.svg" alt="Roadmap timeline illustration" width={80} height={80} /> */}
                </div>
                <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="card rounded-2xl p-4 border border-slate-200">
                        <div className="font-semibold text-slate-800">Spontaneous Speech</div>
                        <p className="mt-1 text-sm text-slate-700">Launch natural prompt responses for richer accents and styles.</p>
                    </div>
                    <div className="card rounded-2xl p-4 border border-slate-200">
                        <div className="font-semibold text-slate-800">Mobile-first recordings</div>
                        <p className="mt-1 text-sm text-slate-700">Improve UI for low bandwidth and small screens.</p>
                    </div>
                    <div className="card rounded-2xl p-4 border border-slate-200">
                        <div className="font-semibold text-slate-800">Quality signals</div>
                        <p className="mt-1 text-sm text-slate-700">Rater agreement, confidence, and lightweight spam checks.</p>
                    </div>
                    <div className="card rounded-2xl p-4 border border-slate-200">
                        <div className="font-semibold text-slate-800">Research access</div>
                        <p className="mt-1 text-sm text-slate-700">APIs and periodic dataset releases with documentation.</p>
                    </div>
                </div>
            </section>

            {/* Get involved */}
            <section className="mt-12" id="get-involved">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
                    <div className="md:col-span-2">
                        <h2 className="text-xl font-semibold text-slate-800">
                            <span className="inline-block relative pb-1">
                                Get involved
                                <span className="absolute -bottom-0.5 left-0 w-full h-[2px] bg-gradient-to-r from-indigo-500 to-purple-500"></span>
                            </span>
                        </h2>
                        <p className="mt-2 text-slate-600">Interested in collaborating or contributing datasets? Reach out and join our efforts.</p>
                        <div className="mt-3">
                            <Image src="/vercel.svg" alt="Get involved illustration" width={64} height={64} />
                        </div>
                        <div className="mt-4 flex flex-wrap gap-3">
                            <a href="/contact" className="inline-block bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-4 py-2 rounded-full shadow">Contact us</a>
                            <a href="/speak" className="inline-block border border-slate-300 hover:bg-blue-50 text-slate-700 text-sm font-semibold px-4 py-2 rounded-full">Start contributing</a>
                        </div>
                    </div>
                    <aside className="card rounded-2xl p-6">
                        <div className="text-sm text-slate-600">Quick links</div>
                        <ul className="mt-2 text-sm text-slate-700 space-y-2">
                            <li><a className="text-indigo-600 hover:underline" href="#what-we-collect">What we collect</a></li>
                            <li><a className="text-indigo-600 hover:underline" href="#how-it-works">How it works</a></li>
                            <li><a className="text-indigo-600 hover:underline" href="#contributors">Contributors</a></li>
                            <li><a className="text-indigo-600 hover:underline" href="#faq">FAQ</a></li>
                        </ul>
                    </aside>
                </div>
            </section>

            {/* Contributors */}
            <section className="mt-12" id="contributors">
                <h2 className="text-xl font-semibold text-slate-800">
                    <span className="inline-block relative pb-1">
                        Contributors
                        <span className="absolute -bottom-0.5 left-0 w-full h-[2px] bg-gradient-to-r from-indigo-500 to-purple-500"></span>
                    </span>
                </h2>
                {/* <div className="mt-2">
                    <Image src="/file.svg" alt="Contributors illustration" width={64} height={64} />
                </div>
                <p className="mt-2 text-slate-600 text-sm">This list will grow as collaborators join. Additions are simple and require no layout changes.</p> */}

                <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {contributors.map((c) => (
                        <li key={c.name} className="card rounded-2xl p-6 transition hover:shadow-lg hover:-translate-y-0.5">
                            <div className="flex items-start gap-4">
                                {c.photoUrl ? (
                                    <img alt={c.name} src={c.photoUrl} className="size-12 rounded-full object-cover border border-white" />
                                ) : (
                                    <div className="size-12 rounded-full bg-gradient-to-tr from-blue-200 to-indigo-200 border border-white" />
                                )}
                                <div>
                                    <div className="flex flex-wrap items-center gap-2">
                                        <h3 className="text-base font-semibold text-slate-800">{c.name}</h3>
                                        <span className="text-[11px] px-2 py-0.5 rounded-full bg-blue-50 text-blue-700 border border-blue-200">{c.role}</span>
                                    </div>
                                    <p className="mt-2 text-slate-600 text-sm leading-relaxed">{c.bio}</p>
                                    <div className="mt-3 flex flex-wrap gap-2">
                                        {c.interests.map((i) => (
                                            <span key={i} className="text-[11px] px-2 py-0.5 rounded-full bg-slate-100 text-slate-700 border border-slate-200">{i}</span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </section>

            {/* FAQ */}
            <section className="mt-12" id="faq">
                <h2 className="text-xl font-semibold text-slate-800">
                    <span className="inline-block relative pb-1">
                        Frequently asked questions
                        <span className="absolute -bottom-0.5 left-0 w-full h-[2px] bg-gradient-to-r from-indigo-500 to-purple-500"></span>
                    </span>
                </h2>
                <div className="mt-2">
                    <Image src="/window.svg" alt="FAQ illustration" width={64} height={64} />
                </div>
                <div className="mt-4 space-y-3">
                    <details className="rounded-lg border border-slate-200 bg-white p-3">
                        <summary className="cursor-pointer font-medium text-slate-800">What data do you collect?</summary>
                        <p className="mt-2 text-sm text-slate-700">Scripted speech, spontaneous speech, transcriptions, token-level annotations (POS, NER), and translations. We focus on Indian languages and scripts.</p>
                    </details>
                    <details className="rounded-lg border border-slate-200 bg-white p-3">
                        <summary className="cursor-pointer font-medium text-slate-800">How do you handle privacy?</summary>
                        <p className="mt-2 text-sm text-slate-700">We avoid collecting directly identifying information. See our <a className="text-indigo-600 hover:underline" href="/privacy">Privacy Policy</a> for details.</p>
                    </details>
                    <details className="rounded-lg border border-slate-200 bg-white p-3">
                        <summary className="cursor-pointer font-medium text-slate-800">Can I add my language?</summary>
                        <p className="mt-2 text-sm text-slate-700">Yes. Use the <a className="text-indigo-600 hover:underline" href="/contact">contact page</a> to propose new languages or scripts and we’ll coordinate onboarding.</p>
                    </details>
                    <details className="rounded-lg border border-slate-200 bg-white p-3">
                        <summary className="cursor-pointer font-medium text-slate-800">How are annotations used?</summary>
                        <p className="mt-2 text-sm text-slate-700">Annotations help train and evaluate NLP models for Indian languages and scripts. Aggregated data may be released for research with clear licenses.</p>
                    </details>
                </div>
            </section>

            <a href="#mission" className="fixed bottom-6 right-6 bg-white/90 border border-slate-200 text-slate-700 rounded-full shadow px-3 py-2 text-sm hover:bg-blue-50">Back to top</a>
        </div>
    );
}


