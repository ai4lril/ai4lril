'use client';

import { useEffect, useState } from 'react';
// import { adminAuth } from '@/lib/adminAuth';
import AdminLayout from '@/components/AdminLayout';

interface DashboardStats {
    totalVisitors: number;
    totalUsers: number;
    totalContributions: number;
    totalAudioDuration: number;
    todayVisitors: number;
    todayContributions: number;
    activeUsers: number;
    pendingReviews: number;
}

interface LanguageStats {
    language: string;
    contributions: number;
    users: number;
    duration: number;
}

export default function AdminDashboard() {
    const [stats, setStats] = useState<DashboardStats>({
        totalVisitors: 0,
        totalUsers: 0,
        totalContributions: 0,
        totalAudioDuration: 0,
        todayVisitors: 0,
        todayContributions: 0,
        activeUsers: 0,
        pendingReviews: 0
    });
    const [languageStats, setLanguageStats] = useState<LanguageStats[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Mock data loading - in real app, this would be API calls
        const loadDashboardData = async () => {
            setLoading(true);
            // Simulate API delay
            await new Promise(resolve => setTimeout(resolve, 1000));

            // Mock dashboard data
            setStats({
                totalVisitors: 12547,
                totalUsers: 3241,
                totalContributions: 8923,
                totalAudioDuration: 45680, // minutes
                todayVisitors: 234,
                todayContributions: 89,
                activeUsers: 156,
                pendingReviews: 234
            });

            // Mock language statistics
            const mockLanguageStats: LanguageStats[] = [
                { language: 'Hindi', contributions: 2345, users: 678, duration: 4567 },
                { language: 'Bengali', contributions: 1987, users: 543, duration: 3876 },
                { language: 'Telugu', contributions: 1654, users: 456, duration: 3245 },
                { language: 'Marathi', contributions: 1432, users: 398, duration: 2898 },
                { language: 'Tamil', contributions: 1234, users: 345, duration: 2456 },
                { language: 'Gujarati', contributions: 987, users: 234, duration: 1987 },
                { language: 'Kannada', contributions: 876, users: 198, duration: 1756 },
                { language: 'Odia', contributions: 654, users: 156, duration: 1324 },
            ];

            setLanguageStats(mockLanguageStats);
            setLoading(false);
        };

        loadDashboardData();
    }, []);

    const formatDuration = (minutes: number) => {
        const hours = Math.floor(minutes / 60);
        const mins = minutes % 60;
        return `${hours}h ${mins}m`;
    };

    const StatCard = ({ title, value, subtitle, icon, color }: {
        title: string;
        value: string | number;
        subtitle?: string;
        icon: string;
        color: string;
    }) => (
        <div className={`bg-white overflow-hidden shadow rounded-lg ${color}`}>
            <div className="p-5">
                <div className="flex items-center">
                    <div className="flex-shrink-0">
                        <div className="text-2xl">{icon}</div>
                    </div>
                    <div className="ml-5 w-0 flex-1">
                        <dl>
                            <dt className="text-sm font-medium text-gray-500 truncate">
                                {title}
                            </dt>
                            <dd className="text-lg font-medium text-gray-900">
                                {value}
                            </dd>
                            {subtitle && (
                                <dd className="text-sm text-gray-600">
                                    {subtitle}
                                </dd>
                            )}
                        </dl>
                    </div>
                </div>
            </div>
        </div>
    );

    if (loading) {
        return (
            <AdminLayout>
                <div className="flex items-center justify-center min-h-96">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
                </div>
            </AdminLayout>
        );
    }

    return (
        <AdminLayout>
            <div className="py-6">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-2xl font-semibold text-gray-900 mb-8">Dashboard</h1>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">
                        <StatCard
                            title="Total Visitors"
                            value={stats.totalVisitors.toLocaleString()}
                            subtitle={`+${stats.todayVisitors} today`}
                            icon="👥"
                            color="border-l-4 border-blue-400"
                        />
                        <StatCard
                            title="Total Users"
                            value={stats.totalUsers.toLocaleString()}
                            subtitle={`${stats.activeUsers} active now`}
                            icon="👤"
                            color="border-l-4 border-green-400"
                        />
                        <StatCard
                            title="Total Contributions"
                            value={stats.totalContributions.toLocaleString()}
                            subtitle={`+${stats.todayContributions} today`}
                            icon="📝"
                            color="border-l-4 border-purple-400"
                        />
                        <StatCard
                            title="Audio Duration"
                            value={formatDuration(stats.totalAudioDuration)}
                            subtitle="Total collected"
                            icon="🎵"
                            color="border-l-4 border-orange-400"
                        />
                        <StatCard
                            title="Languages"
                            value={languageStats.length}
                            subtitle="Indian languages supported"
                            icon="🌍"
                            color="border-l-4 border-indigo-400"
                        />
                    </div>

                    {/* Quick Actions */}
                    <div className="mt-8">
                        <h2 className="text-lg font-medium text-gray-900 mb-4">Quick Actions</h2>
                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                            <a
                                href="/admin/analytics"
                                className="relative block w-full bg-white rounded-lg p-6 shadow hover:shadow-lg transition-shadow"
                            >
                                <div className="flex items-center">
                                    <div className="text-3xl mr-4">📊</div>
                                    <div>
                                        <h3 className="text-lg font-medium text-gray-900">View Analytics</h3>
                                        <p className="text-sm text-gray-500">Detailed visitor and contribution stats</p>
                                    </div>
                                </div>
                            </a>

                            <a
                                href="/admin/contributions"
                                className="relative block w-full bg-white rounded-lg p-6 shadow hover:shadow-lg transition-shadow"
                            >
                                <div className="flex items-center">
                                    <div className="text-3xl mr-4">📝</div>
                                    <div>
                                        <h3 className="text-lg font-medium text-gray-900">Manage Contributions</h3>
                                        <p className="text-sm text-gray-500">Review and manage user contributions</p>
                                    </div>
                                </div>
                            </a>

                            <a
                                href="/admin/users"
                                className="relative block w-full bg-white rounded-lg p-6 shadow hover:shadow-lg transition-shadow"
                            >
                                <div className="flex items-center">
                                    <div className="text-3xl mr-4">👥</div>
                                    <div>
                                        <h3 className="text-lg font-medium text-gray-900">User Management</h3>
                                        <p className="text-sm text-gray-500">View and manage user accounts</p>
                                    </div>
                                </div>
                            </a>

                            <a
                                href="/admin/data-collection"
                                className="relative block w-full bg-white rounded-lg p-6 shadow hover:shadow-lg transition-shadow"
                            >
                                <div className="flex items-center">
                                    <div className="text-3xl mr-4">🎙️</div>
                                    <div>
                                        <h3 className="text-lg font-medium text-gray-900">Data Collection</h3>
                                        <p className="text-sm text-gray-500">Monitor speech data collection metrics</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>

                    {/* Recent Activity */}
                    <div className="mt-8">
                        <h2 className="text-lg font-medium text-gray-900 mb-4">Recent Activity</h2>
                        <div className="bg-white shadow overflow-hidden sm:rounded-md">
                            <ul className="divide-y divide-gray-200">
                                <li className="px-6 py-4">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center">
                                            <div className="text-sm font-medium text-gray-900">New user registration</div>
                                            <div className="ml-2 text-sm text-gray-500">John Doe joined the platform</div>
                                        </div>
                                        <div className="text-sm text-gray-500">2 minutes ago</div>
                                    </div>
                                </li>
                                <li className="px-6 py-4">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center">
                                            <div className="text-sm font-medium text-gray-900">Audio contribution</div>
                                            <div className="ml-2 text-sm text-gray-500">Sarah Smith contributed 5 minutes of audio</div>
                                        </div>
                                        <div className="text-sm text-gray-500">15 minutes ago</div>
                                    </div>
                                </li>
                                <li className="px-6 py-4">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center">
                                            <div className="text-sm font-medium text-gray-900">Review completed</div>
                                            <div className="ml-2 text-sm text-gray-500">Mike Johnson reviewed 10 sentences</div>
                                        </div>
                                        <div className="text-sm text-gray-500">1 hour ago</div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Language-wise Data */}
                    <div className="mt-8">
                        <div className="flex items-center justify-between mb-4">
                            <h2 className="text-lg font-medium text-gray-900">Language-wise Data</h2>
                            <a
                                href="/admin/data-collection"
                                className="text-sm text-indigo-600 hover:text-indigo-500"
                            >
                                View all →
                            </a>
                        </div>
                        <div className="bg-white shadow overflow-hidden sm:rounded-md">
                            <div className="px-4 py-5 sm:p-6">
                                <div className="space-y-4">
                                    {languageStats.slice(0, 5).map((lang, index) => (
                                        <div key={lang.language} className="flex items-center justify-between">
                                            <div className="flex items-center">
                                                <div className="flex-shrink-0">
                                                    <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center">
                                                        <span className="text-xs font-medium text-indigo-600">
                                                            {index + 1}
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="ml-3">
                                                    <div className="text-sm font-medium text-gray-900">
                                                        {lang.language}
                                                    </div>
                                                    <div className="text-xs text-gray-500">
                                                        {lang.users} contributors
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="text-right">
                                                <div className="text-sm font-medium text-gray-900">
                                                    {lang.contributions.toLocaleString()}
                                                </div>
                                                <div className="text-xs text-gray-500">
                                                    {Math.floor(lang.duration / 60)}h {lang.duration % 60}m
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* System Status */}
                    <div className="mt-8">
                        <h2 className="text-lg font-medium text-gray-900 mb-4">System Status</h2>
                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                            <div className="bg-white overflow-hidden shadow rounded-lg">
                                <div className="p-5">
                                    <div className="flex items-center">
                                        <div className="flex-shrink-0">
                                            <svg className="h-8 w-8 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                            </svg>
                                        </div>
                                        <div className="ml-5 w-0 flex-1">
                                            <dl>
                                                <dt className="text-sm font-medium text-gray-500 truncate">
                                                    Database
                                                </dt>
                                                <dd className="text-lg font-medium text-gray-900">
                                                    Healthy
                                                </dd>
                                            </dl>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white overflow-hidden shadow rounded-lg">
                                <div className="p-5">
                                    <div className="flex items-center">
                                        <div className="flex-shrink-0">
                                            <svg className="h-8 w-8 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                            </svg>
                                        </div>
                                        <div className="ml-5 w-0 flex-1">
                                            <dl>
                                                <dt className="text-sm font-medium text-gray-500 truncate">
                                                    File Storage
                                                </dt>
                                                <dd className="text-lg font-medium text-gray-900">
                                                    Healthy
                                                </dd>
                                            </dl>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white overflow-hidden shadow rounded-lg">
                                <div className="p-5">
                                    <div className="flex items-center">
                                        <div className="flex-shrink-0">
                                            <svg className="h-8 w-8 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                                            </svg>
                                        </div>
                                        <div className="ml-5 w-0 flex-1">
                                            <dl>
                                                <dt className="text-sm font-medium text-gray-500 truncate">
                                                    Pending Reviews
                                                </dt>
                                                <dd className="text-lg font-medium text-gray-900">
                                                    {stats.pendingReviews}
                                                </dd>
                                            </dl>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
}
