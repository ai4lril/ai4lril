import React, { useState, useRef, useEffect } from 'react';

/**
 * Props for RecordBtn component
 * @interface RecordBtnProps
 * @property {function} onAudioRecorded - Callback function that receives the WAV file
 */
interface RecordBtnProps {
    onAudioRecorded?: (wavFile: File) => void;
}

/**
 * A simple audio recording button component that creates a WAV file
 */
export default function RecordBtn({ onAudioRecorded }: RecordBtnProps) {
    const [isRecording, setIsRecording] = useState(false);
    const mediaRecorderRef = useRef<MediaRecorder | null>(null);
    const audioChunksRef = useRef<Blob[]>([]);

    /**
     * Start audio recording from microphone
     */
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

    /**
     * Stop the current recording
     */
    const stopRecording = () => {
        if (mediaRecorderRef.current) {
            mediaRecorderRef.current.stop();
            mediaRecorderRef.current.stream.getTracks().forEach(track => track.stop());
            setIsRecording(false);
        }
    };

    // Clean up when component unmounts
    useEffect(() => () => {
        if (mediaRecorderRef.current && isRecording) stopRecording();
    }, [isRecording]);

    return (
        <button
            onClick={isRecording ? stopRecording : startRecording}
            className={`rounded-full p-4 shadow-lg transition-all duration-300 
                ${isRecording 
                    ? 'bg-red-100 shadow-lg shadow-red-400/50 animate-pulse hover:shadow-red-500/70' 
                    : 'bg-gray-200 shadow-md shadow-blue-300/30 hover:shadow-blue-400/50'}`}
            aria-label={isRecording ? "Stop recording" : "Start recording"}
        >
            {isRecording ? (
                <svg width="32" height="32" viewBox="0 0 32 32" className="animate-pulse">
                    <rect x="8" y="8" width="16" height="16" rx="3" fill="#ff4c4c" />
                </svg>
            ) : (
                <svg width="28" height="28" viewBox="0 0 24 24" fill="#222">
                    <path d="M12 15c1.66 0 3-1.34 3-3V6c0-1.66-1.34-3-3-3S9 4.34 9 6v6c0 1.66 1.34 3 3 3z" />
                    <path d="M17 12c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V22h2v-3.08c3.39-.49 6-3.39 6-6.92h-2z" />
                </svg>
            )}
        </button>
    );
}