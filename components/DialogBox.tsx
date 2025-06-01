import RecordBtn from "./RecordBtn";

export default function DialogBox() {

    const handleAudioRecorded = (audioBlob: Blob) => {
        // Example: Save to server or IndexedDB
        // For now, just log and save to local file
        const url = URL.createObjectURL(audioBlob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'recording.webm';
        a.click();
        URL.revokeObjectURL(url);
        // You can replace the above with your own upload/save logic
    };

    return (
        <div className="w-full max-w-[800px] mx-auto p-10 min-h-90 sm:px-8 xs:px-4 m-4 h-auto flex flex-col gap-15 items-center justify-center bg-white rounded-sm shadow-2xl">
            <p className="text-center text-base sm:text-lg font-semibold break-words min-h-20">
                ex recusandae nesciunt tempora in. Obcaecati numquam sunt possimus perspiciatis, pariatur temporibus.
                ex recusandae nesciunt tempora in. Obcaecati numquam sunt possimus perspiciatis, pariatur temporibus.

            </p>
            <RecordBtn onAudioRecorded={handleAudioRecorded} />

        </div>
    );
}