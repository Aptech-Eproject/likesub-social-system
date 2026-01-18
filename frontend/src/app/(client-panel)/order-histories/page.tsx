"use client";

import type { OrderItem } from "@/types/order.type";

import UserSubHeader from "@/layouts/client/client-panel/UserSubHeader";
import OrderStatusCards from "@/components/client/client-panel/OrderStatusCards";
import OrderFilters from "@/components/client/client-panel/OrderFilters";
import OrderPaginationControls from "@/components/client/client-panel/OrderPaginationControls";
import OrderHistoriesTable from "@/components/client/client-panel/OrderHistoriesTable";
import OrderRevenueSummary from "@/components/client/client-panel/OrderRevenueSummary";

const MOCK_ORDERS: OrderItem[] = [
    {
        id: "1",
        orderCode: "T74948019268",
        datetime: "2025-06-09 21:52:03",
        serviceId: "5843",
        serviceName: "S2 Like clone nhoạnh(CARE)",
        link: "https://www.facebook.com/photo/?fbid=122244503192146635&set=a.122096661662146635",
        comment: "Không có",
        status: "Hoàn thành",
        payment: 1,
        quantity: 50,
        revenue: 696,
        remaining: 0,
        updated: "2025-06-15 17:16:53",
    },
    {
        id: "2",
        orderCode: "T74948069602",
        datetime: "2025-06-09 21:51:45",
        serviceId: "8746",
        serviceName: "S3 Like clone xin like",
        link: "https://www.facebook.com/photo/?fbid=122244503192146635&set=a.122096661662146635",
        comment: "Không có",
        status: "Hoàn thành",
        payment: 1,
        quantity: 50,
        revenue: 3479,
        remaining: 0,
        updated: "2025-06-15 17:16:53",
    },
    {
        id: "3",
        orderCode: "T74947913382",
        datetime: "2025-06-09 21:25:17",
        serviceId: "8547",
        serviceName: "S2 Like clone nhoạnh(ANGRY)",
        link: "https://www.facebook.com/photo/?fbid=122244503192146635&set=a.122096661662146635",
        comment: "Không có",
        status: "Hoàn thành",
        payment: 1,
        quantity: 50,
        revenue: 696,
        remaining: 0,
        updated: "2025-06-15 17:16:53",
    },
    {
        id: "4",
        orderCode: "T74947089406",
        datetime: "2025-06-09 21:24:53",
        serviceId: "8746",
        serviceName: "S3 Like clone xin like",
        link: "https://www.facebook.com/photo/?fbid=122244503192146635&set=a.122096661662146635",
        comment: "Không có",
        status: "Hoàn thành",
        payment: 1,
        quantity: 50,
        revenue: 3479,
        remaining: 0,
        updated: "2025-06-09 21:24:53",
    },
    {
        id: "5",
        orderCode: "T74944044841",
        datetime: "2025-06-09 00:41:28",
        serviceId: "8757",
        serviceName: "S1 Like bám tay wow",
        link: "https://www.facebook.com/photo/?fbid=122244503192146635&set=a.122096661662146635",
        comment: "Không có",
        status: "Hoàn thành",
        payment: 2000,
        quantity: 50,
        revenue: 1948,
        remaining: 0,
        updated: "2025-06-09 13:53:07",
    },
];

export default function OrderHistoriesClient() {
    const titlePage = "đơn hàng đã đặt";

    return (
        <div className="min-h-screen bg-gray-50 overflow-x-hidden!">
            <UserSubHeader titlePage={titlePage} />

            <div className="w-full mx-auto px-6 py-6">
                <div className="w-full overflow-x-hidden">
                    <OrderStatusCards />

                    <div className="bg-white rounded shadow-sm overflow-hidden">
                        <OrderFilters />

                        <OrderPaginationControls />

                        <OrderHistoriesTable
                            orders={MOCK_ORDERS}
                            itemsPerPage={10}
                        />

                        <OrderRevenueSummary />
                    </div>
                </div>
            </div>
        </div>
    );
}