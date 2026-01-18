import { AlertCircle } from 'lucide-react';
import Link from 'next/link';

function ToolAddonCards() {
    return (
        <div className="w-full bg-white rounded-lg shadow-sm p-8">
            {/* Icon */}
            <div className="flex justify-center mb-4">
                <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center">
                    <AlertCircle className="w-8 h-8 text-gray-400" />
                </div>
            </div>

            {/* Title */}
            <h2 className="text-2xl font-bold text-gray-800 text-center mb-3">
                Không tìm thấy addon
            </h2>

            {/* Description */}
            <p className="text-gray-500 text-center mb-6">
                Không có addon nào phù hợp với bộ lọc hiện tại.
            </p>

            {/* Button */}
            <div className="flex justify-center">
                <Link
                    href="/admin/addons/all"
                    className="px-6 py-2.5 border-2 border-[#846adf] text-[#846adf] font-medium rounded-lg hover:bg-[#846adf]! hover:text-white! transition-colors duration-300 cursor-pointer"
                >
                    Xem tất cả addon
                </Link>
            </div>
        </div>
    );
}

export default ToolAddonCards;