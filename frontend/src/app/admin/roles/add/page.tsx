"use client"

import { useState } from 'react';
import { ArrowLeft, Plus } from 'lucide-react';
import AdminSubHeader from '@/layouts/admin/AdminSubHeader';

interface Permission {
    id: string;
    label: string;
    code: string;
    checked: boolean;
}

interface PermissionGroup {
    id: string;
    name: string;
    checked: boolean;
    permissions: Permission[];
}

function AddRoleForm() {
    const titlePage = "thêm mới vai trò";
    const prevTitle = "danh sách vai trò";
    const urlPrevTitle = "/admin/roles";

    const [roleName, setRoleName] = useState('');
    const [selectAll, setSelectAll] = useState(false);

    const [permissionGroups, setPermissionGroups] = useState<PermissionGroup[]>([
        {
            id: 'dashboard',
            name: 'Dashboard',
            checked: false,
            permissions: [
                { id: 'view_license', label: 'Xem giấy phép kích hoạt website & số phiên bản website tại Dashboard', code: 'view_license', checked: false },
                { id: 'view_statistical', label: 'Xem thống kê tại Dashboard', code: 'view_statistical', checked: false },
                { id: 'view_recent_transactions', label: 'Xem đơn hàng & nạp tiền gần đây tại Dashboard', code: 'view_recent_transactions', checked: false },
            ]
        },
        {
            id: 'security',
            name: 'Security',
            checked: false,
            permissions: [
                { id: 'view_block_ip', label: 'Xem danh sách IP bị chặn', code: 'view_block_ip', checked: false },
                { id: 'edit_block_ip', label: 'Thêm, Xóa, Sửa IP bị chặn', code: 'edit_block_ip', checked: false },
            ]
        },
        {
            id: 'addons',
            name: 'Addons',
            checked: false,
            permissions: [
                { id: 'view_addons', label: 'Xem danh sách Addons', code: 'view_addons', checked: false },
                { id: 'edit_addons', label: 'Thêm, Xóa, Sửa Addons', code: 'edit_addons', checked: false },
            ]
        },
        {
            id: 'user',
            name: 'User',
            checked: true,
            permissions: [
                { id: 'view_user', label: 'Xem danh sách thành viên', code: 'view_user', checked: true },
                { id: 'edit_user', label: 'Thêm xóa sửa thành viên', code: 'edit_user', checked: false },
                { id: 'login_user', label: 'Đăng nhập vào tài khoản thành viên', code: 'login_user', checked: false },
            ]
        },
        {
            id: 'role',
            name: 'Role',
            checked: false,
            permissions: [
                { id: 'view_role', label: 'Xem danh sách role', code: 'view_role', checked: false },
                { id: 'edit_role', label: 'Thêm xóa sửa role', code: 'edit_role', checked: false },
            ]
        },
        {
            id: 'ticket',
            name: 'Ticket',
            checked: false,
            permissions: [
                { id: 'view_ticket', label: 'Xem danh sách yêu cầu hỗ trợ', code: 'view_ticket', checked: false },
                { id: 'edit_ticket', label: 'Chỉnh sửa yêu cầu hỗ trợ', code: 'edit_ticket', checked: false },
                { id: 'config_ticket', label: 'Cấu hình Ticket', code: 'config_ticket', checked: false },
            ]
        },
        {
            id: 'payment',
            name: 'Payment',
            checked: false,
            permissions: [
                { id: 'view_recharge', label: 'Xem lịch sử nạp tiền, nhận tiền', code: 'view_recharge', checked: false },
            ]
        },
        {
            id: 'affiliate',
            name: 'Affiliate Program',
            checked: true,
            permissions: [
                { id: 'view_affiliate', label: 'Xem lịch sử hoa hồng', code: 'view_affiliate', checked: true },
                { id: 'view_withdraw_affiliate', label: 'Xem lịch sử rút tiền', code: 'view_withdraw_affiliate', checked: true },
                { id: 'edit_withdraw_affiliate', label: 'Chỉnh sửa lịch sử rút tiền', code: 'edit_withdraw_affiliate', checked: false },
                { id: 'edit_affiliate', label: 'Cấu hình Affiliate', code: 'edit_affiliate', checked: false },
            ]
        },
        {
            id: 'product',
            name: 'Product',
            checked: false,
            permissions: [
                { id: 'view_product', label: 'Xem danh sách chuyên mục, sản phẩm', code: 'view_product', checked: false },
                { id: 'edit_product', label: 'Thêm xóa sửa chuyên mục, sản phẩm', code: 'edit_product', checked: false },
                { id: 'view_orders_product', label: 'Xem lịch sử đơn hàng', code: 'view_orders_product', checked: false },
                { id: 'edit_orders_product', label: 'Chỉnh sửa đơn hàng', code: 'edit_orders_product', checked: false },
                { id: 'refund_orders_product', label: 'Hoàn tiền đơn hàng', code: 'refund_orders_product', checked: false },
                { id: 'view_order_product', label: 'Xem chi tiết đơn hàng', code: 'view_order_product', checked: false },
                { id: 'delete_order_product', label: 'Xóa đơn hàng', code: 'delete_order_product', checked: false },
                { id: 'manager_suppliers', label: 'Thêm, xóa, sửa các nhà cung cấp API', code: 'manager_suppliers', checked: false },
                { id: 'view_suppliers', label: 'Xem nhà cung cấp API trong phần đơn hàng', code: 'view_suppliers', checked: false },
                { id: 'view_rank', label: 'Xem danh sách cấp bậc', code: 'view_rank', checked: false },
                { id: 'edit_rank', label: 'Thêm xóa sửa cấp bậc', code: 'edit_rank', checked: false },
                { id: 'request_api', label: 'Sử dụng API lấy và cập nhật danh sách đơn hàng', code: 'request_api', checked: false },
            ]
        },
        {
            id: 'menu',
            name: 'Menu',
            checked: false,
            permissions: [
                { id: 'view_menu', label: 'Xem danh sách menu', code: 'view_menu', checked: false },
                { id: 'edit_menu', label: 'Thêm xóa sửa menu', code: 'edit_menu', checked: false },
            ]
        },
        {
            id: 'language',
            name: 'Language',
            checked: false,
            permissions: [
                { id: 'view_lang', label: 'Xem danh sách ngôn ngữ', code: 'view_lang', checked: false },
                { id: 'edit_lang', label: 'Thêm xóa sửa ngôn ngữ', code: 'edit_lang', checked: false },
            ]
        },
        {
            id: 'currency',
            name: 'Currency',
            checked: false,
            permissions: [
                { id: 'view_currency', label: 'Xem danh sách tiền tệ', code: 'view_currency', checked: false },
                { id: 'edit_currency', label: 'Thêm xóa sửa tiền tệ', code: 'edit_currency', checked: false },
            ]
        },
        {
            id: 'setting',
            name: 'Setting',
            checked: false,
            permissions: [
                { id: 'edit_theme', label: 'Chỉnh sửa giao diện website', code: 'edit_theme', checked: false },
                { id: 'edit_setting', label: 'Chỉnh sửa thông tin cài đặt website', code: 'edit_setting', checked: false },
            ]
        },
    ]);

    const handleSelectAll = () => {
        const newSelectAll = !selectAll;
        setSelectAll(newSelectAll);

        setPermissionGroups(prev => prev.map(group => ({
            ...group,
            checked: newSelectAll,
            permissions: group.permissions.map(p => ({ ...p, checked: newSelectAll }))
        })));
    };

    const handleGroupToggle = (groupId: string) => {
        setPermissionGroups(prev => prev.map(group => {
            if (group.id === groupId) {
                const newChecked = !group.checked;
                return {
                    ...group,
                    checked: newChecked,
                    permissions: group.permissions.map(p => ({ ...p, checked: newChecked }))
                };
            }
            return group;
        }));
    };

    const handlePermissionToggle = (groupId: string, permissionId: string) => {
        setPermissionGroups(prev => prev.map(group => {
            if (group.id === groupId) {
                const newPermissions = group.permissions.map(p =>
                    p.id === permissionId ? { ...p, checked: !p.checked } : p
                );
                const allChecked = newPermissions.every(p => p.checked);
                return {
                    ...group,
                    permissions: newPermissions,
                    checked: allChecked
                };
            }
            return group;
        }));
    };

    const handleReset = () => {
        setRoleName('');
        setSelectAll(false);
    };

    const handleSave = () => {
        const selectedPermissions = permissionGroups.flatMap(group =>
            group.permissions.filter(p => p.checked).map(p => p.code)
        );
        console.log('Role Name:', roleName);
        console.log('Selected Permissions:', selectedPermissions);
    };

    return (
        <>
            {/* Page Breadcrumb */}
            <AdminSubHeader
                titlePage={titlePage}
                prevTitle={prevTitle}
                urlPrevTitle={urlPrevTitle}
            />

            <div className="p-6 w-full flex flex-col gap-6">
                {/* Role Name Input */}
                <div className="bg-white rounded-md shadow-sm p-6">
                    <label className="block mb-2 text-sm font-medium text-gray-700">
                        Tên vai trò <span className="text-red-500">(*)</span>
                    </label>
                    <input
                        type="text"
                        value={roleName}
                        onChange={(e) => setRoleName(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#846adf] focus:border-transparent"
                        placeholder="Nhập tên vai trò"
                    />
                </div>

                {/* Permissions */}
                <div className="bg-white rounded-lg shadow-sm p-6">
                    {/* Select All Checkbox */}
                    <div className="mb-6 pb-4 border-b border-gray-200">
                        <label className="flex items-center gap-3 cursor-pointer group">
                            <input
                                type="checkbox"
                                checked={selectAll}
                                onChange={handleSelectAll}
                                className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 cursor-pointer"
                            />
                            <span className="text-sm font-medium text-gray-700 group-hover:text-gray-900">
                                Chọn tất cả các quyền
                            </span>
                        </label>
                    </div>

                    {/* Permission Groups */}
                    <div className="space-y-8">
                        {permissionGroups.map((group) => (
                            <div key={group.id} className="space-y-4">
                                {/* Group Header */}
                                <label className="flex items-center gap-3 cursor-pointer group">
                                    <input
                                        type="checkbox"
                                        checked={group.checked}
                                        onChange={() => handleGroupToggle(group.id)}
                                        className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 cursor-pointer"
                                    />
                                    <span className="text-base font-semibold text-gray-900 group-hover:text-gray-700">
                                        {group.name}
                                    </span>
                                </label>

                                {/* Group Permissions */}
                                <div className="ml-7 space-y-3">
                                    {group.permissions.map((permission) => (
                                        <label
                                            key={permission.id}
                                            className="flex items-start gap-3 cursor-pointer group"
                                        >
                                            <input
                                                type="checkbox"
                                                checked={permission.checked}
                                                onChange={() => handlePermissionToggle(group.id, permission.id)}
                                                className="w-4 h-4 mt-0.5 text-purple-600 border-gray-300 rounded focus:ring-purple-500 cursor-pointer"
                                            />
                                            <div className="flex items-center gap-2 flex-1">
                                                <span className="text-sm text-gray-700 group-hover:text-gray-900">
                                                    {permission.label}
                                                </span>
                                                <span className="text-xs font-medium text-purple-600">
                                                    {permission.code}
                                                </span>
                                            </div>
                                        </label>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Action Buttons */}
                <div className="flex items-center justify-end gap-4">
                    <button onClick={() => window.history.back()}
                        className="flex items-center gap-2 px-6 py-2.5 bg-white border border-gray-300 text-gray-700 text-sm font-semibold rounded-md hover:bg-gray-100 transition-colors cursor-pointer">
                        <ArrowLeft className="w-4 h-4" />
                        Quay lại
                    </button>
                    <button
                        className="flex items-center gap-2 px-6 py-2.5 bg-[#846adf] hover:bg-[#7356d1] text-white text-sm font-semibold rounded-md transition-colors cursor-pointer">
                        <Plus className="w-4 h-4" />
                        Thêm mới
                    </button>
                </div>
            </div>
        </>
    );
}

export default AddRoleForm;