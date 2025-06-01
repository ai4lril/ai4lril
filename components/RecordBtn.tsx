import React, { useState, useRef } from 'react';

 interface RecordBtnProps {
    onAudioRecorded?: (audioBlob: Blob) => void;
}

export default function RecordBtn({ onAudioRecorded }: RecordBtnProps) {
    const [isRecording, setIsRecording] = useState(false);
    const [audioURL, setAudioURL] = useState<string | null>(null);
    const mediaRecorderRef = useRef<MediaRecorder | null>(null);
    const audioChunksRef = useRef<Blob[]>([]);

    const startRecording = async () => {
        audioChunksRef.current = [];
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        const mediaRecorder = new MediaRecorder(stream);
        mediaRecorderRef.current = mediaRecorder;

        mediaRecorder.ondataavailable = (event) => {
            if (event.data.size > 0) {
                audioChunksRef.current.push(event.data);
            }
        };

        mediaRecorder.onstop = () => {
            const audioBlob = new Blob(audioChunksRef.current, { type: 'audio/webm' });
            const url = URL.createObjectURL(audioBlob);
            setAudioURL(url);
            if (onAudioRecorded) {
                onAudioRecorded(audioBlob);
            }
        };

        mediaRecorder.start();
        setIsRecording(true);
    };

    const stopRecording = () => {
        if (mediaRecorderRef.current) {
            mediaRecorderRef.current.stop();
            mediaRecorderRef.current.stream.getTracks().forEach(track => track.stop());
            setIsRecording(false);
        }
    };

    return (
        <div className="max-w-md mx-auto mt-8 p-6 rounded-lg flex flex-col items-center gap-4">
            <button
                onClick={isRecording ? stopRecording : startRecording}
                className={`flex items-center gap-2 px-5 py-3 rounded-full font-semibold transition-colors
                    ${isRecording
                        ? 'bg-red-100 text-red-700 hover:bg-red-200'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill={isRecording ? "#ff4c4c" : "#222"}
                >
                    <path d="M12 15c1.66 0 3-1.34 3-3V6c0-1.66-1.34-3-3-3S9 4.34 9 6v6c0 1.66 1.34 3 3 3z" />
                    <path d="M17 12c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V22h2v-3.08c3.39-.49 6-3.39 6-6.92h-2z" />
                </svg>
                {isRecording ? 'Stop Recording' : 'Start Recording'}
            </button>
            {audioURL && (
                <div>
                    <a
                        href={audioURL}
                        download="recording.webm"
                        className="text-blue-600 underline hover:text-blue-800"
                    >
                        Download Recording
                    </a> 
                </div>
            )}
        </div>
    );
}
