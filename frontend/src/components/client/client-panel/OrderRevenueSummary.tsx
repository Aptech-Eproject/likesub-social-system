export default function OrderRevenueSummary() {
    return (
        <div className="flex items-center justify-between p-4 flex-col md:flex-row gap-4">
            <div className="text-gray-700">
                <span className="font-semibold">
                    Tổng số tiền đã thanh toán:
                </span>
                <span className="text-lg font-semibold text-red-600 ml-2">
                    1000đ
                </span>
            </div>
        </div>
    );
}
