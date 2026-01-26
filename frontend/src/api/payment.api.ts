import { privateApi } from "@/lib/axios/axios-instance";
import { PAYMENT_ENDPOINTS } from "@/constants/api/payment.endpoints.constant";
import { CreatePaymentPayload, CreatePaymentResponse, GetPaymentByIdResponse, GetPaymentsResponse } from "@/types/payment.type";

const PaymentApi = {
    createPayment: async (payload: CreatePaymentPayload): Promise<CreatePaymentResponse> => {
        const response = await privateApi.post<CreatePaymentResponse>(
            PAYMENT_ENDPOINTS.CREATE,
            payload
        );

        return response.data;
    },

    getMyPayments: async (): Promise<GetPaymentsResponse> => {
        const response = await privateApi.get<GetPaymentsResponse>(
            PAYMENT_ENDPOINTS.MY_PAYMENTS
        );

        return response.data;
    },

    getPaymentById: async (id: number): Promise<GetPaymentByIdResponse> => {
        const response = await privateApi.get<GetPaymentByIdResponse>(
            PAYMENT_ENDPOINTS.GET_BY_ID(id)
        );

        return response.data;
    },
};

export default PaymentApi;