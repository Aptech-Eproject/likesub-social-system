import { useState } from "react";
import { confirmAction } from "@/lib/alert";
import Link from 'next/link';

import {
    Menu,
    Edit2,
    Trash2,
    GripVertical,
} from 'lucide-react';

interface ChildService {
    id: number;
    name: string;
    parent: string;
    api: string;
    packages: number;
    status: boolean;
    date: string;
}

function ChildrentServiceTable() {
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [selectedItems, setSelectedItems] = useState<number[]>([]);

    const totalItems = 168;
    const itemsPerPage = 10;

    const childServices: ChildService[] = [
        { id: 1, name: 'Youtube | Likes - Country Targeted - SV1', parent: 'Dịch vụ Youtube', api: 'https://x999.vn/', packages: 39, status: true, date: '2025-10-21 08:25:54' },
        { id: 2, name: 'Youtube | Comments', parent: 'Dịch vụ Youtube', api: 'https://x999.vn/', packages: 15, status: true, date: '2025-10-21 08:25:54' },
        { id: 3, name: 'Youtube | Comment - SV1', parent: 'Dịch vụ Youtube', api: 'https://x999.vn/', packages: 22, status: true, date: '2025-10-21 08:25:54' },
        { id: 4, name: 'Youtube | Comments - Created by AI 🤖', parent: 'Dịch vụ Youtube', api: 'https://x999.vn/', packages: 17, status: true, date: '2025-10-21 08:25:54' },
        { id: 5, name: 'Youtube | LiveStream - Pre-Premiere', parent: 'Dịch vụ Youtube', api: 'https://x999.vn/', packages: 2, status: true, date: '2025-10-21 08:25:54' },
        { id: 6, name: 'Youtube | LiveStream - Cheap', parent: 'Dịch vụ Youtube', api: 'https://x999.vn/', packages: 8, status: true, date: '2025-10-21 08:25:54' },
        { id: 7, name: 'Youtube | LiveStream - Best For Ranking Live', parent: 'Dịch vụ Youtube', api: 'https://x999.vn/', packages: 9, status: true, date: '2025-10-21 08:25:54' },
        { id: 8, name: 'Youtube | LiveStream - SV1', parent: 'Dịch vụ Youtube', api: 'https://x999.vn/', packages: 8, status: true, date: '2025-10-21 08:25:54' },
        { id: 9, name: 'Youtube | LiveStream - SV2', parent: 'Dịch vụ Youtube', api: 'https://x999.vn/', packages: 9, status: true, date: '2025-10-21 08:25:54' },
        { id: 10, name: 'Youtube | LiveStream - SV3', parent: 'Dịch vụ Youtube', api: 'https://x999.vn/', packages: 8, status: true, date: '2025-10-21 08:25:54' }
    ];

    const customStyles = {
        container: 'border-radius: 12px; padding: 1.5rem;',
        title: 'font-size: 1.25rem; font-weight: 600; color: #1f2937; margin-bottom: 0.5rem;',
        text: 'font-size: 0.95rem; color: #4b5563; line-height: 1.5;',
        warningBox: 'margin-top: 1rem; padding: 0.75rem; border-radius: 8px; font-size: 0.875rem; display: flex; align-items: start; gap: 8px;'
    };

    const showDeleteChildServiceWarningAlert = async (id: number) => {
        const result = await confirmAction({
            title: '<span style="' + customStyles.title + '">Cảnh báo</span>',
            html: `
                <div style="${customStyles.text}">
                    Bạn có chắc chắn muốn xóa chuyên mục con ID ${id} này không?
                </div>
                <div style="${customStyles.warningBox} background-color: #fef2f2; color: #991b1b; border: 1px solid #fee2e2;">
                    <span>⚠️</span>
                    <span>Hành động này mang tính vĩnh viễn và không thể hoàn tác.</span>
                </div>
            `,
        });

        if (result.isConfirmed) console.log("Resetting deposits...");
    };

    return (
        <div className="bg-white rounded-sm shadow-sm overflow-hidden mt-6">
            <div className="overflow-x-auto">
                <table className="w-full">
                    <thead className="">
                        <tr>
                            <th className="px-4 py-3 text-left text-[13px] font-bold text-black whitespace-nowrap">Tên chuyên mục</th>
                            <th className="pr-20 py-3 text-left! text-[13px] font-bold text-black whitespace-nowrap">Chuyên mục cha</th>
                            <th className="px-4 py-3 text-left text-[13px] font-bold text-black whitespace-nowrap">API</th>
                            <th className="px-4 py-3 text-center text-[13px] font-bold text-black whitespace-nowrap">Số gói dịch vụ</th>
                            <th className="px-4 py-3 text-center text-[13px] font-bold text-black whitespace-nowrap">Trạng thái</th>
                            <th className="px-4 py-3 text-center text-[13px] font-bold text-black whitespace-nowrap">Thao tác</th>
                        </tr>
                    </thead>
                    <tbody>
                        {childServices.map((service, idx) => (
                            <tr
                                key={service.id}
                                className="hover:bg-gray-50 transition-colors odd:bg-gray-100"
                            >
                                <td className="px-4 py-3">
                                    <div className="flex items-center gap-2">
                                        <GripVertical className="w-4 h-4 text-gray-400 cursor-move shrink-0" />
                                        <span className="text-[13px] text-gray-800 font-bold">
                                            {service.name}
                                        </span>
                                    </div>
                                </td>
                                <td className="">
                                    <span className="inline-block px-2 py-1 text-[#846adf] text-[10px] font-bold rounded-sm border border-[#846adf]">
                                        {service.parent}
                                    </span>
                                </td>
                                <td className="px-4 py-3">
                                    <span className="inline-block px-3 py-1 bg-white text-gray-700 text-xs font-bold rounded border border-gray-300">
                                        {service.api}
                                    </span>
                                </td>
                                <td className="px-4 py-3 text-center">
                                    <span className="text-xs! font-bold text-gray-800">
                                        {service.packages}
                                    </span>
                                </td>
                                <td className="px-4 py-3">
                                    <div className="flex justify-center">
                                        <button
                                            className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-200 ease-in-out focus:outline-none cursor-pointer ${service.status ? 'bg-[#846adf]' : 'bg-gray-300'
                                                }`}
                                        >
                                            <span
                                                className={`inline-block h-5 w-5 transform rounded-full bg-white transition-transform duration-200 ease-in-out ${service.status ? 'translate-x-5' : 'translate-x-0.5'
                                                    }`}
                                            />
                                        </button>
                                    </div>
                                </td>
                                <td className="px-4 py-3">
                                    <div className="flex items-center justify-center gap-2">
                                        <Link
                                            href="/admin/services/packages"
                                            className="p-2 bg-[#846adf]! hover:bg-[#7356d1] text-white! rounded transition-colors cursor-pointer"
                                            title="Chi tiết"
                                        >
                                            <Menu className="w-4 h-4" />
                                        </Link>
                                        <Link
                                            href={`/admin/services/children/edit/${service.id}`}
                                            className="p-2 bg-[#49b6f5]! hover:bg-[#3aa5e3] text-white! rounded transition-colors cursor-pointer"
                                            title="Sửa"
                                        >
                                            <Edit2 className="w-4 h-4" />
                                        </Link>
                                        <button
                                            onClick={() => showDeleteChildServiceWarningAlert(service.id)}
                                            className="p-2 bg-red-600 hover:bg-red-700 text-white rounded transition-colors cursor-pointer"
                                            title="Xóa"
                                        >
                                            <Trash2 className="w-4 h-4" />
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ChildrentServiceTable