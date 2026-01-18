import { User } from "lucide-react";
import type { ReactNode } from "react";

interface AuthLayoutProps {
    children: ReactNode;
}

export default function AuthLayout({ children }: AuthLayoutProps) {
    return (
        <div className="min-h-screen bg-linear-to-br from-slate-950 via-slate-900 to-slate-950 flex items-center justify-center p-4">
            <div className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                {/* Left side - Branding */}
                <div className="hidden lg:block space-y-8">
                    <div className="inline-block">
                        <div className="flex items-center gap-3 mb-12">
                            <div className="w-10 h-10 bg-linear-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                                <span className="text-white font-bold text-lg">
                                    S
                                </span>
                            </div>
                            <span className="text-2xl font-bold text-white">
                                Likesub VIP
                            </span>
                        </div>
                    </div>

                    <div className="space-y-6">
                        <div>
                            <h2 className="text-5xl font-bold text-white leading-tight mb-4">
                                Grow Your <br />
                                <span className="bg-linear-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                                    Social Media
                                </span>
                            </h2>
                            <p className="text-slate-400 text-lg leading-relaxed">
                                Quản lý tài khoản truyền thông xã hội của bạn
                                một cách hiệu quả với nền tảng mạnh mẽ của chúng
                                tôi. Nhận phân tích theo thời gian thực, lên
                                lịch đăng bài và tăng lượng khán giả của bạn.
                            </p>
                        </div>

                        <div className="grid grid-cols-2 gap-4 pt-8">
                            <div className="bg-slate-800/30 border border-slate-700/30 rounded-lg p-4">
                                <div className="text-2xl font-bold text-blue-400 mb-1">
                                    1M+
                                </div>
                                <p className="text-slate-400 text-sm">
                                    Người dùng đang hoạt động
                                </p>
                            </div>
                            <div className="bg-slate-800/30 border border-slate-700/30 rounded-lg p-4">
                                <div className="text-2xl font-bold text-blue-400 mb-1">
                                    99.9%
                                </div>
                                <p className="text-slate-400 text-sm">
                                    Thời gian hoạt động
                                </p>
                            </div>
                            <div className="bg-slate-800/30 border border-slate-700/30 rounded-lg p-4">
                                <div className="text-2xl font-bold text-blue-400 mb-1">
                                    24/7
                                </div>
                                <p className="text-slate-400 text-sm">Hỗ trợ</p>
                            </div>
                            <div className="bg-slate-800/30 border border-slate-700/30 rounded-lg p-4">
                                <div className="text-2xl font-bold text-blue-400 mb-1">
                                    150+
                                </div>
                                <p className="text-slate-400 text-sm">
                                    Quốc gia
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-slate-800/20 border border-slate-700/30 rounded-lg p-6 mt-12">
                        <p className="text-slate-300 text-sm leading-relaxed mb-4">
                            {`"LikesubVIP đã thay đổi cách chúng tôi quản lý sự
                            hiện diện trên mạng xã hội của mình. Số liệu phân
                            tích thật đáng kinh ngạc và nhóm hỗ trợ luôn có mặt
                            khi chúng tôi cần."`}
                        </p>
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-linear-to-br from-slate-600 to-slate-700 rounded-full flex items-center justify-center">
                                <User size={24} color="white" />
                            </div>
                            <div>
                                <p className="text-white text-sm font-semibold">
                                    LAM HOANG AN
                                </p>
                                <p className="text-slate-500 text-xs">
                                    Marketing Director
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right side - Form */}
                {children}
            </div>
        </div>
    );
}
