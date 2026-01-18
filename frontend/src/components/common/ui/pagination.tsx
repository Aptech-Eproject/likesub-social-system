"use client"

import { ArrowLeft, ArrowRight } from "lucide-react";
import { useState } from "react";

const SIZE = "w-10 h-10";
type Action = "increase" | "decrease";

function Pagination() {
    const [pages] = useState(3);
    const [pageActive, setPageActive] = useState(1);

    const changePage = (action: Action | number) => {
        setPageActive((prev) => {
            if (action === "increase") return Math.min(prev + 1, pages);
            if (action === "decrease") return Math.max(prev - 1, 1);

            return action;
        });
    };

    return (
        <div className="flex items-center gap-2">
            {/* Previous Button */}
            <button
                onClick={() => changePage("decrease")}
                className={`${SIZE} flex items-center justify-center rounded-md border border-gray-300 cursor-pointer hover:bg-slate-100 transition-colors duration-300`}
            >
                <ArrowLeft className="w-5 h-5" />
            </button>

            {/* Page Number Button */}
            {[...Array(pages)].map((_, index) => (
                <button
                    onClick={() => changePage(index + 1)}
                    key={index}
                    className={`${SIZE} flex items-center justify-center rounded-md border border-gray-300 cursor-pointer transition-colors duration-300 ${pageActive === index + 1
                        ? "bg-[#846adf] text-white hover:opacity-90"
                        : "hover:bg-slate-100"
                        }`}
                >
                    {index + 1}
                </button>
            ))}

            {/* Next Button */}
            <button
                onClick={() => changePage("increase")}
                className={`${SIZE} flex items-center justify-center rounded-md border border-gray-300 cursor-pointer hover:bg-slate-100 transition-colors duration-300`}
            >
                <ArrowRight className="w-5 h-5" />
            </button>
        </div>
    );
}

export default Pagination;
