export default function OrderPaginationControls() {
    return (
        <div className="flex flex-col md:flex-row items-center px-4 justify-between gap-4 mb-6">
            <div className="flex items-center gap-2">
                <label className="text-sm text-gray-600">Hiển thị:</label>
                <select className="px-3 py-1 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option value={10}>10</option>
                    <option value={20}>20</option>
                    <option value={50}>50</option>
                    <option value={100}>100</option>
                </select>
            </div>

            <div className="flex items-center gap-2">
                <label className="text-sm text-gray-600">
                    Sắp xếp theo ngày:
                </label>
                <select className="px-3 py-1 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option value="default">Tất cả</option>
                    <option value="newest">Mới nhất</option>
                    <option value="oldest">Cũ nhất</option>
                </select>
            </div>
        </div>
    );
}
