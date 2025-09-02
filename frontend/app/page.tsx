export default function Home() {
    return (
        <div className="w-full">
            <section className="relative container mx-auto py-12 sm:py-16 md:py-24 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
                {/* Decorative background */}
                <div className="pointer-events-none absolute -z-10 inset-0">
                    <div className="absolute -top-10 -left-10 w-56 h-56 rounded-full bg-blue-100/50 blur-2xl" />
                    <div className="absolute -bottom-16 -right-16 w-72 h-72 rounded-full bg-indigo-100/50 blur-3xl" />
                </div>
                <div>
                    <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight" style={{ color: 'var(--brand-900)' }}>
                        Donate your contributions for Indian languages
                    </h1>
                    <p className="mt-4 text-slate-600 text-lg leading-relaxed">
                        Help build open, research-grade datasets for diverse Indian languages and scripts. Contribute speech, validate recordings, and support revitalization.
                    </p>
                    <div className="mt-8 flex flex-wrap gap-3">
                        <a href="/speak" className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-blue-300 text-white px-6 py-3 rounded-full font-semibold shadow-sm transition-colors">Contribute</a>
                        <a href="/listen" className="bg-white/90 px-6 py-3 rounded-full border border-slate-200 text-slate-700 hover:bg-indigo-50 hover:text-indigo-700 shadow-sm transition-colors">Validate</a>
                        <a href="/languages" className="bg-white/90 px-6 py-3 rounded-full border border-slate-200 text-slate-700 hover:bg-indigo-50 hover:text-indigo-700 shadow-sm transition-colors">Browse languages</a>
                    </div>
                </div>
                <div className="relative">
                    <div className="card rounded-2xl p-6 shadow-lg border border-gray-100">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="rounded-xl p-4 bg-white/90 border border-slate-200">
                                <div className="text-sm text-slate-600 flex items-center gap-2">
                                    <svg className="w-4 h-4 text-indigo-600" viewBox="0 0 24 24" fill="currentColor"><path d="M12 12c2.21 0 4-1.79 4-4S14.21 4 12 4 8 5.79 8 8s1.79 4 4 4Zm0 2c-2.67 0-8 1.34-8 4v1h16v-1c0-2.66-5.33-4-8-4Z"/></svg>
                                    Contribute
                                </div>
                                <div className="mt-2 h-2 rounded bg-gradient-to-r from-indigo-400 to-indigo-600 w-3/4" />
                            </div>
                            <div className="rounded-xl p-4 bg-white/90 border border-slate-200">
                                <div className="text-sm text-slate-600 flex items-center gap-2">
                                    <svg className="w-4 h-4 text-emerald-600" viewBox="0 0 24 24" fill="currentColor"><path d="M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
                                    Validate
                                </div>
                                <div className="mt-2 h-2 rounded bg-gradient-to-r from-emerald-400 to-teal-500 w-2/3" />
                            </div>
                            <div className="rounded-xl p-4 bg-white/90 border border-slate-200">
                                <div className="text-sm text-slate-600 flex items-center gap-2">
                                    <svg className="w-4 h-4 text-amber-600" viewBox="0 0 24 24" fill="currentColor"><path d="M3 5h18v2H3V5Zm0 6h12v2H3v-2Zm0 6h18v2H3v-2Z"/></svg>
                                    Transcribe
                                </div>
                                <div className="mt-2 h-2 rounded bg-gradient-to-r from-amber-400 to-orange-500 w-1/2" />
                            </div>
                            <div className="rounded-xl p-4 bg-white/90 border border-slate-200">
                                <div className="text-sm text-slate-600 flex items-center gap-2">
                                    <svg className="w-4 h-4 text-fuchsia-600" viewBox="0 0 24 24" fill="currentColor"><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25ZM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83Z"/></svg>
                                    Review
                                </div>
                                <div className="mt-2 h-2 rounded bg-gradient-to-r from-fuchsia-400 to-pink-500 w-2/5" />
                            </div>
                        </div>
                        <div className="mt-6">
                            <div className="text-slate-700 font-medium">Open data, community-led</div>
                            <p className="text-slate-500 text-sm mt-1">Purpose-built for Indian languages and scripts with accessible flows and quality checks.</p>
                        </div>
                    </div>
                    <div className="absolute -z-10 inset-0 -translate-x-6 -translate-y-6 rounded-3xl blur-2xl opacity-30 bg-gradient-to-tr from-indigo-400 to-fuchsia-400" />
                </div>
            </section>

            <section className="w-full bg-white/70 border-t border-b border-slate-200/70">
                <div className="container mx-auto py-8 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 text-center">
                    <div className="rounded-xl bg-white/80 border border-slate-200 p-4 shadow-sm">
                        <div className="text-2xl font-extrabold text-indigo-700">3</div>
                        <div className="text-sm text-slate-600">Languages</div>
                    </div>
                    <div className="rounded-xl bg-white/80 border border-slate-200 p-4 shadow-sm">
                        <div className="text-2xl font-extrabold text-indigo-700">6</div>
                        <div className="text-sm text-slate-600">Scripts</div>
                    </div>
                    <div className="rounded-xl bg-white/80 border border-slate-200 p-4 shadow-sm">
                        <div className="text-2xl font-extrabold text-indigo-700">1.2k+</div>
                        <div className="text-sm text-slate-600">Speakers</div>
                    </div>
                    <div className="rounded-xl bg-white/80 border border-slate-200 p-4 shadow-sm">
                        <div className="text-2xl font-extrabold text-indigo-700">230h</div>
                        <div className="text-sm text-slate-600">Recorded</div>
                    </div>
                </div>
            </section>

            {/* <section className="container mx-auto py-12 md:py-16">
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-800">Founder</h2>
                <div className="mt-6 card rounded-2xl p-6">
                    <div className="flex items-start gap-4">
                        <div className="size-12 rounded-full bg-gradient-to-tr from-blue-200 to-indigo-200 border border-white" />
                        <div>
                            <div className="flex flex-wrap items-center gap-2">
                                <h3 className="text-lg font-semibold text-slate-800">Alvyn Abranches</h3>
                                <span className="text-xs px-2 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-200">Assistant Professor</span>
                            </div>
                            <p className="mt-2 text-slate-600 text-sm leading-relaxed">
                                Alvyn Abranches is an Assistant Professor with interests in Computational Socio-Linguistics, Low-Resourced Languages, and Zero-Resourced Scripts. He focuses on developing research-driven tools that bridge technology and linguistics to document and revitalize underrepresented languages.
                            </p>
                            <div className="mt-3 flex flex-wrap gap-2">
                                <span className="text-xs px-2 py-1 rounded-full bg-slate-100 text-slate-700 border border-slate-200">Computational Socio-Linguistics</span>
                                <span className="text-xs px-2 py-1 rounded-full bg-slate-100 text-slate-700 border border-slate-200">Low-Resourced Languages</span>
                                <span className="text-xs px-2 py-1 rounded-full bg-slate-100 text-slate-700 border border-slate-200">Zero-Resourced Scripts</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}

            <section className="container mx-auto py-12 md:py-16">
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-800">
                    <span className="inline-block relative pb-1">Highlights
                        <span className="absolute -bottom-0.5 left-0 w-full h-[2px] bg-gradient-to-r from-indigo-500 to-purple-500"></span>
                    </span>
                </h2>
                <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
                    <a href="/about#mission" className="group rounded-2xl p-6 bg-white/90 border border-slate-200 transition hover:shadow-lg hover:-translate-y-0.5 will-change-transform">
                        <h3 className="text-lg font-semibold text-slate-800 flex items-center gap-2">
                            <svg className="w-5 h-5 text-indigo-600" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 1 0 .001 20.001A10 10 0 0 0 12 2Zm1 14.5h-2V11h2v5.5Zm0-7h-2V7h2v2.5Z"/></svg>
                            Preservation of low-resourced languages
                        </h3>
                        <p className="mt-2 text-slate-600 text-sm leading-relaxed">Languages encode identity, heritage, and unique worldviews. When low-resourced languages fade, communities lose cultural memory and traditional knowledge. We prioritize ethical, participant-first collection to create durable records and enable revitalization.</p>
                    </a>
                    <a href="/about#story" className="group rounded-2xl p-6 bg-white/90 border border-slate-200 transition hover:shadow-lg hover:-translate-y-0.5 will-change-transform">
                        <h3 className="text-lg font-semibold text-slate-800 flex items-center gap-2">
                            <svg className="w-5 h-5 text-emerald-600" viewBox="0 0 24 24" fill="currentColor"><path d="M12 4c-4.418 0-8 3.134-8 7s3.582 7 8 7 8-3.134 8-7-3.582-7-8-7Zm0 12a5 5 0 1 1 0-10 5 5 0 0 1 0 10Z"/></svg>
                            Contributions to Indian languages
                        </h3>
                        <p className="mt-2 text-slate-600 text-sm leading-relaxed">We focus on practical resources for Indian languages across scripts and varieties—curating prompts, collecting speech data, and enabling community review for Konkani, Marathi, Hindi, and others. Our goal: reproducible datasets that reflect linguistic diversity and local usage.</p>
                    </a>
                    <a href="/about#focus" className="group rounded-2xl p-6 bg-white/90 border border-slate-200 transition hover:shadow-lg hover:-translate-y-0.5 will-change-transform">
                        <h3 className="text-lg font-semibold text-slate-800 flex items-center gap-2">
                            <svg className="w-5 h-5 text-amber-600" viewBox="0 0 24 24" fill="currentColor"><path d="M4 4h16v2H4V4Zm0 7h16v2H4v-2Zm0 7h16v2H4v-2Z"/></svg>
                            Preservation of scripts
                        </h3>
                        <p className="mt-2 text-slate-600 text-sm leading-relaxed">Scripts are cultural archives. We document and promote lesser-used scripts alongside mainstream ones, supporting digitization, consistent transcription, and script-aware tools for education and research.</p>
                    </a>
                </div>
                <div className="mt-6 grid grid-cols-1 md:grid-cols-4 gap-4 text-sm text-slate-700">
                    <a href="/about#focus" className="rounded-xl border border-slate-200 p-4 transition hover:shadow-md hover:-translate-y-0.5">Community-involved workflows</a>
                    <a href="/about#story" className="rounded-xl border border-slate-200 p-4 transition hover:shadow-md hover:-translate-y-0.5">Open, research-grade datasets</a>
                    <a href="/about#focus" className="rounded-xl border border-slate-200 p-4 transition hover:shadow-md hover:-translate-y-0.5">Accessible UI for contributors</a>
                    <a href="/about#focus" className="rounded-xl border border-slate-200 p-4 transition hover:shadow-md hover:-translate-y-0.5">Script-aware transcription and review</a>
                </div>
            </section>
        </div>
    );
}