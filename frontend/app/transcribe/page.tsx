// Page for transcribing an audio clip to text for the dataset
"use client";

import { useState } from "react";
import TextBox from "@/components/TextBox";

export default function TranscribePage() {
    // Submission state
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [skipped, setSkipped] = useState(false);

    // Simulate backend call for submitting transcript
    const handleSubmit = (transcript: string) => {
        setIsSubmitting(true);
        setTimeout(() => {
            setIsSubmitting(false);
            setSubmitted(true);
            setTimeout(() => setSubmitted(false), 2000);
        }, 1000);
    };

    // Simulate skipping the current audio
    const handleSkip = () => {
        setSkipped(true);
        setTimeout(() => setSkipped(false), 1500);
    };

    return (
        <div className="mx-auto w-full max-w-2xl px-1 py-4 sm:px-2 md:max-w-4xl md:px-4">
            <h1 className="mb-2 text-center text-2xl font-bold md:text-3xl">
                Transcribe Audio Clip
            </h1>
            <p className="mb-4 text-center text-base text-gray-600 md:mb-6 md:text-lg">
                Listen to the audio and type exactly what you hear. Your
                transcription helps us build better voice technology.
            </p>
            <div className="relative w-full">
                <div className="absolute inset-0 -z-10 hidden rounded-xl bg-gradient-to-br from-cyan-50/40 to-indigo-100/30 blur-xl md:block"></div>
                <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2 md:gap-6">
                    {/* Audio player and instructions */}
                    <div className="relative flex min-h-[220px] flex-col items-center justify-center overflow-hidden rounded-xl border border-gray-100 bg-white/95 p-3 shadow-lg backdrop-blur sm:min-h-[260px] sm:p-4 md:min-h-[340px] md:p-6">
                        {/* Decorative circles */}
                        <div className="pointer-events-none absolute -top-4 -left-4 h-16 w-16 rounded-full bg-cyan-100/60 opacity-70 sm:-top-8 sm:-left-8 sm:h-24 sm:w-24"></div>
                        <div className="pointer-events-none absolute -right-6 -bottom-6 h-20 w-20 rounded-full bg-indigo-100/50 opacity-60 sm:-right-10 sm:-bottom-10 sm:h-28 sm:w-28"></div>
                        <div className="flex w-full flex-col items-center">
                            <audio
                                controls
                                className="my-3 w-full max-w-xs sm:my-5"
                                src="/sample-audio.mp3"
                            >
                                Your browser does not support the audio element.
                            </audio>
                            <div className="text-center text-xs text-gray-500 sm:text-sm">
                                Listen to the audio above and transcribe what
                                you hear.
                            </div>
                        </div>
                    </div>
                    {/* Transcription input and submit */}
                    <div className="relative flex flex-col overflow-hidden rounded-xl border border-gray-100 bg-white/95 p-3 shadow-lg backdrop-blur sm:p-4 md:p-6">
                        {/* Decorative circles */}
                        <div className="pointer-events-none absolute -top-4 -right-4 h-12 w-12 rounded-full bg-amber-100/60 opacity-70 sm:-top-8 sm:-right-8 sm:h-20 sm:w-20"></div>
                        <div className="pointer-events-none absolute -bottom-4 -left-4 h-10 w-10 rounded-full bg-blue-100/50 opacity-60 sm:-bottom-8 sm:-left-8 sm:h-16 sm:w-16"></div>
                        <h2 className="mb-2 text-center text-base font-semibold text-gray-800 md:text-xl">
                            Your Transcription
                        </h2>
                        <div className="relative z-10 mb-3 h-auto min-h-[80px] flex-1 md:mb-4 md:min-h-[100px]">
                            <TextBox
                                onSubmit={handleSubmit}
                                placeholder="Type the spoken words here, exactly as you hear them..."
                            />
                        </div>
                        <div className="mt-2 flex flex-col gap-2 sm:flex-row-reverse sm:gap-3">
                            <button
                                onClick={() =>
                                    document.forms[0].requestSubmit()
                                }
                                disabled={isSubmitting || submitted}
                                className={`flex-1 rounded-full px-4 py-2 text-base font-medium shadow-sm transition-all duration-200 hover:shadow md:text-lg ${
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
                                      : "Submit"}
                            </button>
                            <button
                                type="button"
                                onClick={handleSkip}
                                disabled={isSubmitting || submitted || skipped}
                                className="flex items-center justify-center gap-2 rounded-full bg-white/90 px-6 py-2 text-gray-500 shadow-sm outline outline-black/20 transition-all hover:bg-blue-50 hover:text-blue-700 sm:py-3"
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
                        </div>
                        <div className="mt-2 text-center text-xs text-gray-400">
                            {submitted && "Thank you for your transcription!"}
                            {skipped && "Clip skipped."}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
