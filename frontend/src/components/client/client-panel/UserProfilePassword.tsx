"use client"

import { useEffect, useRef } from "react";
import { animateScroll as scroll } from "react-scroll";

function UserProfilePassword() {
    const containerRef = useRef<HTMLDivElement>(null);

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

    return (
        <div ref={containerRef} className="p-6 flex flex-col gap-4">
            {/* Password Input */}
            <div className="flex items-center gap-4">
                <div className="flex flex-col w-full gap-2">
                    <label htmlFor="" className="text-slate-800 font-medium text-sm">
                        Mật khẩu hiện tại
                    </label>
                    <input 
                        type="text"
                        className="border border-gray-300 rounded-sm py-1.5 px-4"
                        placeholder="Vui lòng nhập mật khẩu hiện tại"
                    />
                </div>
                <div className="flex flex-col w-full gap-2">
                    <label htmlFor="" className="text-slate-800 font-medium text-sm">
                        Mật khẩu mới
                    </label>
                    <input 
                        type="text"
                        className="border border-gray-300 rounded-sm py-1.5 px-4"
                        placeholder="Vui lòng nhập mật khẩu mới"
                    />
                </div>
                <div className="flex flex-col w-full gap-2">
                    <label htmlFor="" className="text-slate-800 font-medium text-sm">
                        Xác nhận mật khẩu
                    </label>
                    <input 
                        type="text"
                        className="border border-gray-300 rounded-sm py-1.5 px-4"
                        placeholder="Vui lòng xác nhận mật khẩu"
                    />
                </div>
            </div>

            {/* Forgot Password */}
            <div className="w-full">
                <span className="text-slate-800 hover:text-slate-600 font-medium text-sm underline cursor-pointer">
                    Quên mật khẩu?
                </span>
            </div>

            {/* Save Button */}
            <div className="flex w-full items-center justify-end mt-2">
                <button className="px-4 py-2 bg-[#0f172a] text-white rounded-sm text-sm flex items-center gap-2 cursor-pointer">
                    Đổi mật khẩu
                </button>
            </div>
        </div>
    )
}

export default UserProfilePassword