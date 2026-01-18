"use client"

import { History, ScanSearch, Trash2 } from "lucide-react";
import { useState, useEffect } from "react";

function formatVND(value: number) {
    if (Number.isNaN(value)) return "0đ";
    return value.toLocaleString("vi-VN") + "đ";
}

type HistoryItem = {
    id: string;
    status: string;
    bank: string;
    needPay: number;
    received: number;
    createdAt: string;
    updatedAt: string;
};

interface RechargeHistoryProps {
    data?: HistoryItem[];
}

export default function RechargeHistory({ data = [] }: RechargeHistoryProps) {
    const [visibleRows, setVisibleRows] = useState<number>(0);
    const [isLoaded, setIsLoaded] = useState(false);

    const dataTable = [
        {
            id: "689714325",
            status: "Chưa thanh toán",
            bank: "Vietcombank",
            needPay: 10000,
            received: 0,
            createdAt: "07/01/2026 17:04:33",
            updatedAt: "07/01/2026 17:04:33",
        },
        {
            id: "689714326",
            status: "Đã thanh toán",
            bank: "Techcombank",
            needPay: 50000,
            received: 50000,
            createdAt: "07/01/2026 16:45:10",
            updatedAt: "07/01/2026 16:46:02",
        },
        {
            id: "689714327",
            status: "Đã thanh toán",
            bank: "MB Bank",
            needPay: 120000,
            received: 120000,
            createdAt: "07/01/2026 15:12:44",
            updatedAt: "07/01/2026 15:13:01",
        },
        {
            id: "689714328",
            status: "Chờ xử lý",
            bank: "ACB",
            needPay: 75000,
            received: 0,
            createdAt: "07/01/2026 14:58:20",
            updatedAt: "07/01/2026 14:58:20",
        },
        {
            id: "689714329",
            status: "Thất bại",
            bank: "BIDV",
            needPay: 200000,
            received: 0,
            createdAt: "07/01/2026 13:40:11",
            updatedAt: "07/01/2026 13:41:55",
        },
        {
            id: "689714330",
            status: "Đã thanh toán",
            bank: "VPBank",
            needPay: 30000,
            received: 30000,
            createdAt: "07/01/2026 12:22:09",
            updatedAt: "07/01/2026 12:22:30",
        },
        {
            id: "689714331",
            status: "Hoàn tiền",
            bank: "Sacombank",
            needPay: 150000,
            received: 150000,
            createdAt: "06/01/2026 21:18:47",
            updatedAt: "06/01/2026 21:30:12",
        },
        {
            id: "689714332",
            status: "Đã thanh toán",
            bank: "TPBank",
            needPay: 99000,
            received: 99000,
            createdAt: "06/01/2026 19:05:33",
            updatedAt: "06/01/2026 19:06:01",
        },
        {
            id: "689714333",
            status: "Chưa thanh toán",
            bank: "VietinBank",
            needPay: 45000,
            received: 0,
            createdAt: "06/01/2026 18:02:14",
            updatedAt: "06/01/2026 18:02:14",
        },
        {
            id: "689714334",
            status: "Đã thanh toán",
            bank: "OCB",
            needPay: 250000,
            received: 250000,
            createdAt: "06/01/2026 16:10:59",
            updatedAt: "06/01/2026 16:11:40",
        },
    ];

    const history: HistoryItem[] = data.length > 0 ? data : dataTable;

    const statusStyles: Record<string, string> = {
        "Chưa thanh toán": "bg-[#F06548] text-white",
        "Đã thanh toán": "bg-emerald-500 text-white",
        "Chờ xử lý": "bg-[#F5B849] text-amber-900",
        "Thất bại": "bg-[#e6533c] text-white",
        "Hoàn tiền": "bg-[#846adf] text-white",
    };

    useEffect(() => {
        // Delay nhẹ trước khi bắt đầu animation
        const initTimer = setTimeout(() => {
            setIsLoaded(true);
        }, 300);

        return () => clearTimeout(initTimer);
    }, []);

    useEffect(() => {
        if (!isLoaded) return;

        // Hiển thị từng hàng với delay nhẹ
        if (visibleRows < history.length) {
            const timer = setTimeout(() => {
                setVisibleRows((prev) => prev + 1);
            }, 80); // Thời gian giữa mỗi hàng

            return () => clearTimeout(timer);
        }
    }, [visibleRows, history.length, isLoaded]);

    return (
        <div className="mt-6 rounded bg-white shadow-sm ring-1 ring-neutral-200 dark:bg-neutral-900 dark:ring-neutral-800">
            <div className="p-4 flex items-center justify-between border-b border-gray-200">
                <div className="flex items-center gap-2">
                    <History className="w-3.5 h-3.5" />
                    <span className="text-base font-semibold">LỊCH SỬ NẠP TIỀN</span>
                </div>
            </div>

            <div className="px-4 py-1 mt-4 grid gap-3 md:grid-cols-[220px_220px_184px_1fr]">
                <div className="relative">
                    <input
                        placeholder="Mã giao dịch"
                        className="w-full rounded border border-neutral-300 py-2.75 pl-10 pr-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:border-neutral-700 dark:bg-neutral-900 text-sm"
                    />
                    <span className="pointer-events-none absolute left-2 top-1/2 -translate-y-1/2 text-neutral-400">
                        <ScanSearch />
                    </span>
                </div>
                <select className="rounded border border-neutral-300 bg-white py-2 px-3 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:border-neutral-700 dark:bg-neutral-900">
                    <option>-- Trạng thái --</option>
                    <option>Chưa thanh toán</option>
                    <option>Đã thanh toán</option>
                    <option>Hủy</option>
                </select>
                <div className="grid grid-cols-2 gap-2">
                    <input
                        type="date"
                        className="rounded border w-46 border-neutral-300 py-2.5 px-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:border-neutral-700 dark:bg-neutral-900"
                    />
                </div>
                <div className="flex items-center justify-start gap-2 ml-auto">
                    <button className="cursor-pointer rounded bg-neutral-900 px-4 py-3 text-sm font-semibold text-white dark:bg-white dark:text-neutral-900">
                        Tìm kiếm
                    </button>
                    <button className="rounded hover:bg-gray-100 cursor-pointer transform-color duration-300 bg-white border p-3">
                        <Trash2 className="w-4 h-4" />
                    </button>
                </div>
            </div>

            <div className="mt-6 overflow-x-auto">
                <table className="min-w-225 w-full border-collapse text-sm">
                    <thead>
                        <tr className="bg-slate-100 text-left text-neutral-600 dark:bg-neutral-800/40 dark:text-neutral-300">
                            <th className="px-3 py-3 font-bold text-[13px]">Mã giao dịch</th>
                            <th className="px-3 py-3 text-center font-bold text-[13px]">
                                Trạng thái
                            </th>
                            <th className="px-3 py-3 text-left font-bold text-[13px]">
                                Ngân hàng
                            </th>
                            <th className="py-3 text-right font-bold text-[13px]">
                                Số tiền cần thanh toán
                            </th>
                            <th className="px-3 py-3 text-right font-bold text-[13px]">
                                Số tiền nhận được
                            </th>
                            <th className="px-3 py-3 font-bold text-[13px] text-center">
                                Thời gian tạo hóa đơn
                            </th>
                            <th className="px-3 py-3 font-bold text-[13px] text-center">
                                Cập nhật
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {history.map((h, index) => (
                            <tr
                                key={h.id}
                                className={`
                                    border-t border-neutral-200 dark:border-neutral-800
                                    transition-all duration-500 ease-out
                                    ${index < visibleRows
                                        ? "opacity-100 translate-y-0"
                                        : "opacity-0 translate-y-4"
                                    }
                                `}
                                style={{
                                    transitionDelay: `${index * 50}ms`,
                                }}
                            >
                                <td className="px-3 py-4">
                                    <span className="text-[#3C2D8F] px-1 py-0.5 rounded text-xs font-semibold">
                                        #{h.id}
                                    </span>
                                </td>
                                <td className="px-3 py-4 text-center">
                                    <span
                                        className={`
                                            inline-flex justify-end rounded
                                            px-2 py-0.5 text-[10px] font-bold
                                            ${statusStyles[h.status] ?? "bg-gray-400 text-white"}
                                        `}
                                    >
                                        {h.status}
                                    </span>
                                </td>
                                <td className="px-3 py-4 text-[13px] font-medium">{h.bank}</td>
                                <td className="px-3 py-4 text-right text-[13px] font-medium">
                                    {formatVND(h.needPay)}
                                </td>
                                <td className="px-3 py-4 text-right text-[13px] font-medium">
                                    {formatVND(h.received)}
                                </td>
                                <td className="px-3 py-4 whitespace-nowrap text-center text-[13px] font-medium">
                                    {h.createdAt}
                                </td>
                                <td className="px-3 py-4 whitespace-nowrap text-center text-[13px] font-medium">
                                    {h.updatedAt}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}