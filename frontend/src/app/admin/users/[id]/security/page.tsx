"use client"

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue
} from "@/components/common/ui/select";

import {
    CircleQuestionMark,
    Save,
    TriangleAlert,
    Key,
    Lock,
    Shield,
    Eye,
    EyeOff
} from "lucide-react";
import { useState } from "react";

function SecurityUser() {
    const [showToken, setShowToken] = useState(false);
    const [showApiKey, setShowApiKey] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [showSecretKey, setShowSecretKey] = useState(false);
    return (
        <div className="flex flex-col gap-6">
            {/* row 1 */}
            <div className="flex items-start gap-8">
                {/* Token */}
                <div className="flex flex-col w-full gap-2">
                    <label htmlFor="" className="text-slate-800 font-bold text-[13px]">
                        Token{" "}
                        <span className="text-red-500 font-bold">
                            *
                        </span>
                    </label>
                    <div className="relative border border-gray-300 rounded-sm">
                        <div className="absolute left-0 top-0 bottom-0 flex items-center justify-center w-10 bg-gray-100 border-r border-gray-300 rounded-l-sm">
                            <Key className="w-4 h-4 text-gray-400" />
                        </div>
                        <input
                            type={showToken ? "text" : "password"}
                            className="py-2.5 pl-12 pr-12 text-[13px]! w-full focus:outline-none focus:ring-0"
                            value="********************************"
                            readOnly
                        />
                        <button
                            type="button"
                            onClick={() => setShowToken(!showToken)}
                            className="absolute right-0 top-0 bottom-0 flex items-center justify-center w-10 bg-gray-100 border-l border-gray-300 rounded-r-sm hover:bg-gray-200 transition-colors cursor-pointer"
                        >
                            {showToken ? <EyeOff className="w-4 h-4 text-gray-600" /> : <Eye className="w-4 h-4 text-gray-600" />}
                        </button>
                    </div>
                    <div className="flex items-center gap-2 text-yellow-600">
                        <TriangleAlert className="w-3 h-3" />
                        <span className="text-yellow-600 text-xs">
                            Bảo mật thông tin này vì kẻ xấu có thể thực hiện đăng nhập tài khoản bằng Token
                        </span>
                    </div>
                </div>

                {/* API Key */}
                <div className="flex flex-col w-full gap-2">
                    <label htmlFor="" className="text-slate-800 font-bold text-[13px]">
                        API Key{" "}
                        <span className="text-red-500 font-bold">
                            *
                        </span>
                    </label>
                    <div className="relative border border-gray-300 rounded-sm">
                        <div className="absolute left-0 top-0 bottom-0 flex items-center justify-center w-10 bg-gray-100 border-r border-gray-300 rounded-l-sm">
                            <Key className="w-4 h-4 text-gray-400" />
                        </div>
                        <input
                            type={showApiKey ? "text" : "password"}
                            className="py-2.5 pl-12 pr-12 text-[13px]! w-full focus:outline-none focus:ring-0"
                            value="********************************"
                            readOnly
                        />
                        <button
                            type="button"
                            onClick={() => setShowApiKey(!showApiKey)}
                            className="absolute right-0 top-0 bottom-0 flex items-center justify-center w-10 bg-gray-100 border-l border-gray-300 rounded-r-sm hover:bg-gray-200 transition-colors cursor-pointer"
                        >
                            {showApiKey ? <EyeOff className="w-4 h-4 text-gray-600" /> : <Eye className="w-4 h-4 text-gray-600" />}
                        </button>
                    </div>
                    <div className="flex items-center gap-2 text-yellow-500">
                        <TriangleAlert className="w-3 h-3" />
                        <span className="text-yellow-500 text-xs">
                            Bảo mật thông tin này vì kẻ xấu có thể mua hàng thông qua API KEY
                        </span>
                    </div>
                </div>
            </div>

            {/* row 2 */}
            <div className="flex items-start gap-8">
                {/* New Password */}
                <div className="flex flex-col w-full gap-2">
                    <label htmlFor="" className="text-slate-800 font-bold text-[13px]">
                        Mật khẩu mới
                    </label>
                    <div className="relative border border-gray-300 rounded-sm">
                        <div className="absolute left-0 top-0 bottom-0 flex items-center justify-center w-10 bg-gray-100 border-r border-gray-300 rounded-l-sm">
                            <Lock className="w-4 h-4 text-gray-400" />
                        </div>
                        <input
                            type={showPassword ? "text" : "password"}
                            className="py-2.5 pl-12 pr-12 text-[13px]! w-full focus:outline-none focus:ring-0"
                            placeholder="Nhập mật khẩu mới"
                        />
                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-0 top-0 bottom-0 flex items-center justify-center w-10 bg-gray-100 border-l border-gray-300 rounded-r-sm hover:bg-gray-200 transition-colors cursor-pointer"
                        >
                            {showPassword ? <EyeOff className="w-4 h-4 text-gray-600" /> : <Eye className="w-4 h-4 text-gray-600" />}
                        </button>
                    </div>
                    <div className="flex items-start gap-2 text-gray-500">
                        <CircleQuestionMark className="w-3 h-3 mt-0.5" />
                        <span className="text-gray-500 text-xs">
                            Bỏ trống nếu không muốn thay đổi mật khẩu
                        </span>
                    </div>
                </div>

                {/* Secret Key Google 2FA */}
                <div className="grid w-full items-center gap-2">
                    <label htmlFor="" className="text-slate-800 font-bold text-[13px]">
                        Secret Key Google 2FA
                    </label>
                    <div className="relative border border-gray-300 rounded-sm">
                        <div className="absolute left-0 top-0 bottom-0 flex items-center justify-center w-10 bg-gray-100 border-r border-gray-300 rounded-l-sm">
                            <Shield className="w-4 h-4 text-gray-400" />
                        </div>
                        <input
                            type={showSecretKey ? "text" : "password"}
                            className="py-2.5 pl-12 pr-12 text-[13px]! w-full focus:outline-none focus:ring-0"
                            placeholder="*******************"
                        />
                        <button
                            type="button"
                            onClick={() => setShowSecretKey(!showSecretKey)}
                            className="absolute right-0 top-0 bottom-0 flex items-center justify-center w-10 bg-gray-100 border-l border-gray-300 rounded-r-sm hover:bg-gray-200 transition-colors cursor-pointer"
                        >
                            {showSecretKey ? <EyeOff className="w-4 h-4 text-gray-600" /> : <Eye className="w-4 h-4 text-gray-600" />}
                        </button>
                    </div>
                    <div className="flex items-start gap-2 text-red-600">
                        <CircleQuestionMark className="w-4 h-4 mt-0.2" />
                        <span className="text-red-600 text-xs">
                            Lộ thông tin này có thể khiến kẻ xấu bỏ qua bước xác minh 2FA.
                        </span>
                    </div>
                </div>

                {/* Verify Google 2FA */}
                <div className="grid w-full items-center gap-2">
                    <label htmlFor="" className="text-slate-800 font-bold text-[13px]">
                        Xác minh Google 2FA
                    </label>
                    <Select>
                        <SelectTrigger className="border border-gray-300 rounded-sm shadow-none py-2.5! h-9! px-4 w-full text-[13px]!">
                            <SelectValue placeholder="Xác minh Google 2FA" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                <SelectLabel>
                                    Xác minh Google 2FA
                                </SelectLabel>
                                <SelectItem value="off">Tắt</SelectItem>
                                <SelectItem value="on">Bật</SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                </div>

                {/* Verify OTP */}
                <div className="grid w-full items-center gap-2">
                    <label htmlFor="" className="text-slate-800 font-bold text-[13px]">
                        Xác minh OTP
                    </label>
                    <Select>
                        <SelectTrigger className="border border-gray-300 rounded-sm shadow-none py-2.5! h-9! px-4 w-full text-[13px]!">
                            <SelectValue placeholder="Xác minh OTP" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                <SelectLabel>
                                    Xác minh OTP
                                </SelectLabel>
                                <SelectItem value="off">Tắt</SelectItem>
                                <SelectItem value="on">Bật</SelectItem>
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

export default SecurityUser