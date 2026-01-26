import CookieStorage from "@/lib/cookie-storage";

import { AUTH_ENDPOINTS } from "@/constants/api/auth.endpoints.constant";
import { privateApi, publicApi } from "@/lib/axios/axios-instance";
import { LoginPayload, LoginResponse } from "@/types/login.type";
import { RegisterPayload, RegisterResponse } from "@/types/register.type";
import { RefreshTokenResponse } from "@/types/refreshToken.type";

import {
    ForgotPasswordPayload,
    ForgotPasswordResponse,
    ResetPasswordPayload,
    ResetPasswordResponse
} from "@/types/forgot-password.type";

const AuthApi = {
    login: async (payload: LoginPayload): Promise<LoginResponse> => {
        const response = await publicApi.post<LoginResponse>(
            AUTH_ENDPOINTS.LOGIN,
            payload
        );

        CookieStorage.setItem('access_token', response.data.token, {
            expires: 1,
        });

        CookieStorage.setItem('refresh_token', response.data.refreshToken, {
            expires: 7,
        });

        return response.data;
    },

    register: async (payload: RegisterPayload): Promise<RegisterResponse> => {
        const response = await publicApi.post<RegisterResponse>(
            AUTH_ENDPOINTS.REGISTER,
            payload
        );

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
        }
    },

    forgotPassword: async (payload: ForgotPasswordPayload): Promise<ForgotPasswordResponse> => {
        const response = await publicApi.post<ForgotPasswordResponse>(
            AUTH_ENDPOINTS.FORGOT_PASSWORD,
            payload
        );
        return response.data;
    },


    resetPassword: async (payload: ResetPasswordPayload): Promise<ResetPasswordResponse> => {
        const response = await publicApi.post<ResetPasswordResponse>(
            AUTH_ENDPOINTS.RESET_PASSWORD,
            payload
        );

        return response.data;
    },
};

export default AuthApi;