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
        <div className="w-full max-w-2xl md:max-w-4xl py-8 px-4 mx-auto animate-fade-in-up">
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

            {success && (
                <div className="mt-4 text-center animate-fade-in-up">
                    <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-xl px-6 py-4 shadow-lg max-w-md mx-auto" role="status" aria-live="polite">
                        <div className="flex items-center justify-center gap-3">
                            <div className="p-2 rounded-full bg-green-100 animate-bounce">
                                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <p className="text-green-800 font-semibold">{success}</p>
                        </div>
                    </div>
                </div>
            )}

            <div className="mt-6 grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-4">
                {/* Form card */}
                <div className="glass rounded-md md:rounded-lg p-4 shadow-md border border-gray-100 relative overflow-hidden">
                    <div className="absolute -right-8 -top-8 w-20 h-20 bg-indigo-100/50 rounded-full opacity-70 hidden sm:block"></div>
                    <div className="absolute -left-6 -bottom-6 w-16 h-16 bg-blue-100/50 rounded-full opacity-70 hidden sm:block"></div>

                    <h2 className="text-lg font-semibold mb-3 text-gray-800 relative">
                        <span className="inline-block relative pb-1">
                            Send a message
                            <span className="absolute -bottom-0.5 left-0 w-full h-[2px] bg-gradient-to-r from-indigo-500 to-purple-500"></span>
                        </span>
                    </h2>

                    <form onSubmit={onSubmit} noValidate className="space-y-6 animate-fade-in-up animate-delay-300">
                        <div className="space-y-2">
                            <label htmlFor="name" className="block text-sm font-semibold text-slate-800 flex items-center gap-2">
                                <svg className="w-4 h-4 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                </svg>
                                Name
                                <span className="text-red-500 ml-1">*</span>
                            </label>
                            <div className="relative">
                                <input
                                    id="name"
                                    name="name"
                                    className={`w-full border-2 rounded-lg px-4 py-3 bg-white/50 hover:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 transition-all duration-200 text-gray-800 placeholder-gray-400 ${showError('name') ? 'border-red-400 bg-red-50/50 focus:ring-red-400 focus:border-red-400' : 'border-gray-200 hover:border-gray-300'
                                        }`}
                                    placeholder="Enter your full name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    onBlur={() => setTouched(prev => ({ ...prev, name: true }))}
                                    aria-invalid={!!showError('name')}
                                    aria-describedby={showError('name') ? 'name-error' : undefined}
                                />
                                <svg className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                </svg>
                            </div>
                            {showError('name') && (
                                <p id="name-error" className="mt-2 text-sm text-red-600 flex items-center gap-1 animate-fade-in-up">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
                                    </svg>
                                    {errors.name}
                                </p>
                            )}
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="email" className="block text-sm font-semibold text-slate-800 flex items-center gap-2">
                                <svg className="w-4 h-4 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                Email
                                <span className="text-red-500 ml-1">*</span>
                            </label>
                            <div className="relative">
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    className={`w-full border-2 rounded-lg px-4 py-3 bg-white/50 hover:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-emerald-400 transition-all duration-200 text-gray-800 placeholder-gray-400 ${showError('email') ? 'border-red-400 bg-red-50/50 focus:ring-red-400 focus:border-red-400' : 'border-gray-200 hover:border-gray-300'
                                        }`}
                                    placeholder="your.email@example.com"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    onBlur={() => setTouched(prev => ({ ...prev, email: true }))}
                                    aria-invalid={!!showError('email')}
                                    aria-describedby={showError('email') ? 'email-error' : undefined}
                                />
                                <svg className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </div>
                            {showError('email') && (
                                <p id="email-error" className="mt-2 text-sm text-red-600 flex items-center gap-1 animate-fade-in-up">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
                                    </svg>
                                    {errors.email}
                                </p>
                            )}
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="message" className="block text-sm font-semibold text-slate-800 flex items-center gap-2">
                                <svg className="w-4 h-4 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                                </svg>
                                Message
                                <span className="text-red-500 ml-1">*</span>
                            </label>
                            <div className="relative">
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={6}
                                    className={`w-full border-2 rounded-lg px-4 py-3 bg-white/50 hover:bg-white focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-amber-400 resize-vertical transition-all duration-200 text-gray-800 placeholder-gray-400 ${showError('message') ? 'border-red-400 bg-red-50/50 focus:ring-red-400 focus:border-red-400' : 'border-gray-200 hover:border-gray-300'
                                        }`}
                                    placeholder="Tell us how we can help you..."
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    onBlur={() => setTouched(prev => ({ ...prev, message: true }))}
                                    aria-invalid={!!showError('message')}
                                    aria-describedby={showError('message') ? 'message-error' : undefined}
                                />
                                <svg className="absolute right-3 top-3 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                                </svg>
                            </div>
                            {showError('message') && (
                                <p id="message-error" className="mt-2 text-sm text-red-600 flex items-center gap-1 animate-fade-in-up">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
                                    </svg>
                                    {errors.message}
                                </p>
                            )}
                        </div>

                        <div className="pt-4 flex items-center justify-between gap-3">
                            <button
                                type="submit"
                                disabled={submitting}
                                className={`group px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl border-2 flex items-center gap-3 ${submitting
                                        ? 'bg-gray-100 border-gray-200 text-gray-400 cursor-not-allowed'
                                        : 'bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white border-indigo-400 hover:border-indigo-500 hover:scale-105 active:scale-95'
                                    }`}
                            >
                                {submitting ? (
                                    <>
                                        <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                        </svg>
                                        Sending…
                                    </>
                                ) : (
                                    <>
                                        <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                                        </svg>
                                        Send message
                                    </>
                                )}
                            </button>
                            <p className="text-sm text-slate-600 flex items-center gap-2">
                                <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                We&apos;ll reply within 24–48 hours
                            </p>
                        </div>
                    </form>
                </div>

                {/* Alternatives + info */}
                <div className="glass rounded-md md:rounded-lg p-6 shadow-md border border-gray-100 relative overflow-hidden animate-fade-in-up animate-delay-500">
                    <div className="absolute -right-6 -top-6 w-16 h-16 bg-amber-100/50 rounded-full opacity-70 hidden sm:block animate-pulse"></div>

                    <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 rounded-full bg-gradient-to-br from-amber-100 to-orange-100">
                            <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                            </svg>
                        </div>
                        <h2 className="text-lg font-semibold text-gray-800">Other ways to reach us</h2>
                    </div>

                    <div className="space-y-4">
                        <div className="flex items-center gap-3 p-3 rounded-lg bg-white/50 hover:bg-white/80 transition-colors duration-300">
                            <div className="p-2 rounded-full bg-blue-100">
                                <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <div>
                                <div className="text-sm font-semibold text-slate-800">Email</div>
                                <a className="text-indigo-600 hover:underline text-sm font-medium transition-colors duration-300" href="mailto:contact@language-data-collection.org?subject=Language%20Data%20Collection%20Contact">
                                    contact@language-data-collection.org
                                </a>
                            </div>
                        </div>

                        <div className="flex items-center gap-3 p-3 rounded-lg bg-white/50 hover:bg-white/80 transition-colors duration-300">
                            <div className="p-2 rounded-full bg-purple-100">
                                <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                </svg>
                            </div>
                            <div>
                                <div className="text-sm font-semibold text-slate-800">Documentation</div>
                                <span className="text-slate-600 text-sm">Coming soon</span>
                            </div>
                        </div>
                    </div>

                    <div className="mt-6 rounded-xl border-2 border-dashed border-amber-200 bg-gradient-to-r from-amber-50 to-orange-50 p-4">
                        <div className="flex items-start gap-3">
                            <div className="p-2 rounded-full bg-amber-100 flex-shrink-0">
                                <svg className="w-5 h-5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <div>
                                <div className="text-sm font-semibold text-amber-800 mb-1">Pro tip</div>
                                <p className="text-sm text-amber-700 leading-relaxed">Include details like language, script, and page URL to help us respond faster and more accurately.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
