export const QUERY_KEYS = {
    // ==================== AUTH ====================
    AUTH: {
        ME: ['auth', 'me'] as const,
        USER: (userId: string) => ['auth', 'user', userId] as const,
    },


    // ==================== USERS ====================
    USERS: {
        ALL: ['users'] as const,
        LIST: (params?: Record<string, any>) => ['users', 'list', params] as const,
        DETAIL: (userId: string) => ['users', 'detail', userId] as const,
        PROFILE: (userId: string) => ['users', 'profile', userId] as const,
    },
} as const;