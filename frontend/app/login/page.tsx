"use client";

import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function LoginPage() {
    const [isSignIn, setIsSignIn] = useState(true);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    async function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setError("");
        setLoading(true);

        try {
            if (isSignIn) {
                // Sign in functionality - will use Next-Auth after installation
                const response = await fetch("/api/auth/signin", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        email,
                        password,
                        redirect: false,
                    }),
                });

                const data = await response.json();

                if (!response.ok) {
                    throw new Error(data.error || "Failed to sign in");
                }

                // Redirect after successful login
                router.push("/speak");
            } else {
                // Sign up functionality - will use Next-
                const response = await fetch("/api/auth/signup", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        name,
                        email,
                        password,
                    }),
                });

                const data = await response.json();

                if (!response.ok) {
                    throw new Error(data.error || "Failed to sign up");
                }

                // Switch to sign in mode after successful registration
                setIsSignIn(true);
                setError("Account created successfully. Please sign in.");
            }
        } catch (err: unknown) {
            const message = err instanceof Error ? err.message : "An error occurred";
            setError(message);
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="flex h-[88vh] flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="w-full max-w-md space-y-8 bg-white/70 backdrop-blur-lg p-8 rounded-xl shadow-lg border border-gray-100">
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
                    <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-md text-sm">
                        {error}
                    </div>
                )}

                <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                    <div className="space-y-4 rounded-md shadow-sm">
                        {!isSignIn && (
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                                    Full Name
                                </label>
                                <input
                                    id="name"
                                    name="name"
                                    type="text"
                                    required={!isSignIn}
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    className="relative block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                    placeholder="John Doe"
                                />
                            </div>
                        )}

                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                Email address
                            </label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                autoComplete="email"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="relative block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                placeholder="email@example.com"
                            />
                        </div>

                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                Password
                            </label>
                            <input
                                id="password"
                                name="password"
                                type="password"
                                autoComplete={isSignIn ? "current-password" : "new-password"}
                                required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="relative block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                placeholder="••••••••"
                            />
                        </div>
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

                <div className="mt-6">
                    <div className="relative">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-gray-300" />
                        </div>
                        <div className="relative flex justify-center text-sm">
                            <span className="px-2 bg-white text-gray-500">Or continue with</span>
                        </div>
                    </div>

                    <div className="flex items-center justify-center mt-4">
                        <button className="px-4 py-2 border flex gap-2 border-slate-200 bg-white/80 rounded-lg text-slate-700 hover:border-slate-400 hover:text-slate-900 hover:shadow transition duration-150">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img className="w-6 h-6" src="https://www.svgrepo.com/show/475656/google-color.svg" loading="lazy" alt="google logo" />
                            <span>Login with Google</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
