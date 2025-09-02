export type SourceText = {
    id: string;
    text: string;
    langCode: string; // e.g., "hin_deva"
};

export const sourceTexts: SourceText[] = [
    { id: "hin_deva-1", text: "यह एक उदाहरण वाक्य है।", langCode: "hin_deva" },
    { id: "mar_deva-1", text: "हे एक नमुना वाक्य आहे.", langCode: "mar_deva" },
    { id: "gom_deva-1", text: "हें एक बदार उदाहरण वाक्य आसा.", langCode: "gom_deva" },
];

export type ReviewItem = {
    id: string;
    sourceText: string;
    sourceLang: string;
    targetLang: string; // language code for the translation
    candidate: string;  // candidate translation text
};

export const reviewItems: ReviewItem[] = [
    {
        id: "t1",
        sourceText: "यह एक उदाहरण वाक्य है।",
        sourceLang: "hin_deva",
        targetLang: "mar_deva",
        candidate: "हे एक नमुना वाक्य आहे.",
    },
    {
        id: "t2",
        sourceText: "हे एक नमुना वाक्य आहे.",
        sourceLang: "mar_deva",
        targetLang: "hin_deva",
        candidate: "यह एक उदाहरण वाक्य है।",
    },
];
