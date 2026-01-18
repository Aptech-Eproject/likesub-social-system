"use client"

import Link from "next/link";
import { useState } from "react";

import {
    Headset,
    Minus,
    MoveLeft,
    Plus,
} from "lucide-react";

import AddMoneyFormModal from "./AddMoneyFormModal";
import MinusMoneyFormModal from "./MinusMoneyFormModal";
import CreateTicketForm from "./CreateTicketForm";

function UserDetailActions() {
    const [isShowAddButton, setIsShowAddButton] = useState(false);
    const [isShowMinusButton, setIsShowMinusButton] = useState(false);
    const [isShowTicketsButton, setIsShowTicketsButton] = useState(false);

    return (
        <>
            {/* Show Modal */}
            {isShowAddButton &&
                <AddMoneyFormModal
                    setIsShowAddButton={setIsShowAddButton}
                />
            }

            {isShowMinusButton &&
                <MinusMoneyFormModal
                    setIsShowMinusButton={setIsShowMinusButton}
                />
            }

            {isShowTicketsButton &&
                <CreateTicketForm
                    setIsShowTicketsButton={setIsShowTicketsButton}
                />
            }

            <div className="flex flex-col items-end justify-center gap-4">
                {/* Back to Users Button */}
                <Link
                    href={"/admin/users"}
                    className="flex items-center gap-2 cursor-pointer px-4 py-2.5 border border-gray-300 rounded-sm hover:bg-[#0f172a]! hover:text-white transition-all duration-400"
                >
                    <MoveLeft className="w-4 h-4" />
                    <span className="text-xs">
                        Quay lại
                    </span>
                </Link>

                {/* Actions */}
                <div className="flex items-center gap-2">
                    {/* Add Button */}
                    <button
                        className="flex items-center gap-2 cursor-pointer text-white px-4 py-2.5 bg-[#26BF94] hover:opacity-80 transition-opacity duration-300 rounded-sm"
                        onClick={() => setIsShowAddButton(!isShowAddButton)}
                    >
                        <Plus className="w-4 h-4 text-white" />
                        <span className="text-xs text-white font-bold">
                            Cộng tiền
                        </span>
                    </button>

                    {/* Minus Button */}
                    <button
                        className="flex items-center gap-2 cursor-pointer text-white px-4 py-2.5 bg-orange-600 hover:opacity-80 transition-opacity duration-300 rounded-sm"
                        onClick={() => setIsShowMinusButton(!isShowMinusButton)}
                    >
                        <Minus className="w-4 h-4 text-white" />
                        <span className="text-xs text-white font-bold">
                            Trừ tiền
                        </span>
                    </button>

                    {/* Create Ticket Button */}
                    <button
                        className="flex items-center gap-2 cursor-pointer text-white px-4 py-2.5 bg-blue-400 hover:opacity-80 transition-opacity duration-300 rounded-sm"
                        onClick={() => setIsShowTicketsButton(!isShowTicketsButton)}
                    >
                        <Headset className="w-4 h-4 text-white" />
                        <span className="text-xs text-white font-bold">
                            Tạo ticket
                        </span>
                    </button>
                </div>
            </div>
        </>
    )
}

export default UserDetailActions