"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState, useRef, KeyboardEvent } from "react";
import { Button } from "@/components/common/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/common/ui/card";
import BorderAnimatedContainer from "@/components/common/BorderAnimatedContainer";

export default function VerifyOTPPage() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const email = searchParams.get("email");

    const [otp, setOtp] = useState<string[]>(["", "", "", "", "", ""]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");
    const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

    const handleChange = (index: number, value: string) => {
        if (value.length > 1) {
            value = value.slice(0, 1);
        }

        if (!/^\d*$/.test(value)) {
            return;
        }

        const newOtp = [...otp];
        newOtp[index] = value;
        setOtp(newOtp);
        setError("");

        if (value && index < 5) {
            inputRefs.current[index + 1]?.focus();
        }
    };

    const handleKeyDown = (index: number, e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Backspace" && !otp[index] && index > 0) {
            inputRefs.current[index - 1]?.focus();
        }
    };

    const handlePaste = (e: React.ClipboardEvent) => {
        e.preventDefault();
        const pastedData = e.clipboardData.getData("text").slice(0, 6);

        if (!/^\d+$/.test(pastedData)) {
            return;
        }

        const newOtp = [...otp];
        for (let i = 0; i < pastedData.length && i < 6; i++) {
            newOtp[i] = pastedData[i];
        }
        setOtp(newOtp);

        const nextEmptyIndex = newOtp.findIndex(val => !val);
        if (nextEmptyIndex !== -1) {
            inputRefs.current[nextEmptyIndex]?.focus();
        } else {
            inputRefs.current[5]?.focus();
        }
    };

    const handleResendOTP = async () => {
        setIsLoading(true);
        try {
            // API call để gửi lại OTP
            // await resendOTP(email);
            setOtp(["", "", "", "", "", ""]);
            inputRefs.current[0]?.focus();
            alert("Mã OTP đã được gửi lại!");
        } catch (error) {
            console.error(error);
            setError("Không thể gửi lại mã OTP. Vui lòng thử lại.");
        } finally {
            setIsLoading(false);
        }
    };

    const handleSubmit = async () => {
        const otpValue = otp.join("");

        if (otpValue.length !== 6) {
            setError("Vui lòng nhập đầy đủ 6 số");
            return;
        }

        setIsLoading(true);
        try {
            // API call để xác thực OTP
            // await verifyOTP(email, otpValue);

            // Chuyển sang trang đặt lại mật khẩu
            router.push(`/reset-password?email=${encodeURIComponent(email || "")}&otp=${otpValue}`);
        } catch (error) {
            console.error(error);
            setError("Mã OTP không đúng. Vui lòng thử lại.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <BorderAnimatedContainer>
            <div className="w-full max-w-md mx-auto">
                <div className="bg-linear-to-b from-slate-800/50 to-slate-900/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-8 shadow-2xl">
                    <Card className="w-full shadow-xl border border-slate-700/70 bg-transparent rounded-2xl">
                        <CardHeader className="mt-4">
                            <CardTitle className="text-2xl font-bold text-blue-400 text-center">
                                Xác thực OTP
                            </CardTitle>
                            <CardDescription className="text-slate-400 text-center">
                                Nhập mã OTP 6 số đã được gửi đến
                                <br />
                                <span className="text-blue-400 font-medium">{email}</span>
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-6">
                                <div className="flex gap-2 justify-center">
                                    {otp.map((digit, index) => (
                                        <input
                                            key={index}
                                            ref={el => { inputRefs.current[index] = el; }}
                                            type="text"
                                            inputMode="numeric"
                                            maxLength={1}
                                            value={digit}
                                            onChange={e => handleChange(index, e.target.value)}
                                            onKeyDown={e => handleKeyDown(index, e)}
                                            onPaste={handlePaste}
                                            className="w-12 h-14 text-center text-xl font-bold bg-slate-800/60 border border-slate-700/40 rounded-lg text-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30 transition outline-none"
                                        />
                                    ))}
                                </div>

                                {error && (
                                    <p className="text-red-400 text-sm text-center">{error}</p>
                                )}

                                <div className="text-center">
                                    <button
                                        type="button"
                                        onClick={handleResendOTP}
                                        disabled={isLoading}
                                        className="text-sm text-blue-400 hover:text-blue-300 transition disabled:opacity-50"
                                    >
                                        Gửi lại mã OTP
                                    </button>
                                </div>
                            </div>
                        </CardContent>
                        <CardFooter className="mb-6 flex-col space-y-4">
                            <div className="flex gap-4 justify-center items-center w-full">
                                <Button
                                    type="button"
                                    onClick={handleSubmit}
                                    className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-2 rounded-lg shadow transition"
                                    disabled={isLoading}
                                >
                                    {isLoading ? "Đang xác thực..." : "Xác nhận"}
                                </Button>
                                <Button
                                    type="button"
                                    variant="outline"
                                    onClick={() => router.push("/forgot-password")}
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