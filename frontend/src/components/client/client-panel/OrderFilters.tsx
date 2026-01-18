import { Search, CalendarIcon, Trash2 } from "lucide-react";
import { Calendar } from "@/components/common/ui/calendar";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/common/ui/popover";
import { Button } from "@/components/common/ui/button";

export default function OrderFilters() {
    return (
        <div className="bg-white rounded pt-1">
            <div className="grid grid-cols-1 px-4 mt-6 md:grid-cols-4 gap-4 ">
                <div className="relative">
                    <input
                        type="text"
                        placeholder="Mã đơn hàng"
                        className="w-full h-8 px-3 border border-gray-300 bg-gray-100 rounded focus:outline-none"
                    />
                </div>

                <div className="relative">
                    <input
                        type="text"
                        placeholder="ID dịch vụ"
                        className="w-full h-8 px-3 border border-gray-300 bg-gray-100 rounded focus:outline-none"
                    />
                </div>

                <div className="relative">
                    <input
                        type="text"
                        placeholder="Tên dịch vụ"
                        className="w-full h-8 px-3 border border-gray-300 bg-gray-100 rounded focus:outline-none"
                    />
                </div>

                <div className="relative">
                    <input
                        type="text"
                        placeholder="Liên kết"
                        className="w-full h-8 px-3 border border-gray-300 bg-gray-100 rounded focus:outline-none"
                    />
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 p-4 gap-4 mb-4">
                <div className="relative">
                    <select className="w-full h-8.5 px-3 border border-gray-300 bg-gray-100 rounded focus:outline-none">
                        <option value="all">-- Trạng thái --</option>
                        <option value="Hoàn thành">Hoàn thành</option>
                        <option value="Đang chờ">Đang chờ</option>
                        <option value="Đã hủy">Đã hủy</option>
                        <option value="Đang chạy">Đang chạy</option>
                    </select>
                </div>

                <div className="relative">
                    <Popover>
                        <PopoverTrigger asChild>
                            <Button
                                variant="outline"
                                className="w-full justify-start text-left font-normal bg-gray-100 border-gray-300 hover:bg-gray-100 text-sm px-3 h-8.5"
                            >
                                <CalendarIcon className="mr-2 h-4 w-4 shrink-0" />

                                <span className="truncate"></span>

                                <span className="text-gray-500 text-xs">
                                    Chọn thời gian cần tìm
                                </span>
                            </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                            <Calendar mode="range" numberOfMonths={2} />
                        </PopoverContent>
                    </Popover>
                </div>

                <div className="md:col-span-3 flex gap-2">
                    <button
                        className="bg-gray-900 text-white h-8.5 px-4 rounded hover:bg-gray-800 flex items-center gap-2 whitespace-nowrap"
                        type="button"
                    >
                        <Search size={16} />
                        Tìm kiếm
                    </button>
                    <button
                        className="bg-white text-black h-8.5 px-4 rounded border border-gray-300 hover:bg-gray-00 flex items-center gap-2 whitespace-nowrap"
                        type="button"
                    >
                        <Trash2 size={16} />
                        Bỏ lọc
                    </button>
                </div>
            </div>
        </div>
    );
}
