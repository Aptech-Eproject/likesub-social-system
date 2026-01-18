import { useEffect, useRef } from "react";

interface DropdownProps {
    isOpen: boolean,
    onClose: () => void,
    children: React.ReactNode,
    className?: string;
}

function Dropdown({ 
    isOpen, 
    onClose, 
    children, 
    className = "" 
}: DropdownProps) {
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (dropdownRef.current &&
                !dropdownRef.current.contains(e.target as Node) &&
                !(e.target as HTMLElement).closest(".dropdown-toggle")
            ) {
                onClose();
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        }

    }, [onClose]);

    if (!isOpen) return;

    return (
        <div
            ref={dropdownRef}
            className={`absolute right-0 mt-[15px] flex flex-col w-[260px] rounded-2xl border border-slate-200 bg-white p-3 shadow-md z-50 ${className}`}
        >
            {children}
        </div>
    )
}

export default Dropdown