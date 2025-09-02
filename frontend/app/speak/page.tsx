"use client";

import DialogBox from "@/components/DialogBox"
import RecordBtn from "@/components/RecordBtn";
import BottomBar from "@/components/BottomBar";
import { useState, useEffect } from "react";
import { codeToLabel } from "@/lib/languages";
import { getPreferredLanguage } from "@/lib/langPreference";


export default function Speak() {
    // State to store the recorded audio file and its URL
    const [recordedAudio, setRecordedAudio] = useState<File | null>(null);
    const [audioUrl, setAudioUrl] = useState<string | undefined>(undefined);
    const [lang, setLang] = useState<string | null>(null);

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
            // Save the audio file by triggering a download
            const url = URL.createObjectURL(recordedAudio);
            const a = document.createElement("a");
            a.href = url;
            a.download = recordedAudio.name || "recording.webm";
            document.body.appendChild(a);
            a.click();
            setTimeout(() => {
                document.body.removeChild(a);
                URL.revokeObjectURL(url);
            }, 100);

            // Reset audio state after submission
            setRecordedAudio(null);
            if (audioUrl) {
                URL.revokeObjectURL(audioUrl);
                setAudioUrl(undefined);
            }
        }
    };

    // Init language + clean up URLs when component unmounts
    useEffect(() => {
        const saved = getPreferredLanguage();
        setLang(saved);
        function onLangChanged(e: Event) {
            const code = (e as CustomEvent<string>).detail;
            setLang(code);
        }
        window.addEventListener('language-changed', onLangChanged as EventListener);
        return () => {
            if (audioUrl) {
                URL.revokeObjectURL(audioUrl);
            }
            window.removeEventListener('language-changed', onLangChanged as EventListener);
        };
    }, [audioUrl]);

    return (
        <div className="flex flex-col items-center w-full h-full justify-center gap">
            <p className="mt-7 sm:mt-3 text-center">click <span className="inline-flex">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-blue-600">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 0 0 6-6v-1.5m-6 7.5a6 6 0 0 1-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 0 1-3-3V4.5a3 3 0 1 1 6 0v8.25a3 3 0 0 1-3 3Z" />
                </svg>
            </span> then read the sentence aloud</p>
            <div className="w-full card-wide mx-auto my-2 relative flex flex-col">
                <div className="text-center mb-2">
                    <span className="inline-block text-xs px-2 py-1 rounded-full bg-indigo-50 text-indigo-700 border border-indigo-200">{codeToLabel(lang)}</span>
                </div>
                <div className="w-full relative">
                {/* Always show the gradient border, even if the card is short */}
                <div className="absolute left-0 top-0 h-full w-[5px] sm:w-[6px] rounded-l-2xl bg-gradient-to-b from-blue-500 via-indigo-500 to-purple-500 shadow-lg z-10"></div>
                <div className="flex-1 min-h-[40vh] max-h-fit sm:px-8 p-8 xs:px-4
                      flex flex-col items-center justify-around 
                      bg-white rounded-r-2xl shadow-2xl relative z-20 border border-gray-100 ml-[5px] sm:ml-[5px]">
                    <DialogBox />

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