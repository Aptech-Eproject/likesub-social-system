"use client"

import * as React from "react";
import { cn } from "@/lib/cn";

interface QuantityInputProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
    value?: number;
    min?: number;
    max?: number;
    step?: number;
    onChange?: (value: number) => void;
}

const QuantityInput = React.forwardRef<HTMLDivElement, QuantityInputProps>(({
    value = 1,
    min = 1,
    max = 100,
    step = 1,
    onChange,
    className,
    ...props
}, ref) => {
    const [count, setCount] = React.useState<number>(value);

    const handleDecrement = () => {
        setCount((prev) => {
            const newValue = Math.max(prev - step, min);
            onChange?.(newValue);

            return newValue;
        });
    };

    const handleIncrement = () => {
        setCount((prev) => {
            const newValue = Math.min(prev + step, max);
            onChange?.(newValue);

            return newValue;
        });
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        let val = parseInt(e.target.value, 10);
        if (isNaN(val)) val = min;

        val = Math.max(Math.min(val, max), min);
        setCount(val);
        onChange?.(val);
    };

    return (
        <div
            ref={ref}
            className={cn(
                "bg-white flex items-center border border-gray-300 rounded-md overflow-hidden mb-1",
                className
            )}
            {...props}
        >
            <button
                type="button"
                onClick={handleDecrement}
                className="px-5 py-1.5 text-gray-600 hover:bg-gray-100 disabled:text-gray-300 disabled:hover:bg-transparent cursor-pointer"
                disabled={count <= min}
            >
                –
            </button>

            <input
                type="number"
                className="w-full text-center border-l border-r border-gray-300 outline-none py-1.5"
                value={count}
                onChange={handleChange}
                min={min}
                max={max}
            />

            <button
                type="button"
                onClick={handleIncrement}
                className="px-5 py-1.5 text-gray-600 hover:bg-gray-100 disabled:text-gray-300 disabled:hover:bg-transparent cursor-pointer"
                disabled={count >= max}
            >
                +
            </button>
        </div>
    );
}
);

QuantityInput.displayName = "QuantityInput";

export { QuantityInput };
