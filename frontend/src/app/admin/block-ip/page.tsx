import AdminSubHeader from "@/layouts/admin/AdminSubHeader";
import BlockIPClient from "@/components/admin/block-ip/BlockIPClient";

async function getBlockIPData() {
    await new Promise((resolve) => setTimeout(resolve, 1200));
    return { title: "Addons" };
}

async function BlockIPPage() {
    const titlePage = "danh sách ip bị chặn";
    const data = await getBlockIPData();

    return (
        <div>
            {/* Page Breadcrumb */}
            <AdminSubHeader titlePage={titlePage} />

            <BlockIPClient />
        </div>
    );
}

export default BlockIPPage