export const USER_ENDPOINTS = {
    GET_USERS: '/users',
    GET_USER_BY_ID: (userId: string) => `/users/${userId}`,
    UPDATE_USER: (userId: string) => `/users/${userId}`,
    DELETE_USER: (userId: string) => `/users/${userId}`,
    UPLOAD_AVATAR: '/users/avatar',
    UPDATE_PROFILE: '/users/profile',
} as const;