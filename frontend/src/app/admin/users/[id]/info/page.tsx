"use client"

import { QuantityInput } from "@/components/common/ui/input-number-action";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue
} from "@/components/common/ui/select";
import { Save, User, Mail, Phone, Users } from "lucide-react";

function InfoUser() {
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.value);
    }

    return (
        <div className="flex flex-col gap-6">
            {/* row 1 */}
            <div className="flex items-center gap-8">
                {/* Username */}
                <div className="flex flex-col w-full gap-2">
                    <label htmlFor="" className="text-slate-800 font-bold text-[13px]">
                        Tên thành viên{" "}
                        <span className="text-red-500 font-bold">
                            *
                        </span>
                    </label>
                    <div className="relative border border-gray-300 rounded-sm">
                        <div className="absolute left-0 top-0 bottom-0 flex items-center justify-center w-10 bg-gray-100 border-r border-gray-300 rounded-l-sm">
                            <User className="w-4 h-4 text-gray-400" />
                        </div>
                        <input
                            type="text"
                            className="py-2 pl-12 pr-4 text-sm! w-full focus:outline-none focus:ring-0"
                            value="maaitlunghau"
                            onChange={handleInputChange}
                        />
                    </div>
                </div>

                {/* Email */}
                <div className="flex flex-col w-full gap-2">
                    <label htmlFor="" className="text-slate-800 font-bold text-[13px]">
                        Email{" "}
                        <span className="text-red-500 font-bold">
                            *
                        </span>
                    </label>
                    <div className="relative border border-gray-300 rounded-sm">
                        <div className="absolute left-0 top-0 bottom-0 flex items-center justify-center w-10 bg-gray-100 border-r border-gray-300 rounded-l-sm">
                            <Mail className="w-4 h-4 text-gray-400" />
                        </div>
                        <input
                            type="text"
                            className="py-2 pl-12 pr-4 text-sm! w-full focus:outline-none focus:ring-0"
                            value="chunhau.py@gmail.com"
                            onChange={handleInputChange}
                        />
                    </div>
                </div>
            </div>

            {/* row 2 */}
            <div className="flex items-center gap-8">
                {/* Phone */}
                <div className="flex flex-col w-full gap-2">
                    <label htmlFor="" className="text-slate-800 font-bold text-[13px]">
                        Số điện thoại
                    </label>
                    <div className="relative border border-gray-300 rounded-sm">
                        <div className="absolute left-0 top-0 bottom-0 flex items-center justify-center w-10 bg-gray-100 border-r border-gray-300 rounded-l-sm">
                            <Phone className="w-4 h-4 text-gray-400" />
                        </div>
                        <input
                            type="text"
                            className="py-2 pl-12 pr-4 text-sm! w-full focus:outline-none focus:ring-0"
                            placeholder="Vui lòng nhập số điện thoại"
                        />
                    </div>
                </div>

                {/* Gender */}
                <div className="grid w-full items-center gap-2">
                    <label htmlFor="" className="text-slate-800 font-medium text-[13px]">
                        Giới tính
                    </label>
                    <Select>
                        <SelectTrigger className="border border-gray-300 rounded-sm shadow-none py-2! h-10! px-4 w-full text-sm!">
                            <SelectValue placeholder="Giới tính" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                <SelectLabel>
                                    Giới tính
                                </SelectLabel>
                                <SelectItem value="male">Nam (Male)</SelectItem>
                                <SelectItem value="female">Nữ (Female)</SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                </div>
            </div>

            {/* row 3 */}
            <div className="flex items-center gap-8">
                {/* Referrer */}
                <div className="flex flex-col w-full gap-2">
                    <label htmlFor="" className="text-slate-800 font-bold text-[13px]">
                        Người giới thiệu
                    </label>
                    <div className="relative border border-gray-300 rounded-sm">
                        <div className="absolute left-0 top-0 bottom-0 flex items-center justify-center w-10 bg-gray-100 border-r border-gray-300 rounded-l-sm">
                            <Users className="w-4 h-4 text-gray-400" />
                        </div>
                        <input
                            type="text"
                            className="py-2 pl-12 pr-4 text-sm! w-full focus:outline-none focus:ring-0"
                            placeholder="Nguyen Van A"
                        />
                    </div>
                </div>

                {/* Discount */}
                <div className="w-full! flex flex-col items-start gap-2 text-sm!">
                    <label htmlFor="" className="text-slate-800 font-bold text-[13px]">
                        Chiết khấu giảm giá (%)
                    </label>
                    <div className="relative w-full border border-gray-300 rounded-sm">
                        <QuantityInput
                            value={1}
                            className="w-full py-1 border-none"
                        />
                    </div>
                </div>

                {/* Level */}
                <div className="grid w-full items-center gap-2">
                    <label htmlFor="" className="text-slate-800 font-bold text-[13px]">
                        Cấp bậc
                    </label>
                    <Select>
                        <SelectTrigger className="border border-gray-300 rounded-sm shadow-none py-2 h-10! px-4 w-full text-sm!">
                            <SelectValue placeholder="Cấp bậc" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                <SelectLabel>
                                    Cấp bậc
                                </SelectLabel>
                                <SelectItem value="retail">Khách lẻ</SelectItem>
                                <SelectItem value="collaborator">Cộng tác viên</SelectItem>
                                <SelectItem value="agent">Đại lý</SelectItem>
                                <SelectItem value="distributor">Nhà phân phối</SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                </div>
            </div>

            {/* Save button */}
            <div className="flex w-full items-center justify-end mt-8 py-6 border-t border-gray-100">
                <button className="px-4 py-2 bg-[#845ADF] text-white rounded-sm text-sm! flex items-center gap-2 cursor-pointer hover:bg-[#7348cc] transition-colors">
                    <Save className="w-3 h-3" />
                    Lưu thay đổi
                </button>
            </div>
        </div>
    )
}

export default InfoUser