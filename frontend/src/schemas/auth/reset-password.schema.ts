import z from "zod";

export const resetPasswordSchema = z.object({
    newPassword: z
        .string()
        .min(8, {
            message: "Mật khẩu phải có ít nhất 8 ký tự"
        })
        .regex(/[A-Z]/, {
            message: "Mật khẩu phải chứa ít nhất 1 chữ in hoa"
        })
        .regex(/[a-z]/, {
            message: "Mật khẩu phải chứa ít nhất 1 chữ thường"
        })
        .regex(/[0-9]/, {
            message: "Mật khẩu phải chứa ít nhất 1 số"
        }),
    confirmPassword: z.string(),

}).refine((data) => data.newPassword === data.confirmPassword, {
    message: "Mật khẩu xác nhận không khớp",
    path: ["confirmPassword"],
});