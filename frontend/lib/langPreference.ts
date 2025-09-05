export function setCookie(name: string, value: string, days: number = 3650) {
    try {
        const expires = new Date(Date.now() + days * 24 * 60 * 60 * 1000).toUTCString();
        // Add security flags: Secure (HTTPS only), SameSite (CSRF protection), HttpOnly equivalent via JS
        const secure = window.location.protocol === 'https:' ? '; Secure' : '';
        document.cookie = `${encodeURIComponent(name)}=${encodeURIComponent(value)}; expires=${expires}; path=/; SameSite=Strict${secure}`;
    } catch { }
}

export function deleteCookie(name: string) {
    try {
        document.cookie = `${encodeURIComponent(name)}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/`;
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

    // Validate input to prevent malicious data storage
    if (typeof code !== 'string' || code.length > 10 || !/^[a-zA-Z0-9_-]+$/.test(code)) {
        console.warn('Invalid language code provided to setPreferredLanguage');
        return;
    }

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

    // Validate input to prevent malicious data storage
    if (typeof code !== 'string' || code.length > 20 || !/^[a-zA-Z0-9_-]+$/.test(code)) {
        console.warn('Invalid target language code provided to setPreferredTargetLanguage');
        return;
    }

    try { window.localStorage.setItem('translateTarget', code); } catch { }
    setCookie('translateTarget', code);
}
