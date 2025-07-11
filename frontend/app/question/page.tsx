// Page for submitting a new question to the dataset
"use client";

import { useState } from "react";
import TextBox from "@/components/TextBox";

export default function Question() {
    // Submission state
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    // Simulate backend call for submitting a question
    const handleSubmit = (question: string) => {
        setIsSubmitting(true);
        setTimeout(() => {
            setIsSubmitting(false);
            setSubmitted(true);
            setTimeout(() => setSubmitted(false), 3000);
        }, 1000);
    };

    return (
        <div className="mx-auto w-full max-w-2xl px-2 py-4 md:max-w-4xl md:px-4">
            <h1 className="mb-3 text-center text-xl font-bold md:text-2xl">
                Add a Question
            </h1>

            <p className="mb-4 text-center text-sm text-gray-600 md:text-base">
                Submit questions for others to answer. Good questions help us
                collect valuable voice data.
            </p>

            <div className="relative w-full">
                <div className="absolute inset-0 -z-10 hidden rounded-xl bg-gradient-to-b from-blue-50/30 to-indigo-50/30 blur-xl md:block"></div>

                <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-[2fr_1fr]">
                    {/* Input for new question */}
                    <div className="relative flex flex-col overflow-hidden rounded-md border border-gray-100 bg-white/95 p-4 shadow-md backdrop-blur-sm md:rounded-lg">
                        {/* Decorative circles */}
                        <div className="absolute -top-8 -right-8 hidden h-20 w-20 rounded-full bg-indigo-100/50 opacity-70 sm:block"></div>
                        <div className="absolute -bottom-6 -left-6 hidden h-16 w-16 rounded-full bg-blue-100/50 opacity-70 sm:block"></div>

                        <h2 className="text-md relative mb-3 font-semibold text-gray-800 md:text-lg">
                            <span className="relative inline-block pb-1">
                                Your Question
                                <span className="absolute -bottom-0.5 left-0 h-[2px] w-full bg-gradient-to-r from-indigo-500 to-purple-500"></span>
                            </span>
                        </h2>

                        <div className="relative z-10 mb-4 h-auto min-h-[100px] flex-1">
                            <TextBox
                                onSubmit={handleSubmit}
                                placeholder="Type your thought-provoking question here..."
                            />
                        </div>

                        <button
                            onClick={() => document.forms[0].requestSubmit()}
                            disabled={isSubmitting || submitted}
                            className={`mt-2 w-full rounded-md px-4 py-2 font-medium shadow-sm transition-all duration-200 hover:shadow ${
                                isSubmitting
                                    ? "cursor-not-allowed bg-blue-300"
                                    : submitted
                                      ? "bg-green-500 text-white"
                                      : "bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:from-blue-700 hover:to-indigo-700"
                            }`}
                        >
                            {isSubmitting
                                ? "Submitting..."
                                : submitted
                                  ? "Submitted!"
                                  : "Submit Question"}
                        </button>
                    </div>

                    {/* Guidelines section */}
                    <div className="relative mt-4 flex flex-col overflow-hidden rounded-md border border-gray-100 bg-white/95 p-4 shadow-md backdrop-blur-sm md:mt-0 md:rounded-lg">
                        {/* Decorative circle */}
                        <div className="absolute -top-6 -right-6 hidden h-16 w-16 rounded-full bg-amber-100/50 opacity-70 sm:block"></div>

                        <h2 className="text-md relative mb-3 font-semibold text-gray-800 md:text-lg">
                            <span className="relative inline-block pb-1">
                                Question Guidelines
                                <span className="absolute -bottom-0.5 left-0 h-[2px] w-full bg-gradient-to-r from-amber-500 to-orange-500"></span>
                            </span>
                        </h2>

                        <div className="space-y-4">
                            <div>
                                <h3 className="mb-2 flex items-center text-sm font-medium text-green-700">
                                    <svg
                                        className="mr-2 h-4 w-4"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M5 13l4 4L19 7"
                                        />
                                    </svg>
                                    Do
                                </h3>
                                <ul className="ml-6 space-y-1 text-sm text-gray-700">
                                    <li>Use correct spelling and grammar</li>
                                    <li>
                                        Choose simple questions anyone can
                                        understand
                                    </li>
                                    <li>
                                        Ask questions that can be answered in a
                                        few sentences
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="mb-2 flex items-center text-sm font-medium text-red-700">
                                    <svg
                                        className="mr-2 h-4 w-4"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    </svg>
                                    Don't
                                </h3>
                                <ul className="ml-6 space-y-1 text-sm text-gray-700">
                                    <li>
                                        Ask for personal or identifying
                                        information
                                    </li>
                                    <li>
                                        Include prejudiced or offensive content
                                    </li>
                                    <li>
                                        Ask sensitive or inappropriate questions
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
