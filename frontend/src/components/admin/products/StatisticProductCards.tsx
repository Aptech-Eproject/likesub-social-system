function StatisticProductCards() {
    return (
        <div className="w-full flex items-center justify-between bg-white border border-gray-200 rounded-lg">
            {/* Total Amount */}
            <div className="w-full flex flex-col gap-1 px-6 py-4 border-r border-gray-200">
                <span className="text-[13px] text-gray-500">
                    Tổng tiền đã thu
                </span>
                <span className="text-[28px] font-medium text-gray-800">
                    $3,450.50
                </span>
            </div>

            {/* Total Invoices */}
            <div className="w-full flex flex-col gap-1 px-6 py-4 border-r border-gray-200">
                <span className="text-[13px] text-gray-500">
                    Tổng số hóa đơn
                </span>
                <span className="text-[28px] font-medium text-gray-800">
                    58
                </span>
            </div>

            {/* Average Time Paid */}
            
            <div className="w-full flex flex-col gap-1 px-6 py-4 border-r border-gray-200">
                <span className="text-[13px] text-gray-500">
                    Thời gian thanh toán (%)
                </span>
                <span className="text-[28px] font-medium text-gray-800">
                    4.6 days
                </span>
            </div>

            {/* Unpaid Products */}
            <div className="w-full flex flex-col gap-1 px-6 py-4">
                <span className="text-[13px] text-gray-500">
                    Chưa thanh toán
                </span>
                <span className="text-[28px] font-medium text-gray-800">
                    13
                </span>
            </div>
        </div>
    )
}

export default StatisticProductCards