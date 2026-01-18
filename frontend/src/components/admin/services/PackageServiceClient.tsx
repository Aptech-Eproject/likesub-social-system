"use client"

import { useState } from "react";

import {
    Search,
    TrashIcon,
    Plus
} from 'lucide-react';
import Link from "next/link";

import PackageServiceTable from "./PackageServiceTable";

interface Filters {
    id: string;
    name: string;
    type: string;
    status: string;
    parent: string;
    api: string;
    time: string;
}

function PackageServiceClient() {
    const [filters, setFilters] = useState<Filters>({
        id: '',
        name: '',
        type: '',
        status: '',
        parent: '',
        api: '',
        time: ''
    });

    const totalItems = 168;
    const itemsPerPage = 10;
    const totalPages = Math.ceil(totalItems / itemsPerPage);

    const handleSearch = () => {
        console.log('Searching with filters:', filters);
    };

    const handleClearFilters = () => {
        setFilters({
            id: '',
            name: '',
            type: '',
            status: '',
            parent: '',
            api: '',
            time: ''
        });
    };

    return (
        <div className="p-6">
            {/* Main Content */}
            <div className="bg-white p-6 rounded-sm">
                {/* Filters & Search */}
                <div className="grid grid-cols-5 gap-4 mb-4 text-[13px]">
                    {/* ID Package */}
                    <input
                        type="text"
                        placeholder="ID dịch vụ"
                        value={filters.id}
                        onChange={(e) => setFilters({ ...filters, id: e.target.value })}
                        className="px-4 py-2 border border-gray-300 rounded-sm text-sm focus:outline-none focus:ring-2 focus:ring-[#846adf] focus:border-transparent"
                    />

                    {/* Name Package */}
                    <input
                        type="text"
                        placeholder="Tên dịch vụ"
                        value={filters.name}
                        onChange={(e) => setFilters({ ...filters, name: e.target.value })}
                        className="px-4 py-2 border border-gray-300 rounded-sm text-sm focus:outline-none focus:ring-2 focus:ring-[#846adf] focus:border-transparent"
                    />

                    {/* Type */}
                    <select
                        value={filters.type}
                        onChange={(e) => setFilters({ ...filters, type: e.target.value })}
                        className="px-4 py-2 border border-gray-300 rounded-sm text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#846adf] focus:border-transparent font-medium"
                    >
                        <option value="">-- Trạng thái --</option>
                        <option value="active">Default</option>
                        <option value="inactive">Package</option>
                        <option value="inactive">Custome Comments</option>
                        <option value="inactive">Custome Comments Package</option>
                        <option value="inactive">Mentions Hashtag</option>
                        <option value="inactive">Subscriptions</option>
                        <option value="inactive">SEO</option>
                    </select>

                    {/* Status */}
                    <select
                        value={filters.status}
                        onChange={(e) => setFilters({ ...filters, status: e.target.value })}
                        className="px-4 py-2 border border-gray-300 rounded-sm text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#846adf] focus:border-transparent font-medium"
                    >
                        <option value="">-- Trạng thái --</option>
                        <option value="active">Hiển thị</option>
                        <option value="inactive">Ẩn</option>
                    </select>

                    {/* Parent Service */}
                    <select
                        value={filters.parent}
                        onChange={(e) => setFilters({ ...filters, parent: e.target.value })}
                        className="px-4 py-2 border border-gray-300 rounded-sm text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#846adf] focus:border-transparent font-medium"
                    >
                        <option value="">-- Chuyên mục cha --</option>
                        <option value="facebook">Dịch vụ Facebook</option>
                        <option value="youtube">Dịch vụ Youtube</option>
                        <option value="tiktok">Dịch vụ TikTok</option>
                    </select>
                </div>

                {/* Package Button */}
                <div className="flex items-center justify-between pb-6">
                    <div className='flex items-center gap-2'>
                        <button
                            onClick={handleSearch}
                            className="flex items-center gap-1 px-2 py-1 bg-[#846adf] hover:bg-[#7356d1] text-white rounded-sm text-xs! font-bold transition-colors duration-600 cursor-pointer"
                        >
                            <Search className="w-3.5 h-3.5" />
                            Tìm kiếm
                        </button>
                        <button
                            onClick={handleClearFilters}
                            className="flex items-center gap-1 px-2 py-1 bg-white text-red-600 border border-red-600 rounded-sm text-xs! font-bold transition-colors duration-600 cursor-pointer hover:bg-red-600 hover:text-white"
                        >
                            <TrashIcon className="w-3.5 h-3.5" />
                            Xóa bộ lọc
                        </button>
                    </div>

                    {/* Create Button */}
                    <Link
                        href="/admin/services/packages/add"
                        className="flex items-center gap-2 px-2 py-1.5 rounded-sm border text-sm font-medium transition-opacity duration-300 cursor-pointer bg-[#846adf]! text-white! hover:opacity-90"
                    >
                        <Plus className='w-3 h-3' />
                        <span className="mr-1 text-xs font-bold">
                            Thêm dịch vụ mới
                        </span>
                    </Link>
                </div>

                {/* Table */}
                <PackageServiceTable />

                {/* Pagination */}
                <div className="mt-6 flex items-center justify-between">
                    <div className="flex items-center gap-2 text-[13px] text-gray-800 font-medium">
                        <span className="font-medium">
                            Số lượng hiển thị:
                        </span>
                        <select
                            className="px-3 py-1 border border-gray-300 rounded-sm text-[13px] font-medium focus:outline-none focus:ring-2 focus:ring-[#846adf]"
                            defaultValue="10"
                        >
                            <option value="10">10</option>
                            <option value="25">25</option>
                            <option value="50">50</option>
                            <option value="100">100</option>
                        </select>
                        <span className="font-medium">trên tổng số {totalItems} Gói dịch vụ</span>
                    </div>

                    <div className="flex gap-1">
                        <button className="px-3 py-1 border border-gray-300 rounded text-[13px] hover:bg-gray-100">
                            Trước
                        </button>
                        <button className="px-3 py-1 bg-[#846adf] text-white rounded text-[13px]">
                            1
                        </button>
                        <button className="px-3 py-1 border border-gray-300 rounded text-[13px] hover:bg-gray-100">
                            2
                        </button>
                        <button className="px-3 py-1 border border-gray-300 rounded text-[13px] hover:bg-gray-100">
                            3
                        </button>
                        <button className="px-3 py-1 border border-gray-300 rounded text-[13px] hover:bg-gray-100">
                            Sau
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PackageServiceClient