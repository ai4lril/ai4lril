"use client";

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface NavbarItem {
    name: string;
    path: string;
}




export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
    const pathname = usePathname();


    const isActive = (path: string): string => {
        return pathname === path ? "text-blue-500 font-medium" : "text-gray-700 hover:text-blue-500";
    };

    return (
        <nav className="bg-white p-4 md:p-8 shadow-sm">
            <div className="container mx-auto flex justify-between items-center">

                <div className="logo">
                    <Link href="/" className="text-2xl font-bold transition-colors">
                        Voice Data Collection
                    </Link>
                </div>

                <div className="flex items-center">
                    {/* Desktop menu */}

                    <div className="hidden md:flex">
                        <div>
                            <ul className="flex space-x-8">
                                <li>
                                    <Link href="/" className={isActive("/")}>
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/about" className={isActive("/about")}>
                                        About
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/contact" className={isActive("/contact")}>
                                        Contact
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="ml-8">
                        <ul className="flex space-x-8">
                            <li>
                                <Link href="/login" className={isActive("/login")}>
                                    Login
                                </Link>
                            </li>
                            <li>
                                <Link href="/login" className={isActive("/login")}>
                                    Language
                                </Link>
                            </li>
                        </ul>
                    </div>


                    {/* Hamburger menu for mobile */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            aria-label="Toggle menu"
                            className="focus:outline-none focus:ring-2 focus:ring-blue-500 rounded p-1"
                            type="button"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                {isMenuOpen
                                    ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                }
                            </svg>
                        </button>
                    </div>

                </div>
            </div>


            {/* Mobile menu */}
            {isMenuOpen && (
                <div className="mt-4 md:hidden container mx-auto">
                    <ul className="flex flex-col space-y-4 px-2">
                        <li>
                            <Link href="/" className={`block py-2 ${isActive("/")}`}
                                onClick={() => setIsMenuOpen(false)}>
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link href="/about" className={`block py-2 ${isActive("/about")}`}
                                onClick={() => setIsMenuOpen(false)}>
                                About
                            </Link>
                        </li>
                        <li>
                            <Link href="/contact" className={`block py-2 ${isActive("/contact")}`}
                                onClick={() => setIsMenuOpen(false)}>
                                Contact
                            </Link>
                        </li>
                        <li>
                            <Link href="/login" className={`block py-2 ${isActive("/login")}`}
                                onClick={() => setIsMenuOpen(false)}>
                                Login
                            </Link>
                        </li>
                        <li>
                            <Link href="/language" className={`block py-2 ${isActive("/language")}`}
                                onClick={() => setIsMenuOpen(false)}>
                                Language
                            </Link>
                        </li>
                    </ul>
                </div>
            )}
        </nav>
    );
}