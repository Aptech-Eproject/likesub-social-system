const AllPaymentCardsSkeleton = () => {
    return (
        <div className="min-h-screen bg-gray-50 p-8">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[1, 2, 3, 4, 5].map((index) => (
                        <div
                            key={index}
                            className="bg-white rounded-md overflow-hidden shadow-sm"
                        >
                            {/* Image placeholder */}
                            <div className="relative h-48 bg-gray-200 animate-pulse">
                                <div className="absolute top-4 right-4 w-16 h-8 bg-gray-300 rounded-full" />
                            </div>

                            {/* Content */}
                            <div className="p-6 space-y-4">
                                {/* Title */}
                                <div className="space-y-2">
                                    <div className="h-6 bg-gray-200 rounded animate-pulse w-3/4" />
                                    <div className="h-6 bg-gray-200 rounded animate-pulse w-1/2" />
                                </div>

                                {/* Subtitle */}
                                <div className="h-4 bg-gray-100 rounded animate-pulse w-2/3" />

                                {/* Description */}
                                <div className="space-y-2">
                                    <div className="h-4 bg-gray-100 rounded animate-pulse" />
                                    <div className="h-4 bg-gray-100 rounded animate-pulse" />
                                    <div className="h-4 bg-gray-100 rounded animate-pulse w-5/6" />
                                </div>

                                {/* Features title */}
                                <div className="h-5 bg-gray-200 rounded animate-pulse w-1/2 mt-6" />

                                {/* Feature list */}
                                <div className="space-y-3">
                                    {[1, 2, 3].map((item) => (
                                        <div key={item} className="flex items-center gap-3">
                                            <div className="w-5 h-5 bg-gray-200 rounded-full animate-pulse flex-shrink-0" />
                                            <div className="h-4 bg-gray-100 rounded animate-pulse flex-1" />
                                        </div>
                                    ))}
                                </div>

                                {/* Price and button */}
                                <div className="flex items-center justify-between pt-6 mt-6 border-t border-gray-100">
                                    <div className="space-y-1">
                                        <div className="h-7 bg-gray-200 rounded animate-pulse w-24" />
                                        <div className="h-3 bg-gray-100 rounded animate-pulse w-20" />
                                    </div>
                                    <div className="h-10 bg-gray-200 rounded-md animate-pulse w-28" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AllPaymentCardsSkeleton;