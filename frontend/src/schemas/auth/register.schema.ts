import * as z from "zod";

const registerSchema = z
    .object({
        email: z
            .string()
            .email("Vui lòng nhập địa chỉ email hợp lệ.")
            .min(5, "Email phải có ít nhất 5 ký tự.")
            .max(100, "Email không được vượt quá 100 ký tự."),
        username: z
            .string()
            .min(5, "Username phải có ít nhất 5 ký tự.")
            .max(32, "Username không được vượt quá 32 ký tự."),
        password: z
            .string()
            .min(6, "Mật khẩu phải có ít nhất 6 ký tự.")
            .max(50, "Mật khẩu không được vượt quá 50 ký tự."),
        confirmPassword: z
            .string()
            .min(6, "Xác nhận mật khẩu phải có ít nhất 6 ký tự.")
            .max(50, "Xác nhận mật khẩu không được vượt quá 50 ký tự."),
    })
    .superRefine((data, ctx) => {
        if (data.password !== data.confirmPassword) {
            ctx.addIssue({
                path: ["confirmPassword"],
                code: z.ZodIssueCode.custom,
                message: "Mật khẩu nhập lại không khớp.",
            });
        }
    });

export { registerSchema };
