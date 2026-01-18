"use client"

import { LoaderCircle } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { animateScroll as scroll } from "react-scroll";

function UserProfileInfo() {
    const containerRef = useRef<HTMLDivElement | null>(null);
    const [loadingForm, setLoadingForm] = useState(true);

    useEffect(() => {
        if (!containerRef.current) return;

        const y =
            containerRef.current.getBoundingClientRect().top +
            window.scrollY -
            80;

        scroll.scrollTo(y, {
            duration: 800,
            smooth: "easeInOutQuart"
        });
    }, []);

    useEffect(() => {
        const formTimer = setTimeout(() => setLoadingForm(false), 1500);
        return () => clearTimeout(formTimer);
    }, []);

    return (
        <>
            {loadingForm ? (
                <div ref={containerRef} className="flex items-center justify-center h-96 gap-3" >
                    <span className="text-slate-800">Đang tải dữ liệu...</span>
                    <LoaderCircle className="w-10 h-10 text-slate-800 animate-spin" />
                </div>
            ) : (
                <div className="p-6 flex flex-col gap-4">
                    {/* row 1 */}
                    <div className="flex items-center gap-8">
                        <div className="flex flex-col w-full gap-2">
                            <label htmlFor="" className="text-slate-800 font-medium text-sm">
                                Tên đăng nhập
                            </label>
                            <input
                                type="text"
                                className="border border-gray-300 bg-slate-100 rounded-sm py-1.5 px-4"
                                value="maaitlunghau"
                                readOnly
                            />
                        </div>
                        <div className="flex flex-col w-full gap-2">
                            <label htmlFor="" className="text-slate-800 font-medium text-sm">
                                Email
                            </label>
                            <input
                                type="text"
                                className="border border-gray-300 bg-slate-100 rounded-sm py-1.5 px-4"
                                value="chunhau.py@gmail.com"
                                readOnly
                            />
                        </div>
                    </div>

                    {/* row 2 */}
                    <div className="flex items-center gap-8">
                        <div className="flex flex-col w-full gap-2">
                            <label htmlFor="" className="text-slate-800 font-medium text-sm">
                                Họ và tên
                            </label>
                            <input
                                type="text"
                                className="border border-gray-300 rounded-sm py-1.5 px-4"
                                placeholder="Vui lòng nhập họ và tên"
                            />
                        </div>
                        <div className="flex flex-col w-full gap-2">
                            <label htmlFor="" className="text-slate-800 font-medium text-sm">
                                Số điện thoại
                            </label>
                            <input
                                type="text"
                                className="border border-gray-300 rounded-sm py-1.5 px-4"
                                placeholder="Vui lòng nhập số điện thoại"
                            />
                        </div>
                    </div>

                    {/* row 3 */}
                    <div className="flex items-center gap-8">
                        <div className="flex flex-col w-full gap-2">
                            <label htmlFor="" className="text-slate-800 font-medium text-sm">
                                Thời gian đăng ký tài khoản
                            </label>
                            <input
                                type="text"
                                className="border border-gray-300 bg-slate-100 rounded-sm py-1.5 px-4"
                                value={"2025-12-16 15:08:23"}
                                readOnly
                            />
                        </div>
                        <div className="flex flex-col w-full gap-2" />
                    </div>

                    {/* Save button */}
                    <div className="flex w-full items-center justify-end mt-2">
                        <button className="px-4 py-2 bg-[#0f172a] text-white rounded-sm text-sm flex items-center gap-2 cursor-pointer">
                            Cập nhật
                        </button>
                    </div>
                </div>
            )}
        </>
    )
}

export default UserProfileInfo