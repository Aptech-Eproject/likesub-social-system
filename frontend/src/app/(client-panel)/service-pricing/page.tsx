import UserSubHeader from "@/layouts/client/client-panel/UserSubHeader";
import ServicePricingCards from "@/components/client/client-panel/ServicePricingCards";

function ServicePricingPage() {
    const titlePage = "bảng giá dịch vụ";

    return (
        <div>
            {/* Sub Header */}
            <UserSubHeader titlePage={titlePage} />

            {/* Main Content */}
            <div className="p-6 flex flex-col gap-15">
                {/* Services Pricing Card */}
                <ServicePricingCards />
            </div>
        </div>
    );
}

export default ServicePricingPage;
