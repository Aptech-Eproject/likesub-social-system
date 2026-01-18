import Link from "next/link";
import {
    Edit2,
    Trash2
} from "lucide-react";


interface BankDeposit {
    id: number;
    username: string;
    userId: number;
    transactionCode: string;
    status: 'pending' | 'expired';
    depositAmount: string;
    receivedAmount: string;
    bankName: string;
    createdAt: string;
    updatedAt: string;
}

function RechartBankTable() {
    const bankDeposits: BankDeposit[] = [
        {
            id: 1,
            username: 'admin',
            userId: 1,
            transactionCode: '689714325',
            status: 'pending',
            depositAmount: '10.000đ',
            receivedAmount: '10.000đ',
            bankName: 'Vietcombank',
            createdAt: '2026-01-07 17:04:33',
            updatedAt: '2026-01-07 17:04:33'
        },
        {
            id: 2,
            username: 'admin',
            userId: 1,
            transactionCode: '974135826',
            status: 'pending',
            depositAmount: '100.000đ',
            receivedAmount: '100.000đ',
            bankName: 'Vietcombank',
            createdAt: '2026-01-06 12:52:54',
            updatedAt: '2026-01-06 12:52:54'
        },
        {
            id: 3,
            username: 'admin',
            userId: 1,
            transactionCode: '671892534',
            status: 'pending',
            depositAmount: '100.000đ',
            receivedAmount: '100.000đ',
            bankName: 'Vietcombank',
            createdAt: '2026-01-05 10:52:48',
            updatedAt: '2026-01-05 10:52:48'
        },
        {
            id: 4,
            username: 'hapr2o11243',
            userId: 54,
            transactionCode: '437592681',
            status: 'expired',
            depositAmount: '11.111.100đ',
            receivedAmount: '11.111.100đ',
            bankName: 'Vietcombank',
            createdAt: '2025-12-31 00:01:51',
            updatedAt: '2025-12-31 18:18:02'
        },
        {
            id: 5,
            username: 'hapr2o11243',
            userId: 54,
            transactionCode: '193475826',
            status: 'expired',
            depositAmount: '12.221đ',
            receivedAmount: '12.221đ',
            bankName: 'Vietcombank',
            createdAt: '2025-12-31 00:01:38',
            updatedAt: '2025-12-31 18:18:02'
        },
        {
            id: 6,
            username: 'tranthangbzx',
            userId: 52,
            transactionCode: '276583491',
            status: 'expired',
            depositAmount: '443.242đ',
            receivedAmount: '443.242đ',
            bankName: 'Vietcombank',
            createdAt: '2025-12-29 16:59:56',
            updatedAt: '2025-12-30 19:39:15'
        },
        {
            id: 7,
            username: 'admin',
            userId: 1,
            transactionCode: '459738126',
            status: 'expired',
            depositAmount: '50.000đ',
            receivedAmount: '50.000đ',
            bankName: 'Vietcombank',
            createdAt: '2025-12-23 15:56:35',
            updatedAt: '2025-12-25 21:54:09'
        },
        {
            id: 8,
            username: 'admin',
            userId: 1,
            transactionCode: '416579238',
            status: 'expired',
            depositAmount: '50.000đ',
            receivedAmount: '50.000đ',
            bankName: 'Vietcombank',
            createdAt: '2025-12-23 15:56:19',
            updatedAt: '2025-12-25 21:54:09'
        },
        {
            id: 9,
            username: 'admin',
            userId: 1,
            transactionCode: '938216475',
            status: 'expired',
            depositAmount: '5.000đ',
            receivedAmount: '5.000đ',
            bankName: 'Vietcombank',
            createdAt: '2025-12-16 13:50:19',
            updatedAt: '2025-12-25 21:54:09'
        },
        {
            id: 10,
            username: 'admin',
            userId: 1,
            transactionCode: '746123985',
            status: 'expired',
            depositAmount: '1.000đ',
            receivedAmount: '1.000đ',
            bankName: 'Vietcombank',
            createdAt: '2025-12-10 01:24:41',
            updatedAt: '2025-12-25 21:54:09'
        }
    ];

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
                                    Username
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
                            {bankDeposits.map((deposit, index) => (
                                <tr
                                    key={deposit.id}
                                    className={`hover:bg-gray-50 transition-colors ${index % 2 === 1 ? 'bg-gray-100' : 'bg-white'
                                        }`}
                                >
                                    <td className="px-6 py-3">
                                        <div className="flex items-center justify-center gap-2">
                                            <Link
                                                href={`/admin/recharge/bank/${deposit.id}`}
                                                className="p-2 bg-[#49b6f5]! hover:bg-[#3aa5e3] text-white! rounded transition-colors cursor-pointer"
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
                                        <Link
                                            href={`/admin/users/${deposit.userId}/info`}
                                            className="text-[13px] font-bold text-[#846adf] cursor-pointer hover:underline"
                                        >
                                            {deposit.username} [ID {deposit.userId}]
                                        </Link>
                                    </td>
                                    <td className="px-4 py-3">
                                        <span className="text-[13px] font-bold text-[#846adf]">
                                            #{deposit.transactionCode}
                                        </span>
                                    </td>
                                    <td className="px-4 py-3">
                                        <span
                                            className={`py-1 px-2 text-[10px] flex items-center justify-center mx-auto font-bold rounded text-center ${deposit.status === 'pending'
                                                ? 'bg-[#fbbf24] text-white w-26'
                                                : 'bg-[#f05252] text-white w-14'
                                                }`}
                                        >
                                            {deposit.status === 'pending' ? 'Chưa thanh toán' : 'Hết hạn'}
                                        </span>
                                    </td>
                                    <td className="px-4 py-3">
                                        <span className="text-[13px] font-bold text-green-600">
                                            {deposit.depositAmount}
                                        </span>
                                    </td>
                                    <td className="px-4 py-3">
                                        <span className="text-[13px] font-bold text-red-600">
                                            {deposit.receivedAmount}
                                        </span>
                                    </td>
                                    <td className="px-4 py-3">
                                        <span className="text-[13px] font-bold text-gray-800">
                                            {deposit.bankName}
                                        </span>
                                    </td>
                                    <td className="px-4 py-3">
                                        <span className="text-[13px] font-medium text-gray-800">
                                            {deposit.createdAt}
                                        </span>
                                    </td>
                                </tr>
                            ))}
                            <tr>

                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default RechartBankTable