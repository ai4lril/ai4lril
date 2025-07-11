// Responsive navigation bar with links and language switcher
"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Modes from "@/components/Modes";
import LangSwitcher from "./LangSwitcher";

interface NavbarItem {
    name: string;
    path: string;
}

const navbarItems: NavbarItem[] = [
    { name: "Home", path: "/" },
    { name: "Scripted Speech", path: "/speak" },
    { name: "Spontaneous Speech", path: "/question" },
];

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
    const pathname = usePathname();

    return (
        <nav className="sticky top-0 z-50 bg-white shadow-md">
            <div className="py-4 md:py-6">
                <div className="container mx-auto flex items-center justify-between px-4">
                    {/* Logo and brand */}
                    <div className="logo">
                        <Link
                            href="/"
                            className="text-2xl font-bold text-gray-800 transition-colors duration-300 hover:text-blue-600"
                        >
                            Voice Data Collection
                        </Link>
                    </div>

                    <div className="flex items-center">
                        {/* Desktop menu */}
                        <div className="hidden md:flex">
                            <ul className="flex items-center gap-10 text-center">
                                {navbarItems.map((item) => {
                                    return (
                                        <li key={item.path}>
                                            <Link
                                                href={item.path}
                                                className="relative pb-1 text-center text-gray-700 transition-colors duration-300 after:absolute after:bottom-0 after:left-0 after:h-[3px] after:w-0 after:rounded-full after:bg-blue-500 after:transition-all after:duration-300 hover:text-blue-500 hover:after:w-full"
                                                style={{
                                                    display: "inline-block",
                                                }}
                                            >
                                                {item.name}
                                            </Link>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>

                        {/* Language switcher and mobile menu button */}
                        <div className="flex items-center justify-center">
                            <Link
                                href="/login"
                                className="ml-8 hidden rounded-full border-0 bg-gradient-to-r from-blue-500 to-indigo-500 px-6 py-2 font-semibold text-white shadow transition-all duration-200 outline-none hover:from-blue-600 hover:to-indigo-600 focus:ring-2 focus:ring-blue-300 sm:block"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Login
                            </Link>
                        </div>

                        <div className="ml-8">
                            {[
                                "/speak",
                                "/listen",
                                "/write",
                                "/question",
                                "/answer",
                                "/transcribe",
                                "/review",
                            ].includes(pathname) && <LangSwitcher />}
                        </div>

                        {/* Hamburger menu for mobile */}
                        <div className="pl-5 md:hidden">
                            <button
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                aria-label="Toggle menu"
                                className="rounded-full p-2 transition-colors duration-300 hover:bg-gray-100 focus:outline-none"
                                type="button"
                            >
                                <svg
                                    className="h-6 w-6 text-gray-700"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    {isMenuOpen ? (
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    ) : (
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    )}
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile menu */}
                <div
                    className={`fixed z-50 mt-4 w-[100vw] rounded-b-2xl border-t border-gray-100 bg-white shadow-xl/20 transition-transform duration-500 ease-in-out md:hidden ${isMenuOpen ? "pointer-events-auto translate-y-0 opacity-100" : "pointer-events-none -translate-y-10 opacity-0"}`}
                    style={{ willChange: "transform, opacity" }}
                >
                    <ul className="flex flex-col space-y-4 py-4">
                        {navbarItems.map((item) => {
                            return (
                                <li key={item.path}>
                                    <Link
                                        href={item.path}
                                        className="relative flex justify-center px-4 py-2 text-gray-700 transition-colors duration-300 after:absolute after:bottom-1 after:left-1/2 after:h-[2px] after:w-0 after:-translate-x-1/2 after:rounded-full after:bg-blue-500 after:transition-all after:duration-300 hover:text-blue-500 hover:after:w-3/4"
                                        style={{ display: "inline-block" }}
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        {item.name}
                                    </Link>
                                </li>
                            );
                        })}
                        <li>
                            <div className="flex items-center justify-center">
                                <Link
                                    href="/login"
                                    className="rounded-full border border-slate-400 bg-white px-5 py-2 text-sm text-gray-700 shadow-sm transition-colors duration-200 hover:bg-blue-50 sm:hidden"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    Login
                                </Link>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <Modes />
        </nav>
    );
}
