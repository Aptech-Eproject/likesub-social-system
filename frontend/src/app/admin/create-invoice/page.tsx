"use client"

import {
    CircleQuestionMark,
    Eye,
    Save
} from "lucide-react";

import { Label } from "@/components/common/ui/label";
import { Input } from "@/components/common/ui/input";
import { QuantityInput } from "@/components/common/ui/input-number-action";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue
} from "@/components/common/ui/select";
import { InvoiceCreateTable } from "@/components/common/ui/invoice-create-table";
import AdminSubHeader from "@/layouts/admin/AdminSubHeader";

function CreateInvoice() {
    const titlePage = "thêm mới hóa đơn";

    return (
        <div>
            {/* Page Breadcrumb */}
            <AdminSubHeader titlePage={titlePage} />

            {/* Main Table */}
            <div className="p-6 w-full flex flex-col gap-6">
                <div className="bg-white flex flex-col rounded-2xl border border-gray-200">
                    {/* Title Page */}
                    <div className="px-6 py-4 flex items-center justify-between w-full border-b border-gray-200">
                        <div className="flex flex-col items-start">
                            <span className="text-lg font-medium text-slate-800">
                                Thêm mới hóa đơn
                            </span>
                            <span className="text-[13px] text-gray-500">
                                Theo dõi tiến độ sản phẩn thống kê doanh số.
                            </span>
                        </div>
                    </div>

                    {/* Invoice Input */}
                    <div className="flex flex-col mt-4 pb-5 border-b border-gray-200">
                        {/* Input - Row 1 */}
                        <div className="py-3 px-6 flex items-center justify-between gap-4">
                            {/* Invoice Number */}
                            <div className="grid w-full items-center gap-3">
                                <Label htmlFor="invoice-number">
                                    Mã hóa đơn
                                </Label>
                                <Input
                                    type="text"
                                    id="invoice-number"
                                    placeholder="WP-3434434"
                                />
                            </div>

                            {/* Customer Number */}
                            <div className="grid w-full items-center gap-3">
                                <Label htmlFor="customer-name">
                                    Tên khách hàng
                                </Label>
                                <Input
                                    type="text"
                                    id="customer-name"
                                    placeholder="Nguyen Van A"
                                />
                            </div>
                        </div>

                        {/* Input - Row 2 */}
                        <div className="py-3 px-6 flex items-center justify-between">
                            {/* Customer Address */}
                            <div className="grid w-full items-center gap-3">
                                <Label htmlFor="address-customer">
                                    Địa chỉ khách hàng
                                </Label>
                                <Input
                                    type="text"
                                    id="address-customer"
                                    placeholder="Nhập địa chỉ của khách hàng"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Table */}
                    <div className="p-6">
                        <InvoiceCreateTable />
                    </div>

                    {/* Product Input to Add Invoice Table */}
                    <div className="px-6 py-6 flex flex-col gap-4">
                        <div className="bg-gray-50 flex flex-col gap-4 rounded-lg border border-gray-200 px-6 py-4">
                            {/* Product Input */}
                            <div className="flex items-center justify-between gap-4">
                                {/* Product & Price Input */}
                                <div className="flex items-center justify-between gap-4 w-full">
                                    {/* Product Name */}
                                    <div className="grid items-center gap-3 min-w-65">
                                        <Label htmlFor="invoice-number">
                                            Tên sản phẩm
                                        </Label>
                                        <Input
                                            type="text"
                                            id="product-"
                                            placeholder="Nhập tên sản phẩm"
                                            className="border-gray-300 bg-white"
                                        />
                                    </div>

                                    {/* Product Price */}
                                    <div className="grid items-center gap-3 min-w-65">
                                        <Label htmlFor="product-price">
                                            Giá tiền
                                        </Label>
                                        <Input
                                            type="number"
                                            id="product-price"
                                            placeholder="Nhập giá sản phẩm"
                                            className="border-gray-300 bg-white"
                                        />
                                    </div>
                                </div>

                                {/* Quantity Input */}
                                <div className="w-full flex flex-col items-start gap-4">
                                    <Label htmlFor="quantity ">
                                        Số lượng
                                    </Label>
                                    <QuantityInput
                                        value={1}
                                        min={1}
                                        max={100}
                                        onChange={(val) => console.log("Quantity:", val)}
                                    // className="w-full"
                                    />
                                </div>

                                {/* Discount Input */}
                                <div className="flex items-center justify-between gap-6 w-full">
                                    <div className="grid w-full items-center gap-3">
                                        <Label htmlFor="brand">
                                            Khuyến mãi
                                        </Label>
                                        <Select>
                                            <SelectTrigger className="w-full border-gray-300 bg-white">
                                                <SelectValue placeholder="0%" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectGroup>
                                                    <SelectLabel>
                                                        Tình trạng
                                                    </SelectLabel>
                                                    <SelectItem value="zero-percent">0%</SelectItem>
                                                    <SelectItem value="one-percent">10%</SelectItem>
                                                    <SelectItem value="two-percent">20%</SelectItem>
                                                    <SelectItem value="five-percent">50%</SelectItem>
                                                </SelectGroup>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                </div>
                            </div>

                            {/* Notes */}
                            <div className="flex items-center gap-2 text-slate-600 text-xs">
                                <CircleQuestionMark className="w-4 h-4" />
                                <span>
                                    Sau khi điền đầy đủ thông tin sản phẩm, nhấn Enter/Return hoặc nhấp vào mục Thêm sản phẩm để thêm sản phẩm vào danh sách.
                                </span>
                            </div>

                            {/* Add Button */}
                            <div className="w-full flex justify-end py-2">
                                <button
                                    className="px-8 py-3 text-sm bg-[#5f73ff] hover:opacity-90 text-white rounded-md cursor-pointer transition-all duration-300 font-medium"
                                >
                                    Save Product
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Order Summary */}
                    <div className="px-6 flex">
                        <div className="flex-1 border-b border-gray-200" />
                        <div className="pb-6 flex flex-col items-start justify-start gap-2 border-b border-gray-200">
                            {/* Order Title */}
                            <span className="text-black text-[13px] font-medium pb-2">
                                Tóm tắt hóa đơn
                            </span>

                            {/* Sub Total */}
                            <div className="flex items-center w-full">
                                <span className="text-slate-500 text-[13px]">
                                    Tổng tiền trước thuế:
                                </span>
                                <div className="w-20" />
                                <span className="text-slate-500 text-[13px]">
                                    $3850.00
                                </span>
                            </div>

                            {/* VAT */}
                            <div className="flex items-center w-full">
                                <span className="text-slate-500 text-[13px]">
                                    Thuế (10%):
                                </span>
                                <div className="flex-1" />
                                <span className="text-slate-500 text-[13px]">
                                    $385.00
                                </span>
                            </div>

                            {/* Total */}
                            <div className="flex items-center w-full">
                                <span className="text-black text-sm font-medium">
                                    Tổng tiền:
                                </span>
                                <div className="flex-1" />
                                <span className="text-black text-sm font-medium">
                                    $4235.00
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Invoice Actions */}
                    <div className="w-full px-6 py-8 flex items-center justify-end gap-3">
                        {/* Preview Button */}
                        <button
                            className="flex items-center gap-2 cursor-pointer px-4 py-3 border border-gray-300 rounded-sm hover:bg-slate-100 transition-colors duration-300"
                        >
                            <Eye className="w-4 h-4" />
                            <span className="text-sm font-medium">
                                Xem trước hóa đơn
                            </span>
                        </button>

                        {/* Add Invoice Button */}
                        <button
                            className="bg-[#5f73ff] flex items-center gap-2 cursor-pointer px-4 py-3 rounded-sm hover:opacity-80 transition-all duration-300"
                        >
                            <Save className="w-4 h-4 text-slate-200" />
                            <span className="text-sm font-medium text-slate-200">
                                Thêm hóa đơn
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreateInvoice