export interface IndianLanguage {
    code: string;
    name: string;
    scripts: string[];
    description: string;
}

export const indianLanguages: IndianLanguage[] = [
    {
        code: 'kok',
        name: 'Konkani',
        scripts: ['Roman', 'Devanagari', 'Kannada', 'Malayalam', 'Gujarati', 'Perso Arabic'],
        description: 'Konkani is a vibrant Indo-Aryan language spoken by over 2 million people, primarily along India\'s western coast. Known for its rich oral traditions and folk literature, it features multiple scripts reflecting its historical influences from Sanskrit, Portuguese, and Arabic. The language has evolved through centuries of cultural exchange.'
    },
    {
        code: 'mar',
        name: 'Marathi',
        scripts: ['Roman', 'Devanagari'],
        description: 'Marathi is the official language of Maharashtra and one of India\'s 22 scheduled languages. Spoken by over 83 million people, it boasts a rich literary tradition spanning over 1,300 years. Marathi literature includes works by saints like Tukaram and modern writers like P.L. Deshpande, showcasing the language\'s cultural depth.'
    },
    {
        code: 'hin',
        name: 'Hindi',
        scripts: ['Roman', 'Devanagari'],
        description: 'Hindi is India\'s most widely spoken language and one of the official languages of the Government of India. Used by over 500 million speakers worldwide, it serves as a lingua franca across North India. Hindi has absorbed vocabulary from Persian, Arabic, and English, reflecting India\'s diverse cultural heritage.'
    },
];