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