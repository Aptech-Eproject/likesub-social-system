import TicketsClient from "@/components/admin/tickets/TicketsClient";
import AdminSubHeader from "@/layouts/admin/AdminSubHeader";

async function getTicketsData() {
    await new Promise((resolve) => setTimeout(resolve, 1200));
    return { title: "Tickets" };
}

const SupportTickets = async () => {
    const data = await getTicketsData();
    const titlePage = "danh sách yêu cầu hỗ trợ";

    return (
        <>
            {/* Page Breadcrumb */}
            <AdminSubHeader titlePage={titlePage} />

            {/* Main Content */}
            <TicketsClient />
        </>
    )
};

export default SupportTickets;