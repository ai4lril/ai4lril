import type { Metadata } from "next";
import Breadcrumb from '@/components/Breadcrumb';
import ContactForm from './ContactForm';

export const metadata: Metadata = {
    title: "Contact | Get in Touch",
    description: "Contact the Language Data Collection team. Reach out for collaborations, partnerships, technical support, or to propose new languages and scripts for our platform.",
    keywords: [
        "contact language data collection",
        "get in touch",
        "technical support",
        "partnerships",
        "new languages",
        "collaboration",
        "linguistic research",
        "language technology support"
    ],
    openGraph: {
        title: "Contact Language Data Collection | Get in Touch",
        description: "Reach out to our team for collaborations, technical support, or to propose new languages for our open-source platform.",
        type: "website",
        images: [
            {
                url: "/og-contact.jpg",
                width: 1200,
                height: 630,
                alt: "Contact Language Data Collection Team",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Contact Language Data Collection",
        description: "Get in touch with our team for collaborations and technical support.",
        images: ["/og-contact.jpg"],
    },
};

export default function ContactPage() {

    return (
        <div className="w-full max-w-2xl md:max-w-4xl py-8 px-4 mx-auto animate-fade-in-up">
            <Breadcrumb items={[{ label: 'Contact', href: '/contact' }]} />
            <div className="text-center mb-8 animate-bounce-in">
                <div className="flex items-center justify-center gap-3 mb-4">
                    <div className="p-3 rounded-full bg-gradient-to-br from-indigo-100 to-blue-100 animate-pulse">
                        <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                    </div>
                    <h1 className="text-3xl md:text-4xl font-bold text-slate-800">Contact us</h1>
                </div>
                <p className="mt-2 text-slate-600 text-lg animate-fade-in-up animate-delay-200">Questions, collaborations, or feedback? We&apos;d love to hear from you.</p>
            </div>

            <ContactForm />
        </div>
    );
}
