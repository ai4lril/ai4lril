import React, { useState, useRef, useEffect } from 'react';

interface RecordBtnProps {
    onAudioRecorded?: (wavFile: File) => void;
}

export default function RecordBtn({ onAudioRecorded }: RecordBtnProps) {
    const [isRecording, setIsRecording] = useState(false);
    const mediaRecorderRef = useRef<MediaRecorder | null>(null);
    const audioChunksRef = useRef<Blob[]>([]);

    const startRecording = async () => {
        try {
            audioChunksRef.current = [];

            const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
            const mediaRecorder = new MediaRecorder(stream);
            mediaRecorderRef.current = mediaRecorder;

            mediaRecorder.ondataavailable = e => e.data.size > 0 && audioChunksRef.current.push(e.data);

            mediaRecorder.onstop = () => {
                const audioBlob = new Blob(audioChunksRef.current, { type: 'audio/wav' });
                const fileName = `recording_${new Date().toISOString()}.wav`;
                const wavFile = new File([audioBlob], fileName, { type: 'audio/wav' });
                onAudioRecorded?.(wavFile);
            };

            mediaRecorder.start();
            setIsRecording(true);
        } catch (error) {
            console.error("Error accessing microphone:", error);
        }
    };

    const stopRecording = () => {
        if (mediaRecorderRef.current) {
            mediaRecorderRef.current.stop();
            mediaRecorderRef.current.stream.getTracks().forEach(track => track.stop());
            setIsRecording(false);
        }
    };

    useEffect(() => () => {
        if (mediaRecorderRef.current && isRecording) stopRecording();
    }, [isRecording]);

    return (
        <div
            className={`relative flex items-center justify-center p-4 transition-all duration-300
                ${isRecording
                    ? 'before:content-[""] before:absolute before:inset-0 before:rounded-full before:bg-red-400/40 before:blur-xl before:opacity-80'
                    : 'before:content-[""] before:absolute before:inset-0 before:rounded-full before:bg-blue-400/30 before:blur-lg before:opacity-60'
                }`}
            style={{}}
        >
            <button
                onClick={isRecording ? stopRecording : startRecording}
                className={`relative rounded-full size-20 flex items-center justify-center transition-all duration-300 m-2 bg-white
                    ${isRecording
                        ? 'bg-red-50 shadow-xl shadow-red-500/30 ring-2 ring-red-400 animate-pulse hover:shadow-red-600/40 hover:ring-red-500'
                        : 'shadow-lg shadow-blue-400/20 ring-2 ring-blue-400 hover:shadow-blue-500/30 hover:ring-blue-500 hover:bg-blue-50'}`}
                aria-label={isRecording ? "Stop recording" : "Start recording"}
                style={{
                    boxShadow: isRecording
                        ? '0 0 32px 8px rgba(239, 68, 68, 0.4), 0 2px 8px 0 rgba(239, 68, 68, 0.2)'
                        : '0 0 24px 6px rgba(59, 130, 246, 0.25), 0 2px 8px 0 rgba(59, 130, 246, 0.10)'
                }}
            >
                <span className={`absolute inset-0 rounded-full ${isRecording ? 'animate-ping bg-red-400/10' : ''}`}></span>
                {isRecording ? (
                    <svg width="32" height="32" viewBox="0 0 32 32" className="animate-pulse z-10 text-red-500">
                        <rect x="8" y="8" width="16" height="16" rx="3" fill="currentColor" />
                    </svg>
                ) : (
                    <svg width="28" height="28" viewBox="0 0 24 24" className="z-10 text-blue-500" fill="currentColor">
                        <path d="M12 15c1.66 0 3-1.34 3-3V6c0-1.66-1.34-3-3-3S9 4.34 9 6v6c0 1.66 1.34 3 3 3z" />
                        <path d="M17 12c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V22h2v-3.08c3.39-.49 6-3.39 6-6.92h-2z" />
                    </svg>
                )}
            </button>
        </div>
    );
}
