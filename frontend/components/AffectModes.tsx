"use client";

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { codeToLabel } from '@/lib/languages';
import SubNavbar from '@/components/SubNavbar';

export default function AffectModes() {
    const pathname = usePathname();
    const modes = [
        { name: 'Sentiment Analysis', href: '/sentiment' },
        { name: 'Emotion Recognition', href: '/emotion' },
    ];
    const normalize = (s: string | null) => (s ?? '').replace(/\/+$/, '');
    const p = normalize(pathname);
    const isAffectPath = modes.some(m => p.endsWith(m.href));
    const [source, setSource] = useState<string | null>(null);

    useEffect(() => {
        if (!isAffectPath) return;
        try {
            const savedLang = window.localStorage.getItem('lang');
            setSource(savedLang);
        } catch { }

        const onLang = (e: Event) => {
            const code = (e as CustomEvent<string>).detail;
            setSource(code);
        };
        window.addEventListener('language-changed', onLang as EventListener);
        return () => {
            window.removeEventListener('language-changed', onLang as EventListener);
        };
    }, [isAffectPath]);

    return (
        <SubNavbar
            modes={modes}
            rightSlot={
                <div className="flex items-center gap-3">
                    {/* Source Language Badge */}
                    {source && (
                        <span suppressHydrationWarning className="inline-block text-[11px] px-2 py-1 rounded-full bg-rose-50 text-rose-700 border border-rose-200 font-medium">
                            <svg className="w-3 h-3 inline mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
                            </svg>
                            {codeToLabel(source)}
                        </span>
                    )}
                </div>
            }
        />
    );
}
