"use client";
import { FlagOff } from "lucide-react";
import { useState } from "react";
import type { OrderItem } from "@/types/order.type";
import { STATUS_CONFIG } from "@/utils/status.order-history.util";

interface OrderHistoriesTableProps {
    orders: OrderItem[];
    itemsPerPage: number;
}

export default function OrderHistoriesTable({
    orders,
    itemsPerPage,
}: OrderHistoriesTableProps) {
    const [copiedId, setCopiedId] = useState<string | null>(null);

    async function copyToClipboard(text: string) {
        try {
            if (navigator?.clipboard?.writeText) {
                await navigator.clipboard.writeText(text);
            } else {
                const textarea = document.createElement("textarea");
                textarea.value = text;
                textarea.style.position = "fixed";
                textarea.style.left = "-9999px";
                document.body.appendChild(textarea);
                textarea.focus();
                textarea.select();
                document.execCommand("copy");
                document.body.removeChild(textarea);
            }
        } catch (e) { }
    }

    const handleCopy = async (link: string, id: string) => {
        await copyToClipboard(link);
        setCopiedId(id);
        setTimeout(
            () => setCopiedId((curr) => (curr === id ? null : curr)),
            1200
        );
    };

    return (
        <div className="w-full overflow-x-auto! overflow-y-auto! max-h-[600px]">
            <table className="w-full text-sm border-collapse">
                <thead className="bg-gray-900 text-white border-b border-gray-200 sticky top-0 z-10">
                    <tr>
                        <th className="px-4 py-3 text-left font-semibold whitespace-nowrap min-w-[140px]">
                            Mã đơn hàng
                        </th>
                        <th className="px-4 py-3 text-left font-semibold whitespace-nowrap min-w-[160px]">
                            Thời gian đặt hàng
                        </th>
                        <th className="px-4 py-3 text-left font-semibold whitespace-nowrap min-w-[200px]">
                            Dịch vụ
                        </th>
                        <th className="px-4 py-3 text-left font-semibold whitespace-nowrap min-w-[180px]">
                            Liên kết
                        </th>
                        <th className="px-4 py-3 text-left font-semibold whitespace-nowrap min-w-[100px]">
                            Bình luận
                        </th>
                        <th className="px-4 py-3 text-left font-semibold whitespace-nowrap min-w-[120px]">
                            Trạng thái
                        </th>
                        <th className="px-4 py-3 text-left font-semibold whitespace-nowrap min-w-[100px]">
                            Thanh toán
                        </th>
                        <th className="px-4 py-3 text-left font-semibold whitespace-nowrap min-w-[140px]">
                            Số lượng cần tăng
                        </th>
                        <th className="px-4 py-3 text-left font-semibold whitespace-nowrap min-w-[80px]">
                            Bản dự
                        </th>
                        <th className="px-4 py-3 text-left font-semibold whitespace-nowrap min-w-[80px]">
                            Còn lại
                        </th>
                        <th className="px-4 py-3 text-left font-semibold whitespace-nowrap min-w-[160px]">
                            Cập nhật
                        </th>
                        <th className="px-4 py-3 text-center font-semibold whitespace-nowrap min-w-[100px]">
                            Thao tác
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {orders.slice(0, itemsPerPage).map((order) => (
                        <tr
                            key={order.id}
                            className="border-b border-gray-200 hover:bg-gray-50"
                        >
                            <td className="px-4 py-3 whitespace-nowrap">
                                <span className="bg-blue-100 text-blue-800 px-1 py-0.5 rounded text-xs font-semibold">
                                    {order.orderCode}
                                </span>
                            </td>
                            <td className="px-4 py-3 text-gray-700 whitespace-nowrap">
                                <span className="bg-gray-100 text-blue-800 px-0.5 py-0.2 rounded text-xs font-semibold">
                                    {order.datetime}
                                </span>
                            </td>
                            <td className="px-4 py-3 text-gray-700">
                                <div className="max-w-[200px] truncate" title={order.serviceName}>
                                    {order.serviceName}
                                </div>
                            </td>
                            <td className="px-4 py-3">
                                <div className="relative flex items-center gap-2">
                                    <button
                                        type="button"
                                        title={order.link}
                                        onClick={() =>
                                            handleCopy(order.link, order.id)
                                        }
                                        className="inline-block w-[150px] bg-gray-100 border border-gray-300 rounded px-2 py-1 text-xs text-gray-800 truncate cursor-pointer hover:bg-gray-50 active:bg-gray-100"
                                    >
                                        {order.link}
                                    </button>
                                    {copiedId === order.id && (
                                        <span className="absolute -top-7 left-0 z-20 bg-emerald-600 text-white text-[10px] leading-none px-2 py-1 rounded shadow whitespace-nowrap">
                                            Đã copy
                                        </span>
                                    )}
                                </div>
                            </td>
                            <td className="px-4 py-3 text-gray-700 whitespace-nowrap">
                                {order.comment}
                            </td>
                            <td className="px-4 py-3 whitespace-nowrap">
                                <span
                                    className={`px-2 py-1 rounded-full text-xs font-semibold ${STATUS_CONFIG[order.status].bg
                                        } ${STATUS_CONFIG[order.status].text}`}
                                >
                                    {order.status}
                                </span>
                            </td>
                            <td className="px-4 py-3 whitespace-nowrap">
                                <span className="px-2 py-1 rounded-full text-xs font-semibold">
                                    {order.payment}
                                </span>
                            </td>
                            <td className="px-4 py-3 font-semibold text-green-600 whitespace-nowrap">
                                {order.quantity}
                            </td>
                            <td className="px-4 py-3 text-gray-700 whitespace-nowrap">
                                {order.revenue}
                            </td>
                            <td className="px-4 py-3 text-gray-700 whitespace-nowrap">
                                {order.remaining}
                            </td>
                            <td className="px-4 py-3 text-gray-500 text-xs whitespace-nowrap">
                                <span className="bg-gray-100 text-blue-800 px-0.5 py-0.2 rounded text-xs font-semibold">
                                    {order.datetime}
                                </span>
                            </td>
                            <td className="px-4 py-3 text-center whitespace-nowrap">
                                <div className="flex items-center justify-center gap-2">
                                    <button className="p-1 hover:bg-gray-200 rounded text-blue-600 hover:text-blue-800">
                                        <FlagOff size={16} color="red" />
                                    </button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}