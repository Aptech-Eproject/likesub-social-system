import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/common/ui/table";
import { DollarSign } from "lucide-react";

export type BalanceFluctuation = {
    id: string;
    change: string;
    balanceAfter: string;
    time: string;
    reason: string;
};

const balanceFluctuations: BalanceFluctuation[] = [];

export function BalanceFluctuations() {
    return (
        <Table>
            <TableHeader className="bg-white">
                <TableRow className="border-b border-gray-100">
                    <TableHead className="text-black font-bold text-sm py-4 px-6">
                        Thay đổi
                    </TableHead>
                    <TableHead className="text-black font-bold text-sm py-4 px-6">
                        Số dư sau
                    </TableHead>
                    <TableHead className="text-black font-bold text-sm py-4 px-6">
                        Thời gian
                    </TableHead>
                    <TableHead className="text-black font-bold text-sm py-4 px-6">
                        Lý do
                    </TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {balanceFluctuations.length === 0 ? (
                    <TableRow className="hover:bg-transparent">
                        <TableCell colSpan={4} className="py-20">
                            <div className="flex flex-col items-center justify-center gap-3">
                                <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center">
                                    <DollarSign className="w-8 h-8 text-gray-400" />
                                </div>
                                <span className="text-gray-400 text-sm font-medium">
                                    Chưa có giao dịch nào
                                </span>
                            </div>
                        </TableCell>
                    </TableRow>
                ) : (
                    balanceFluctuations.map((item) => (
                        <TableRow key={item.id}>
                            <TableCell className="font-medium text-sm px-6">
                                {item.change}
                            </TableCell>
                            <TableCell className="text-sm px-6">
                                {item.balanceAfter}
                            </TableCell>
                            <TableCell className="text-sm px-6">
                                {item.time}
                            </TableCell>
                            <TableCell className="text-sm px-6">
                                {item.reason}
                            </TableCell>
                        </TableRow>
                    ))
                )}
            </TableBody>
        </Table>
    );
}