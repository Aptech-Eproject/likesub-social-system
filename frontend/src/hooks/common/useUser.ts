import UserApi from '@/api-requests/user.requests';
import { QUERY_KEYS } from '@/constants/query-keys';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

export const useUsers = () => {
    return useQuery({
        queryKey: QUERY_KEYS.USERS.LIST(),
        queryFn: () => UserApi.getUsers(),
        staleTime: 3 * 60 * 1000,
    });
};

export const useUser = (userId: string, enabled = true) => {
    return useQuery({
        queryKey: QUERY_KEYS.USERS.DETAIL(userId),
        queryFn: () => UserApi.getUserById(userId),
        enabled: !!userId && enabled,
        staleTime: 5 * 60 * 1000,
    });
};

export const useUpdateProfile = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: ({ userId, data }: { userId: string; data: any }) =>
            UserApi.updateProfile(userId, data),
        onMutate: async ({ userId, data }) => {
            // Cancel outgoing queries
            await queryClient.cancelQueries({ queryKey: QUERY_KEYS.USERS.DETAIL(userId) });

            // Snapshot previous value (Optimistic Update)
            const previousUser = queryClient.getQueryData(QUERY_KEYS.USERS.DETAIL(userId));

            // Optimistically update cache
            queryClient.setQueryData(QUERY_KEYS.USERS.DETAIL(userId), (old: any) => ({
                ...old,
                ...data,
            }));

            // Return context với previous data để rollback nếu cần
            return { previousUser };
        },
        onError: (err, { userId }, context) => {
            // Rollback về giá trị cũ nếu update fail
            if (context?.previousUser) {
                queryClient.setQueryData(QUERY_KEYS.USERS.DETAIL(userId), context.previousUser);
            }
            console.error('Update profile failed:', err);
        },
        onSuccess: (data, { userId }) => {
            queryClient.invalidateQueries({ queryKey: QUERY_KEYS.USERS.DETAIL(userId) });
            queryClient.invalidateQueries({ queryKey: QUERY_KEYS.USERS.LIST() });
            queryClient.invalidateQueries({ queryKey: QUERY_KEYS.AUTH.ME });
        },
    });
};

export const useUploadAvatar = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (file: File) => UserApi.uploadAvatar(file),
        onSuccess: (data) => {
            queryClient.invalidateQueries({ queryKey: QUERY_KEYS.USERS.ALL });
            queryClient.invalidateQueries({ queryKey: QUERY_KEYS.AUTH.ME });
        },
    });
};