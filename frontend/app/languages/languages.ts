export interface IndianLanguage {
    code: string;
    name: string;
    scripts: string[];
    description: string;
}

export const indianLanguages: IndianLanguage[] = [
    {
        code: 'asm',
        name: 'Assamese',
        scripts: ['Assamese', 'Devanagari'],
        description: 'Assamese is an Eastern Indo-Aryan language spoken by over 15 million people in Assam and northeastern India. Known for its rich literary tradition, it uses the Assamese script and has influenced Bengali literature. The language features distinctive phonological characteristics and a growing body of modern literature.'
    },
    {
        code: 'ben',
        name: 'Bengali',
        scripts: ['Bengali', 'Devanagari'],
        description: 'Bengali is a major Indo-Aryan language spoken by over 230 million people worldwide, primarily in West Bengal and Bangladesh. It has a rich literary tradition including works by Rabindranath Tagore, the first non-European Nobel laureate in Literature. The language uses its own script and has influenced many other languages.'
    },
    {
        code: 'bodo',
        name: 'Bodo',
        scripts: ['Devanagari', 'Bodo'],
        description: 'Bodo is a Sino-Tibetan language spoken by over 1.4 million people in Assam, India. It is one of the 22 scheduled languages of India and has its own script. The language has a rich oral tradition and is being actively developed with modern literature and educational materials.'
    },
    {
        code: 'doi',
        name: 'Dogri',
        scripts: ['Devanagari', 'Takri'],
        description: 'Dogri is an Indo-Aryan language spoken by over 2 million people in Jammu and Kashmir, India. It has been recognized as one of India\'s scheduled languages and features a rich folk literature tradition. The language is being modernized with contemporary literature and media content.'
    },
    {
        code: 'guj',
        name: 'Gujarati',
        scripts: ['Gujarati', 'Devanagari'],
        description: 'Gujarati is an Indo-Aryan language spoken by over 55 million people, mainly in Gujarat, India. It has a rich literary tradition spanning over 1,000 years, including works by poets like Narsinh Mehta. The language has significantly influenced the development of modern Indian literature.'
    },
    {
        code: 'hin',
        name: 'Hindi',
        scripts: ['Devanagari', 'Roman'],
        description: 'Hindi is India\'s most widely spoken language and one of the official languages of the Government of India. Used by over 500 million speakers worldwide, it serves as a lingua franca across North India. Hindi has absorbed vocabulary from Persian, Arabic, and English, reflecting India\'s diverse cultural heritage.'
    },
    {
        code: 'kan',
        name: 'Kannada',
        scripts: ['Kannada', 'Devanagari'],
        description: 'Kannada is a Dravidian language spoken by over 43 million people in Karnataka, India. It has a literary history spanning over 1,500 years, including works by poets like Pampa and Basavanna. The language uses its own script and has influenced neighboring Dravidian languages.'
    },
    {
        code: 'kas',
        name: 'Kashmiri',
        scripts: ['Kashmiri', 'Devanagari', 'Perso-Arabic'],
        description: 'Kashmiri is a Dardic language spoken by over 7 million people in Jammu and Kashmir, India. It features multiple scripts and has a rich tradition of poetry and literature. The language has been influenced by Persian, Arabic, and Sanskrit, creating a unique linguistic blend.'
    },
    {
        code: 'kok',
        name: 'Konkani',
        scripts: ['Roman', 'Devanagari', 'Kannada', 'Malayalam', 'Gujarati', 'Perso Arabic'],
        description: 'Konkani is a vibrant Indo-Aryan language spoken by over 2 million people, primarily along India\'s western coast. Known for its rich oral traditions and folk literature, it features multiple scripts reflecting its historical influences from Sanskrit, Portuguese, and Arabic. The language has evolved through centuries of cultural exchange.'
    },
    {
        code: 'mai',
        name: 'Maithili',
        scripts: ['Devanagari', 'Tirhuta'],
        description: 'Maithili is an Indo-Aryan language spoken by over 35 million people in Bihar and Nepal. It has a rich literary tradition dating back to the 14th century and is recognized as one of India\'s scheduled languages. The language has its own script and continues to develop modern literature.'
    },
    {
        code: 'mal',
        name: 'Malayalam',
        scripts: ['Malayalam', 'Devanagari'],
        description: 'Malayalam is a Dravidian language spoken by over 35 million people in Kerala, India. It has a literary tradition spanning over 1,000 years, including the earliest known literary work in any Dravidian language. The language uses its own script and has influenced Malayalam cinema and literature.'
    },
    {
        code: 'mni',
        name: 'Manipuri',
        scripts: ['Bengali', 'Meitei Mayek'],
        description: 'Manipuri is a Sino-Tibetan language spoken by over 1.8 million people in Manipur, India. It has its own script called Meitei Mayek and is one of India\'s scheduled languages. The language has a rich oral tradition and is being developed with modern educational materials.'
    },
    {
        code: 'mar',
        name: 'Marathi',
        scripts: ['Roman', 'Devanagari'],
        description: 'Marathi is the official language of Maharashtra and one of India\'s 22 scheduled languages. Spoken by over 83 million people, it boasts a rich literary tradition spanning over 1,300 years. Marathi literature includes works by saints like Tukaram and modern writers like P.L. Deshpande, showcasing the language\'s cultural depth.'
    },
    {
        code: 'nep',
        name: 'Nepali',
        scripts: ['Devanagari'],
        description: 'Nepali is an Indo-Aryan language spoken by over 17 million people in Nepal and northern India. It is the official language of Nepal and has a rich literary tradition. The language uses Devanagari script and has been influenced by Sanskrit and other regional languages.'
    },
    {
        code: 'ori',
        name: 'Odia',
        scripts: ['Odia', 'Devanagari'],
        description: 'Odia is an Indo-Aryan language spoken by over 35 million people in Odisha, India. It has a literary tradition dating back over 1,000 years and is one of India\'s classical languages. The language has its own script and has produced notable poets and writers.'
    },
    {
        code: 'pan',
        name: 'Punjabi',
        scripts: ['Gurmukhi', 'Devanagari', 'Roman'],
        description: 'Punjabi is an Indo-Aryan language spoken by over 30 million people in Punjab and worldwide. It has a rich literary tradition including Sikh scripture and modern literature. The language uses Gurmukhi script and has influenced Punjabi music, film, and culture.'
    },
    {
        code: 'san',
        name: 'Sanskrit',
        scripts: ['Devanagari', 'Roman'],
        description: 'Sanskrit is an ancient Indo-Aryan language and one of India\'s classical languages. Though not spoken as a native language today, it remains important in religious, scholarly, and cultural contexts. Sanskrit has influenced the development of many modern Indian languages and continues to be studied academically.'
    },
    {
        code: 'sat',
        name: 'Santhali',
        scripts: ['Ol Chiki', 'Devanagari'],
        description: 'Santhali is an Austroasiatic language spoken by over 7 million people in eastern India. It is one of India\'s scheduled languages and has its own script called Ol Chiki. The language has a rich oral tradition and is being developed with modern literature and educational resources.'
    },
    {
        code: 'snd',
        name: 'Sindhi',
        scripts: ['Devanagari', 'Arabic', 'Gurmukhi'],
        description: 'Sindhi is an Indo-Aryan language spoken by over 25 million people in Sindh, Pakistan and worldwide. It has a rich literary tradition and uses multiple scripts. The language has been influenced by Persian, Arabic, and Sanskrit, creating a unique linguistic heritage.'
    },
    {
        code: 'tam',
        name: 'Tamil',
        scripts: ['Tamil', 'Devanagari'],
        description: 'Tamil is a Dravidian language spoken by over 75 million people in Tamil Nadu, India and worldwide. It is one of India\'s classical languages with a literary tradition spanning over 2,000 years. Tamil has its own script and has influenced Dravidian linguistics and literature.'
    },
    {
        code: 'tel',
        name: 'Telugu',
        scripts: ['Telugu', 'Devanagari'],
        description: 'Telugu is a Dravidian language spoken by over 75 million people in Andhra Pradesh and Telangana, India. It has a rich literary tradition dating back over 1,000 years and is one of India\'s classical languages. Telugu has its own script and has produced notable poets and literary figures.'
    },
    {
        code: 'urd',
        name: 'Urdu',
        scripts: ['Urdu', 'Devanagari'],
        description: 'Urdu is an Indo-Aryan language spoken by over 60 million people in Pakistan and India. It developed as a lingua franca and has absorbed vocabulary from Persian, Arabic, and Sanskrit. Urdu has a rich literary tradition and is written in a modified Persian script.'
    },
    {
        code: 'eng',
        name: 'English',
        scripts: ['Roman'],
        description: 'English is the official language of the United Kingdom, the United States, and many other countries. It is a West Germanic language that originated in England and has become the most widely spoken language in the world.'
    }
];