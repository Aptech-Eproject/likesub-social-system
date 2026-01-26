"use client";

import Link from "next/link";
import { Edit2, Trash2, Loader2 } from "lucide-react";
import { useMyPayments } from "@/hooks/api/usePayment";
import { Payment, PaymentStatus } from "@/types/payment.type";

const formatCurrency = (amount: number): string => {
    return new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND'
    }).format(amount);
};

const getStatusClassName = (status: PaymentStatus): string => {
    const statusMap = {
        'Pending': 'bg-[#fbbf24] text-white w-26',
        'Completed': 'bg-green-500 text-white w-20',
        'Expired': 'bg-[#f05252] text-white w-14',
        'Cancelled': 'bg-gray-500 text-white w-14',
    };
    return statusMap[status] || 'bg-gray-500 text-white w-14';
};

const getStatusText = (status: PaymentStatus): string => {
    const statusTextMap = {
        'Pending': 'Chưa thanh toán',
        'Completed': 'Hoàn thành',
        'Expired': 'Hết hạn',
        'Cancelled': 'Đã hủy',
    };
    return statusTextMap[status] || status;
};

function RechartBankTable() {
    const { data: payments, isLoading, isError, error } = useMyPayments();

    if (isLoading) {
        return (
            <div className="bg-white rounded-sm shadow-sm p-8 flex justify-center items-center">
                <Loader2 className="w-8 h-8 animate-spin text-blue-500" />
                <span className="ml-3 text-gray-600">Đang tải dữ liệu...</span>
            </div>
        );
    }

    if (isError) {
        return (
            <div className="bg-white rounded-sm shadow-sm p-8">
                <div className="text-center text-red-600">
                    <p className="font-semibold">Lỗi khi tải dữ liệu</p>
                    <p className="text-sm mt-2">{error?.message || 'Vui lòng thử lại sau'}</p>
                </div>
            </div>
        );
    }

    if (!payments || payments.length === 0) {
        return (
            <div className="bg-white rounded-sm shadow-sm p-8">
                <div className="text-center text-gray-500">
                    <p className="font-semibold">
                        Chưa có giao dịch nào
                    </p>
                    <p className="text-sm mt-2">Danh sách giao dịch sẽ hiển thị tại đây</p>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-white rounded-sm shadow-sm overflow-hidden">
            <div className="overflow-x-auto relative">
                <div className="inline-block min-w-full align-middle">
                    <table className="min-w-full">
                        {/* Header Table */}
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="px-8 py-3 text-left text-[13px] font-bold text-black">
                                    Thao tác
                                </th>
                                <th className="px-4 py-3 text-left text-[13px] font-bold text-black">
                                    Mã giao dịch
                                </th>
                                <th className="px-4 py-3 text-left text-[13px] font-bold text-black">
                                    Trạng thái
                                </th>
                                <th className="px-4 py-3 text-left text-[13px] font-bold text-black">
                                    Số tiền nạp
                                </th>
                                <th className="px-4 py-3 text-left text-[13px] font-bold text-black">
                                    Thực nhận
                                </th>
                                <th className="px-4 py-3 text-left text-[13px] font-bold text-black">
                                    Ngân hàng
                                </th>
                                <th className="px-4 py-3 text-left text-[13px] font-bold text-black">
                                    Thời gian
                                </th>
                            </tr>
                        </thead>

                        {/* Body */}
                        <tbody>
                            {payments.map((payment: Payment, index: number) => (
                                <tr
                                    key={payment.id}
                                    className={`hover:bg-gray-50 transition-colors ${index % 2 === 1 ? 'bg-gray-100' : 'bg-white'
                                        }`}
                                >
                                    <td className="px-6 py-3">
                                        <div className="flex items-center justify-center gap-2">
                                            <Link
                                                href={`/admin/recharge/bank/${payment.id}`}
                                                className="p-2 bg-[#49b6f5] hover:bg-[#3aa5e3] text-white rounded transition-colors cursor-pointer"
                                                title="Sửa"
                                            >
                                                <Edit2 className="w-4 h-4" />
                                            </Link>
                                            <button
                                                className="p-2 bg-red-600 hover:bg-red-700 text-white rounded transition-colors cursor-pointer"
                                                title="Xóa"
                                            >
                                                <Trash2 className="w-4 h-4" />
                                            </button>
                                        </div>
                                    </td>
                                    <td className="px-4 py-3">
                                        <span className="text-[13px] font-bold text-[#846adf]">
                                            #{payment.txnCode}
                                        </span>
                                    </td>
                                    <td className="px-4 py-3">
                                        <span
                                            className={`py-1 px-2 text-[10px] flex items-center justify-center mx-auto font-bold rounded text-center ${getStatusClassName(payment.status)}`}
                                        >
                                            {getStatusText(payment.status)}
                                        </span>
                                    </td>
                                    <td className="px-4 py-3">
                                        <span className="text-[13px] font-bold text-green-600">
                                            {formatCurrency(payment.amountPaid)}
                                        </span>
                                    </td>
                                    <td className="px-4 py-3">
                                        <span className="text-[13px] font-bold text-red-600">
                                            {formatCurrency(payment.amountReceived)}
                                        </span>
                                    </td>
                                    <td className="px-4 py-3">
                                        <span className="text-[13px] font-bold text-gray-800">
                                            {payment.bankName}
                                        </span>
                                    </td>
                                    <td className="px-4 py-3">
                                        <span className="text-[13px] font-medium text-gray-800">
                                            {new Date(payment.createdAt).toLocaleString('vi-VN')}
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default RechartBankTable;