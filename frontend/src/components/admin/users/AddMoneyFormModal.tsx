import { useEffect, useState } from "react";
import { X, Plus, CirclePlus } from "lucide-react";

function AddMoneyFormModal({
    setIsShowAddButton
}: {
    setIsShowAddButton: (value: boolean) => void
}) {
    const [isMounted, setIsMounted] = useState(false);
    const [formData, setFormData] = useState({
        walletType: "CỘNG TIỀN VÀO VÍ CHÍNH",
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
            setIsShowAddButton(false);
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
                <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200 bg-gray-100">
                    <h2 className="text-lg font-bold text-gray-800 flex items-center gap-2">
                        <CirclePlus className="w-4 h-4" />
                        Cộng số dư
                    </h2>
                    <button
                        onClick={handleClose}
                        className="text-gray-400 hover:text-gray-600 transition-colors cursor-pointer"
                    >
                        <X className="w-6 h-6" />
                    </button>
                </div>

                {/* Content */}
                <div className="p-6 space-y-6">
                    {/* Info Banner */}
                    <div className="bg-teal-50 border border-teal-200 rounded-md p-4 flex items-start gap-3">
                        <div className="w-5 h-5 bg-teal-500 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                        </div>
                        <div>
                            <h3 className="font-semibold text-teal-500 mb-1">
                                CỘNG TIỀN VÀO VÍ CHÍNH
                            </h3>
                            <p className="text-xs text-teal-600">
                                Số tiền sẽ được cộng vào ví chính và cộng vào tổng nạp của thành viên.
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
                                <option>CỘNG TIỀN VÀO VÍ CHÍNH</option>
                                <option>CỘNG TIỀN VÀO VÍ CHÍNH VÀ GHI NHỢ LẠI</option>
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
                            <input
                                type="text"
                                value={formData.amount}
                                onChange={(e) => handleChange("amount", e.target.value)}
                                placeholder="Nhập số tiền cần cộng"
                                className="w-full px-4 py-3 border border-gray-300 rounded-md text-[13px]! placeholder:text-gray-400 focus:outline-none focus:border-gray-400 focus:ring-1 focus:ring-gray-200 transition-colors"
                            />
                            <span className="absolute right-4 top-1/2 -translate-y-1/2 text-sm font-medium text-gray-600">VNĐ</span>
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
                            placeholder="Nhập lý do cộng tiền (tùy chọn)"
                            rows={4}
                            className="w-full px-4 py-3 border border-gray-300 rounded-md text-sm placeholder:text-gray-400 focus:outline-none focus:border-gray-400 focus:ring-1 focus:ring-gray-200 transition-colors resize-none"
                        />
                    </div>

                    {/* Preview */}
                    <div className="bg-gray-50 border border-gray-200 rounded-md p-4 flex items-center gap-2">
                        <svg className="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <p className="text-[13px] text-gray-700">
                            Sẽ thực hiện cộng <span className="font-semibold text-blue-600">{formData.amount || "0"} VNĐ</span> vào <span className="font-semibold text-teal-600">CỘNG TIỀN VÀO VÍ CHÍNH</span>
                        </p>
                    </div>
                </div>

                {/* Footer */}
                <div className="flex justify-end gap-3 px-6 py-4 border-t border-gray-200">
                    <button
                        onClick={handleClose}
                        className="px-6 py-2.5 bg-red-500 hover:bg-red-600 text-white text-[13px]  font-medium rounded-md transition-colors flex items-center gap-2 cursor-pointer"
                    >
                        <X className="w-4 h-4" />
                        Close
                    </button>
                    <button
                        onClick={handleSubmit}
                        className="px-6 py-2.5 bg-teal-500 hover:bg-teal-600 text-white text-sm font-medium rounded-md transition-colors flex items-center gap-2 cursor-pointer text-[13px"
                    >
                        <Plus className="w-4 h-4" />
                        Submit
                    </button>
                </div>
            </div>
        </div>
    );
}

export default AddMoneyFormModal;