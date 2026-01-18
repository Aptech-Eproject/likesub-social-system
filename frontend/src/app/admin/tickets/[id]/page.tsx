import {
    Send,
    Calendar,
    Clock,
    User,
    Tag,
    MessageCircle,
    CircleQuestionMark,
    Clock2,
} from 'lucide-react';

import ScrollToTop from '@/components/common/ScrollToTop';
import AdminSubHeader from '@/layouts/admin/AdminSubHeader';
import { confirmAction } from '@/lib/alert';
import TicketDetailActions from '@/components/admin/tickets/TicketDetailActions';

interface LayoutProps {
    params: {
        id: string;
    };
}

async function Page({ params }: LayoutProps) {
    const { id } = await params;

    const titlePage = "thông tin yêu cầu hỗ trợ";
    const prevTitle = "danh sách yêu cầu hỗ trợ";
    const urlPrevTitle = `/admin/tickets`

    const ticketData = {
        id: 7,
        status: 'Đang mở',
        title: 'tttt',
        category: 'Tài khoản',
        priority: 'Thường',
        createdDate: '14/06/2025',
        createdTime: '15:02',
        updatedDate: '15/06/2025',
        updatedTime: '7 tháng trước',
        customer: {
            name: 'admin',
            email: 'admin@cmsnt.co',
            rank: 'Diamond',
            balance: '8.002.410',
            spending: '11.856',
            orders: 6,
            tickets: 2
        },
        conversation: [
            {
                user: 'admin',
                role: 'Nội dung ban đầu',
                message: 'adfafa',
                time: '15:02 14/06/2025',
                avatar: 'AD'
            }
        ]
    };

    return (
        <>
            {/* Auto scroll to top */}
            <ScrollToTop />

            {/* Page Breadcrumb */}
            <AdminSubHeader
                titlePage={titlePage}
                prevTitle={prevTitle}
                urlPrevTitle={urlPrevTitle}
            />

            <div className="p-6">
                <div className="max-w-7xl mx-auto">
                    <div className="flex gap-6">
                        {/* Main Content - Conversation */}
                        <div className="flex-1 min-w-2xl! min-h-screen">
                            {/* Call Status Banner */}
                            <div className="bg-[#846adf] text-white px-6 py-6 shadow-md rounded-t-md!">
                                <div className="flex items-center gap-2">
                                    <MessageCircle className="w-5 h-5 animate-pulse text-white" />
                                    <span className="font-bold text-white text-[16px]">Cuộc hội thoại</span>
                                </div>
                            </div>

                            {/* Conversation Messages */}
                            <div className="bg-slate-50 min-h-90 shadow-md p-6 pb-40">
                                {ticketData.conversation.map((msg, index) => (
                                    <div key={index} className="flex gap-4 mb-6">
                                        <div className="shrink-0">
                                            <div className="w-12 h-12 bg-blue-500 rounded-md flex items-center justify-center text-white font-bold">
                                                {msg.avatar}
                                            </div>
                                        </div>
                                        <div className="flex-1">
                                            <div className="flex items-center gap-3 mb-2">
                                                <span className="font-semibold text-blue-500">{msg.user}</span>
                                                <span className="px-3 py-1 bg-gray-800 text-white text-xs rounded-sm">
                                                    {msg.role}
                                                </span>
                                                <span className="text-[13px] font-medium text-gray-500 ml-auto">
                                                    {msg.time}
                                                </span>
                                            </div>
                                            <div className="bg-white border border-gray-200 rounded-md shadow-md p-4 text-[13px]">
                                                <p className="text-gray-700">{msg.message}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Reply Box */}
                            <div className="bg-white rounded-b-md shadow-md p-6 border-t border-gray-200">
                                <textarea
                                    placeholder="Nhập phản hồi của bạn..."
                                    className="w-full min-h-30 p-3 border-2 border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-300 resize-none"
                                />
                                <div className="flex items-center justify-between mt-3">
                                    <div className="text-sm flex text-gray-500 items-center gap-2">
                                        <CircleQuestionMark className='w-3 h-3' />
                                        <span className='text-gray-700 font-medium'>Phím tắt gợi nhắnh:</span>
                                        <kbd className="px-2 py-1 bg-gray-100 font-bold text-gray-800 border border-gray-300 rounded text-xs">⌘</kbd>
                                        <span>+</span>
                                        <kbd className="px-2 py-1 bg-gray-100 font-bold text-gray-800 border border-gray-300 rounded text-xs">Enter</kbd>
                                        <span>hoặc</span>
                                        <kbd className="px-2 py-1 bg-gray-100 border border-gray-300 rounded text-xs">Ctrl</kbd>
                                        <span>+</span>
                                        <kbd className="px-2 py-1 bg-gray-100 border border-gray-300 rounded text-xs">Enter</kbd>
                                    </div>
                                    <button
                                        className="px-4 py-2 bg-[#846adf] hover:opacity-80 text-white rounded-md flex items-center gap-2 transition-colors cursor-pointer text-[13px]"
                                    >
                                        <Send className="w-3 h-3" />
                                        Gửi
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Sidebar - Ticket Info */}
                        <div className="space-y-6 w-full">
                            {/* Ticket Information */}
                            <div className="bg-white rounded-md shadow-md overflow-hidden">
                                {/* Header */}
                                <div className="bg-linear-to-r bg-amber-600 to-amber-600 text-white p-4 font-medium flex items-center gap-2">
                                    <Tag className="w-4 h-4 text-white animate-pulse" />
                                    <span className='text-[16px] font-bold'>
                                        Thông tin ticket
                                    </span>
                                </div>

                                {/* Ticker Info */}
                                <div className="px-6 py-8 space-y-4">
                                    <div className="flex items-center gap-4">
                                        <span className="text-blue-400 font-bold text-sm">#{ticketData.id}</span>
                                        <span className="px-2 py-1 bg-cyan-100 text-cyan-600 font-bold text-xs rounded-sm">
                                            {ticketData.status}
                                        </span>
                                    </div>

                                    <div>
                                        <h3 className="text-sm font-bold text-gray-400 mb-1">Tiêu đề</h3>
                                        <p className="text-gray-800 font-bold">{ticketData.title}</p>
                                    </div>

                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <h3 className="text-sm font-bold text-gray-400 mb-1">Danh mục</h3>
                                            <span className="inline-block px-2 py-1 bg-blue-100 text-blue-400 text-xs font-bold rounded-sm">
                                                {ticketData.category}
                                            </span>
                                        </div>
                                        <div>
                                            <h3 className="text-sm font-bold text-gray-400 mb-1">Ưu tiên</h3>
                                            <span className="inline-block px-2 py-1 bg-orange-100 text-orange-700 text-xs rounded-sm">
                                                {ticketData.priority}
                                            </span>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <h3 className="text-sm font-bold text-gray-400 mb-1 flex items-center gap-1">
                                                Ngày tạo
                                            </h3>
                                            <div className='flex items-center gap-2 pt-1'>
                                                <Calendar className="w-3.5 h-3.5 text-purple-500" />
                                                <div className='flex flex-col gap-1'>
                                                    <p className="text-gray-600 font-bold text-[13px]">
                                                        {ticketData.createdDate}
                                                    </p>
                                                    <p className="text-xs text-gray-400 font-bold">
                                                        {ticketData.createdTime}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <h3 className="text-sm font-medium text-gray-600 mb-1 flex items-center gap-1">
                                                Cập nhật
                                            </h3>
                                            <div className='flex items-center gap-2 pt-1'>
                                                <Clock className="w-3.5 h-3.5 text-green-500" />
                                                <div className='flex flex-col gap-1'>
                                                    <p className="text-gray-600 font-bold text-[13px]">
                                                        {ticketData.updatedDate}
                                                    </p>
                                                    <p className="text-xs text-gray-400 font-bold">
                                                        {ticketData.updatedTime}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Customer Information */}
                            <div className="bg-white pb-2 rounded-md shadow-md overflow-hidden">
                                {/* Header */}
                                <div className="bg-linear-to-r bg-amber-600 to-amber-600 text-white p-4 font-medium flex items-center gap-2">
                                    <User className="w-4 h-4 text-white animate-pulse" />
                                    <span className='font-bold text-[16px]'>
                                        Thông tin khách hàng
                                    </span>
                                </div>

                                <div className="p-6 space-y-4">
                                    {/* Info User */}
                                    <div className="flex items-center gap-3 mb-6">
                                        <div className="w-12 h-12 bg-blue-500 rounded-md flex items-center justify-center text-white font-bold text-lg">
                                            AD
                                        </div>
                                        <div className='flex flex-col gap-1'>
                                            <h3 className="flex items-center gap-3 font-semibold text-gray-800 mb-0.5">
                                                {ticketData.customer.name}

                                                <span className="flex items-center justify-center gap-1 py-1 px-3 bg-slate-100 text-cyan-600 font-bold text-xs rounded-sm mt-1">
                                                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                    </svg>
                                                    {ticketData.customer.rank}
                                                </span>
                                            </h3>
                                            <p className="text-[13px] text-gray-500">
                                                {ticketData.customer.email}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Row 1 - Balance & Spending Cards */}
                                    <div className="grid grid-cols-2 gap-3">
                                        <div className="bg-[#f8fafc] p-3 rounded-sm text-center border border-gray-300">
                                            <p className="text-xl font-bold text-[#846adf]">
                                                {ticketData.customer.balance}
                                            </p>
                                            <p className="text-xs font-medium text-gray-500 mt-1">
                                                Số dư hiện tại
                                            </p>
                                        </div>
                                        <div className="bg-[#f8fafc] p-3 rounded-sm text-center border border-gray-300">
                                            <p className="text-xl font-bold text-green-600">
                                                {ticketData.customer.spending}
                                            </p>
                                            <p className="text-xs font-medium text-gray-500 mt-1">
                                                Tổng chi tiêu
                                            </p>
                                        </div>
                                    </div>

                                    {/* Row 2 - Orders & Tickets Card */}
                                    <div className="grid grid-cols-2 gap-3">
                                        <div className="bg-[#f8fafc] p-3 rounded-sm text-center border border-gray-300">
                                            <p className="text-xl font-bold text-cyan-600">
                                                {ticketData.customer.orders}
                                            </p>
                                            <p className="text-xs font-medium text-gray-500 mt-1">
                                                Đơn hàng
                                            </p>
                                        </div>
                                        <div className="bg-[#f8fafc] p-3 rounded-sm text-center border border-gray-300">
                                            <p className="text-xl font-bold text-amber-600">
                                                {ticketData.customer.tickets}
                                            </p>
                                            <p className="text-xs font-medium text-gray-500 mt-1">
                                                Tickets
                                            </p>
                                        </div>
                                    </div>

                                    {/* History Activity  */}
                                    <div className="pt-3 pb-1">
                                        <h4 className="text-sm font-bold text-gray-500 mb-1">
                                            Hoạt động cuối
                                        </h4>
                                        <p className="flex items-center gap-2 text-xs text-gray-500">
                                            <Clock2 className='w-3 h-3' />
                                            Chưa có hoạt động gần đây
                                        </p>
                                    </div>

                                    {/* User Actions */}
                                    <TicketDetailActions id={id} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Page;