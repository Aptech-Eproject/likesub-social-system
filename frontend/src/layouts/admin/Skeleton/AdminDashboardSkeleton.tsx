const AdminDashboardSkeleton = () => {
    const heights = [50, 60, 45, 70, 55, 65, 40, 60, 50, 70, 55, 60];

    return (
        <div className="min-h-screen bg-gray-50 p-6">
            <div className="max-w-7xl mx-auto space-y-6">
                {/* Top Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-6">
                        <div className="flex gap-6">
                            {/* Customer Card */}
                            <div className="bg-white flex-1 rounded-md p-6 shadow-sm">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-gray-200 rounded-md animate-pulse" />
                                    <div className="flex-1">
                                        <div className="h-4 w-24 bg-gray-200 rounded animate-pulse mb-3" />
                                        <div className="flex items-center justify-between">
                                            <div className="h-8 w-32 bg-gray-200 rounded animate-pulse" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Order Card */}
                            <div className="bg-white flex-1 rounded-md p-6 shadow-sm">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-gray-200 rounded-md animate-pulse" />
                                    <div className="flex-1">
                                        <div className="h-4 w-24 bg-gray-200 rounded animate-pulse mb-3" />
                                        <div className="flex items-center justify-between">
                                            <div className="h-8 w-32 bg-gray-200 rounded animate-pulse" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Monthly Sales Chart */}
                        <div className="lg:col-span-2 bg-white rounded-md p-6 shadow-sm">
                            <div className="flex items-center justify-between mb-6">
                                <div className="h-6 w-48 bg-gray-200 rounded animate-pulse" />
                                <div className="w-6 h-6 bg-gray-200 rounded animate-pulse" />
                            </div>

                            <div className="h-64 flex items-end justify-between gap-2 px-4">
                                {heights.map((h, i) => (
                                    <div key={i} className="flex-1 flex flex-col items-center gap-2">
                                        <div
                                            className="w-full bg-linear-to-t from-blue-400 to-blue-300 rounded-t-lg animate-pulse"
                                            style={{
                                                height: `${h}%`,
                                                animationDelay: `${i * 0.1}s`,
                                            }}
                                        />
                                        <div className="h-3 w-8 bg-gray-200 rounded animate-pulse" />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Target Card */}
                    <div className="bg-white rounded-md p-6 shadow-sm">
                        <div className="flex items-start justify-between mb-4">
                            <div>
                                <div className="h-5 w-32 bg-gray-200 rounded animate-pulse mb-2" />
                                <div className="h-3 w-48 bg-gray-200 rounded animate-pulse" />
                            </div>
                            <div className="w-6 h-6 bg-gray-200 rounded animate-pulse" />
                        </div>

                        {/* Progress Circle */}
                        <div className="flex flex-col items-center py-6">
                            <div className="relative w-40 h-40">
                                <svg className="w-full h-full transform -rotate-90">
                                    <circle
                                        cx="80"
                                        cy="80"
                                        r="70"
                                        stroke="#"
                                        strokeWidth="12"
                                        fill="none"
                                    />
                                    <circle
                                        cx="80"
                                        cy="80"
                                        r="70"
                                        stroke="#E7E8EC"
                                        strokeWidth="12"
                                        fill="none"
                                        strokeDasharray="429.6"
                                        strokeDashoffset="110"
                                        strokeLinecap="round"
                                        className="animate-pulse"
                                    />
                                </svg>
                            </div>

                            <div className="h-4 w-64 bg-gray-200 rounded animate-pulse mt-6" />
                        </div>

                        {/* Bottom Stats */}
                        <div className="grid grid-cols-3 gap-4 mt-6">
                            <div className="text-center">
                                <div className="h-3 w-16 bg-gray-200 rounded animate-pulse mx-auto mb-2" />
                                <div className="h-6 w-20 bg-gray-200 rounded animate-pulse mx-auto" />
                            </div>
                            <div className="text-center">
                                <div className="h-3 w-16 bg-gray-200 rounded animate-pulse mx-auto mb-2" />
                                <div className="h-6 w-20 bg-gray-200 rounded animate-pulse mx-auto" />
                            </div>
                            <div className="text-center">
                                <div className="h-3 w-16 bg-gray-200 rounded animate-pulse mx-auto mb-2" />
                                <div className="h-6 w-20 bg-gray-200 rounded animate-pulse mx-auto" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Charts Section */}
                <div className="grid grid-cols-1 gap-6">
                    <div className="bg-white rounded-md p-6 shadow-sm">
                        <div className="flex items-center justify-between mb-2">
                            <div className="h-6 w-32 bg-gray-200 rounded animate-pulse" />
                            <div className="flex gap-2">
                                <div className="h-8 w-16 bg-gray-200 rounded-md animate-pulse" />
                                <div className="h-8 w-16 bg-gray-200 rounded-md animate-pulse" />
                                <div className="h-8 w-16 bg-gray-200 rounded-md animate-pulse" />
                            </div>
                        </div>
                        <div className="h-4 w-48 bg-gray-200 rounded animate-pulse mb-6" />

                        <div className="h-64">
                            <div className="relative h-full">
                                {/* Area Chart Skeleton */}
                                <svg className="w-full h-full" viewBox="0 0 400 200">
                                    <defs>
                                        <linearGradient id="areaGradient" x1="0" x2="0" y1="0" y2="1">
                                            <stop offset="0%" stopColor="#E7E8EC" stopOpacity="0.4" />
                                            <stop offset="100%" stopColor="#E7E8EC" stopOpacity="0.1" />
                                        </linearGradient>
                                    </defs>
                                    <path
                                        d="M 0 150 Q 50 140, 100 145 T 200 130 T 300 120 T 400 110 L 400 200 L 0 200 Z"
                                        fill="url(#areaGradient)"
                                        className="animate-pulse"
                                    />
                                    <path
                                        d="M 0 150 Q 50 140, 100 145 T 200 130 T 300 120 T 400 110"
                                        stroke="#E7E8EC"
                                        strokeWidth="2"
                                        fill="none"
                                        className="animate-pulse"
                                    />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboardSkeleton;