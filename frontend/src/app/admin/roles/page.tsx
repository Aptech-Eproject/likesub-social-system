import RolesClient from "@/components/admin/roles/RolesClient";
import AdminSubHeader from "@/layouts/admin/AdminSubHeader";

async function getRolesData() {
    await new Promise((resolve) => setTimeout(resolve, 1200));
    return { title: "Tickets" };
}

async function Roles() {
    const data = await getRolesData();
    const titlePage = "danh sách vai trò";

    return (
        <div>
            {/* Page Breadcrumb */}
            <AdminSubHeader titlePage={titlePage} />

            {/* Main Content */}
            <RolesClient />
        </div>
    );
}

export default Roles