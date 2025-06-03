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
        <div className="flex flex-col items-center w-full h-full justify-center gap ">
            <p className="mt-7 sm:mt-3">click <span className="inline-flex">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 0 0 6-6v-1.5m-6 7.5a6 6 0 0 1-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 0 1-3-3V4.5a3 3 0 1 1 6 0v8.25a3 3 0 0 1-3 3Z" />
                </svg>
            </span> then read the sentence aloud</p>
            <div className="w-full max-w-[800px] mx-auto 
                      min-h-[40vh] max-h-fit
                      sm:px-8 p-8 xs:px-4 my-4
                      flex flex-col items-center justify-around 
                      bg-white rounded-sm shadow-2xl">
                <DialogBox />
                <RecordBtn onAudioRecorded={handleAudioRecorded} />
            </div>
            
            <BottomBar
                audioSrc={audioUrl}
                onSkip={handleSkip}
                onSubmit={handleSubmit}
            />
        </div>
    )
}