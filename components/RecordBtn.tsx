import React, { useState, useRef, useEffect } from 'react';

interface RecordBtnProps {
    onAudioRecorded?: (audioBlob: Blob) => void;
}

export default function RecordBtn({ onAudioRecorded }: RecordBtnProps) {
    const [isRecording, setIsRecording] = useState(false);
    const mediaRecorderRef = useRef<MediaRecorder | null>(null);
    const audioChunksRef = useRef<Blob[]>([]);
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const animationIdRef = useRef<number | null>(null);
    const audioContextRef = useRef<AudioContext | null>(null);
    const analyserRef = useRef<AnalyserNode | null>(null);
    const dataArrayRef = useRef<Uint8Array | null>(null);
    const sourceRef = useRef<MediaStreamAudioSourceNode | null>(null);

    const drawVisualizer = () => {
        const canvas = canvasRef.current;
        const analyser = analyserRef.current;
        const dataArray = dataArrayRef.current;

        if (!canvas || !analyser || !dataArray) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        const { width, height } = canvas;
        ctx.clearRect(0, 0, width, height);

        analyser.getByteTimeDomainData(dataArray);

        const centerX = width / 2;
        const centerY = height / 2;
        const radius = Math.min(width, height) / 4;

        ctx.beginPath();
        for (let i = 0; i < dataArray.length; i++) {
            const angle = (i / dataArray.length) * 2 * Math.PI;
            const value = dataArray[i] / 255;
            const dist = radius + value * 20;
            const x = centerX + Math.cos(angle) * dist;
            const y = centerY + Math.sin(angle) * dist;
            if (i === 0) {
                ctx.moveTo(x, y);
            } else {
                ctx.lineTo(x, y);
            }
        }
        ctx.closePath();
        ctx.strokeStyle = '#ff4c4c';
        ctx.lineWidth = 2;
        ctx.stroke();

        animationIdRef.current = requestAnimationFrame(drawVisualizer);
    };

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
            if (onAudioRecorded) {
                onAudioRecorded(audioBlob);
            }
        };

        // AudioContext setup
        audioContextRef.current = new AudioContext();
        sourceRef.current = audioContextRef.current.createMediaStreamSource(stream);
        analyserRef.current = audioContextRef.current.createAnalyser();
        analyserRef.current.fftSize = 128;
        const bufferLength = analyserRef.current.frequencyBinCount;
        dataArrayRef.current = new Uint8Array(bufferLength);

        sourceRef.current.connect(analyserRef.current);

        drawVisualizer();
        mediaRecorder.start();
        setIsRecording(true);
    };

    const stopRecording = () => {
        if (mediaRecorderRef.current) {
            mediaRecorderRef.current.stop();
            mediaRecorderRef.current.stream.getTracks().forEach(track => track.stop());
        }

        if (animationIdRef.current) {
            cancelAnimationFrame(animationIdRef.current);
            animationIdRef.current = null;
        }

        if (audioContextRef.current) {
            audioContextRef.current.close();
            audioContextRef.current = null;
        }

        if (canvasRef.current) {
            const ctx = canvasRef.current.getContext('2d');
            if (ctx) ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
        }

        setIsRecording(false);
    };

    useEffect(() => {
        return () => {
            stopRecording();
        };
    }, []);

    return (
        <div className="w-full flex flex-col items-center relative">
            {/* Visualizer Canvas */}
            <canvas
                ref={canvasRef}
                width={220}
                height={220}
                className={`absolute z-0 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                    transition-opacity duration-300 ${isRecording ? 'opacity-100' : 'opacity-0'}`}
            />

            {/* Recording Button */}
            <button
                onClick={isRecording ? stopRecording : startRecording}
                className={` z-10 px-5 py-8 outline-2 rounded-full flex items-center justify-center shadow-lg transition-colors duration-300
                    ${isRecording
                        ? 'bg-red-100 text-red-700 hover:bg-red-200'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
            >
                {isRecording ? (
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" className="animate-pulse">
                        <rect x="8" y="8" width="16" height="16" rx="3" fill="#ff4c4c" />
                    </svg>
                ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="#222">
                        <path d="M12 15c1.66 0 3-1.34 3-3V6c0-1.66-1.34-3-3-3S9 4.34 9 6v6c0 1.66 1.34 3 3 3z" />
                        <path d="M17 12c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V22h2v-3.08c3.39-.49 6-3.39 6-6.92h-2z" />
                    </svg>
                )}
            </button>
        </div>
    );
}
