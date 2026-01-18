import AdminSubHeader from '@/layouts/admin/AdminSubHeader';
import ChildrentServiceClient from '@/components/admin/services/ChildrentServiceClient';

async function getChildServicersData() {
    await new Promise((resolve) => setTimeout(resolve, 1200));
    return { title: "Child Servicers Data" };
}

const ChildServices: React.FC = async () => {
    const data = await getChildServicersData();
    const titlePage = "Quản lý chuyên mục con";

    return (
        <>
            {/* Page Breadcrumb */}
            <AdminSubHeader titlePage={titlePage} />

            {/* Main Content */}
            <ChildrentServiceClient />
        </>
    );
};

export default ChildServices;