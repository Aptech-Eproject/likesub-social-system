"use client";

import UserSubHeader from "@/layouts/client/client-panel/UserSubHeader";
import HomeStatisticsCards from "@/components/client/client-panel/HomeStatisticsCards";
import HomePromotionalBanner from "@/components/client/client-panel/HomePromotionalBanner";
import HomeRecentOrders from "@/components/client/client-panel/HomeRecentOrders";
import HomeNewsFeed from "@/components/client/client-panel/HomeNewsFeed";

interface RecentOrder {
    id: string;
    serviceName: string;
    quantity: number;
    price: number;
    date: string;
    icon: "facebook" | "instagram";
}

interface OrderStats {
    pending: number;
    processing: number;
    completed: number;
    cancelled: number;
    refund: number;
    error: number;
    other: number;
}

const MOCK_RECENT_ORDERS: RecentOrder[] = [
    {
        id: "1",
        serviceName:
            "Facebook Page/Profile Followers | Speed 20K+/Day | 30 Days Refill",
        quantity: 100,
        price: 2385,
        date: "8 tháng trước",
        icon: "facebook",
    },
    {
        id: "2",
        serviceName: "Like Post Facebook | Max 100K | Emotion 👍 | Việt Nam",
        quantity: 50,
        price: 2459,
        date: "8 tháng trước",
        icon: "facebook",
    },
    {
        id: "3",
        serviceName:
            "Facebook Page/Profile Followers | Speed 20K+/Day | 30 Days Refill",
        quantity: 100,
        price: 2385,
        date: "8 tháng trước",
        icon: "facebook",
    },
    {
        id: "4",
        serviceName:
            "Facebook Page/Profile Followers | Speed 20K+/Day | 30 Days Refill",
        quantity: 100,
        price: 2385,
        date: "9 tháng trước",
        icon: "facebook",
    },
    {
        id: "5",
        serviceName:
            "Facebook Page/Profile Followers | Speed 20K+/Day | 30 Days Refill",
        quantity: 100,
        price: 2385,
        date: "9 tháng trước",
        icon: "facebook",
    },
];

const MOCK_ORDER_STATS: OrderStats = {
    pending: 0,
    processing: 1,
    completed: 5,
    cancelled: 1,
    refund: 0,
    error: 0,
    other: 0,
};

export default function HomePage() {
    const titlePage = "trang chủ";
    const totalOrders = Object.values(MOCK_ORDER_STATS).reduce(
        (sum, count) => sum + count,
        0
    );

    const handlePromotionalBannerClick = () => {
        console.log("Buy now clicked");
    };

    return (
        <div className="min-h-screen bg-gray-50">
            <UserSubHeader titlePage={titlePage} />

            <div className="max-w-full mx-auto px-6 py-6">
                <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
                    <div className="lg:col-span-2 space-y-4">
                        <HomeStatisticsCards totalOrders={totalOrders} />
                        <HomeNewsFeed />
                    </div>

                    <div className="space-y-6 lg:col-span-1">
                        <HomePromotionalBanner
                            onBuyClick={handlePromotionalBannerClick}
                        />
                        <HomeRecentOrders orders={MOCK_RECENT_ORDERS} />
                    </div>
                </div>
            </div>
        </div>
    );
}
