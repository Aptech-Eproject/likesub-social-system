

import {
    Check,
    Clock,
    HouseHeart,
    Plus,
    Search,
    Ticket,
    TicketCheck,
    Trash2
} from "lucide-react";

import { Input } from "@/components/common/ui/input";
import { DatePicker } from "@/components/common/ui/date-picker";
import { SupportRequestTable } from "@/components/common/ui/support-request-table";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/common/ui/select";

import UserSubHeader from "@/layouts/client/client-panel/UserSubHeader";
import ClientOnly from "@/components/common/ClientOnly";

function SupportRequestPage() {
    const titlePage = "yêu cầu hỗ trợ";

    return (
        <div>
            {/* Sub Header */}
            <UserSubHeader titlePage={titlePage} />

            {/* Main Content */}
            <div className="p-6 flex flex-col gap-6">
                {/* Statistic Cards */}
                <div className="flex items-center justify-between gap-6">
                    {/* Card 1 */}
                    <div className="flex items-start gap-5 bg-white shadow-sm p-4 rounded-sm h-20 w-full">
                        <div className="bg-[#e4e1f4] p-4 rounded-sm border border-gray-300">
                            <Ticket className="w-4 h-4" />
                        </div>
                        <div className="flex flex-col items-start justify-between h-full">
                            <span className="font-medium text-slate-800">
                                1
                            </span>
                            <span className="font-medium text-gray-400 text-[13px]">
                                Tổng tickets
                            </span>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="flex items-start gap-5 bg-white shadow-sm p-4 rounded-sm h-20 w-full">
                        <div className="bg-[#dff0fa] p-4 rounded-sm border border-gray-300">
                            <HouseHeart className="w-4 h-4 text-blue-400" />
                        </div>
                        <div className="flex flex-col items-start justify-between h-full">
                            <span className="font-medium text-slate-800">
                                1
                            </span>
                            <span className="font-medium text-gray-400 text-[13px]">
                                Đang mở
                            </span>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className="flex items-start gap-5 bg-white shadow-sm p-4 rounded-sm h-20 w-full">
                        <div className="bg-[#fff5db] p-4 rounded-sm border border-gray-300">
                            <Clock className="w-4 h-4 text-amber-400" />
                        </div>
                        <div className="flex flex-col items-start justify-between h-full">
                            <span className="font-medium text-slate-800">
                                1
                            </span>
                            <span className="font-medium text-gray-400 text-[13px]">
                                Chờ xử lý
                            </span>
                        </div>
                    </div>

                    {/* Card 4 */}
                    <div className="flex items-start gap-5 bg-white shadow-sm p-4 rounded-sm h-20 w-full">
                        <div className="bg-[#e3f7ed] p-4 rounded-sm border border-gray-300">
                            <Check className="w-4 h-4 text-green-400" />
                        </div>
                        <div className="flex flex-col items-start justify-between h-full">
                            <span className="font-medium text-slate-800">
                                1
                            </span>
                            <span className="font-medium text-gray-400 text-[13px]">
                                Đã trả lời
                            </span>
                        </div>
                    </div>
                </div>

                {/* Tickets List */}
                <div className="flex flex-col gap-4 bg-white shadow-sm">
                    {/* Table Tittle */}
                    <div className="flex items-center justify-between py-4 px-4 border-b border-gray-200">
                        <div className="flex items-center gap-4">
                            <TicketCheck className="w-5 h-5 text-slate-800" />
                            <span className="font-medium uppercase">
                                DANH SÁCH TICKETS
                            </span>
                        </div>
                        <button
                            className="flex items-center justify-center gap-2 text-white text-sm bg-amber-600 hover:bg-amber-700 transition-colors duration-300 py-2 px-4 rounded-sm cursor-pointer"
                        >
                            <Plus className="w-3 h-3" />
                            Tạo yêu cầu hỗ trợ mới
                        </button>
                    </div>

                    {/* Filter & Search */}
                    <div className="px-4 space-y-4">
                        {/* Row 1 */}
                        <div className="w-full flex items-center justify-between gap-4">
                            {/* Search Input */}
                            <Input
                                placeholder="Tìm theo tiêu đề"
                                className=""
                            />

                            {/* Select Input */}
                            <ClientOnly>
                                <Select>
                                    <SelectTrigger className="w-full shadow-none">
                                        <SelectValue placeholder="Trạng thái" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="all">
                                            Tất cả trạng thái
                                        </SelectItem>
                                        <SelectItem value="opening">
                                            Đang mở
                                        </SelectItem>
                                        <SelectItem value="waiting">
                                            Chờ xử lí
                                        </SelectItem>
                                        <SelectItem value="answered">
                                            Đã trả lời
                                        </SelectItem>
                                        <SelectItem value="closing">
                                            Đã đóng
                                        </SelectItem>
                                    </SelectContent>
                                </Select>
                            </ClientOnly>
                        </div>

                        {/* Row 2 */}
                        <div className="w-full flex items-center justify-between gap-4">
                            {/* Select Input */}
                            <ClientOnly>
                                <Select>
                                    <SelectTrigger className="w-full shadow-none">
                                        <SelectValue placeholder="Chủ đề" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="all">
                                            Tất cả chủ đề
                                        </SelectItem>
                                        <SelectItem value="top-up">
                                            Nạp tiền
                                        </SelectItem>
                                        <SelectItem value="account">
                                            Tài khoản
                                        </SelectItem>
                                        <SelectItem value="order">
                                            Đơn hàng
                                        </SelectItem>
                                        <SelectItem value="cancel-request">
                                            Yêu cầu hủy Child Panel
                                        </SelectItem>
                                        <SelectItem value="other">
                                            Khác
                                        </SelectItem>
                                    </SelectContent>
                                </Select>
                            </ClientOnly>

                            {/* Date Input */}
                            <DatePicker className="shadow-none" />
                        </div>

                        {/* Row 3 */}
                        <div className="flex items-center justify-start gap-4 w-full">
                            <button
                                className="bg-[#0f172a] flex items-center gap-2 py-2.5 px-4 rounded-sm cursor-pointer hover:bg-black/80"
                            >
                                <Search className="w-3.5 h-3.5 text-white" />
                                <span className="text-white text-sm font-medium">
                                    Tìm kiếm
                                </span>
                            </button>
                            <button
                                className="bg-slate-100 hover:bg-slate-200 flex items-center gap-2 py-2.5 px-4 rounded-sm cursor-pointer"
                            >
                                <Trash2 className="w-3 h-3" />
                                <span className="text-slate-800 text-sm font-medium">
                                    Bỏ lọc
                                </span>
                            </button>
                        </div>
                    </div>

                    {/* Table & Pagination */}
                    <SupportRequestTable />
                </div>
            </div>
        </div>
    )
}

export default SupportRequestPage