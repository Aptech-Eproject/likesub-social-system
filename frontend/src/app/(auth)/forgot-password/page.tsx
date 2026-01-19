"use client";

import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

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
import { forgotPasswordSchema } from "@/schemas/auth/forget-password.schema";
import { useForgotPassword } from "@/hooks/common/useAuth";


export default function ForgotPasswordPage() {
    const router = useRouter();
    const forgotPassowordMutation = useForgotPassword();

    const form = useForm<z.infer<typeof forgotPasswordSchema>>({
        resolver: zodResolver(forgotPasswordSchema),
        defaultValues: {
            email: "",
        },
    });

    const onSubmit = async (data: z.infer<typeof forgotPasswordSchema>) => {
        forgotPassowordMutation.mutate(data);
    }

    return (
        <BorderAnimatedContainer>
            <div className="w-full max-w-md mx-auto">
                <div className="bg-linear-to-b from-slate-800/50 to-slate-900/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-8 shadow-2xl">
                    <Card className="w-full shadow-xl border border-slate-700/70 bg-transparent rounded-2xl">
                        <CardHeader className="mt-4">
                            <CardTitle className="text-2xl font-bold text-blue-400 text-center">
                                Quên mật khẩu
                            </CardTitle>
                            <CardDescription className="text-slate-400 text-center">
                                Nhập email của bạn để nhận mã OTP
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <form
                                id="forgot-password-form"
                                onSubmit={form.handleSubmit(onSubmit)}
                                className="space-y-6"
                            >
                                <Controller
                                    name="email"
                                    control={form.control}
                                    render={({ field, fieldState }) => (
                                        <Field data-invalid={fieldState.invalid}>
                                            <FieldLabel
                                                className="text-sm font-semibold text-slate-300 mb-1"
                                            >
                                                Email
                                            </FieldLabel>
                                            <Input
                                                {...field}
                                                type="email"
                                                placeholder="Nhập địa chỉ email"
                                                autoComplete="email"
                                                className="bg-slate-800/60 border border-slate-700/40 rounded-lg px-4 py-2 text-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30 transition"
                                            />
                                            {fieldState.invalid && (
                                                <FieldError
                                                    errors={[fieldState.error]}
                                                    className="text-red-400 text-xs mt-1"
                                                />
                                            )}
                                        </Field>
                                    )}
                                />
                            </form>
                        </CardContent>
                        <CardFooter className="mb-6 flex-col space-y-4">
                            <div className="flex gap-4 justify-center items-center w-full">
                                <Button
                                    type="submit"
                                    form="forgot-password-form"
                                    className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-2 rounded-lg shadow transition"
                                    disabled={forgotPassowordMutation.isPending}
                                >
                                    {
                                        forgotPassowordMutation.isPending
                                            ? "Đang gửi..."
                                            : "Gửi mã OTP"
                                    }
                                </Button>
                                <Button
                                    type="button"
                                    variant="outline"
                                    onClick={() => router.push("/login")}
                                    className="border border-slate-700/40 text-slate-300 hover:text-white hover:border-blue-500 px-6 py-2 rounded-lg transition"
                                >
                                    Quay lại
                                </Button>
                            </div>
                        </CardFooter>
                    </Card>
                </div>
            </div>
        </BorderAnimatedContainer>
    );
}