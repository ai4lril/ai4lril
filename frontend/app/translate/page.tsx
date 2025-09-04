"use client";

import { useEffect, useState } from "react";
import { sourceTexts } from "./data";
import { codeToLabel, LANGUAGES } from "@/lib/languages";
import { getPreferredLanguage, getPreferredTargetLanguage, setPreferredTargetLanguage } from "@/lib/langPreference";

export default function TranslatePage() {
    const [lang, setLang] = useState<string | null>(null);
    const [pool, setPool] = useState(sourceTexts);
    const [index, setIndex] = useState(0);
    const [target, setTarget] = useState<string>("hin_deva"); // Will be updated from storage or keep default
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

        function onTargetChanged(e: Event) {
            const code = (e as CustomEvent<string>).detail;
            setTarget(code);
        }

        window.addEventListener('language-changed', onLangChanged as EventListener);
        window.addEventListener('translate-target-changed', onTargetChanged as EventListener);
        return () => {
            window.removeEventListener('language-changed', onLangChanged as EventListener);
            window.removeEventListener('translate-target-changed', onTargetChanged as EventListener);
        };
    }, []);



    const current = pool[index];

    // Initialize target from storage if available
    useEffect(() => {
        const savedTarget = getPreferredTargetLanguage();
        if (savedTarget) {
            setTarget(savedTarget);
        } else {
            // Set default if no saved preference exists
            const defaultTarget = "hin_deva";
            setTarget(defaultTarget);
            setPreferredTargetLanguage(defaultTarget);
        }
    }, []);

    // Reset to default if target equals source (avoid same language translation)
    useEffect(() => {
        if (current?.langCode && target === current.langCode) {
            setTarget("hin_deva");
            try {
                setPreferredTargetLanguage("hin_deva");
                window.dispatchEvent(new CustomEvent('translate-target-changed', { detail: 'hin_deva' }));
            } catch { }
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

    // Get all available languages except the current source language
    const targetOptions = LANGUAGES.filter(language => language.code !== current?.langCode);

    return (
        <div className="w-full max-w-2xl md:max-w-4xl py-4 px-2 md:px-4 mx-auto animate-fade-in-up">
            <h1 className="text-xl md:text-2xl font-bold text-center mb-1 animate-bounce-in">Text Translation</h1>
            <div className="text-center mb-3">
                <span suppressHydrationWarning className="inline-block text-xs px-3 py-2 rounded-full bg-indigo-50 text-indigo-700 border border-indigo-200 font-medium animate-bounce-in">{codeToLabel(lang)}</span>
            </div>

            {error && <div className="text-center text-red-600 text-sm mb-3">{error}</div>}

            <div className="w-full relative">
                <div className="absolute inset-0 bg-gradient-to-b from-blue-50/30 to-indigo-50/30 -z-10 rounded-xl blur-xl hidden md:block"></div>

                <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-4 w-full">
                    {/* Source + translation card */}
                    <div className="glass rounded-md md:rounded-lg p-4 shadow-md border border-gray-100 relative overflow-hidden flex flex-col">
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
                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-slate-800 flex items-center gap-2">
                                    <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    Target Language
                                    {!target && <span className="text-red-500 ml-1">*</span>}
                                </label>

                                <select
                                    value={target || ""}
                                    onChange={(e) => {
                                        const val = e.target.value;
                                        setTarget(val);
                                        setPreferredTargetLanguage(val);
                                    }}
                                    className={`w-full px-4 py-3 border-2 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition-all duration-200 ${!target || target === current?.langCode
                                            ? 'border-red-300 bg-red-50'
                                            : 'border-gray-200 hover:border-gray-300'
                                        }`}
                                >
                                    <option value="">Select target language...</option>
                                    {targetOptions.map((language) => (
                                        <option
                                            key={language.code}
                                            value={language.code}
                                            disabled={language.code === current?.langCode}
                                        >
                                            {language.name}
                                        </option>
                                    ))}
                                </select>

                                {/* Error message */}
                                {(!target || target === current?.langCode) && (
                                    <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
                                        </svg>
                                        Please select a different target language
                                    </p>
                                )}
                            </div>
                            <div>
                                <label className="text-sm text-slate-700">Your translation</label>
                                <textarea
                                    className="mt-1 w-full min-h-[120px] border-2 border-gray-200 rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 resize-vertical transition-all duration-200 bg-white/50 hover:bg-white placeholder-gray-400 text-gray-800"
                                    placeholder="Type the translation here..."
                                    value={translation}
                                    onChange={(e) => setTranslation(e.target.value)}
                                    aria-invalid={!translation.trim() ? true : undefined}
                                />
                            </div>
                            <div className="flex gap-3 justify-center">
                                <button
                                    type="submit"
                                    disabled={!target || target === current?.langCode || !translation.trim()}
                                    className={`group px-6 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl border-2 ${(!target || target === current?.langCode || !translation.trim())
                                        ? 'bg-gray-100 border-gray-200 text-gray-400 cursor-not-allowed'
                                        : 'bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white border-blue-400 hover:border-blue-500 hover:scale-105 active:scale-95'
                                        } flex items-center gap-2`}
                                >
                                    <span>Submit & Next</span>
                                    {(!target || target === current?.langCode || !translation.trim()) ? null : (
                                        <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                                        </svg>
                                    )}
                                </button>
                                <button type="button" onClick={nextItem} className="group bg-white/95 hover:bg-white shadow-lg hover:shadow-xl rounded-lg px-6 py-3 font-semibold text-slate-700 border border-gray-200 hover:border-gray-300 transition-all duration-300 hover:scale-105 active:scale-95 flex items-center gap-2">
                                    <span>Next text</span>
                                    <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </button>
                            </div>
                        </form>
                    </div>

                    {/* Guidelines card */}
                    <div className="glass rounded-md md:rounded-lg p-4 shadow-md border border-gray-100 relative overflow-hidden mt-4 md:mt-0 flex flex-col">
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
