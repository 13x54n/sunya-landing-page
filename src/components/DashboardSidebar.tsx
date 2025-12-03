'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { FaHome, FaUser, FaCog, FaChartBar, FaBars, FaTimes, FaFingerprint, FaSignOutAlt } from 'react-icons/fa';
import { siteDetails } from '@/data/siteDetails';
import { useAuth } from '@/hooks/useAuth';

const navigation = [
    { name: 'Overview', href: '/dashboard', icon: FaHome },
    { name: 'Profile', href: '/dashboard/profile', icon: FaUser },
    { name: 'Analytics', href: '/dashboard/analytics', icon: FaChartBar },
    { name: 'Settings', href: '/dashboard/settings', icon: FaCog },
];

export default function DashboardSidebar() {
    const pathname = usePathname();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { logout } = useAuth();

    const handleLogout = async () => {
        try {
            await logout();
        } catch (error) {
            console.error('Failed to logout:', error);
        }
    };

    return (
        <>
            {/* Mobile Menu Button */}
            <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden fixed top-20 left-4 z-50 p-3 bg-white text-[#171717] rounded-lg shadow-lg border border-gray-200"
            >
                {isMobileMenuOpen ? <FaTimes className="text-xl" /> : <FaBars className="text-xl" />}
            </button>

            {/* Mobile Overlay */}
            {isMobileMenuOpen && (
                <div
                    className="md:hidden fixed inset-0 bg-black/50 z-40"
                    onClick={() => setIsMobileMenuOpen(false)}
                />
            )}

            {/* Sidebar */}
            <aside
                className={`
          fixed md:static inset-y-0 left-0 z-40
          w-64 bg-[#F3F3F5] border-r border-gray-200 min-h-screen p-6
          transform transition-transform duration-300 ease-in-out
          ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
          flex flex-col
        `}
            >
                <div className="mb-8">
                    <Link href="/" className="flex items-center gap-2 mb-6">
                        <FaFingerprint className="text-[#171717] w-6 h-6" />
                        <span className="manrope text-lg font-bold text-[#171717]">
                            {siteDetails.siteName}
                        </span>
                    </Link>
                    <h2 className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Dashboard</h2>
                </div>

                <nav className="space-y-1 flex-1">
                    {navigation.map((item) => {
                        const isActive = pathname === item.href;
                        const Icon = item.icon;

                        return (
                            <Link
                                key={item.name}
                                href={item.href}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 font-medium ${isActive
                                    ? 'bg-[#FED835] text-black shadow-sm'
                                    : 'text-gray-600 hover:bg-white hover:text-black hover:shadow-sm'
                                    }`}
                            >
                                <Icon className={`text-xl ${isActive ? 'text-black' : 'text-gray-500'}`} />
                                <span>{item.name}</span>
                            </Link>
                        );
                    })}
                    <div className="mt-auto space-y-4">
                        <button
                            onClick={handleLogout}
                            className="w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 font-medium text-red-600 hover:bg-red-50 hover:shadow-sm"
                        >
                            <FaSignOutAlt className="text-xl" />
                            <span>Logout</span>
                        </button>

                    </div>
                    <div className="p-4 bg-white rounded-xl border border-gray-200 shadow-sm">
                        <h3 className="text-[#171717] font-semibold mb-1 text-sm">Need Help?</h3>
                        <p className="text-gray-500 text-xs mb-3">
                            Check out our documentation for guides.
                        </p>
                        <button className="w-full px-4 py-2 bg-[#171717] hover:bg-black text-white rounded-lg text-xs font-medium transition-colors">
                            View Docs
                        </button>
                    </div>
                </nav>

            </aside>
        </>
    );
}
