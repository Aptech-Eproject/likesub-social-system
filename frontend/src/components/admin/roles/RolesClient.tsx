"use client"

import {
    Plus,
    Search,
} from "lucide-react";

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
import RoleTable from "@/components/admin/roles/RoleTable";
import { useRouter } from "next/navigation";

function RolesClient() {
    const router = useRouter();

    return (
        <div className="p-6 w-full flex flex-col gap-6">
            {/* Users */}
            <div className="bg-white rounded-md border border-gray-200">
                {/* Title Page */}
                <div className="px-6 py-4 flex items-center justify-between w-full border-b border-gray-200">
                    {/* Left Section - Title */}
                    <div className="flex flex-col items-start">
                        <span className="text-lg font-medium text-slate-800">
                            Danh sách role
                        </span>
                    </div>

                    {/* Right Section - Add Button */}
                    <div className="relative flex items-center gap-4">
                        <button
                            onClick={() => router.push("/admin/roles/add")}
                            className="flex items-center gap-2 cursor-pointer text-white px-2.5 py-2 bg-[#846adf] hover:opacity-90 transition-opacity duration-300 rounded-sm"
                        >
                            <Plus className="w-4 h-4 text-white" />
                            <span className="text-[13px] text-white font-bold">
                                Tạo một role mới
                            </span>
                        </button>
                    </div>
                </div>

                {/* Search & Filter */}
                <div className="flex flex-col items-start gap-4 py-3 px-6 border-b border-gray-200">
                    <div className="my-2 w-full flex items-center justify-between text-sm!">
                        {/* Filter Select - Quantity */}
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
                                            Số lượng hiển thị
                                        </SelectLabel>
                                        <SelectItem value="10">10</SelectItem>
                                        <SelectItem value="25">25</SelectItem>
                                        <SelectItem value="50">50</SelectItem>
                                        <SelectItem value="75">75</SelectItem>
                                        <SelectItem value="100">100</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        </div>

                        <div className="flex-1 bg-red-300" />

                        { /* Search Bar */}
                        <div className="relative grid items-center gap-3">
                            <Search className="w-4.5 h-4.5 absolute left-4 text-gray-500" />
                            <Input
                                type="text"
                                id="role"
                                placeholder="Tìm kiếm role"
                                className="shadow-none w-60 pl-10"
                            />
                        </div>
                    </div>
                </div>

                {/* Table */}
                <RoleTable />

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
    )
}

export default RolesClient