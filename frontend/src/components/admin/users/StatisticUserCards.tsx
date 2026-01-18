import {
    Banknote,
    Lock,
    Users,
    UserStar
} from "lucide-react"

function StatisticUserCards() {
    return (
        <div className="w-full flex items-center justify-between gap-4 rounded-lg">
            {/* Total Users */}
            <div className="w-full max-h-22 flex items-center gap-4 px-6 py-4 bg-white rounded-md shadow-sm hover:shadow-md transition-shadow duration-200">
                {/* icon */}
                <div className="bg-[#846adf] flex items-center justify-center min-w-11 h-11 rounded-md">
                    <Users className="w-6 h-6 text-white" />
                </div>

                {/* actual data */}
                <div className="flex flex-col items-start gap-1 w-full">
                    <span className="text-[28px] text-gray-800 font-bold">
                        54
                    </span>
                    <span className="text-[13px] text-gray-400 font-medium">
                        Tổng thành viên
                    </span>
                </div>
            </div>

            {/* Remaining Balance */}
            <div className="w-full max-h-22 flex items-center gap-4 px-6 py-4 bg-white rounded-md shadow-sm hover:shadow-md transition-shadow duration-200">
                {/* icon */}
                <div className="bg-cyan-500 flex items-center justify-center min-w-11 h-11 rounded-md">
                    <Banknote className="w-6 h-6 text-white" />
                </div>

                {/* actual data */}
                <div className="flex flex-col items-start gap-1 w-full">
                    <span className="text-[28px] text-gray-800 font-bold">
                        $8.002.410
                    </span>
                    <span className="text-[13px] text-gray-400 font-medium">
                        Số dư còn lại
                    </span>
                </div>
            </div>

            {/* Admins */}
            <div className="w-full max-h-22 flex items-center gap-4 px-6 py-4 bg-white rounded-md shadow-sm hover:shadow-md transition-shadow duration-200">
                {/* icon */}
                <div className="bg-yellow-500 flex items-center justify-center min-w-11 h-11 rounded-md">
                    <UserStar className="w-6 h-6 text-white" />
                </div>

                {/* actual data */}
                <div className="flex flex-col items-start gap-1 w-full">
                    <span className="text-[28px] text-gray-800 font-bold">
                        2
                    </span>
                    <span className="text-[13px] text-gray-400 font-medium">
                        Nguời quản trị
                    </span>
                </div>
            </div>

            {/* Banned Users */}
            <div className="w-full max-h-22 flex items-center gap-4 px-6 py-4 bg-white rounded-md shadow-sm hover:shadow-md transition-shadow duration-200">
                {/* icon */}
                <div className="bg-[#e6533c] flex items-center justify-center min-w-11 h-11 rounded-md">
                    <Lock className="w-6 h-6 text-white" />
                </div>

                {/* actual data */}
                <div className="flex flex-col items-start gap-1 w-full">
                    <span className="text-[28px] text-gray-800 font-bold">
                        0
                    </span>
                    <span className="text-[13px] text-gray-400 font-medium">
                        Thành viên bị chặn
                    </span>
                </div>
            </div>
        </div>
    )
}

export default StatisticUserCards