"use client";

import { usePathname } from 'next/navigation';
import SubNavbar from '@/components/SubNavbar';

export default function Modes() {
    const pathname = usePathname();
    const scripted = ['speak', 'listen', 'write'];
    const spontaneous = ['question', 'answer', 'transcribe', 'review'];

    const isScripted = scripted.some(path => pathname === `/${path}`);
    const isSpontaneous = spontaneous.some(path => pathname === `/${path}`);
    if (!isScripted && !isSpontaneous) return null;

    const arr = isScripted ? scripted : spontaneous;
    const modes = arr.map(name => ({ name: name.charAt(0).toUpperCase() + name.slice(1), href: `/${name}` }));
    return <SubNavbar modes={modes} />;
}
