"use client";

import { usePathname } from 'next/navigation';
import Link from 'next/link';

export default function Modes() {
    const pathname = usePathname();
    const sc = ['speak', 'listen', 'write'];
    const sp = ['question', 'answer', 'transcribe', 'review'];

    // Check if current path is in SC or SP sections
    const isScPath = sc.some(path => pathname?.toLowerCase().includes(path));
    const isSpPath = sp.some(path => pathname?.toLowerCase().includes(path));

    // Don't show anything if we're not in either section
    if (!isScPath && !isSpPath) {
        return null;
    }

    // Determine which modes to show based on the current section
    const currentModes = isScPath ? sc : sp;

    return (
        <div className="flex justify-around items-center bg-gray-100 border-t border-gray-200">
            <ul className="flex flex-wrap w-full justify-center">
                {currentModes.map((mode) => {
                    const href = `/${mode.toLowerCase()}`;
                    const isActive = pathname === href;
                    return (
                        <li key={mode}
                            className={`p-2.5 ${isActive
                                ? 'bg-white text-blue-600 border-b-2 border-blue-600'
                                : 'text-gray-600 hover:text-blue-600 hover:bg-gray-50'
                                }`}
                        >
                            <Link
                                href={href}
                                className="px-5 h-full capitalize transition-colors duration-200"
                            >
                                {mode}
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}