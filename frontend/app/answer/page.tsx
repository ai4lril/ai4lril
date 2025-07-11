// Page for recording and submitting an answer to a question
"use client";

import DialogBox from "@/components/DialogBox";
import RecordBtn from "@/components/RecordBtn";
import BottomBar from "@/components/BottomBar";
import { useState, useEffect } from "react";

export default function Answer() {
    // Holds the recorded audio file and its URL for playback
    const [recordedAudio, setRecordedAudio] = useState<File | null>(null);
    const [audioUrl, setAudioUrl] = useState<string | undefined>(undefined);

    // Called when a new audio file is recorded
    const handleAudioRecorded = (audioFile: File) => {
        if (audioUrl) {
            URL.revokeObjectURL(audioUrl);
        }
        setRecordedAudio(audioFile);
        const newUrl = URL.createObjectURL(audioFile);
        setAudioUrl(newUrl);
    };

    // Reset state when skipping
    const handleSkip = () => {
        setRecordedAudio(null);
        if (audioUrl) {
            URL.revokeObjectURL(audioUrl);
            setAudioUrl(undefined);
        }
    };

    // Handle submit: placeholder for backend logic, then reset state
    const handleSubmit = () => {
        if (recordedAudio) {
            console.log("Submitting audio:", recordedAudio.name);
            // TODO: Add submission logic here
            setRecordedAudio(null);
            if (audioUrl) {
                URL.revokeObjectURL(audioUrl);
                setAudioUrl(undefined);
            }
        }
    };

    // Clean up URLs when component unmounts
    useEffect(() => {
        return () => {
            if (audioUrl) {
                URL.revokeObjectURL(audioUrl);
            }
        };
    }, []);

    return (
        <div className="gap flex h-full w-full flex-col items-center justify-center">
            <p className="mt-7 text-center font-medium tracking-wide sm:mt-3">
                <span className="inline-flex align-middle">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-6 text-blue-600"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 18.75a6 6 0 0 0 6-6v-1.5m-6 7.5a6 6 0 0 1-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 0 1-3-3V4.5a3 3 0 1 1 6 0v8.25a3 3 0 0 1-3 3Z"
                        />
                    </svg>
                </span>
                Respond as naturally as you can
            </p>
            <div className="relative mx-auto my-4 flex w-full sm:max-w-[80%]">
                {/* Gradient border on the right for visual difference */}
                <div className="absolute top-0 right-0 z-10 h-full w-[5px] rounded-r-2xl bg-gradient-to-b from-blue-500 via-indigo-500 to-purple-500 shadow-lg sm:w-[6px]"></div>
                <div className="xs:px-4 relative z-20 mr-[5px] flex max-h-fit min-h-[40vh] flex-1 flex-col items-center justify-around rounded-l-2xl border border-gray-100 bg-white p-8 shadow-2xl sm:mr-[5px] sm:px-8">
                    <div className="flex flex-col items-center">
                        <h2 className="mb-4 text-lg font-bold tracking-tight">
                            Answer the question below
                        </h2>
                        <span className="block h-[2px] w-[100px] bg-gradient-to-r from-indigo-500 to-purple-500"></span>
                    </div>
                    <DialogBox />
                    <div className="mt-6">
                        <RecordBtn onAudioRecorded={handleAudioRecorded} />
                    </div>
                </div>
            </div>

            <BottomBar
                audioSrc={audioUrl}
                onSkip={handleSkip}
                onSubmit={handleSubmit}
            />
        </div>
    );
}
