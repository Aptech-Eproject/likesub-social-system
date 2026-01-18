"use client"

import { useState } from 'react';

import {
    ArrowLeft,
    Save,
    Info,
    Settings,
    CircleDollarSign,
    Sliders,
    Tags,
    Logs,
    TextAlignStart,
    CircleQuestionMark,
    Lightbulb
} from 'lucide-react';
import AdminSubHeader from '@/layouts/admin/AdminSubHeader';

type FormDataType = {
    serviceName: string;
    category: string;
    serviceType: string;
    description: string;
    status: boolean;
    apiProvider: string;
    apiId: string;
    dripfeed: boolean;
    refill: boolean;
    cancelable: boolean;
    autoComplete: boolean;
    completionTime: string;
    syncPrice: boolean;
    originalPrice: string;
    retailPrice: string;
    collabPrice: string;
    agentPrice: string;
    distributorPrice: string;
    syncQuantity: boolean;
    minQuantity: string;
    maxQuantity: string;
    createdDate: string;
    lastUpdated: string;
};

interface InfoBoxType {
    default: string
    package: string
    customComments: string
    customCommentsPackage: string
    mentionsHashtag: string
    subscriptions: string
    seo: string
}

const EditPackagePage = () => {
    const titlePage = "chỉnh sửa gói dịch vụ";
    const prevTitle = "quản lý gói dịch vụ"
    const prevTitlePage = "/admin/services/packages"

    const [formData, setFormData] = useState<FormDataType>({
        serviceName: '',
        category: '',
        serviceType: 'default', description: '',
        status: true,
        apiProvider: 'https://x999.vn/',
        apiId: '',
        dripfeed: false,
        refill: false,
        cancelable: false,
        autoComplete: true,
        completionTime: '0',
        syncPrice: true,
        originalPrice: '',
        retailPrice: '',
        collabPrice: '',
        agentPrice: '',
        distributorPrice: '',
        syncQuantity: true,
        minQuantity: '10',
        maxQuantity: '100000',
        createdDate: '2025-10-21 08:04:18',
        lastUpdated: '2025-12-27 19:49:21'
    });

    const handleChange = <K extends keyof FormDataType>(
        field: K,
        value: FormDataType[K]
    ) => {
        setFormData(prev => ({
            ...prev,
            [field]: value,
        }));
    };

    const handleSubmit = () => console.log('Form submitted:', formData);
    const [infoBoxMessage, setInfoBoxMessage] = useState("");

    const InfoBoxMessages: InfoBoxType = {
        default: "Phù hợp cho dịch vụ truyền thống",
        package: "Dùng cho dịch vụ theo gói, đặt hàng mỗi lần 1 gói, không hiển thị ô số lượng khi order",
        customComments: "Dùng cho dịch vụ theo gói, đặt hàng mỗi lần 1 gói, không hiển thị ô số lượng khi order",
        customCommentsPackage: "Phù hợp cho dịch vụ tăng bình luận theo gói, có ô nhập số lượng",
        mentionsHashtag: "Có ô nhập hasttag",
        subscriptions: "Phù hợp cho dịch vụ đăng ký gói",
        seo: "Phù hợp cho dịch vụ SEO"
    }

    const handleServiceTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedType = e.target.value;

        handleChange('serviceType', selectedType);
        setInfoBoxMessage(selectedType);
    };

    return (
        <>
            {/* Page Breadcrumb */}
            <AdminSubHeader
                titlePage={titlePage}
                prevTitle={prevTitle}
                urlPrevTitle={prevTitlePage}
            />

            <div className="p-6">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Left Column */}
                    <div className="lg:col-span-2 space-y-6">
                        {/* Form chính */}
                        <div className="bg-white rounded-md shadow-sm p-6 space-y-6">
                            {/* Tên dịch vụ */}
                            <div>
                                <label className="flex items-center gap-2 text-[13px] font-bold text-gray-800 mb-3">
                                    <Tags className='w-3.5 h-3.5' />
                                    Tên dịch vụ <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Nhập tên dịch vụ"
                                    value={formData.serviceName}
                                    onChange={(e) => handleChange('serviceName', e.target.value)}
                                    className="w-full px-4 py-2.5 border border-gray-300 rounded-md text-[14px]! font-medium placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#846adf]"
                                />
                            </div>

                            {/* Chuyên mục và Loại */}
                            <div className="grid grid-cols-2 gap-4">
                                {/* Category */}
                                <div>
                                    <label className="flex items-center gap-2 text-[13px] font-bold text-gray-800 mb-3">
                                        <Logs className="w-3.5 h-3.5" />
                                        Chuyên mục <span className="text-red-500">*</span>
                                    </label>
                                    <select onChange={(e) => handleChange('category', e.target.value)}
                                        className="w-full px-4 py-2.5 border border-gray-300 rounded-md text-[14px]! text-gray-600 font-medium focus:outline-none focus:ring-2 focus:ring-[#846adf]">
                                        <option value="">--- Chọn chuyên mục ---</option>
                                    </select>
                                </div>

                                {/* Type */}
                                <div>
                                    <label className="flex items-center gap-2 text-[13px] font-bold text-gray-800 mb-3">
                                        <Settings className="w-3.5 h-3.5" />
                                        Loại dịch vụ <span className="text-red-500">*</span>
                                    </label>
                                    <select
                                        value={formData.serviceType}
                                        onChange={handleServiceTypeChange}
                                        className="w-full px-4 py-2.5 border border-gray-300 rounded-md text-[14px]! text-gray-600 font-medium focus:outline-none focus:ring-2 focus:ring-[#846adf]"
                                    >
                                        <option value="">--- Chọn loại dịch vụ ---</option>
                                        <option value="default">Default</option>
                                        <option value="package">Package</option>
                                        <option value="customComments">Custom Comments</option>
                                        <option value="customCommentsPackage">Custom Comments Package</option>
                                        <option value="mentionsHashtag">Mentions Hashtag</option>
                                        <option value="subscriptions">Subscriptions</option>
                                        <option value="seo">SEO</option>
                                    </select>
                                </div>
                            </div>

                            {/* Info box */}
                            {infoBoxMessage && InfoBoxMessages[infoBoxMessage as keyof InfoBoxType] && (
                                <div className="flex items-start gap-2 p-3 bg-blue-50 border border-blue-200 rounded-md mt-4">
                                    <Info className="w-4 h-4 text-blue-500 mt-0.5 shrink-0" />
                                    <div>
                                        <p className="text-xs font-semibold text-blue-700">
                                            Mô tả loại dịch vụ:
                                        </p>
                                        <p className="text-xs text-blue-600">
                                            {InfoBoxMessages[infoBoxMessage as keyof InfoBoxType]}
                                        </p>
                                    </div>
                                </div>
                            )}

                            {/* Mô tả */}
                            <div>
                                <label className="flex items-center gap-2 text-sm font-bold text-gray-800 mb-2">
                                    <TextAlignStart className='w-3.5 h-3.5' />
                                    Mô tả
                                </label>
                                <div className="border border-gray-300 rounded-md">
                                    <textarea
                                        placeholder="Nhập mô tả dịch vụ..." value={formData.description}
                                        onChange={(e) => handleChange('description', e.target.value)} rows={8}
                                        className="w-full px-4 py-3 text-[14px]! font-medium placeholder:text-gray-400 focus:outline-none resize-none"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Thông tin giá cả */}
                        <div className="bg-white rounded-md shadow-sm">
                            {/* Header */}
                            <div className="flex items-center justify-between mb-4 px-6 py-4 border-b border-gray-200">
                                <h3 className="flex items-center gap-2 text-sm font-bold text-gray-800">
                                    <CircleDollarSign className="w-4 h-4 text-amber-500" />
                                    THÔNG TIN GIÁ CẢ
                                </h3>
                                <label className="flex items-center gap-2 cursor-pointer">
                                    <span className="text-xs text-gray-600 font-semibold">
                                        Đồng bộ theo API
                                    </span>
                                    <button onClick={() => handleChange('syncPrice', !formData.syncPrice)}
                                        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${formData.syncPrice ? 'bg-[#846adf]' : 'bg-gray-300'}`}>
                                        <span className={`inline-block h-5 w-5 transform rounded-full bg-white transition-transform ${formData.syncPrice ? 'translate-x-5' : 'translate-x-0.5'}`} />
                                    </button>
                                </label>
                            </div>

                            {/* Price Input */}
                            <div className="grid grid-cols-2 gap-6 px-6 pb-6">
                                {[
                                    { label: 'Giá vốn', icon: '📦', color: 'amber', field: 'originalPrice' as keyof FormDataType, placeholder: '16.632' },
                                    { label: 'Giá bán lẻ', icon: '🏪', color: 'green', field: 'retailPrice' as keyof FormDataType, placeholder: '18.2952' },
                                    { label: 'Giá Cộng tác viên', badge: 'VIP1', color: 'purple', field: 'collabPrice' as keyof FormDataType, placeholder: '16.632' },
                                    { label: 'Giá Đại lý', badge: 'VIP2', color: 'blue', field: 'agentPrice' as keyof FormDataType, placeholder: '16.632' }
                                ].map((item, i) => (
                                    <div key={i}>
                                        <label className="flex items-center gap-1 text-sm font-bold text-gray-800 mb-2">
                                            {item.label} <span className="text-red-500">*</span>
                                        </label>
                                        <div className="flex items-center gap-2">
                                            <div className="flex items-center flex-1 border border-gray-300 rounded-md overflow-hidden h-10.5">
                                                {item.badge
                                                    ? <span className={`px-3 py-2 bg-${item.color}-100 text-${item.color}-600 h-full pt-3 text-xs font-bold`}>
                                                        {item.badge}
                                                    </span>
                                                    : <span className={`px-3 py-2 bg-gray-100 text-${item.color}-500 h-full w-12.5 text-center text-sm`}>
                                                        {item.icon}
                                                    </span>}
                                                <input
                                                    type="text"
                                                    placeholder={item.placeholder}
                                                    value={formData.distributorPrice}
                                                    onChange={(e) => handleChange(item.field, e.target.value)}
                                                    className="flex-1 px-3 py-2 text-[13px]! focus:outline-none" />
                                                <button className="px-2 text-gray-400 hover:text-gray-600">
                                                    ⇅
                                                </button>
                                            </div>
                                            <span className="text-sm font-medium text-gray-600">
                                                VND
                                            </span>
                                        </div>
                                    </div>
                                ))}

                                <div className="col-span-2">
                                    <label className="flex items-center gap-1 text-sm font-bold text-gray-800 mb-2">
                                        👑 Giá Nhà phân phối <span className="text-red-500">*</span>
                                    </label>
                                    <div className="flex items-center gap-2">
                                        <div className="flex items-center flex-1 border border-gray-300 rounded-md overflow-hidden h-10.5">
                                            <span className="px-3 py-3 bg-pink-100 text-pink-600 text-xs font-bold h-full">
                                                VIP3
                                            </span>
                                            <input type="text" placeholder="16.632" value={formData.distributorPrice}
                                                onChange={(e) => handleChange('distributorPrice', e.target.value)}
                                                className="flex-1 px-3 py-2 text-[13px]! focus:outline-none" />
                                            <button className="px-2 text-gray-400 hover:text-gray-600">⇅</button>
                                        </div>
                                        <span className="text-sm font-semibold text-gray-600">VND</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Cài đặt số lượng */}
                        <div className="bg-white rounded-md shadow-sm">
                            {/* Header */}
                            <div className="flex items-center justify-between mb-4 px-6 py-4 border-b border-gray-200">
                                <h3 className="flex items-center gap-2 text-sm font-bold text-gray-800">
                                    <Sliders className="w-4 h-4 text-blue-500" />
                                    CÀI ĐẶT SỐ LƯỢNG
                                </h3>
                                <label className="flex items-center gap-2 cursor-pointer">
                                    <span className="text-xs text-gray-600 font-semibold">
                                        Đồng bộ theo API
                                    </span>
                                    <button onClick={() => handleChange('syncQuantity', !formData.syncQuantity)}
                                        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${formData.syncQuantity ? 'bg-[#846adf]' : 'bg-gray-300'}`}>
                                        <span className={`inline-block h-5 w-5 transform rounded-full bg-white transition-transform ${formData.syncQuantity ? 'translate-x-5' : 'translate-x-0.5'}`} />
                                    </button>
                                </label>
                            </div>

                            {/* Quantity Input */}
                            <div className="grid grid-cols-2 gap-4 px-6 pb-6">
                                {[
                                    { label: '↓ Số lượng tối thiểu', badge: 'MIN', color: 'teal', field: 'minQuantity' as keyof FormDataType, placeholder: '10' },
                                    { label: '↑ Số lượng tối đa', badge: 'MAX', color: 'red', field: 'maxQuantity' as keyof FormDataType, placeholder: '100000' }
                                ].map((item, i) => (
                                    <div key={i}>
                                        <label className="flex items-center gap-1 text-sm font-bold text-gray-800 mb-2">
                                            <span className={`text-${item.color}-500`}>
                                                {item.label.split(' ')[0]}
                                            </span>
                                            {item.label.substring(2)}
                                            <span className="text-red-500">*</span>
                                        </label>
                                        <div className="flex items-center gap-2">
                                            <div className="flex items-center flex-1 border border-gray-300 rounded-md overflow-hidden h-10.5">
                                                <span className={`px-3 py-3 bg-${item.color}-100 text-${item.color}-600 text-xs font-bold h-full`}>{item.badge}</span>
                                                <input
                                                    type="text"
                                                    placeholder={item.placeholder}
                                                    onChange={(e) => handleChange(item.field, e.target.value)}
                                                    className="flex-1 px-3 py-2.5 text-[13px]! focus:outline-none"
                                                />
                                                <button className="px-2 text-gray-400 hover:text-gray-600">⇅</button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className="space-y-6">
                        {/* Trạng thái */}
                        <div className="bg-white rounded-md shadow-sm">
                            <h3 className="flex items-center gap-2 text-sm font-bold text-gray-800 mb-4 px-6 py-4 border-b border-gray-200">
                                <span className="text-green-500">●</span> TRẠNG THÁI
                            </h3>
                            <div className='px-6 pb-6'>
                                <label className="flex items-center gap-1 text-sm font-bold text-gray-800 mb-2">
                                    Hiển Thị <span className="text-red-500">*</span>
                                </label>
                                <select value={formData.status ? 'active' : 'inactive'}
                                    onChange={(e) => handleChange('status', e.target.value === 'active')}
                                    className="w-full px-4 py-2.5 border border-gray-300 rounded-md text-[13px]! text-gray-800 font-medium focus:outline-none focus:ring-2 focus:ring-[#846adf]">
                                    <option value="active">Hiển Thị</option>
                                    <option value="inactive">Ẩn</option>
                                </select>
                            </div>
                        </div>

                        {/* Cấu hình API */}
                        <div className="bg-white rounded-md shadow-sm">
                            <h3 className="flex items-center gap-2 text-sm font-bold text-gray-800 mb-4 px-6 py-4 border-b border-gray-20c">
                                <Settings className='w-4 h-4' />
                                CẤU HÌNH API
                            </h3>
                            <div className="space-y-4 px-6 pb-6">
                                <div>
                                    <label className="flex items-center gap-1 text-sm font-bold text-gray-800 mb-2">
                                        Nhà cung cấp API
                                    </label>
                                    <select value={formData.apiProvider} onChange={(e) => handleChange('apiProvider', e.target.value)}
                                        className="w-full px-4 py-2.5 border border-gray-300 rounded-md text-[13px]! text-gray-600 font-medium focus:outline-none focus:ring-2 focus:ring-[#846adf]">
                                        <option value="https://x999.vn/">https://x999.vn/</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        {/* Introduction */}
                        <div className="bg-white rounded-md shadow-sm pb-0.5">
                            <h3 className="flex items-center gap-2 text-sm font-bold text-gray-800 mb-4 px-6 py-4 border-b border-gray-200">
                                <CircleQuestionMark className="w-4 h-4 text-blue-500" />
                                HƯỚNG DẪN
                            </h3>
                            <div className="rounded-md bg-blue-50 border border-blue-200 m-6 flex flex-col justify-between h-38">
                                <div className='flex items-center gap-2 text-blue-400 font-bold px-4 py-2'>
                                    <Lightbulb />
                                    <span>
                                        Lưu ý quan trọng
                                    </span>
                                </div>
                                <ul className='flex flex-col gap-1.5 text-xs font-medium text-blue-400 p-4'>
                                    <li>• Điền đầy đủ thông tin bắt buộc có dấu (*)</li>
                                    <li>• Điền đầy đủ thông tin bắt buộc có dấu (*)</li>
                                    <li>• Số lượng tối đa phải lớn hơn số lượng tối thiểu</li>
                                    <li>• Cấu hình API chỉ cần thiết khi dùng API ngoàii</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Action Buttons */}
                <div className="flex items-center justify-end gap-4 mt-16">
                    <button onClick={() => window.history.back()}
                        className="flex items-center gap-2 px-6 py-2.5 bg-white border border-gray-300 text-gray-700 text-sm font-semibold rounded-md hover:bg-gray-100 transition-colors cursor-pointer">
                        <ArrowLeft className="w-4 h-4" />Quay lại
                    </button>
                    <button onClick={handleSubmit}
                        className="flex items-center gap-2 px-6 py-2.5 bg-[#846adf] hover:bg-[#7356d1] text-white text-sm font-semibold rounded-md transition-colors cursor-pointer">
                        <Save className="w-4 h-4" />Lưu thay đổi
                    </button>
                </div>
            </div>
        </>
    );
};

export default EditPackagePage;