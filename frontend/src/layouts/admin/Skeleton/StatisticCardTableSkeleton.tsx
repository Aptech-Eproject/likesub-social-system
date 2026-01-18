function StatisticCardTableSkeleton() {
    return (
        <div className="min-h-screen bg-gray-50 p-8">
            {/* Top Skeleton */}
            <div className="max-w-7xl mx-auto space-y-6 mb-6">
                {/* Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {/* Card 1 */}
                    <div className="bg-white rounded-md p-6 shadow-sm">
                        <div className="flex items-start gap-4">
                            <div className="w-14 h-14 bg-gray-100 rounded-md animate-pulse shrink-0" />
                            <div className="flex-1 space-y-2">
                                <div className="h-8 bg-gray-200 rounded animate-pulse w-20" />
                                <div className="h-4 bg-gray-100 rounded animate-pulse w-28" />
                            </div>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-white rounded-md p-6 shadow-sm">
                        <div className="flex items-start gap-4">
                            <div className="w-14 h-14 bg-gray-100 rounded-md animate-pulse shrink-0" />
                            <div className="flex-1 space-y-2">
                                <div className="h-8 bg-gray-200 rounded animate-pulse w-32" />
                                <div className="h-4 bg-gray-100 rounded animate-pulse w-24" />
                            </div>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-white rounded-md p-6 shadow-sm">
                        <div className="flex items-start gap-4">
                            <div className="w-14 h-14 bg-gray-100 rounded-md animate-pulse shrink-0" />
                            <div className="flex-1 space-y-2">
                                <div className="h-8 bg-gray-200 rounded animate-pulse w-12" />
                                <div className="h-4 bg-gray-100 rounded animate-pulse w-28" />
                            </div>
                        </div>
                    </div>

                    {/* Card 4 */}
                    <div className="bg-white rounded-md p-6 shadow-sm">
                        <div className="flex items-start gap-4">
                            <div className="w-14 h-14 bg-gray-100 rounded-md animate-pulse shrink-0" />
                            <div className="flex-1 space-y-2">
                                <div className="h-8 bg-gray-200 rounded animate-pulse w-12" />
                                <div className="h-4 bg-gray-100 rounded animate-pulse w-36" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Skeleton */}
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="bg-white rounded-t-lg p-6 shadow-sm">
                    <div className="flex items-center justify-between mb-6">
                        <div className="h-8 bg-gray-200 rounded animate-pulse w-48" />
                        <div className="h-10 bg-gray-200 rounded-lg animate-pulse w-40" />
                    </div>

                    {/* Filters */}
                    <div className="flex flex-wrap items-center gap-4">
                        <div className="h-11 bg-gray-100 rounded-lg animate-pulse w-64" />
                        <div className="h-11 bg-gray-100 rounded-lg animate-pulse w-48" />
                        <div className="h-11 bg-gray-200 rounded-lg animate-pulse w-28" />
                        <div className="h-11 bg-gray-200 rounded-lg animate-pulse w-32" />
                    </div>

                    {/* Show entries and Sort */}
                    <div className="flex items-center justify-between mt-6">
                        <div className="flex items-center gap-3">
                            <div className="h-4 bg-gray-200 rounded animate-pulse w-32" />
                            <div className="h-10 bg-gray-100 rounded animate-pulse w-20" />
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="h-4 bg-gray-200 rounded animate-pulse w-36" />
                            <div className="h-10 bg-gray-100 rounded animate-pulse w-32" />
                        </div>
                    </div>
                </div>

                {/* Table */}
                <div className="bg-white shadow-sm overflow-hidden">
                    {/* Table Header */}
                    <div className="border-b border-gray-200 bg-gray-50">
                        <div className="grid grid-cols-12 gap-4 px-6 py-4">
                            <div className="col-span-2">
                                <div className="h-4 bg-gray-200 rounded animate-pulse w-20" />
                            </div>
                            <div className="col-span-1">
                                <div className="h-4 bg-gray-200 rounded animate-pulse w-16" />
                            </div>
                            <div className="col-span-1">
                                <div className="h-4 bg-gray-200 rounded animate-pulse w-16" />
                            </div>
                            <div className="col-span-3">
                                <div className="h-4 bg-gray-200 rounded animate-pulse w-12" />
                            </div>
                            <div className="col-span-3">
                                <div className="h-4 bg-gray-200 rounded animate-pulse w-20" />
                            </div>
                            <div className="col-span-2">
                                <div className="h-4 bg-gray-200 rounded animate-pulse w-16" />
                            </div>
                        </div>
                    </div>

                    {/* Table Rows */}
                    <div className="divide-y divide-gray-100">
                        {[1, 2, 3, 4, 5, 6, 7].map((index) => (
                            <div
                                key={index}
                                className="grid grid-cols-12 gap-4 px-6 py-5 hover:bg-gray-50 transition-colors"
                                style={{ animationDelay: `${index * 0.05}s` }}
                            >
                                {/* IP Address */}
                                <div className="col-span-2 flex items-center gap-2">
                                    <div className="w-4 h-4 bg-gray-200 rounded animate-pulse" />
                                    <div className="h-4 bg-gray-200 rounded animate-pulse w-32" />
                                </div>

                                {/* Attempts */}
                                <div className="col-span-1 flex items-center">
                                    <div className="h-7 bg-gray-100 rounded animate-pulse w-12" />
                                </div>

                                {/* Banned Status */}
                                <div className="col-span-1 flex items-center">
                                    <div className="h-7 bg-gray-100 rounded animate-pulse w-20" />
                                </div>

                                {/* Reason */}
                                <div className="col-span-3 flex items-center">
                                    <div className="h-4 bg-gray-200 rounded animate-pulse w-full max-w-xs" />
                                </div>

                                {/* Time */}
                                <div className="col-span-3 flex items-center">
                                    <div className="h-4 bg-gray-200 rounded animate-pulse w-40" />
                                </div>

                                {/* Action */}
                                <div className="col-span-2 flex items-center justify-end">
                                    <div className="h-9 w-9 bg-gray-200 rounded animate-pulse" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Footer */}
                <div className="bg-white rounded-b-lg p-4 shadow-sm border-t border-gray-100">
                    <div className="h-4 bg-gray-200 rounded animate-pulse w-40" />
                </div>
            </div>
        </div>
    )
}

export default StatisticCardTableSkeleton