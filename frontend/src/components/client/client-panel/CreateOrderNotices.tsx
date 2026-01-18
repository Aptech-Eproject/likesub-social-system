"use client";

import { Send, X } from "lucide-react";
import { useState } from "react";
export default function CreateOrderNotices() {
    const [isHidden, setIsHidden] = useState({
        c1: false,
        c2: false,
    });
    const [isClosing, setIsClosing] = useState({
        c1: false,
        c2: false,
    });

    const handleHideContainer = (key: keyof typeof isHidden) => {
        setIsClosing((prev) => ({
            ...prev,
            [key]: true,
        }));

        setTimeout(() => {
            setIsHidden((prev) => ({
                ...prev,
                [key]: true,
            }));
            setIsClosing((prev) => ({
                ...prev,
                [key]: false,
            }));
        }, 300);
    };

    return (
        <div className={`${isHidden.c1 && isHidden.c2 ? "py-3" : "p-6"} } flex flex-col gap-4`}>
            {/* Dismissible Notification Banner 1 */}
            <div
                className={`${isHidden.c1 ? "hidden" : "flex"
                    } items-start justify-between gap-2  bg-white shadow-md border-2 border-blue-200 rounded-sm p-4 ${isClosing.c1
                        ? "opacity-0 transition-colors duration-500 -translate-y-2"
                        : "opacity-100 translate-y-0"
                    }`}
            >
                <span className="text-blue-800 text-sm">
                    Hệ thống hiện đang vận hành bình thường, mọi thứ đều ổn. Nếu
                    bạn thấy điều gì đó bất thường thì... có lẽ là do vũ trụ
                    đang thử thách bạn. Hãy bình tĩnh, F5 nhẹ rồi tiếp tục công
                    việc nhé!
                </span>
                <button onClick={() => handleHideContainer("c1")}>
                    <X className="w-5 h-5 text-blue-300 hover:text-blue-400 transition-colors duration-300 cursor-pointer" />
                </button>
            </div>

            {/* Dismissible Notification Banner 2 */}
            <div
                className={`${isHidden.c2 ? "hidden" : "flex"
                    } items-center justify-between gap-2 bg-amber-50 shadow-md rounded-sm px-4 py-2 ${isClosing.c2
                        ? "opacity-0 transition-colors duration-500 -translate-y-2"
                        : "opacity-100 translate-y-0"
                    }`}
            >
                <div className="flex flex-col items-start space-y-2 px-4 pt-2 py-2">
                    <div className="text-black text-[16px] font-bold flex gap-2 items-center">
                        <div className="bg-amber-400 w-4 h-4 rounded-full flex items-center justify-center">
                            <Send className="w-2 h-2 text-white" />
                        </div>
                        <span>Liên kết Telegram</span>
                    </div>
                    <span className="text-slate-900 text-sm">
                        Bạn chưa liên kết tài khoản Telegram để nhận thông báo
                        quan trọng về đơn hàng và tài khoản.
                    </span>

                    <button className="py-1.5 px-3 bg-amber-400 hover:bg-amber-600 text-white rounded-xs text-xs flex items-center gap-2 cursor-pointer transition-colors duration-300">
                        Liên kết ngay
                    </button>
                </div>
                <button onClick={() => handleHideContainer("c2")}>
                    <X className="w-6 h-6 text-slate-400 hover:text-slate-500 transition-colors duration-300 cursor-pointer" />
                </button>
            </div>
        </div>
    );
}
