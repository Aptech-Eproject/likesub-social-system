import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import PaymentApi from '@/api-requests/payment.requests';
import { CreatePaymentPayload } from '@/types/payment.type';
import toast from 'react-hot-toast';

export const PAYMENT_QUERY_KEYS = {
    MY_PAYMENTS: ['payments', 'my-payments'],
    PAYMENT_BY_ID: (id: number) => ['payments', id],
} as const;

export const useMyPayments = () => {
    return useQuery({
        queryKey: PAYMENT_QUERY_KEYS.MY_PAYMENTS,
        queryFn: () => PaymentApi.getMyPayments(),
        staleTime: 30 * 1000, // 30 seconds
    });
};

export const usePaymentById = (id: number) => {
    return useQuery({
        queryKey: PAYMENT_QUERY_KEYS.PAYMENT_BY_ID(id),
        queryFn: () => PaymentApi.getPaymentById(id),
        enabled: !!id,
        staleTime: 30 * 1000,
    });
};

export const useCreatePayment = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (payload: CreatePaymentPayload) => PaymentApi.createPayment(payload),
        onSuccess: (data) => {
            toast.success("Tạo giao dịch thành công!");
            queryClient.invalidateQueries({
                queryKey: PAYMENT_QUERY_KEYS.MY_PAYMENTS,
            });
        },
        onError: (error: any) => {
            console.error('Create payment failed:', error);
            toast.error(
                error?.response?.data?.message || "Tạo giao dịch thất bại!"
            );
        },
    });
};