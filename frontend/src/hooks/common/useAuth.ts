import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import AuthApi from '@/api-requests/auth.requests';
import { QUERY_KEYS } from '@/constants/query-keys';
import { useRouter } from 'next/navigation';
import CookieStorage from '@/lib/cookie-storage';
import { LoginPayload } from '@/types/login.type';
import { RegisterPayload } from '@/types/register.type';
import toast from 'react-hot-toast';

export const useCurrentUser = () => {
    return useQuery({
        queryKey: QUERY_KEYS.AUTH.ME,
        queryFn: async () => {
            const token = CookieStorage.getItem('access_token');
            if (!token) {
                throw new Error('No access token!');
            }

            return AuthApi.getCurrentUser();
        },

        retry: false,
        staleTime: 5 * 60 * 1000,
    });
};

export const useLogin = () => {
    const router = useRouter();
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (payload: LoginPayload) => AuthApi.login(payload),
        onSuccess: (data) => {
            queryClient.setQueryData(
                QUERY_KEYS.AUTH.ME,
                data.user
            );

            toast.success("Đăng nhập thành công");
            router.push('/home');
        },
        onError: (error: any) => {
            console.error('Login failed:', error);
            toast.error(
                error?.response?.data?.message || "Đăng nhập thất bại"
            );
        },
    });
};

export const useRegister = () => {
    const router = useRouter();

    return useMutation({
        mutationFn: (payload: RegisterPayload) => AuthApi.register(payload),
        onSuccess: () => {
            toast.success("Đăng ký thành công, vui lòng đăng nhập");
            router.push("/login");
        },
        onError: (error: any) => {
            console.error('Register failed:', error);
            toast.error(
                error?.response?.data?.message || "Đăng ký thất bại"
            );
        },
    });
};


export const useLogout = () => {
    const router = useRouter();
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: () => AuthApi.logout(),
        onSuccess: () => {
            queryClient.clear();
            router.push('/login');
        },
        onError: (error: any) => {
            console.error('Logout failed:', error);
            toast.error(
                error?.response?.data?.message || "Đăng xuất thất bại"
            );
        },
    });
};