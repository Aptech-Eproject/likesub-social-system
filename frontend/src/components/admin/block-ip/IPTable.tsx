import React from 'react';
import { MapPinHouse, Trash2 } from 'lucide-react';

interface IPBanRecord {
    id: number;
    ipAddress: string;
    attempts: number;
    banned: boolean;
    reason: string;
    timestamp: string;
}

function IPTable() {
    const ipRecords: IPBanRecord[] = [
        {
            id: 1,
            ipAddress: '123.25.78.130',
            attempts: 20,
            banned: true,
            reason: 'Đăng nhập thất bại quá nhiều lần',
            timestamp: '2025-10-30 20:15:03'
        },
        {
            id: 2,
            ipAddress: '14.242.197.59',
            attempts: 20,
            banned: true,
            reason: 'Đăng nhập thất bại quá nhiều lần',
            timestamp: '2025-08-02 20:16:14'
        },
        {
            id: 3,
            ipAddress: '116.104.179.174',
            attempts: 20,
            banned: true,
            reason: 'Đăng nhập thất bại quá nhiều lần',
            timestamp: '2025-06-20 19:55:37'
        },
        {
            id: 4,
            ipAddress: '27.67.45.192',
            attempts: 15,
            banned: true,
            reason: 'Nghi ngờ tấn công brute force',
            timestamp: '2025-05-12 14:22:41'
        },
        {
            id: 5,
            ipAddress: '42.112.203.88',
            attempts: 12,
            banned: true,
            reason: 'Gửi request bất thường',
            timestamp: '2025-04-03 09:47:18'
        },
        {
            id: 6,
            ipAddress: '171.244.89.16',
            attempts: 8,
            banned: true,
            reason: 'Cảnh báo hoạt động đáng ngờ',
            timestamp: '2025-03-28 21:10:55'
        },
        {
            id: 7,
            ipAddress: '113.190.12.77',
            attempts: 25,
            banned: true,
            reason: 'Vi phạm chính sách bảo mật',
            timestamp: '2025-02-15 16:35:09'
        },
    ];

    return (
        <div className="overflow-hidden bg-white dark:divide-white/5 dark:bg-white/3">
            <div className="max-w-full overflow-x-auto">
                <div className="w-full">
                    <div className="bg-white rounded-sm shadow-sm overflow-hidden">
                        <div className="overflow-x-auto">
                            {/* Table */}
                            <table className="w-full">
                                {/* Header */}
                                <thead>
                                    <tr>
                                        <th className="px-6 py-3 text-left text-[13px] font-bold text-black whitespace-nowrap">
                                            Địa chỉ IP
                                        </th>
                                        <th className="px-4 py-3 text-center text-[13px] font-bold text-black whitespace-nowrap">
                                            Attempts
                                        </th>
                                        <th className="px-4 py-3 text-center text-[13px] font-bold text-black whitespace-nowrap">
                                            Banned
                                        </th>
                                        <th className="px-4 py-3 text-left text-[13px] font-bold text-black whitespace-nowrap">
                                            Lý do
                                        </th>
                                        <th className="px-4 py-3 text-left text-[13px] font-bold text-black whitespace-nowrap">
                                            Thời gian
                                        </th>
                                        <th className="px-4 py-3 text-center text-[13px] font-bold text-black whitespace-nowrap">
                                            Thao tác
                                        </th>
                                    </tr>
                                </thead>

                                {/* Body */}
                                <tbody>
                                    {ipRecords.map((record, idx) => (
                                        <tr
                                            key={record.id}
                                            className="hover:bg-gray-50 transition-colors odd:bg-gray-100"
                                        >
                                            <td className="px-6 py-3">
                                                <div className="flex items-center justify-start gap-2">
                                                    <MapPinHouse className="w-4 h-4 text-gray-400 cursor-move shrink-0" />
                                                    <span className="text-[13px] text-gray-800 font-medium">
                                                        {record.ipAddress}
                                                    </span>
                                                </div>
                                            </td>
                                            <td className="px-4 py-3">
                                                <div className='bg-[#49b6f5] flex items-center justify-center px-3 py-1 rounded-sm w-10 mx-auto'>
                                                    <span className="text-white text-sm font-bold">
                                                        {record.attempts}
                                                    </span>
                                                </div>
                                            </td>
                                            <td className="px-4 py-3">
                                                <div className='bg-[#E6533C] flex items-center justify-center px-3 py-1 rounded-sm w-15 mx-auto'>
                                                    <span className="text-white text-xs font-bold">
                                                        {record.banned && "Banned"}
                                                    </span>
                                                </div>
                                            </td>
                                            <td className="px-4 py-3">
                                                <span className="text-[13px] text-gray-800 font-semibold">
                                                    {record.reason}
                                                </span>
                                            </td>
                                            <td className="px-4 py-3">
                                                <span className="text-[13px] text-gray-800 font-medium">
                                                    {record.timestamp}
                                                </span>
                                            </td>
                                            <td className="px-4 py-3">
                                                <div className="flex items-center justify-center gap-2">
                                                    <button
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
                </div>
            </div>
        </div>
    );
}

export default IPTable;