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
        <div className="sm:mt-10 bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50/70 sm:bg-white/80 sm:rounded-full rounded-lg w-full max-w-2xl mx-auto px-2 py-3 sm:shadow-lg border border-indigo-100 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-6">
            {/* Skip Button */}
            <button
                onClick={onSkip}
                className="bg-white/90 shadow-sm w-[60vw] sm:w-[220px] min-w-[140px] px-6 py-2 sm:py-3 rounded-full text-gray-500 hover:bg-blue-50 hover:text-blue-700 transition-all flex items-center justify-center gap-2"
            >
                Skip
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8.689c0-.864.933-1.406 1.683-.977l7.108 4.061a1.125 1.125 0 0 1 0 1.954l-7.108 4.061A1.125 1.125 0 0 1 3 16.811V8.69ZM12.75 8.689c0-.864.933-1.406 1.683-.977l7.108 4.061a1.125 1.125 0 0 1 0 1.954l-7.108 4.061a1.125 1.125 0 0 1-1.683-.977V8.69Z" />
                </svg>
            </button>

            {/* Audio + Submit Group */}
            <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3 w-full sm:w-auto justify-end">
                {/* Audio Player */}
                <div className="bg-white/80 shadow flex items-center justify-center space-x-3 px-1 sm:px-7 md:px-10 w-full sm:w-auto py-3 rounded-full">
                    <button
                        onClick={handlePlayPause}
                        className="text-blue-600 hover:text-blue-700 focus:outline-none"
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
                        <span className="text-sm text-blue-700 font-medium">Play Recording</span>
                    ) : (
                        <span className="text-sm text-gray-400">No recording</span>
                    )}
                </div>

                {/* Submit Button */}
                <button
                    onClick={onSubmit}
                    disabled={disabled || !audioSrc}
                    className={`w-[40vw] sm:w-auto min-w-[110px] px-4 py-2 sm:py-3 rounded-full transition-all flex items-center justify-center text-white font-semibold shadow
                        ${audioSrc
                            ? 'bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-slate-300'
                            : 'bg-slate-400 opacity-60 cursor-not-allowed'
                        }`}
                >
                    Submit
                </button>
            </div>
        </div>
    );
};
