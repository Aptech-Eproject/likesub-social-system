"use client"

import Link from 'next/link';

import {
    UserSearch
} from 'lucide-react';
import { confirmAction } from '@/lib/alert';

function TicketDetailActions({ id }: { id: string }) {
    const customStyles = {
        container: 'border-radius: 12px; padding: 1.5rem;',
        title: 'font-size: 1.25rem; font-weight: 600; color: #1f2937; margin-bottom: 0.5rem;',
        text: 'font-size: 0.95rem; color: #4b5563; line-height: 1.5;',
        warningBox: 'margin-top: 1rem; padding: 0.75rem; border-radius: 8px; font-size: 0.875rem; display: flex; align-items: start; gap: 8px;'
    };

    const showMarkAsAnswerAlert = async () => {
        const result = await confirmAction({
            title: '<span style="' + customStyles.title + '">Xác nhận thay đổi',
            html: `
                <div style="${customStyles.text}">
                    Bạn có chắc chắn muốn đánh dấu ticket này là <span style="font-weight: 600; color: #111827;">Đã trả lời?</span>
                </div>
            `,
        });

        if (result.isConfirmed) console.log("Resetting deposits...");
    };

    return (
        <div className='w-full flex flex-col gap-4'>
            {/* Mark as Answered Button */}
            <button
                onClick={showMarkAsAnswerAlert}
                className="flex items-center justify-center gap-2
                                            bg-white py-3.5 text-center
                                            border-2 border-gray-200 rounded-sm
                                            transition-all duration-300
                                            hover:ring-2 hover:ring-blue-600 hover:ring-offset-2 hover:border-0 cursor-pointer"
            >
                <UserSearch className='w-4 h-4 text-gray-800' />
                <span className='text-[13px] font-bold'>
                    Đánh dấu trả lời
                </span>
            </button>

            {/* Account Button */}
            <Link
                href={`/admin/users/${id}/info`}
                className="flex items-center justify-center gap-2
                        bg-white py-3.5 text-center
                        border-2 border-gray-200 rounded-sm
                        transition-all duration-300
                        hover:ring-2 hover:ring-blue-600 hover:ring-offset-2 hover:border-0 cursor-pointer"
            >
                <UserSearch className='w-4 h-4 text-gray-800' />
                <span className='text-[13px] font-bold'>
                    Quản lý tài khoản
                </span>
            </Link>

            {/* Tickets Button */}
            <Link
                href="/admin/tickets"
                className="flex items-center justify-center gap-2
                        bg-white py-3.5 text-center
                        border-2 border-gray-200 rounded-sm
                        transition-all duration-300
                        hover:ring-2 hover:ring-blue-600 hover:ring-offset-2 hover:border-0 cursor-pointer"
            >
                <UserSearch className='w-4 h-4 text-gray-800' />
                <span className='text-[13px] font-bold'>
                    Tất cả Tickets
                </span>
            </Link>
        </div>
    )
}

export default TicketDetailActions