"use client"

import { useState } from "react";

import {
    CircleX,
    Plus,
    Search
} from "lucide-react";

import UserTable from "@/components/admin/users/UserTable";
import AddUserFormModal from "./AddUserFormModal"

import Pagination from "@/components/common/ui/pagination";
import { Input } from "@/components/common/ui/input";
import { Label } from "@/components/common/ui/label";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue
} from "@/components/common/ui/select";

function UsersClient() {
    const [isShowAddUserFormModal, setIsShowAddUserFormModal] = useState(false);

    return (
        <>
            {/* Modal */}
            {isShowAddUserFormModal &&
                <AddUserFormModal
                    setIsShowAddUserFormModal={setIsShowAddUserFormModal}
                />
            }

            {/* Users */}
            <div className="bg-white rounded-md border border-gray-200">
                {/* Title Page */}
                <div className="px-6 py-4 flex items-center justify-between w-full border-b border-gray-200">
                    {/* Left Section - Title & Subtitle */}
                    <div className="flex flex-col items-start">
                        <span className="text-lg font-medium text-slate-800">
                            Danh sách thành viên
                        </span>
                        <span className="text-[13px] text-gray-500">
                            Theo dõi hoạt động và trạng thái của từng thành viên.
                        </span>
                    </div>

                    {/* Right Section - Add Button */}
                    <div className="relative flex items-center gap-4">
                        <button
                            onClick={() => setIsShowAddUserFormModal(!isShowAddUserFormModal)}
                            className="flex items-center gap-2 cursor-pointer text-white px-4 py-2 bg-[#0f172a] hover:opacity-80 transition-opacity duration-300 rounded-sm"
                        >
                            <Plus className="w-4 h-4 text-white" />
                            <span className="text-sm text-white font-medium">
                                Thêm thành viên
                            </span>
                        </button>
                    </div>
                </div>

                {/* Search & Filter */}
                <div className="flex flex-col items-start gap-4 py-3 px-6 border-b border-gray-200">
                    {/* Row 1 - Search Input */}
                    <div className="w-full mt-2 relative flex items-center justify-between gap-4 text-sm!">
                        {/* User ID */}
                        <div className="grid w-full items-center gap-3">
                            <Input
                                type="number"
                                id="id"
                                placeholder="ID thành viên"
                                className="shadow-none"
                            />
                        </div>

                        {/* User Username */}
                        <div className="grid w-full items-center gap-3">
                            <Input
                                type="text"
                                id="username"
                                placeholder="Tên thành viên"
                                className="shadow-none"
                            />
                        </div>

                        {/* User Fullname */}
                        <div className="grid w-full items-center gap-3">
                            <Input
                                type="text"
                                id="fullname"
                                placeholder="Họ và tên"
                                className="shadow-none"
                            />
                        </div>

                        {/* User Email */}
                        <div className="grid w-full items-center gap-3">
                            <Input
                                type="email"
                                id="email"
                                placeholder="Email thành viên"
                                className="shadow-none"
                            />
                        </div>

                        {/* User Phone */}
                        <div className="grid w-full items-center gap-3">
                            <Input
                                type="number"
                                id="phone"
                                placeholder="SĐT thành viên"
                                className="shadow-none"
                            />
                        </div>

                        {/* User IP Address */}
                        <div className="grid w-full items-center gap-3">
                            <Input
                                type="text"
                                id="address"
                                placeholder="Địa chỉ IP"
                                className="shadow-none"
                            />
                        </div>
                    </div>

                    {/* Row 2 - Filter Select & Action Buttons */}
                    <div className="relative flex items-center justify-between gap-4 text-sm!">
                        {/* Trạng thái */}
                        <div className="grid w-full items-center gap-3">
                            <Select>
                                <SelectTrigger className="w-full shadow-none">
                                    <SelectValue placeholder="Trạng thái" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectLabel>
                                            Trạng thái
                                        </SelectLabel>
                                        <SelectItem value="Apple">Đã bị chặn</SelectItem>
                                        <SelectItem value="IOS">Đang hoạt động</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        </div>

                        {/* Vai trò */}
                        <div className="grid w-full items-center gap-3">
                            <Select>
                                <SelectTrigger className="w-full shadow-none">
                                    <SelectValue placeholder="Vai trò" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectLabel>
                                            Vai trò
                                        </SelectLabel>
                                        <SelectItem value="Apple">Admin</SelectItem>
                                        <SelectItem value="IOS">Người dùng</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        </div>

                        {/* Balance Sorting */}
                        <div className="grid w-full items-center gap-3">
                            <Select>
                                <SelectTrigger className="w-full shadow-none">
                                    <SelectValue placeholder="Sắp xếp số dư" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectLabel>
                                            Sắp xếp số dư
                                        </SelectLabel>
                                        <SelectItem value="ascending">Tăng dần</SelectItem>
                                        <SelectItem value="descending">Giảm dần</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        </div>

                        {/* Deposit Sorting */}
                        <div className="grid w-full items-center gap-3">
                            <Select>
                                <SelectTrigger className="w-full shadow-none">
                                    <SelectValue placeholder="Sắp xếp tổng nạp" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectLabel>
                                            Sắp xếp tổng nạp
                                        </SelectLabel>
                                        <SelectItem value="ascending">Tăng dần</SelectItem>
                                        <SelectItem value="descending">Giảm dần</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        </div>

                        {/* Discount Sorting */}
                        <div className="grid w-full items-center gap-3">
                            <Select>
                                <SelectTrigger className="w-full shadow-none">
                                    <SelectValue placeholder="Sắp xếp chiết khấu" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectLabel>
                                            Sắp xếp chiết khấu
                                        </SelectLabel>
                                        <SelectItem value="ascending">Tăng dần</SelectItem>
                                        <SelectItem value="descending">Giảm dần</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        </div>

                        {/* Buttons */}
                        <div className="flex w-full items-center gap-2">
                            {/* Search Button */}
                            <button
                                className="min-w-30 flex items-center gap-2 cursor-pointer text-white px-4 py-2 bg-[#0f172a] hover:opacity-80 transition-opacity duration-300 rounded-sm"
                            >
                                <Search className="w-4 h-4 text-white" />
                                <span className="text-sm text-white font-medium">
                                    Tìm kiếm
                                </span>
                            </button>

                            {/* Clear Filter Button */}
                            <button
                                className="min-w-28 flex items-center gap-2 cursor-pointer text-white px-4 py-2 bg-[#e6533c] hover:opacity-80 transition-opacity duration-300 rounded-sm"
                            >
                                <CircleX className="w-4 h-4 text-white" />
                                <span className="text-sm text-white font-medium">
                                    Làm mới
                                </span>
                            </button>
                        </div>
                    </div>

                    {/* Row 3 - Filter by Date (Select) */}
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
                                        <SelectItem value="5000">5000</SelectItem>
                                        <SelectItem value="10000">10.000</SelectItem>
                                        <SelectItem value="12000">15.000</SelectItem>
                                        <SelectItem value="20000">20.000</SelectItem>
                                        <SelectItem value="30000">30.000</SelectItem>
                                        <SelectItem value="40000">40.000</SelectItem>
                                        <SelectItem value="50000">50.000</SelectItem>
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
                <UserTable />

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

                    {/* Pagination */}
                    <Pagination />
                </div>
            </div>
        </>
    )
}

export default UsersClient