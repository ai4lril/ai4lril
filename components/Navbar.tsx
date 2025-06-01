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
    { name: 'Contribute', path: '/speak' },
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
                            <ul className="flex space-x-8 items-center">
                                {navbarItems.map((item) => {
                                    return (
                                        <li key={item.path}>
                                            <Link
                                                href={item.path}
                                                className="text-gray-700 hover:text-blue-500 hover:border-b-3 px-2 py-1 "
                                            >
                                                {item.name}
                                            </Link>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>

                        <div className="hidden min-[425px]:block ml-8">
                            <Link
                                href="/login"
                                className="border border-slate-600 hover:bg-blue-50 hover:outline px-5 py-2 text-sm rounded-full transition-colors duration-300"
                            >
                                Login
                            </Link>
                        </div>

                        <div className="ml-8">
                            {['/speak', '/listen', '/write'].includes(pathname) && (
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
                {isMenuOpen && (
                    <div className="md:hidden fixed w-[100vw] rounded-b-2xl mt-4 bg-white border-t border-gray-100 animate-fadeIn shadow-xl/20">
                        <ul className="flex flex-col space-y-4 py-4">
                            {navbarItems.map((item) => {
                                return (
                                    <li key={item.path}>
                                        <Link
                                            href={item.path}
                                            className="text-gray-700 hover:text-blue-500 px-4 py-2 flex justify-center  transition-colors duration-300"
                                        >
                                            {item.name}
                                        </Link>
                                    </li>

                                );
                            })}
                            <li>
                                <div className='flex justify-center items-center '>
                                    <Link
                                        href="/login"
                                        className="min-[425px]:hidden border border-slate-600 hover:bg-blue-50 hover:outline px-5 py-2 text-sm rounded-full"
                                    >
                                        Login
                                    </Link>
                                </div>

                            </li>
                        </ul>
                    </div>
                )}


            </div>
            <Modes />
        </nav>
    )
}
