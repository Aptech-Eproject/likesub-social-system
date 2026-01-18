import {
    Edit2,
    Trash2,
    GripVertical,
} from 'lucide-react';
import Link from 'next/link';

interface ServicePackage {
    id: number;
    name: string;
    category: string;
    type: string;
    api: string;
    apiId: string;
    priceOriginal: string;
    priceRetail: string;
    priceCollab: string;
    priceAgent: string;
    priceDistributor: string;
    status: boolean;
    createdAt: string;
}

function PackageServiceTable() {
    const servicePackages: ServicePackage[] = [
        {
            id: 1,
            name: 'Facebook Reaction Love ❤️ | 2k-5k/day | 🚫 No Refill',
            category: 'Facebook | Post Likes | Global',
            type: 'Default',
            api: 'https://x999.vn/',
            apiId: 'API ID: 11264',
            priceOriginal: '16.632 VND',
            priceRetail: '18.2952 VND',
            priceCollab: '16.632 VND',
            priceAgent: '16.632 VND',
            priceDistributor: '16.632 VND',
            status: true,
            createdAt: '2025-10-21 08:04:18'
        },
        {
            id: 2,
            name: 'Views US | Retention 6-7 Minutes | Speed 5-10k/days | Source Youtube Search/Browse Fe...',
            category: 'Youtube | Views - By keyword - Best for SEO - US 🇺🇸',
            type: 'Default',
            api: 'https://x999.vn/',
            apiId: 'API ID: 11520',
            priceOriginal: '116.424 VND',
            priceRetail: '128.066 VND',
            priceCollab: '116.424 VND',
            priceAgent: '116.424 VND',
            priceDistributor: '116.424 VND',
            status: true,
            createdAt: '2025-10-21 08:04:18'
        },
        {
            id: 3,
            name: 'YouTube Likes | Speed 100K/Day | Japan 🇯🇵 | Lifetime Refill ♻️',
            category: 'Youtube | Likes - Country Targeted - SV1',
            type: 'Default',
            api: 'https://x999.vn/',
            apiId: 'API ID: 11776',
            priceOriginal: '22.9824 VND',
            priceRetail: '25.2806 VND',
            priceCollab: '22.9824 VND',
            priceAgent: '22.9824 VND',
            priceDistributor: '22.9824 VND',
            status: true,
            createdAt: '2025-10-21 08:04:19'
        },
        {
            id: 4,
            name: 'Facebook Reaction Care 🥰 | 2k-5k/day | 🚫 No Refill',
            category: 'Facebook | Post Likes | Global',
            type: 'Default',
            api: 'https://x999.vn/',
            apiId: 'API ID: 11265',
            priceOriginal: '16.632 VND',
            priceRetail: '18.2952 VND',
            priceCollab: '16.632 VND',
            priceAgent: '16.632 VND',
            priceDistributor: '16.632 VND',
            status: true,
            createdAt: '2025-10-21 08:04:18'
        },
        {
            id: 5,
            name: 'Views US | Retention 8-10 Minutes | Speed 5-10k/days | Source Youtube Search/Browse F...',
            category: 'Youtube | Views - By keyword - Best for SEO - US 🇺🇸',
            type: 'Default',
            api: 'https://x999.vn/',
            apiId: 'API ID: 11521',
            priceOriginal: '174.636 VND',
            priceRetail: '192.1 VND',
            priceCollab: '174.636 VND',
            priceAgent: '174.636 VND',
            priceDistributor: '174.636 VND',
            status: true,
            createdAt: '2025-10-21 08:04:18'
        },
        {
            id: 6,
            name: 'YouTube Likes | Speed 100K/Day | Turkey 🇹🇷 | Lifetime Refill ♻️',
            category: 'Youtube | Likes - Country Targeted - SV1',
            type: 'Default',
            api: 'https://x999.vn/',
            apiId: 'API ID: 11777',
            priceOriginal: '22.9824 VND',
            priceRetail: '25.2806 VND',
            priceCollab: '22.9824 VND',
            priceAgent: '22.9824 VND',
            priceDistributor: '22.9824 VND',
            status: true,
            createdAt: '2025-10-21 08:04:19'
        },
        {
            id: 7,
            name: 'LÊN CỰC NHANH - Tụt 100% -YouTube Subscribers | Không bảo hành | Không hỗ trợ khi lỗi',
            category: 'Youtube Sub',
            type: 'Default',
            api: 'https://x999.vn/',
            apiId: 'API ID: 11010',
            priceOriginal: '3.144 VND',
            priceRetail: '3.4584 VND',
            priceCollab: '3.144 VND',
            priceAgent: '3.144 VND',
            priceDistributor: '3.144 VND',
            status: true,
            createdAt: '2025-09-18 00:56:53'
        },
        {
            id: 8,
            name: 'Facebook Reaction WoW 😮 | 2k-5k/day | 🚫 No Refill',
            category: 'Facebook | Post Likes | Global',
            type: 'Default',
            api: 'https://x999.vn/',
            apiId: 'API ID: 11266',
            priceOriginal: '16.632 VND',
            priceRetail: '18.2952 VND',
            priceCollab: '16.632 VND',
            priceAgent: '16.632 VND',
            priceDistributor: '16.632 VND',
            status: true,
            createdAt: '2025-10-21 08:04:18'
        },
        {
            id: 9,
            name: 'Views US | Retention 3-5 Minutes | Speed 5-10k/days | Source Youtube Suggest(Trending/...',
            category: 'Youtube | Views - By keyword - Best for SEO - US 🇺🇸',
            type: 'Default',
            api: 'https://x999.vn/',
            apiId: 'API ID: 11522',
            priceOriginal: '83.16 VND',
            priceRetail: '91.476 VND',
            priceCollab: '83.16 VND',
            priceAgent: '83.16 VND',
            priceDistributor: '83.16 VND',
            status: true,
            createdAt: '2025-10-21 08:04:18'
        },
        {
            id: 10,
            name: 'YouTube Likes | Speed 100K/Day | Ukraine 🇺🇦 | Lifetime Refill ♻️',
            category: 'Youtube | Likes - Country Targeted - SV1',
            type: 'Default',
            api: 'https://x999.vn/',
            apiId: 'API ID: 11778',
            priceOriginal: '22.9824 VND',
            priceRetail: '25.2806 VND',
            priceCollab: '22.9824 VND',
            priceAgent: '22.9824 VND',
            priceDistributor: '22.9824 VND',
            status: true,
            createdAt: '2025-10-21 08:04:19'
        }
    ];

    return (
        <div className="bg-white rounded-sm shadow-sm overflow-hidden mt-6">
            <div className="overflow-x-auto relative">
                <div className="inline-block min-w-full align-middle">
                    <table className="min-w-full table-fixed" style={{ width: 'max-content' }}>
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="px-3 py-4 text-left text-[13px] font-bold text-black  w-85">
                                    Gói dịch vụ
                                </th>
                                <th className="px-3 py-4 text-left text-[13px] font-bold text-black  w-26">
                                    Giá vốn
                                </th>
                                <th className="px-3 py-4 text-left text-[13px] font-bold text-black  w-28">
                                    Giá bán lẻ
                                </th>
                                <th className="px-3 py-4 text-left text-[13px] font-bold text-black  w-37">
                                    Giá Cộng tác viên
                                </th>
                                <th className="px-3 py-4 text-left text-[13px] font-bold text-black  w-28">
                                    Giá Đại lý
                                </th>
                                <th className="px-3 py-4 text-left text-[13px] font-bold text-black w-36">
                                    Giá Nhà phân phối
                                </th>
                                <th className="px-3 py-4 text-center text-[13px] font-bold text-black w-16">
                                    Trạng thái
                                </th>
                                <th className="px-3 py-4 text-center text-[13px] font-bold text-black w-18">
                                    Thao tác
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {servicePackages.map((service) => (
                                <tr
                                    key={service.id}
                                    className="hover:bg-gray-50 transition-colors odd:bg-gray-100"
                                >
                                    <td className="px-3 py-4">
                                        <div className="flex items-center gap-2">
                                            <GripVertical className="w-4 h-4 text-gray-400 cursor-move shrink-0" />
                                            <div className="flex flex-col gap-2">
                                                <Link
                                                    href={`/admin/services/package/edit/${service.id}`}

                                                    className="text-[10px] text-blue-600 font-semibold"
                                                >
                                                    #{service.apiId.split(': ')[1]}
                                                </Link>
                                                <Link
                                                    href={`/admin/services/packages/edit/${service.id}`}
                                                    className="text-[13px] text-gray-800 font-bold">
                                                    {service.name}
                                                </Link>
                                                <Link
                                                    href={`/admin/services/package/edit/${service.id}`}
                                                    className="inline-block px-2 py-0.5 text-[#846adf] text-[10px] font-bold rounded-[4px] border border-[#846adf] w-fit">
                                                    {service.category}
                                                </Link>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-2 py-4 text-left">
                                        <span className="text-[13px] font-bold text-[#846adf]">
                                            {service.priceOriginal}
                                        </span>
                                    </td>
                                    <td className="px-3 py-4 text-center">
                                        <span className="text-[13px] font-bold text-red-600 ">
                                            {service.priceRetail}
                                        </span>
                                    </td>
                                    <td className="px-3 py-4 text-left">
                                        <span className="text-[13px] font-bold text-blue-600 ">
                                            {service.priceCollab}
                                        </span>
                                    </td>
                                    <td className="px-3 py-4 text-left">
                                        <span className="text-[13px] font-bold text-green-600 ">
                                            {service.priceAgent}
                                        </span>
                                    </td>
                                    <td className="px-3 py-4 text-left">
                                        <span className="text-[13px] font-bold text-yellow-600 ">
                                            {service.priceDistributor}
                                        </span>
                                    </td>
                                    <td className="px-3 py-4">
                                        <div className="flex justify-center">
                                            <button
                                                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-200 ease-in-out focus:outline-none cursor-pointer ${service.status ? 'bg-[#846adf]' : 'bg-gray-300'
                                                    }`}
                                            >
                                                <span
                                                    className={`inline-block h-5 w-5 transform rounded-full bg-white transition-transform duration-200 ease-in-out ${service.status ? 'translate-x-5' : 'translate-x-0.5'
                                                        }`}
                                                />
                                            </button>
                                        </div>
                                    </td>
                                    <td className="px-3 py-4">
                                        <div className="flex items-center justify-center gap-2">
                                            <Link
                                                href={`/admin/services/packages/edit/${service.id}`}
                                                className="p-2 bg-[#49b6f5]! hover:bg-[#3aa5e3] text-white! rounded transition-colors cursor-pointer"
                                                title="Sửa"
                                            >
                                                <Edit2 className="w-4 h-4" />
                                            </Link>
                                            <button
                                                className="p-2 bg-red-600 hover:bg-red-700 text-white rounded transition-colors cursor-pointer"
                                                title="Xóa"
                                            >
                                                <Trash2 className="w-4 h-4" />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default PackageServiceTable