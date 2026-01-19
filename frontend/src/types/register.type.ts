export interface RegisterPayload {
    username: string;
    email: string;
    password: string;
    confirmPassword: string;
}

export interface RegisterResponse {
    message: string;
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