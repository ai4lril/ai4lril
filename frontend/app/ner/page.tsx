"use client";

import { useEffect, useMemo, useState } from "react";
import { tokenizeByScript, detectScript } from "@/lib/tokenize";
import { nerSentences } from "./sentences";
import { codeToLabel } from "@/lib/languages";
import { getPreferredLanguage } from "@/lib/langPreference";

// type EntityType = "PER" | "LOC" | "ORG" | "DATE" | "TIME" | "MISC";

function shuffle<T>(arr: T[]): T[] {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

export default function NerPage() {
    const [lang, setLang] = useState<string | null>(null);
    const [pool, setPool] = useState(nerSentences);
    const [index, setIndex] = useState<number>(0);
    const [text, setText] = useState<string>(pool[0]?.text ?? "");
    const tokens = useMemo(() => tokenizeByScript(text, detectScript(text)), [text]);
    const [entities, setEntities] = useState<Record<number, string>>({});
    const [missing, setMissing] = useState<Set<number>>(new Set());
    const [errorMsg, setErrorMsg] = useState<string>("");

    useEffect(() => {
        const saved = getPreferredLanguage();
        setLang(saved);
        const initial = saved ? shuffle(nerSentences.filter(s => s.langCode === saved)) : shuffle(nerSentences);
        setPool(initial);
        setIndex(0);
        setText(initial[0]?.text ?? "");
    }, []);

    useEffect(() => {
        function onLangChanged(e: Event) {
            const code = (e as CustomEvent<string>).detail;
            setLang(code);
            const nextPool = code ? shuffle(nerSentences.filter(s => s.langCode === code)) : shuffle(nerSentences);
            setPool(nextPool);
            setIndex(0);
            setText(nextPool[0]?.text ?? "");
            setEntities({});
            setMissing(new Set());
            setErrorMsg("");
        }
        window.addEventListener('language-changed', onLangChanged as EventListener);
        return () => window.removeEventListener('language-changed', onLangChanged as EventListener);
    }, []);

    const handleEntityChange = (i: number, ent: string) => {
        setEntities(prev => ({ ...prev, [i]: ent }));
        if (missing.has(i) && ent) {
            const next = new Set(missing);
            next.delete(i);
            setMissing(next);
            if (next.size === 0) setErrorMsg("");
        }
    };

    const nextSentence = () => {
        const next = (index + 1) % pool.length;
        setIndex(next);
        setText(pool[next]?.text ?? "");
        setEntities({});
        setMissing(new Set());
        setErrorMsg("");
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const missingIdx = new Set<number>();
        tokens.forEach((_, i) => { if (!entities[i] || !entities[i].trim()) missingIdx.add(i); });
        if (missingIdx.size > 0) {
            setMissing(missingIdx);
            setErrorMsg("Please tag all tokens (BIO) before submitting.");
            return;
        }
        const sentence = pool[index];
        const annotations = tokens.map((tok, i) => ({ token: tok, ent: entities[i] }));
        console.log("NER annotations", { sentenceId: sentence?.id, lang, text, annotations });
        alert("Submitted NER annotations (check console)");
        nextSentence();
    };

    return (
        <div className="w-full max-w-2xl md:max-w-4xl py-4 px-2 md:px-4 mx-auto animate-fade-in-up">
            <h1 className="text-xl md:text-2xl font-bold text-center mb-1 animate-bounce-in">Named Entity Recognition</h1>
            <div className="text-center mb-3">
                <span className="inline-block text-xs px-3 py-2 rounded-full bg-indigo-50 text-indigo-700 border border-indigo-200 font-medium animate-bounce-in">{codeToLabel(lang)}</span>
            </div>

            <p className="text-center text-gray-600 mb-4 text-sm md:text-base animate-fade-in-up animate-delay-200">
                Label the given sentence token-by-token with BIO tags. Use entity types like PER, LOC, ORG, DATE, TIME, MISC.
            </p>

            {errorMsg && (
                <div className="text-center text-red-600 text-sm mb-3">{errorMsg}</div>
            )}

            <div className="w-full relative">
                <div className="absolute inset-0 bg-gradient-to-b from-blue-50/30 to-indigo-50/30 -z-10 rounded-xl blur-xl hidden md:block"></div>

                <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-4 w-full">
                    {/* Sentence + tagging */}
                    <div className="glass rounded-md md:rounded-lg p-4 shadow-md border border-gray-100 relative overflow-hidden flex flex-col">
                        <div className="absolute -right-8 -top-8 w-20 h-20 bg-indigo-100/50 rounded-full opacity-70 hidden sm:block"></div>
                        <div className="absolute -left-6 -bottom-6 w-16 h-16 bg-blue-100/50 rounded-full opacity-70 hidden sm:block"></div>

                        <h2 className="text-md md:text-lg font-semibold mb-3 text-gray-800 relative">
                            <span className="inline-block relative pb-1">
                                Sentence
                                <span className="absolute -bottom-0.5 left-0 w-full h-[2px] bg-gradient-to-r from-indigo-500 to-purple-500"></span>
                            </span>
                        </h2>

                        <div className="w-full p-4 rounded-md border border-slate-200 bg-white text-slate-800 mb-4">
                            {text}
                        </div>

                        {tokens.length > 0 && (
                            <form onSubmit={handleSubmit} className="relative z-10 space-y-4">
                                <div className="card-wide rounded-xl border border-slate-200 bg-white shadow-sm p-2 md:p-4">
                                    <table className="w-full mx-auto text-sm">
                                        <thead>
                                            <tr className="text-slate-600 text-center">
                                                <th className="py-2">Token</th>
                                                <th className="py-2">BIO Tag</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {tokens.map((tok, i) => (
                                                <tr key={i} className="border-t border-slate-100 odd:bg-white even:bg-slate-50 hover:bg-indigo-50/40">
                                                    <td className="py-2.5 text-center">
                                                        <span className="inline-block rounded-full bg-slate-100 px-3 py-1 text-slate-800">
                                                            {tok}
                                                        </span>
                                                    </td>
                                                    <td className="py-2.5 text-center">
                                                        <select
                                                            className={`text-sm rounded-full px-3 py-1 bg-white focus:outline-none ${missing.has(i) ? 'border-red-400 ring-1 ring-red-300' : 'border-slate-300'} border focus:border-indigo-600`}
                                                            value={entities[i] || ""}
                                                            onChange={(e) => handleEntityChange(i, e.target.value)}
                                                        >
                                                            <option value="">Tag…</option>
                                                            {['B-PER', 'I-PER', 'B-LOC', 'I-LOC', 'B-ORG', 'I-ORG', 'B-DATE', 'I-DATE', 'B-TIME', 'I-TIME', 'B-MISC', 'I-MISC', 'O'].map(tag => (
                                                                <option key={tag} value={tag}>{tag}</option>
                                                            ))}
                                                        </select>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>

                                <div className="mt-4 flex gap-3 justify-center">
                                    <button type="submit" className="group bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white rounded-lg px-6 py-3 font-semibold shadow-lg hover:shadow-xl border-2 border-blue-400 hover:border-blue-500 transition-all duration-300 hover:scale-105 active:scale-95 flex items-center gap-2">
                                        <span>Submit & Next</span>
                                        <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                                        </svg>
                                    </button>
                                    <button type="button" onClick={nextSentence} className="group bg-white/95 hover:bg-white shadow-lg hover:shadow-xl rounded-lg px-6 py-3 font-semibold text-slate-700 border border-gray-200 hover:border-gray-300 transition-all duration-300 hover:scale-105 active:scale-95 flex items-center gap-2">
                                        <span>Next sentence</span>
                                        <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </button>
                                </div>
                            </form>
                        )}
                    </div>

                    {/* Guidelines */}
                    <div className="glass rounded-md md:rounded-lg p-4 shadow-md border border-gray-100 relative overflow-hidden mt-4 md:mt-0 flex flex-col">
                        <div className="absolute -right-6 -top-6 w-16 h-16 bg-amber-100/50 rounded-full opacity-70 hidden sm:block"></div>

                        <h2 className="text-md md:text-lg font-semibold mb-3 text-gray-800 relative">
                            <span className="inline-block relative pb-1">
                                Annotation Guidelines
                                <span className="absolute -bottom-0.5 left-0 w-full h-[2px] bg-gradient-to-r from-amber-500 to-orange-500"></span>
                            </span>
                        </h2>

                        <div className="space-y-4 text-sm">
                            <div>
                                <h3 className="font-medium text-green-700 mb-1">Do</h3>
                                <ul className="text-gray-700 space-y-1 ml-5 list-disc">
                                    <li>Use B- and I- prefixes for multi-token entities</li>
                                    <li>Use O for tokens outside any entity</li>
                                    <li>Prefer entity types: PER, LOC, ORG, DATE, TIME, MISC</li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="font-medium text-red-700 mb-1">Don&apos;t</h3>
                                <ul className="text-gray-700 space-y-1 ml-5 list-disc">
                                    <li>Tag punctuation unless it’s part of the entity</li>
                                    <li>Split a single entity span into multiple entities</li>
                                    <li>Guess when unsure — use Next sentence</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
