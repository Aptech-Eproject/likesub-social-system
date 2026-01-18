import {
    Download,
    Plus,
    Search,
    Settings2
} from "lucide-react";

import { Input } from "@/components/common/ui/input";
import Pagination from "@/components/common/ui/pagination";
import StatisticInvoiceCards from "@/components/admin/invoices/StatisticInvoiceCards";
import InvoiceTable from "@/components/admin/invoices/InvoiceTable";
import AdminSubHeader from "@/layouts/admin/AdminSubHeader";
import Link from "next/link";

function Invoices() {
    const titlePage = "danh sách đơn hàng";

    return (
        <div>
            {/* Page Breadcrumb */}
            <AdminSubHeader titlePage={titlePage} />

            {/* Main Table */}
            <div className="p-6 w-full flex flex-col gap-6">
                {/* Statistics Card */}
                <div className="flex flex-col items-center gap-4 bg-white border border-gray-200 rounded-lg p-6">
                    {/* Title Card */}
                    <div className="flex items-center justify-between w-full">
                        <span className="text-lg font-medium text-slate-800">
                            Tổng quan
                        </span>
                        <Link
                            href={"/admin/create-invoice"}
                            className="flex items-center gap-2 cursor-pointer px-4 py-2.5 rounded-lg hover:opacity-90 transition-all duration-300 bg-[#5f73ff]"
                        >
                            <Plus className="w-4 h-4 text-white" />
                            <span className="text-sm text-white font-medium">
                                Create an Invoice
                            </span>
                        </Link>
                    </div>

                    {/* Cards */}
                    <StatisticInvoiceCards />
                </div>

                {/* Invoices */}
                <div className="bg-white rounded-2xl border border-gray-200">
                    {/* Header Table */}
                    <div className="px-6 py-4 flex items-center justify-between w-full border-b border-gray-200">
                        {/* Left Section */}
                        <div className="flex flex-col items-start">
                            <span className="text-lg font-medium text-slate-800">
                                Danh sách đơn hàng
                            </span>
                            <span className="text-[13px] text-gray-500">
                                Theo dõi tiến độ sản phẩn thống kê doanh số.
                            </span>
                        </div>

                        {/* Right Section */}
                        <div className="relative flex items-center gap-4">
                            {/* Search Bar */}
                            <div>
                                <Search
                                    className="w-5 h-5 text-gray-500 absolute -translate-y-1.2 top-2 left-3"
                                />
                                <Input
                                    placeholder="Tìm kiếm đơn hàng"
                                    className="pl-10 bg-white rounded-lg w-[300px] border-gray-300"
                                />
                            </div>

                            {/* Export Button */}
                            <button
                                className="flex items-center gap-2 cursor-pointer px-4 py-2 border border-gray-300 rounded-lg hover:bg-slate-100 transition-colors duration-300"
                            >
                                <span className="text-sm">
                                    Export
                                </span>
                                <Download className="w-4 h-4" />
                            </button>

                            {/* Filter Button */}
                            <button
                                className="flex items-center gap-2 cursor-pointer px-4 py-2 border border-gray-300 rounded-lg hover:bg-slate-100 transition-colors duration-300"
                            >
                                <Settings2 className="w-4 h-4" />
                                <span className="text-sm">
                                    Filter
                                </span>
                            </button>
                        </div>
                    </div>

                    {/* Table */}
                    <InvoiceTable />

                    {/* Bottom Table */}
                    <div className="flex items-center justify-between py-4 px-6 border-t border-gray-200">
                        <div className="flex items-center gap-1 text-xs font-medium">
                            <span className="text-gray-500">Showing</span>
                            <span className="text-slate-800">1</span>
                            <span className="text-gray-500">to</span>
                            <span className="text-slate-800">7</span>
                            <span className="text-gray-500">of</span>
                            <span className="text-slate-800">20</span>
                        </div>

                        {/* Pagination */}
                        <Pagination />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Invoices