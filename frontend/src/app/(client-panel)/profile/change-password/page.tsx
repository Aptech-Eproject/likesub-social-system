"use client"

import { useEffect, useRef, useState } from "react";
import { animateScroll as scroll } from "react-scroll";
import { LoaderCircle } from "lucide-react";

function UserProfilePassword() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [loadingForm, setLoadingForm] = useState(true);

    useEffect(() => {
        if (!containerRef.current) return;

        const y =
            containerRef.current.getBoundingClientRect().top +
            window.scrollY -
            80;

        scroll.scrollTo(y, {
            duration: 1000,
            smooth: "easeInOutQuart"
        });
    }, []);

    useEffect(() => {
        const timer = setTimeout(() => setLoadingForm(false), 1000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            {loadingForm ? (
                <div ref={containerRef} className="flex items-center justify-center h-80 gap-3">
                    <span className="text-slate-800 text-sm">
                        Đang tải biểu mẫu đổi mật khẩu...
                    </span>
                    <LoaderCircle className="w-9 h-9 text-slate-800 animate-spin" />
                </div>
            ) : (
                <div className="p-6 flex flex-col gap-4">
                    {/* Password Inputs */}
                    <div className="flex items-center gap-4">
                        <div className="flex flex-col w-full gap-2">
                            <label className="text-slate-800 font-medium text-sm">
                                Mật khẩu hiện tại
                            </label>
                            <input
                                type="password"
                                className="border border-gray-300 rounded-sm py-1.5 px-4"
                                placeholder="Vui lòng nhập mật khẩu hiện tại"
                            />
                        </div>

                        <div className="flex flex-col w-full gap-2">
                            <label className="text-slate-800 font-medium text-sm">
                                Mật khẩu mới
                            </label>
                            <input
                                type="password"
                                className="border border-gray-300 rounded-sm py-1.5 px-4"
                                placeholder="Vui lòng nhập mật khẩu mới"
                            />
                        </div>

                        <div className="flex flex-col w-full gap-2">
                            <label className="text-slate-800 font-medium text-sm">
                                Xác nhận mật khẩu
                            </label>
                            <input
                                type="password"
                                className="border border-gray-300 rounded-sm py-1.5 px-4"
                                placeholder="Vui lòng xác nhận mật khẩu"
                            />
                        </div>
                    </div>

                    {/* Save Button */}
                    <div className="flex w-full items-center justify-end mt-2">
                        <button className="px-4 py-2 bg-[#0f172a] text-white rounded-sm text-sm cursor-pointer">
                            Đổi mật khẩu
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}

export default UserProfilePassword;
