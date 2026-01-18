"use client"

import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer
} from 'recharts';

function DepositChart() {
    const chartData = Array.from({ length: 31 }, (_, i) => ({
        date: `${i + 1}/01/2026`,
        amount: 0
    }));

    return (
        <div className="bg-white rounded-md shadow-sm min-w-2xl">
            <div className="flex items-center justify-between mb-6 px-6 py-4 border-b border-gray-200">
                <h3 className="text-[16px] font-bold text-gray-800">
                    THỐNG KÊ NẠP TIỀN THÁNG 01
                </h3>
                <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-purple-500 rounded"></div>
                    <span className="text-sm text-gray-600">Nạp tiền tự động</span>
                </div>
            </div>

            <ResponsiveContainer width="100%" height={300}>
                <LineChart data={chartData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                    <XAxis
                        dataKey="date"
                        tick={{ fontSize: 11 }}
                        angle={-45}
                        textAnchor="end"
                        height={80}
                    />
                    <YAxis
                        tick={{ fontSize: 12 }}
                        domain={[0, 1]}
                        ticks={[0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0]}
                    />
                    <Tooltip
                        contentStyle={{
                            backgroundColor: '#fff',
                            border: '1px solid #ccc',
                            borderRadius: '4px',
                            fontSize: '10px'
                        }}
                    />
                    <Line
                        type="monotone"
                        dataKey="amount"
                        stroke="#846adf"
                        strokeWidth={2}
                        dot={{ fill: '#846adf', r: 0 }}
                        activeDot={{ r: 5 }}
                    />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
}

export default DepositChart