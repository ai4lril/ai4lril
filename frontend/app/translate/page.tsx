"use client";

import { useEffect, useMemo, useState } from "react";
import { sourceTexts } from "./data";
import { codeToLabel, LANGUAGES } from "@/lib/languages";
import { getPreferredLanguage, getPreferredTargetLanguage, setPreferredTargetLanguage } from "@/lib/langPreference";

export default function TranslatePage() {
    const [lang, setLang] = useState<string | null>(null);
    const [pool, setPool] = useState(sourceTexts);
    const [index, setIndex] = useState(0);
    const [target, setTarget] = useState<string>("");
    const [translation, setTranslation] = useState<string>("");
    const [error, setError] = useState<string>("");

    useEffect(() => {
        const saved = getPreferredLanguage();
        setLang(saved);
        const initial = saved ? sourceTexts.filter(s => s.langCode === saved) : sourceTexts;
        setPool(initial.length > 0 ? initial : sourceTexts);
        setIndex(0);
    }, []);

    useEffect(() => {
        function onLangChanged(e: Event) {
            const code = (e as CustomEvent<string>).detail;
            setLang(code);
            const next = code ? sourceTexts.filter(s => s.langCode === code) : sourceTexts;
            setPool(next.length > 0 ? next : sourceTexts);
            setIndex(0);
            setTranslation("");
            setError("");
        }
        window.addEventListener('language-changed', onLangChanged as EventListener);
        return () => window.removeEventListener('language-changed', onLangChanged as EventListener);
    }, []);

    const current = pool[index];

    // Initialize target from storage if available
    useEffect(() => {
        const savedTarget = getPreferredTargetLanguage();
        if (savedTarget) setTarget(savedTarget);
    }, []);

    // Clear invalid saved target if equals source
    useEffect(() => {
        if (current?.langCode && target === current.langCode) {
            setTarget("");
            try {
                window.localStorage.removeItem('translateTarget');
                document.cookie = 'translateTarget=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/';
                window.dispatchEvent(new CustomEvent('translate-target-changed', { detail: '' }));
            } catch {}
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [current?.langCode]);

    const nextItem = () => {
        const next = (index + 1) % pool.length;
        setIndex(next);
        setTranslation("");
        setError("");
    };

    const submit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!target) { setError("Select a target language."); return; }
        if (!translation.trim()) { setError("Enter a translation."); return; }
        console.log("Translate submit", {
            sourceId: current?.id,
            sourceLang: current?.langCode,
            sourceText: current?.text,
            targetLang: target,
            translation,
        });
        alert("Submitted translation (check console)");
        nextItem();
    };

    const targetOptions = useMemo(() => LANGUAGES.filter(l => l.code !== current?.langCode), [current]);

    return (
        <div className="w-full max-w-2xl md:max-w-4xl py-4 px-2 md:px-4 mx-auto">
            <h1 className="text-xl md:text-2xl font-bold text-center mb-1">Text Translation</h1>
            <div className="text-center mb-3">
                <span suppressHydrationWarning className="inline-block text-xs px-2 py-1 rounded-full bg-indigo-50 text-indigo-700 border border-indigo-200">{codeToLabel(lang)}</span>
            </div>

            {error && <div className="text-center text-red-600 text-sm mb-3">{error}</div>}

            <div className="w-full relative">
                <div className="absolute inset-0 bg-gradient-to-b from-blue-50/30 to-indigo-50/30 -z-10 rounded-xl blur-xl hidden md:block"></div>

                <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-4 w-full">
                    {/* Source + translation card */}
                    <div className="bg-white/95 backdrop-blur-sm rounded-md md:rounded-lg p-4 shadow-md border border-gray-100 relative overflow-hidden flex flex-col">
                        <div className="absolute -right-8 -top-8 w-20 h-20 bg-indigo-100/50 rounded-full opacity-70 hidden sm:block"></div>
                        <div className="absolute -left-6 -bottom-6 w-16 h-16 bg-blue-100/50 rounded-full opacity-70 hidden sm:block"></div>

                        <h2 className="text-md md:text-lg font-semibold mb-3 text-gray-800 relative">
                            <span className="inline-block relative pb-1">
                                Source text
                                <span className="absolute -bottom-0.5 left-0 w-full h-[2px] bg-gradient-to-r from-indigo-500 to-purple-500"></span>
                            </span>
                        </h2>

                        <div className="w-full p-4 rounded-md border border-slate-200 bg-white text-slate-800 mb-4">
                            {current?.text}
                        </div>

                        <form onSubmit={submit} className="space-y-3">
                            <div className="flex flex-col sm:flex-row gap-2 sm:items-center">
                                <label className="text-sm text-slate-700">Target language</label>
                                <select
                                    className="text-sm border border-slate-300 rounded-md px-3 py-1 bg-white focus:border-indigo-600 focus:outline-none"
                                    value={target}
                                    onChange={(e) => {
                                        const val = e.target.value;
                                        setTarget(val);
                                        try {
                                            setPreferredTargetLanguage(val);
                                            window.dispatchEvent(new CustomEvent('translate-target-changed', { detail: val }));
                                        } catch {}
                                    }}
                                    aria-invalid={!target || target === current?.langCode ? true : undefined}
                                >
                                    <option value="">Select…</option>
                                    {targetOptions.map(l => (
                                        <option key={l.code} value={l.code}>{l.name}</option>
                                    ))}
                                </select>
                            </div>
                            <div>
                                <label className="text-sm text-slate-700">Your translation</label>
                                <textarea
                                    className="mt-1 w-full min-h-[120px] border border-slate-300 rounded-md p-3 focus:outline-none focus:border-indigo-600"
                                    placeholder="Type the translation here…"
                                    value={translation}
                                    onChange={(e) => setTranslation(e.target.value)}
                                    aria-invalid={!translation.trim() ? true : undefined}
                                />
                            </div>
                            <div className="flex gap-3 justify-center">
                                <button
                                    type="submit"
                                    disabled={!target || target === current?.langCode || !translation.trim()}
                                    className={`rounded-md px-5 py-2 font-semibold shadow-sm text-white ${(!target || target === current?.langCode || !translation.trim())
                                        ? 'bg-slate-400 opacity-60 cursor-not-allowed'
                                        : 'bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700'}`}
                                >
                                    Submit & Next
                                </button>
                                <button type="button" onClick={nextItem} className="border border-slate-300 hover:bg-blue-50 rounded-md px-5 py-2 font-semibold text-slate-700">Next text</button>
                            </div>
                        </form>
                    </div>

                    {/* Guidelines card */}
                    <div className="bg-white/95 backdrop-blur-sm rounded-md md:rounded-lg p-4 shadow-md border border-gray-100 relative overflow-hidden mt-4 md:mt-0 flex flex-col">
                        <div className="absolute -right-6 -top-6 w-16 h-16 bg-amber-100/50 rounded-full opacity-70 hidden sm:block"></div>

                        <h2 className="text-md md:text-lg font-semibold mb-3 text-gray-800 relative">
                            <span className="inline-block relative pb-1">
                                Translation tips
                                <span className="absolute -bottom-0.5 left-0 w-full h-[2px] bg-gradient-to-r from-amber-500 to-orange-500"></span>
                            </span>
                        </h2>

                        <ul className="text-sm text-slate-700 space-y-2 list-disc ml-5">
                            <li>Do not use machine translation tools (e.g., Google Translate); provide your own translation.</li>
                            <li>Preserve meaning, not word order</li>
                            <li>Use natural phrasing in the target language</li>
                            <li>Keep punctuation appropriate for the script</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
