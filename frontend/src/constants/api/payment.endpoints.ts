export const PAYMENT_ENDPOINTS = {
    CREATE: '/payment',
    MY_PAYMENTS: '/payment/my-payments',
    GET_BY_ID: (id: number) => `/payment/${id}`,
} as const;