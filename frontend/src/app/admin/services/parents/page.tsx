import AdminSubHeader from '@/layouts/admin/AdminSubHeader';
import ParentServiceClient from '@/components/admin/services/ParentServiceClient';

const ParentServices: React.FC = () => {
    const titlePage = "quản lý chuyên mục cha";

    return (
        <>
            {/* Page Breadcrumb */}
            <AdminSubHeader titlePage={titlePage} />

            {/* Main Content */}
            <ParentServiceClient />
        </>
    );
};

export default ParentServices;