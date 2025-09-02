export interface IndianLanguage {
    code: string;
    name: string;
    scripts: string[];
}

export const indianLanguages: IndianLanguage[] = [
    { code: 'kok', name: 'Konkani', scripts: ['Roman', 'Devanagari', 'Kannada', 'Malayalam', 'Gujarati', 'Perso Arabic'] },
    { code: 'mar', name: 'Marathi', scripts: ['Roman', 'Devanagari'] },
    { code: 'hin', name: 'Hindi', scripts: ['Roman', 'Devanagari'] },
];