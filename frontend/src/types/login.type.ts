export interface LoginPayload {
    emailOrUsername: string;
    password: string;
}

export interface LoginResponse {
    token: string;
    refreshToken: string;
    user: {
        id: string;
        username: string;
        email: string;
        fullName: string | null;
        phone: string | null;
        money: number;
        totalMoney: number;
        role: number;
    };
}
