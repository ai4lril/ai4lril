// Root layout for all pages: provides global context, navigation, and styling
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import { StagewiseToolbar } from "@stagewise/toolbar-next";
import { AuthProvider } from "../contexts/AuthContext";

import "./globals.css";

const stagewiseConfig = {
    plugins: [],
};

export const metadata: Metadata = {
    title: "voice-data-collection",
    description:
        "A web application for collecting voice data to train AI models",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className="flex min-h-screen flex-col">
                {/* Provide authentication context and navigation for all pages */}
                <AuthProvider>
                    <Navbar />
                    <main className="container mx-auto flex flex-1 flex-col items-center justify-around px-2">
                        {children}
                    </main>
                    {/* Show StagewiseToolbar only in development */}
                    {process.env.NODE_ENV === "development" && (
                        <StagewiseToolbar config={stagewiseConfig} />
                    )}
                </AuthProvider>
            </body>
        </html>
    );
}
