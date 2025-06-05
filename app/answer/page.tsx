"use client";

import DialogBox from "@/components/DialogBox"
import RecordBtn from "@/components/RecordBtn";
import BottomBar from "@/components/BottomBar";
import { useState, useEffect } from "react";


export default function Speak() {
    // State to store the recorded audio file and its URL
    const [recordedAudio, setRecordedAudio] = useState<File | null>(null);
    const [audioUrl, setAudioUrl] = useState<string | undefined>(undefined);

    // Handle audio recorded from the RecordBtn component
    const handleAudioRecorded = (audioFile: File) => {
        // Clean up previous URL if it exists
        if (audioUrl) {
            URL.revokeObjectURL(audioUrl);
        }

        // Store the audio file and create a URL for the audio player
        setRecordedAudio(audioFile);
        const newUrl = URL.createObjectURL(audioFile);
        setAudioUrl(newUrl);
    };

    // Handle skip button click
    const handleSkip = () => {
        // Reset audio state
        setRecordedAudio(null);
        if (audioUrl) {
            URL.revokeObjectURL(audioUrl);
            setAudioUrl(undefined);
        }
    };

    // Handle submit button click
    const handleSubmit = () => {
        if (recordedAudio) {
            console.log("Submitting audio:", recordedAudio.name);
            // Here you would handle the submission logic

            // Reset audio state after submission
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
        <div className="flex flex-col items-center w-full h-full justify-center gap">
            <p className="mt-7 sm:mt-3 text-center font-medium tracking-wide">
                <span className="inline-flex align-middle">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-blue-600">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 0 0 6-6v-1.5m-6 7.5a6 6 0 0 1-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 0 1-3-3V4.5a3 3 0 1 1 6 0v8.25a3 3 0 0 1-3 3Z" />
                    </svg>
                </span>
                Respond as naturally as you can
            </p>
            <div className="w-full sm:max-w-[80%] mx-auto my-4 relative flex">
                {/* Gradient border on the right for visual difference */}
                <div className="absolute right-0 top-0 h-full w-[5px] sm:w-[6px] rounded-r-2xl bg-gradient-to-b from-blue-500 via-indigo-500 to-purple-500 shadow-lg z-10"></div>
                <div className="flex-1 min-h-[40vh] max-h-fit sm:px-8 p-8 xs:px-4
                      flex flex-col items-center justify-around 
                      bg-white rounded-l-2xl shadow-2xl relative z-20 border border-gray-100 mr-[5px] sm:mr-[5px]">
                    <h2 className="text-lg font-bold mb-4 tracking-tight">Answer the question below</h2>
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
    )
}