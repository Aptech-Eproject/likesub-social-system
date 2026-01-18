import RechargeForm from "@/components/client/client-panel/RechargeForm";
import RechargeTips from "@/components/client/client-panel/RechargeTips";
import RechargeHistory from "@/components/client/client-panel/RechargeHistory";
import UserSubHeader from "@/layouts/client/client-panel/UserSubHeader";

export default function RechargePage() {
    const titlePage = "Nạp tiền ngân hàng";

    return (
        <>
            <UserSubHeader titlePage={titlePage} />

            <div className="px-4 py-6 lg:px-6">
                <div className="grid gap-4 lg:grid-cols-[1fr_360px]">
                    <RechargeForm />
                    <RechargeTips />
                </div>

                <RechargeHistory />
            </div>
        </>
    );
}
