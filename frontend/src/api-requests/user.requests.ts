import { USER_ENDPOINTS } from "@/constants/api/user.endpoints";
import { privateApi } from "@/lib/axios-instance";
export interface User {
    id: string;
    name: string;
    email: string;
    avatar?: string;
}

const UserApi = {
    getUserById: async (userId: string) => {
        const response = await privateApi.get(
            USER_ENDPOINTS.GET_USER_BY_ID(userId)
        );
        return response.data;
    },

    getUsers: async () => {
        const response = await privateApi.get(
            USER_ENDPOINTS.GET_USERS
        );
        return response.data;
    },

    updateProfile: async (userId: string, data: Partial<User>) => {
        const response = await privateApi.put(
            USER_ENDPOINTS.UPDATE_USER(userId),
            data
        );
        return response.data;
    },

    uploadAvatar: async (file: File) => {
        const formData = new FormData();
        formData.append('avatar', file);

        const response = await privateApi.post(
            USER_ENDPOINTS.UPLOAD_AVATAR,
            formData,
            {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            }
        );

        return response.data;
    },

};

export default UserApi;
