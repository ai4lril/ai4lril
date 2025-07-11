// Simple controlled textarea with optional submit callback
import { useState } from "react";

interface TextBoxProps {
    onSubmit?: (text: string) => void;
    placeholder?: string;
}

export default function TextBox({
    onSubmit,
    placeholder = "Type your question here...",
}: TextBoxProps) {
    const [text, setText] = useState<string>("");

    // Call onSubmit if provided and text is not empty
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (onSubmit && text.trim()) {
            onSubmit(text);
        }
    };

    return (
        <div className="h-full w-full">
            <form className="h-full w-full" onSubmit={handleSubmit}>
                <textarea
                    className="h-full w-full resize-none rounded-md border border-gray-300 bg-white p-3 text-gray-700 outline-none placeholder:text-gray-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                    placeholder={placeholder}
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                ></textarea>
            </form>
        </div>
    );
}
