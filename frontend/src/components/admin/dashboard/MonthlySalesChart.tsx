"use client"

import { useState } from "react";
import type { ApexOptions } from "apexcharts";
import { MoreVerticalIcon } from "lucide-react";
import dynamic from "next/dynamic";

import Dropdown from "@/components/common/ui/dropdown";
import DropdownItem from "@/components/common/ui/dropdown-item";

const ReactApexChart = dynamic(() => import("react-apexcharts"), {
    ssr: false
});

function MonthlySalesChartAdmin() {
    const options: ApexOptions = {
        colors: ["#49B6f5"],
        chart: {
            fontFamily: "Outfit, sans-serif",
            type: "bar",
            height: 180,
            toolbar: {
                show: false,
            },
        },
        plotOptions: {
            bar: {
                horizontal: false,
                columnWidth: "39%",
                borderRadius: 5,
                borderRadiusApplication: "end",
            },
        },
        dataLabels: {
            enabled: false,
        },
        stroke: {
            show: true,
            width: 4,
            colors: ["transparent"],
        },
        xaxis: {
            categories: [
                "Jan", "Feb", "Mar", "Apr", "May", "Jun",
                "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
            ],
            axisBorder: { show: false },
            axisTicks: { show: false },
        },
        legend: {
            show: true,
            position: "top",
            horizontalAlign: "left",
            fontFamily: "Outfit",
        },
        yaxis: {
            title: { text: undefined },
        },
        grid: {
            yaxis: {
                lines: { show: true },
            },
        },
        fill: { opacity: 1 },
        tooltip: {
            x: { show: false },
            y: {
                formatter: (val: number) => `${val}`,
            },
        },
    };

    const series = [
        {
            name: "Sales",
            data: [168, 385, 201, 298, 187, 195, 291, 110, 215, 390, 280, 112],
        },
    ];

    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white px-5 pt-5 sm:px-6 sm:pt-6">
            {/* Header Chart */}
            <div className="flex items-center justify-between">
                {/* Title Chart */}
                <h3 className="text-lg font-semibold text-gray-800">
                    Doanh số theo tháng
                </h3>

                {/* Dot Button Toggle */}
                <div className="relative inline-block">
                    <button onClick={() => setIsOpen(!isOpen)}>
                        <MoreVerticalIcon className="w-5 h-5 text-gray-400 hover:text-gray-700 cursor-pointer" />
                    </button>

                    <Dropdown isOpen={isOpen} onClose={() => setIsOpen(false)} className="w-40 p-2">
                        <DropdownItem
                            to="/admin/view-more"
                            onItemClick={() => setIsOpen(false)}
                            className="flex w-full font-normal text-left text-gray-500 rounded-lg hover:bg-gray-100 hover:text-gray-700"
                        >
                            View More
                        </DropdownItem>
                        <DropdownItem
                            to="/admin/delete"
                            onItemClick={() => setIsOpen(false)}
                            className="flex w-full font-normal text-left text-gray-500 rounded-lg hover:bg-gray-100 hover:text-gray-700"
                        >
                            Delete
                        </DropdownItem>
                    </Dropdown>
                </div>
            </div>

            {/* Line Chart */}
            <div className="max-w-full overflow-x-auto custom-scrollbar no-scrollbar">
                <div className="-ml-5 min-w-[650px] xl:min-w-full pl-2">
                    <ReactApexChart
                        options={options}
                        series={series}
                        type="bar"
                        height={180}
                    />
                </div>
            </div>
        </div>
    );
}

export default MonthlySalesChartAdmin;