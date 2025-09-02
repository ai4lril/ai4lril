export function setCookie(name: string, value: string, days: number = 3650) {
    try {
        const expires = new Date(Date.now() + days * 24 * 60 * 60 * 1000).toUTCString();
        document.cookie = `${encodeURIComponent(name)}=${encodeURIComponent(value)}; expires=${expires}; path=/`;
    } catch { }
}

export function getCookie(name: string): string | null {
    try {
        const key = `${encodeURIComponent(name)}=`;
        const parts = document.cookie.split('; ');
        for (const part of parts) {
            if (part.startsWith(key)) {
                return decodeURIComponent(part.substring(key.length));
            }
        }
        return null;
    } catch {
        return null;
    }
}

export function getPreferredLanguage(): string | null {
    if (typeof window === 'undefined') return null;
    const fromCookie = getCookie('lang');
    if (fromCookie) return fromCookie;
    try {
        return window.localStorage.getItem('lang');
    } catch {
        return null;
    }
}

export function setPreferredLanguage(code: string) {
    if (typeof window === 'undefined') return;
    try { window.localStorage.setItem('lang', code); } catch { }
    setCookie('lang', code);
}

export function getPreferredTargetLanguage(): string | null {
    if (typeof window === 'undefined') return null;
    const fromCookie = getCookie('translateTarget');
    if (fromCookie) return fromCookie;
    try {
        return window.localStorage.getItem('translateTarget');
    } catch {
        return null;
    }
}

export function setPreferredTargetLanguage(code: string) {
    if (typeof window === 'undefined') return;
    try { window.localStorage.setItem('translateTarget', code); } catch { }
    setCookie('translateTarget', code);
}
