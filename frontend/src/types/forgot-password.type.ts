export interface ForgotPasswordPayload {
    email: string;
}

export interface ForgotPasswordResponse {
    message: string;
}

export interface VerifyOTPPayload {
    email: string;
    token: string;
}

export interface ResetPasswordPayload {
    email: string;
    token: string;
    newPassword: string;
    confirmPassword: string;
}

export interface ResetPasswordResponse {
    message: string;
}