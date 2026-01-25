"use client";

import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

import { Button } from "@/components/common/ui/button";
import { Input } from "@/components/common/ui/input";
import { loginSchema } from "@/schemas/auth/login.schema";
import { useLogin } from "@/hooks/common/useAuth";
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
    FieldGroup,
    FieldLabel,
} from "@/components/common/ui/field";
import { useState } from "react";

export default function LoginForm() {
    const router = useRouter();
    const loginMutation = useLogin();

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const form = useForm<z.infer<typeof loginSchema>>({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            emailOrUsername: "",
            password: "",
        },
    });

    function onSubmit(data: z.infer<typeof loginSchema>) {
        loginMutation.mutate(data);
    }

    return (
        <Card className="w-full shadow-xl border border-slate-700/70 bg-black-100 rounded-2xl p-2">
            <CardHeader className="mt-4">
                <CardTitle className="text-2xl font-bold text-blue-400 text-center">
                    Đăng nhập
                </CardTitle>
                <CardDescription className="text-slate-400 text-center">
                    Vui lòng nhập thông tin tài khoản để tiếp tục
                </CardDescription>
            </CardHeader>
            <CardContent>
                <form
                    id="form-rhf-demo"
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-6"
                >
                    <FieldGroup>
                        <Controller
                            name="emailOrUsername"
                            control={form.control}
                            render={({ field, fieldState }) => (
                                <Field data-invalid={fieldState.invalid}>
                                    <FieldLabel
                                        htmlFor="form-rhf-demo-title"
                                        className="text-sm font-semibold text-slate-300 mb-1 flex items-center gap-2"
                                    >
                                        Email hoặc Username
                                    </FieldLabel>
                                    <Input
                                        {...field}
                                        placeholder="Nhập email hoặc username"
                                        autoComplete="username"
                                        className="bg-slate-800/60 border border-slate-700/40 rounded-lg px-4 py-2 text-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30 transition"
                                    />
                                    {fieldState.invalid && (
                                        <FieldError errors={[fieldState.error]} />
                                    )}
                                </Field>
                            )}
                        />
                        <Controller
                            name="password"
                            control={form.control}
                            render={({ field, fieldState }) => (
                                <Field data-invalid={fieldState.invalid}>
                                    <FieldLabel
                                        htmlFor="form-rhf-demo-title"
                                        className="text-sm font-semibold text-slate-300 mb-1 flex items-center gap-2"
                                    >
                                        Password
                                    </FieldLabel>
                                    <div className="relative">
                                        <Input
                                            {...field}
                                            id="form-rhf-demo-title"
                                            type={showPassword ? "text" : "password"}
                                            aria-invalid={fieldState.invalid}
                                            placeholder="Nhập mật khẩu"
                                            autoComplete="current-password"
                                            className="bg-slate-800/60 border border-slate-700/40 rounded-lg px-4 py-2 text-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30 transition"
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
                    </FieldGroup>

                    {/* Forgot Password Link */}
                    <div className="flex justify-end">
                        <button
                            type="button"
                            onClick={() => router.push("/forgot-password")}
                            className="text-sm text-blue-400 hover:text-blue-300 transition cursor-pointer"
                        >
                            Quên mật khẩu?
                        </button>
                    </div>
                </form>
            </CardContent>
            <CardFooter className="mb-6">
                <div className="flex gap-4 justify-center items-center pt-2 mx-auto min-w-fit">
                    <Button
                        type="submit"
                        form="form-rhf-demo"
                        className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-2 rounded-lg shadow transition"
                        disabled={loginMutation.isPending}
                    >
                        {loginMutation.isPending
                            ? "Đang đăng nhập..."
                            : "Đăng nhập"
                        }
                    </Button>
                    <Button
                        type="button"
                        variant="outline"
                        onClick={() => form.reset()}
                        className="border border-slate-700/40 text-black hover:border-blue-500 px-6 py-2 rounded-lg transition"
                    >
                        Reset
                    </Button>
                </div>
            </CardFooter>
        </Card>
    );
}