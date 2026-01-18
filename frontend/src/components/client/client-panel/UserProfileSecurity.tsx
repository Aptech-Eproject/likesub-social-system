"use client"

import { useEffect, useRef, useState } from "react";
import { animateScroll as scroll } from "react-scroll";

function UserProfileSecurity() {
    const [toggles, setToggles] = useState({
        loginEmail: false,
        otpEmail: false,
    });

    const handleToggle = (key: keyof typeof toggles) => {
        setToggles(prev => ({
            ...prev,
            [key]: !prev[key]
        }));
    }

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
            {/* Title */}
            <span className="text-slate-700 font-medium underline">
                Cấu hình bảo mật:
            </span>

            {/* Item 1 */}
            <div className="flex items-center justify-between">
                <div className="flex flex-col w-full">
                    <span className="text-slate-800 font-medium text-sm">
                        Xác thực hai yếu tố
                    </span>
                    <span className="text-gray-500 text-sm">
                        Xác minh đăng nhập bằng Google Authenticator
                    </span>
                </div>
                <div className="flex w-full items-center justify-end mt-2">
                    <button className="p-1.5 bg-[#0f172a] text-white rounded-sm text-xs flex items-center gap-2 cursor-pointer">
                        Bật xác thực hai yếu tố
                    </button>
                </div>
            </div>

            {/* Item 2 */}
            <div className="flex items-center justify-between">
                <div className="flex flex-col w-full">
                    <span className="text-slate-800 font-medium text-sm">
                        Thông báo đăng nhập qua email
                    </span>
                    <span className="text-gray-500 text-sm">
                        Nhận thông báo khi tài khoản của bạn đăng nhập từ thiết bị mới
                    </span>
                </div>
                <div className="flex w-full items-center justify-end mt-2">
                    <button
                        onClick={() => handleToggle("loginEmail")}
                        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-200 ease-in-out focus:outline-none cursor-pointer ${
                            toggles.loginEmail ? 'bg-blue-600' : 'bg-gray-300'
                        }`}
                    >
                        <span
                            className={`inline-block h-5 w-5 transform rounded-full bg-white transition-transform duration-200 ease-in-out ${
                            toggles.loginEmail ? 'translate-x-5' : 'translate-x-0.5'
                            }`}
                        />
                    </button>
                </div>
            </div>

            {/* Item 3 */}
            <div className="flex items-center justify-between">
                <div className="flex flex-col w-full">
                    <span className="text-slate-800 font-medium text-sm">
                        Xác thực OTP qua email
                    </span>
                    <span className="text-gray-500 text-sm">
                        Yêu cầu mã OTP gửi qua email khi đăng nhập từ thiết bị mới
                    </span>
                </div>
                <div className="flex w-full items-center justify-end mt-2">
                    <button
                        onClick={() => handleToggle("otpEmail")}
                        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-200 ease-in-out focus:outline-none cursor-pointer ${
                            toggles.otpEmail ? 'bg-blue-600' : 'bg-gray-300'
                        }`}
                    >
                    <span
                        className={`inline-block h-5 w-5 transform rounded-full bg-white transition-transform duration-200 ease-in-out ${
                        toggles.otpEmail ? 'translate-x-5' : 'translate-x-0.5'
                        }`}
                    />
                    </button>
                </div>
            </div>

            {/* Item 4 */}
            <div className="flex items-center justify-between">
                <div className="flex flex-col w-full">
                    <span className="text-slate-800 font-medium text-sm">
                        Thông báo qua Telegram
                    </span>
                    <span className="text-orange-400 text-sm">
                        Tài khoản chưa liên kết với Telegram
                    </span>
                </div>
                <div className="flex w-full items-center justify-end mt-2">
                    <button className="p-1.5 bg-[#0f172a] text-white rounded-sm text-xs flex items-center gap-2 cursor-pointer">
                        Liên kết Telegram
                    </button>
                </div>
            </div>

            {/* Save Button */}
            <div className="flex w-full items-center justify-end mt-4">
                <button 
                    className="px-4 py-2 bg-[#0f172a] text-white rounded-sm text-sm flex items-center gap-2 cursor-pointer"
                >
                    Cập nhật
                </button>
            </div>
        </div>
    )
}

export default UserProfileSecurity