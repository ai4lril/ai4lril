import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import { StagewiseToolbar } from '@stagewise/toolbar-next';

import "./globals.css";

const stagewiseConfig = {
    plugins: []
};

export const metadata: Metadata = {
    title: "voice-data-collection",
    description: "A web application for collecting voice data to train AI models",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" >
            <body>
                <Navbar />
                <main className="container  mx-auto">
                    {children}
                </main>
                {process.env.NODE_ENV === 'development' && (
                    <StagewiseToolbar config={stagewiseConfig} />
                )}
            </body>
        </html>
    );
}
