import {
    ArrowDownIcon,
    ArrowUpIcon,
    BoxIcon,
    Users
} from "lucide-react"

import Badge from "@/components/common/ui/badge"

function MetricsCards() {
    return (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-6">
            {/* Metric Card 1 */}
            <div className="rounded-md border border-gray-200 bg-white p-5 md:p-6">
                {/* Icon */}
                <div className="flex items-center justify-center w-12 h-12 bg-[#846adf] rounded-lg">
                    <Users className="text-white size-6" />
                </div>

                {/* Metric Data */}
                <div className="flex items-end justify-between mt-5">
                    <div>
                        <span className="text-sm text-gray-500">
                            Khách hàng
                        </span>
                        <h4 className="mt-2 font-extrabold text-gray-800 text-[30px] leading-9.5">
                            3,782
                        </h4>
                    </div>
                    <Badge color="success">
                        <ArrowUpIcon className="w-3 h-3" />
                        11.01%
                    </Badge>
                </div>
            </div>

            {/* Metric Card 2 */}
            <div className="rounded-2xl border border-gray-200 bg-white p-5 md:p-6">
                {/* Icon */}
                <div className="flex items-center justify-center w-12 h-12 bg-[#F5B849] rounded-lg">
                    <BoxIcon className="text-white size-6" />
                </div>

                {/* Metric Data */}
                <div className="flex items-end justify-between mt-5">
                    <div>
                        <span className="text-sm text-gray-500">
                            Đơn hàng
                        </span>
                        <h4 className="mt-2 font-extrabold text-gray-800 text-[30px] leading-[38px]">
                            5,359
                        </h4>
                    </div>
                    <Badge color="error">
                        <ArrowDownIcon className="w-3 h-3" />
                        9.05%
                    </Badge>
                </div>
            </div>
        </div>
    )
}

export default MetricsCards