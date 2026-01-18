import { Check, ShoppingCart } from 'lucide-react';
import Image from 'next/image';

async function getAddonData() {
    await new Promise((resolve) => setTimeout(resolve, 1200));
    return { title: "Addons" };
}

async function AllAddonCards() {
    const data = await getAddonData();

    const addons = [
        {
            id: 1,
            image: "/images/payment-addon-1.png",
            badge: "SALE",
            title: "Tích Hợp Thanh Toán Qua XiPay (China)",
            subtitle: "Hỗ trợ thanh toán qua AliPay & WeChatPay",
            description: "Addon này cho phép bạn tích hợp cổng thanh toán XiPay trực tiếp vào website của mình. Với tích hợp này, khách hàng của bạn có thể thanh toán nhanh chóng qua AliPay hoặc WeChatPay một cách an toàn và tiện lợi.",
            features: [
                "Thanh toán nhanh chóng qua XiPay.",
                "Hỗ trợ cả AliPay và WeChatPay.",
                "Dễ dàng tích hợp vào website hiện tại."
            ],
            price: "1.000.000đ",
            originalPrice: "1.500.000đ"
        },
        {
            id: 2,
            image: "/images/payment-addon-2.png",
            badge: null,
            title: "Tích Hợp Thanh Toán Qua PayPal",
            subtitle: "Hỗ trợ thanh toán quốc tế",
            description: "Addon PayPal giúp bạn chấp nhận thanh toán từ khách hàng trên toàn thế giới một cách dễ dàng và bảo mật.",
            features: [
                "Thanh toán quốc tế.",
                "Bảo mật cao.",
                "Dễ dàng cài đặt."
            ],
            price: "1.000.000đ",
            originalPrice: "1.500.000đ"
        },
        {
            id: 3,
            image: "/images/payment-addon-3.png",
            badge: "NEW",
            title: "Tích Hợp Thanh Toán Qua Stripe",
            subtitle: "Giải pháp thanh toán hiện đại",
            description: "Stripe cung cấp giải pháp thanh toán toàn diện với hỗ trợ nhiều loại thẻ và phương thức thanh toán khác nhau.",
            features: [
                "Hỗ trợ đa dạng phương thức.",
                "API mạnh mẽ.",
                "Báo cáo chi tiết."
            ],
            price: "1.000.000đ",
            originalPrice: "1.500.000đ"
        },
        {
            id: 4,
            image: "/images/payment-addon-4.png",
            badge: null,
            title: "Tích Hợp Thanh Toán Qua MoMo",
            subtitle: "Thanh toán qua ví điện tử MoMo",
            description: "Tích hợp MoMo giúp khách hàng Việt Nam thanh toán nhanh chóng qua ví điện tử phổ biến nhất.",
            features: [
                "Phổ biến tại Việt Nam.",
                "Thanh toán nhanh.",
                "Khuyến mãi hấp dẫn."
            ],
            price: "1.000.000đ",
            originalPrice: "1.500.000đ"
        },
        {
            id: 5,
            image: "/images/payment-addon-5.png",
            badge: null,
            title: "Tích Hợp Thanh Toán Qua VNPay",
            subtitle: "Cổng thanh toán nội địa",
            description: "VNPay là cổng thanh toán uy tín tại Việt Nam, hỗ trợ thanh toán qua thẻ ATM và tài khoản ngân hàng.",
            features: [
                "Hỗ trợ thẻ ATM nội địa.",
                "An toàn và bảo mật.",
                "Phí giao dịch thấp."
            ],
            price: "1.000.000đ",
            originalPrice: "1.500.000đ"
        }
    ];

    return (
        <div className="min-h-screen">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {addons.map((addon) => (
                    <div
                        key={addon.id}
                        className="bg-white rounded-sm shadow-md hover:shadow-xl transition-shadow group transform duration-300 flex flex-col h-full"
                    >
                        {/* Image Section */}
                        <div className="relative overflow-hidden">
                            <Image
                                src={addon.image}
                                alt={addon.title}
                                className="w-full h-50 object-cover group-hover:scale-115 transition-transform duration-500"
                                height={50}
                                width={300}
                            />

                            {addon.badge && (
                                <div
                                    className={`absolute top-4 right-4 px-3 py-1 rounded-sm font-bold text-[10px]
                                        ${addon.badge === 'SALE'
                                            ? 'bg-yellow-400 text-yellow-900'
                                            : 'bg-green-400 text-green-900'}
                                    `}
                                >
                                    {addon.badge}
                                </div>
                            )}
                        </div>

                        {/* Info Section */}
                        <div className="p-5 flex flex-col flex-1">
                            {/* Content */}
                            <div className="flex-1">
                                <div className="mb-4 flex flex-col gap-2">
                                    <h3 className="font-bold text-[20px] text-slate-800">
                                        {addon.title}
                                    </h3>
                                    <p className="text-[12px] text-gray-400 font-medium">
                                        {addon.subtitle}
                                    </p>
                                </div>

                                <p className="mb-4 text-[12px] text-gray-7s00 font-medium leading-5">
                                    {addon.description}
                                </p>

                                <div className="mt-5">
                                    <h4 className="font-bold text-lg text-slate-800 mb-2">
                                        Tính năng nổi bật:
                                    </h4>
                                    <ul className="space-y-2">
                                        {addon.features.map((feature, index) => (
                                            <li key={index} className="flex items-start gap-2">
                                                <Check className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                                                <span className="text-[12px] text-gray-700 font-medium">
                                                    {feature}
                                                </span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            {/* Price & Button */}
                            <div className="mt-auto pt-20 flex items-center justify-between gap-3 cursor-pointer">
                                <div>
                                    <span className="text-lg font-bold text-[#846adf]">
                                        {addon.price}
                                    </span>
                                    <span className="block text-sm line-through text-gray-400">
                                        {addon.originalPrice}
                                    </span>
                                </div>

                                <button
                                    className="flex items-center gap-2 bg-[#846adf] hover:bg-[#7257c7] text-white px-4 py-2 rounded-md transition cursor-pointer"
                                >
                                    <ShoppingCart className="w-4 h-4" />
                                    <span className="text-sm font-medium">Mua ngay</span>
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default AllAddonCards;