import type { Metadata } from "next";
import { Noto_Sans } from 'next/font/google';
import Navbar from "@/components/Navbar";
import { StagewiseToolbar } from '@stagewise/toolbar-next';

import "./globals.css";

const stagewiseConfig = {
    plugins: []
};

export const metadata: Metadata = {
    title: "language-data-collection",
    description: "A web application for collecting language data to train AI models",
    openGraph: {
        title: "Language Data Collection",
        description: "Tools to collect, analyze, and curate multilingual language data.",
        url: "https://example.com",
        siteName: "Language Data Collection",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Language Data Collection",
        description: "Tools to collect, analyze, and curate multilingual language data.",
    },
    alternates: {
        languages: { en: "/" }
    }
};

const notoSans = Noto_Sans({ subsets: ['latin','devanagari'], weight: ['400','500','700'] });

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" >
            <body className={`flex flex-col min-h-screen ${notoSans.className}`}>
                <Navbar />
                <main className="flex-1 container mx-auto flex flex-col items-center justify-around px-4 sm:px-6 md:px-8">
                    {children}
                </main>
                <footer className="mt-8 border-t border-slate-200/70 bg-white/60">
                    <div className="container mx-auto px-4 py-6 text-sm text-slate-600 flex flex-col sm:flex-row items-center justify-between gap-3">
                        <div>© {new Date().getFullYear()} Language Data Collection</div>
                        <nav className="flex items-center gap-4">
                            <a className="hover:text-blue-700" href="/about" aria-label="About">About</a>
                            <a className="hover:text-blue-700" href="/contact" aria-label="Contact">Contact</a>
                            <a className="hover:text-blue-700" href="/privacy" aria-label="Privacy">Privacy</a>
                            <a className="hover:text-blue-700" href="/terms" aria-label="Terms">Terms</a>
                            <span className="inline-flex items-center gap-2 ml-2">
                                <a href="#" aria-label="Twitter" className="hover:text-blue-700">
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M22.46 6c-.77.35-1.6.58-2.46.69a4.21 4.21 0 001.85-2.32 8.39 8.39 0 01-2.66 1.02 4.18 4.18 0 00-7.12 3.81A11.86 11.86 0 013 4.9a4.17 4.17 0 001.29 5.58 4.13 4.13 0 01-1.9-.52v.05a4.18 4.18 0 003.35 4.1 4.21 4.21 0 01-1.89.07 4.18 4.18 0 003.9 2.9A8.39 8.39 0 012 19.54a11.84 11.84 0 006.41 1.88c7.69 0 11.89-6.37 11.89-11.89l-.01-.54A8.5 8.5 0 0022.46 6z"/></svg>
                                </a>
                                <a href="#" aria-label="GitHub" className="hover:text-blue-700">
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.016c0 4.422 2.865 8.166 6.839 9.49.5.093.682-.216.682-.48 0-.237-.009-.866-.014-1.701-2.782.605-3.369-1.343-3.369-1.343-.455-1.158-1.11-1.467-1.11-1.467-.907-.62.069-.607.069-.607 1.003.07 1.53 1.031 1.53 1.031.892 1.53 2.341 1.088 2.91.833.091-.647.35-1.088.636-1.338-2.221-.253-4.555-1.112-4.555-4.945 0-1.092.39-1.987 1.029-2.687-.103-.253-.446-1.272.098-2.65 0 0 .84-.269 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.748-1.026 2.748-1.026.546 1.378.203 2.397.1 2.65.64.7 1.028 1.595 1.028 2.687 0 3.842-2.337 4.688-4.566 4.937.359.31.678.92.678 1.854 0 1.337-.012 2.416-.012 2.744 0 .266.18.576.688.478A10.02 10.02 0 0022 12.016C22 6.484 17.523 2 12 2z" clipRule="evenodd"/></svg>
                                </a>
                            </span>
                        </nav>
                    </div>
                </footer>
                {process.env.NODE_ENV === 'development' && (
                    <StagewiseToolbar config={stagewiseConfig} />
                )}
            </body>
        </html>
    );
}
