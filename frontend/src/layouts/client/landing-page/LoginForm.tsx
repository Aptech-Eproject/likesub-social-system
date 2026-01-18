"use client";

import type React from "react";
import * as z from "zod";
import { toast } from "sonner";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";

import { Button } from "@/components/common/ui/button";
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
import { Input } from "@/components/common/ui/input";
import { loginSchema } from "@/schemas/auth/login.schema";

export default function LoginForm() {
    const form = useForm<z.infer<typeof loginSchema>>({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            username: "",
            password: "",
        },
    });

    function onSubmit(data: z.infer<typeof loginSchema>) {
        toast("You submitted the following values:", {
            description: (
                <pre className="bg-code text-code-foreground mt-2 w-[320px] overflow-x-auto rounded-md p-4">
                    <code>{JSON.stringify(data, null, 2)}</code>
                </pre>
            ),
            position: "bottom-right",
            classNames: {
                content: "flex flex-col gap-2",
            },
            style: {
                "--border-radius": "calc(var(--radius)  + 4px)",
            } as React.CSSProperties,
        });
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
                            name="username"
                            control={form.control}
                            render={({ field, fieldState }) => (
                                <Field data-invalid={fieldState.invalid}>
                                    <FieldLabel
                                        htmlFor="form-rhf-demo-title"
                                        className="text-sm font-semibold text-slate-300 flex items-center"
                                    >
                                        Username
                                    </FieldLabel>
                                    <Input
                                        {...field}
                                        id="form-rhf-demo-title"
                                        aria-invalid={fieldState.invalid}
                                        placeholder="Nhập username"
                                        autoComplete="username"
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
                                    <Input
                                        {...field}
                                        id="form-rhf-demo-title"
                                        type="password"
                                        aria-invalid={fieldState.invalid}
                                        placeholder="Nhập mật khẩu"
                                        autoComplete="current-password"
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
                    </FieldGroup>
                </form>
            </CardContent>
            <CardFooter className="mb-6">
                <div className="flex gap-4 justify-center items-center pt-2 mx-auto min-w-fit">
                    <Button
                        type="submit"
                        form="form-rhf-demo"
                        className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-2 rounded-lg shadow transition"
                    >
                        Đăng nhập
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
