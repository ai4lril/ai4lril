"use client";

import { useState } from "react";
import TextBox from "@/components/TextBox";

export default function Question() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (question: string) => {
        setIsSubmitting(true);
        // Here you would normally send the data to your backend
        setTimeout(() => {
            setIsSubmitting(false);
            setSubmitted(true);
            // Reset after showing success message
            setTimeout(() => setSubmitted(false), 3000);
        }, 1000);
    };

    return (
        <div className="w-full max-w-2xl md:max-w-4xl py-4 px-2 md:px-4 mx-auto">
            <h1 className="text-xl md:text-2xl font-bold text-center mb-3">Add a Question</h1>

            <p className="text-center text-gray-600 mb-4 text-sm md:text-base">
                Submit questions for others to answer. Good questions help us collect valuable voice data.
            </p>

            <div className="w-full relative">
                <div className="absolute inset-0 bg-gradient-to-b from-blue-50/30 to-indigo-50/30 -z-10 rounded-xl blur-xl hidden md:block"></div>

                <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-4 w-full">
                    {/* Question input section */}
                    <div className="bg-white/95 backdrop-blur-sm rounded-md md:rounded-lg p-4 shadow-md border border-gray-100 relative overflow-hidden flex flex-col">
                        {/* Decorative circles */}
                        <div className="absolute -right-8 -top-8 w-20 h-20 bg-indigo-100/50 rounded-full opacity-70 hidden sm:block"></div>
                        <div className="absolute -left-6 -bottom-6 w-16 h-16 bg-blue-100/50 rounded-full opacity-70 hidden sm:block"></div>

                        <h2 className="text-md md:text-lg font-semibold mb-3 text-gray-800 relative">
                            <span className="inline-block relative pb-1">
                                Your Question
                                <span className="absolute -bottom-0.5 left-0 w-full h-[2px] bg-gradient-to-r from-indigo-500 to-purple-500"></span>
                            </span>
                        </h2>

                        <div className="mb-4 min-h-[100px] h-auto flex-1 relative z-10">
                            <TextBox
                                onSubmit={handleSubmit}
                                placeholder="Type your thought-provoking question here..."
                            />
                        </div>

                        <button
                            onClick={() => document.forms[0].requestSubmit()}
                            disabled={isSubmitting || submitted}
                            className={`w-full px-4 py-2 rounded-md font-medium transition-all duration-200 shadow-sm hover:shadow mt-2 ${isSubmitting
                                ? "bg-blue-300 cursor-not-allowed"
                                : submitted
                                    ? "bg-green-500 text-white"
                                    : "bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white"
                                }`}
                        >
                            {isSubmitting ? "Submitting..." : submitted ? "Submitted!" : "Submit Question"}
                        </button>
                    </div>

                    {/* Guidelines section */}
                    <div className="bg-white/95 backdrop-blur-sm rounded-md md:rounded-lg p-4 shadow-md border border-gray-100 relative overflow-hidden mt-4 md:mt-0 flex flex-col">
                        {/* Decorative circle */}
                        <div className="absolute -right-6 -top-6 w-16 h-16 bg-amber-100/50 rounded-full opacity-70 hidden sm:block"></div>

                        <h2 className="text-md md:text-lg font-semibold mb-3 text-gray-800 relative">
                            <span className="inline-block relative pb-1">
                                Question Guidelines
                                <span className="absolute -bottom-0.5 left-0 w-full h-[2px] bg-gradient-to-r from-amber-500 to-orange-500"></span>
                            </span>
                        </h2>

                        <div className="space-y-4">
                            <div>
                                <h3 className="text-sm font-medium text-green-700 mb-2 flex items-center">
                                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    Do
                                </h3>
                                <ul className="text-sm text-gray-700 space-y-1 ml-6">
                                    <li>Use correct spelling and grammar</li>
                                    <li>Choose simple questions anyone can understand</li>
                                    <li>Ask questions that can be answered in a few sentences</li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="text-sm font-medium text-red-700 mb-2 flex items-center">
                                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                    Don't
                                </h3>
                                <ul className="text-sm text-gray-700 space-y-1 ml-6">
                                    <li>Ask for personal or identifying information</li>
                                    <li>Include prejudiced or offensive content</li>
                                    <li>Ask sensitive or inappropriate questions</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
