import type { Metadata } from "next";
import Navbar from "@/components/Navbar";

// mantine imports
import '@mantine/core/styles.css';
import { ColorSchemeScript, MantineProvider, mantineHtmlProps, createTheme } from '@mantine/core';

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
        <html lang="en" {...mantineHtmlProps}>
            <head>
                <ColorSchemeScript />
            </head>
            <body>
                <MantineProvider>
                    <Navbar />
                    <main className="container  mx-auto">
                        {children}
                        
                    </main>
                </MantineProvider>
            </body>
        </html>
    );
}
