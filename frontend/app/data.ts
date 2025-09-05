export type AffectSentence = {
    id: string;
    text: string;
    langCode: string; // e.g., "hin_deva"
    // Optional metadata for testing (not shown to users)
    expectedSentiment?: 'positive' | 'neutral' | 'negative';
    expectedEmotion?: string;
};

export const affectSentences: AffectSentence[] = [
    // Hindi sentences
    {
        id: "hin_sent_001",
        text: "यह खाना बहुत स्वादिष्ट है!",
        langCode: "hin_deva",
        expectedSentiment: "positive",
        expectedEmotion: "joy"
    },
    {
        id: "hin_sent_002",
        text: "मैं आज बहुत खुश हूं।",
        langCode: "hin_deva",
        expectedSentiment: "positive",
        expectedEmotion: "joy"
    },
    {
        id: "hin_sent_003",
        text: "यह किताब बहुत अच्छी है।",
        langCode: "hin_deva",
        expectedSentiment: "positive",
        expectedEmotion: "joy"
    },
    {
        id: "hin_sent_004",
        text: "यह मौसम बहुत अच्छा है।",
        langCode: "hin_deva",
        expectedSentiment: "positive",
        expectedEmotion: "joy"
    },
    {
        id: "hin_sent_005",
        text: "मैं इस काम से बहुत संतुष्ट हूं।",
        langCode: "hin_deva",
        expectedSentiment: "positive",
        expectedEmotion: "joy"
    },
    {
        id: "hin_sent_006",
        text: "यह बस समय पर आई।",
        langCode: "hin_deva",
        expectedSentiment: "neutral",
        expectedEmotion: "neutral"
    },
    {
        id: "hin_sent_007",
        text: "वह रोज़ ऑफिस जाता है।",
        langCode: "hin_deva",
        expectedSentiment: "neutral",
        expectedEmotion: "neutral"
    },
    {
        id: "hin_sent_008",
        text: "यह एक सामान्य दिन है।",
        langCode: "hin_deva",
        expectedSentiment: "neutral",
        expectedEmotion: "neutral"
    },
    {
        id: "hin_sent_009",
        text: "मैं खाना खा रहा हूं।",
        langCode: "hin_deva",
        expectedSentiment: "neutral",
        expectedEmotion: "neutral"
    },
    {
        id: "hin_sent_010",
        text: "यह किताब मेरे पास है।",
        langCode: "hin_deva",
        expectedSentiment: "neutral",
        expectedEmotion: "neutral"
    },
    {
        id: "hin_sent_011",
        text: "यह भोजन खराब है।",
        langCode: "hin_deva",
        expectedSentiment: "negative",
        expectedEmotion: "disgust"
    },
    {
        id: "hin_sent_012",
        text: "मैं बहुत थक गया हूं।",
        langCode: "hin_deva",
        expectedSentiment: "negative",
        expectedEmotion: "sadness"
    },
    {
        id: "hin_sent_013",
        text: "यह काम बहुत कठिन है।",
        langCode: "hin_deva",
        expectedSentiment: "negative",
        expectedEmotion: "sadness"
    },
    {
        id: "hin_sent_014",
        text: "मैं बहुत गुस्सा हूं।",
        langCode: "hin_deva",
        expectedSentiment: "negative",
        expectedEmotion: "anger"
    },
    {
        id: "hin_sent_015",
        text: "यह बहुत डरावना है।",
        langCode: "hin_deva",
        expectedSentiment: "negative",
        expectedEmotion: "fear"
    },

    // Marathi sentences
    {
        id: "mar_sent_001",
        text: "हे अन्न खूप चवदार आहे!",
        langCode: "mar_deva",
        expectedSentiment: "positive",
        expectedEmotion: "joy"
    },
    {
        id: "mar_sent_002",
        text: "मी आज खूप आनंदी आहे.",
        langCode: "mar_deva",
        expectedSentiment: "positive",
        expectedEmotion: "joy"
    },
    {
        id: "mar_sent_003",
        text: "ही पुस्तक खूप चांगली आहे.",
        langCode: "mar_deva",
        expectedSentiment: "positive",
        expectedEmotion: "joy"
    },
    {
        id: "mar_sent_004",
        text: "हे हवामान खूप चांगले आहे.",
        langCode: "mar_deva",
        expectedSentiment: "positive",
        expectedEmotion: "joy"
    },
    {
        id: "mar_sent_005",
        text: "मी या कामावर खूप समाधानी आहे.",
        langCode: "mar_deva",
        expectedSentiment: "positive",
        expectedEmotion: "joy"
    },
    {
        id: "mar_sent_006",
        text: "ही बस वेळेवर आली.",
        langCode: "mar_deva",
        expectedSentiment: "neutral",
        expectedEmotion: "neutral"
    },
    {
        id: "mar_sent_007",
        text: "तो रोज ऑफिसला जातो.",
        langCode: "mar_deva",
        expectedSentiment: "neutral",
        expectedEmotion: "neutral"
    },
    {
        id: "mar_sent_008",
        text: "हा एक सामान्य दिवस आहे.",
        langCode: "mar_deva",
        expectedSentiment: "neutral",
        expectedEmotion: "neutral"
    },
    {
        id: "mar_sent_009",
        text: "मी जेवण करत आहे.",
        langCode: "mar_deva",
        expectedSentiment: "neutral",
        expectedEmotion: "neutral"
    },
    {
        id: "mar_sent_010",
        text: "ही पुस्तक माझ्याकडे आहे.",
        langCode: "mar_deva",
        expectedSentiment: "neutral",
        expectedEmotion: "neutral"
    },
    {
        id: "mar_sent_011",
        text: "हे अन्न वाईट आहे.",
        langCode: "mar_deva",
        expectedSentiment: "negative",
        expectedEmotion: "disgust"
    },
    {
        id: "mar_sent_012",
        text: "मी खूप थकला आहे.",
        langCode: "mar_deva",
        expectedSentiment: "negative",
        expectedEmotion: "sadness"
    },
    {
        id: "mar_sent_013",
        text: "हे काम खूप कठीण आहे.",
        langCode: "mar_deva",
        expectedSentiment: "negative",
        expectedEmotion: "sadness"
    },
    {
        id: "mar_sent_014",
        text: "मी खूप रागावला आहे.",
        langCode: "mar_deva",
        expectedSentiment: "negative",
        expectedEmotion: "anger"
    },
    {
        id: "mar_sent_015",
        text: "हे खूप भयानक आहे.",
        langCode: "mar_deva",
        expectedSentiment: "negative",
        expectedEmotion: "fear"
    },

    // Konkani sentences
    {
        id: "gom_sent_001",
        text: "हें अन्न खूप चवदार आसा!",
        langCode: "gom_deva",
        expectedSentiment: "positive",
        expectedEmotion: "joy"
    },
    {
        id: "gom_sent_002",
        text: "हांव आज खूप आनंदी आसा.",
        langCode: "gom_deva",
        expectedSentiment: "positive",
        expectedEmotion: "joy"
    },
    {
        id: "gom_sent_003",
        text: "हें पुस्तक खूप चांगलें आसा.",
        langCode: "gom_deva",
        expectedSentiment: "positive",
        expectedEmotion: "joy"
    },
    {
        id: "gom_sent_004",
        text: "हें हवामान खूप चांगलें आसा.",
        langCode: "gom_deva",
        expectedSentiment: "positive",
        expectedEmotion: "joy"
    },
    {
        id: "gom_sent_005",
        text: "हांव ह्या कामाखातर खूप समाधानी आसा.",
        langCode: "gom_deva",
        expectedSentiment: "positive",
        expectedEmotion: "joy"
    },
    {
        id: "gom_sent_006",
        text: "हें बस वेळेवर आयलें.",
        langCode: "gom_deva",
        expectedSentiment: "neutral",
        expectedEmotion: "neutral"
    },
    {
        id: "gom_sent_007",
        text: "तो रोज ऑफिसाला जातो.",
        langCode: "gom_deva",
        expectedSentiment: "neutral",
        expectedEmotion: "neutral"
    },
    {
        id: "gom_sent_008",
        text: "हो एक सामान्य दिवस आसा.",
        langCode: "gom_deva",
        expectedSentiment: "neutral",
        expectedEmotion: "neutral"
    },
    {
        id: "gom_sent_009",
        text: "हांव जेवण करत आसा.",
        langCode: "gom_deva",
        expectedSentiment: "neutral",
        expectedEmotion: "neutral"
    },
    {
        id: "gom_sent_010",
        text: "हें पुस्तक म्हाका आसतें.",
        langCode: "gom_deva",
        expectedSentiment: "neutral",
        expectedEmotion: "neutral"
    },
    {
        id: "gom_sent_011",
        text: "हें अन्न वाईट आसा.",
        langCode: "gom_deva",
        expectedSentiment: "negative",
        expectedEmotion: "disgust"
    },
    {
        id: "gom_sent_012",
        text: "हांव खूप थकलो आसा.",
        langCode: "gom_deva",
        expectedSentiment: "negative",
        expectedEmotion: "sadness"
    },
    {
        id: "gom_sent_013",
        text: "हें काम खूप कठीण आसा.",
        langCode: "gom_deva",
        expectedSentiment: "negative",
        expectedEmotion: "sadness"
    },
    {
        id: "gom_sent_014",
        text: "हांव खूप रागावलो आसा.",
        langCode: "gom_deva",
        expectedSentiment: "negative",
        expectedEmotion: "anger"
    },
    {
        id: "gom_sent_015",
        text: "हें खूप भयानक आसा.",
        langCode: "gom_deva",
        expectedSentiment: "negative",
        expectedEmotion: "fear"
    }
];

export const emotionOptions = [
    { value: 'joy', label: 'Joy/Happiness' },
    { value: 'sadness', label: 'Sadness' },
    { value: 'anger', label: 'Anger' },
    { value: 'fear', label: 'Fear' },
    { value: 'surprise', label: 'Surprise' },
    { value: 'disgust', label: 'Disgust' },
    { value: 'neutral', label: 'Neutral' },
    { value: 'anticipation', label: 'Anticipation' },
    { value: 'trust', label: 'Trust' },
    { value: 'love', label: 'Love/Affection' }
];

export const sentimentOptions = [
    { value: 'positive', label: 'Positive' },
    { value: 'neutral', label: 'Neutral' },
    { value: 'negative', label: 'Negative' }
];
