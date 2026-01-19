import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import AuthApi from '@/api-requests/auth.requests';
import { QUERY_KEYS } from '@/constants/query-keys';
import { useRouter } from 'next/navigation';
import CookieStorage from '@/lib/cookie-storage';
import { LoginPayload } from '@/types/login.type';
import { RegisterPayload } from '@/types/register.type';
import toast from 'react-hot-toast';
import { ForgotPasswordPayload, ResetPasswordPayload } from '@/types/forgot-password.type';

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

// export const useVerifyEmail = () => {
//     const router = useRouter();

//     return useMutation({
//         mutationFn: (payload: VerifyEmailPayload) => AuthApi.forgotPassword(payload),
//         onSuccess: (data) => {
//             console.log('Verify email response:', data.message);
//             toast.success("Email đã được xác thực thành công! Mã OTP của bạn đã được gửi qua email.");
//             router.push('/verify-otp');
//         },
//         onError: (error: any) => {
//             console.error('Checked email error:', error);
//             toast.error(
//                 error?.response?.data?.message || "Xác thực email thất bại!"
//             );
//         },
//     });
// };

export const useForgotPassword = () => {
    const router = useRouter();

    return useMutation({
        mutationFn: (payload: ForgotPasswordPayload) => AuthApi.forgotPassword(payload),
        onSuccess: (data, variables) => {
            console.log('Forgot password response:', data.message);

            toast.success("Mã OTP đã được gửi đến email của bạn!");
            router.push(`/verify-otp?email=${encodeURIComponent(variables.email)}`);
        },
        onError: (error: any) => {
            console.error('Forgot password error:', error);
            toast.error(
                error?.response?.data?.message || "Gửi mã OTP thất bại!"
            );
        },
    });
};

export const useResetPassword = () => {
    const router = useRouter();

    return useMutation({
        mutationFn: (payload: ResetPasswordPayload) => AuthApi.resetPassword(payload),
        onSuccess: (data) => {
            console.log('Reset password response:', data.message);

            toast.success("Đặt lại mật khẩu thành công!");
            router.push('/login');
        },
        onError: (error: any) => {
            console.error('Reset password error:', error);
            toast.error(
                error?.response?.data?.message || "Đặt lại mật khẩu thất bại!"
            );
        },
    });
};