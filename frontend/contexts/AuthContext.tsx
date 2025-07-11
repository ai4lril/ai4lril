"use client";

// Authentication context and provider for user session management

import React, { createContext, useContext, useEffect, useState } from "react";

/**
 * User interface representing the authenticated user's data
 */
interface User {
    id: string;
    email: string;
    username: string;
    first_name?: string;
    last_name?: string;
    display_name?: string;
}

/**
 * AuthContext interface defining all authentication-related functionality
 */
interface AuthContextType {
    user: User | null;
    token: string | null;
    login: (token: string, user: User) => void;
    logout: () => void;
    isAuthenticated: boolean;
    loading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

/**
 * AuthProvider Component
 *
 * Provides authentication context to the entire application.
 * Handles:
 * - Token storage and retrieval from localStorage
 * - User session persistence across browser sessions
 * - Token validation and expiration checking
 * - Secure logout functionality
 *
 * Security considerations:
 * - Validates stored tokens before using them
 * - Handles localStorage safely for SSR compatibility
 * - Clears invalid/expired tokens automatically
 */
// Provides authentication state and actions to the app
export function AuthProvider({ children }: { children: React.ReactNode }) {
    const [user, setUser] = useState<User | null>(null);
    const [token, setToken] = useState<string | null>(null);
    const [loading, setLoading] = useState(true);

    /**
     * Validates if a JWT token is expired
     * @param token - JWT token string
     * @returns boolean indicating if token is valid (not expired)
     */
    // Checks if a JWT token is not expired
    const isTokenValid = (token: string): boolean => {
        try {
            // Decode JWT payload without verification (just for expiration check)
            const payload = JSON.parse(atob(token.split(".")[1]));
            const currentTime = Date.now() / 1000;
            return payload.exp && payload.exp > currentTime;
        } catch (error) {
            console.warn("Invalid token format:", error);
            return false;
        }
    };

    /**
     * Safely access localStorage (handles SSR)
     * @param key - localStorage key
     * @returns stored value or null
     */
    // SSR-safe localStorage getter
    const getStoredItem = (key: string): string | null => {
        if (typeof window === "undefined") return null;
        try {
            return localStorage.getItem(key);
        } catch (error) {
            console.warn(
                `Failed to access localStorage for key ${key}:`,
                error,
            );
            return null;
        }
    };

    /**
     * Safely set localStorage item
     * @param key - localStorage key
     * @param value - value to store
     */
    // SSR-safe localStorage setter
    const setStoredItem = (key: string, value: string): void => {
        if (typeof window === "undefined") return;
        try {
            localStorage.setItem(key, value);
        } catch (error) {
            console.warn(`Failed to set localStorage for key ${key}:`, error);
        }
    };

    /**
     * Safely remove localStorage item
     * @param key - localStorage key
     */
    // SSR-safe localStorage remover
    const removeStoredItem = (key: string): void => {
        if (typeof window === "undefined") return;
        try {
            localStorage.removeItem(key);
        } catch (error) {
            console.warn(
                `Failed to remove localStorage for key ${key}:`,
                error,
            );
        }
    };

    useEffect(() => {
        // Restore session from localStorage on mount
        const storedToken = getStoredItem("auth-token");
        const storedUser = getStoredItem("user");
        if (storedToken && storedUser) {
            try {
                if (!isTokenValid(storedToken)) {
                    removeStoredItem("auth-token");
                    removeStoredItem("user");
                    setLoading(false);
                    return;
                }
                const userData = JSON.parse(storedUser);
                if (userData.id && userData.email && userData.username) {
                    setToken(storedToken);
                    setUser(userData);
                } else {
                    throw new Error("Invalid user data structure");
                }
            } catch (error) {
                removeStoredItem("auth-token");
                removeStoredItem("user");
            }
        }
        setLoading(false);
    }, []);

    /**
     * Login function to authenticate user and store session data
     * @param newToken - JWT token from backend
     * @param newUser - User data from backend
     */
    const login = (newToken: string, newUser: User) => {
        // Validate inputs
        if (
            !newToken ||
            !newUser?.id ||
            !newUser?.email ||
            !newUser?.username
        ) {
            console.error("Invalid login data provided");
            return;
        }

        // Validate token
        if (!isTokenValid(newToken)) {
            console.error("Provided token is invalid or expired");
            return;
        }

        setStoredItem("auth-token", newToken);
        setStoredItem("user", JSON.stringify(newUser));
        setToken(newToken);
        setUser(newUser);
    };

    /**
     * Logout function to clear all session data
     */
    const logout = () => {
        removeStoredItem("auth-token");
        removeStoredItem("user");
        setToken(null);
        setUser(null);
    };

    const value = {
        user,
        token,
        login,
        logout,
        isAuthenticated: !!user && !!token,
        loading,
    };

    return (
        <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    );
}

/**
 * Custom hook to use authentication context
 * @returns AuthContextType object with all auth functionality
 * @throws Error if used outside of AuthProvider
 */
export function useAuth() {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
}
