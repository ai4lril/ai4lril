import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Cookie Policy | Data Collection & Usage",
    description: "Learn about how Language Data Collection uses cookies and similar technologies to enhance your experience while respecting your privacy choices.",
    keywords: [
        "cookie policy",
        "privacy settings",
        "tracking technologies",
        "user preferences",
        "data collection cookies",
        "essential cookies",
        "analytics cookies",
        "marketing cookies"
    ],
    openGraph: {
        title: "Cookie Policy | Language Data Collection",
        description: "Understand our cookie usage and your privacy controls.",
        type: "website",
        images: [
            {
                url: "/og-cookies.jpg",
                width: 1200,
                height: 630,
                alt: "Cookie Policy - Language Data Collection",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Cookie Policy | Language Data Collection",
        description: "Learn about our cookie practices and privacy controls.",
        images: ["/og-cookies.jpg"],
    },
};

export default function CookiesPage() {
    return (
        <div className="container mx-auto py-12 px-4 max-w-4xl animate-fade-in-up">
            <div className="glass rounded-2xl p-6 md:p-8 border border-slate-100 animate-bounce-in">
                <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 rounded-full bg-gradient-to-br from-yellow-100 to-orange-100 animate-pulse">
                        <svg className="w-8 h-8 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                        </svg>
                    </div>
                    <div>
                        <h1 className="text-3xl font-bold text-slate-800">Cookie Policy</h1>
                        <p className="mt-1 text-slate-600">Last updated: {new Date().toLocaleDateString()}</p>
                    </div>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
                    <h3 className="text-lg font-semibold text-blue-800 mb-2">🍪 Cookie Control Center</h3>
                    <p className="text-blue-700 text-sm">
                        You have full control over cookies. Essential cookies are always enabled for platform functionality.
                        You can manage your preferences below.
                    </p>
                </div>

                <section className="mt-8 space-y-4 text-slate-700 leading-relaxed">
                    <p>
                        This Cookie Policy explains how Language Data Collection (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) uses cookies
                        and similar technologies on our platform. Cookies are small text files that are stored on
                        your device when you visit our website. They help us provide you with a better experience
                        and allow certain features to work properly.
                    </p>

                    <div className="bg-green-50 border border-green-200 rounded-lg p-4 mt-4">
                        <h3 className="text-lg font-semibold text-green-800 mb-2">🔒 Your Privacy Controls</h3>
                        <p className="text-green-700 text-sm">
                            You can control cookie preferences at any time through your browser settings or our cookie banner.
                            Essential cookies cannot be disabled as they are required for the platform to function.
                        </p>
                    </div>
                </section>

                {/* Cookie Categories */}
                <section className="mt-10 animate-fade-in-up animate-delay-200">
                    <h2 className="text-xl font-semibold text-slate-800 flex items-center gap-3">
                        <div className="p-2 rounded-full bg-green-100">
                            <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        Essential Cookies (Always Enabled)
                    </h2>
                    <div className="mt-3 h-1 w-20 bg-gradient-to-r from-green-400 to-green-600 rounded-full"></div>

                    <div className="mt-4 space-y-4">
                        <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                            <h3 className="font-semibold text-green-800 mb-2">Required for Platform Functionality</h3>
                            <ul className="list-disc ml-6 space-y-2 text-green-700">
                                <li>
                                    <strong>Session Management:</strong> Maintains your login session and security tokens
                                </li>
                                <li>
                                    <strong>CSRF Protection:</strong> Prevents cross-site request forgery attacks
                                </li>
                                <li>
                                    <strong>Language Preferences:</strong> Remembers your selected language settings
                                </li>
                                <li>
                                    <strong>Security Monitoring:</strong> Tracks suspicious activities for fraud prevention
                                </li>
                            </ul>
                        </div>

                        <p className="text-slate-700">
                            These cookies are necessary for the website to function properly and cannot be disabled.
                            They do not store personal information beyond what is required for security and functionality.
                        </p>
                    </div>
                </section>

                <section className="mt-10 animate-fade-in-up animate-delay-300">
                    <h2 className="text-xl font-semibold text-slate-800 flex items-center gap-3">
                        <div className="p-2 rounded-full bg-blue-100">
                            <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                            </svg>
                        </div>
                        Analytics Cookies (Optional)
                    </h2>
                    <div className="mt-3 h-1 w-20 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full"></div>

                    <div className="mt-4 space-y-4">
                        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                            <h3 className="font-semibold text-blue-800 mb-2">Performance & Usage Analytics</h3>
                            <ul className="list-disc ml-6 space-y-2 text-blue-700">
                                <li>
                                    <strong>Page Views:</strong> Tracks which pages are visited and how long users stay
                                </li>
                                <li>
                                    <strong>User Journey:</strong> Monitors navigation patterns and user flow
                                </li>
                                <li>
                                    <strong>Performance Metrics:</strong> Measures page load times and responsiveness
                                </li>
                                <li>
                                    <strong>Error Tracking:</strong> Identifies and reports application errors
                                </li>
                            </ul>
                        </div>

                        <p className="text-slate-700">
                            Analytics cookies help us understand how our platform is used so we can improve user experience
                            and fix issues. All data is anonymized and aggregated - we cannot identify individual users
                            from analytics data alone.
                        </p>
                    </div>
                </section>

                <section className="mt-10 animate-fade-in-up animate-delay-400">
                    <h2 className="text-xl font-semibold text-slate-800 flex items-center gap-3">
                        <div className="p-2 rounded-full bg-purple-100">
                            <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                            </svg>
                        </div>
                        Functional Cookies (Optional)
                    </h2>
                    <div className="mt-3 h-1 w-20 bg-gradient-to-r from-purple-400 to-purple-600 rounded-full"></div>

                    <div className="mt-4 space-y-4">
                        <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                            <h3 className="font-semibold text-purple-800 mb-2">Enhanced User Experience</h3>
                            <ul className="list-disc ml-6 space-y-2 text-purple-700">
                                <li>
                                    <strong>User Preferences:</strong> Remembers your settings and customization choices
                                </li>
                                <li>
                                    <strong>Form Data:</strong> Saves form progress to prevent data loss
                                </li>
                                <li>
                                    <strong>Accessibility Settings:</strong> Maintains your accessibility preferences
                                </li>
                                <li>
                                    <strong>Feedback History:</strong> Tracks submitted feedback to avoid duplicates
                                </li>
                            </ul>
                        </div>

                        <p className="text-slate-700">
                            Functional cookies enhance your experience by remembering your preferences and choices.
                            They make the platform more convenient and personalized for your needs.
                        </p>
                    </div>
                </section>

                {/* Cookie Management */}
                <section className="mt-10 animate-fade-in-up animate-delay-500">
                    <h2 className="text-xl font-semibold text-slate-800 flex items-center gap-3">
                        <div className="p-2 rounded-full bg-orange-100">
                            <svg className="w-5 h-5 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                        </div>
                        Managing Your Cookie Preferences
                    </h2>
                    <div className="mt-3 h-1 w-20 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full"></div>

                    <div className="mt-4 space-y-4">
                        <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                            <h3 className="font-semibold text-orange-800 mb-2">Cookie Control Options</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-orange-700">
                                <div>
                                    <h4 className="font-medium mb-2">Browser Settings</h4>
                                    <ul className="list-disc ml-4 space-y-1 text-sm">
                                        <li>Chrome: Settings → Privacy → Cookies</li>
                                        <li>Firefox: Preferences → Privacy → Cookies</li>
                                        <li>Safari: Preferences → Privacy → Manage Website Data</li>
                                        <li>Edge: Settings → Cookies and site permissions</li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="font-medium mb-2">Our Platform Controls</h4>
                                    <ul className="list-disc ml-4 space-y-1 text-sm">
                                        <li>Cookie banner on first visit</li>
                                        <li>Privacy settings in your profile</li>
                                        <li>One-click opt-out options</li>
                                        <li>Granular preference controls</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                            <h3 className="font-semibold text-yellow-800 mb-2">⚠️ Important Notes</h3>
                            <ul className="list-disc ml-6 space-y-2 text-yellow-700">
                                <li>Disabling non-essential cookies may affect platform functionality</li>
                                <li>Some features may not work properly without functional cookies</li>
                                <li>Analytics cookies are completely anonymous and aggregated</li>
                                <li>You can change your preferences at any time</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Third-Party Cookies */}
                <section className="mt-10 animate-fade-in-up animate-delay-600">
                    <h2 className="text-xl font-semibold text-slate-800 flex items-center gap-3">
                        <div className="p-2 rounded-full bg-red-100">
                            <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                            </svg>
                        </div>
                        Third-Party Services & Cookies
                    </h2>
                    <div className="mt-3 h-1 w-20 bg-gradient-to-r from-red-400 to-red-600 rounded-full"></div>

                    <div className="mt-4 space-y-4">
                        <p className="text-slate-700">
                            We may use third-party services that set their own cookies. These services are carefully
                            selected and contracted to ensure they meet our privacy and security standards.
                        </p>

                        <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                            <h3 className="font-semibold text-red-800 mb-2">Authorized Third Parties</h3>
                            <ul className="list-disc ml-6 space-y-2 text-red-700">
                                <li>
                                    <strong>Hosting Providers:</strong> Secure cloud infrastructure (no tracking cookies)
                                </li>
                                <li>
                                    <strong>Security Services:</strong> Fraud prevention and threat monitoring
                                </li>
                                <li>
                                    <strong>Error Monitoring:</strong> Application performance and error tracking
                                </li>
                                <li>
                                    <strong>CDN Services:</strong> Content delivery optimization (no user tracking)
                                </li>
                            </ul>
                        </div>

                        <p className="text-slate-700">
                            All third-party services are bound by data processing agreements that require them to
                            maintain the same level of privacy protection as we do. We do not allow third parties to
                            use cookies for advertising or cross-site tracking purposes.
                        </p>
                    </div>
                </section>

                {/* Cookie Retention */}
                <section className="mt-10 animate-fade-in-up animate-delay-700">
                    <h2 className="text-xl font-semibold text-slate-800 flex items-center gap-3">
                        <div className="p-2 rounded-full bg-teal-100">
                            <svg className="w-5 h-5 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        Cookie Retention & Deletion
                    </h2>
                    <div className="mt-3 h-1 w-20 bg-gradient-to-r from-teal-400 to-teal-600 rounded-full"></div>

                    <div className="mt-4 space-y-4">
                        <div className="bg-teal-50 border border-teal-200 rounded-lg p-4">
                            <h3 className="font-semibold text-teal-800 mb-2">Retention Periods</h3>
                            <ul className="list-disc ml-6 space-y-2 text-teal-700">
                                <li>
                                    <strong>Essential Cookies:</strong> Session duration or up to 1 year (security requirements)
                                </li>
                                <li>
                                    <strong>Analytics Cookies:</strong> Up to 2 years (anonymized and aggregated)
                                </li>
                                <li>
                                    <strong>Functional Cookies:</strong> Up to 1 year (user preferences)
                                </li>
                                <li>
                                    <strong>Marketing Cookies:</strong> Up to 1 year (with explicit consent)
                                </li>
                            </ul>
                        </div>

                        <p className="text-slate-700">
                            Cookies are automatically deleted when they expire or when you clear your browser data.
                            You can also request manual deletion of your data through our Data Subject Rights Portal.
                        </p>
                    </div>
                </section>

                {/* Updates to Policy */}
                <section className="mt-10 animate-fade-in-up animate-delay-800">
                    <h2 className="text-xl font-semibold text-slate-800 flex items-center gap-3">
                        <div className="p-2 rounded-full bg-gray-100">
                            <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                            </svg>
                        </div>
                        Updates to This Cookie Policy
                    </h2>
                    <div className="mt-3 h-1 w-20 bg-gradient-to-r from-gray-400 to-gray-600 rounded-full"></div>

                    <p className="mt-3 text-slate-700">
                        We may update this Cookie Policy from time to time to reflect changes in our practices or
                        applicable laws. When we make material changes, we will:
                    </p>

                    <ul className="list-disc ml-6 space-y-2 text-slate-700 mt-3">
                        <li>Update the &quot;Last updated&quot; date at the top of this page</li>
                        <li>Notify you through our platform or via email (if applicable)</li>
                        <li>Highlight significant changes in our platform announcements</li>
                        <li>Provide a summary of changes and their impact</li>
                    </ul>
                </section>

                {/* Contact Information */}
                <section className="mt-10 animate-fade-in-up animate-delay-900">
                    <h2 className="text-xl font-semibold text-slate-800 flex items-center gap-3">
                        <div className="p-2 rounded-full bg-indigo-100">
                            <svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                        </div>
                        Contact Us About Cookies
                    </h2>
                    <div className="mt-3 h-1 w-20 bg-gradient-to-r from-indigo-400 to-indigo-600 rounded-full"></div>

                    <div className="mt-4 space-y-4">
                        <p className="text-slate-700">
                            If you have questions about this Cookie Policy or our cookie practices, please contact us:
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                                <h3 className="font-semibold text-gray-800 mb-2">Cookie Preferences</h3>
                                <p className="text-gray-700 text-sm">
                                    For cookie preference management and opt-out requests:
                                    <br />
                                    <strong>Email:</strong> privacy@language-data-collection.org
                                </p>
                            </div>

                            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                                <h3 className="font-semibold text-gray-800 mb-2">Data Protection Officer</h3>
                                <p className="text-gray-700 text-sm">
                                    For data protection and privacy concerns:
                                    <br />
                                    <strong>Email:</strong> dpo@language-data-collection.org
                                </p>
                            </div>
                        </div>

                        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                            <h3 className="font-semibold text-blue-800 mb-2">Your Rights</h3>
                            <p className="text-blue-700 text-sm">
                                You have the right to request information about cookies we use, request deletion of
                                cookie data, and withdraw consent for non-essential cookies at any time.
                            </p>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}
