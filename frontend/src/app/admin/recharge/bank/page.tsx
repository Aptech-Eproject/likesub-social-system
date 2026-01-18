import {
    CircleX,
    Search,
} from "lucide-react";

import AdminSubHeader from "@/layouts/admin/AdminSubHeader";
import StatisticsCards from "@/components/admin/recharge-bank/StatisticsCards";
import DepositChart from "@/components/admin/recharge-bank/DepositChart";

import { Input } from "@/components/common/ui/input";
import { Label } from "@/components/common/ui/label";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue
} from "@/components/common/ui/select";
import { DatePicker } from "@/components/common/ui/date-picker";
import RechartBankTable from "@/components/admin/recharge-bank/RechartBankTable";
import Summary from "@/components/admin/recharge-bank/Summary";

async function getRechargeBankData() {
    await new Promise((resolve) => setTimeout(resolve, 1200));
    return { title: "Recharge Bank sData" };
}

async function RechartBankPage() {
    const data = await getRechargeBankData();
    const titlePage = "Nạp tiền ngân hàng";

    return (
        <>
            {/* Page Breadcrumb */}
            <AdminSubHeader titlePage={titlePage} />

            {/* Main Content */}
            <div className="mt-4 p-6 w-full flex flex-col gap-6">
                <div className="flex justify-between gap-6 space-y-6">
                    <StatisticsCards />
                    <DepositChart />
                </div>

                {/* Title Page */}
                <div className="flex flex-col items-center justify-between w-full border-b border-gray-200 bg-white rounded-md">
                    {/* Title Page */}
                    <div className="flex flex-col items-start w-full px-6 py-4 border-b border-gray-200">
                        <span className="text-lg font-medium text-slate-800">
                            Lịch sử hoá đơn nạp tiền
                        </span>
                        <span className="text-[13px] text-gray-500">
                            Theo dõi chi tiết các giao dịch nạp tiền theo thời gian.
                        </span>
                    </div>

                    {/* Search & Filter */}
                    <div className="flex flex-col items-start gap-4 py-3 px-6 border-b border-gray-200">
                        {/* Row 1 - Search Input & Buttons */}
                        <div className="w-full mt-2 relative flex items-center justify-between gap-4 text-sm!">
                            {/* User ID */}
                            <div className="grid w-full items-center gap-3">
                                <Input
                                    type="number"
                                    id="id"
                                    placeholder="ID thành viên"
                                    className="shadow-none"
                                />
                            </div>

                            {/* User Username */}
                            <div className="grid w-full items-center gap-3">
                                <Input
                                    type="text"
                                    id="username"
                                    placeholder="Tên thành viên"
                                    className="shadow-none"
                                />
                            </div>

                            {/* Transaction Code */}
                            <div className="grid w-full items-center gap-3">
                                <Input
                                    type="text"
                                    id="transactionCode"
                                    placeholder="Mã giao dịch"
                                    className="shadow-none"
                                />
                            </div>

                            {/* Bank Name */}
                            <div className="grid w-full items-center gap-3">
                                <Input
                                    type="text"
                                    id="bank"
                                    placeholder="Ngân hàng"
                                    className="shadow-none"
                                />
                            </div>

                            {/* Time */}
                            <div className="grid w-full items-center gap-3">
                                <DatePicker placeholder="Chọn thời gian" className="max-w-60" />
                            </div>

                            {/* Buttons */}
                            <div className="flex w-full items-center gap-2">
                                {/* Search Button */}
                                <button
                                    className="w-26 flex items-center gap-1 cursor-pointer text-white px-2.5 py-2 bg-[#846adf] hover:opacity-90 transition-opacity duration-300 rounded-sm"
                                >
                                    <Search className="w-4 h-4 text-white" />
                                    <span className="text-[13px] text-white font-bold">
                                        Tìm kiếm
                                    </span>
                                </button>

                                {/* Clear Filter Button */}
                                <button
                                    className="w-28 flex items-center gap-1 cursor-pointer text-white px-2.5 py-2 bg-[#e6533c] hover:opacity-80 transition-opacity duration-300 rounded-sm"
                                >
                                    <CircleX className="w-4 h-4 text-white" />
                                    <span className="text-[13px] text-white font-bold">
                                        Xoá bộ lọc
                                    </span>
                                </button>
                            </div>
                        </div>

                        {/* Row 2 - Filter by Date (Select) */}
                        <div className="my-2 w-full flex items-center justify-between text-sm!">
                            {/* Filter Select - Show Quantity */}
                            <div className="flex items-center gap-3">
                                <Label className="w-full" htmlFor="brand">
                                    Số lượng hiển thị:
                                </Label>
                                <Select>
                                    <SelectTrigger className="min-w-26 shadow-none">
                                        <SelectValue placeholder="10" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectGroup>
                                            <SelectLabel>
                                                Show
                                            </SelectLabel>
                                            <SelectItem value="5">5</SelectItem>
                                            <SelectItem value="10">10</SelectItem>
                                            <SelectItem value="20">20</SelectItem>
                                            <SelectItem value="50">50</SelectItem>
                                            <SelectItem value="100">100</SelectItem>
                                            <SelectItem value="500">500</SelectItem>
                                            <SelectItem value="1000">1.000</SelectItem>
                                            <SelectItem value="5000">5000</SelectItem>
                                            <SelectItem value="10000">10.000</SelectItem>
                                            <SelectItem value="12000">15.000</SelectItem>
                                            <SelectItem value="20000">20.000</SelectItem>
                                            <SelectItem value="30000">30.000</SelectItem>
                                            <SelectItem value="40000">40.000</SelectItem>
                                            <SelectItem value="50000">50.000</SelectItem>
                                        </SelectGroup>
                                    </SelectContent>
                                </Select>
                            </div>

                            <div className="flex-1 bg-red-300" />

                            {/* Filter Select - Sort by Date */}
                            <div className="flex items-center gap-3">
                                <Label className="w-full" htmlFor="brand">
                                    Sắp xếp theo ngày:
                                </Label>
                                <Select>
                                    <SelectTrigger className="min-w-26 shadow-none">
                                        <SelectValue placeholder="Tất cả" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectGroup>
                                            <SelectLabel>
                                                Sort by Date
                                            </SelectLabel>
                                            <SelectItem value="All">Tất cả</SelectItem>
                                            <SelectItem value="Hôm nay">Hôm nay</SelectItem>
                                            <SelectItem value="Hôm qua">Hôm qua</SelectItem>
                                            <SelectItem value="Tuần này">Tuần này</SelectItem>
                                            <SelectItem value="Tháng này">Tháng này</SelectItem>
                                        </SelectGroup>
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Table */}
                <RechartBankTable />

                {/* Summary */}
                <Summary />
            </div>
        </>
    );
}

export default RechartBankPage;