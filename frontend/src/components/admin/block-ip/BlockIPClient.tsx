"use client"

import {
    CircleX,
    Plus,
    Search
} from "lucide-react";

import IPTable from "@/components/admin/block-ip/IPTable";

import { Input } from "@/components/common/ui/input";
import { Label } from "@/components/common/ui/label";
import { DatePicker } from "@/components/common/ui/date-picker";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue
} from "@/components/common/ui/select";
import { useState } from "react";
import AddIPFormModal from "./AddIPFormModal";

function BlockIPClient() {
    const [isShowAddIPFormModal, setIsShowAddIPFormModal] = useState(false);

    return (
        <>
            {/* Modal */}
            {
                isShowAddIPFormModal &&
                <AddIPFormModal
                    setIsShowAddIPFormModal={setIsShowAddIPFormModal}
                />
            }

            <div className="p-6 w-full flex flex-col gap-6">
                {/* Users */}
                <div className="bg-white rounded-md border border-gray-200">
                    {/* Title Page */}
                    <div className="px-6 py-4 flex items-center justify-between w-full border-b border-gray-200">
                        {/* Left Section - Title */}
                        <div className="flex flex-col items-start">
                            <span className="text-lg font-medium text-slate-800">
                                Danh sách IP bị chặn
                            </span>
                        </div>

                        {/* Right Section - Add Button */}
                        <div className="relative flex items-center gap-4">
                            <button
                                onClick={() => setIsShowAddIPFormModal(!isShowAddIPFormModal)}
                                className="flex items-center gap-2 cursor-pointer text-white px-2.5 py-2 bg-[#846adf] hover:opacity-90 transition-opacity duration-300 rounded-sm"
                            >
                                <Plus className="w-4 h-4 text-white" />
                                <span className="text-[13px] text-white font-bold">
                                    Thêm IP cần block
                                </span>
                            </button>
                        </div>
                    </div>

                    {/* Search & Filter */}
                    <div className="flex flex-col items-start gap-4 py-3 px-6 border-b border-gray-200">
                        {/* Row 1 - Search Input */}
                        <div className="w-full mt-2 relative flex items-center gap-4 text-sm!">
                            {/* Search IP Address */}
                            <div className="grid items-center gap-3">
                                <Input
                                    type="text"
                                    id="address"
                                    placeholder="Tìm IP"
                                    className="shadow-none w-60"
                                />
                            </div>

                            {/* Date Input */}
                            <DatePicker className="max-w-60" />

                            {/* Buttons */}
                            <div className="flex w-full items-center gap-2">
                                {/* Search Button */}
                                <button
                                    className="flex items-center gap-1 cursor-pointer text-white px-2.5 py-2 bg-[#846adf] hover:opacity-90 transition-opacity duration-300 rounded-sm"
                                >
                                    <Search className="w-4 h-4 text-white" />
                                    <span className="text-[13px] text-white font-bold">
                                        Tìm kiếm
                                    </span>
                                </button>

                                {/* Clear Filter Button */}
                                <button
                                    className="flex items-center gap-1 cursor-pointer text-white px-2.5 py-2 bg-[#e6533c] hover:opacity-80 transition-opacity duration-300 rounded-sm"
                                >
                                    <CircleX className="w-4 h-4 text-white" />
                                    <span className="text-[13px] text-white font-bold">
                                        Xoá bộ lọc
                                    </span>
                                </button>
                            </div>
                        </div>

                        {/* Row 2 - Filter by Date (Select) */}
                        <div className="my-2 w-full flex items-center justify-between text-sm!">
                            {/* Filter Select - Show Quantity */}
                            <div className="flex items-center gap-3">
                                <Label className="w-full" htmlFor="brand">
                                    Số lượng hiển thị:
                                </Label>
                                <Select>
                                    <SelectTrigger className="min-w-26 shadow-none">
                                        <SelectValue placeholder="10" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectGroup>
                                            <SelectLabel>
                                                Show
                                            </SelectLabel>
                                            <SelectItem value="5">5</SelectItem>
                                            <SelectItem value="10">10</SelectItem>
                                            <SelectItem value="20">20</SelectItem>
                                            <SelectItem value="50">50</SelectItem>
                                            <SelectItem value="100">100</SelectItem>
                                            <SelectItem value="500">500</SelectItem>
                                            <SelectItem value="1000">1.000</SelectItem>
                                        </SelectGroup>
                                    </SelectContent>
                                </Select>
                            </div>

                            <div className="flex-1 bg-red-300" />

                            {/* Filter Select - Sort by Date */}
                            <div className="flex items-center gap-3">
                                <Label className="w-full" htmlFor="brand">
                                    Sắp xếp theo ngày:
                                </Label>
                                <Select>
                                    <SelectTrigger className="min-w-26 shadow-none">
                                        <SelectValue placeholder="Tất cả" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectGroup>
                                            <SelectLabel>
                                                Sort by Date
                                            </SelectLabel>
                                            <SelectItem value="All">Tất cả</SelectItem>
                                            <SelectItem value="Hôm nay">Hôm nay</SelectItem>
                                            <SelectItem value="Hôm qua">Hôm qua</SelectItem>
                                            <SelectItem value="Tuần này">Tuần này</SelectItem>
                                            <SelectItem value="Tháng này">Tháng này</SelectItem>
                                        </SelectGroup>
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>
                    </div>

                    {/* Table */}
                    <IPTable />

                    {/* Bottom Table */}
                    <div className="flex items-center justify-between py-4 px-6 border-t border-gray-200">
                        <div className="flex items-center gap-1 text-xs font-medium">
                            <span className="text-gray-500">Showing</span>
                            <span className="text-slate-800">1</span>
                            <span className="text-gray-500">to</span>
                            <span className="text-slate-800">7</span>
                            <span className="text-gray-500">of</span>
                            <span className="text-slate-800">20</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BlockIPClient