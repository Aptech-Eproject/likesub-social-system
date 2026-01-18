import { CreditCard } from "lucide-react";

function StatisticsCards() {
    const stats = [
        {
            label: 'Toàn thời gian',
            value: '0đ',
            color: 'bg-[#E6533C]',
            icon: <CreditCard className="w-6 h-6" />
        },
        {
            label: 'Tháng 01',
            value: '0đ',
            color: 'bg-[#49b6f5]',
            icon: <CreditCard className="w-6 h-6" />
        },
        {
            label: 'Trong tuần',
            value: '0đ',
            color: 'bg-[#F5B849]',
            icon: <CreditCard className="w-6 h-6" />
        },
        {
            label: 'Hôm nay',
            value: '0đ',
            color: 'bg-[#846adf]',
            icon: <CreditCard className="w-6 h-6" />
        }
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6 w-full h-55">
            {stats.map((stat, index) => (
                <div key={index} className="bg-white rounded-md shadow-sm p-6 flex items-center justify-between">
                    <div className="flex flex-col">
                        <span className="text-xl font-bold text-gray-800">
                            {stat.value}
                        </span>
                        <span className="text-sm text-gray-500 font-medium">
                            {stat.label}
                        </span>
                    </div>
                    <div className={`${stat.color} w-12 h-12 rounded-full flex items-center justify-center`}>
                        <span className="text-white text-2xl font-bold">
                            {stat.icon}
                        </span>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default StatisticsCards