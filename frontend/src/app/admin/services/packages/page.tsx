import AdminSubHeader from '@/layouts/admin/AdminSubHeader';
import PackageServiceClient from '@/components/admin/services/PackageServiceClient';

async function getPackageServicersData() {
    await new Promise((resolve) => setTimeout(resolve, 1200));
    return { title: "Package Servicers Data" };
}

const ServicePackages: React.FC = async () => {
    const titlePage = "Quản lý gói dịch vụ";
    const data = await getPackageServicersData();

    return (
        <>
            {/* Page Breadcrumb */}
            <AdminSubHeader titlePage={titlePage} />

            {/* Main Content */}
            <PackageServiceClient />
        </>
    );
};

export default ServicePackages;