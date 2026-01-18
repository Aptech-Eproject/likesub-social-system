"use client"

import { useEffect, useState } from "react";
import { X, Plus } from "lucide-react";

function AddUserFormModal({
    setIsShowAddUserFormModal
}: {
    setIsShowAddUserFormModal: (value: boolean) => void
}) {
    const [isMounted, setIsMounted] = useState(false);
    const [formData, setFormData] = useState({
        username: "",
        password: "",
        email: ""
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
            setIsShowAddUserFormModal(false);
        }, 300);
    };

    const handleSubmit = () => {
        // Handle form submission
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
        <div className={`fixed inset-0 z-9999 flex items-center justify-center transition-opacity duration-300 ease-out ${isMounted ? "opacity-100" : "opacity-0"
            }`}>
            {/* Backdrop */}
            <div
                className={`
                    absolute inset-0 bg-black/40
                    transition-opacity duration-300 ease-out
                    ${isMounted ? "opacity-100" : "opacity-0"}
                `}
                onClick={handleClose}
            />

            {/* Modal box */}
            <div
                className={`
                    relative z-10 bg-white rounded-md shadow-xl w-[95%] max-w-2xl
                    transform transition-all duration-300 ease-out
                    ${isMounted
                        ? "opacity-100 scale-100 translate-y-0"
                        : "opacity-0 scale-95 translate-y-4"
                    }
                `}
            >
                {/* Header */}
                <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
                    <h2 className="text-lg font-bold text-gray-800">
                        Thêm thành viên mới
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
                    {/* Username */}
                    <div className="grid grid-cols-3 gap-4 items-center">
                        <label className="text-sm font-semibold text-gray-800">
                            Username
                        </label>
                        <input
                            type="text"
                            value={formData.username}
                            onChange={(e) => handleChange("username", e.target.value)}
                            placeholder="Nhập tên đăng nhập"
                            className="
                                col-span-2
                                px-4 py-3
                                border border-gray-300
                                rounded-md
                                text-sm
                                placeholder:text-gray-400
                                focus:outline-none
                                focus:border-gray-400
                                focus:ring-1
                                focus:ring-gray-200
                                transition-colors
                            "
                        />
                    </div>

                    {/* Password */}
                    <div className="grid grid-cols-3 gap-4 items-center">
                        <label className="text-sm font-semibold text-gray-800">
                            Password
                        </label>
                        <input
                            type="password"
                            value={formData.password}
                            onChange={(e) => handleChange("password", e.target.value)}
                            placeholder="Nhập mật khẩu"
                            className="
                                col-span-2
                                px-4 py-3
                                border border-gray-300
                                rounded-md
                                text-sm
                                placeholder:text-gray-400
                                focus:outline-none
                                focus:border-gray-400
                                focus:ring-1
                                focus:ring-gray-200
                                transition-colors
                            "
                        />
                    </div>

                    {/* Email */}
                    <div className="grid grid-cols-3 gap-4 items-center">
                        <label className="text-sm font-semibold text-gray-800">
                            Email
                        </label>
                        <input
                            type="email"
                            value={formData.email}
                            onChange={(e) => handleChange("email", e.target.value)}
                            placeholder="Nhập địa chỉ email"
                            className="
                                col-span-2
                                px-4 py-3
                                border border-gray-300
                                rounded-md
                                text-sm
                                placeholder:text-gray-400
                                focus:outline-none
                                focus:border-gray-400
                                focus:ring-1
                                focus:ring-gray-200
                                transition-colors
                            "
                        />
                    </div>
                </div>

                {/* Footer */}
                <div className="flex justify-end gap-3 px-6 py-4 border-t border-gray-200 bg-gray-50">
                    <button
                        onClick={handleClose}
                        className="px-6 py-2.5 bg-white border border-gray-300 text-gray-700 text-sm font-medium rounded-md hover:bg-gray-100 transition-colors cursor-pointer"
                    >
                        Đóng
                    </button>
                    <button
                        onClick={handleSubmit}
                        className="px-4 py-1.5 bg-[#846adf] hover:bg-purple-800 text-white text-sm font-medium rounded-md transition-colors flex items-center gap-2 cursor-pointer"
                    >
                        <Plus className="w-4 h-4" />
                        Thêm mới
                    </button>
                </div>
            </div>
        </div>
    );
}

export default AddUserFormModal;