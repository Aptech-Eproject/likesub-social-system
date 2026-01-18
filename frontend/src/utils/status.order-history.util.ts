export type StatusStyle = {
    bg: string;
    text: string;
    icon: string
};

export const STATUS_CONFIG: Record<string, StatusStyle> = {
    "Hoàn thành": { bg: "bg-green-100", text: "text-green-800", icon: "✓" },
    "Đang chờ": { bg: "bg-yellow-100", text: "text-yellow-800", icon: "⏱" },
    "Đã hủy": { bg: "bg-red-100", text: "text-red-800", icon: "✕" },
    "Đang chạy": { bg: "bg-blue-100", text: "text-blue-800", icon: "▶" },
};

export function getStatusConfig(status: string): StatusStyle {
    return (
        STATUS_CONFIG[status] ?? {
            bg: "bg-gray-100",
            text: "text-gray-800",
            icon: "?",
        }
    );
}

export type PaymentStyle = {
    bg: string;
    text: string
};

export const PAYMENT_CONFIG: Record<string, PaymentStyle> = {
    "Hoàn thành": { bg: "bg-green-100", text: "text-green-800" },
    "Đang chờ": { bg: "bg-yellow-100", text: "text-yellow-800" },
};

export function getPaymentConfig(status: string): PaymentStyle {
    return (
        PAYMENT_CONFIG[status] ?? {
            bg: "bg-gray-100",
            text: "text-gray-800",
        }
    );
}