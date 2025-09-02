"use client";

import { usePathname } from 'next/navigation';
import SubNavbar from '@/components/SubNavbar';

export default function TokenModes() {
    const pathname = usePathname();
    const modes = [
        { name: 'Named Entity Recognition (NER)', href: '/ner' },
        { name: 'Part-of-Speech Tagging (POS)', href: '/pos' },
    ];
    const normalize = (s: string | null) => (s ?? '').replace(/\/+$/, '');
    const p = normalize(pathname);
    const isTokenPath = modes.some(m => p.endsWith(m.href));
    if (!isTokenPath) return null;

    return (
        <SubNavbar modes={modes} />
    );
}
