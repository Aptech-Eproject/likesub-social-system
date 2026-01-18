"use client";

interface HomePromotionalBannerProps {
    onBuyClick?: () => void;
}

export default function HomePromotionalBanner({
    onBuyClick,
}: HomePromotionalBannerProps) {
    return (
        <div className="rounded bg-linear-to-br from-purple-500 to-blue-500 p-6 text-white shadow-sm overflow-hidden">
            <div className="flex items-center gap-6">
                <div className="flex-1 space-y-3">
                    <h3 className="text-lg font-bold">
                        Tăng trưởng vượt bậc với LikeSub VIP
                    </h3>
                    <p className="text-xs opacity-90 leading-relaxed">
                        Mua ngay dịch vụ SMM để quản lý mạng xã hội hiệu quả,
                        tăng tương tác và tiếp cận khách hàng nhanh chóng!
                    </p>
                    <button
                        onClick={onBuyClick}
                        className="rounded bg-white px-4 py-2 text-sm font-semibold text-purple-600 transition-all hover:bg-gray-100 cursor-pointer"
                    >
                        Mua ngay
                    </button>
                </div>

                <div className="relative w-36 h-36 shrink-0">
                    <img
                        src="https://social.taoshopngay.com/assets/images/media.png"
                        alt="SMM Banner"
                        className="h-full w-full object-contain drop-shadow-xl"
                        loading="lazy"
                    />
                </div>
            </div>
        </div>
    );
}
