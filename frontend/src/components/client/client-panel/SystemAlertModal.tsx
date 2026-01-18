import { useEffect, useState } from "react";
import { Bell, X } from "lucide-react";
import { useRouter } from "next/navigation";

function SystemAlertModal({
    setIsShowFirstAlert
}: {
    setIsShowFirstAlert: (value: boolean) => void
}) {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsShowFirstAlert(true);
            setIsMounted(true);
        }, 600);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className={`fixed inset-0 z-9999 flex items-center justify-center transition-opacity duration-300 ease-out ${isMounted ? "opacity-100" : "opacity-0"
            }`}>
            {/* Backdrop */}
            <div
                className={`
                            absolute inset-0 bg-black/40
                            transition-opacity duration-300 ease-out
                            ${isMounted ? "opacity-100" : "opacity-0"}
                        `}
            />

            {/* Alert box */}
            <div
                className={`
                            relative z-10 bg-white rounded-md shadow-lg p-6 w-[90%] max-w-md
                            flex flex-col space-y-4
                            transform transition-all duration-400 ease-out
                            ${isMounted
                        ? "opacity-100 scale-100 translate-y-0"
                        : "opacity-0 scale-95 translate-y-2"
                    }
                        `}
            >
                <div className="flex items-center gap-2">
                    <Bell className="text-blue-800" />
                    <span className="text-2xl flex-1 font-bold text-blue-800">
                        Thông báo hệ thống
                    </span>
                    <button onClick={() => setIsShowFirstAlert(false)}>
                        <X className="w-6 h-6 text-gray-500 hover:text-gray-800 transition-colors duration-300 cursor-pointer" />
                    </button>
                </div>

                <p className="mt-2 text-xs text-slate-600 font-medium leading-4.5">
                    Đây là trang web thử nghiệm, vui lòng không nạp tiền, nếu quý khách cần trải nghiệm nạp tiền mua hàng thì truy cập{" "}
                    <a
                        href="https://tuanori.vn/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline cursor-pointer text-blue-400"
                    >
                        TUANORI.VN
                    </a>{" "}
                    của chúng tôi.
                </p>

                <div className="mt-4 flex justify-end gap-2">
                    <button
                        onClick={() => setIsShowFirstAlert(false)}
                        className="px-4 py-2 bg-amber-600 hover:bg-amber-700 text-white text-sm rounded transition cursor-pointer"
                    >
                        Không hiển thị lại trong 2 giờ
                    </button>
                </div>
            </div>
        </div>
    )
}

export default SystemAlertModal