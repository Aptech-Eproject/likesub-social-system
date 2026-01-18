"use client"

import { ShieldUser, User, UserStar } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback } from "react";

function NavContainerUserDetail({
    id
}: {
    id: string
}) {
    const pathName = usePathname();

    const isActive = useCallback((path: string) => {
        if (!path) return false;
        return pathName === path;
    }, [pathName]);

    const navClass = ({ isActive }: { isActive: boolean }) =>
        `flex items-center justify-center gap-2 py-1.5 px-2 text-sm font-medium transition-all duration-300 ${isActive
            ? "bg-purple-100! text-purple-800 rounded-md"
            : "text-gray-700 hover:text-purple-900"
        }`;

    return (
        <nav className="w-full">
            <ul className="flex items-center gap-2">
                <Link href={`/admin/users/${id}/info`} className={navClass({ isActive: isActive(`/admin/users/${id}/info`) })}>
                    <User className="w-3.5 h-3.5" />
                    Thông tin cá nhân
                </Link>
                <Link href={`/admin/users/${id}/security`} className={navClass({ isActive: isActive(`/admin/users/${id}/security`) })}>
                    <ShieldUser className="w-3.5 h-3.5" />
                    Bảo mật
                </Link>
                <Link href={`/admin/users/${id}/permission`} className={navClass({ isActive: isActive(`/admin/users/${id}/permission`) })}>
                    <UserStar className="w-3.5 h-3.5" />
                    Quyền hạn
                </Link>
            </ul>
        </nav>
    )
}

export default NavContainerUserDetail