"use client";

import { useState, useEffect } from "react";
import CreateOrderNotices from "@/components/client/client-panel/CreateOrderNotices";
import UserSubHeader from "@/layouts/client/client-panel/UserSubHeader";

import {
    Banknote,
    ContactRound,
    CreditCard,
    ShieldPlus,
    Wallet,
    LoaderCircle,
} from "lucide-react";

function CreateOrder() {
    const titlePage = "đặt hàng dịch vụ";

    const [loadingForm, setLoadingForm] = useState(true);
    const [loadingCard1, setLoadingCard1] = useState(true);
    const [loadingCard2, setLoadingCard2] = useState(true);

    useEffect(() => {
        const formTimer = setTimeout(() => setLoadingForm(false), 1500);
        const card1Timer = setTimeout(() => setLoadingCard1(false), 1000);
        const card2Timer = setTimeout(() => setLoadingCard2(false), 1200);

        return () => {
            clearTimeout(formTimer);
            clearTimeout(card1Timer);
            clearTimeout(card2Timer);
        };
    }, []);

    return (
        <div>
            <UserSubHeader titlePage={titlePage} />
            <CreateOrderNotices />

            <div className="flex flex-col lg:flex-row gap-6 items-start px-6">
                {/* Register Service Form */}
                <div className="w-full lg:w-2/3 mb-6">
                    <div className="w-full bg-white rounded-md shadow p-6 border border-slate-200 min-h-150">
                        {loadingForm ? (
                            <div className="flex items-center justify-center h-140">
                                Đang tải dữ liệu...
                                <LoaderCircle className="w-10 h-10 text-slate-800 animate-spin" />
                            </div>
                        ) : (
                            <>
                                <div className="mb-4">
                                    <label className="text-[13px] block font-semibold mb-2.5">
                                        Tìm nhanh dịch vụ
                                    </label>
                                    <input
                                        className="text-sm! w-full border rounded px-3 py-2"
                                        placeholder="Nhập tên dịch vụ để tìm kiếm"
                                    />
                                </div>
                                <div className="mb-4 flex gap-3">
                                    <div className="flex-1">
                                        <label className="text-[13px] block font-semibold mb-2.5">
                                            Nền tảng
                                        </label>
                                        <select className="text-sm! w-full border rounded px-3 py-2">
                                            <option>Dịch vụ Facebook</option>
                                        </select>
                                    </div>
                                    <div className="flex-1">
                                        <label className="text-[13px] block font-semibold mb-2.5">
                                            Phân loại
                                        </label>
                                        <select className="text-sm! w-full border rounded px-3 py-2">
                                            <option>
                                                Facebook | Live stream | Tăng mắt Live
                                                Stream
                                            </option>
                                        </select>
                                    </div>
                                </div>
                                <div className="mb-4">
                                    <label className="text-[13px] block font-semibold mb-2.5">
                                        Dịch vụ
                                    </label>
                                    <select className="text-sm! w-full border rounded px-3 py-2 text-black font-semibold">
                                        <option>
                                            #11946 Facebook Live Stream Views [ Max 100K
                                            ] | 100% Concurrent | 15 Minutes 62.370đ
                                        </option>
                                    </select>
                                </div>
                                <div className="mb-4">
                                    <label className="text-[13px] block font-semibold mb-2.5">
                                        Liên kết cần tăng
                                    </label>
                                    <input
                                        className="text-sm! w-full border rounded px-3 py-2"
                                        placeholder="Nhập liên kết cần tăng tương tác..."
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="text-[13px] block font-semibold mb-2.5">
                                        Số lượng
                                    </label>
                                    <input
                                        type="number"
                                        className="text-sm! w-full border rounded px-3 py-2"
                                        min={10}
                                        max={100000}
                                        defaultValue={10}
                                    />
                                    <div className="text-xs text-slate-500 mt-1">
                                        Tối thiểu: 10 - Tối đa: 100000
                                    </div>
                                </div>
                                <div className="border border-dashed border-gray-400 rounded-md p-4 mb-4">
                                    <div className="flex justify-between text-gray-500 text-sm">
                                        <span>Giá trị đơn hàng:</span>
                                        <span>2.310đ</span>
                                    </div>

                                    <div className="flex justify-between text-gray-500 text-sm mt-2 pb-2 border-b border-dashed border-gray-300">
                                        <span>Thuế VAT:</span>
                                        <span>231đ (10%)</span>
                                    </div>

                                    <div className="flex justify-between mt-3 font-semibold">
                                        <span>Tổng tiền cần thanh toán:</span>
                                        <span className="text-lg">2.541đ</span>
                                    </div>
                                </div>

                                <div className="mb-4">
                                    <label className="text-sm font-medium inline-flex items-center gap-2">
                                        <input
                                            type="checkbox"
                                            className="accent-cyan-600"
                                        />
                                        Đặt lịch chạy. Múi giờ: Asia/Ho_Chi_Minh
                                    </label>
                                </div>
                                <button className="w-full bg-black hover:bg-gray-700 text-white font-semibold py-2.5 rounded transition mt-4! cursor-pointer">
                                    Đặt hàng
                                </button>
                            </>
                        )}
                    </div>
                </div>

                {/* Main Content */}
                <div className="w-1/3 flex flex-col gap-4">
                    {/* Service Card 1 */}
                    <div className="w-full bg-white rounded-md shadow p-6 border border-slate-200 min-h-75">
                        {loadingCard1 ? (
                            <div className="flex items-center justify-center h-65">
                                <LoaderCircle className="w-10 h-10 text-slate-800 animate-spin" />
                            </div>
                        ) : (
                            <div className="flex flex-col gap-4">
                                <div className="flex items-center gap-6 mb-2">
                                    <div className="relative shrink-0">
                                        <div className="w-25 h-25 rounded-full bg-blue-500 border-4 flex items-center justify-center text-3xl font-bold text-white select-none">
                                            AN
                                        </div>
                                    </div>
                                    <div className="flex-1">
                                        <div className="font-semibold text-lg mb-3">
                                            Andev
                                        </div>
                                        <div className="flex flex-col gap-1">
                                            <div className="flex items-center justify-between text-sm border-b border-solid border-gray-300 pb-2">
                                                <div className="flex items-center gap-2 text-gray-500">
                                                    <CreditCard className="w-5 h-5 text-gray-500" />
                                                    Số dư:
                                                </div>
                                                <div className="font-semibold text-sm text-gray-800">
                                                    8.002.410đ
                                                </div>
                                            </div>
                                            <div className="flex items-center justify-between text-sm border-b border-solid border-gray-300 py-2">
                                                <div className="flex items-center gap-2 text-gray-500">
                                                    <Banknote className="w-5 h-5 text-gray-500" />
                                                    Tổng nạp:
                                                </div>
                                                <div className="font-semibold text-sm text-green-600">
                                                    0đ
                                                </div>
                                            </div>
                                            <div className="flex items-center justify-between text-sm pt-2">
                                                <div className="flex items-center gap-2 text-gray-500">
                                                    <ShieldPlus className="w-5 h-5 text-gray-500" />
                                                    Cấp bậc:
                                                </div>
                                                <div className="font-semibold text-sm text-blue-500 cursor-pointer hover:underline">
                                                    Thành viên
                                                </div>
                                            </div>
                                            <div className="flex gap-2 mt-2 items-center justify-between">
                                                <button className="bg-black hover:bg-gray-800 text-white px-4 py-1.5 rounded text-sm! font-semibold">
                                                    <Wallet className="w-3 h-3 inline mb-0.5 mr-1" />
                                                    <span className="text-sm!">Nạp tiền</span>
                                                </button>
                                                <button className="border border-blue-400 text-blue-600 px-4 py-1.5 rounded text-sm font-semibold hover:bg-blue-50">
                                                    <ContactRound className="w-3 h-3 inline mb-1 mr-1" />
                                                    <span className="text-sm!">Nạp tiền</span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-2">
                                    <div className="flex justify-between items-center mb-1">
                                        <span className="text-xs text-gray-500">
                                            Tiến độ lên hạng
                                        </span>
                                        <span className="bg-gray-100 px-2 py-1 rounded-full text-xs text-gray-800">
                                            Hạng tiếp theo: <b>Cộng tác viên</b>
                                        </span>
                                    </div>
                                    <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                                        <div
                                            className="bg-blue-500 h-full"
                                            style={{ width: "40%" }}
                                        ></div>
                                    </div>
                                    <div className="text-xs text-gray-500 mt-2">
                                        Chỉ cần nạp thêm <b>500.000đ</b> nữa để thăng
                                        hạng <b>Cộng tác viên</b>!
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Service Card 2 */}
                    <div className="w-full bg-white rounded-md shadow p-6 border border-slate-200 mt-4 min-h-50">
                        {loadingCard2 ? (
                            <div className="flex items-center justify-center h-40">
                                <LoaderCircle className="w-10 h-10 text-slate-800 animate-spin" />
                            </div>
                        ) : (
                            <div className="grid grid-cols-[140px_1fr] gap-y-4 text-sm">
                                <span className="text-slate-500">ID dịch vụ:</span>
                                <span className="font-semibold text-blue-500">
                                    11906
                                </span>

                                <span className="text-slate-500">Tên dịch vụ:</span>
                                <span className="font-semibold text-black break-normal text-[13px]">
                                    Tăng Like Cho Bình Luận | Account Việt Nam |
                                    Speed 2k/day
                                </span>

                                <span className="text-slate-500">
                                    Loại dịch vụ:
                                </span>
                                <span>
                                    <span className="inline-flex bg-blue-500 text-white px-2 py-0.5 rounded text-[10px] font-semibold">
                                        Default
                                    </span>
                                </span>

                                <span className="text-slate-500">
                                    Giới hạn số lượng:
                                </span>
                                <span className="font-semibold text-black text-[13px]">
                                    50 - 50.000
                                </span>

                                <span className="text-slate-500">
                                    Giá mỗi 1000:
                                </span>
                                <span className="font-bold text-red-500 text-base text-[13px]">
                                    46.200đ
                                </span>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CreateOrder;