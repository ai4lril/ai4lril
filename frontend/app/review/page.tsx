// Page for reviewing and correcting a transcription for an audio clip
"use client";

import { useState } from "react";
import TextBox from "@/components/TextBox";

export default function Review() {
    // Submission state
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [skipped, setSkipped] = useState(false);

    // Simulate backend call for submitting review
    const handleSubmit = (transcript: string) => {
        setIsSubmitting(true);
        setTimeout(() => {
            setIsSubmitting(false);
            setSubmitted(true);
            setTimeout(() => setSubmitted(false), 2000);
        }, 1000);
    };

    // Simulate skipping the current review
    const handleSkip = () => {
        setSkipped(true);
        setTimeout(() => setSkipped(false), 1500);
    };

    return (
        <div className="mx-auto w-full max-w-2xl px-1 py-4 sm:px-2 md:max-w-4xl md:px-4">
            <h1 className="mb-2 text-center text-2xl font-bold md:text-3xl">
                Review Transcription
            </h1>
            <p className="mb-4 text-center text-base text-gray-600 md:mb-6 md:text-lg">
                Listen to the audio and review the provided transcription. Make
                corrections if needed, then submit your review.
            </p>
            <div className="relative w-full">
                <div className="absolute inset-0 -z-10 hidden rounded-xl bg-gradient-to-br from-cyan-50/40 to-indigo-100/30 blur-xl md:block"></div>
                <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2 md:gap-6">
                    {/* Audio player and instructions */}
                    <div className="relative flex min-h-[220px] flex-col items-center justify-center overflow-hidden rounded-xl border border-gray-100 bg-white/95 p-3 shadow-lg backdrop-blur sm:min-h-[260px] sm:p-4 md:min-h-[340px] md:p-6">
                        {/* Decorative circles */}
                        <div className="pointer-events-none absolute -top-8 -left-8 h-24 w-24 rounded-full bg-cyan-100/60 opacity-60 sm:h-32 sm:w-32"></div>
                        <div className="pointer-events-none absolute -right-10 -bottom-10 h-28 w-28 rounded-full bg-indigo-100/50 opacity-50 sm:h-36 sm:w-36"></div>
                        <div className="flex w-full flex-col items-center">
                            <audio
                                controls
                                className="my-3 w-full max-w-xs sm:my-5"
                                src="/sample-audio.mp3"
                            >
                                Your browser does not support the audio element.
                            </audio>
                            <div className="text-center text-xs text-gray-500 sm:text-sm">
                                Listen to the audio above and review the
                                transcription.
                            </div>
                        </div>
                    </div>
                    {/* Review input and submit */}
                    <div className="relative flex flex-col overflow-hidden rounded-xl border border-gray-100 bg-white/95 p-3 shadow-lg backdrop-blur sm:p-4 md:p-6">
                        {/* Decorative circles */}
                        <div className="pointer-events-none absolute -top-8 -left-8 h-20 w-20 rounded-full bg-amber-100/60 opacity-60 sm:h-28 sm:w-28"></div>
                        <div className="pointer-events-none absolute -right-10 -bottom-10 h-16 w-16 rounded-full bg-blue-100/50 opacity-50 sm:h-24 sm:w-24"></div>
                        <h2 className="mb-2 text-center text-base font-semibold text-gray-800 md:text-xl">
                            Transcription Review
                        </h2>
                        <div className="relative z-10 mb-3 h-auto min-h-[80px] flex-1 md:mb-4 md:min-h-[100px]">
                            <TextBox
                                onSubmit={handleSubmit}
                                placeholder="Review and edit the transcription if necessary..."
                            />
                        </div>
                        <div className="mt-2 flex flex-col gap-2 sm:flex-row-reverse sm:gap-3">
                            <button
                                type="button"
                                onClick={handleSkip}
                                disabled={isSubmitting || submitted || skipped}
                                className="flex flex-1 items-center justify-center gap-2 rounded-full bg-white/90 px-4 py-2 text-base font-medium text-gray-500 shadow-sm outline outline-black/20 transition-all duration-200 hover:bg-blue-50 hover:text-blue-700 hover:shadow md:text-sm lg:text-xs"
                            >
                                Skip
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="h-5 w-5"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M3 8.689c0-.864.933-1.406 1.683-.977l7.108 4.061a1.125 1.125 0 0 1 0 1.954l-7.108 4.061A1.125 1.125 0 0 1 3 16.811V8.69ZM12.75 8.689c0-.864.933-1.406 1.683-.977l7.108 4.061a1.125 1.125 0 0 1 0 1.954l-7.108 4.061a1.125 1.125 0 0 1-1.683-.977V8.69Z"
                                    />
                                </svg>
                            </button>
                            <button
                                onClick={() =>
                                    document.forms[0].requestSubmit()
                                }
                                disabled={isSubmitting || submitted}
                                className={`flex-1 rounded-full px-4 py-2 text-base font-medium shadow-sm transition-all duration-200 hover:shadow md:text-sm lg:text-xs ${
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
                                      : "Submit Review"}
                            </button>
                            <button
                                type="button"
                                // Add your edit logic here
                                className="flex flex-1 items-center justify-center gap-2 rounded-full border border-yellow-300 bg-yellow-50 px-4 py-2 text-base font-medium text-yellow-700 transition-all hover:bg-yellow-100 md:text-sm lg:text-xs"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M15.232 5.232l3.536 3.536M9 13l6.586-6.586a2 2 0 112.828 2.828L11.828 15.828a2 2 0 01-2.828 0L9 13zm-6 6h6v-2a2 2 0 012-2h2a2 2 0 012 2v2h6"
                                    />
                                </svg>
                                Edit
                            </button>
                        </div>
                        <div className="mt-2 text-center text-xs text-gray-400">
                            {submitted && "Thank you for your review!"}
                            {skipped && "Clip skipped."}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
