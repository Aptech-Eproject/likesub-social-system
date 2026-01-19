"use client";

import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

import { Button } from "@/components/common/ui/button";
import { Input } from "@/components/common/ui/input";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/common/ui/card";
import {
    Field,
    FieldError,
    FieldLabel,
} from "@/components/common/ui/field";
import BorderAnimatedContainer from "@/components/common/BorderAnimatedContainer";

const resetPasswordSchema = z.object({
    password: z
        .string()
        .min(8, { message: "Mật khẩu phải có ít nhất 8 ký tự" })
        .regex(/[A-Z]/, { message: "Mật khẩu phải chứa ít nhất 1 chữ in hoa" })
        .regex(/[a-z]/, { message: "Mật khẩu phải chứa ít nhất 1 chữ thường" })
        .regex(/[0-9]/, { message: "Mật khẩu phải chứa ít nhất 1 số" }),
    confirmPassword: z.string(),
}).refine((data) => data.password === data.confirmPassword, {
    message: "Mật khẩu xác nhận không khớp",
    path: ["confirmPassword"],
});

export default function ResetPasswordPage() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const email = searchParams.get("email");
    const otp = searchParams.get("otp");

    const [isLoading, setIsLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const form = useForm<z.infer<typeof resetPasswordSchema>>({
        resolver: zodResolver(resetPasswordSchema),
        defaultValues: {
            password: "",
            confirmPassword: "",
        },
    });

    async function onSubmit(data: z.infer<typeof resetPasswordSchema>) {
        setIsLoading(true);
        try {
            // API call để đặt lại mật khẩu
            // await resetPassword(email, otp, data.password);

            alert("Đặt lại mật khẩu thành công!");
            router.push("/login");
        } catch (error) {
            console.error(error);
            alert("Đặt lại mật khẩu thất bại. Vui lòng thử lại.");
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <BorderAnimatedContainer>
            <div className="w-full max-w-md mx-auto">
                <div className="bg-linear-to-b from-slate-800/50 to-slate-900/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-8 shadow-2xl">
                    <Card className="w-full shadow-xl border border-slate-700/70 bg-transparent rounded-2xl">
                        <CardHeader className="mt-4">
                            <CardTitle className="text-2xl font-bold text-blue-400 text-center">
                                Đặt lại mật khẩu
                            </CardTitle>
                            <CardDescription className="text-slate-400 text-center">
                                Nhập mật khẩu mới cho tài khoản của bạn
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <form
                                id="reset-password-form"
                                onSubmit={form.handleSubmit(onSubmit)}
                                className="space-y-6"
                            >
                                <Controller
                                    name="password"
                                    control={form.control}
                                    render={({ field, fieldState }) => (
                                        <Field data-invalid={fieldState.invalid}>
                                            <FieldLabel className="text-sm font-semibold text-slate-300 mb-1">
                                                Mật khẩu mới
                                            </FieldLabel>
                                            <div className="relative">
                                                <Input
                                                    {...field}
                                                    type={showPassword ? "text" : "password"}
                                                    placeholder="Nhập mật khẩu mới"
                                                    autoComplete="new-password"
                                                    className="bg-slate-800/60 border border-slate-700/40 rounded-lg px-4 py-2 pr-10 text-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30 transition"
                                                />
                                                <button
                                                    type="button"
                                                    onClick={() => setShowPassword(!showPassword)}
                                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-200"
                                                >
                                                    {showPassword ? (
                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
                                                        </svg>
                                                    ) : (
                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                        </svg>
                                                    )}
                                                </button>
                                            </div>
                                            {fieldState.invalid && (
                                                <FieldError
                                                    errors={[fieldState.error]}
                                                    className="text-red-400 text-xs mt-1"
                                                />
                                            )}
                                        </Field>
                                    )}
                                />

                                <Controller
                                    name="confirmPassword"
                                    control={form.control}
                                    render={({ field, fieldState }) => (
                                        <Field data-invalid={fieldState.invalid}>
                                            <FieldLabel className="text-sm font-semibold text-slate-300 mb-1">
                                                Xác nhận mật khẩu mới
                                            </FieldLabel>
                                            <div className="relative">
                                                <Input
                                                    {...field}
                                                    type={showConfirmPassword ? "text" : "password"}
                                                    placeholder="Nhập lại mật khẩu mới"
                                                    autoComplete="new-password"
                                                    className="bg-slate-800/60 border border-slate-700/40 rounded-lg px-4 py-2 pr-10 text-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30 transition"
                                                />
                                                <button
                                                    type="button"
                                                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-200"
                                                >
                                                    {showConfirmPassword ? (
                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
                                                        </svg>
                                                    ) : (
                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                        </svg>
                                                    )}
                                                </button>
                                            </div>
                                            {fieldState.invalid && (
                                                <FieldError
                                                    errors={[fieldState.error]}
                                                    className="text-red-400 text-xs mt-1"
                                                />
                                            )}
                                        </Field>
                                    )}
                                />

                                <div className="bg-slate-800/30 border border-slate-700/30 rounded-lg p-3">
                                    <p className="text-xs text-slate-400">
                                        Mật khẩu phải có:
                                    </p>
                                    <ul className="text-xs text-slate-400 mt-2 space-y-1 list-disc list-inside">
                                        <li>Ít nhất 8 ký tự</li>
                                        <li>Ít nhất 1 chữ in hoa</li>
                                        <li>Ít nhất 1 chữ thường</li>
                                        <li>Ít nhất 1 chữ số</li>
                                    </ul>
                                </div>
                            </form>
                        </CardContent>
                        <CardFooter className="mb-6">
                            <div className="flex gap-4 justify-center items-center w-full">
                                <Button
                                    type="submit"
                                    form="reset-password-form"
                                    className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-2 rounded-lg shadow transition"
                                    disabled={isLoading}
                                >
                                    {isLoading ? "Đang xử lý..." : "Đặt lại mật khẩu"}
                                </Button>
                                <Button
                                    type="button"
                                    variant="outline"
                                    onClick={() => router.push("/login")}
                                    className="border border-slate-700/40 text-slate-300 hover:text-white hover:border-blue-500 px-6 py-2 rounded-lg transition"
                                >
                                    Hủy
                                </Button>
                            </div>
                        </CardFooter>
                    </Card>
                </div>
            </div>
        </BorderAnimatedContainer>
    );
}