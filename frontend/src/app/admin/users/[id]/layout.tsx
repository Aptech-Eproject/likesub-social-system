import NavContainerUserDetail from "@/components/admin/users/NavContainerUserDetail";
import StatisticUserDetailCards from "@/components/admin/users/StatisticUserDetailCards";
import AdminSubHeader from "@/layouts/admin/AdminSubHeader";

import {
    BadgeCent,
    Calendar,
    ExternalLink,
    History,
    ShieldUser
} from "lucide-react";

import { ActivityHistoryTable } from "@/components/admin/users/ActivityHistoryTable";
import { BalanceFluctuations } from "@/components/admin/users/BalanceFluctuations";
import ScrollToTop from "@/components/common/ScrollToTop";
import UserDetailActions from "@/components/admin/users/UserDetailActions";

interface LayoutProps {
    children: React.ReactNode;
    params: Promise<{ id: string }>
}

export default async function UserDetailLayout({
    children,
    params,
}: LayoutProps) {
    const { id } = await params;

    const titlePage = "thông tin thành viên";
    const prevTitle = "danh sách thành viên";
    const urlPrevTitle = `/admin/users`

    return (
        <div>
            {/* Auto scroll to top */}
            <ScrollToTop />

            {/* Page Breadcrumb */}
            <AdminSubHeader
                titlePage={titlePage}
                prevTitle={prevTitle}
                urlPrevTitle={urlPrevTitle}
            />

            {/* Main Content */}
            <div className="p-6 w-full flex flex-col gap-6">
                {/* User Review */}
                <div className="bg-white p-6 rounded-md border border-gray-200 flex justify-between">
                    {/* User Info */}
                    <div className="flex items-center gap-6 justify-center">
                        {/* Left Side - Avatar */}
                        <div className="bg-blue-500 flex items-center justify-center rounded-full w-20 h-20">
                            <span className="text-white text-4xl font-bold">TC</span>
                        </div>

                        {/* Right Side - Info */}
                        <div className="flex flex-col items-start justify-between gap-4">
                            <div className="flex items-center gap-8">
                                {/* Username */}
                                <span className="text-2xl text-slate-800 font-bold">
                                    maaitlunghau
                                </span>

                                {/* Badge */}
                                <div className="bg-green-600 rounded-xl py-1 px-3">
                                    <span className="text-white font-bold text-xs">
                                        Hoạt động
                                    </span>
                                </div>
                            </div>

                            <div className="space-y-1">
                                {/* ID */}
                                <div className="flex items-center gap-2">
                                    <ShieldUser className="w-3.5 h-3.5 text-gray-500" />

                                    <div className="text-gray-500">
                                        <span className="font-medium text-[13px]">
                                            ID:
                                        </span>
                                        <span className="font-bold text-[13px] ml-1">
                                            #48
                                        </span>
                                    </div>
                                </div>

                                {/* Created At */}
                                <div className="flex items-center gap-2">
                                    <Calendar className="w-3.5 h-3.5 text-gray-500" />

                                    <div className="text-gray-500">
                                        <span className="font-medium text-[13px]">
                                            Tham gia:
                                        </span>
                                        <span className="font-bold text-[13px] ml-1">
                                            16/12/2025
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* User Actions */}
                    <UserDetailActions />
                </div>

                {/* Statistic Container */}
                <StatisticUserDetailCards />

                {/* Main Information */}
                <div className="bg-white flex flex-col gap-6 px-6 py-6 rounded-md border border-gray-200">
                    {/* Nav Container */}
                    <NavContainerUserDetail id={id} />

                    {/* Container */}
                    {children}
                </div>

                {/* User History & Balance Fluctuations */}
                <div className="flex justify-between gap-6">
                    {/* User Activity History */}
                    <div className="w-full bg-white rounded-md shadow-sm">
                        {/* Title */}
                        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
                            <div className="flex items-center gap-3">
                                <div className="w-1 h-6 bg-purple-200 rounded-full" />
                                <History className="w-4 h-4 text-gray-700" />
                                <h2 className="text-[15px] font-bold text-gray-800 uppercase">
                                    Nhật ký hoạt động gần nhất
                                </h2>
                            </div>
                            <button className="flex items-center gap-1 px-3 py-1.5 text-xs! font-medium text-purple-600 border border-purple-600 rounded-sm hover:bg-purple-600 hover:text-white cursor-pointer duration-400 transition-all">
                                <ExternalLink className="w-3 h-3" />
                                Xem tất cả
                            </button>
                        </div>

                        {/* Table */}
                        <div className="px-6 py-2 pb-4">
                            <ActivityHistoryTable />
                        </div>
                    </div>

                    {/* Balance Fluctuations */}
                    <div className="w-full bg-white rounded-md shadow-sm">
                        {/* Title */}
                        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
                            <div className="flex items-center gap-3">
                                <div className="w-1 h-6 bg-purple-200 rounded-full" />
                                <BadgeCent className="w-4 h-4 text-gray-700" />
                                <h2 className="text-[15px] font-bold text-gray-800 uppercase">
                                    Biến động số dư gần nhất
                                </h2>
                            </div>
                            <button className="flex items-center gap-1 px-3 py-1.5 text-xs! font-medium text-purple-600 border border-purple-600 rounded-sm hover:bg-purple-600 hover:text-white cursor-pointer duration-400 transition-all">
                                <ExternalLink className="w-3 h-3" />
                                Xem tất cả
                            </button>
                        </div>

                        {/* Table */}
                        <div className="px-6 py-2">
                            <BalanceFluctuations />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
