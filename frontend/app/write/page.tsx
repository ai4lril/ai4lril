// Page for submitting a new public domain sentence to the dataset
"use client";

import { useState } from "react";

export default function AddSentence() {
    // Form state
    const [sentence, setSentence] = useState("");
    const [citation, setCitation] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [confirmed, setConfirmed] = useState(false);

    // Only allow submit if all fields are filled and user confirmed
    const isFormValid =
        sentence.trim() !== "" && citation.trim() !== "" && confirmed;

    // Simulate form submission
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!isFormValid) return;
        setIsSubmitting(true);
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
        <div className="mx-auto w-full max-w-5xl px-2 py-8 md:px-4">
            <h1 className="mb-1 flex items-center justify-center gap-2 text-center text-xl font-bold md:text-2xl">
                Add a public domain sentence
                <svg
                    className="inline-block h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 20h9"
                    />
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M16.5 3.5a2.121 2.121 0 113 3L7 19.5 3 21l1.5-4L16.5 3.5z"
                    />
                </svg>
            </h1>
            <p className="mb-6 text-center text-sm text-gray-600 italic md:text-base">
                Your sentence will help build a free, open dataset for everyone.
                Thank you for contributing!
            </p>
            <div className="grid w-full grid-cols-1 gap-8 md:grid-cols-[2fr_1fr]">
                {/* Form for sentence and citation */}
                <form
                    onSubmit={handleSubmit}
                    className="flex flex-col gap-6 rounded-md border border-gray-100 bg-white/95 p-6 shadow-md backdrop-blur-sm md:rounded-lg"
                >
                    <div>
                        <label
                            className="mb-2 block font-semibold"
                            htmlFor="sentence"
                        >
                            Sentence
                        </label>
                        <textarea
                            id="sentence"
                            className="resize-vertical min-h-[120px] w-full rounded-md border border-gray-300 p-3 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                            placeholder="Enter your public domain sentence here"
                            value={sentence}
                            onChange={(e) => setSentence(e.target.value)}
                            required
                            maxLength={200}
                        />
                    </div>
                    <div>
                        <label
                            className="mb-2 block font-semibold"
                            htmlFor="citation"
                        >
                            Citation
                        </label>
                        <input
                            id="citation"
                            className="w-full rounded-md border border-gray-300 p-2"
                            placeholder="Reference the source of your sentence (required)"
                            value={citation}
                            onChange={(e) => setCitation(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mt-2 flex items-center gap-2">
                        <input
                            type="checkbox"
                            id="confirm"
                            checked={confirmed}
                            onChange={(e) => setConfirmed(e.target.checked)}
                            className="h-4 w-4 accent-blue-600"
                            required
                        />
                        <label
                            htmlFor="confirm"
                            className="cursor-pointer text-sm select-none"
                        >
                            I confirm that this sentence is public domain and I
                            have permission to upload it.
                        </label>
                    </div>
                    <button
                        type="submit"
                        disabled={isSubmitting || submitted || !isFormValid}
                        className={`mt-2 w-full rounded-md px-4 py-2 font-medium shadow-sm transition-all duration-200 hover:shadow ${
                            isSubmitting || !isFormValid
                                ? "cursor-not-allowed bg-blue-200 text-gray-500"
                                : submitted
                                  ? "bg-green-500 text-white"
                                  : "bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:from-blue-700 hover:to-indigo-700"
                        }`}
                    >
                        {isSubmitting
                            ? "Submitting..."
                            : submitted
                              ? "Submitted!"
                              : "Submit Sentence"}
                    </button>
                </form>
                {/* Guidelines Section */}
                <div className="flex flex-col rounded-md border border-gray-100 bg-white/95 p-6 shadow-md backdrop-blur-sm md:rounded-lg">
                    <h2 className="text-md mb-3 font-semibold text-gray-800 md:text-lg">
                        What sentences can I add?
                    </h2>
                    <ul className="list-inside list-disc space-y-2 text-sm text-gray-700">
                        <li>
                            Must be in the public domain (no copyright
                            restrictions)
                        </li>
                        <li>Keep it under 15 words</li>
                        <li>Use proper grammar, spelling, and punctuation</li>
                        <li>
                            No numbers, special characters, or foreign letters
                        </li>
                        <li>
                            Do not include personal, sensitive, or offensive
                            content
                        </li>
                        <li>Provide a valid citation for the source</li>
                        <li>Write naturally and conversationally</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
