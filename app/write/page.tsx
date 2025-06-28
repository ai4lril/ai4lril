"use client";

import { useState } from "react";

export default function AddSentence() {
    const [sentence, setSentence] = useState("");
    const [citation, setCitation] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [confirmed, setConfirmed] = useState(false);

    const isFormValid = sentence.trim() !== "" && citation.trim() !== "" && confirmed;

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!isFormValid) return;
        setIsSubmitting(true);
        // Simulate submission
        setTimeout(() => {
            setIsSubmitting(false);
            setSubmitted(true);
            setSentence("");
            setCitation("");
            setConfirmed(false);
            setTimeout(() => setSubmitted(false), 3000);
        }, 1000);
    };

    return (
        <div className="w-full max-w-5xl mx-auto py-8 px-2 md:px-4">
            <h1 className="text-xl md:text-2xl font-bold text-center mb-1 flex items-center justify-center gap-2">
                Add a public domain sentence
                <svg className="w-5 h-5 inline-block" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 20h9" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16.5 3.5a2.121 2.121 0 113 3L7 19.5 3 21l1.5-4L16.5 3.5z" /></svg>
            </h1>
            <p className="text-center text-gray-600 mb-6 text-sm md:text-base italic">
                Your sentence will help build a free, open dataset for everyone. Thank you for contributing!
            </p>
            <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-8 w-full">
                {/* Form Section */}
                <form onSubmit={handleSubmit} className="bg-white/95 backdrop-blur-sm rounded-md md:rounded-lg p-6 shadow-md border border-gray-100 flex flex-col gap-6">
                    <div>
                        <label className="block font-semibold mb-2" htmlFor="sentence">Sentence</label>
                        <textarea
                            id="sentence"
                            className="w-full min-h-[120px] border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-400 resize-vertical"
                            placeholder="Enter your public domain sentence here"
                            value={sentence}
                            onChange={e => setSentence(e.target.value)}
                            required
                            maxLength={200}
                        />
                    </div>
                    <div>
                        <label className="block font-semibold mb-2" htmlFor="citation">Citation</label>
                        <input
                            id="citation"
                            className="w-full border border-gray-300 rounded-md p-2"
                            placeholder="Reference the source of your sentence (required)"
                            value={citation}
                            onChange={e => setCitation(e.target.value)}
                            required
                        />
                    </div>
                    <div className="flex items-center gap-2 mt-2">
                        <input
                            type="checkbox"
                            id="confirm"
                            checked={confirmed}
                            onChange={e => setConfirmed(e.target.checked)}
                            className="accent-blue-600 w-4 h-4"
                            required
                        />
                        <label htmlFor="confirm" className="text-sm select-none cursor-pointer">
                            I confirm that this sentence is public domain and I have permission to upload it.
                        </label>
                    </div>
                    <button
                        type="submit"
                        disabled={isSubmitting || submitted || !isFormValid}
                        className={`w-full px-4 py-2 rounded-md font-medium transition-all duration-200 shadow-sm hover:shadow mt-2 ${isSubmitting || !isFormValid
                            ? "bg-blue-200 cursor-not-allowed text-gray-500"
                            : submitted
                                ? "bg-green-500 text-white"
                                : "bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white"
                            }`}
                    >
                        {isSubmitting ? "Submitting..." : submitted ? "Submitted!" : "Submit Sentence"}
                    </button>
                </form>
                {/* Guidelines Section */}
                <div className="bg-white/95 backdrop-blur-sm rounded-md md:rounded-lg p-6 shadow-md border border-gray-100 flex flex-col">
                    <h2 className="text-md md:text-lg font-semibold mb-3 text-gray-800">What sentences can I add?</h2>
                    <ul className="text-sm text-gray-700 space-y-2 list-disc list-inside">
                        <li>Must be in the public domain (no copyright restrictions)</li>
                        <li>Keep it under 15 words</li>
                        <li>Use proper grammar, spelling, and punctuation</li>
                        <li>No numbers, special characters, or foreign letters</li>
                        <li>Do not include personal, sensitive, or offensive content</li>
                        <li>Provide a valid citation for the source</li>
                        <li>Write naturally and conversationally</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
