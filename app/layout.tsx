import type { Metadata } from "next";
import Navbar from "@/components/Navbar";


import "./globals.css";


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
            </body>
        </html>
    );
}
