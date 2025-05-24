"use client";

import { usePathname } from 'next/navigation';
import Link from 'next/link';

export default function Modes() {
    const pathname = usePathname();
    const modes = ['Speak', 'Listen', 'Write'];

    // Check if current path matches any of our modes
    const isValidPath = modes.some(mode => pathname === `/${mode.toLowerCase()}`);

    // Hide the component if we're not on a valid path
    if (!isValidPath) {
        return null;
    }

    return (
        <div className="flex justify-between items-center py-4 bg-gray-200 ">
            <ul className="flex space-x-6 mx-auto h-full">
                {modes.map((mode) => {
                    const href = `/${mode.toLowerCase()}`;
                    const isActive = pathname === href;

                    return (
                        <li key={mode}>
                            <Link
                                href={href}
                                className={`px-5 h-full py-3.5 transition-colors duration-200
                                    ${isActive
                                        ? 'text-blue-600 border-b-4 border-blue-600'
                                        : 'hover:text-blue-600'
                                    }`}
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