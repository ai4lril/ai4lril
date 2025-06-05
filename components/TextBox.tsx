import { useState } from 'react';

interface TextBoxProps {
    onSubmit?: (text: string) => void;
    placeholder?: string;
}

export default function TextBox({
    onSubmit,
    placeholder = "Type your question here...",
}: TextBoxProps) {
    const [text, setText] = useState<string>('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (onSubmit && text.trim()) {
            onSubmit(text);
        }
    };

    return (
        <div className="h-full w-full">
            <form className="w-full h-full" onSubmit={handleSubmit}>
                <textarea
                    className="w-full h-full p-3 rounded-md border border-gray-300 bg-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none resize-none placeholder:text-gray-400 text-gray-700"
                    placeholder={placeholder}
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                ></textarea>
            </form>
        </div>
    );
}