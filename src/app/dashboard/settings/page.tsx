'use client';

import { useState } from 'react';
import { FaBell, FaShieldAlt, FaPalette, FaDatabase } from 'react-icons/fa';

export default function SettingsPage() {
    const [emailNotifications, setEmailNotifications] = useState(true);
    const [securityAlerts, setSecurityAlerts] = useState(true);
    const [weeklyReports, setWeeklyReports] = useState(false);

    return (
        <div className="space-y-8 max-w-4xl mx-auto">
            {/* Header */}
            <div>
                <h1 className="text-3xl font-bold text-[#171717] font-manrope">Settings</h1>
                <p className="text-gray-600 mt-2">Manage your account preferences and settings</p>
            </div>

            {/* Notifications Section */}
            <div className="bg-white rounded-2xl shadow-sm p-8 border border-gray-200">
                <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 bg-blue-50 rounded-xl">
                        <FaBell className="text-2xl text-blue-600" />
                    </div>
                    <div>
                        <h2 className="text-xl font-bold text-[#171717] font-manrope">Notifications</h2>
                        <p className="text-gray-600 text-sm">Manage how you receive updates</p>
                    </div>
                </div>

                <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl border border-gray-100">
                        <div>
                            <p className="font-medium text-[#171717]">Email Notifications</p>
                            <p className="text-sm text-gray-600">Receive email updates about your audits</p>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                            <input
                                type="checkbox"
                                checked={emailNotifications}
                                onChange={(e) => setEmailNotifications(e.target.checked)}
                                className="sr-only peer"
                            />
                            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-yellow-100 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#FED835]"></div>
                        </label>
                    </div>

                    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl border border-gray-100">
                        <div>
                            <p className="font-medium text-[#171717]">Security Alerts</p>
                            <p className="text-sm text-gray-600">Get notified about security issues</p>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                            <input
                                type="checkbox"
                                checked={securityAlerts}
                                onChange={(e) => setSecurityAlerts(e.target.checked)}
                                className="sr-only peer"
                            />
                            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-yellow-100 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#FED835]"></div>
                        </label>
                    </div>

                    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl border border-gray-100">
                        <div>
                            <p className="font-medium text-[#171717]">Weekly Reports</p>
                            <p className="text-sm text-gray-600">Receive weekly summary of your activity</p>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                            <input
                                type="checkbox"
                                checked={weeklyReports}
                                onChange={(e) => setWeeklyReports(e.target.checked)}
                                className="sr-only peer"
                            />
                            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-yellow-100 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#FED835]"></div>
                        </label>
                    </div>
                </div>
            </div>

            {/* Security Section */}
            <div className="bg-white rounded-2xl shadow-sm p-8 border border-gray-200">
                <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 bg-green-50 rounded-xl">
                        <FaShieldAlt className="text-2xl text-green-600" />
                    </div>
                    <div>
                        <h2 className="text-xl font-bold text-[#171717] font-manrope">Security</h2>
                        <p className="text-gray-600 text-sm">Manage your account security</p>
                    </div>
                </div>

                <div className="space-y-4">
                    <button className="w-full text-left p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors border border-gray-100">
                        <p className="font-medium text-[#171717]">Change Password</p>
                        <p className="text-sm text-gray-600">Update your account password</p>
                    </button>

                    <button className="w-full text-left p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors border border-gray-100">
                        <p className="font-medium text-[#171717]">Two-Factor Authentication</p>
                        <p className="text-sm text-gray-600">Add an extra layer of security</p>
                    </button>

                    <button className="w-full text-left p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors border border-gray-100">
                        <p className="font-medium text-[#171717]">Active Sessions</p>
                        <p className="text-sm text-gray-600">Manage your active login sessions</p>
                    </button>
                </div>
            </div>

            {/* Preferences Section */}
            <div className="bg-white rounded-2xl shadow-sm p-8 border border-gray-200">
                <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 bg-purple-50 rounded-xl">
                        <FaPalette className="text-2xl text-purple-600" />
                    </div>
                    <div>
                        <h2 className="text-xl font-bold text-[#171717] font-manrope">Preferences</h2>
                        <p className="text-gray-600 text-sm">Customize your experience</p>
                    </div>
                </div>

                <div className="space-y-4">
                    <div className="p-4 bg-gray-50 rounded-xl border border-gray-100">
                        <label className="block font-medium text-[#171717] mb-2">Language</label>
                        <select className="w-full px-4 py-2 bg-white border border-gray-200 rounded-lg text-[#171717] focus:outline-none focus:ring-2 focus:ring-[#FED835]">
                            <option>English</option>
                            <option>Spanish</option>
                            <option>French</option>
                            <option>German</option>
                        </select>
                    </div>

                    <div className="p-4 bg-gray-50 rounded-xl border border-gray-100">
                        <label className="block font-medium text-[#171717] mb-2">Timezone</label>
                        <select className="w-full px-4 py-2 bg-white border border-gray-200 rounded-lg text-[#171717] focus:outline-none focus:ring-2 focus:ring-[#FED835]">
                            <option>UTC-5 (Eastern Time)</option>
                            <option>UTC-8 (Pacific Time)</option>
                            <option>UTC+0 (GMT)</option>
                            <option>UTC+1 (CET)</option>
                        </select>
                    </div>
                </div>
            </div>

            {/* Data & Privacy */}
            <div className="bg-white rounded-2xl shadow-sm p-8 border border-gray-200">
                <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 bg-red-50 rounded-xl">
                        <FaDatabase className="text-2xl text-red-600" />
                    </div>
                    <div>
                        <h2 className="text-xl font-bold text-[#171717] font-manrope">Data & Privacy</h2>
                        <p className="text-gray-600 text-sm">Manage your data and privacy settings</p>
                    </div>
                </div>

                <div className="space-y-4">
                    <button className="w-full text-left p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors border border-gray-100">
                        <p className="font-medium text-[#171717]">Download Your Data</p>
                        <p className="text-sm text-gray-600">Get a copy of your information</p>
                    </button>

                    <button className="w-full text-left p-4 bg-red-50 rounded-xl hover:bg-red-100 transition-colors border border-red-100">
                        <p className="font-medium text-red-600">Delete Account</p>
                        <p className="text-sm text-red-500">Permanently delete your account and data</p>
                    </button>
                </div>
            </div>

            {/* Save Button */}
            <div className="flex justify-end">
                <button className="px-8 py-3 bg-[#FED835] text-[#171717] rounded-xl font-bold hover:bg-[#e5c230] transition-all shadow-sm hover:shadow-md">
                    Save Changes
                </button>
            </div>
        </div>
    );
}
