// Page for recording and submitting a spoken answer
"use client";

import DialogBox from "@/components/DialogBox";
import RecordBtn from "@/components/RecordBtn";
import BottomBar from "@/components/BottomBar";
import { useState, useEffect } from "react";

export default function Speak() {
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

    // Download the audio file and reset state
    const handleSubmit = () => {
        if (recordedAudio) {
            console.log("Submitting audio:", recordedAudio.name);
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
            <p className="mt-7 text-center sm:mt-3">
                click{" "}
                <span className="inline-flex">
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
                </span>{" "}
                then read the sentence aloud
            </p>
            <div className="relative mx-auto my-4 flex w-full sm:max-w-[80%]">
                {/* Always show the gradient border, even if the card is short */}
                <div className="absolute top-0 left-0 z-10 h-full w-[5px] rounded-l-2xl bg-gradient-to-b from-blue-500 via-indigo-500 to-purple-500 shadow-lg sm:w-[6px]"></div>
                <div className="xs:px-4 relative z-20 ml-[5px] flex max-h-fit min-h-[40vh] flex-1 flex-col items-center justify-around rounded-r-2xl border border-gray-100 bg-white p-8 shadow-2xl sm:ml-[5px] sm:px-8">
                    <DialogBox />

                    <RecordBtn onAudioRecorded={handleAudioRecorded} />
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
