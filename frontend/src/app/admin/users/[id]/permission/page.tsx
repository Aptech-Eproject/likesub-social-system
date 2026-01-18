import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue
} from "@/components/common/ui/select";
import { Save } from "lucide-react";

function PermissionUser() {
    return (
        <div className="flex flex-col gap-4">
            {/* row 2 */}
            <div className="flex items-center gap-8">
                {/* Admin Role */}
                <div className="flex flex-col gap-2">
                    <label htmlFor="" className="text-slate-800 font-bold text-[13px]">
                        Admin Role{" "}
                        <span className="text-red-500 font-bold">
                            *
                        </span>
                    </label>
                    <Select>
                        <SelectTrigger className="border border-gray-300 rounded-sm shadow-none py-1.5 px-4 w-80 text-[13px]!">
                            <SelectValue placeholder="User (Khách hàng)" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                <SelectLabel>
                                    Admin Role
                                </SelectLabel>
                                <SelectItem value="Apple">User (Khách hàng)</SelectItem>
                                <SelectItem value="IOS">Super Admin (Admin Role)</SelectItem>
                                <SelectItem value="IOS">Sales (Admin Role)</SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                </div>

                {/* Account Status */}
                <div className="grid w-full items-center gap-2">
                    <label htmlFor="" className="text-slate-800 font-bold text-[13px]">
                        Trạng thái tài khoản{" "}
                        <span className="text-red-500 font-bold">
                            *
                        </span>
                    </label>
                    <Select>
                        <SelectTrigger className="border border-gray-300 rounded-sm shadow-none py-1.5 px-4 w-80 text-[13px]!">
                            <SelectValue placeholder="Hoạt động (Active)" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                <SelectLabel>
                                    Trạng thái tài khoản
                                </SelectLabel>
                                <SelectItem value="Apple">Hoạt động (Active)</SelectItem>
                                <SelectItem value="IOS">Bị cấm (Banned)</SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                </div>
            </div>

            {/* Save button */}
            <div className="flex w-full items-center justify-end mt-8 py-6 border-t border-gray-100">
                <button className="px-4 py-2 bg-[#845ADF] text-white rounded-sm text-sm! flex items-center gap-2 cursor-pointer">
                    <Save className="w-3 h-3" />
                    Lưu thay đổi
                </button>
            </div>
        </div>
    )
}

export default PermissionUser