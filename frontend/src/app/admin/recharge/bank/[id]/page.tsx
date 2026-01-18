import Link from 'next/link';
import {
    ArrowLeft,
    User,
    Building2,
    Calendar,
    FileText,
    Edit3,
    CheckCircle,
    CircleQuestionMark,
    Lightbulb
} from 'lucide-react';

import ScrollToTop from '@/components/common/ScrollToTop';
import AdminSubHeader from '@/layouts/admin/AdminSubHeader';

interface LayoutProps {
    params: {
        id: string;
    };
}

export default async function InvoiceDetail({ params }: LayoutProps) {
    const { id } = await params;

    const titlePage = `Chi tiết hoá đơn #${id}`;
    const prevTitle = "nạp tiền ngân hàng";
    const urlPrevTitle = `/admin/recharge/bank`;

    // const [invoiceStatus, setInvoiceStatus] = useState('paid');
    // const [adminNote, setAdminNote] = useState('');

    const invoiceData = {
        id: '#689714325',
        createdDate: '07/01/2026 17:04',
        customer: {
            username: 'admin',
            userId: '#1',
            lastUpdated: '07/01/2026 17:04'
        },
        payment: {
            bank: 'Vietcombank',
            requestedAmount: '10.000đ',
            receivedAmount: '10.000đ'
        },
        statusHistory: [
            {
                status: 'Hóa đơn được tạo',
                date: '07/01/2026 17:04',
                type: 'created'
            },
            {
                status: 'Chờ thanh toán',
                date: 'Đang chờ xử lý',
                type: 'pending',
                active: true
            }
        ]
    };

    const statusOptions = [
        { value: 'pending', label: 'Chờ thanh toán' },
        { value: 'paid', label: 'Đã thanh toán' },
        { value: 'cancelled', label: 'Đã hủy' }
    ];

    return (
        <>
            {/* Auto scroll to top */}
            <ScrollToTop />

            {/* Page Breadcrumb */}
            <AdminSubHeader
                titlePage={titlePage}
                prevTitle={prevTitle}
                urlPrevTitle={urlPrevTitle}
            />

            {/* Main Content */}
            <div className="min-h-screen">
                <div className="max-w-400 mx-auto p-6">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
                        {/* Left Column - Invoice Information */}
                        <div className="lg:col-span-2 pb-6 bg-white rounded-md shadow-sm">
                            {/* THÔNG TIN HÓA ĐƠN */}
                            <div>
                                <div className="px-6 py-4 border-b border-gray-200">
                                    <div className="flex items-center justify-between">
                                        <h2 className="flex items-center gap-2 text-lg font-bold text-gray-800">
                                            <FileText className="w-4 h-4" />
                                            Thông tin hoá đơn
                                        </h2>
                                        <button className="px-2 py-1.5 bg-[#f5b849] hover:bg-yellow-600 text-white text-[10px]! font-bold rounded-sm transition-colors">
                                            Chưa thanh toán
                                        </button>
                                    </div>
                                </div>
                                <div className="p-6">
                                    <div className="grid grid-cols-2 gap-x-8 gap-y-4 bg-slate-100 px-4 py-6 rounded-md">
                                        <div>
                                            <p className="text-xs text-gray-500 mb-2">
                                                Mã giao dịch
                                            </p>
                                            <p className="text-[18px] font-bold text-[#846adf]">
                                                {invoiceData.id}
                                            </p>
                                        </div>
                                        <div className="text-right">
                                            <p className="text-xs text-gray-500 mb-1">
                                                Ngày tạo
                                            </p>
                                            <p className="text-[18px] font-semibold text-gray-800">
                                                {invoiceData.createdDate}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* THÔNG TIN KHÁCH HÀNG & THANH TOÁN */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-6">
                                {/* Thông tin khách hàng */}
                                <div className="bg-white rounded-md border border-gray-200">
                                    <div className="px-6 py-3">
                                        <h2 className="flex items-center gap-2 text-sm font-bold text-[#846adf]">
                                            <User className="w-4 h-4" />
                                            THÔNG TIN KHÁCH HÀNG
                                        </h2>
                                    </div>
                                    <div className="px-6 py-2 pb-6 space-y-6">
                                        <div>
                                            <p className="text-xs font-semibold text-gray-500 mb-1.5">
                                                USERNAME
                                            </p>
                                            <div className="flex items-center gap-2">
                                                <p className="text-sm font-bold text-gray-800">
                                                    {invoiceData.customer.username}
                                                </p>
                                                <Link
                                                    href={`/admin/users/54/info`}
                                                    className="cursor-pointer px-2 py-1 bg-purple-50! rounded-sm"
                                                >
                                                    <Edit3 className="w-3 h-3 text-[#846adf]" />
                                                </Link>
                                            </div>
                                        </div>
                                        <div>
                                            <p className="text-xs font-bold text-gray-500 mb-1.5">
                                                ID KHÁCH HÀNG
                                            </p>
                                            <p className="text-sm font-bold text-gray-800">
                                                {invoiceData.customer.userId}
                                            </p>
                                        </div>
                                        <div>
                                            <p className="text-xs font-bold text-gray-500 mb-1.5">
                                                CẬP NHẬT CUỐI
                                            </p>
                                            <p className="text-sm text-gray-600">
                                                {invoiceData.customer.lastUpdated}
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Thông tin thanh toán */}
                                <div className="bg-white rounded-md px-6 border border-gray-200">
                                    <div className="py-4">
                                        <h2 className="flex items-center gap-2 text-sm font-bold text-[#26BF94]">
                                            <Building2 className="w-4 h-4" />
                                            THÔNG TIN THANH TOÁN
                                        </h2>
                                    </div>
                                    <div className="space-y-6 py-2">
                                        <div>
                                            <p className="text-xs font-bold text-gray-500 mb-1.5">
                                                NGÂN HÀNG
                                            </p>
                                            <div className="flex items-center gap-2">
                                                <p className="text-sm font-bold text-gray-800">
                                                    {invoiceData.payment.bank}
                                                </p>
                                                <button className="text-[#26BF94] px-2 py-1 rounded-sm hover:text-teal-600 bg-teal-50 cursor-pointer">
                                                    <Edit3 className="w-3 h-3" />
                                                </button>
                                            </div>
                                        </div>
                                        <div>
                                            <p className="text-xs font-bold text-gray-500 mb-1.5">
                                                SỐ TIỀN YÊU CẦU
                                            </p>
                                            <p className="text-sm font-bold text-gray-800">
                                                {invoiceData.payment.requestedAmount}
                                            </p>
                                        </div>
                                        <div>
                                            <p className="text-xs font-bold text-gray-500 mb-1.5">
                                                SỐ TIỀN THỰC NHẬN
                                            </p>
                                            <p className="text-sm font-bold text-[#26BF94]">
                                                {invoiceData.payment.receivedAmount}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Column */}
                        <div className="space-y-6">
                            {/* CẬP NHẬT HÓA ĐƠN */}
                            <div className="bg-white rounded-md shadow-sm">
                                <div className="px-6 py-4 border-b border-gray-200">
                                    <h2 className="flex items-center gap-2 text-lg font-bold text-gray-800">
                                        <Edit3 className="w-4 h-4" />
                                        Cập nhật hoá đơn
                                    </h2>
                                </div>
                                <div className="p-6 space-y-6">
                                    {/* Trạng thái hóa đơn */}
                                    <div>
                                        <label className="flex items-center gap-2 text-sm! font-bold text-gray-800 mb-2">
                                            <CheckCircle className="w-3 h-3 text-[#846adf]" />
                                            Trạng thái hóa đơn
                                        </label>
                                        <select
                                            className="w-full px-4 py-1.5 border border-gray-200 rounded-sm text-sm font-medium text-gray-700"
                                        >
                                            <option value="paid">Chờ thanh toán</option>
                                            <option value="pending">Đã thanh toán</option>
                                            <option value="cancelled">Đã hủy</option>
                                        </select>
                                        <p className="text-xs text-gray-500 mt-1 flex items-center gap-1">
                                            <CircleQuestionMark className='w-3 h-3' />
                                            <span>Chọn trạng thái phù hợp cho hóa đơn</span>
                                        </p>
                                    </div>

                                    {/* Ghi chú quản trị */}
                                    <div>
                                        <label className="flex items-center gap-2 text-sm font-bold text-gray-800 mb-2">
                                            <FileText className="w-3 h-3 text-cyan-500" />
                                            Ghi chú quản trị
                                        </label>
                                        <textarea
                                            placeholder="Nhập ghi chú cho hóa đơn này (không bắt buộc)"
                                            className="w-full px-4 py-3 border border-gray-200 rounded-md text-sm! font-medium placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 resize-none"
                                            rows={4}
                                        />
                                        <p className="text-xs text-gray-500 flex items-center gap-1">
                                            <Lightbulb className='w-3 h-3' />
                                            <span>Ghi chú sẽ được lưu trong lịch sử hóa đơn</span>
                                        </p>
                                    </div>

                                    {/* Action Buttons */}
                                    <div className="flex flex-col gap-3 pt-2">
                                        <button className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-[#846adf] hover:opacity-90 text-white text-sm font-semibold rounded-sm transition-opacity cursor-pointer">
                                            <CheckCircle className="w-4 h-4" />
                                            Cập nhật hóa đơn
                                        </button>
                                        <Link
                                            href="/admin/recharge/bank"
                                            className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-white border border-gray-200 text-gray-700 text-sm font-semibold rounded-sm hover:bg-gray-100! transition-colors cursor-pointer"
                                        >
                                            <ArrowLeft className="w-4 h-4" />
                                            Quay lại danh sách
                                        </Link >
                                    </div>
                                </div>
                            </div>

                            {/* TRẠNG THÁI HÓA ĐƠN */}
                            <div className="bg-white rounded-md shadow-sm">
                                <div className="px-6 py-4 border-b border-gray-200">
                                    <h2 className="flex items-center gap-2 text-lg font-bold text-gray-800">
                                        <Calendar className="w-4 h-4 text-teal-500" />
                                        Trạng thái hoá đơn
                                    </h2>
                                </div>
                                <div className="p-6">
                                    <div className="space-y-4">
                                        {invoiceData.statusHistory.map((item, index) => (
                                            <div key={index} className="flex items-start gap-3">
                                                <div className={`mt-1 w-2 h-2 rounded-full shrink-0 ${item.type === 'created' ? 'bg-gray-400' :
                                                    item.active ? 'bg-yellow-500' : 'bg-gray-300'
                                                    }`} />
                                                <div className="flex-1">
                                                    <p className={`text-sm font-bold ${item.active ? 'text-yellow-600' : 'text-gray-800'
                                                        }`}>
                                                        {item.status}
                                                    </p>
                                                    <p className={`text-[11px] mt-0.5 ${item.active ? 'text-yellow-600' : 'text-gray-500'
                                                        }`}>
                                                        {item.date}
                                                    </p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}