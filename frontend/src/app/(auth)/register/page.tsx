"use client"

import { useRouter } from "next/navigation";

import RegisterForm from "@/layouts/client/landing-page/RegisterForm";
import AuthFooterLinks from "@/components/client/landing-page/AuthFooterLinks";
import BorderAnimatedContainer from "@/components/common/BorderAnimatedContainer";

export default function RegisterPage() {
    const router = useRouter();

    return (
        <BorderAnimatedContainer>
            <div className="w-full max-w-lg">
                <div className="bg-linear-to-b from-slate-800/50 to-slate-900/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-8 shadow-2xl">
                    <div className="mb-4 text-center">
                        <h1 className="text-3xl font-bold text-white mb-2">
                            Welcome Back
                        </h1>
                        <p className="text-slate-400 text-sm">
                            Sign up to your LikesubVIP account
                        </p>
                    </div>

                    <RegisterForm />

                    <div className="relative my-6">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-slate-600/30"></div>
                        </div>
                        <div className="relative flex justify-center text-sm">
                            <span className="px-2 bg-linear-to-b from-slate-800/50 to-slate-900/50 text-slate-500">
                                You already have an account to LikesubVIP?
                            </span>
                        </div>
                    </div>

                    <button
                        type="button"
                        className="w-full border border-slate-600/50 hover:border-slate-500/50 text-slate-300 hover:text-white font-semibold py-3 rounded-lg transition duration-200"
                        onClick={() => router.push("/login")}
                    >
                        Sign In
                    </button>
                    <AuthFooterLinks />
                </div>
            </div>
        </BorderAnimatedContainer>
    );
}
