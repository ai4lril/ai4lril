'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { adminAuth, AdminUser } from '@/lib/adminAuth';
import AdminNavbar from './AdminNavbar';

interface AdminLayoutProps {
  children: React.ReactNode;
}

export default function AdminLayout({ children }: AdminLayoutProps) {
  const [user, setUser] = useState<AdminUser | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    // Check authentication
    if (!adminAuth.isAuthenticated()) {
      router.push('/admin/login');
      return;
    }

    setUser(adminAuth.getCurrentUser());
    setLoading(false);

    // Set up periodic auth checks
    const interval = setInterval(() => {
      if (!adminAuth.isAuthenticated()) {
        router.push('/admin/login');
      }
    }, 30000); // Check every 30 seconds

    return () => clearInterval(interval);
  }, [router]);


  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
      </div>
    );
  }

  if (!user) {
    return null;
  }



  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Admin Navbar */}
      <AdminNavbar />

      {/* Main content */}
      <div className="flex-1 lg:ml-0">
        {/* Top bar */}
        <div className="sticky top-0 z-10 bg-white shadow-sm border-b border-gray-200">
          <div className="flex items-center justify-between h-16 px-4">

            <div className="flex items-center space-x-4">
              <div className="text-sm text-gray-600">
                Welcome back, {user.name}!
              </div>
              <div className={`px-2 py-1 text-xs rounded-full ${adminAuth.getSessionTimeRemaining() < 600000 // Less than 10 minutes
                ? 'bg-red-100 text-red-800'
                : 'bg-green-100 text-green-800'
                }`}>
                Session Active
              </div>
            </div>
          </div>
        </div>

        {/* Page content */}
        <main className="flex-1 p-6">
          {children}
        </main>
      </div>
    </div>
  );
}
