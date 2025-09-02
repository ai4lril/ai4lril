export interface NerSentence {
    id: string;
    text: string;
    langCode: string;
}

export const nerSentences: NerSentence[] = [
    { id: 'hin_deva-1', text: 'दिल्ली भारत की राजधानी है।', langCode: 'hin_deva' },
    { id: 'mar_deva-1', text: 'मुंबई महाराष्ट्राची राजधानी नाही.', langCode: 'mar_deva' },
    { id: 'eng_latn-1', text: 'Sachin Tendulkar played for Mumbai Indians.', langCode: 'eng_latn' },
    { id: 'kan_knda-1', text: 'ಬೆಂಗಳೂರು ಕರ್ನಾಟಕದ ರಾಜಧಾನಿಯಾಗಿದೆ.', langCode: 'kan_knda' },
    { id: 'kok_latn-1', text: 'Tum kosso assa?', langCode: 'kok_latn' },
];
