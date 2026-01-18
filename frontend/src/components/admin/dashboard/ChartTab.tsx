import { useState } from "react"

type OptionType = "optionOne" | "optionTwo" | "optionThree";

function ChartTab() {
    const [selected, setSelected] = useState<OptionType>("optionOne");

    const getButtonClass = (option: OptionType) => 
        selected === option 
            ? "shadow-sm text-gray-900 bg-white"
            : "text-gray-500";

    return (
        <div className="flex items-center gap-0.5 rounded-lg bg-gray-100 p-0.5">
            {/* Monthly Tab */}
            <button
                onClick={() => setSelected("optionOne")}
                className={`px-3 py-2 font-medium w-full rounded-md text-sm hover:text-gray-90 cursor-pointer transition-colors duration-300 
                    ${getButtonClass("optionOne")}`}
            >
                Tháng
            </button>
            
            {/* Quarterly Tab */}
            <button
                onClick={() => setSelected("optionTwo")}
                className={`px-3 py-2 font-medium w-full rounded-md text-sm hover:text-gray-900 cursor-pointer transition-colors duration-300 
                    ${getButtonClass("optionTwo")}`}
            >
                Quý
            </button>
            
            {/* Annually Tab */}
            <button
                onClick={() => setSelected("optionThree")}
                className={`px-3 py-2 font-medium w-full rounded-md text-sm hover:text-gray-900 cursor-pointer transition-colors duration-300 
                    ${getButtonClass("optionThree")}`}
            >
                Năm
            </button>
        </div>
    )
}

export default ChartTab