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
        <div className="flex justify-around items-center bg-gray-200 ">

            <ul className="flex ">
                {modes.map((mode) => {
                    const href = `/${mode.toLowerCase()}`;
                    const isActive = pathname === href;
                    return (
                        <li key={mode} className={`p-2.5 ${isActive
                            ? 'bg-neutral-50 text-blue-600 border-b-3'
                            : 'hover:text-blue-600'
                            }`}>
                            <Link
                                href={href}
                                className={`px-5 h-full transition-colors duration-200`}
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