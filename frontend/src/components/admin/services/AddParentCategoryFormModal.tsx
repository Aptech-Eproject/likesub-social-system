import React, { useState, useEffect } from 'react';
import { X, FolderPlus } from 'lucide-react';

interface AddCategoryModalProps {
    setIsShowCreateCategoryModal: (value: boolean) => void;
}

const AddParentCategoryModal = ({ setIsShowCreateCategoryModal }: AddCategoryModalProps) => {
    const [isMounted, setIsMounted] = useState(false);
    const [formData, setFormData] = useState({
        priority: '0',
        name: '',
        slug: '',
        icon: null as File | null,
        status: 'active',
        description: ''
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
            setIsShowCreateCategoryModal(false);
        }, 300);
    };

    const handleSubmit = () => {
        console.log('Form submitted:', formData);
        handleClose();
    };

    const handleChange = (field: string, value: string) => {
        setFormData(prev => ({
            ...prev,
            [field]: value
        }));
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setFormData(prev => ({ ...prev, icon: e.target.files![0] }));
        }
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
                className={`relative z-10 bg-white rounded-md shadow-xl w-[95%] max-w-2xl max-h-[90vh] flex flex-col transform transition-all duration-300 ease-out ${isMounted ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-95 translate-y-4"}`}
            >
                {/* Header */}
                <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
                    <div className="flex items-center gap-2">
                        <FolderPlus className="w-4.5 h-4.5 text-gray-800" />
                        <h2 className="text-[15px] font-bold text-gray-800">
                            Thêm Chuyên Mục Cha Mới
                        </h2>
                    </div>
                    <button
                        onClick={handleClose}
                        className="text-gray-400 hover:text-gray-600 transition-colors cursor-pointer"
                    >
                        <X className="w-6 h-6" />
                    </button>
                </div>

                {/* Content - Scrollable */}
                <div className="flex-1 overflow-y-auto px-6 py-6">
                    <div className="space-y-6">
                        {/* Ưu tiên */}
                        <div className="grid grid-cols-3 gap-4 items-start">
                            <label className="text-sm font-semibold text-gray-800 pt-2">
                                Ưu tiên:
                            </label>
                            <div className="col-span-2">
                                <input
                                    type="number"
                                    value={formData.priority}
                                    onChange={(e) => handleChange('priority', e.target.value)}
                                    className="w-full px-4 py-2.5 border border-gray-300 rounded-md text-[13px]! placeholder:text-gray-400 focus:outline-none focus:border-gray-400 focus:ring-1 focus:ring-gray-200 transition-colors"
                                />
                                <p className="mt-1 text-xs text-gray-400 font-medium">
                                    Ưu tiên càng cao, chuyên mục càng hiển thị trên cùng
                                </p>
                            </div>
                        </div>

                        {/* Tên chuyên mục cha */}
                        <div className="grid grid-cols-3 gap-4 items-center">
                            <label className="text-sm font-semibold text-gray-800">
                                Tên chuyên mục cha: <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Nhập tên chuyên mục"
                                value={formData.name}
                                onChange={(e) => handleChange('name', e.target.value)}
                                className="col-span-2 px-4 py-2.5 border border-gray-300 rounded-md text-[13px]! placeholder:text-gray-400 focus:outline-none focus:border-gray-400 focus:ring-1 focus:ring-gray-200 transition-colors"
                            />
                        </div>

                        {/* Slug */}
                        <div className="grid grid-cols-3 gap-4 items-start">
                            <label className="text-sm font-semibold text-gray-800 pt-2">
                                Slug: <span className="text-red-500">*</span>
                            </label>
                            <div className="col-span-2">
                                <input
                                    type="text"
                                    placeholder="Nhập slug chuyên mục"
                                    value={formData.slug}
                                    onChange={(e) => handleChange('slug', e.target.value)}
                                    className="w-full px-4 py-2.5 border border-gray-300 rounded-md text-[13px]! placeholder:text-gray-400 focus:outline-none focus:border-gray-400 focus:ring-1 focus:ring-gray-200 transition-colors"
                                />
                                <p className="mt-1 text-xs text-gray-400 font-medium">
                                    Slug sẽ được tạo tự động từ tên chuyên mục
                                </p>
                            </div>
                        </div>

                        {/* Icon */}
                        <div className="grid grid-cols-3 gap-4 items-center">
                            <label className="text-sm font-semibold text-gray-800">
                                Icon: <span className="text-red-500">*</span>
                            </label>
                            <div className="col-span-2 flex items-center gap-3">
                                <label className="px-4 py-2 bg-gray-100 text-gray-700 text-sm font-medium rounded cursor-pointer hover:bg-gray-200 transition-colors">
                                    Choose File
                                    <input
                                        type="file"
                                        onChange={handleFileChange}
                                        accept="image/*"
                                        className="hidden"
                                    />
                                </label>
                                <span className="text-sm text-gray-500">
                                    {formData.icon ? formData.icon.name : 'no file selected'}
                                </span>
                            </div>
                        </div>

                        {/* Trạng thái */}
                        <div className="grid grid-cols-3 gap-4 items-center">
                            <label className="text-sm font-semibold text-gray-800">
                                Trạng thái: <span className="text-red-500">*</span>
                            </label>
                            <select
                                value={formData.status}
                                onChange={(e) => handleChange('status', e.target.value)}
                                className="col-span-2 px-4 py-2.5 border border-gray-300 rounded-md text-[13px]! focus:outline-none focus:border-gray-400 focus:ring-1 focus:ring-gray-200 transition-colors text-gray-500 font-medium"
                            >
                                <option value="active">Hiển Thị</option>
                                <option value="inactive">Ẩn</option>
                            </select>
                        </div>

                        {/* Description SEO */}
                        <div className="grid grid-cols-3 gap-4 items-start">
                            <label className="text-sm font-semibold text-gray-800 pt-2">
                                Description SEO:
                            </label>
                            <textarea
                                placeholder="Mô tả ngắn về chuyên mục này"
                                value={formData.description}
                                onChange={(e) => handleChange('description', e.target.value)}
                                rows={4}
                                className="col-span-2 px-4 py-2.5 border border-gray-300 rounded-md text-[13px]! placeholder:text-gray-400 focus:outline-none focus:border-gray-400 focus:ring-1 focus:ring-gray-200 transition-colors resize-none"
                            />
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <div className="flex justify-end mt-4 gap-3 px-6 py-4 border-t border-gray-200 bg-gray-50">
                    <button
                        onClick={handleClose}
                        className="px-6 py-2 bg-white border border-gray-300 text-gray-700 text-[13px]! font-bold rounded-md hover:bg-gray-100 transition-colors cursor-pointer"
                    >
                        Đóng
                    </button>
                    <button
                        onClick={handleSubmit}
                        className="px-4 py-2 bg-[#846adf] hover:bg-[#7356d1] text-white text-[13px]! font-bold rounded-md transition-colors flex items-center gap-2 cursor-pointer"
                    >
                        <FolderPlus className="w-4 h-4" />
                        Thêm chuyên mục
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AddParentCategoryModal;