export type OrderStatus = "Hoàn thành" | "Đang chờ" | "Đã hủy" | "Đang chạy";

export interface OrderItem {
    id: string;
    orderCode: string;
    datetime: string;
    serviceId: string;
    serviceName: string;
    link: string;
    comment: string;
    status: OrderStatus;
    payment: number;
    quantity: number;
    revenue: number;
    remaining: number;
    updated: string;
}
