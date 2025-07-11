// Dropdown for switching between supported languages
"use client";
import { useState } from "react";

interface Language {
    name: string;
    code: string;
}

const languages: Language[] = [
    { name: "English", code: "eng" },
    { name: "Hindi", code: "hin" },
    { name: "Marathi", code: "mar" },
    { name: "Konkani - Devnagri", code: "kok-d" },
    { name: "Konkani - Roman", code: "kok-r" },
];

export default function LangSwitcher() {
    const [selectedLanguage, setSelectedLanguage] = useState<Language>(
        languages[0],
    );
    const [isOpen, setIsOpen] = useState<boolean>(false);

    return (
        <div className="relative inline-block text-left">
            <button
                className="flex items-center justify-between gap-2 rounded-md border border-gray-300 bg-white px-3 py-1.5 text-sm transition hover:shadow-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                onClick={() => setIsOpen(!isOpen)}
            >
                <span className="font-medium capitalize">
                    {selectedLanguage.name}
                </span>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`h-4 w-4 transform transition-transform ${isOpen ? "rotate-180" : "rotate-0"}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                    />
                </svg>
            </button>

            {/* Dropdown menu for language selection */}
            {isOpen && (
                <div className="absolute z-10 mt-2 w-44 rounded-md border border-gray-200 bg-white shadow-lg">
                    <ul className="py-1">
                        {languages.map((lang) => (
                            <li key={lang.code}>
                                <button
                                    className={`w-full px-4 py-2 text-left text-sm transition hover:bg-blue-100 ${
                                        selectedLanguage.code === lang.code
                                            ? "bg-blue-50 font-semibold"
                                            : ""
                                    }`}
                                    onClick={() => {
                                        setSelectedLanguage(lang);
                                        setIsOpen(false);
                                    }}
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
