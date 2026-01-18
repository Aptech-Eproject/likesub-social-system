import { useEffect, useState } from "react";
import { TrendingUp, X } from "lucide-react";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/common/ui/table";
import { PieChart, Pie, Cell, Legend, ResponsiveContainer } from "recharts";

type UtmSource = {
    rank: number;
    source: string;
    registrations: number;
};

const utmData: UtmSource[] = [
    { rank: 1, source: "web", registrations: 51 },
    { rank: 2, source: "zalo", registrations: 3 },
];

// Data for Pie Chart
const pieChartData = utmData.map(item => ({
    name: item.source,
    value: item.registrations
}));

const COLORS = ['#FFB6C1', '#87CEEB'];

function StatisticUserModal({
    setIsShowStatisticUserModal
}: {
    setIsShowStatisticUserModal: (value: boolean) => void
}) {
    const [isMounted, setIsMounted] = useState(false);
    const [activeTab, setActiveTab] = useState<"table" | "chart">("table");

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsMounted(true);
        }, 50);

        return () => clearTimeout(timer);
    }, []);

    const handleClose = () => {
        setIsMounted(false);
        setTimeout(() => {
            setIsShowStatisticUserModal(false);
        }, 300);
    };

    return (
        <div className={`fixed inset-0 z-9999 flex items-center justify-center transition-opacity duration-300 ease-out ${isMounted ? "opacity-100" : "opacity-0"
            }`}>
            {/* Backdrop */}
            <div
                className={`
                    absolute inset-0 bg-black/40
                    transition-opacity duration-300 ease-out
                    ${isMounted ? "opacity-100" : "opacity-0"}
                `}
                onClick={handleClose}
            />

            {/* Modal box */}
            <div
                className={`
                    relative z-10 bg-white rounded-lg shadow-xl w-[95%] max-w-4xl max-h-[90vh] overflow-hidden
                    transform transition-all duration-300 ease-out
                    ${isMounted
                        ? "opacity-100 scale-100 translate-y-0"
                        : "opacity-0 scale-95 translate-y-4"
                    }
                `}
            >
                {/* Header */}
                <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
                    <div className="flex items-center gap-2">
                        <TrendingUp className="w-5 h-5 text-gray-700" />
                        <h2 className="text-lg font-bold text-gray-800 uppercase">
                            Thống kê UTM Source
                        </h2>
                    </div>
                    <button
                        onClick={handleClose}
                        className="text-gray-400 hover:text-gray-600 transition-colors"
                    >
                        <X className="w-5 h-5" />
                    </button>
                </div>

                {/* Tabs */}
                <div className="flex border-b border-gray-200 bg-gray-50">
                    <button
                        onClick={() => setActiveTab("table")}
                        className={`flex-1 px-6 py-3 text-sm! font-medium transition-colors ${activeTab === "table"
                            ? "text-purple-600 bg-purple-50 border-b-2 border-purple-600"
                            : "text-gray-600 hover:text-gray-800 hover:bg-gray-100"
                            }`}
                    >
                        Table
                    </button>
                    <button
                        onClick={() => setActiveTab("chart")}
                        className={`flex-1 px-6 py-3 text-sm! font-medium transition-colors ${activeTab === "chart"
                            ? "text-purple-600 bg-purple-50 border-b-2 border-purple-600"
                            : "text-gray-600 hover:text-gray-800 hover:bg-gray-100"
                            }`}
                    >
                        Pie Chart
                    </button>
                </div>

                {/* Content */}
                <div className="p-6 overflow-y-auto max-h-[calc(90vh-200px)]">
                    {activeTab === "table" ? (
                        <>
                            {/* Table */}
                            <Table>
                                <TableHeader className="bg-gray-50">
                                    <TableRow>
                                        <TableHead className="text-black font-bold text-sm py-3 px-4 text-center">
                                            Xếp hạng
                                        </TableHead>
                                        <TableHead className="text-black font-bold text-sm py-3 px-4 text-center">
                                            utm_source
                                        </TableHead>
                                        <TableHead className="text-black font-bold text-sm py-3 px-4 text-center">
                                            Số thành viên đăng ký
                                        </TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {utmData.map((item) => (
                                        <TableRow
                                            key={item.rank}
                                            className={item.rank % 2 === 0 ? "bg-white" : "bg-gray-50"}
                                        >
                                            <TableCell className="text-sm py-3 px-4 text-center font-medium">
                                                {item.rank}
                                            </TableCell>
                                            <TableCell className="text-sm py-3 px-4 text-center">
                                                {item.source}
                                            </TableCell>
                                            <TableCell className="text-sm py-3 px-4 text-center font-medium">
                                                {item.registrations}
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>

                            {/* Instructions */}
                            <div className="mt-6 space-y-3 text-sm text-gray-700">
                                <p className="leading-relaxed">
                                    Nếu bạn muốn tracking thành viên đăng ký, bạn có thể chèn{" "}
                                    <code className="px-2 py-1 bg-gray-100 rounded text-purple-600 font-mono">
                                        ?utm_source=ten_chien_dich
                                    </code>{" "}
                                    vào cuối link web để thu thập dữ liệu nơi thành viên đăng ký.
                                </p>
                                <p className="leading-relaxed">
                                    Ví dụ bạn muốn biết có bao nhiêu user đăng ký trong chiến dịch quảng cáo{" "}
                                    <span className="font-semibold">ABC</span>, bạn chèn link web vào quảng cáo như sau =&gt;{" "}
                                    <code className="px-2 py-1 bg-gray-100 rounded text-purple-600 font-mono break-all">
                                        https://smmpanel2.cmsnt.net/?utm_source=camp_abc
                                    </code>
                                </p>
                            </div>
                        </>
                    ) : (
                        <div className="flex flex-col items-center justify-center py-10">
                            <ResponsiveContainer width="100%" height={400}>
                                <PieChart>
                                    <Pie
                                        data={pieChartData}
                                        cx="50%"
                                        cy="50%"
                                        labelLine={false}
                                        outerRadius={150}
                                        fill="#8884d8"
                                        dataKey="value"
                                    >
                                        {pieChartData.map((entry, index) => (
                                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                        ))}
                                    </Pie>
                                    <Legend
                                        verticalAlign="top"
                                        height={36}
                                        formatter={(value: string) => <span className="text-sm font-medium text-gray-700">{value}</span>}
                                    />
                                </PieChart>
                            </ResponsiveContainer>

                            {/* Instructions - same as table view */}
                            <div className="mt-6 space-y-3 text-sm text-gray-700 w-full">
                                <p className="leading-relaxed">
                                    Nếu bạn muốn tracking thành viên đăng ký, bạn có thể chèn{" "}
                                    <code className="px-2 py-1 bg-gray-100 rounded text-purple-600 font-mono">
                                        ?utm_source=ten_chien_dich
                                    </code>{" "}
                                    vào cuối link web để thu thập dữ liệu nơi thành viên đăng ký.
                                </p>
                                <p className="leading-relaxed">
                                    Ví dụ bạn muốn biết có bao nhiêu user đăng ký trong chiến dịch quảng cáo{" "}
                                    <span className="font-semibold">ABC</span>, bạn chèn link web vào quảng cáo như sau =&gt;{" "}
                                    <code className="px-2 py-1 bg-gray-100 rounded text-purple-600 font-mono break-all">
                                        https://smmpanel2.cmsnt.net/?utm_source=camp_abc
                                    </code>
                                </p>
                            </div>
                        </div>
                    )}
                </div>

                {/* Footer */}
                <div className="flex justify-end px-6 py-4 border-t border-gray-200 bg-gray-50">
                    <button
                        onClick={handleClose}
                        className="px-6 py-2 bg-[#0f172a] hover:bg-gray-600 text-white text-sm font-medium rounded-md transition-colors cursor-pointer"
                    >
                        Đóng
                    </button>
                </div>
            </div>
        </div>
    );
}

export default StatisticUserModal;