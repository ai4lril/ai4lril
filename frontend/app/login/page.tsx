"use client";

import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useAuth } from "../../contexts/AuthContext";

export default function LoginPage() {
    const [isSignIn, setIsSignIn] = useState(true);
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        username: "",
    });
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const router = useRouter();
    const { login } = useAuth();

    function handleInputChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    }

    async function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setError("");
        setLoading(true);

        try {
            if (isSignIn) {
                // Sign in functionality
                const response = await fetch("/api/auth/signin", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        email: formData.email,
                        password: formData.password,
                    }),
                });

                const data = await response.json();

                if (data.success) {
                    // Store token in localStorage and auth context
                    if (data.token) {
                        login(data.token, data.user);
                    }
                    // Redirect after successful login
                    router.push("/speak");
                } else {
                    throw new Error(data.message || "Failed to sign in");
                }
            } else {
                // Sign up functionality - only send essential fields
                const signupData = {
                    email: formData.email,
                    password: formData.password,
                    username: formData.username,
                };

                const response = await fetch("/api/auth/signup", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(signupData),
                });

                const data = await response.json();

                if (data.success) {
                    // Switch to sign in mode after successful registration
                    setIsSignIn(true);
                    setError("Account created successfully! Please sign in to continue.");
                } else {
                    throw new Error(data.message || "Failed to sign up");
                }
            }
        } catch (err: any) {
            setError(err.message || "An error occurred");
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="flex h-[88vh] flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="w-full max-w-2xl space-y-8 bg-white/70 backdrop-blur-lg p-8 rounded-xl shadow-lg border border-gray-100">
                <div className="text-center">
                    <h1 className="text-4xl font-bold tracking-tight text-gray-900">
                        {isSignIn ? "Sign in to your account" : "Create a new account"}
                    </h1>
                    <p className="mt-2 text-sm text-gray-600">
                        {isSignIn ? "Don't have an account? " : "Already have an account? "}
                        <button
                            onClick={() => setIsSignIn(!isSignIn)}
                            className="font-medium text-blue-600 hover:text-blue-500"
                        >
                            {isSignIn ? "Sign up" : "Sign in"}
                        </button>
                    </p>
                </div>

                {error && (
                    <div className={`border px-4 py-3 rounded-md text-sm ${error.includes('successfully')
                        ? 'bg-green-50 border-green-200 text-green-700'
                        : 'bg-red-50 border-red-200 text-red-700'
                        }`}>
                        {error}
                    </div>
                )}

                <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                    <div className="space-y-4 rounded-md">
                        {/* Email and Password - Always shown */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                    Email address *
                                </label>
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    required
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    className="relative block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                    placeholder="email@example.com"
                                />
                            </div>

                            <div>
                                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                    Password *
                                </label>
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    required
                                    value={formData.password}
                                    onChange={handleInputChange}
                                    className="relative block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                    placeholder="••••••••"
                                />
                            </div>
                        </div>

                        {/* Registration fields - Only shown during signup */}
                        {!isSignIn && (
                            <>
                                <div>
                                    <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                                        Username *
                                    </label>
                                    <input
                                        id="username"
                                        name="username"
                                        type="text"
                                        required={!isSignIn}
                                        value={formData.username}
                                        onChange={handleInputChange}
                                        className="relative block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                        placeholder="johndoe"
                                    />
                                </div>


                            </>
                        )}
                    </div>

                    {isSignIn && (
                        <div className="flex items-center justify-end">
                            <div className="text-sm">
                                <Link
                                    href="/forgot-password"
                                    className="font-medium text-blue-600 hover:text-blue-500"
                                >
                                    Forgot your password?
                                </Link>
                            </div>
                        </div>
                    )}

                    <div>
                        <button
                            type="submit"
                            disabled={loading}
                            className="group relative flex w-full justify-center rounded-md bg-blue-600 px-3 py-3 text-sm font-semibold text-white hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:bg-blue-300"
                        >
                            {loading ? (
                                "Processing..."
                            ) : isSignIn ? (
                                "Sign in"
                            ) : (
                                "Sign up"
                            )}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
