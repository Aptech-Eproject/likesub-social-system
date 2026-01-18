import Backdrop from '../../layouts/common/Backdrop';
import ScrollToTopButton from '@/components/common/ScrollToTopButton';
import AdminSidebar from '@/layouts/admin/AdminSidebar';
import AdminHeader from '@/layouts/admin/AdminHeader';
import AdminFooter from '@/layouts/admin/AdminFooter';

export default function AdminLayout({
    children
}: {
    children: React.ReactNode
}) {
    return (
        <div className="min-h-screen lg:flex relative">
            {/* Sidebar */}
            <AdminSidebar />
            <Backdrop />

            {/* Main Content */}
            <div className="flex-1 flex flex-col transition-all duration-300 ease-in-out">
                {/* Header */}
                <AdminHeader />

                {/* Page Content */}
                <div className='flex-1 bg-slate-100 overflow-y-auto'>
                    {children}
                </div>

                {/* Footer */}
                <AdminFooter />
            </div>

            <ScrollToTopButton />
        </div>
    )
}
