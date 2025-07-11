// Bottom bar with skip, audio player, and submit controls
import React, { useRef, useState } from "react";

interface BottomBarProps {
    audioSrc?: string; // Source URL for the audio player
    onSkip: () => void; // Callback when skip is clicked
    onSubmit: () => void; // Callback when submit is clicked
    disabled?: boolean; // Optional prop to disable buttons
}

export default function BottomBar({
    audioSrc,
    onSkip,
    onSubmit,
    disabled = false,
}: BottomBarProps) {
    const audioRef = useRef<HTMLAudioElement>(null);
    const [isPlaying, setIsPlaying] = useState(false);

    // Toggle play/pause for the audio player
    const handlePlayPause = () => {
        if (!audioRef.current) return;
        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };

    return (
        <div className="mx-auto flex w-full max-w-2xl flex-col items-center justify-between gap-3 rounded-lg border border-indigo-100 bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50/70 px-2 py-3 sm:mt-10 sm:flex-row sm:gap-6 sm:rounded-full sm:bg-white/80 sm:shadow-lg">
            {/* Skip Button */}
            <button
                onClick={onSkip}
                className="flex w-[60vw] min-w-[140px] items-center justify-center gap-2 rounded-full bg-white/90 px-6 py-2 text-gray-500 shadow-sm transition-all hover:bg-blue-50 hover:text-blue-700 sm:w-[220px] sm:py-3"
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

            {/* Audio + Submit Group */}
            <div className="flex w-full flex-col items-center justify-end gap-2 sm:w-auto sm:flex-row sm:gap-3">
                {/* Audio Player */}
                <div className="flex w-full items-center justify-center space-x-3 rounded-full bg-white/80 px-1 py-3 shadow sm:w-auto sm:px-7 md:px-10">
                    <button
                        onClick={handlePlayPause}
                        className="text-blue-600 hover:text-indigo-700 focus:outline-none"
                    >
                        {isPlaying ? (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                            >
                                <rect
                                    x="6"
                                    y="4"
                                    width="4"
                                    height="16"
                                    rx="1"
                                />
                                <rect
                                    x="14"
                                    y="4"
                                    width="4"
                                    height="16"
                                    rx="1"
                                />
                            </svg>
                        ) : (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                            >
                                <path d="M8 5v14l11-7z" />
                            </svg>
                        )}
                    </button>

                    <audio
                        ref={audioRef}
                        src={audioSrc}
                        className="hidden"
                        onEnded={() => setIsPlaying(false)}
                    />

                    {audioSrc ? (
                        <span className="text-sm font-medium text-blue-700">
                            Play Recording
                        </span>
                    ) : (
                        <span className="text-sm text-gray-400">
                            No recording
                        </span>
                    )}
                </div>

                {/* Submit Button */}
                <button
                    onClick={onSubmit}
                    disabled={disabled || !audioSrc}
                    className={`flex w-[40vw] min-w-[110px] items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 px-4 py-2 font-semibold text-white shadow transition-all sm:w-auto sm:py-3 ${
                        audioSrc
                            ? "hover:from-blue-600 hover:to-indigo-600 focus:ring-2 focus:ring-blue-300 focus:outline-none"
                            : "cursor-not-allowed opacity-60"
                    }`}
                >
                    Submit
                </button>
            </div>
        </div>
    );
}
