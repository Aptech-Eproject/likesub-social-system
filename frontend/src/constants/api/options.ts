export const API_OPTIONS = {
    baseURL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5279/api/v1',
    timeout: 10000,
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json',
    },
} as const;