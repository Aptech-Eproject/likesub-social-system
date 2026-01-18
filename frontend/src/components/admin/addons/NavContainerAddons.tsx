"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback } from "react";

function NavContainerAddons() {
    const pathName = usePathname();

    const isActive = useCallback((path: string) => {
        if (!path) return false;
        return pathName === path;
    }, [pathName]);

    const navClass = ({ isActive }: { isActive: boolean }) =>
        `flex items-center justify-center gap-2 py-2 px-5 text-sm rounded-3xl font-bold transition-all duration-300 cursor-pointer ${isActive
            ? "bg-[#846adf]! text-white"
            : "text-gray-700 hover:text-purple-900 hover:bg-slate-100!"
        }`;

    return (
        <nav className="w-full px-6">
            <ul className="flex items-center gap-2">
                <Link href={`/admin/addons/all`} className={navClass({ isActive: isActive(`/admin/addons/all`) })}>
                    Tất cả
                </Link>
                <Link href={`/admin/addons/payment`} className={navClass({ isActive: isActive(`/admin/addons/payment`) })}>
                    Thanh toán
                </Link>
                <Link href={`/admin/addons/tool`} className={navClass({ isActive: isActive(`/admin/addons/tool`) })}>
                    Công cụ
                </Link>
            </ul>
        </nav>
    )
}

export default NavContainerAddons