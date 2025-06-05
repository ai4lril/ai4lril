import React, { useRef, useState } from 'react';

interface BottomBarProps {
    audioSrc?: string; // Source URL for the audio player
    onSkip: () => void; // Callback when skip is clicked
    onSubmit: () => void; // Callback when submit is clicked
    disabled?: boolean; // Optional prop to disable buttons
}

export default function BottomBar({ audioSrc, onSkip, onSubmit, disabled = false }: BottomBarProps) {

    const audioRef = useRef<HTMLAudioElement>(null);
    const [isPlaying, setIsPlaying] = useState(false);

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
        <div className="sm:mt-10 sm:bg-white sm:rounded-full grid items-center grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 w-full lg:w-[85%]  mx-auto px-4 py-3 sm:shadow-lg">
            {/* Skip Button */}
            <button
                onClick={onSkip}
                className="bg-white inset-shadow-sm inset-shadow-gray-300  w-[12vw] min-w-[130px] px-5 py-2 sm:py-5 outline-2 rounded-full text-gray-500 hover:bg-gray-50 hover:border-gray-400  transition-all flex items-center justify-center gap-2 sm:order-1"
            >
                Skip
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8.689c0-.864.933-1.406 1.683-.977l7.108 4.061a1.125 1.125 0 0 1 0 1.954l-7.108 4.061A1.125 1.125 0 0 1 3 16.811V8.69ZM12.75 8.689c0-.864.933-1.406 1.683-.977l7.108 4.061a1.125 1.125 0 0 1 0 1.954l-7.108 4.061a1.125 1.125 0 0 1-1.683-.977V8.69Z" />
                </svg>
            </button>

            {/* Audio Player - Full width on mobile, middle column on desktop */}
            <div className="bg-gray-0  shadow-lg col-span-2 sm:col-span-1 flex items-center justify-center space-x-3 px-1 sm:px-7 md:px-10 lg:w-full sm:m-auto py-3.5 mt-2 rounded-full  sm:order-2 order-last">
                <button
                    onClick={handlePlayPause}
                    className="text-gray-600 hover:text-gray-800 focus:outline-none"
                >
                    {isPlaying ? (
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                            <rect x="6" y="4" width="4" height="16" rx="1" />
                            <rect x="14" y="4" width="4" height="16" rx="1" />
                        </svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
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
                    <span className="text-sm text-gray-500">Play Recording</span>
                ) : (
                    <span className="text-sm text-gray-400">No recording</span>
                )}
            </div>

            {/* Submit Button */}
            <button
                onClick={onSubmit}
                disabled={disabled || !audioSrc}
                className={`bg-white inset-shadow-sm inset-shadow-gray-300 w-[12vw] min-w-[130px] px-5 py-2 sm:py-5 outline-2 rounded-full transition-all flex items-center justify-center sm:order-3 ms-auto
                    ${audioSrc
                        ? 'text-green-800 outline-green-400 hover:bg-blue-50 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300'
                        : 'text-gray-500 cursor-not-allowed'
                    }`}
            >
                Submit
            </button>
        </div>
    );
};
