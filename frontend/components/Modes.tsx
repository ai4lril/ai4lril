// Shows navigation tabs for current mode group (scripted/spontaneous)
"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Modes() {
    const pathname = usePathname();
    const sc = ["speak", "listen", "write"];
    const sp = ["question", "answer", "transcribe", "review"];

    // Only show if current path is in a mode group
    const isScPath = sc.some((path) => pathname?.toLowerCase().includes(path));
    const isSpPath = sp.some((path) => pathname?.toLowerCase().includes(path));
    if (!isScPath && !isSpPath) return null;

    // Pick which modes to show
    const currentModes = isScPath ? sc : sp;

    return (
        <div className="flex items-center justify-around border-t border-gray-200 bg-gray-100">
            <ul className="flex w-full flex-wrap justify-center">
                {currentModes.map((mode) => {
                    const href = `/${mode.toLowerCase()}`;
                    const isActive = pathname === href;
                    return (
                        <li
                            key={mode}
                            className={`p-2.5 ${
                                isActive
                                    ? "border-b-2 border-blue-600 bg-white text-blue-600"
                                    : "text-gray-600 hover:bg-gray-50 hover:text-blue-600"
                            }`}
                        >
                            <Link
                                href={href}
                                className="h-full px-5 capitalize transition-colors duration-200"
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
