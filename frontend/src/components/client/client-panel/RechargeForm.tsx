"use client";

import React, { useMemo, useState, useEffect } from "react";

import {
    CircleDollarSign,
    HelpCircle,
    Landmark,
    Wallet,
    LoaderCircle
} from "lucide-react";

type Bank = {
    code: string;
    name: string;
};

const BANKS: Bank[] = [
    { code: "VCB", name: "Vietcombank" },
    { code: "TCB", name: "Techcombank" },
    { code: "MB", name: "MB Bank" },
    { code: "VTB", name: "VietinBank" },
    { code: "BIDV", name: "BIDV" },
    { code: "ACB", name: "ACB" },
];

const MIN_AMOUNT = 1000;

function formatVND(value: number) {
    if (Number.isNaN(value)) return "0đ";
    return value.toLocaleString("vi-VN") + "đ";
}

export default function RechargeForm() {
    const [amount, setAmount] = useState<string>("");
    const [bank, setBank] = useState<string>(BANKS[0].code);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [loadingForm, setLoadingForm] = useState(true);

    useEffect(() => {
        const formTimer = setTimeout(() => setLoadingForm(false), 1500);
        return () => clearTimeout(formTimer);
    }, []);

    const numericAmount = useMemo(() => {
        const n = Number(amount.replace(/\D/g, ""));
        return Number.isFinite(n) ? n : 0;
    }, [amount]);

    const estimatedReceive = useMemo(() => numericAmount, [numericAmount]);

    const amountTooLow = numericAmount < MIN_AMOUNT;

    function onChangeAmount(e: React.ChangeEvent<HTMLInputElement>) {
        const raw = e.target.value.replace(/\D/g, "");
        const n = Number(raw || 0);
        const pretty = raw ? n.toLocaleString("vi-VN") : "";
        setAmount(pretty);
    }

    async function onCreateInvoice(e: React.FormEvent) {
        e.preventDefault();
        if (amountTooLow) return;
        setIsSubmitting(true);
        await new Promise((r) => setTimeout(r, 700));
        setIsSubmitting(false);
        alert(
            `Đã tạo hóa đơn nạp ${formatVND(numericAmount)} qua ${BANKS.find((b) => b.code === bank)?.name || bank
            } (demo)`
        );
    }

    return (
        <div className="rounded bg-white shadow-sm ring-1 ring-neutral-200 dark:bg-neutral-900 dark:ring-neutral-800">
            <div className="w-full bg-black px-6 py-4 text-white">
                <div className="flex items-center gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded bg-white">
                        <Landmark color="gray" size={20} />
                    </div>
                    <div className="leading-5">
                        <h1 className="text-[16px]! font-semibold m-0!">
                            Nạp tiền qua ngân hàng
                        </h1>
                        <p className="text-[13px]! text-neutral-300">
                            Thanh toán nhanh chóng và an toàn
                        </p>
                    </div>
                </div>
            </div>

            {loadingForm ? (
                <div className="flex items-center justify-center h-96 gap-3">
                    <span className="text-slate-800">Đang tải dữ liệu...</span>
                    <LoaderCircle className="w-10 h-10 text-slate-800 animate-spin" />
                </div>
            ) : (
                <div>
                    <div className="flex items-center justify-start gap-4 px-4 m-4 rounded bg-blue-100 p-3 text-sm text-blue-900">
                        <HelpCircle className="w-5 h-5 text-blue-900" />
                        <div className="leading-6">
                            <p className="font-medium text-blue-900 text-[13px]">
                                Hướng dẫn nạp tiền
                            </p>
                            <p className="text-blue-900 text-xs">
                                Nhập số tiền, chọn ngân hàng và nhấn tạo hóa đơn để bắt đầu
                                quy trình nạp tiền.
                            </p>
                        </div>
                    </div>

                    <div className="m-4">
                        <label className="mb-1 block text-sm font-medium">
                            Số tiền nạp <span className="text-red-600">*</span>
                        </label>
                        <div>
                            <div className="flex items-center border border-neutral-300 dark:border-neutral-700 rounded">
                                <div className="flex h-10 w-12 items-center justify-center border bg-neutral-50 text-neutral-500">
                                    <CircleDollarSign size={15} color="black" />
                                </div>
                                <input
                                    value={amount}
                                    onChange={onChangeAmount}
                                    inputMode="numeric"
                                    placeholder="Nhập số tiền cần nạp"
                                    className="flex-1 h-10 px-3 text-[15px] font-medium outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-200 dark:border-neutral-700 dark:bg-neutral-900"
                                />
                            </div>
                            <p className="mt-1 text-xs text-neutral-500">
                                Số tiền tối thiểu:{" "}
                                <span className="font-medium text-red-500">1.000đ</span>
                            </p>
                        </div>
                    </div>

                    <div className="m-4">
                        <label className="mb-1 block text-sm font-medium">
                            Chọn ngân hàng <span className="text-red-600">*</span>
                        </label>
                        <div className="flex items-center border border-neutral-300 dark:border-neutral-700 rounded">
                            <div className="flex h-10 w-12 items-center justify-center border bg-neutral-50 text-neutral-500">
                                <Landmark color="black" size={15} />
                            </div>
                            <select
                                value={bank}
                                onChange={(e) => setBank(e.target.value)}
                                className="flex-1 h-10 px-3 text-[15px] outline-none appearance-none focus:border-blue-400 focus:ring-2 focus:ring-blue-200 dark:border-neutral-700 dark:bg-neutral-900 font-medium"
                            >
                                {BANKS.map((b) => (
                                    <option key={b.code} value={b.code}>
                                        {b.name}
                                    </option>
                                ))}
                            </select>
                            <div className="pointer-events-none pr-3 text-neutral-400">
                                ▾
                            </div>
                        </div>
                    </div>

                    <div className="mx-4 my-6">
                        <div className="flex items-center border border-dashed border-neutral-200 hover:border-blue-400 transition-all duration-500 dark:border-neutral-700 rounded">
                            <div className="flex h-18 w-12 items-center justify-center border-r border-dashed bg-neutral-50 text-neutral-500">
                                <Wallet color="black" size={22} />
                            </div>
                            <div className="flex-1 px-3 text-lg font-semibold text-gray-800">
                                <div className="block text-sm font-medium">
                                    <div>Số tiền thực nhận ước tính</div>
                                    <div className="text-sm text-red-600">
                                        {formatVND(estimatedReceive)}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="m-4">
                        <button
                            onClick={onCreateInvoice}
                            disabled={isSubmitting || amountTooLow}
                            className="inline-flex w-full items-center justify-center gap-2 rounded-sm bg-neutral-900 px-4 py-3 text-sm font-semibold text-white cursor-pointer hover:-translate-y-1 hover:shadow-md hover:shadow-blue-300 transition-all duration-500 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0"
                        >
                            <span>🧾</span>
                            <span>{isSubmitting ? "Đang tạo..." : "TẠO HÓA ĐƠN"}</span>
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}