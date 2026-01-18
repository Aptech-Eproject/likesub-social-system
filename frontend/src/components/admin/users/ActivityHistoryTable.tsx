import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/common/ui/table";

export type ActivityHistory = {
    id: string;
    action: string;
    time: string;
    ipAddress: string;
};

const activityHistories: ActivityHistory[] = [
    {
        id: "ACT001",
        action: "Cập nhật thông tin cá nhân",
        time: "06/01/2026 09:32",
        ipAddress: "113.160.45.21",
    },
    {
        id: "ACT002",
        action: "Đổi mật khẩu",
        time: "05/01/2026 21:10",
        ipAddress: "113.160.45.21",
    },
    {
        id: "ACT003",
        action: "Đăng nhập hệ thống",
        time: "05/01/2026 08:45",
        ipAddress: "27.71.98.102",
    },
    {
        id: "ACT004",
        action: "Cập nhật số điện thoại",
        time: "04/01/2026 18:22",
        ipAddress: "27.71.98.102",
    },
];

export function ActivityHistoryTable() {
    return (
        <Table className="">
            <TableHeader className="bg-white">
                <TableRow className="rounded-md">
                    <TableHead className="min-w-55 text-black">Thao tác</TableHead>
                    <TableHead className="text-black min-w-37">Thời gian</TableHead>
                    <TableHead className="text-left text-black">IP</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {activityHistories.map((item) => (
                    <TableRow key={item.id}>
                        <TableCell className="font-bold text-xs! text-gray-600">
                            {item.action}
                        </TableCell>
                        <TableCell className="text-xs!">
                            {item.time}
                        </TableCell>
                        <TableCell className="text-left">
                            <div className="bg-red-100 px-2 py-0.5 inline-block text-red-700 text-xs font-medium rounded-sm">
                                {item.ipAddress}
                            </div>
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    )
}
