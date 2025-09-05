'use client';

import { useState, useEffect } from 'react';
import AdminLayout from '@/components/AdminLayout';

interface User {
    id: string;
    name: string;
    email: string;
    phone?: string;
    location?: {
        city: string;
        state: string;
        pincode: string;
    };
    demographics: {
        age: number;
        gender: 'male' | 'female' | 'other';
        language: string;
        education?: string;
    };
    stats: {
        totalContributions: number;
        speechContributions: number;
        nerContributions: number;
        posContributions: number;
        sentimentContributions: number;
        emotionContributions: number;
        totalDuration: number;
        avgQuality: number;
        lastActivity: Date;
    };
    account: {
        createdAt: Date;
        isActive: boolean;
        isVerified: boolean;
        lastLogin: Date;
    };
}

export default function UsersPage() {
    const [users, setUsers] = useState<User[]>([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');
    const [activeFilter, setActiveFilter] = useState<'all' | 'active' | 'inactive'>('all');
    const [selectedUser, setSelectedUser] = useState<User | null>(null);
    const [showUserDetails, setShowUserDetails] = useState(false);

    useEffect(() => {
        loadUsersData();
    }, []);

    const loadUsersData = async () => {
        setLoading(true);
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000));

        // Mock users data
        const mockUsers: User[] = [
            {
                id: '1',
                name: 'Rahul Sharma',
                email: 'rahul.sharma@example.com',
                phone: '+91-9876543210',
                location: {
                    city: 'Delhi',
                    state: 'Delhi',
                    pincode: '110001'
                },
                demographics: {
                    age: 28,
                    gender: 'male',
                    language: 'Hindi',
                    education: 'Bachelor\'s Degree'
                },
                stats: {
                    totalContributions: 156,
                    speechContributions: 89,
                    nerContributions: 23,
                    posContributions: 34,
                    sentimentContributions: 10,
                    emotionContributions: 0,
                    totalDuration: 445,
                    avgQuality: 94,
                    lastActivity: new Date('2024-01-15T14:30:00')
                },
                account: {
                    createdAt: new Date('2024-01-01T10:00:00'),
                    isActive: true,
                    isVerified: true,
                    lastLogin: new Date('2024-01-15T14:30:00')
                }
            },
            {
                id: '2',
                name: 'Priya Patel',
                email: 'priya.patel@example.com',
                phone: '+91-9876543211',
                location: {
                    city: 'Mumbai',
                    state: 'Maharashtra',
                    pincode: '400001'
                },
                demographics: {
                    age: 32,
                    gender: 'female',
                    language: 'Marathi',
                    education: 'Master\'s Degree'
                },
                stats: {
                    totalContributions: 203,
                    speechContributions: 145,
                    nerContributions: 28,
                    posContributions: 15,
                    sentimentContributions: 12,
                    emotionContributions: 3,
                    totalDuration: 678,
                    avgQuality: 96,
                    lastActivity: new Date('2024-01-15T16:45:00')
                },
                account: {
                    createdAt: new Date('2023-12-15T09:30:00'),
                    isActive: true,
                    isVerified: true,
                    lastLogin: new Date('2024-01-15T16:45:00')
                }
            },
            {
                id: '3',
                name: 'Amit Kumar',
                email: 'amit.kumar@example.com',
                location: {
                    city: 'Bangalore',
                    state: 'Karnataka',
                    pincode: '560001'
                },
                demographics: {
                    age: 25,
                    gender: 'male',
                    language: 'Kannada',
                    education: 'Bachelor\'s Degree'
                },
                stats: {
                    totalContributions: 87,
                    speechContributions: 45,
                    nerContributions: 18,
                    posContributions: 12,
                    sentimentContributions: 8,
                    emotionContributions: 4,
                    totalDuration: 234,
                    avgQuality: 89,
                    lastActivity: new Date('2024-01-14T11:20:00')
                },
                account: {
                    createdAt: new Date('2024-01-10T14:15:00'),
                    isActive: false,
                    isVerified: true,
                    lastLogin: new Date('2024-01-14T11:20:00')
                }
            },
            // Add more mock users...
        ];

        setUsers(mockUsers);
        setLoading(false);
    };

    const formatDuration = (minutes: number) => {
        const hours = Math.floor(minutes / 60);
        const mins = minutes % 60;
        return `${hours}h ${mins}m`;
    };

    const filteredUsers = users.filter(user => {
        const matchesSearch = user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
            (user.location?.city.toLowerCase().includes(searchTerm.toLowerCase())) ||
            user.demographics.language.toLowerCase().includes(searchTerm.toLowerCase());

        const matchesFilter = activeFilter === 'all' ||
            (activeFilter === 'active' && user.account.isActive) ||
            (activeFilter === 'inactive' && !user.account.isActive);

        return matchesSearch && matchesFilter;
    });

    const getQualityColor = (quality: number) => {
        if (quality >= 95) return 'text-green-600 bg-green-100';
        if (quality >= 90) return 'text-blue-600 bg-blue-100';
        if (quality >= 85) return 'text-yellow-600 bg-yellow-100';
        return 'text-red-600 bg-red-100';
    };

    const getActivityStatus = (lastActivity: Date) => {
        const daysSince = Math.floor((Date.now() - lastActivity.getTime()) / (1000 * 60 * 60 * 24));
        if (daysSince <= 1) return { status: 'Active', color: 'text-green-600 bg-green-100' };
        if (daysSince <= 7) return { status: 'Recent', color: 'text-blue-600 bg-blue-100' };
        if (daysSince <= 30) return { status: 'Inactive', color: 'text-yellow-600 bg-yellow-100' };
        return { status: 'Very Inactive', color: 'text-red-600 bg-red-100' };
    };

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
                    <div className="flex items-center justify-between">
                        <h1 className="text-2xl font-semibold text-gray-900">User Management</h1>
                        <div className="flex items-center space-x-4">
                            <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
                                Export Users
                            </button>
                        </div>
                    </div>

                    {/* Stats Cards */}
                    <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
                        <div className="bg-white overflow-hidden shadow rounded-lg">
                            <div className="p-5">
                                <div className="flex items-center">
                                    <div className="flex-shrink-0">
                                        <div className="text-2xl">👥</div>
                                    </div>
                                    <div className="ml-5 w-0 flex-1">
                                        <dl>
                                            <dt className="text-sm font-medium text-gray-500 truncate">
                                                Total Users
                                            </dt>
                                            <dd className="text-lg font-medium text-gray-900">
                                                {users.length}
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
                                        <div className="text-2xl">🔵</div>
                                    </div>
                                    <div className="ml-5 w-0 flex-1">
                                        <dl>
                                            <dt className="text-sm font-medium text-gray-500 truncate">
                                                Active Users
                                            </dt>
                                            <dd className="text-lg font-medium text-gray-900">
                                                {users.filter(u => u.account.isActive).length}
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
                                        <div className="text-2xl">📝</div>
                                    </div>
                                    <div className="ml-5 w-0 flex-1">
                                        <dl>
                                            <dt className="text-sm font-medium text-gray-500 truncate">
                                                Total Contributions
                                            </dt>
                                            <dd className="text-lg font-medium text-gray-900">
                                                {users.reduce((sum, u) => sum + u.stats.totalContributions, 0)}
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
                                        <div className="text-2xl">⭐</div>
                                    </div>
                                    <div className="ml-5 w-0 flex-1">
                                        <dl>
                                            <dt className="text-sm font-medium text-gray-500 truncate">
                                                Avg Quality
                                            </dt>
                                            <dd className="text-lg font-medium text-gray-900">
                                                {(users.reduce((sum, u) => sum + u.stats.avgQuality, 0) / users.length).toFixed(1)}%
                                            </dd>
                                        </dl>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Filters */}
                    <div className="mt-8">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-4">
                                <div className="flex items-center space-x-2">
                                    <label htmlFor="filter" className="text-sm font-medium text-gray-700">
                                        Filter by status:
                                    </label>
                                    <select
                                        id="filter"
                                        value={activeFilter}
                                        onChange={(e) => setActiveFilter(e.target.value as 'all' | 'active' | 'inactive')}
                                        className="rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-sm"
                                    >
                                        <option value="all">All Users</option>
                                        <option value="active">Active Only</option>
                                        <option value="inactive">Inactive Only</option>
                                    </select>
                                </div>
                            </div>

                            <div className="flex items-center">
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <svg className="h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <input
                                        type="text"
                                        placeholder="Search users..."
                                        value={searchTerm}
                                        onChange={(e) => setSearchTerm(e.target.value)}
                                        className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Users Table */}
                    <div className="mt-6">
                        <div className="bg-white shadow overflow-hidden sm:rounded-md">
                            <div className="overflow-x-auto">
                                <table className="min-w-full divide-y divide-gray-200">
                                    <thead className="bg-gray-50">
                                        <tr>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                User
                                            </th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Location
                                            </th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Demographics
                                            </th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Contributions
                                            </th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Quality
                                            </th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Status
                                            </th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Last Activity
                                            </th>
                                            <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Actions
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white divide-y divide-gray-200">
                                        {filteredUsers.map((user) => (
                                            <tr key={user.id} className="hover:bg-gray-50">
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <div className="flex items-center">
                                                        <div className="h-10 w-10 bg-indigo-500 rounded-full flex items-center justify-center">
                                                            <span className="text-white font-medium">
                                                                {user.name.charAt(0).toUpperCase()}
                                                            </span>
                                                        </div>
                                                        <div className="ml-4">
                                                            <div className="text-sm font-medium text-gray-900">
                                                                {user.name}
                                                            </div>
                                                            <div className="text-sm text-gray-500">
                                                                {user.email}
                                                            </div>
                                                            {user.phone && (
                                                                <div className="text-xs text-gray-400">
                                                                    {user.phone}
                                                                </div>
                                                            )}
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <div className="text-sm text-gray-900">
                                                        {user.location?.city}, {user.location?.state}
                                                    </div>
                                                    <div className="text-sm text-gray-500">
                                                        {user.location?.pincode}
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <div className="text-sm text-gray-900">
                                                        {user.demographics.age} years, {user.demographics.gender}
                                                    </div>
                                                    <div className="text-sm text-gray-500">
                                                        {user.demographics.language}
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                    <div>Total: {user.stats.totalContributions}</div>
                                                    <div>Speech: {user.stats.speechContributions}</div>
                                                    <div>Duration: {formatDuration(user.stats.totalDuration)}</div>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getQualityColor(user.stats.avgQuality)}`}>
                                                        {user.stats.avgQuality}%
                                                    </span>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${user.account.isActive
                                                            ? 'bg-green-100 text-green-800'
                                                            : 'bg-red-100 text-red-800'
                                                        }`}>
                                                        {user.account.isActive ? 'Active' : 'Inactive'}
                                                    </span>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <div className="text-sm text-gray-900">
                                                        {user.stats.lastActivity.toLocaleDateString()}
                                                    </div>
                                                    <div className={`text-xs px-2 py-1 rounded-full inline-block mt-1 ${getActivityStatus(user.stats.lastActivity).color}`}>
                                                        {getActivityStatus(user.stats.lastActivity).status}
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                                    <button
                                                        onClick={() => {
                                                            setSelectedUser(user);
                                                            setShowUserDetails(true);
                                                        }}
                                                        className="text-indigo-600 hover:text-indigo-900"
                                                    >
                                                        View Details
                                                    </button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    {/* User Details Modal */}
                    {showUserDetails && selectedUser && (
                        <div className="fixed inset-0 z-50 overflow-y-auto">
                            <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                                <div className="fixed inset-0 transition-opacity" onClick={() => setShowUserDetails(false)}>
                                    <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
                                </div>

                                <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-4xl sm:w-full">
                                    <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                                        <div className="sm:flex sm:items-start">
                                            <div className="mt-3 text-center sm:mt-0 sm:text-left w-full">
                                                <div className="flex items-center mb-4">
                                                    <div className="h-16 w-16 bg-indigo-500 rounded-full flex items-center justify-center">
                                                        <span className="text-white font-medium text-xl">
                                                            {selectedUser.name.charAt(0).toUpperCase()}
                                                        </span>
                                                    </div>
                                                    <div className="ml-4">
                                                        <h3 className="text-lg leading-6 font-medium text-gray-900">
                                                            {selectedUser.name}
                                                        </h3>
                                                        <p className="text-sm text-gray-500">{selectedUser.email}</p>
                                                        <div className="flex items-center mt-1">
                                                            <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full mr-2 ${selectedUser.account.isActive
                                                                    ? 'bg-green-100 text-green-800'
                                                                    : 'bg-red-100 text-red-800'
                                                                }`}>
                                                                {selectedUser.account.isActive ? 'Active' : 'Inactive'}
                                                            </span>
                                                            <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getQualityColor(selectedUser.stats.avgQuality)}`}>
                                                                Quality: {selectedUser.stats.avgQuality}%
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                    {/* Personal Information */}
                                                    <div>
                                                        <h4 className="text-md font-medium text-gray-900 mb-3">Personal Information</h4>
                                                        <div className="space-y-2">
                                                            <div>
                                                                <label className="block text-sm font-medium text-gray-700">Phone</label>
                                                                <p className="text-sm text-gray-900">{selectedUser.phone || 'Not provided'}</p>
                                                            </div>
                                                            <div>
                                                                <label className="block text-sm font-medium text-gray-700">Location</label>
                                                                <p className="text-sm text-gray-900">
                                                                    {selectedUser.location?.city}, {selectedUser.location?.state}
                                                                </p>
                                                                <p className="text-sm text-gray-500">{selectedUser.location?.pincode}</p>
                                                            </div>
                                                            <div>
                                                                <label className="block text-sm font-medium text-gray-700">Demographics</label>
                                                                <p className="text-sm text-gray-900">
                                                                    Age: {selectedUser.demographics.age}, Gender: {selectedUser.demographics.gender}
                                                                </p>
                                                                <p className="text-sm text-gray-500">
                                                                    Language: {selectedUser.demographics.language}
                                                                </p>
                                                                {selectedUser.demographics.education && (
                                                                    <p className="text-sm text-gray-500">
                                                                        Education: {selectedUser.demographics.education}
                                                                    </p>
                                                                )}
                                                            </div>
                                                        </div>
                                                    </div>

                                                    {/* Contribution Statistics */}
                                                    <div>
                                                        <h4 className="text-md font-medium text-gray-900 mb-3">Contribution Statistics</h4>
                                                        <div className="space-y-2">
                                                            <div className="grid grid-cols-2 gap-4">
                                                                <div>
                                                                    <label className="block text-sm font-medium text-gray-700">Total Contributions</label>
                                                                    <p className="text-lg font-semibold text-gray-900">{selectedUser.stats.totalContributions}</p>
                                                                </div>
                                                                <div>
                                                                    <label className="block text-sm font-medium text-gray-700">Total Duration</label>
                                                                    <p className="text-lg font-semibold text-gray-900">{formatDuration(selectedUser.stats.totalDuration)}</p>
                                                                </div>
                                                            </div>

                                                            <div>
                                                                <label className="block text-sm font-medium text-gray-700">By Type</label>
                                                                <div className="grid grid-cols-2 gap-2 mt-1">
                                                                    <div className="text-sm">
                                                                        <span className="text-gray-600">Speech:</span> {selectedUser.stats.speechContributions}
                                                                    </div>
                                                                    <div className="text-sm">
                                                                        <span className="text-gray-600">NER:</span> {selectedUser.stats.nerContributions}
                                                                    </div>
                                                                    <div className="text-sm">
                                                                        <span className="text-gray-600">POS:</span> {selectedUser.stats.posContributions}
                                                                    </div>
                                                                    <div className="text-sm">
                                                                        <span className="text-gray-600">Sentiment:</span> {selectedUser.stats.sentimentContributions}
                                                                    </div>
                                                                    <div className="text-sm">
                                                                        <span className="text-gray-600">Emotion:</span> {selectedUser.stats.emotionContributions}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* Account Information */}
                                                <div className="mt-6">
                                                    <h4 className="text-md font-medium text-gray-900 mb-3">Account Information</h4>
                                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                                        <div>
                                                            <label className="block text-sm font-medium text-gray-700">Account Created</label>
                                                            <p className="text-sm text-gray-900">
                                                                {selectedUser.account.createdAt.toLocaleDateString()}
                                                            </p>
                                                        </div>
                                                        <div>
                                                            <label className="block text-sm font-medium text-gray-700">Last Login</label>
                                                            <p className="text-sm text-gray-900">
                                                                {selectedUser.account.lastLogin.toLocaleDateString()}
                                                            </p>
                                                        </div>
                                                        <div>
                                                            <label className="block text-sm font-medium text-gray-700">Verification Status</label>
                                                            <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${selectedUser.account.isVerified
                                                                    ? 'bg-green-100 text-green-800'
                                                                    : 'bg-yellow-100 text-yellow-800'
                                                                }`}>
                                                                {selectedUser.account.isVerified ? 'Verified' : 'Unverified'}
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                                        <button
                                            type="button"
                                            className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:ml-3 sm:w-auto sm:text-sm"
                                            onClick={() => setShowUserDetails(false)}
                                        >
                                            Close
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </AdminLayout>
    );
}
