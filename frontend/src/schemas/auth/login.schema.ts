import * as z from "zod";

export const loginSchema = z.object({
    emailOrUsername: z
        .string()
        .min(3, "Email hoặc username không hợp lệ"),
    password: z
        .string()
        .min(6, "Mật khẩu phải có ít nhất 6 ký tự.")
        .max(50, "Mật khẩu không được vượt quá 50 ký tự."),
});