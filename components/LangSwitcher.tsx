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
    const [selectedLanguage, setSelectedLanguage] = useState<Language>(languages[0]);
    const [isOpen, setIsOpen] = useState<boolean>(false);

    return (
        <div>
            <button
                className="flex items-center justify-between border-1 py-1 px-2 w-20 h-8"
                onClick={() => setIsOpen(!isOpen)}
            >
                <span className="text-[12px]">
                    {selectedLanguage.code}
                </span>
                <span className="flex items-center justify-center">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                </span>
            </button>

            {isOpen && (
                <div className="absolute bg-white border rounded shadow-lg mt-2 w-40">
                    <ul className="p-2">
                        {languages.map((lang) => (
                            <li key={lang.code}>
                                <button onClick={() => setSelectedLanguage({ name: lang.name, code: lang.code })}>
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
