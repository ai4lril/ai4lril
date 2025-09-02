"use client";

import { useState } from "react";

function isValidEmail(value: string): boolean {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export default function ContactPage() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [touched, setTouched] = useState<Record<string, boolean>>({});
    const [errors, setErrors] = useState<Record<string, string>>({});
    const [submitting, setSubmitting] = useState(false);
    const [success, setSuccess] = useState<string | null>(null);

    const validate = () => {
        const next: Record<string, string> = {};
        if (!name.trim()) next.name = "Please enter your name.";
        if (!email.trim()) next.email = "Please enter your email.";
        else if (!isValidEmail(email)) next.email = "Please enter a valid email address.";
        if (!message.trim()) next.message = "Please enter a message.";
        return next;
    };

    const onSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setTouched({ name: true, email: true, message: true });
        const nextErrors = validate();
        setErrors(nextErrors);
        if (Object.keys(nextErrors).length > 0) return;

        setSubmitting(true);
        // Simulate sending
        await new Promise(res => setTimeout(res, 800));
        setSubmitting(false);
        setSuccess("Thanks! Your message has been sent. We'll get back within 24–48 hours.");
        setName("");
        setEmail("");
        setMessage("");
        setTouched({});
        setErrors({});
    };

    const showError = (field: string) => touched[field] && errors[field];

    return (
        <div className="w-full max-w-2xl md:max-w-4xl py-8 px-4 mx-auto">
            <h1 className="text-2xl md:text-3xl font-bold text-slate-800 text-center">Contact us</h1>
            <p className="mt-2 text-slate-600 text-center">Questions, collaborations, or feedback? We&apos;d love to hear from you.</p>

            {success && (
                <div className="mt-4 text-center text-sm text-green-700 bg-green-50 border border-green-200 rounded-md px-4 py-2" role="status" aria-live="polite">{success}</div>
            )}

            <div className="mt-6 grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-4">
                {/* Form card */}
                <div className="bg-white/95 backdrop-blur-sm rounded-md md:rounded-lg p-4 shadow-md border border-gray-100 relative overflow-hidden">
                    <div className="absolute -right-8 -top-8 w-20 h-20 bg-indigo-100/50 rounded-full opacity-70 hidden sm:block"></div>
                    <div className="absolute -left-6 -bottom-6 w-16 h-16 bg-blue-100/50 rounded-full opacity-70 hidden sm:block"></div>

                    <h2 className="text-lg font-semibold mb-3 text-gray-800 relative">
                        <span className="inline-block relative pb-1">
                            Send a message
                            <span className="absolute -bottom-0.5 left-0 w-full h-[2px] bg-gradient-to-r from-indigo-500 to-purple-500"></span>
                        </span>
                    </h2>

                    <form onSubmit={onSubmit} noValidate className="space-y-3">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-slate-700">Name</label>
                            <input
                                id="name"
                                name="name"
                                className={`mt-1 w-full border rounded-md px-3 py-2 bg-white focus:outline-none focus:border-indigo-600 ${showError('name') ? 'border-red-400 ring-1 ring-red-300' : 'border-slate-300'}`}
                                placeholder="Your name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                onBlur={() => setTouched(prev => ({ ...prev, name: true }))}
                                aria-invalid={!!showError('name')}
                                aria-describedby={showError('name') ? 'name-error' : undefined}
                            />
                            {showError('name') && (
                                <p id="name-error" className="mt-1 text-xs text-red-600">{errors.name}</p>
                            )}
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-slate-700">Email</label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                className={`mt-1 w-full border rounded-md px-3 py-2 bg-white focus:outline-none focus:border-indigo-600 ${showError('email') ? 'border-red-400 ring-1 ring-red-300' : 'border-slate-300'}`}
                                placeholder="you@example.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                onBlur={() => setTouched(prev => ({ ...prev, email: true }))}
                                aria-invalid={!!showError('email')}
                                aria-describedby={showError('email') ? 'email-error' : undefined}
                            />
                            {showError('email') && (
                                <p id="email-error" className="mt-1 text-xs text-red-600">{errors.email}</p>
                            )}
                        </div>

                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-slate-700">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                rows={5}
                                className={`mt-1 w-full border rounded-md px-3 py-2 bg-white focus:outline-none focus:border-indigo-600 ${showError('message') ? 'border-red-400 ring-1 ring-red-300' : 'border-slate-300'}`}
                                placeholder="How can we help?"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                onBlur={() => setTouched(prev => ({ ...prev, message: true }))}
                                aria-invalid={!!showError('message')}
                                aria-describedby={showError('message') ? 'message-error' : undefined}
                            />
                            {showError('message') && (
                                <p id="message-error" className="mt-1 text-xs text-red-600">{errors.message}</p>
                            )}
                        </div>

                        <div className="pt-1 flex items-center justify-between gap-3">
                            <button
                                type="submit"
                                disabled={submitting}
                                className="bg-gradient-to-r from-blue-600 to-indigo-600 disabled:opacity-60 hover:from-blue-700 hover:to-indigo-700 text-white rounded-md px-5 py-2 font-semibold shadow-sm"
                            >
                                {submitting ? "Sending…" : "Send message"}
                            </button>
                            <p className="text-xs text-slate-500">We&apos;ll reply within 24–48 hours.</p>
                        </div>
                    </form>
                </div>

                {/* Alternatives + info */}
                <div className="bg-white/95 backdrop-blur-sm rounded-md md:rounded-lg p-4 shadow-md border border-gray-100 relative overflow-hidden">
                    <div className="absolute -right-6 -top-6 w-16 h-16 bg-amber-100/50 rounded-full opacity-70 hidden sm:block"></div>

                    <h2 className="text-lg font-semibold mb-3 text-gray-800 relative">
                        <span className="inline-block relative pb-1">
                            Other ways to reach us
                            <span className="absolute -bottom-0.5 left-0 w-full h-[2px] bg-gradient-to-r from-amber-500 to-orange-500"></span>
                        </span>
                    </h2>

                    <ul className="text-sm text-slate-700 space-y-2">
                        <li>
                            <span className="font-medium">Email:</span> <a className="text-indigo-600 hover:underline" href="mailto:contact@language-data-collection.org?subject=Language%20Data%20Collection%20Contact">contact@language-data-collection.org</a>
                        </li>
                        <li>
                            <span className="font-medium">Docs & FAQs:</span> Coming soon
                        </li>
                    </ul>

                    <div className="mt-4 rounded-md border border-slate-200 bg-slate-50 text-slate-700 p-3 text-xs">
                        Tip: Include details like language, script, and page URL to help us respond faster.
                    </div>
                </div>
            </div>
        </div>
    );
}
