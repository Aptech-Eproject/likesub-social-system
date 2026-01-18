import Link from "next/link";

interface DropdownItemProps {
    onItemClick: () => void;
    children: React.ReactNode;
    to: string;
    className?: string;
}

function DropdownItem({ 
    onItemClick, 
    children, 
    to,
    className = "" 
}: DropdownItemProps) {
    return (
        <Link 
            onClick={onItemClick} 
            href={to} 
            className={`flex items-center gap-3 px-4 py-2 font-medium text-slate-700 text=left rounded-lg group text-[14px] hover:bg-gray-100 hover:text-slate-700 cursor-pointer ${className}`}
        >
            { children }
        </Link>
    )
}

export default DropdownItem;