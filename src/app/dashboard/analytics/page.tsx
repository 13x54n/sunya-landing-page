'use client';

import { FaChartLine, FaChartBar, FaChartPie } from 'react-icons/fa';

export default function AnalyticsPage() {
    return (
        <div className="space-y-8 max-w-6xl mx-auto">
            {/* Header */}
            <div>
                <h1 className="text-3xl font-bold text-[#171717] font-manrope">Analytics</h1>
                <p className="text-gray-600 mt-2">Track your smart contract performance and insights</p>
            </div>

            {/* Charts Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Chart 1 */}
                <div className="bg-white rounded-2xl shadow-sm p-6 border border-gray-200">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="p-3 bg-blue-50 rounded-xl">
                            <FaChartLine className="text-2xl text-blue-600" />
                        </div>
                        <h2 className="text-xl font-bold text-[#171717] font-manrope">Audit Trends</h2>
                    </div>
                    <div className="h-64 flex items-center justify-center bg-gray-50 rounded-xl border border-gray-100 border-dashed">
                        <p className="text-gray-400 font-medium">Chart visualization coming soon</p>
                    </div>
                </div>

                {/* Chart 2 */}
                <div className="bg-white rounded-2xl shadow-sm p-6 border border-gray-200">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="p-3 bg-purple-50 rounded-xl">
                            <FaChartBar className="text-2xl text-purple-600" />
                        </div>
                        <h2 className="text-xl font-bold text-[#171717] font-manrope">Security Scores</h2>
                    </div>
                    <div className="h-64 flex items-center justify-center bg-gray-50 rounded-xl border border-gray-100 border-dashed">
                        <p className="text-gray-400 font-medium">Chart visualization coming soon</p>
                    </div>
                </div>

                {/* Chart 3 */}
                <div className="bg-white rounded-2xl shadow-sm p-6 border border-gray-200">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="p-3 bg-green-50 rounded-xl">
                            <FaChartPie className="text-2xl text-green-600" />
                        </div>
                        <h2 className="text-xl font-bold text-[#171717] font-manrope">Gas Optimization</h2>
                    </div>
                    <div className="h-64 flex items-center justify-center bg-gray-50 rounded-xl border border-gray-100 border-dashed">
                        <p className="text-gray-400 font-medium">Chart visualization coming soon</p>
                    </div>
                </div>

                {/* Chart 4 */}
                <div className="bg-white rounded-2xl shadow-sm p-6 border border-gray-200">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="p-3 bg-orange-50 rounded-xl">
                            <FaChartLine className="text-2xl text-orange-600" />
                        </div>
                        <h2 className="text-xl font-bold text-[#171717] font-manrope">Project Activity</h2>
                    </div>
                    <div className="h-64 flex items-center justify-center bg-gray-50 rounded-xl border border-gray-100 border-dashed">
                        <p className="text-gray-400 font-medium">Chart visualization coming soon</p>
                    </div>
                </div>
            </div>

            {/* Stats Summary */}
            <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
                <h2 className="text-2xl font-bold mb-6 text-[#171717] font-manrope">Monthly Summary</h2>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    <div className="p-4 bg-gray-50 rounded-xl border border-gray-100">
                        <p className="text-gray-500 text-sm mb-1">Total Audits</p>
                        <p className="text-3xl font-bold text-[#171717] font-manrope">24</p>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-xl border border-gray-100">
                        <p className="text-gray-500 text-sm mb-1">Issues Found</p>
                        <p className="text-3xl font-bold text-[#171717] font-manrope">156</p>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-xl border border-gray-100">
                        <p className="text-gray-500 text-sm mb-1">Gas Saved</p>
                        <p className="text-3xl font-bold text-[#171717] font-manrope">4.2K</p>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-xl border border-gray-100">
                        <p className="text-gray-500 text-sm mb-1">Avg Score</p>
                        <p className="text-3xl font-bold text-[#171717] font-manrope">92%</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
