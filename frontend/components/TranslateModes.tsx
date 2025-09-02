"use client";

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { codeToLabel } from '@/lib/languages';
import { getPreferredTargetLanguage } from '@/lib/langPreference';
import SubNavbar from '@/components/SubNavbar';

export default function TranslateModes() {
    const pathname = usePathname();
    const modes = [
        { name: 'Translate', href: '/translate' },
        { name: 'Translation Review', href: '/translate-review' },
    ];
    const isTranslatePath = modes.some(m => pathname === m.href);
    const [source, setSource] = useState<string | null>(null);
    const [target, setTarget] = useState<string | null>(null);

    useEffect(() => {
        if (!isTranslatePath) return;
        try {
            const savedLang = window.localStorage.getItem('lang');
            const savedTarget = getPreferredTargetLanguage();
            setSource(savedLang);
            setTarget(savedTarget);
        } catch {}

        const onLang = (e: Event) => setSource((e as CustomEvent<string>).detail);
        const onTarget = (e: Event) => setTarget((e as CustomEvent<string>).detail);
        window.addEventListener('language-changed', onLang as EventListener);
        window.addEventListener('translate-target-changed', onTarget as EventListener);
        return () => {
            window.removeEventListener('language-changed', onLang as EventListener);
            window.removeEventListener('translate-target-changed', onTarget as EventListener);
        };
    }, [isTranslatePath]);

    return (
        <SubNavbar
            modes={modes}
            rightSlot={<>
                {source && <span suppressHydrationWarning className="inline-block text-[11px] px-2 py-0.5 rounded-full bg-indigo-50 text-indigo-700 border border-indigo-200">Source: {codeToLabel(source)}</span>}
                {target && <span suppressHydrationWarning className="inline-block text-[11px] px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">Target: {codeToLabel(target)}</span>}
            </>}
        />
    );
}
