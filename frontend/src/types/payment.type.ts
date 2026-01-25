export type PaymentStatus = 'Pending' | 'Completed' | 'Expired' | 'Cancelled';

export interface Payment {
    id: number;
    userId: string;
    txnCode: string;
    bankName: string;
    amountPaid: number;
    amountReceived: number;
    status: PaymentStatus;
    createdAt: string;
    updatedAt: string;
}

export interface CreatePaymentPayload {
    txnCode: string;
    bankName: string;
    amountPaid: number;
    amountReceived: number;
}

export interface CreatePaymentResponse extends Payment { }

export interface GetPaymentsResponse extends Array<Payment> { }

export interface GetPaymentByIdResponse extends Payment { }