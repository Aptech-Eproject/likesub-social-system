import Badge from "@/components/common/ui/badge";
import {
    Table,
    TableBody,
    TableCell,
    TableHeader,
    TableRow,
} from "../../common/ui/product-table";
import Image from "next/image";

function InvoiceTable() {
    interface Order {
        id: number;
        user: {
            image: string;
            name: string;
            role: string;
        };
        projectName: string;
        team: {
            images: string[];
        };
        status: string;
        budget: string;
    }

    const tableData: Order[] = [
        {
            id: 1,
            user: {
                image: "https://randomuser.me/api/portraits/women/44.jpg",
                name: "Lindsey Curtis",
                role: "Web Designer",
            },
            projectName: "Agency Website",
            team: {
                images: [
                    "https://randomuser.me/api/portraits/men/32.jpg",
                    "https://randomuser.me/api/portraits/women/65.jpg",
                    "https://randomuser.me/api/portraits/men/76.jpg",
                ],
            },
            budget: "3.9K",
            status: "Active",
        },
        {
            id: 2,
            user: {
                image: "https://randomuser.me/api/portraits/women/68.jpg",
                name: "Kaiya George",
                role: "Project Manager",
            },
            projectName: "Technology",
            team: {
                images: [
                    "https://randomuser.me/api/portraits/men/45.jpg",
                    "https://randomuser.me/api/portraits/women/21.jpg",
                ],
            },
            budget: "24.9K",
            status: "Pending",
        },
        {
            id: 3,
            user: {
                image: "https://randomuser.me/api/portraits/men/12.jpg",
                name: "Zain Geidt",
                role: "Content Writing",
            },
            projectName: "Blog Writing",
            team: {
                images: [
                    "https://randomuser.me/api/portraits/women/54.jpg",
                ],
            },
            budget: "12.7K",
            status: "Active",
        },
        {
            id: 4,
            user: {
                image: "https://randomuser.me/api/portraits/men/83.jpg",
                name: "Abram Schleifer",
                role: "Digital Marketer",
            },
            projectName: "Social Media",
            team: {
                images: [
                    "https://randomuser.me/api/portraits/women/9.jpg",
                    "https://randomuser.me/api/portraits/men/56.jpg",
                    "https://randomuser.me/api/portraits/women/38.jpg",
                ],
            },
            budget: "2.8K",
            status: "Cancel",
        },
        {
            id: 5,
            user: {
                image: "https://randomuser.me/api/portraits/women/17.jpg",
                name: "Carla George",
                role: "Front-end Developer",
            },
            projectName: "Website",
            team: {
                images: [
                    "https://randomuser.me/api/portraits/men/19.jpg",
                    "https://randomuser.me/api/portraits/women/73.jpg",
                    "https://randomuser.me/api/portraits/men/91.jpg",
                ],
            },
            budget: "4.5K",
            status: "Active",
        },
    ];

    return (
        <div className="overflow-hidden bg-white dark:border-white/[0.05] dark:bg-white/[0.03]">
            <div className="max-w-full overflow-x-auto">
                <div className="w-full">
                    <Table>
                        {/* Table Header */}
                        <TableHeader className="border-b border-gray-200 dark:border-white/[0.05] bg-slate-100">
                            <TableRow>
                                <TableCell
                                    isHeader
                                    className="px-5 py-4 font-bold text-gray-500 text-start text-[13px] dark:text-gray-400"
                                >
                                    Mã hóa đơn
                                </TableCell>
                                <TableCell
                                    isHeader
                                    className="px-5 py-4 font-bold text-gray-500 text-start text-[13px] dark:text-gray-400"
                                >
                                    Khách hàng
                                </TableCell>
                                <TableCell
                                    isHeader
                                    className="px-5 py-4 font-bold text-gray-500 text-start text-[13px] dark:text-gray-400"
                                >
                                    Ngày tạo
                                </TableCell>
                                <TableCell
                                    isHeader
                                    className="px-5 py-4 font-bold text-gray-500 text-start text-[13px] dark:text-gray-400"
                                >
                                    Ngày hết hạn
                                </TableCell>
                                <TableCell
                                    isHeader
                                    className="px-5 py-4 font-bold text-gray-500 text-start text-[13px] dark:text-gray-400"
                                >
                                    Tổng cộng
                                </TableCell>
                                <TableCell
                                    isHeader
                                    className="px-5 py-4 font-bold text-gray-500 text-start text-[13px] dark:text-gray-400"
                                >
                                    Trạng thái
                                </TableCell>
                            </TableRow>
                        </TableHeader>

                        {/* Table Body */}
                        <TableBody className="divide-y divide-gray-200 dark:divide-white/[0.05]">
                            {tableData.map((order) => (
                                <TableRow key={order.id}>
                                    <TableCell className="px-5 py-4 sm:px-6 text-start">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 overflow-hidden rounded-full">
                                                <Image
                                                    width={40}
                                                    height={40}
                                                    src={order.user.image}
                                                    alt={order.user.name}
                                                />
                                            </div>
                                            <div>
                                                <span className="block font-medium text-gray-800 text-sm dark:text-white/90">
                                                    {order.user.name}
                                                </span>
                                                <span className="block text-gray-500 text-xs dark:text-gray-400">
                                                    {order.user.role}
                                                </span>
                                            </div>
                                        </div>
                                    </TableCell>

                                    <TableCell className="px-4 py-3 text-gray-500 text-start text-sm dark:text-gray-400">
                                        {order.projectName}
                                    </TableCell>

                                    <TableCell className="px-4 py-3 text-gray-500 text-start text-sm dark:text-gray-400">
                                        <div className="flex -space-x-2">
                                            {order.team.images.map((teamImage, index) => (
                                                <div
                                                    key={index}
                                                    className="w-6 h-6 overflow-hidden border-2 border-white rounded-full dark:border-gray-900"
                                                >
                                                    <Image
                                                        width={24}
                                                        height={24}
                                                        src={teamImage}
                                                        alt={`Team member ${index + 1}`}
                                                        className="w-full"
                                                    />
                                                </div>
                                            ))}
                                        </div>
                                    </TableCell>

                                    <TableCell className="px-4 py-3 text-gray-500 text-sm dark:text-gray-400">
                                        {order.budget}
                                    </TableCell>

                                    <TableCell className="px-4 py-3 text-gray-500 text-sm dark:text-gray-400">
                                        {order.budget}
                                    </TableCell>

                                    <TableCell className="px-4 py-3 text-gray-500 text-start text-sm dark:text-gray-400">
                                        <Badge
                                            size="xs"
                                            color={
                                                order.status === "Active"
                                                    ? "success"
                                                    : order.status === "Pending"
                                                        ? "warning"
                                                        : "error"
                                            }
                                        >
                                            {order.status}
                                        </Badge>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>

                {/* Pagination */}
            </div>
        </div>
    );
}

export default InvoiceTable;