import { useEffect, useState } from "react";
import { X, Ticket, Edit } from "lucide-react";

function CreateTicketForm({
    setIsShowTicketsButton
}: {
    setIsShowTicketsButton: (value: boolean) => void
}) {
    const [isMounted, setIsMounted] = useState(false);
    const [formData, setFormData] = useState({
        supportTopic: "",
        ticketTitle: "",
        ticketContent: ""
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
            setIsShowTicketsButton(false);
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
                <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200 bg-white">
                    <h2 className="text-lg font-bold text-gray-800 flex items-center gap-2">
                        <Ticket className="w-5 h-5" />
                        Tạo ticket cho user
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
                    <div className="bg-blue-50 border border-blue-200 rounded-md p-4 flex items-start gap-3">
                        <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <div>
                            <h3 className="font-semibold text-blue-600 mb-1 text-[13px]">
                                Tạo ticket cho user
                            </h3>
                            <p className="text-[13px] text-blue-600">
                                Ticket sẽ được tạo dưới tên user này. User sẽ nhận được thông báo qua Telegram (nếu có kích hoạt).
                            </p>
                        </div>
                    </div>

                    {/* Support Topic */}
                    <div>
                        <label className="block text-[13px] font-semibold text-gray-700 mb-2">
                            Chủ đề hỗ trợ <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                            <select
                                value={formData.supportTopic}
                                onChange={(e) => handleChange("supportTopic", e.target.value)}
                                className="w-full px-4 py-2.5 border border-gray-300 rounded-md text-[13px] appearance-none bg-white focus:outline-none focus:border-gray-400 focus:ring-1 focus:ring-gray-200 transition-colors cursor-pointer"
                            >
                                <option value="">Chọn chủ đề hỗ trợ</option>
                                <option>Vấn đề thanh toán</option>
                                <option>Vấn đề tài khoản</option>
                                <option>Khác</option>
                            </select>
                            <svg className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </div>
                    </div>

                    {/* Ticket Title */}
                    <div>
                        <label className="block text-[13px] font-semibold text-gray-700 mb-2">
                            Tiêu đề ticket <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                            <div className="absolute left-4 top-1/2 -translate-y-1/2 flex items-center gap-2">
                                <Edit className="w-4 h-4 text-gray-400" />
                            </div>
                            <input
                                type="text"
                                value={formData.ticketTitle}
                                onChange={(e) => handleChange("ticketTitle", e.target.value)}
                                placeholder="Nhập tiêu đề ticket"
                                maxLength={200}
                                className="w-full pl-11 pr-4 py-2.5 border border-gray-300 rounded-md text-[13px] placeholder:text-gray-400 focus:outline-none focus:border-gray-400 focus:ring-1 focus:ring-gray-200 transition-colors"
                            />
                        </div>
                        <p className="text-[11px] text-gray-500 mt-1">
                            {formData.ticketTitle.length}/200 ký tự
                        </p>
                    </div>

                    {/* Ticket Content */}
                    <div>
                        <label className="block text-[13px] font-semibold text-gray-700 mb-2">
                            Nội dung ticket <span className="text-red-500">*</span>
                        </label>
                        <textarea
                            value={formData.ticketContent}
                            onChange={(e) => handleChange("ticketContent", e.target.value)}
                            placeholder="Nhập nội dung chi tiết ticket..."
                            maxLength={5000}
                            rows={6}
                            className="w-full px-4 py-3 border border-gray-300 rounded-md text-[13px] placeholder:text-gray-400 focus:outline-none focus:border-gray-400 focus:ring-1 focus:ring-gray-200 transition-colors resize-none"
                        />
                        <p className="text-[11px] text-gray-500 mt-1">
                            {formData.ticketContent.length}/5000 ký tự
                        </p>
                    </div>
                </div>

                {/* Footer */}
                <div className="flex justify-end gap-3 px-6 py-4 border-t border-gray-200">
                    <button
                        onClick={handleClose}
                        className="px-6 py-2.5 bg-white border border-cyan-500 text-cyan-500 text-[13px] font-medium rounded-md hover:bg-cyan-50 transition-colors flex items-center gap-2 cursor-pointer"
                    >
                        <X className="w-4 h-4" />
                        Đóng
                    </button>
                    <button
                        onClick={handleSubmit}
                        className="px-6 py-2.5 bg-cyan-500 hover:bg-cyan-600 text-white text-[13px] font-medium rounded-md transition-colors flex items-center gap-2 cursor-pointer"
                    >
                        <Ticket className="w-4 h-4" />
                        Tạo ticket
                    </button>
                </div>
            </div>
        </div>
    );
}

export default CreateTicketForm;