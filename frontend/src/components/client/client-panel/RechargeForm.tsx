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
                            <span>
                                {isSubmitting ? "Đang tạo..." : "TẠO HÓA ĐƠN"}
                            </span>
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

// "use client";

// import * as z from "zod";

// import { zodResolver } from "@hookform/resolvers/zod";
// import { Controller, useForm } from "react-hook-form";
// import { Button } from "@/components/common/ui/button";
// import { Input } from "@/components/common/ui/input";
// import {
//     Card,
//     CardContent,
//     CardDescription,
//     CardFooter,
//     CardHeader,
//     CardTitle,
// } from "@/components/common/ui/card";
// import {
//     Field,
//     FieldError,
//     FieldLabel,
// } from "@/components/common/ui/field";
// import { useCreatePayment } from "@/hooks/common/usePayment";

// const createPaymentSchema = z.object({
//     txnCode: z.string().min(1, { message: "Mã giao dịch không được để trống" }),
//     bankName: z.string().min(1, { message: "Tên ngân hàng không được để trống" }),
//     amountPaid: z
//         .string()
//         .min(1, { message: "Số tiền không được để trống" })
//         .refine((val) => !isNaN(Number(val)) && Number(val) > 0, {
//             message: "Số tiền phải lớn hơn 0",
//         }),
//     amountReceived: z
//         .string()
//         .min(1, { message: "Số tiền thực nhận không được để trống" })
//         .refine((val) => !isNaN(Number(val)) && Number(val) > 0, {
//             message: "Số tiền thực nhận phải lớn hơn 0",
//         }),
// });

// export default function CreatePaymentForm() {
//     const createPaymentMutation = useCreatePayment();

//     const form = useForm<z.infer<typeof createPaymentSchema>>({
//         resolver: zodResolver(createPaymentSchema),
//         defaultValues: {
//             txnCode: "",
//             bankName: "",
//             amountPaid: "",
//             amountReceived: "",
//         },
//     });

//     const onSubmit = async (data: z.infer<typeof createPaymentSchema>) => {
//         createPaymentMutation.mutate({
//             txnCode: data.txnCode,
//             bankName: data.bankName,
//             amountPaid: Number(data.amountPaid),
//             amountReceived: Number(data.amountReceived),
//         });
//     };

//     return (
//         <Card className="w-full max-w-2xl shadow-xl border border-slate-700/70 bg-white rounded-2xl">
//             <CardHeader>
//                 <CardTitle className="text-2xl font-bold text-blue-600">
//                     Tạo giao dịch nạp tiền
//                 </CardTitle>
//                 <CardDescription className="text-slate-600">
//                     Vui lòng nhập thông tin giao dịch
//                 </CardDescription>
//             </CardHeader>
//             <CardContent>
//                 <form
//                     id="create-payment-form"
//                     onSubmit={form.handleSubmit(onSubmit)}
//                     className="space-y-4"
//                 >
//                     {/* Mã giao dịch */}
//                     <Controller
//                         name="txnCode"
//                         control={form.control}
//                         render={({ field, fieldState }) => (
//                             <Field data-invalid={fieldState.invalid}>
//                                 <FieldLabel className="text-sm font-semibold text-slate-700">
//                                     Mã giao dịch
//                                 </FieldLabel>
//                                 <Input
//                                     {...field}
//                                     placeholder="Nhập mã giao dịch"
//                                     className="border-slate-300 focus:border-blue-500"
//                                 />
//                                 {fieldState.invalid && (
//                                     <FieldError
//                                         errors={[fieldState.error]}
//                                         className="text-red-500 text-xs mt-1"
//                                     />
//                                 )}
//                             </Field>
//                         )}
//                     />

//                     {/* Tên ngân hàng */}
//                     <Controller
//                         name="bankName"
//                         control={form.control}
//                         render={({ field, fieldState }) => (
//                             <Field data-invalid={fieldState.invalid}>
//                                 <FieldLabel className="text-sm font-semibold text-slate-700">
//                                     Ngân hàng
//                                 </FieldLabel>
//                                 <Input
//                                     {...field}
//                                     placeholder="Nhập tên ngân hàng (VD: Vietcombank)"
//                                     className="border-slate-300 focus:border-blue-500"
//                                 />
//                                 {fieldState.invalid && (
//                                     <FieldError
//                                         errors={[fieldState.error]}
//                                         className="text-red-500 text-xs mt-1"
//                                     />
//                                 )}
//                             </Field>
//                         )}
//                     />

//                     {/* Số tiền nạp */}
//                     <Controller
//                         name="amountPaid"
//                         control={form.control}
//                         render={({ field, fieldState }) => (
//                             <Field data-invalid={fieldState.invalid}>
//                                 <FieldLabel className="text-sm font-semibold text-slate-700">
//                                     Số tiền nạp (VNĐ)
//                                 </FieldLabel>
//                                 <Input
//                                     {...field}
//                                     type="number"
//                                     placeholder="Nhập số tiền nạp"
//                                     className="border-slate-300 focus:border-blue-500"
//                                 />
//                                 {fieldState.invalid && (
//                                     <FieldError
//                                         errors={[fieldState.error]}
//                                         className="text-red-500 text-xs mt-1"
//                                     />
//                                 )}
//                             </Field>
//                         )}
//                     />

//                     {/* Số tiền thực nhận */}
//                     <Controller
//                         name="amountReceived"
//                         control={form.control}
//                         render={({ field, fieldState }) => (
//                             <Field data-invalid={fieldState.invalid}>
//                                 <FieldLabel className="text-sm font-semibold text-slate-700">
//                                     Số tiền thực nhận (VNĐ)
//                                 </FieldLabel>
//                                 <Input
//                                     {...field}
//                                     type="number"
//                                     placeholder="Nhập số tiền thực nhận"
//                                     className="border-slate-300 focus:border-blue-500"
//                                 />
//                                 {fieldState.invalid && (
//                                     <FieldError
//                                         errors={[fieldState.error]}
//                                         className="text-red-500 text-xs mt-1"
//                                     />
//                                 )}
//                             </Field>
//                         )}
//                     />
//                 </form>
//             </CardContent>
//             <CardFooter className="flex gap-4">
//                 <Button
//                     type="submit"
//                     form="create-payment-form"
//                     className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2"
//                     disabled={createPaymentMutation.isPending}
//                 >
//                     {createPaymentMutation.isPending ? "Đang tạo..." : "Tạo giao dịch"}
//                 </Button>
//                 <Button
//                     type="button"
//                     variant="outline"
//                     onClick={() => form.reset()}
//                     className="border-slate-300 text-slate-700 hover:bg-slate-100 px-6 py-2"
//                 >
//                     Reset
//                 </Button>
//             </CardFooter>
//         </Card>
//     );
// }