"use client"

import { useState } from "react";

import {
    Ticket,
    Clock,
    MessageCircle,
    Search,
    RotateCcw,
    ChevronDown,
    Eye
} from 'lucide-react';

import Link from "next/link";

interface TicketItem {
    id: number;
    ticket: string;
    subject: string;
    user: string;
    email: string;
    status: string;
    replies: number;
    adminReplies: number;
    created: string;
    time: string;
}

function TicketsClient() {
    const tickets: TicketItem[] = [
        {
            id: 8,
            ticket: 'Không đăng nhập được',
            subject: 'Tài khoản',
            user: 'nguyenvana',
            email: 'vana@gmail.com',
            status: 'Đang mở',
            replies: 1,
            adminReplies: 0,
            created: '15/06/2025',
            time: '09:12',
        },
        {
            id: 7,
            ticket: 'Lỗi thanh toán MoMo',
            subject: 'Thanh toán',
            user: 'admin',
            email: 'admin@cmsnt.co',
            status: 'Đang mở',
            replies: 0,
            adminReplies: 0,
            created: '14/06/2025',
            time: '15:02',
        },
        {
            id: 6,
            ticket: 'Yêu cầu hủy Child Panel: test.com',
            subject: 'Child Panel',
            user: 'admin',
            email: 'admin@cmsnt.co',
            status: 'Chờ xử lý',
            replies: 2,
            adminReplies: 1,
            created: '13/06/2025',
            time: '18:23',
        },
        {
            id: 5,
            ticket: 'Không nhận được email kích hoạt',
            subject: 'Email',
            user: 'hoangtran',
            email: 'hoang@gmail.com',
            status: 'Đã trả lời',
            replies: 3,
            adminReplies: 2,
            created: '12/06/2025',
            time: '11:45',
        },
        {
            id: 4,
            ticket: 'Website load chậm',
            subject: 'Hiệu năng',
            user: 'minhnguyen',
            email: 'minh@gmail.com',
            status: 'Đang mở',
            replies: 1,
            adminReplies: 0,
            created: '11/06/2025',
            time: '22:10',
        },
        {
            id: 3,
            ticket: 'Sai số dư tài khoản',
            subject: 'Thanh toán',
            user: 'thanhle',
            email: 'thanh@gmail.com',
            status: 'Đã trả lời',
            replies: 4,
            adminReplies: 3,
            created: '10/06/2025',
            time: '08:30',
        },
        {
            id: 2,
            ticket: 'Không tạo được API key',
            subject: 'API',
            user: 'phamtuan',
            email: 'tuan@gmail.com',
            status: 'Chờ xử lý',
            replies: 0,
            adminReplies: 0,
            created: '09/06/2025',
            time: '16:55',
        },
        {
            id: 1,
            ticket: 'Yêu cầu nâng cấp gói dịch vụ',
            subject: 'Dịch vụ',
            user: 'linhpham',
            email: 'linh@gmail.com',
            status: 'Đã trả lời',
            replies: 2,
            adminReplies: 2,
            created: '08/06/2025',
            time: '13:20',
        },
    ];

    const [selectedTickets, setSelectedTickets] = useState<number[]>([]);

    const handleSelectAll = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.checked) {
            setSelectedTickets(tickets.map(t => t.id));
        } else {
            setSelectedTickets([]);
        }
    };

    const handleSelectTicket = (id: number) => {
        if (selectedTickets.includes(id)) {
            setSelectedTickets(selectedTickets.filter(tid => tid !== id));
        } else {
            setSelectedTickets([...selectedTickets, id]);
        }
    };

    return (
        <div className="p-6">
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                <div className="bg-white rounded-md p-6 shadow-sm">
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                            <Ticket className="w-6 h-6 text-purple-600" />
                        </div>
                        <div>
                            <div className="text-gray-500 text-sm">Tổng tickets</div>
                            <div className="text-2xl font-bold text-gray-800">2</div>
                        </div>
                    </div>
                </div>

                <div className="bg-white rounded-md p-6 shadow-sm">
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                            <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                                <div className="w-3 h-3 bg-white rounded-full"></div>
                            </div>
                        </div>
                        <div>
                            <div className="text-gray-500 text-sm">Đang mở</div>
                            <div className="text-2xl font-bold text-gray-800">2</div>
                        </div>
                    </div>
                </div>

                <div className="bg-white rounded-md p-6 shadow-sm">
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center">
                            <Clock className="w-6 h-6 text-yellow-600" />
                        </div>
                        <div>
                            <div className="text-gray-500 text-sm">Chờ xử lý</div>
                            <div className="text-2xl font-bold text-gray-800">0</div>
                        </div>
                    </div>
                </div>

                <div className="bg-white rounded-md p-6 shadow-sm">
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                            <MessageCircle className="w-6 h-6 text-blue-600" />
                        </div>
                        <div>
                            <div className="text-gray-500 text-sm">Đã trả lời</div>
                            <div className="text-2xl font-bold text-gray-800">0</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Filters Section */}
            <div className="bg-white rounded-md shadow-sm mb-4">
                <div className="flex flex-col items-start p-6  pb-6 border-b border-gray-200">
                    <span className="text-lg font-medium text-slate-800">
                        Danh sách yêu cầu hỗ trợ
                    </span>
                    <span className="text-[13px] text-gray-500">
                        Theo dõi và quản lý trạng thái các yêu cầu hỗ trợ của người dùng.
                    </span>
                </div>

                <div className="flex items-center justify-between gap-4 mb-4 px-6 pt-4">
                    <div className='w-full'>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Người dùng</label>
                        <input
                            type="text"
                            placeholder="Tên người dùng"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                        />
                    </div>

                    <div className='w-full'>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Tiêu đề</label>
                        <input
                            type="text"
                            placeholder="Tiêu đề ticket"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                        />
                    </div>

                    <div className='w-full'>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Trạng thái</label>
                        <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500">
                            <option>Tất cả</option>
                            <option>Đang mở</option>
                            <option>Chờ xử lý</option>
                            <option>Đã trả lời</option>
                        </select>
                    </div>

                    <div className='w-full'>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Danh mục</label>
                        <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500">
                            <option>Tất cả</option>
                        </select>
                    </div>

                    <div className='w-full'>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Thời gian</label>
                        <input
                            type="text"
                            placeholder="Chọn thời gian"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                        />
                    </div>

                    <div className="flex flex-col items-start gap-3 w-full pb-1">
                        <label className="block text-sm font-medium text-gray-700">Lọc nhanh</label>
                        <select className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 w-full">
                            <option>Tất cả</option>
                        </select>
                    </div>
                </div>

                <div className="flex gap-3 px-6 pb-6">
                    <button className="flex items-center gap-2 bg-[#846adf] hover:bg-purple-700 text-white px-4 py-2.5 rounded-md transition-colors cursor-pointer">
                        <Search className="w-4 h-4" />
                        <span className='text-[13px] font-medium'>Tìm kiếm</span>
                    </button>
                    <button className="flex items-center gap-2 hover:bg-cyan-500 hover:text-white text-cyan-500 px-4 py-2.5 rounded-md transition-colors border border-cyan-500 cursor-pointer">
                        <RotateCcw className="w-4 h-4" />
                        <span className='text-[13px] font-medium'>Đặt lại</span>
                    </button>
                </div>
            </div>

            {/* Table Controls */}
            <div className="flex items-center justify-between mb-4 mt-6">
                <div className="flex items-center gap-4">
                    <label className="flex items-center gap-2 text-sm text-gray-700">
                        <span>Số lượng hiển Thị:</span>
                        <select className="px-3 py-1 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500">
                            <option>10</option>
                            <option>25</option>
                            <option>50</option>
                            <option>100</option>
                        </select>
                    </label>
                </div>

                <div className="flex items-center gap-4">
                    <span className="text-sm text-gray-600">Hiển Thị 2 trong tổng số 2 kết quả</span>
                </div>
            </div>

            {/* Tickets Table */}
            <div className="bg-white rounded-md overflow-hidden border border-gray-200">
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead className="bg-slate-100 border-b border-gray-200">
                            <tr>
                                <th className="px-4 py-3 text-left">
                                    <input
                                        type="checkbox"
                                        onChange={handleSelectAll}
                                        checked={selectedTickets.length === tickets.length}
                                        className="w-4 h-4"
                                    />
                                </th>
                                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">ID</th>
                                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Ticket</th>
                                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Chủ đề</th>
                                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Người dùng</th>
                                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Trạng thái</th>
                                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Tin nhắn</th>
                                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Cập nhật</th>
                                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Thao tác</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                            {tickets.map((ticket) => (
                                <tr key={ticket.id} className="hover:bg-gray-50 transition-colors">
                                    <td className="px-4 py-3">
                                        <input
                                            type="checkbox"
                                            checked={selectedTickets.includes(ticket.id)}
                                            onChange={() => handleSelectTicket(ticket.id)}
                                            className="w-4 h-4"
                                        />
                                    </td>
                                    <td className="px-4 py-3">
                                        <span className="text-gray-800 font-bold">#{ticket.id}</span>
                                    </td>
                                    <td className="px-4 py-3 text-sm text-gray-800">{ticket.ticket}</td>
                                    <td className="px-4 py-3">
                                        <span className="inline-flex items-center gap-1 bg-cyan-100 text-cyan-700 px-3 py-1 rounded-full text-xs">
                                            <span>◆</span>
                                            <span>{ticket.subject}</span>
                                        </span>
                                    </td>
                                    <td className="px-4 py-3">
                                        <div className="flex items-center gap-2">
                                            <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-semibold">
                                                AD
                                            </div>
                                            <div>
                                                <div className="text-sm font-medium text-gray-800">{ticket.user}</div>
                                                <div className="text-xs text-gray-500">{ticket.email}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-4 py-3">
                                        <span className="inline-flex items-center bg-cyan-100 text-cyan-700 px-3 py-1 rounded-full text-xs font-medium">
                                            {ticket.status}
                                        </span>
                                    </td>
                                    <td className="px-4 py-3">
                                        <div className="flex items-center gap-2">
                                            <span className="inline-flex items-center justify-center w-6 h-6 bg-[#846adf] text-white rounded-full text-xs">
                                                {ticket.replies}
                                            </span>
                                            <span className="text-xs text-gray-600">Admin: {ticket.adminReplies}</span>
                                        </div>
                                    </td>
                                    <td className="px-4 py-3">
                                        <div className="text-sm text-gray-800">{ticket.created}</div>
                                        <div className="text-xs text-gray-500">{ticket.time}</div>
                                    </td>
                                    <td className="py-3">
                                        <div className="flex items-center">
                                            <Link
                                                href={"/admin/tickets/${ticket.id}"}
                                                className="p-2.25 flex items-center justify-center transition-colors bg-[#846adf]/20! hover:bg-[#846adf]! duration-300! group"
                                            >
                                                <Eye className="w-4 h-4 text-[#846adf]! group-hover:text-white! cursor-pointer" />
                                            </Link>
                                            <button className="p-2 transition-colors border border-purple-500 hover:bg-[#846adf] hover:text-white group hover:border-none cursor-pointer bg-white">
                                                <ChevronDown className="w-4 h-4 text-purple-600 group-hover:text-white" />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Table Footer */}
                <div className="border-t border-gray-200 px-4 py-3 bg-gray-50">
                    <div className="text-right text-sm text-gray-600 font-semibold">
                        Tổng cộng: 2 Tickets
                    </div>
                </div>
            </div>
        </div >
    )
}

export default TicketsClient