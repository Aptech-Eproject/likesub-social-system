import {
    Banknote,
    CreditCard,
    Lock,
    Users,
    UserStar
} from "lucide-react"

function StatisticUserDetailCards() {
    return (
        <div className="w-full flex items-center justify-between gap-6 rounded-lg">
            {/* Total Amount */}
            <div className="w-full max-h-22 flex items-center gap-4 px-6 py-4 bg-white rounded-sm shadow-sm hover:shadow-md transition-shadow duration-200">
                {/* icon */}
                <div className="bg-purple-100 flex items-center justify-center min-w-11 h-11 rounded-md">
                    <Users className="w-6 h-6 text-purple-700" />
                </div>

                {/* actual data */}
                <div className="flex flex-col items-start gap-0 w-full">
                    <span className="text-[13px] text-gray-500 font-medium">
                        Ví chính
                    </span>
                    <span className="text-lg text-purple-700 font-bold">
                        0đ
                    </span>
                </div>
            </div>

            {/* Total Deposit */}
            <div className="w-full max-h-22 flex items-center gap-4 px-6 py-4 bg-white rounded-sm shadow-sm hover:shadow-md transition-shadow duration-200">
                {/* icon */}
                <div className="bg-green-100 flex items-center justify-center min-w-11 h-11 rounded-md">
                    <Banknote className="w-6 h-6 text-green-700" />
                </div>

                {/* actual data */}
                <div className="flex flex-col items-start gap-0 w-full">
                    <span className="text-[13px] text-gray-500 font-medium">
                        Tổng tiền nạp
                    </span>
                    <span className="text-lg text-green-700 font-bold">
                        0đ
                    </span>
                </div>
            </div>

            {/* Used */}
            <div className="w-full max-h-22 flex items-center gap-4 px-6 py-4 bg-white rounded-sm shadow-sm hover:shadow-md transition-shadow duration-200">
                {/* icon */}
                <div className="bg-yellow-50 flex items-center justify-center min-w-11 h-11 rounded-md">
                    <UserStar className="w-6 h-6 text-yellow-700" />
                </div>

                {/* actual data */}
                <div className="flex flex-col items-start gap-0 w-full">
                    <span className="text-[13px] text-gray-500 font-medium">
                        Đã sử dụng
                    </span>
                    <span className="text-lg text-yellow-700 font-bold">
                        0đ
                    </span>
                </div>
            </div>

            {/* Debt Amount */}
            <div className="w-full max-h-22 flex items-center gap-4 px-6 py-4 bg-white rounded-sm shadow-sm hover:shadow-md transition-shadow duration-200">
                {/* icon */}
                <div className="bg-orange-50 flex items-center justify-center min-w-11 h-11 rounded-md">
                    <CreditCard className="w-6 h-6 text-orange-600" />
                </div>

                {/* actual data */}
                <div className="flex flex-col items-start w-full">
                    <span className="text-[13px] text-gray-500 font-medium">
                        Số tiền nợ
                    </span>
                    <span className="text-lg text-orange-600 font-bold">
                        0đ
                    </span>
                </div>
            </div>
        </div>
    )
}

export default StatisticUserDetailCards;