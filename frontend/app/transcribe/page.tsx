"use client";

import { useState } from "react";
import TextBox from "@/components/TextBox";

export default function TranscribePage() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [skipped, setSkipped] = useState(false);

    const handleSubmit = (transcript: string) => {
        setIsSubmitting(true);
        // Simulate backend call
        setTimeout(() => {
            setIsSubmitting(false);
            setSubmitted(true);
            setTimeout(() => setSubmitted(false), 2000);
        }, 1000);
    };

    const handleSkip = () => {
        setSkipped(true);
        setTimeout(() => setSkipped(false), 1500);
    };

    return (
        <div className="w-full max-w-2xl md:max-w-4xl py-4 px-1 sm:px-2 md:px-4 mx-auto">
            <h1 className="text-2xl md:text-3xl font-bold text-center mb-2">Transcribe Audio Clip</h1>
            <p className="text-center text-gray-600 mb-4 md:mb-6 text-base md:text-lg">
                Listen to the audio and type exactly what you hear. Your transcription helps us build better voice technology.
            </p>
            <div className="w-full relative">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-50/40 to-indigo-100/30 -z-10 rounded-xl blur-xl hidden md:block"></div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 w-full">
                    {/* Audio Player Section */}
                    <div className="bg-white/95 backdrop-blur rounded-xl p-3 sm:p-4 md:p-6 shadow-lg border border-gray-100 flex flex-col items-center justify-center min-h-[220px] sm:min-h-[260px] md:min-h-[340px] relative overflow-hidden">
                        {/* Decorative circles */}
                        <div className="absolute -top-4 -left-4 w-16 h-16 sm:-top-8 sm:-left-8 sm:w-24 sm:h-24 bg-cyan-100/60 rounded-full opacity-70 pointer-events-none"></div>
                        <div className="absolute -bottom-6 -right-6 w-20 h-20 sm:-bottom-10 sm:-right-10 sm:w-28 sm:h-28 bg-indigo-100/50 rounded-full opacity-60 pointer-events-none"></div>
                        <div className="w-full flex flex-col items-center">
                            <audio
                                controls
                                className="my-3 sm:my-5 w-full max-w-xs"
                                src="/sample-audio.mp3"
                            >
                                Your browser does not support the audio element.
                            </audio>
                            <div className="text-center text-gray-500 text-xs sm:text-sm">
                                Listen to the audio above and transcribe what you hear.
                            </div>
                        </div>
                    </div>
                    {/* Transcription Section */}
                    <div className="bg-white/95 backdrop-blur rounded-xl p-3 sm:p-4 md:p-6 shadow-lg border border-gray-100 flex flex-col relative overflow-hidden">
                        {/* Decorative circles */}
                        <div className="absolute -top-4 -right-4 w-12 h-12 sm:-top-8 sm:-right-8 sm:w-20 sm:h-20 bg-amber-100/60 rounded-full opacity-70 pointer-events-none"></div>
                        <div className="absolute -bottom-4 -left-4 w-10 h-10 sm:-bottom-8 sm:-left-8 sm:w-16 sm:h-16 bg-blue-100/50 rounded-full opacity-60 pointer-events-none"></div>
                        <h2 className="text-base md:text-xl font-semibold text-gray-800 mb-2 text-center">Your Transcription</h2>
                        <div className="mb-3 md:mb-4 min-h-[80px] md:min-h-[100px] h-auto flex-1 relative z-10">
                            <TextBox
                                onSubmit={handleSubmit}
                                placeholder="Type the spoken words here, exactly as you hear them..."
                            />
                        </div>
                        <div className="flex flex-col sm:flex-row-reverse gap-2 sm:gap-3 mt-2">
                            <button
                                onClick={() => document.forms[0].requestSubmit()}
                                disabled={isSubmitting || submitted}
                                className={`flex-1 px-4 py-2 rounded-full font-medium transition-all duration-200 shadow-sm hover:shadow text-base md:text-lg
                                    ${isSubmitting
                                        ? "bg-blue-300 cursor-not-allowed"
                                        : submitted
                                            ? "bg-green-500 text-white"
                                            : "bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white"
                                    }`}
                            >
                                {isSubmitting ? "Submitting..." : submitted ? "Submitted!" : "Submit"}
                            </button>
                            <button
                                type="button"
                                onClick={handleSkip}
                                disabled={isSubmitting || submitted || skipped}

                                className="bg-white/90 shadow-sm outline outline-black/20 px-6 py-2 sm:py-3 rounded-full text-gray-500 hover:bg-blue-50 hover:text-blue-700 transition-all flex items-center justify-center gap-2"
                            >
                                Skip
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8.689c0-.864.933-1.406 1.683-.977l7.108 4.061a1.125 1.125 0 0 1 0 1.954l-7.108 4.061A1.125 1.125 0 0 1 3 16.811V8.69ZM12.75 8.689c0-.864.933-1.406 1.683-.977l7.108 4.061a1.125 1.125 0 0 1 0 1.954l-7.108 4.061a1.125 1.125 0 0 1-1.683-.977V8.69Z" />
                                </svg>
                            </button>
                        </div>
                        <div className="text-center text-xs text-gray-400 mt-2">
                            {submitted && "Thank you for your transcription!"}
                            {skipped && "Clip skipped."}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
