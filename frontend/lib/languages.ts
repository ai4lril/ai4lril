export interface Language {
    code: string;
    name: string;
}

export const LANGUAGES: Language[] = [
    { code: "kok_latn", name: "Konkani - Romi" },
    { code: "kok_deva", name: "Konkani - Devnagri" },
    { code: "kok_knda", name: "Konkani - Kannada" },
    { code: "kok_mlym", name: "Konkani - Malayalam" },
    { code: "kok_gujr", name: "Konkani - Gujarati" },
    { code: "kok_arab", name: "Konkani - Perso Arabic" },
    { code: "mar_latn", name: "Marathi - Roman" },
    { code: "mar_deva", name: "Marathi - Devnagri" },
    { code: "hin_latn", name: "Hindi - Roman" },
    { code: "hin_deva", name: "Hindi - Devnagri" },
    { code: "eng_latn", name: "English" },
];

export function codeToLabel(code: string | null): string {
    if (!code) return "All languages";
    const found = LANGUAGES.find(l => l.code === code);
    return found ? found.name : code;
}
