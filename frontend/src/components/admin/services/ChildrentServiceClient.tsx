"use client"

import { useState } from "react";

import Pagination from '@/components/common/ui/pagination';
import ChildrentServiceTable from '@/components/admin/services/ChildrentServiceTable';

import {
    Search,
    TrashIcon
} from 'lucide-react';

interface Filters {
    name: string;
    status: string;
    parent: string;
    api: string;
    time: string;
}

function ChildrentServiceClient() {

    const [filters, setFilters] = useState<Filters>({
        name: '',
        status: '',
        parent: '',
        api: '',
        time: ''
    });

    const handleSearch = () => {
        console.log('Searching with filters:', filters);
    };

    const handleClearFilters = () => {
        setFilters({
            name: '',
            status: '',
            parent: '',
            api: '',
            time: ''
        });
    };

    return (
        <div className="p-6">
            {/* Main Content */}
            <div className="bg-white p-6 rounded-md">
                {/* Filters & Search */}
                <div className="grid grid-cols-5 gap-4 mb-4 text-[13px]">
                    <input
                        type="text"
                        placeholder="Tên chuyên mục"
                        value={filters.name}
                        onChange={(e) => setFilters({ ...filters, name: e.target.value })}
                        className="px-4 py-2 border border-gray-300 rounded-sm text-sm focus:outline-none focus:ring-2 focus:ring-[#846adf] focus:border-transparent"
                    />

                    <select
                        value={filters.status}
                        onChange={(e) => setFilters({ ...filters, status: e.target.value })}
                        className="px-4 py-2 border border-gray-300 rounded-sm text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#846adf] focus:border-transparent font-medium"
                    >
                        <option value="">-- Trạng thái --</option>
                        <option value="active">Đang hoạt động</option>
                        <option value="inactive">Không hoạt động</option>
                    </select>

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

                    <select
                        value={filters.api}
                        onChange={(e) => setFilters({ ...filters, api: e.target.value })}
                        className="px-4 py-2 border border-gray-300 rounded-sm text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#846adf] focus:border-transparent font-medium"
                    >
                        <option value="">-- API Supplier --</option>
                        <option value="x999">https://x999.vn/</option>
                    </select>

                    <input
                        type="text"
                        placeholder="Chọn thời gian"
                        value={filters.time}
                        onChange={(e) => setFilters({ ...filters, time: e.target.value })}
                        className="px-4 py-2 border border-gray-300 rounded-sm text-sm focus:outline-none focus:ring-2 focus:ring-[#846adf] focus:border-transparent"
                    />
                </div>
                <div className="flex gap-2 pb-6">
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

                {/* Table */}
                <ChildrentServiceTable />

                {/* Pagination */}
                <div className="mt-6 flex items-center justify-between">
                    <div className="flex items-center gap-2 text-[13px] text-gray-800 font-medium">
                        <span className="font-medium">
                            Số lượng hiển thị:
                        </span>
                        <select
                            className="px-3 py-1 border border-gray-300 rounded-sm text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#846adf]"
                            defaultValue="10"
                        >
                            <option value="10">10</option>
                            <option value="25">25</option>
                            <option value="50">50</option>
                            <option value="100">100</option>
                        </select>
                        <span className="font-medium">trên tổng số 10 Chuyên mục con</span>
                    </div>

                    <Pagination />
                </div>
            </div>
        </div>
    )
}

export default ChildrentServiceClient