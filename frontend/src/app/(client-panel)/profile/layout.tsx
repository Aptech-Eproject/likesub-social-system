"use client"

import {
    CircleArrowUp,
    CreditCard,
    Sparkles,
    UserLock,
    Wallet
} from "lucide-react"

import { useCallback } from "react"
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

function UserProfile({
    children
}: {
    children: React.ReactNode
}) {
    const pathName = usePathname();

    const isActive = useCallback((path: string) => {
        if (!path) return false;
        return pathName === path;
    }, [pathName]);

    return (
        <div className="w-full h-full relative">
            {/* Background Layer */}
            <div className="absolute inset-0 z-0">
                <div className="h-80 w-full relative overflow-hidden">
                    <Image
                        src="/images/profile-background.jpg"
                        alt=""
                        fill
                        className="w-full object-cover h-full"
                    />
                    <div className="absolute inset-0 bg-black/60" />
                </div>

                <div
                    className="w-full"
                    style={{ height: 'calc(100vh - 320px)' }}
                />
            </div>

            {/* Main Content */}
            <div className="relative z-10 mx-auto pt-50 px-5 flex flex-col gap-5">
                {/* Information */}
                <div className="bg-white rounded-xs shadow-xl p-6">
                    <div className="w-full flex flex-col items-center gap-3">
                        {/* Info */}
                        <div className="w-full flex items-center justify-center pb-4 border-b border-dotted border-gray-300">
                            {/* Avatar */}
                            <div className="w-50 h-full flex items-center justify-center">
                                <div className="avatar">
                                    <div className="ring-primary ring-offset-base-100 w-24 rounded-full ring-2 ring-offset-2">
                                        <Image
                                            alt="avatar"
                                            src="https://i.pinimg.com/736x/ec/6a/80/ec6a80f3565d3936d355036109f5fece.jpg"
                                            fill
                                            className="w-24 h-24 rounded-full object-cover"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Description */}
                            <div className="flex-1 h-full flex flex-col items-start justify-between pl-6">
                                {/* Username */}
                                <div>
                                    <p className="font-medium text-lg text-slate-800">
                                        maaitlunghau
                                    </p>
                                </div>

                                {/* Info item */}
                                <div className="flex flex-col w-full">
                                    <div className="flex items-center justify-between py-2 border-b border-gray-200">
                                        <div className="flex items-center justify-between gap-2">
                                            <Wallet className="w-3 h-3 text-gray-500 " />
                                            <span className="text-sm text-gray-500 ">
                                                Số dư:
                                            </span>
                                        </div>
                                        <span className="text-sm font-medium">
                                            $0.00
                                        </span>
                                    </div>
                                    <div className="flex items-center justify-between py-2 border-b border-gray-200">
                                        <div className="flex items-center justify-between gap-2">
                                            <CircleArrowUp className="w-3 h-3 text-gray-500" />
                                            <span className="text-sm text-gray-500 ">
                                                Tổng nạp:
                                            </span>
                                        </div>
                                        <span className="text-sm text-green-500 font-medium">
                                            $0.00
                                        </span>
                                    </div>
                                    <div className="flex items-center justify-between py-2">
                                        <div className="flex items-center justify-between gap-2">
                                            <Sparkles className="w-3 h-3 text-gray-500 " />
                                            <span className="text-sm text-gray-500 ">
                                                Cấp bậc:
                                            </span>
                                        </div>
                                        <span className="text-sm text-blue-500 font-medium">
                                            Thành viên
                                        </span>
                                    </div>
                                </div>

                                {/* User Action */}
                                <div className="flex items-center gap-3 py-3">
                                    <button className="px-2.5 py-1.5 bg-[#0f172a] text-slate-200 rounded-sm text-xs flex items-center gap-2 cursor-pointer">
                                        <CreditCard className="w-3 h-3 text-slate-200" />
                                        Nạp tiền
                                    </button>
                                    <button className="px-2.5 py-1.5 bg-transparent border border-blue-400 hover:bg-blue-400 hover:text-slate-200 shadow-sm text-blue-400 rounded-sm text-xs flex items-center gap-2 cursor-pointer group transform-content duration-300">
                                        <UserLock className="w-3 h-3 text-blue-400 group-hover:text-slate-200" />
                                        Xác thực tài khoản
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Progress */}
                        <div className="w-full flex flex-col gap-2">
                            <div className="flex items-center justify-between">
                                <span className="text-sm text-gray-400">
                                    Tiến độ lên hạng
                                </span>
                                <div className="bg-slate-100 p-0.5 rounded-md">
                                    <span className="text-sm font-semibold text-slate-800">
                                        Hạng tiếp theo: Cộng tác viên
                                    </span>
                                </div>
                            </div>
                            <div className="w-full h-2 bg-slate-100 rounded-lg" />
                            <div className="flex items-start text-sm text-gray-400 gap-1">
                                <p className="font-light">
                                    Chỉ cần nạp thêm
                                </p>
                                <span className="font-medium text-slate-500">
                                    $19.23
                                </span>
                                <p className="font-light">
                                    nữa để thăng hạng
                                </p>
                                <span className="font-medium text-slate-500">
                                    Cộng tác viên!
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Detail */}
                <div className="bg-white rounded-xs shadow-xl mb-6">
                    {/* Nav Container */}
                    <nav className="px-6 border-b border-gray-200">
                        <ul className="flex items-center gap-2">
                            <Link href="/profile/personal-details" className={navClass({ isActive: isActive("/profile/personal-details") })}>
                                Thông tin cá nhân
                            </Link>
                            <Link href="/profile/change-password" className={navClass({ isActive: isActive("/profile/change-password") })}>
                                Đổi mật khẩu
                            </Link>
                            <Link href="/profile/security" className={navClass({ isActive: isActive("/profile/security") })}>
                                Bảo mật
                            </Link>
                        </ul>
                    </nav>

                    {/* Container */}
                    {children}
                </div>
            </div>
        </div>
    )
}

const navClass = ({ isActive }: { isActive: boolean }) =>
    `py-4 px-2 text-sm font-medium transition-all duration-300 ${isActive
        ? "border-b-2 border-slate-800 text-slate-800"
        : "text-blue-600 hover:text-blue-900"
    }`;

export default UserProfile