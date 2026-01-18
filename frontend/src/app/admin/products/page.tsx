import {
    Download,
    Plus,
    Search,
    Settings2
} from "lucide-react";
import Link from "next/link";

import { Input } from "@/components/common/ui/input";
import Pagination from "@/components/common/ui/pagination";

import ProductTable from "@/components/admin/products/ProductTable";
import AdminSubHeader from "@/layouts/admin/AdminSubHeader";
import StatisticProductCards from "@/components/admin/products/StatisticProductCards";

function Products() {
    const titlePage = "danh sách sản phẩm";

    return (
        <div>
            {/* Page Breadcrumb */}
            <AdminSubHeader titlePage={titlePage} />

            {/* Main Table */}
            <div className="p-6 w-full flex flex-col gap-6">
                {/* Statistic Card */}
                <StatisticProductCards />

                {/* Products */}
                <div className="bg-white rounded-2xl border border-gray-200">
                    {/* Title Table */}
                    <div className="px-6 py-4 flex items-center justify-between min-w-0 w-full border-b border-gray-200">
                        <div className="flex flex-col items-start min-w-0">
                            <span className="text-lg font-medium text-slate-800">
                                Danh sách sản phẩm
                            </span>
                            <span className="text-[13px] text-gray-500">
                                Theo dõi tiến độ sản phẩn thúc đẩy doanh số.
                            </span>
                        </div>

                        <div className="flex items-center gap-4 shrink-0">
                            {/* Export Button */}
                            <button
                                className="flex items-center gap-2 cursor-pointer px-4 py-2 border border-gray-300 rounded-lg hover:bg-slate-100 transition-colors duration-300"
                            >
                                <span className="text-sm">
                                    Export
                                </span>
                                <Download className="w-4 h-4" />
                            </button>

                            {/* Add Button */}
                            <Link
                                href={"/admin/add-product"}
                                className="inline-flex! shrink-0 items-center gap-2 cursor-pointer px-4 py-2 rounded-lg hover:opacity-90 transition-opacity duration-300 bg-[#5f73ff]"
                            >
                                <Plus className="w-4 h-4 text-white" />
                                <span className="text-sm text-white font-medium">
                                    Add Product
                                </span>
                            </Link>
                        </div>
                    </div>

                    {/*Search & Filter Table */}
                    <div className="py-4 px-6 relative flex items-center justify-between border-b border-gray-200">
                        {/* Search Bar */}
                        <div>
                            <Search
                                className="w-5 h-5 text-gray-500 absolute -translate-y-1.2 top-6 left-8"
                            />
                            <Input
                                placeholder="Tìm kiếm sản phẩm"
                                className="pl-10 bg-white rounded-sm shadow-sm w-75"
                            />
                        </div>

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

                    {/* Table */}
                    <ProductTable />

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

export default Products