import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import { StagewiseToolbar } from '@stagewise/toolbar-next';
import { AuthProvider } from "../contexts/AuthContext";

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
            <body className="flex flex-col min-h-screen">
                <AuthProvider>
                    <Navbar />
                    <main className="flex-1 container mx-auto flex flex-col items-center justify-around px-2">
                        {children}
                    </main>
                    {process.env.NODE_ENV === 'development' && (
                        <StagewiseToolbar config={stagewiseConfig} />
                    )}
                </AuthProvider>
            </body>
        </html>
    );
}
