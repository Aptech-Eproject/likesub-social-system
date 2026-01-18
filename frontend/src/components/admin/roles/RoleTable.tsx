import React, { useState } from 'react';
import { Edit2, Trash2, X } from 'lucide-react';
import { confirmAction } from '@/lib/alert';
import Link from 'next/link';

interface Role {
    id: number;
    name: string;
    userCount: number;
    permissions: string[];
    allPermissions: string[];
    additionalCount: number
}

function RoleTable() {
    const [selectedRole, setSelectedRole] = useState<Role | null>(null);

    const roles: Role[] = [
        {
            id: 1,
            name: 'Sales',
            userCount: 0,
            permissions: ['view_logs', 'view_transactions', 'view_user'],
            allPermissions: ['view_logs', 'view_transactions', 'view_user', 'view_affiliate', 'view_withdraw_affiliate', 'view_coupon'],
            additionalCount: 3
        },
        {
            id: 2,
            name: 'Super Admin',
            userCount: 0,
            permissions: ['view_license', 'view_statistical', 'view_recent_transactions'],
            allPermissions: ['view_license', 'view_statistical', 'view_recent_transactions', 'view_logs', 'view_transactions', 'view_user', 'view_affiliate', 'view_withdraw_affiliate', 'view_coupon', 'manage_users', 'manage_roles', 'view_reports', 'edit_settings', 'delete_content', 'create_content', 'approve_content', 'view_analytics', 'export_data', 'import_data', 'manage_billing', 'view_audit_logs', 'configure_system', 'manage_integrations', 'view_dashboard', 'send_notifications', 'manage_permissions', 'view_api_keys', 'manage_webhooks', 'view_security_logs', 'manage_backups', 'view_performance', 'manage_cache', 'view_errors', 'manage_database', 'view_queue', 'manage_jobs', 'view_scheduler', 'manage_tasks', 'view_monitoring', 'manage_alerts', 'view_metrics', 'manage_deployments', 'view_infrastructure', 'manage_servers', 'view_network', 'manage_security', 'view_compliance'],
            additionalCount: 42
        },
    ];

    const handleShowAllPermissions = (role: Role) => {
        setSelectedRole(role);
    };

    const handleCloseModal = () => {
        setSelectedRole(null);
    };

    const customStyles = {
        container: 'border-radius: 12px; padding: 1.5rem;',
        title: 'font-size: 1.25rem; font-weight: 600; color: #1f2937; margin-bottom: 0.5rem;',
        text: 'font-size: 0.95rem; color: #4b5563; line-height: 1.5;',
        warningBox: 'margin-top: 1rem; padding: 0.75rem; border-radius: 8px; font-size: 0.875rem; display: flex; align-items: start; gap: 8px;'
    };

    const showDeleteRoleAlert = async () => {
        const result = await confirmAction({
            title: '<span style="' + customStyles.title + '">Xác nhận xóa Role</span>',
            html: `
                <div style="${customStyles.text}">
                    Bạn có chắc chắn muốn xóa Role này không ?
                </div>
            `,
        });

        if (result.isConfirmed) console.log("Resetting deposits...");
    };

    return (
        <div className="relative overflow-hidden bg-white dark:divide-white/5 dark:bg-white/3">
            <div className="max-w-full overflow-x-auto">
                <div className="w-full">
                    <div className="bg-white rounded-sm shadow-sm overflow-hidden">
                        <div className="overflow-x-auto">
                            {/* Table */}
                            <table className="w-full">
                                {/* Header */}
                                <thead>
                                    <tr>
                                        <th className="px-6 py-3 text-left text-[13px] font-bold text-black whitespace-nowrap">
                                            Thao tác
                                        </th>
                                        <th className="px-6 py-3 text-left text-[13px] font-bold text-black whitespace-nowrap">
                                            Vai trò
                                        </th>
                                        <th className="px-4 py-3 text-left text-[13px] font-bold text-black whitespace-nowrap">
                                            Tài khoản thuộc Role này
                                        </th>
                                        <th className="px-4 py-3 text-left text-[13px] font-bold text-black whitespace-nowrap">
                                            Quyền hạn
                                        </th>
                                    </tr>
                                </thead>

                                {/* Body */}
                                <tbody>
                                    {roles.map((role, idx) => (
                                        <tr
                                            key={role.id}
                                            className="hover:bg-gray-50 transition-colors odd:bg-gray-100"
                                        >
                                            <td className="px-6 py-3">
                                                <div className="flex items-center justify-start gap-2">
                                                    <Link
                                                        href={`/admin/roles/edit/${role.id}`}
                                                        className="p-2 bg-[#49b6f5]! hover:bg-[#3aa5e3]! text-white! rounded transition-colors cursor-pointer"
                                                        title="Sửa"
                                                    >
                                                        <Edit2 className="w-4 h-4" />
                                                    </Link>
                                                    <button
                                                        className="p-2 bg-red-600 hover:bg-red-700 text-white rounded transition-colors cursor-pointer"
                                                        title="Xóa"
                                                        onClick={showDeleteRoleAlert}
                                                    >
                                                        <Trash2 className="w-4 h-4" />
                                                    </button>
                                                </div>
                                            </td>
                                            <td className="px-6 py-3">
                                                <span className="text-[13px] text-gray-800 font-bold">
                                                    {role.name}
                                                </span>
                                            </td>
                                            <td className="px-4 py-3">
                                                <span className="text-[13px] text-gray-800 font-medium">
                                                    {role.userCount}
                                                </span>
                                            </td>
                                            <td className="px-4 py-3">
                                                <div className="flex items-center gap-2 flex-wrap">
                                                    {role.permissions.map((permission, index) => (
                                                        <span
                                                            key={index}
                                                            className="inline-block px-2 py-1 text-[#846adf] text-[11px] font-bold rounded-sm border border-[#846adf]"
                                                        >
                                                            {permission}
                                                        </span>
                                                    ))}
                                                    {role.additionalCount > 0 && (
                                                        <button
                                                            className="text-[#49b6f5] text-[12px]! font-bold cursor-pointer hover:underline"
                                                            onClick={() => handleShowAllPermissions(role)}
                                                        >
                                                            +{role.additionalCount} quyền khác
                                                        </button>
                                                    )}
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

            {/* Modal Overlay - Hiển thị tất cả quyền */}
            {selectedRole && (
                <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50" onClick={handleCloseModal}>
                    <div
                        className="bg-white rounded-lg shadow-xl max-w-3xl w-full mx-4 max-h-[80vh] overflow-hidden"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Header */}
                        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
                            <h3 className="text-lg font-bold text-gray-900">
                                Tất cả quyền hạn - {selectedRole.name}
                            </h3>
                            <button
                                onClick={handleCloseModal}
                                className="p-1 hover:bg-gray-100 rounded-full transition-colors cursor-pointer"
                            >
                                <X className="w-5 h-5 text-gray-500" />
                            </button>
                        </div>

                        {/* Content */}
                        <div className="px-6 py-4 overflow-y-auto max-h-[60vh]">
                            <div className="flex flex-wrap gap-2">
                                {selectedRole.allPermissions.map((permission, index) => (
                                    <span
                                        key={index}
                                        className="inline-block px-3 py-1.5 text-[#846adf] text-[12px] font-bold rounded-sm border border-[#846adf]"
                                    >
                                        {permission}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Footer */}
                        <div className="px-6 py-4 border-t border-gray-200 flex justify-end">
                            <button
                                onClick={handleCloseModal}
                                className="px-4 py-2 bg-[#49b6f5] hover:bg-[#3aa5e3] text-white text-sm font-medium rounded transition-colors cursor-pointer"
                            >
                                Đóng
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default RoleTable;