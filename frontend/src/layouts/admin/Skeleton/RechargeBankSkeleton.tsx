import TablePageSkeleton from "./TablePageSkeleton";

const RechargeBankSkeleton = () => {
    return (
        <div className="min-h-screen bg-gray-50">
            <div className="max-w-7xl mx-auto px-6 pt-6">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Left Side - 4 Small Cards */}
                    <div className="space-y-6">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {/* Card 1 */}
                            <div className="bg-white rounded-md p-6 shadow-sm">
                                <div className="flex items-start justify-between">
                                    <div className="space-y-2">
                                        <div className="h-8 bg-gray-200 rounded animate-pulse w-16" />
                                        <div className="h-4 bg-gray-100 rounded animate-pulse w-24" />
                                    </div>
                                    <div className="w-12 h-12 bg-gray-200 rounded-full animate-pulse flex-shrink-0" />
                                </div>
                            </div>

                            {/* Card 2 */}
                            <div className="bg-white rounded-md p-6 shadow-sm">
                                <div className="flex items-start justify-between">
                                    <div className="space-y-2">
                                        <div className="h-8 bg-gray-200 rounded animate-pulse w-16" />
                                        <div className="h-4 bg-gray-100 rounded animate-pulse w-20" />
                                    </div>
                                    <div className="w-12 h-12 bg-gray-200 rounded-full animate-pulse flex-shrink-0" />
                                </div>
                            </div>

                            {/* Card 3 */}
                            <div className="bg-white rounded-md p-6 shadow-sm">
                                <div className="flex items-start justify-between">
                                    <div className="space-y-2">
                                        <div className="h-8 bg-gray-200 rounded animate-pulse w-16" />
                                        <div className="h-4 bg-gray-100 rounded animate-pulse w-20" />
                                    </div>
                                    <div className="w-12 h-12 bg-gray-200 rounded-full animate-pulse flex-shrink-0" />
                                </div>
                            </div>

                            {/* Card 4 */}
                            <div className="bg-white rounded-md p-6 shadow-sm">
                                <div className="flex items-start justify-between">
                                    <div className="space-y-2">
                                        <div className="h-8 bg-gray-200 rounded animate-pulse w-16" />
                                        <div className="h-4 bg-gray-100 rounded animate-pulse w-20" />
                                    </div>
                                    <div className="w-12 h-12 bg-gray-200 rounded-full animate-pulse flex-shrink-0" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Side - Chart */}
                    <div className="lg:col-span-2 bg-white rounded-md p-6 shadow-sm">
                        {/* Chart Header */}
                        <div className="flex items-start justify-between mb-6">
                            <div className="h-6 bg-gray-200 rounded animate-pulse w-64" />
                            <div className="flex items-center gap-2">
                                <div className="w-3 h-3 bg-gray-200 rounded-full animate-pulse" />
                                <div className="h-4 bg-gray-100 rounded animate-pulse w-32" />
                            </div>
                        </div>

                        {/* Chart Area */}
                        <div className="relative h-80">
                            {/* Y-axis labels */}
                            <div className="absolute left-0 top-0 bottom-8 w-8 flex flex-col justify-between text-right pr-2">
                                {[1, 0.9, 0.8, 0.7, 0.6, 0.5, 0.4, 0.3, 0.2, 0.1, 0].map((_, i) => (
                                    <div key={i} className="h-3 bg-gray-200 rounded animate-pulse w-6" />
                                ))}
                            </div>

                            {/* Chart Grid and Line */}
                            <div className="absolute left-10 right-0 top-0 bottom-8">
                                {/* Horizontal grid lines */}
                                <div className="absolute inset-0 flex flex-col justify-between">
                                    {[...Array(11)].map((_, i) => (
                                        <div key={i} className="h-px bg-gray-100" />
                                    ))}
                                </div>

                                {/* Chart Line */}
                                <svg className="w-full h-full" viewBox="0 0 1000 300" preserveAspectRatio="none">
                                    <path
                                        d="M 0 280 L 200 270 L 400 260 L 500 50 L 600 240 L 800 230 L 1000 220"
                                        stroke="#d1d5db"
                                        strokeWidth="2"
                                        fill="none"
                                        className="animate-pulse"
                                    />
                                    <circle cx="500" cy="50" r="4" fill="#9ca3af" className="animate-pulse" />
                                </svg>

                                {/* Tooltip placeholder */}
                                <div className="absolute top-8 right-1/3 bg-white border border-gray-200 rounded-lg p-3 shadow-sm">
                                    <div className="h-3 bg-gray-200 rounded animate-pulse w-20 mb-2" />
                                    <div className="h-4 bg-gray-100 rounded animate-pulse w-16" />
                                </div>
                            </div>

                            {/* X-axis labels */}
                            <div className="absolute left-10 right-0 bottom-0 h-8 flex justify-between items-start pt-2">
                                {[...Array(15)].map((_, i) => (
                                    <div key={i} className="h-3 bg-gray-200 rounded animate-pulse w-12 -rotate-45 origin-top-left" />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <TablePageSkeleton />
        </div>
    );
};

export default RechargeBankSkeleton;