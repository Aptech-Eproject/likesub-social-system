"use client"

import { TriangleAlert, X } from "lucide-react";
import { useState } from "react";

export default function UsersNotice() {
    const [isHidden, setIsHidden] = useState(false);
    const [isClosing, setIsClosing] = useState(false);

    const handleHideContainer = () => {
        setIsClosing(true);

        setTimeout(() => {
            setIsHidden(true);
            setIsClosing(false);
        }, 500);
    };

    return (
        <div
            className={`${isHidden ? "hidden" : "flex"} items-start justify-between w-full gap-2 bg-blue-100 shadow-md border-2 border-blue-200 rounded-sm p-4 h-28 ${isClosing ? "opacity-0 transition-colors duration-500 -translate-y-2" : "opacity-100 translate-y-0"}`}
        >
            <div className="text-blue-800 text-sm min-h-full flex flex-col justify-between">
                <div className="flex items-center gap-2 text-yellow-500">
                    <TriangleAlert className="w-4 h-4" />
                    <span className="font-medium text-gray-800 text-sm">
                        Nhắc nhở:
                    </span>
                </div>
                <div className="flex flex-col">
                    <span className="">
                        Việc chỉnh sửa hoặc vô hiệu hóa thành viên có thể ảnh hưởng đến dữ liệu, đơn hàng và lịch sử giao dịch liên quan.
                    </span>
                    <span>
                        Vui lòng kiểm tra kỹ trước khi thực hiện.
                    </span>
                </div>
            </div>
            <button
                onClick={() => handleHideContainer()}
            >
                <X className="w-5 h-5 text-blue-300 hover:text-blue-400 transition-colors duration-300 cursor-pointer" />
            </button>
        </div>
    );
}
