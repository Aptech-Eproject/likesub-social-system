import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import AuthApi from '@/api-requests/auth.requests';
import { QUERY_KEYS } from '@/constants/query-keys';
import { useRouter } from 'next/navigation';
import CookieStorage from '@/lib/cookie-storage';
import { LoginPayload } from '@/types/login.type';
import { RegisterPayload } from '@/types/register.type';

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
            queryClient.setQueryData(QUERY_KEYS.AUTH.ME, data.user);

            router.push('/dashboard');
        },
        onError: (error) => {
            console.error('Login failed:', error);
        },
    });
};

export const useRegister = () => {
    const router = useRouter();
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (payload: RegisterPayload) => AuthApi.register(payload),
        onSuccess: (data) => {
            queryClient.setQueryData(QUERY_KEYS.AUTH.ME, data.user);

            router.push('/dashboard');
        },
        onError: (error) => {
            console.error('Register failed:', error);
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
        onError: (error) => {
            console.error('Logout failed:', error);
            router.push('/login');
        },
    });
};