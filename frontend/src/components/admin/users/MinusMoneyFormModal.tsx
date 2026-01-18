import { useEffect, useState } from "react";
import { X, Minus, CircleMinus } from "lucide-react";

function MinusMoneyFormModal({
    setIsShowMinusButton
}: {
    setIsShowMinusButton: (value: boolean) => void
}) {
    const [isMounted, setIsMounted] = useState(false);
    const [formData, setFormData] = useState({
        walletType: "VÍ CHÍNH",
        amount: "",
        reason: ""
    });

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsMounted(true);
        }, 50);

        return () => clearTimeout(timer);
    }, []);

    const handleClose = () => {
        setIsMounted(false);
        setTimeout(() => {
            setIsShowMinusButton(false);
        }, 300);
    };

    const handleSubmit = () => {
        console.log("Form submitted:", formData);
        handleClose();
    };

    const handleChange = (field: string, value: string) => {
        setFormData(prev => ({
            ...prev,
            [field]: value
        }));
    };

    return (
        <div className={`fixed inset-0 z-9999 flex items-center justify-center transition-opacity duration-300 ease-out ${isMounted ? "opacity-100" : "opacity-0"}`}>
            {/* Backdrop */}
            <div
                className={`absolute inset-0 bg-black/40 transition-opacity duration-300 ease-out ${isMounted ? "opacity-100" : "opacity-0"}`}
                onClick={handleClose}
            />

            {/* Modal box */}
            <div
                className={`relative z-10 bg-white rounded-md shadow-xl w-[95%] max-w-3xl transform transition-all duration-300 ease-out ${isMounted ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-95 translate-y-4"}`}
            >
                {/* Header */}
                <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
                    <h2 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
                        <Minus className="w-5 h-5" />
                        Trừ số dư
                    </h2>
                    <button
                        onClick={handleClose}
                        className="text-gray-400 hover:text-gray-600 transition-colors"
                    >
                        <X className="w-6 h-6" />
                    </button>
                </div>

                {/* Content */}
                <div className="p-6 space-y-6">
                    {/* Info Banner */}
                    <div className="bg-yellow-50 border border-yellow-200 rounded-md p-4 flex items-start gap-3">
                        <div className="w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                            </svg>
                        </div>
                        <div>
                            <h3 className="font-semibold text-yellow-700 mb-1">
                                Chú ý khi trừ tiền
                            </h3>
                            <p className="text-xs text-yellow-600">
                                Hãy kiểm tra kỹ số dư và lý do trước khi thực hiện. Thao tác này không thể hoàn tác.
                            </p>
                        </div>
                    </div>

                    {/* Wallet Type */}
                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Loại ví
                        </label>
                        <div className="relative">
                            <select
                                value={formData.walletType}
                                onChange={(e) => handleChange("walletType", e.target.value)}
                                className="w-full px-4 py-2.5 border border-gray-300 rounded-md text-[13px]! appearance-none bg-white focus:outline-none focus:border-gray-400 focus:ring-1 focus:ring-gray-200 transition-colors cursor-pointer"
                            >
                                <option>VÍ CHÍNH</option>
                            </select>
                            <svg className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </div>
                    </div>

                    {/* Amount */}
                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Số tiền
                        </label>
                        <div className="relative">
                            <div className="absolute left-4 top-1/2 -translate-y-1/2 flex items-center gap-2">
                                <CircleMinus className="w-4 h-4 text-gray-400" />
                            </div>
                            <input
                                type="text"
                                value={formData.amount}
                                onChange={(e) => handleChange("amount", e.target.value)}
                                placeholder="Nhập số tiền cần trừ"
                                className="w-full pl-12 pr-16 py-3 border border-gray-300 rounded-md text-[13px]! placeholder:text-gray-400 focus:outline-none focus:border-gray-400 focus:ring-1 focus:ring-gray-200 transition-colors"
                            />
                            <span className="absolute right-4 top-1/2 -translate-y-1/2 text-[13px] font-medium text-gray-600">VNĐ</span>
                        </div>
                    </div>

                    {/* Reason */}
                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Lý do
                        </label>
                        <textarea
                            value={formData.reason}
                            onChange={(e) => handleChange("reason", e.target.value)}
                            placeholder="Nhập lý do trừ tiền"
                            rows={4}
                            className="w-full px-4 py-2.5 border border-gray-300 rounded-md text-[13px]! placeholder:text-gray-400 focus:outline-none focus:border-gray-400 focus:ring-1 focus:ring-gray-200 transition-colors resize-none"
                        />
                    </div>

                    {/* Preview */}
                    <div className="bg-gray-50 border border-gray-200 rounded-md p-4 flex items-center gap-2">
                        <svg className="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <p className="text-[13px] text-gray-700">
                            Sẽ thực hiện trừ <span className="font-semibold text-red-600">{formData.amount || "0"} VNĐ</span> từ <span className="font-semibold text-yellow-600">VÍ CHÍNH</span>
                        </p>
                    </div>
                </div>

                {/* Footer */}
                <div className="flex justify-end gap-3 px-6 py-4 border-t border-gray-200 bg-gray-50">
                    <button
                        onClick={handleClose}
                        className="px-6 py-2.5 bg-white border border-cyan-500 text-cyan-500 text-[13px]! font-medium rounded-md hover:bg-cyan-50 transition-colors flex items-center gap-2 cursor-pointer"
                    >
                        <X className="w-4 h-4" />
                        Đóng
                    </button>
                    <button
                        onClick={handleSubmit}
                        className="px-6 py-2.5 bg-red-500 hover:bg-red-600 text-white text-[13px]! font-medium rounded-md transition-colors flex items-center gap-2 cursor-pointer"
                    >
                        <Minus className="w-4 h-4" />
                        Trừ tiền
                    </button>
                </div>
            </div>
        </div>
    );
}

export default MinusMoneyFormModal;