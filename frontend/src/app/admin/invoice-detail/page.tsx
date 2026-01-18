"use client"

import { Printer } from "lucide-react";

import { InvoiceDetailTable } from "@/components/common/ui/invoice-detail-table";
import AdminSubHeader from "@/layouts/admin/AdminSubHeader";

function InvoiceDetail() {
    const titlePage = "thông tin đơn hàng";

    return (
        <div>
            {/* Page Breadcrumb */}
            <AdminSubHeader titlePage={titlePage} />

            {/* Main Table */}
            <div className="p-6">
                <div className="bg-white w-full flex flex-col gap-6 border pb-6 border-gray-200 rounded-lg">
                    {/* Invoice Title */}
                    <div className="flex items-center justify-between gap-4 px-6 py-4 border-b border-gray-200">
                        <span className="text-lg font-medium text-slate-800">
                            Hóa đơn chi tiết
                        </span>
                        <span className="text-sm text-slate- font-medium">
                            ID : #348
                        </span>
                    </div>

                    {/* Invoice Info */}
                    <div className="flex items-center justify-between gap-4 px-6">
                        {/* From Info */}
                        <div className="w-full flex flex-col items-start justify-between gap-4">
                            <div className="flex flex-col items-start gap-1.5">
                                <span className="font-medium text-sm text-slate-700">
                                    Người gửi
                                </span>
                                <span className="font-bold text-slate-800 text-[15px]">
                                    Pimjo LLC
                                </span>

                                <div className="flex flex-col">
                                    <span className="text-slate-500 text-[13px]">
                                        1280, Clair Street,
                                    </span>
                                    <span className="text-slate-500 text-[13px]">
                                        Massachusetts, New York - 02543
                                    </span>
                                </div>
                            </div>
                            <div className="flex flex-col gap-1.5">
                                <span className="font-medium text-sm text-slate-700">
                                    Ngày gửi:
                                </span>
                                <span className="text-slate-500 text-[13px]">
                                    11 March, 2027
                                </span>
                            </div>
                        </div>

                        {/* Space Box 1 */}
                        <div className="w-full" />

                        {/* Divide Vertical */}
                        <div className="border-r border-gray-200 self-stretch" />

                        {/* Space Box 2 */}
                        <div className="w-full" />

                        {/* To Info */}
                        <div className="w-full flex flex-col items-end justify-between gap-4">
                            <div className="flex flex-col items-end gap-1.5">
                                <span className="font-medium text-sm text-slate-700">
                                    Người nhận
                                </span>
                                <span className="font-bold text-slate-800 text-[15px]">
                                    Albert Word
                                </span>
                                <div className="flex flex-col items-end">
                                    <span className="text-slate-500 text-[13px]">
                                        355, Shobe Lane
                                    </span>
                                    <span className="text-slate-500 text-[13px]">
                                        Colorado, Fort Collins - 80543
                                    </span>
                                </div>
                            </div>
                            <div className="flex flex-col items-end gap-1.5">
                                <span className="font-medium text-sm text-slate-700">
                                    Ngày nhận:
                                </span>
                                <span className="text-slate-500 text-[13px]">
                                    16 March, 2027
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Invoice Table */}
                    <div className="px-6 pt-2">
                        <InvoiceDetailTable />
                    </div>

                    {/* Invoice Overall */}
                    <div className="px-6 flex">
                        <div className="flex-1 border-b border-gray-200" />
                        <div className="pb-6 flex flex-col items-start justify-start gap-2 border-b border-gray-200">
                            {/* Sub Total */}
                            <div className="flex items-center w-full">
                                <span className="text-slate-500 text-[13px]">
                                    Tổng tiền trước thuế:
                                </span>
                                <div className="w-20" />
                                <span className="text-slate-500 text-[13px]">
                                    $3,098
                                </span>
                            </div>

                            {/* VAT */}
                            <div className="flex items-center w-full">
                                <span className="text-slate-500 text-[13px]">
                                    Thuế (10%):
                                </span>
                                <div className="flex-1" />
                                <span className="text-slate-500 text-[13px]">
                                    $312
                                </span>
                            </div>

                            {/* Total */}
                            <div className="flex items-center w-full">
                                <span className="text-black text-sm font-medium">
                                    Tổng tiền:
                                </span>
                                <div className="flex-1" />
                                <span className="text-black text-sm font-medium">
                                    $3,410
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Invoice Actions */}
                    <div className="w-full px-6 flex items-center justify-end gap-3">
                        {/* Payment Button */}
                        <button
                            className="flex items-center gap-2 cursor-pointer px-4 py-3 border border-gray-300 rounded-sm hover:bg-slate-100 transition-colors duration-300"
                        >
                            <span className="text-sm font-medium">
                                Tiến hành thanh toán
                            </span>
                        </button>

                        {/* Print Button */}
                        <button
                            className="bg-[#5f73ff] flex items-center gap-2 cursor-pointer px-4 py-3 rounded-sm hover:opacity-80 transition-all duration-300"
                        >
                            <Printer className="w-4 h-4 text-slate-200" />
                            <span className="text-sm font-medium text-slate-200">
                                In hóa đơn
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InvoiceDetail