"use client";

import { useEffect, useState } from "react";
import { reviewItems } from "@/app/translate/data";
import { codeToLabel } from "@/lib/languages";
import { getPreferredLanguage } from "@/lib/langPreference";

export default function TranslateReviewPage() {
    const [lang, setLang] = useState<string | null>(null);
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const saved = getPreferredLanguage();
        setLang(saved);
        function onLangChanged(e: Event) {
            const code = (e as CustomEvent<string>).detail;
            setLang(code);
        }
        window.addEventListener('language-changed', onLangChanged as EventListener);
        return () => window.removeEventListener('language-changed', onLangChanged as EventListener);
    }, []);

    const current = reviewItems[index];

    const nextItem = () => setIndex((prev) => (prev + 1) % reviewItems.length);

    const vote = (isCorrect: boolean) => {
        console.log("Translate review", { id: current.id, correct: isCorrect });
        nextItem();
    };

    return (
        <div className="w-full max-w-2xl md:max-w-4xl py-4 px-2 md:px-4 mx-auto">
            <h1 className="text-xl md:text-2xl font-bold text-center mb-1">Translation Review</h1>
            <div className="text-center mb-3">
                <span suppressHydrationWarning className="inline-block text-xs px-2 py-1 rounded-full bg-indigo-50 text-indigo-700 border border-indigo-200">{codeToLabel(lang)}</span>
            </div>

            <div className="w-full relative">
                <div className="absolute inset-0 bg-gradient-to-b from-blue-50/30 to-indigo-50/30 -z-10 rounded-xl blur-xl hidden md:block"></div>

                <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-4 w-full">
                    {/* Source + candidate card */}
                    <div className="bg-white/95 backdrop-blur-sm rounded-md md:rounded-lg p-4 shadow-md border border-gray-100 relative overflow-hidden flex flex-col">
                        <div className="absolute -right-8 -top-8 w-20 h-20 bg-indigo-100/50 rounded-full opacity-70 hidden sm:block"></div>
                        <div className="absolute -left-6 -bottom-6 w-16 h-16 bg-blue-100/50 rounded-full opacity-70 hidden sm:block"></div>

                        <h2 className="text-md md:text-lg font-semibold mb-3 text-gray-800 relative">
                            <span className="inline-block relative pb-1">
                                Given translation
                                <span className="absolute -bottom-0.5 left-0 w-full h-[2px] bg-gradient-to-r from-indigo-500 to-purple-500"></span>
                            </span>
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            <div>
                                <div className="text-xs text-slate-500 mb-1">Source ({codeToLabel(current.sourceLang)})</div>
                                <div className="w-full p-3 rounded-md border border-slate-200 bg-white text-slate-800 mb-2">
                                    {current.sourceText}
                                </div>
                            </div>
                            <div>
                                <div className="text-xs text-slate-500 mb-1">Target ({codeToLabel(current.targetLang)})</div>
                                <div className="w-full p-3 rounded-md border border-slate-200 bg-white text-slate-800 mb-2">
                                    {current.candidate}
                                </div>
                            </div>
                        </div>

                        <div className="mt-4 flex gap-3 justify-center">
                            <button onClick={() => vote(true)} className="bg-emerald-600 hover:bg-emerald-700 text-white rounded-md px-5 py-2 font-semibold shadow-sm">Correct</button>
                            <button onClick={() => vote(false)} className="bg-red-600 hover:bg-red-700 text-white rounded-md px-5 py-2 font-semibold shadow-sm">Incorrect</button>
                            <button onClick={nextItem} className="border border-slate-300 hover:bg-blue-50 rounded-md px-5 py-2 font-semibold text-slate-700">Skip</button>
                        </div>
                    </div>

                    {/* Tips card */}
                    <div className="bg-white/95 backdrop-blur-sm rounded-md md:rounded-lg p-4 shadow-md border border-gray-100 relative overflow-hidden mt-4 md:mt-0 flex flex-col">
                        <div className="absolute -right-6 -top-6 w-16 h-16 bg-amber-100/50 rounded-full opacity-70 hidden sm:block"></div>

                        <h2 className="text-md md:text-lg font-semibold mb-3 text-gray-800 relative">
                            <span className="inline-block relative pb-1">
                                Review tips
                                <span className="absolute -bottom-0.5 left-0 w-full h-[2px] bg-gradient-to-r from-amber-500 to-orange-500"></span>
                            </span>
                        </h2>

                        <ul className="text-sm text-slate-700 space-y-2 list-disc ml-5">
                            <li>Is meaning preserved correctly?</li>
                            <li>Is the phrasing natural in the target language?</li>
                            <li>Is punctuation/script appropriate?</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}


