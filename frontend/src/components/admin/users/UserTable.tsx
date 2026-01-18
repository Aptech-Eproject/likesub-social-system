"use client"

import Badge from "@/components/common/ui/badge";

import {
    Table,
    TableBody,
    TableCell,
    TableHeader,
    TableRow,
} from "../../common/ui/product-table";
import {
    SquarePen,
    Trash
} from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";

interface User {
    id: number;
    user: {
        image: string;
        name: string;
        role: string;
    };
    email: string;
    balance: string;
    totalDeposit: string;
    discount: string;
    isAdmin: boolean;
    status: "Hoạt động" | "Chờ duyệt" | "Hủy";
}

function UserTable() {

    const tableData: User[] = [
        {
            id: 54,
            user: {
                image: "https://randomuser.me/api/portraits/men/32.jpg",
                name: "hapr2011243",
                role: "Thành viên",
            },
            email: "hapr2011243@gmail.com",
            balance: "0đ",
            totalDeposit: "0đ",
            discount: "0%",
            isAdmin: false,
            status: "Hoạt động",
        },
        {
            id: 53,
            user: {
                image: "https://randomuser.me/api/portraits/men/45.jpg",
                name: "truong123316",
                role: "Thành viên",
            },
            email: "truong123316@gmail.com",
            balance: "50.000đ",
            totalDeposit: "200.000đ",
            discount: "2%",
            isAdmin: false,
            status: "Chờ duyệt",
        },
        {
            id: 48,
            user: {
                image: "https://randomuser.me/api/portraits/men/19.jpg",
                name: "maitlunghau",
                role: "Admin",
            },
            email: "tchunhau2006@gmail.com",
            balance: "1.200.000đ",
            totalDeposit: "5.000.000đ",
            discount: "10%",
            isAdmin: true,
            status: "Hoạt động",
        },
        {
            id: 47,
            user: {
                image: "https://randomuser.me/api/portraits/women/21.jpg",
                name: "linhnguyen",
                role: "Thành viên",
            },
            email: "linhnguyen@gmail.com",
            balance: "120.000đ",
            totalDeposit: "800.000đ",
            discount: "3%",
            isAdmin: false,
            status: "Hoạt động",
        },
        {
            id: 46,
            user: {
                image: "https://randomuser.me/api/portraits/men/12.jpg",
                name: "hoangdev",
                role: "Moderator",
            },
            email: "hoangdev@gmail.com",
            balance: "300.000đ",
            totalDeposit: "1.500.000đ",
            discount: "5%",
            isAdmin: false,
            status: "Hoạt động",
        },
        {
            id: 45,
            user: {
                image: "https://randomuser.me/api/portraits/women/45.jpg",
                name: "thutrang",
                role: "Thành viên",
            },
            email: "thutrang@gmail.com",
            balance: "0đ",
            totalDeposit: "0đ",
            discount: "0%",
            isAdmin: false,
            status: "Hủy",
        },
        {
            id: 44,
            user: {
                image: "https://randomuser.me/api/portraits/men/8.jpg",
                name: "phucit",
                role: "Thành viên",
            },
            email: "phucit@gmail.com",
            balance: "20.000đ",
            totalDeposit: "100.000đ",
            discount: "1%",
            isAdmin: false,
            status: "Chờ duyệt",
        },
        {
            id: 43,
            user: {
                image: "https://randomuser.me/api/portraits/men/67.jpg",
                name: "admin02",
                role: "Admin",
            },
            email: "admin02@gmail.com",
            balance: "5.000.000đ",
            totalDeposit: "20.000.000đ",
            discount: "15%",
            isAdmin: true,
            status: "Hoạt động",
        },
        {
            id: 42,
            user: {
                image: "https://randomuser.me/api/portraits/women/12.jpg",
                name: "ngocanh",
                role: "Thành viên",
            },
            email: "ngocanh@gmail.com",
            balance: "75.000đ",
            totalDeposit: "500.000đ",
            discount: "2%",
            isAdmin: false,
            status: "Hoạt động",
        },
        {
            id: 41,
            user: {
                image: "https://randomuser.me/api/portraits/men/90.jpg",
                name: "tester01",
                role: "Tester",
            },
            email: "tester01@gmail.com",
            balance: "10.000đ",
            totalDeposit: "50.000đ",
            discount: "0%",
            isAdmin: false,
            status: "Chờ duyệt",
        },
    ];

    const router = useRouter();

    return (
        <div className="overflow-hidden bg-white dark:divide-white/5 dark:bg-white/3">
            <div className="max-w-full overflow-x-auto">
                <div className="w-full">
                    <Table>
                        {/* Table Header */}
                        <TableHeader className="border-b border-gray-200 dark:divide-white/5 bg-slate bg-slate-100">
                            <TableRow>
                                {/* Username */}
                                <TableCell
                                    isHeader
                                    className="px-5 py-4 font-bold text-gray-500 text-start text-[13px] dark:text-gray-400"
                                >
                                    Username
                                </TableCell>

                                {/* Email */}
                                <TableCell
                                    isHeader
                                    className="px-5 py-4 font-bold text-gray-500 text-start text-[13px] dark:text-gray-400"
                                >
                                    Email
                                </TableCell>

                                {/* Balance */}
                                <TableCell
                                    isHeader
                                    className="px-5 py-4 font-bold text-gray-500 text-right text-[13px] dark:text-gray-400"
                                >
                                    Số dư
                                </TableCell>

                                {/* Total Deposit */}
                                <TableCell
                                    isHeader
                                    className="px-5 py-4 font-bold text-gray-500 text-right text-[13px] dark:text-gray-400"
                                >
                                    Tổng nạp
                                </TableCell>

                                {/* Role */}
                                <TableCell
                                    isHeader
                                    className="px-5 py-4 font-bold text-gray-500 text-center text-[13px] dark:text-gray-400"
                                >
                                    Vai trò
                                </TableCell>

                                {/* Discount */}
                                <TableCell
                                    isHeader
                                    className="px-0 py-4 font-bold text-gray-500 text-center text-[13px] dark:text-gray-400"
                                >
                                    Chiết khấu
                                </TableCell>

                                {/* Status */}
                                <TableCell
                                    isHeader
                                    className="px- py-4 font-bold text-gray-500 text-center text-[13px] dark:text-gray-400"
                                >
                                    Trạng thái
                                </TableCell>

                                {/* Actions */}
                                <TableCell
                                    isHeader
                                    className="px-5 py-4 font-bold text-gray-500 text-start text-[13px] dark:text-gray-400"
                                >
                                    Thao tác
                                </TableCell>
                            </TableRow>
                        </TableHeader>

                        {/* Table Body */}
                        <TableBody className="divide-y divide-gray-200 dark:divide-white/5">
                            {tableData.map((user) => (
                                <TableRow
                                    key={user.id}
                                    className="
                                        transition-colors
                                        hover:bg-gray-100
                                        dark:hover:bg-white/1
                                    "
                                >
                                    {/* Username */}
                                    <TableCell className="px-5 py-4 sm:px-6 text-start">
                                        <div className="flex items-center gap-3">
                                            {/* User Image */}
                                            <div className="w-10 h-10 overflow-hidden rounded-full">
                                                <Image
                                                    width={40}
                                                    height={40}
                                                    src={user.user.image}
                                                    alt={user.user.name}
                                                />
                                            </div>

                                            {/* User ID */}
                                            <div>
                                                <Link
                                                    href={`/admin/users/${user.id}/info`}
                                                    className="block font-bold text-gray-800 text-sm dark:text-white/90 hover:underline cursor-pointer"
                                                >
                                                    {user.user.name}
                                                </Link>
                                                <span className="block text-gray-500 text-xs dark:text-gray-400">
                                                    #{user.id}
                                                </span>
                                            </div>
                                        </div>
                                    </TableCell>

                                    {/* Email */}
                                    <TableCell className="px-4 py-3 text-gray-600 text-start text-sm dark:text-gray-400 font-medium">
                                        {user.email}
                                    </TableCell>

                                    {/* Balance */}
                                    <TableCell className="px-4 py-3 text-[#0000FF] text-right text-[13px] font-bold">
                                        {user.balance}
                                    </TableCell>

                                    {/* Total Deposit */}
                                    <TableCell className="px-4 py-3 text-[#FF0000] text-right text-[13px] font-bold">
                                        {user.totalDeposit}
                                    </TableCell>

                                    {/* Role */}
                                    <TableCell className="px-4 py-3 text-gray-600 text-center text-xs dark:text-gray-400 font-medium w-fit">
                                        {user.user.role}
                                    </TableCell>

                                    {/* Discount */}
                                    <TableCell className="px-6 py-3 text-gray-600 text-[13px] dark:text-gray-400 text-center font-bold">
                                        {user.discount}
                                    </TableCell>

                                    {/* Status */}
                                    <TableCell className="px-0 py-3 text-gray-500 text-sm dark:text-gray-400 text-center">
                                        <Badge
                                            size="xs"
                                            color={
                                                user.status === "Hoạt động"
                                                    ? "success"
                                                    : user.status === "Chờ duyệt"
                                                        ? "warning"
                                                        : "error"
                                            }
                                        >
                                            {user.status}
                                        </Badge>
                                    </TableCell>

                                    {/* Actions */}
                                    <TableCell className="py-3 text-gray-500 text-start text-sm dark:text-gray-400">
                                        <div className="flex items-center justify-center px-4 py-0 gap-2">
                                            {/* View Button */}
                                            <button
                                                onClick={() => router.push(`/admin/users/${user.id}/info`)}
                                                className="flex items-center gap-1 p-2 bg-[#846adf] text-white rounded-lg hover:bg-purple-700 transition cursor-pointer"
                                            >
                                                <SquarePen className="w-4 h-4" />
                                            </button>

                                            {/* Edit Button */}
                                            <button
                                                className="flex items-center gap-1 p-2 bg-[#e6533c] text-white rounded-lg hover:bg-orange-700 transition cursor-pointer"
                                            >
                                                <Trash className="w-4 h-4" />
                                            </button>
                                        </div>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>
            </div>
        </div>
    );
}

export default UserTable;