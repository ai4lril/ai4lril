"use client";
import { useEffect, useRef, useState } from "react";
import { LANGUAGES, type Language } from "@/lib/languages";
import { getPreferredLanguage, setPreferredLanguage } from "@/lib/langPreference";

export default function LangSwitcher() {
    const [selectedLanguage, setSelectedLanguage] = useState<Language>(LANGUAGES[0]);
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const wrapperRef = useRef<HTMLDivElement | null>(null);
    const listRef = useRef<HTMLUListElement | null>(null);

    // Initialize from localStorage if available
    useEffect(() => {
        const saved = getPreferredLanguage();
        if (saved) {
            const found = LANGUAGES.find(l => l.code === saved);
            if (found) setSelectedLanguage(found);
        }
    }, []);

    // Outside click close (pointerdown for better mobile/safari support)
    useEffect(() => {
        function onDocClick(e: Event) {
            if (!wrapperRef.current) return;
            if (!wrapperRef.current.contains(e.target as Node)) setIsOpen(false);
        }
        document.addEventListener('pointerdown', onDocClick as EventListener);
        return () => document.removeEventListener('pointerdown', onDocClick as EventListener);
    }, []);

    // Focus first option when menu opens
    useEffect(() => {
        if (isOpen && listRef.current) {
            const first = listRef.current.querySelector('button');
            (first as HTMLButtonElement | null)?.focus();
        }
    }, [isOpen]);

    const choose = (lang: Language) => {
        setSelectedLanguage(lang);
        setIsOpen(false);
        try {
            setPreferredLanguage(lang.code);
            window.dispatchEvent(new CustomEvent('language-changed', { detail: lang.code }));
        } catch { }
    };

    return (
        <div ref={wrapperRef} className="relative inline-block text-left z-[100]">
            <button
                className="flex items-center justify-between gap-2 border border-gray-300 rounded-md px-3 py-1.5 text-sm bg-white hover:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                onClick={() => setIsOpen(!isOpen)}
                aria-haspopup="listbox"
                aria-expanded={isOpen}
                aria-controls="langswitcher-list"
            >
                <span className="capitalize font-medium">{selectedLanguage.name}</span>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`h-4 w-4 transform transition-transform ${isOpen ? "rotate-180" : "rotate-0"}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
            </button>

            {isOpen && (
                <div className="absolute z-[100] mt-2 w-52 bg-white border border-gray-200 rounded-md shadow-lg right-0">
                    <ul
                        ref={listRef}
                        className="py-1"
                        role="listbox"
                        aria-label="Select language"
                        id="langswitcher-list"
                        onKeyDown={(e) => {
                            if (e.key === 'Escape') setIsOpen(false);
                        }}
                    >
                        {LANGUAGES.map((lang) => (
                            <li key={lang.code}>
                                <button
                                    className={`w-full text-left px-4 py-2 text-sm hover:bg-blue-100 focus:bg-blue-50 focus:outline-none transition ${selectedLanguage.code === lang.code ? "bg-blue-50 font-semibold" : ""}`}
                                    onClick={() => choose(lang)}
                                    role="option"
                                    aria-selected={selectedLanguage.code === lang.code}
                                >
                                    {lang.name}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}
