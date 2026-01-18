"use client";

import {
    ChartNoAxesCombined,
    CloudDownload,
    KeyRound,
    RotateCcw,
    UserX
} from "lucide-react";
import { useState } from "react";

import StatisticUserModal from "./StatisticUserModal";
import { confirmAction } from "@/lib/alert";

function UserActions() {
    const customStyles = {
        container: 'border-radius: 12px; padding: 1.5rem;',
        title: 'font-size: 1.25rem; font-weight: 600; color: #1f2937; margin-bottom: 0.5rem;',
        text: 'font-size: 0.95rem; color: #4b5563; line-height: 1.5;',
        warningBox: 'margin-top: 1rem; padding: 0.75rem; border-radius: 8px; font-size: 0.875rem; display: flex; align-items: start; gap: 8px;'
    };

    const showResetAllDepositAlert = async () => {
        const result = await confirmAction({
            title: '<span style="' + customStyles.title + '">Xác nhận reset tổng nạp</span>',
            html: `
            <div style="${customStyles.text}">
                Hệ thống sẽ đặt lại số dư tổng nạp của <span style="font-weight: 600; color: #111827;">tất cả thành viên</span> về mức 0.
            </div>
            <div style="${customStyles.warningBox} background-color: #fef2f2; color: #991b1b; border: 1px solid #fee2e2;">
                <span>⚠️</span>
                <span>Hành động này mang tính vĩnh viễn và không thể hoàn tác.</span>
            </div>
        `,
        });

        if (result.isConfirmed) console.log("Resetting deposits...");
    };

    const showLogoutAllAlert = async () => {
        const result = await confirmAction({
            title: '<span style="' + customStyles.title + '">Đăng xuất toàn hệ thống</span>',
            html: `
            <div style="${customStyles.text}">
                Bạn có chắc chắn muốn kết thúc phiên làm việc của <span style="font-weight: 600; color: #111827;">tất cả người dùng</span> hiện tại?
            </div>
            <div style="${customStyles.warningBox} background-color: #fffbeb; color: #92400e; border: 1px solid #fef3c7;">
                <span>💡</span>
                <span>Người dùng sẽ phải đăng nhập lại để tiếp tục sử dụng.</span>
            </div>
        `,
        });

        if (result.isConfirmed) console.log("Logging out all users...");
    };

    const showChangeAllApiKeys = async () => {
        const result = await confirmAction({
            title: '<span style="' + customStyles.title + '">Cập nhật API Keys hàng loạt</span>',
            html: `
            <div style="${customStyles.text}">
                Toàn bộ API Keys sẽ được làm mới. Các hệ thống bên thứ ba đang kết nối sẽ bị <span style="font-weight: 600; color: #111827;">ngắt quãng ngay lập tức</span>.
            </div>
            <div style="${customStyles.warningBox} background-color: #fef2f2; color: #991b1b; border: 1px solid #fee2e2;">
                <span>🔒</span>
                <span>Vui lòng cập nhật key mới cho các tích hợp sau khi thực hiện.</span>
            </div>
        `,
        });

        if (result.isConfirmed) console.log("Updating API Keys...");
    };

    const [isShowStatisticUserModal, setIsShowStatisticUserModal] = useState(false);

    return (
        <>
            {/* Modal */}
            {isShowStatisticUserModal &&
                <StatisticUserModal
                    setIsShowStatisticUserModal={setIsShowStatisticUserModal}
                />
            }

            {/* Alert */}
            <div className="flex items-center justify-end gap-2">
                {/* Statistic Button */}
                <button
                    onClick={() => setIsShowStatisticUserModal(true)}
                    className="inline-flex items-center gap-1 text-white bg-[#e6533c] hover:bg-orange-700 px-4 py-2 rounded-sm transition-colors duration-300 cursor-pointer"
                >
                    <ChartNoAxesCombined className="w-4 h-4" />
                    <span className="text-xs font-bold">
                        THỐNG KÊ
                    </span>
                </button>

                {/* Email Download Button */}
                <button
                    className="inline-flex items-center gap-1 text-white bg-green-600 hover:bg-green-700 px-4 py-2 rounded-sm transition-colors duration-300 cursor-pointer"
                >
                    <CloudDownload className="w-4 h-4" />
                    <span className="text-xs font-bold">
                        TẢI EMAIL USERS
                    </span>
                </button>

                {/* Reset Button */}
                <button
                    onClick={showResetAllDepositAlert}
                    className="inline-flex items-center gap-1 text-white bg-cyan-500 hover:bg-cyan-600 px-4 py-2 rounded-sm transition-colors duration-300 cursor-pointer"
                >
                    <RotateCcw className="w-4 h-4" />
                    <span className="text-xs font-bold">
                        RESET TỔNG NẠP
                    </span>
                </button>

                {/* Logout All Button */}
                <button
                    onClick={showLogoutAllAlert}
                    className="inline-flex items-center gap-1 text-white bg-yellow-500 hover:bg-yellow-600 px-4 py-2 rounded-sm transition-colors duration-300 cursor-pointer"
                >
                    <UserX className="w-4 h-4" />
                    <span className="text-xs font-bold">
                        ĐĂNG XUẤT TẤT CẢ
                    </span>
                </button>

                {/* Change All API-KEYS Button */}
                <button
                    onClick={showChangeAllApiKeys}
                    className="inline-flex items-center gap-1 text-white bg-[#846adf]  hover:bg-purple-800 px-4 py-2 rounded-sm transition-colors duration-300 cursor-pointer"
                >
                    <KeyRound className="w-4 h-4" />
                    <span className="text-xs font-bold">
                        THAY ĐỔI API KEY TOÀN BỘ THÀNH VIÊN
                    </span>
                </button>
            </div>
        </>
    );
}

export default UserActions;