import NavContainerAddons from "@/components/admin/addons/NavContainerAddons";
import AdminSubHeader from "@/layouts/admin/AdminSubHeader"
import { Search } from "lucide-react";

function page({
    children
}: {
    children: React.ReactNode
}) {
    const titlePage = "cửa hàng addons";

    return (
        <>
            {/* Page Breadcrumb */}
            <AdminSubHeader titlePage={titlePage} />

            <div className="p-6">
                <div className="flex flex-col gap-6 bg-white rounded-md shadow-sm py-6 pb-8">
                    {/* Header */}
                    <div className="flex flex-col items-start gap-1 px-6">
                        <span className="text-xl font-bold text-slate-800">
                            Nâng cấp hệ thống của bạn với các Addon chuyên nghiệp
                        </span>
                        <span className="text-[13px] font-medium text-gray-500">
                            Khám phá bộ sưu tập các addon độc quyền để mở rộng chức năng cho website của bạn. Chúng tôi thường xuyên cập nhật các tính năng mới.
                        </span>
                    </div>

                    {/* Navigation Button */}
                    <NavContainerAddons />

                    {/* Search Bar */}
                    <div className="flex flex-col w-full gap-2 px-6">
                        <div
                            className="flex items-center gap-2 pl-4 border border-gray-300 rounded-md hover:border-[#846adf] focus-within:border-[#846adf] focus-within:ring-1 focus-within:ring-[#846adf] transition"
                        >
                            <Search className="text-gray-500 w-5 h-5" />
                            <input
                                type="text"
                                className="w-full py-3 text-sm focus:outline-none focus:ring-0"
                                placeholder="Tìm kiếm addons"
                            />
                        </div>
                    </div>
                </div>

                {/* Main Content */}
                <div className="px-0 pt-8">
                    {children}
                </div>
            </div>
        </>
    )
}

export default page