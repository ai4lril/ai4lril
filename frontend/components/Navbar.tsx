"use client";

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Modes from "@/components/Modes";

import LangSwitcher from './LangSwitcher';


interface NavbarItem {
    name: string;
    path: string;
}

const navbarItems: NavbarItem[] = [
    { name: 'Home', path: '/' },
    { name: 'Scripted Speech', path: '/speak' },
    { name: 'Spontaneous Speech', path: '/question' },

];

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
    const pathname = usePathname();

    return (
        <nav className='bg-white shadow-md sticky top-0 z-50'>
            <div className="py-4 md:py-6 ">
                <div className="container mx-auto px-4 flex justify-between items-center">
                    <div className="logo">
                        <Link href="/" className="text-2xl font-bold text-gray-800 hover:text-blue-600 transition-colors duration-300">
                            Voice Data Collection
                        </Link>
                    </div>

                    <div className="flex items-center">
                        {/* Desktop menu */}
                        <div className="hidden md:flex">
                            <ul className="flex items-center text-center gap-10">
                                {navbarItems.map((item) => {
                                    return (
                                        <li key={item.path}>
                                            <Link
                                                href={item.path}
                                                className="relative text-gray-700 pb-1 text-center transition-colors duration-300 hover:text-blue-500
                                                    after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[3px] after:bg-blue-500 after:rounded-full
                                                    after:transition-all after:duration-300 hover:after:w-full"
                                                style={{ display: "inline-block" }}
                                            >
                                                {item.name}
                                            </Link>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>

                        <div className="flex justify-center items-center">
                            <Link
                                href="/login"
                                className="ml-8 hidden sm:block bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-semibold px-6 py-2 rounded-full shadow hover:from-blue-600 hover:to-indigo-600 transition-all duration-200 border-0 outline-none focus:ring-2 focus:ring-blue-300"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Login
                            </Link>
                        </div>

                        <div className="ml-8">
                            {['/speak', '/listen', '/write', '/question', '/answer', '/transcribe', '/review'].includes(pathname) && (
                                <LangSwitcher />
                            )}
                        </div>

                        {/* Hamburger menu for mobile */}
                        <div className="md:hidden pl-5">
                            <button
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                aria-label="Toggle menu"
                                className="focus:outline-none rounded-full p-2 hover:bg-gray-100 transition-colors duration-300"
                                type="button"
                            >
                                <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
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
                <div
                    className={`md:hidden fixed w-[100vw] rounded-b-2xl mt-4 bg-white border-t border-gray-100 shadow-xl/20 z-50
                        transition-transform duration-500 ease-in-out
                        ${isMenuOpen ? "translate-y-0 opacity-100 pointer-events-auto" : "-translate-y-10 opacity-0 pointer-events-none"}`}
                    style={{ willChange: "transform, opacity" }}
                >
                    <ul className="flex flex-col space-y-4 py-4">
                        {navbarItems.map((item) => {
                            return (
                                <li key={item.path}>
                                    <Link
                                        href={item.path}
                                        className="relative text-gray-700 px-4 py-2 flex justify-center transition-colors duration-300 hover:text-blue-500
                                            after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-1 after:w-0 after:h-[2px] after:bg-blue-500 after:rounded-full
                                            after:transition-all after:duration-300 hover:after:w-3/4"
                                        style={{ display: "inline-block" }}
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        {item.name}
                                    </Link>
                                </li>
                            );
                        })}
                        <li>
                            <div className="flex justify-center items-center">
                                <Link
                                    href="/login"
                                    className="sm:hidden border border-slate-400 text-gray-700 bg-white hover:bg-blue-50 px-5 py-2 text-sm rounded-full transition-colors duration-200 shadow-sm"
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
    )
}
