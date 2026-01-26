import axios, {
    AxiosError,
    AxiosResponse,
    InternalAxiosRequestConfig,
} from 'axios';

import CookieStorage from '../cookie-storage';
import AuthApi from '@/api/auth.api';
import { API_OPTIONS } from '@/constants/api/options.constant';
import { tokenRefreshQueue } from './token-refresh.queue';

export const publicApi = axios.create(API_OPTIONS);
export const privateApi = axios.create(API_OPTIONS);

privateApi.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
        const token = CookieStorage.getItem('access_token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }

        return config;
    },
    (error: AxiosError) => Promise.reject(error)
);

privateApi.interceptors.response.use(
    (response: AxiosResponse) => response,

    async (error: AxiosError) => {
        const originalRequest = error.config as
            | (InternalAxiosRequestConfig & { _retry?: boolean })
            | undefined;

        if (
            error.response?.status === 401 &&
            originalRequest &&
            !originalRequest._retry &&
            !originalRequest.url?.includes('/auth/refresh')
        ) {
            if (tokenRefreshQueue.refreshing) {
                return new Promise((resolve, reject) => {
                    tokenRefreshQueue.enqueue({
                        resolve: () => resolve(privateApi(originalRequest)),
                        reject,
                    });
                });
            }

            originalRequest._retry = true;
            tokenRefreshQueue.startRefresh();

            try {
                await AuthApi.refreshToken();
                tokenRefreshQueue.processQueue();

                return privateApi(originalRequest);
            } catch (refreshError) {
                tokenRefreshQueue.processQueue(refreshError);
                CookieStorage.clearAuth();

                if (typeof window !== 'undefined') {
                    window.location.href = '/login';
                }

                return Promise.reject(refreshError);
            } finally {
                tokenRefreshQueue.endRefresh();
            }
        }

        return Promise.reject(error);
    }
);
