"use client"

import { Input } from "@/components/common/ui/input";
import { Label } from "@/components/common/ui/label";
import Dropzone from "@/components/common/ui/dropzone";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/common/ui/select";
import {
    InputGroup,
    InputGroupAddon,
    InputGroupText,
    InputGroupTextarea,
} from "@/components/common/ui/input-group";

import AdminSubHeader from "@/layouts/admin/AdminSubHeader";

function AddProduct() {
    const titlePage = "thêm mới sản phẩm"

    return (
        <div>
            {/* Page Breadcrumb */}
            <AdminSubHeader titlePage={titlePage} />

            {/* Main Table */}
            <div className="p-6 w-full flex flex-col gap-6">
                {/* Product Info */}
                <div className="bg-white rounded-2xl border border-gray-200">
                    {/* Title Form */}
                    <div className="px-6 py-4 flex items-center justify-between w-full border-b border-gray-200">
                        <div className="flex flex-col items-start">
                            <span className="text-lg font-medium text-slate-800">
                                Thông tin sản phẩm
                            </span>
                            <span className="text-[13px] text-gray-500">
                                Tạo sản phẩm mới cho cửa hàng của bạn.
                            </span>
                        </div>
                    </div>

                    {/* Row Input - 1 */}
                    <div className="py-3 px-6 mt-2  relative flex items-center justify-between gap-6">
                        {/* Product Name */}
                        <div className="grid w-full items-center gap-3">
                            <Label htmlFor="email">
                                Tên sản phẩm
                            </Label>
                            <Input
                                type="email"
                                id="email"
                                placeholder="Nhập tên sản phẩm"
                            />
                        </div>

                        {/* Product Category */}
                        <div className="grid w-full items-center gap-3">
                            <Label htmlFor="email">
                                Doanh mục
                            </Label>
                            <Select>
                                <SelectTrigger className="w-full">
                                    <SelectValue placeholder="Chọn một doanh mục" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectLabel>
                                            Doanh mục
                                        </SelectLabel>
                                        <SelectItem value="apple">Laptop</SelectItem>
                                        <SelectItem value="banana">MacBook</SelectItem>
                                        <SelectItem value="blueberry">Phone</SelectItem>
                                        <SelectItem value="grapes">Watch</SelectItem>
                                        <SelectItem value="pineapple">Electronics</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>

                    {/* Row Input - 2 */}
                    <div className="py-3 px-6 relative flex items-center justify-between gap-6">
                        {/* Product Brand */}
                        <div className="grid w-full items-center gap-3">
                            <Label htmlFor="brand">
                                Thương hiệu
                            </Label>
                            <Select>
                                <SelectTrigger className="w-full">
                                    <SelectValue placeholder="Chọn một thương hiệu" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectLabel>
                                            Thương hiệu
                                        </SelectLabel>
                                        <SelectItem value="Apple">Apple</SelectItem>
                                        <SelectItem value="IOS">IOS</SelectItem>
                                        <SelectItem value="Samsung">Samsung</SelectItem>
                                        <SelectItem value="LG">LG</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        </div>

                        {/* Product Color */}
                        <div className="grid w-full items-center gap-3">
                            <Label htmlFor="email">
                                Màu
                            </Label>
                            <Select>
                                <SelectTrigger className="w-full">
                                    <SelectValue placeholder="Chọn một màu sắc" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectLabel>
                                            Màu sắc
                                        </SelectLabel>
                                        <SelectItem value="silver">Bạc</SelectItem>
                                        <SelectItem value="black">Đen</SelectItem>
                                        <SelectItem value="white">Trắng</SelectItem>
                                        <SelectItem value="gray">Xám</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>

                    {/* Row Input - 3 */}
                    <div className="py-3 px-6 mb-4 relative flex items-center justify-between gap-6">
                        {/* Product Description */}
                        <div className="grid w-full items-center gap-3">
                            <Label htmlFor="brand">
                                Mô tả sản phẩm
                            </Label>
                            <InputGroup>
                                <InputGroupTextarea placeholder="Nhập mô tả của sản phẩm (tùy chọn)" />
                                <InputGroupAddon align="block-end">
                                    <InputGroupText className="text-muted-foreground text-xs">
                                        1200 characters left
                                    </InputGroupText>
                                </InputGroupAddon>
                            </InputGroup>
                        </div>
                    </div>
                </div>

                {/* Pricing & Availability */}
                <div className="bg-white rounded-2xl border border-gray-200">
                    {/* Title Form */}
                    <div className="px-6 py-4 flex items-center justify-between w-full border-b border-gray-200">
                        <div className="flex flex-col items-start">
                            <span className="text-lg font-medium text-slate-800">
                                Giá cả & Tình trạng sản phẩm
                            </span>
                        </div>
                    </div>

                    {/* Row Input - 1 */}
                    <div className="py-3 px-6 relative flex items-center justify-between gap-6">
                        {/* Product Weight */}
                        <div className="grid w-full items-center gap-3">
                            <Label htmlFor="brand">
                                Trọng lượng (KG)
                            </Label>
                            <Input
                                type="number"
                                id="weight"
                                placeholder="15"
                            />
                        </div>

                        {/* Product Length */}
                        <div className="grid w-full items-center gap-3">
                            <Label htmlFor="email">
                                Dài (CM)
                            </Label>
                            <Input
                                type="number"
                                id="length"
                                placeholder="120"
                            />
                        </div>

                        {/* Product Width */}
                        <div className="grid w-full items-center gap-3">
                            <Label htmlFor="email">
                                Rộng (CM)
                            </Label>
                            <Input
                                type="number"
                                id="width"
                                placeholder="23"
                            />
                        </div>
                    </div>

                    {/* Row Input - 2 */}
                    <div className="py-3 px-6 mb-4 relative flex items-center justify-between gap-6">
                        {/* Stock Quantity */}
                        <div className="grid w-full items-center gap-3">
                            <Label htmlFor="brand">
                                Số lượng có sẵn
                            </Label>
                            <Input
                                type="number"
                                id="status"
                                placeholder="0"
                            />
                        </div>

                        {/* Availability Status */}
                        <div className="grid w-full items-center gap-3">
                            <Label htmlFor="brand">
                                Tình trạng
                            </Label>
                            <Select>
                                <SelectTrigger className="w-full">
                                    <SelectValue placeholder="Chọn một tình trạng" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectLabel>
                                            Tình trạng
                                        </SelectLabel>
                                        <SelectItem value="in-stock">Còn hàng</SelectItem>
                                        <SelectItem value="out-of-stock">Hết hàng</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                </div>

                {/* Products Images */}
                <div className="bg-white rounded-2xl border border-gray-200">
                    <Dropzone />
                </div>
            </div>

            {/* Action Form */}
            <div className="px-6 mb-4 flex items-start justify-end gap-3">
                <button
                    className="px-4 py-3 border border-gray-300 text-sm bg-white hover:bg-gray-100 text-slate-800 rounded-md cursor-pointer transition-colors duration-300"
                >
                    Draft
                </button>
                <button
                    className="px-4 py-3 text-sm bg-[#5f73ff] hover:opacity-90 text-white rounded-md cursor-pointer transition-all duration-300"
                >
                    Publish Product
                </button>
            </div>
        </div>
    )
}

export default AddProduct