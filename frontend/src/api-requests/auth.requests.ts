import CookieStorage from "@/lib/cookie-storage";

import { AUTH_ENDPOINTS } from "@/constants/api/auth.endpoints";
import { privateApi, publicApi } from "@/lib/axios-instance";
import { LoginPayload, LoginResponse } from "@/types/login.type";
import { RegisterPayload } from "@/types/register.type";
import { RefreshTokenResponse } from "@/types/refreshToken.type";

const AuthApi = {
    login: async (payload: LoginPayload): Promise<LoginResponse> => {
        const response = await publicApi.post<LoginResponse>(
            AUTH_ENDPOINTS.LOGIN,
            payload
        );

        CookieStorage.setItem('access_token', response.data.access_token, {
            expires: 1,
        });
        CookieStorage.setItem('refresh_token', response.data.refresh_token, {
            expires: 7,
        });

        return response.data;
    },

    register: async (payload: RegisterPayload): Promise<LoginResponse> => {
        const response = await publicApi.post<LoginResponse>(
            AUTH_ENDPOINTS.REGISTER,
            payload
        );

        CookieStorage.setItem('access_token', response.data.access_token, {
            expires: 1,
        });
        CookieStorage.setItem('refresh_token', response.data.refresh_token, {
            expires: 7,
        });

        return response.data;
    },

    getCurrentUser: async () => {
        const response = await privateApi.get(AUTH_ENDPOINTS.ME);
        return response.data;
    },

    refreshToken: async (): Promise<RefreshTokenResponse> => {
        const refreshToken = CookieStorage.getItem('refresh_token');

        if (!refreshToken) {
            throw new Error('No refresh token available');
        }

        const response = await publicApi.post<RefreshTokenResponse>(
            AUTH_ENDPOINTS.REFRESH_TOKEN,
            { refresh_token: refreshToken }
        );

        CookieStorage.setItem('access_token', response.data.access_token, {
            expires: 1,
        });
        CookieStorage.setItem('refresh_token', response.data.refresh_token, {
            expires: 7,
        });

        return response.data;
    },

    logout: async (): Promise<void> => {
        try {
            await privateApi.post(AUTH_ENDPOINTS.LOGOUT);
        } catch (error) {
            console.error('Logout error:', error);
        } finally {
            CookieStorage.clearAuth();

            if (typeof window !== 'undefined') {
                window.location.href = '/login';
            }
        }
    },

    forgotPassword: async (email: string): Promise<{ message: string }> => {
        const response = await publicApi.post<{ message: string }>(
            AUTH_ENDPOINTS.FORGOT_PASSWORD,
            { email }
        );

        return response.data;
    },

    resetPassword: async (
        token: string,
        newPassword: string
    ): Promise<{ message: string }> => {
        const response = await publicApi.post<{ message: string }>(
            AUTH_ENDPOINTS.RESET_PASSWORD,
            {
                token,
                new_password: newPassword,
            }
        );

        return response.data;
    },

};

export default AuthApi;