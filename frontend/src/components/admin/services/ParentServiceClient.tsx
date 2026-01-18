"use client"

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { confirmAction } from "@/lib/alert";

import {
    ChevronDown,
    Edit2,
    Trash2,
    Menu,
    GripVertical,
    ArrowUp10,
    Folder,
    CircleQuestionMark,
    ChevronsUp,
    SquarePen,
    Trash,
    Plus
} from 'lucide-react';

interface SubService {
    id: number;
    name: string;
    services: number;
    enabled: boolean;
}

const ServiceIcons = {
    facebook: () => (
        <div className="w-8 h-8 bg-blue-500 rounded flex items-center justify-center text-white font-bold text-sm animate-pulse">f</div>
    ),
    tiktok: () => (
        <div className="w-8 h-8 bg-black rounded flex items-center justify-center animate-pulse">
            <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
            </svg>
        </div>
    ),
    youtube: () => (
        <div className="w-8 h-8 bg-red-600 rounded flex items-center justify-center animate-pulse">
            <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
            </svg>
        </div>
    ),
    instagram: () => (
        <div className="w-8 h-8 bg-linear-to-tr from-yellow-400 via-pink-500 to-purple-600 rounded flex items-center justify-center animate-pulse">
            <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
        </div>
    ),
    telegram: () => (
        <div className="w-8 h-8 bg-blue-400 rounded flex items-center justify-center animate-pulse">
            <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
            </svg>
        </div>
    ),
    twitter: () => (
        <div className="w-8 h-8 bg-black rounded flex items-center justify-center animate-pulse">
            <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
        </div>
    ),
    threads: () => (
        <div className="w-8 h-8 bg-black rounded flex items-center justify-center animate-pulse">
            <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12.186 24h-.007c-3.581-.024-6.334-1.205-8.184-3.509C2.35 18.44 1.5 15.586 1.472 12.01v-.017c.03-3.579.879-6.43 2.525-8.482C5.845 1.205 8.6.024 12.18 0h.014c2.746.02 5.043.725 6.826 2.098 1.677 1.29 2.858 3.13 3.509 5.467l-2.04.569c-1.104-3.96-3.898-5.984-8.304-6.015-2.91.022-5.11.936-6.54 2.717C4.307 6.504 3.616 8.914 3.589 12c.027 3.086.718 5.496 2.057 7.164 1.43 1.783 3.631 2.698 6.54 2.717 2.623-.02 4.358-.631 5.8-2.045 1.647-1.613 1.618-3.593 1.09-4.798-.31-.71-.873-1.3-1.634-1.75-.192 1.352-.622 2.446-1.284 3.272-.886 1.102-2.14 1.704-3.73 1.79-1.202.065-2.361-.218-3.259-.801-1.063-.689-1.685-1.74-1.752-2.964-.065-1.19.408-2.285 1.33-3.082.88-.76 2.119-1.207 3.583-1.291a13.853 13.853 0 0 1 3.02.142l-.126 1.974a11.9 11.9 0 0 0-2.618-.123c-1.114.061-2.022.382-2.624.925-.557.502-.84 1.171-.796 1.885.037.607.368 1.11.931 1.415.513.279 1.178.397 1.873.33 1.158-.088 2.052-.537 2.663-1.335.49-.64.786-1.541.882-2.684l.011-.11v-.019c-.006-.885-.113-1.645-.337-2.267-.288-.798-.768-1.463-1.429-1.977-.68-.528-1.557-.834-2.607-.911-1.516-.111-2.835.208-3.927.948-1.271.86-1.976 2.168-1.976 3.682 0 .949.251 1.82.746 2.593.473.738 1.146 1.345 2.003 1.806 1.725.927 4.01 1.178 6.76.738l.294 1.96c-3.124.468-5.69.165-7.625-.9-1.05-.577-1.917-1.369-2.578-2.356-.69-1.033-1.04-2.2-1.04-3.471 0-2.024.912-3.789 2.566-4.972 1.381-.988 3.087-1.43 5.07-1.314 1.402.082 2.586.505 3.52 1.258.925.746 1.593 1.77 1.986 3.045.267.867.405 1.855.41 2.934v.02c0 .07-.004.14-.012.21l.002.02c.002.166.004.333.005.5 0 .97-.145 1.77-.434 2.38-.255.542-.623.98-1.096 1.307-.473.327-1.03.49-1.658.49z" />
            </svg>
        </div>
    ),
    google: () => (
        <div className="w-8 h-8 bg-white border border-gray-300 rounded flex items-center justify-center animate-pulse">
            <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
            </svg>
        </div>
    ),
    shopee: () => (
        <div className="w-8 h-8 bg-orange-500 rounded flex items-center justify-center animate-pulse">
            <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.5 8.5c0 2.21-1.79 4-4 4s-4-1.79-4-4 1.79-4 4-4 4 1.79 4 4zm-4 5.5c-3.31 0-6 2.69-6 6v2h12v-2c0-3.31-2.69-6-6-6z" />
            </svg>
        </div>
    ),
    lazada: () => (
        <div className="w-8 h-8 bg-blue-700 rounded flex items-center justify-center text-white font-bold text-sm animate-pulse">
            Laz
        </div>
    )
};

interface Service {
    id: number;
    name: string;
    icon: keyof typeof ServiceIcons;
    packages: number;
    tasks: number;
    enabled: boolean;
    subServices: SubService[];
}

function ParentServiceClient() {
    const [expandedServices, setExpandedServices] = useState<number[]>([]);
    const [activeTab, setActiveTab] = useState<'all' | 'open' | ''>('');
    const [isShowCreateCategoryModal, setIsShowCreateCategoryModal] = useState(false);

    const services: Service[] = [
        {
            id: 1,
            name: 'Dịch vụ Facebook',
            icon: 'facebook',
            packages: 45,
            tasks: 14,
            enabled: true,
            subServices: [
                { id: 1, name: 'Facebook | Like bài viết (Lên nhanh)', services: 12, enabled: true },
                { id: 2, name: 'Facebook | Comment Likes | Tăng likes bình luận', services: 1, enabled: true },
                { id: 3, name: 'Facebook | Live stream | Tăng mắt Live Stream', services: 11, enabled: true },
                { id: 4, name: 'Facebook | Tăng theo dõi (Profile)', services: 10, enabled: true },
                { id: 5, name: 'Facebook | Tăng Like Page / Follow Page', services: 11, enabled: true },
                { id: 6, name: 'Facebook | Tăng Share bài viết', services: 7, enabled: true },
                { id: 7, name: 'Facebook | Tăng Mem Group', services: 7, enabled: true },
                { id: 8, name: 'Facebook | Tăng View Video / Reel', services: 11, enabled: true },
                { id: 9, name: 'Facebook | View Story', services: 1, enabled: true },
                { id: 10, name: 'Facebook | Đánh giá Fanpage 5 sao', services: 5, enabled: true },
                { id: 11, name: 'Facebook | Vip Like theo tháng', services: 8, enabled: true },
                { id: 12, name: 'Facebook | Checkpoint / Mở khóa tài khoản', services: 3, enabled: true }
            ]
        },
        {
            id: 2,
            name: 'Dịch vụ TikTok',
            icon: 'tiktok',
            packages: 24,
            tasks: 8,
            enabled: true,
            subServices: [
                { id: 13, name: 'TikTok | Tăng Follower (Bao tụt)', services: 6, enabled: true },
                { id: 14, name: 'TikTok | Tăng Tim (Like) bài viết', services: 8, enabled: true },
                { id: 15, name: 'TikTok | Tăng View Video (Cực nhanh)', services: 4, enabled: true },
                { id: 16, name: 'TikTok | Tăng Comment nội dung tùy chỉnh', services: 3, enabled: true },
                { id: 17, name: 'TikTok | Tăng Share bài viết', services: 2, enabled: true },
                { id: 18, name: 'TikTok | Tăng Mắt Livestream', services: 5, enabled: true },
                { id: 19, name: 'TikTok | Tăng Save (Lưu bài viết)', services: 2, enabled: true }
            ]
        },
        {
            id: 3,
            name: 'Dịch vụ Youtube',
            icon: 'youtube',
            packages: 56,
            tasks: 7,
            enabled: true,
            subServices: [
                { id: 20, name: 'Youtube | Tăng Subscribe (Đăng ký channel)', services: 15, enabled: true },
                { id: 21, name: 'Youtube | Tăng View (Video thường)', services: 20, enabled: true },
                { id: 22, name: 'Youtube | Tăng View Shorts', services: 10, enabled: true },
                { id: 23, name: 'Youtube | Tăng Like Video', services: 5, enabled: true },
                { id: 24, name: 'Youtube | Tăng Giờ xem (4000h kiếm tiền)', services: 3, enabled: true },
                { id: 25, name: 'Youtube | Tăng Mắt Livestream', services: 3, enabled: true }
            ]
        },
        {
            id: 4,
            name: 'Dịch vụ Instagram',
            icon: 'instagram',
            packages: 15,
            tasks: 6,
            enabled: true,
            subServices: [
                { id: 26, name: 'Instagram | Tăng Follower (Global/Việt)', services: 5, enabled: true },
                { id: 27, name: 'Instagram | Tăng Like bài viết', services: 4, enabled: true },
                { id: 28, name: 'Instagram | Tăng View Video / Reels', services: 3, enabled: true },
                { id: 29, name: 'Instagram | Tăng Comment', services: 2, enabled: true },
                { id: 30, name: 'Instagram | Tăng View Story', services: 1, enabled: true }
            ]
        },
        {
            id: 5,
            name: 'Dịch vụ Telegram',
            icon: 'telegram',
            packages: 6,
            tasks: 5,
            enabled: false,
            subServices: [
                { id: 31, name: 'Telegram | Tăng Mem Channel/Group', services: 3, enabled: true },
                { id: 32, name: 'Telegram | Tăng View Post (5-10-20 posts)', services: 2, enabled: true },
                { id: 33, name: 'Telegram | Tăng Reaction (Cảm xúc biểu tượng)', services: 1, enabled: true }
            ]
        },
        {
            id: 6,
            name: 'Dịch vụ Twitter (X)',
            icon: 'twitter',
            packages: 9,
            tasks: 4,
            enabled: false,
            subServices: [
                { id: 34, name: 'Twitter | Tăng Follower', services: 4, enabled: true },
                { id: 35, name: 'Twitter | Tăng Like (Favorite)', services: 2, enabled: true },
                { id: 36, name: 'Twitter | Tăng Retweet (Chia sẻ)', services: 2, enabled: true },
                { id: 37, name: 'Twitter | Tăng View Video', services: 1, enabled: true }
            ]
        },
        {
            id: 7,
            name: 'Dịch vụ Threads',
            icon: 'threads',
            packages: 3,
            tasks: 3,
            enabled: true,
            subServices: [
                { id: 38, name: 'Threads | Tăng Follower', services: 1, enabled: true },
                { id: 39, name: 'Threads | Tăng Like', services: 1, enabled: true },
                { id: 40, name: 'Threads | Tăng Repost / Quotes', services: 1, enabled: true }
            ]
        },
        {
            id: 8,
            name: 'Dịch vụ Google',
            icon: 'google',
            packages: 5,
            tasks: 2,
            enabled: false,
            subServices: [
                { id: 41, name: 'Google | Đánh giá Maps (Local SEO)', services: 3, enabled: true },
                { id: 42, name: 'Google | Tăng Search (Entity)', services: 2, enabled: true }
            ]
        },
        {
            id: 9,
            name: 'Dịch vụ Shopee',
            icon: 'shopee',
            packages: 4,
            tasks: 1,
            enabled: false,
            subServices: [
                { id: 43, name: 'Shopee | Tăng Follower Shop', services: 2, enabled: true },
                { id: 44, name: 'Shopee | Tăng Like sản phẩm', services: 2, enabled: true }
            ]
        },
        {
            id: 10,
            name: 'Dịch vụ Lazada',
            icon: 'lazada',
            packages: 1,
            tasks: 1,
            enabled: true,
            subServices: [
                { id: 45, name: 'Lazada | Tăng Follower Shop', services: 1, enabled: true }
            ]
        }
    ];

    const [servicesData, setServicesData] = useState<Service[]>(services);

    const [visibleCount, setVisibleCount] = useState(0);
    const isLoading = visibleCount < services.length;

    useEffect(() => {
        if (visibleCount < services.length) {
            const timer = setTimeout(() => {
                setVisibleCount(prev => prev + 1);
            }, 300);

            return () => clearTimeout(timer);
        }
    }, [visibleCount, services.length]);

    const visibleServices = services.slice(0, visibleCount);

    const toggleService = (serviceId: number) => {
        setExpandedServices(prev =>
            prev.includes(serviceId)
                ? prev.filter(id => id !== serviceId)
                : [...prev, serviceId]
        );
    };

    const openAll = () => {
        const allIds = services.map(s => s.id);

        setExpandedServices(allIds);
        setActiveTab('open');
    };

    const closeAll = () => {
        setExpandedServices([]);
        setActiveTab('all');
    };

    const IconComponent: React.FC<{ iconName: keyof typeof ServiceIcons }> = ({ iconName }) => {
        const Icon = ServiceIcons[iconName];
        return Icon ? <Icon /> : null;
    };

    const handleToggleSubService = (serviceId: number, subIdx: number) => {
        setServicesData(prevServices => {
            return prevServices.map(service => {
                if (service.id === serviceId) {
                    const newSubServices = [...service.subServices];
                    newSubServices[subIdx] = {
                        ...newSubServices[subIdx],
                        enabled: !newSubServices[subIdx].enabled
                    };
                    return {
                        ...service,
                        subServices: newSubServices
                    };
                }

                return service;
            });
        });
    };

    const customStyles = {
        container: 'border-radius: 12px; padding: 1.5rem;',
        title: 'font-size: 1.25rem; font-weight: 600; color: #1f2937; margin-bottom: 0.5rem;',
        text: 'font-size: 0.95rem; color: #4b5563; line-height: 1.5;',
        warningBox: 'margin-top: 1rem; padding: 0.75rem; border-radius: 8px; font-size: 0.875rem; display: flex; align-items: start; gap: 8px;'
    };

    const showDeleteParentServiceWarningAlert = async (id: number) => {
        const result = await confirmAction({
            title: '<span style="' + customStyles.title + '">Cảnh báo</span>',
            html: `
            <div style="${customStyles.text}">
                Bạn có chắc chắn muốn xóa chuyên mục cha ID ${id} này không?
            </div>
            <div style="${customStyles.warningBox} background-color: #fef2f2; color: #991b1b; border: 1px solid #fee2e2;">
                <span>⚠️</span>
                <span>Hành động này mang tính vĩnh viễn và không thể hoàn tác.</span>
            </div>
        `,
        });

        if (result.isConfirmed) console.log("Resetting deposits...");
    };

    const showDeleteChildServiceWarningAlert = async (id: number) => {
        const result = await confirmAction({
            title: '<span style="' + customStyles.title + '">Cảnh báo</span>',
            html: `
            <div style="${customStyles.text}">
                Bạn có chắc chắn muốn xóa chuyên mục con ID ${id} này không?
            </div>
            <div style="${customStyles.warningBox} background-color: #fef2f2; color: #991b1b; border: 1px solid #fee2e2;">
                <span>⚠️</span>
                <span>Hành động này mang tính vĩnh viễn và không thể hoàn tác.</span>
            </div>
        `,
        });

        if (result.isConfirmed) console.log("Resetting deposits...");
    };

    return (
        <div className="p-6">
            {/* Main Content */}
            <div className="bg-white px-6 py-4 rounded-md">
                {/* Action Buttons */}
                <div className="flex items-center justify-between mb-6">
                    {/* Close & Open Button */}
                    <div className='flex items-center gap-3'>
                        <button
                            className={`flex items-center px-2 py-1 rounded-sm border font-medium transition-colors duration-500 cursor-pointer hover:text-white hover:bg-cyan-500
                                ${activeTab === 'all'
                                    ? 'border-cyan-300 text-cyan-500 bg-cyan-50'
                                    : 'border-cyan-400 text-cyan-500 bg-white hover:text-white hover:bg-cyan-500'
                                }`}
                            onClick={closeAll}
                        >
                            <ChevronsUp className='w-4 h-4' />
                            <span className='text-xs font-bold ml-1'>
                                Đóng tất cả
                            </span>
                        </button>
                        <button
                            className={`flex items-center gap-2 px-2 py-1 rounded-sm border text-sm font-medium transition-colors duration-500 cursor-pointer hover:bg-[#846adf] hover:text-white
                                ${activeTab === 'open'
                                    ? 'border-[#846adf] text-[#846adf] bg-purple-50'
                                    : 'border-[#846adf] text-[#846adf] bg-white hover:text-white hover:bg-[#846adf]'
                                }`}
                            onClick={openAll}
                        >
                            <Menu className='w-3 h-3' />
                            <span className="mr-1 text-xs font-bold">
                                Mở tất cả
                            </span>
                        </button>
                    </div>

                    {/* Create Button */}
                    <Link
                        href="/admin/services/parents/add"
                        onClick={() => setIsShowCreateCategoryModal(!isShowCreateCategoryModal)}
                        className="flex items-center gap-2 px-2 py-1.5 rounded-sm border text-sm font-medium transition-opacity duration-300 cursor-pointer bg-[#846adf]! text-white! hover:opacity-90"
                    >
                        <Plus className='w-3 h-3' />
                        <span className="mr-1 text-xs font-bold">
                            Thêm chuyên mục cha
                        </span>
                    </Link>
                </div>

                {/* Services List */}
                <div className="space-y-2.5">
                    {visibleServices.map((service) => (
                        <div
                            key={service.id}
                            className="bg-gray-50 rounded-md shadow-sm border border-gray-200"
                        >
                            {/* Service Header */}
                            <div
                                className="flex items-center gap-3 p-3.5 hover:bg-gray-100 transition-colors cursor-pointer"
                                onClick={() => toggleService(service.id)}
                            >
                                {/* Left Side - Icon & Title Service */}
                                <div className="cursor-move text-gray-600" onClick={(e) => e.stopPropagation()}>
                                    <GripVertical className="w-5 h-5" />
                                </div>
                                <IconComponent iconName={service.icon} />
                                <div className="flex-1">
                                    <h3 className="font-bold text-gray-800">
                                        {service.name}
                                    </h3>
                                </div>

                                {/* Right Side - Actions Service */}
                                <div className="flex items-center gap-3" onClick={(e) => e.stopPropagation()}>
                                    {/* Package Quantity */}
                                    <div className="bg-[#846adf] text-white px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                                        <span className="text-xs">
                                            <Folder className='w-3.5 h-3.5 text-white' />
                                        </span>
                                        <span className='text-xs font-bold'>
                                            {service.packages}
                                        </span>
                                    </div>

                                    {/* Tasks */}
                                    <div className="bg-[#49b6f5] text-white px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                                        <span className="text-xs">
                                            <ArrowUp10 className='w-3.5 h-3.5' />
                                        </span>
                                        <span className='text-xs font-bold'>
                                            {service.tasks}
                                        </span>
                                    </div>

                                    {/* Active Service */}
                                    <label className="relative inline-flex items-center cursor-pointer">
                                        <input
                                            type="checkbox"
                                            className="sr-only peer"
                                            checked={service.enabled}
                                            onChange={() => { }}
                                        />
                                        <div className={`w-11 h-6 rounded-full peer transition-colors ${service.enabled ? 'bg-[#846adf]' : 'bg-gray-300'
                                            }`}>
                                            <div className={`absolute top-0.5 left-0.5 bg-white w-5 h-5 rounded-full transition-transform ${service.enabled ? 'translate-x-5' : ''
                                                }`}></div>
                                        </div>
                                    </label>

                                    <button
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            toggleService(service.id);
                                        }}
                                        className="p-1 hover:bg-gray-200 rounded transition-colors"
                                    >
                                        <ChevronDown
                                            className={`w-5 h-5 text-gray-600 transition-transform ${expandedServices.includes(service.id) ? 'rotate-180' : ''
                                                }`}
                                        />
                                    </button>
                                </div>
                            </div>

                            {/* Expanded Sub-services */}
                            {expandedServices.includes(service.id) && service.subServices.length > 0 && (
                                <div className="border-t border-gray-200 p-4 bg-white">
                                    {/* Sub-services actions */}
                                    <div className="flex items-center justify-between gap-2 mb-4 mt-2">
                                        {/* Add Button */}
                                        <Link
                                            href="/admin/services/children/add"
                                            className="flex items-center justify-center gap-1 w-full px-2 py-1 bg-white border border-[#846adf] text-[#846adf] rounded-sm text-xs! font-medium hover:bg-[#846adf]! hover:text-white! transition-colors cursor-pointer duration-600">
                                            <Plus className='w-3.5 h-3.5' />
                                            Thêm chuyên mục con
                                        </Link>

                                        {/* List Button */}
                                        <Link
                                            className="flex items-center justify-center gap-1 w-full px-2 py-1 bg-white border text-[#26BF94] rounded text-xs! font-medium border-[#26BF94] transition-colors cursor-pointer hover:bg-[#26BF94]! hover:text-white! duration-600"
                                            href="/admin/services/children"
                                        >
                                            <Menu className='w-3.5 h-3.5' />
                                            DANH SÁCH CHUYÊN MỤC CON
                                        </Link>

                                        {/* Category Edit Button */}
                                        <Link
                                            href={`/admin/services/parents/edit/${service.id}`}
                                            className="flex items-center justify-center gap-1 w-full px-2 py-1 bg-white border text-[#49B6F5] rounded text-xs! font-medium border-[#49B6F5] transition-colors cursor-pointer hover:bg-[#49B6F5]! hover:text-white! duration-600"
                                        >
                                            <SquarePen className='w-3.5 h-3.5' />
                                            Sửa
                                        </Link>

                                        {/* Delete button */}
                                        <button
                                            onClick={() => showDeleteParentServiceWarningAlert(service.id)}
                                            className="flex items-center justify-center gap-1 w-full px-2 py-1 bg-white border text-red-600 rounded text-xs! font-medium border-red-600 transition-colors cursor-pointer hover:bg-red-600! hover:text-white! duration-600"
                                        >
                                            <Trash className='w-3.5 h-3.5' />
                                            Xóa
                                        </button>
                                    </div>

                                    {/* Sub-services list */}
                                    <div className="bg-white rounded-sm overflow-hidden border border-gray-200">
                                        <table className="w-full">
                                            <thead className="bg-gray-100 border-b border-gray-200">
                                                <tr>
                                                    <th className="px-4 py-3 text-left text-sm font-bold text-black">
                                                        Chuyên mục con
                                                    </th>
                                                    <th className="px-4 py-3 text-center text-sm font-bold text-black">
                                                        Ảnh
                                                    </th>
                                                    <th className="px-4 py-3 text-center text-sm font-bold text-black">
                                                        Dịch vụ
                                                    </th>
                                                    <th className="px-4 py-3 text-center text-sm font-bold text-black">
                                                        Trạng thái
                                                    </th>
                                                    <th className="px-4 py-3 text-center text-sm font-bold text-black">
                                                        Thao tác
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {service.subServices.map((sub, idx) => (
                                                    <tr key={idx} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                                                        <td className="px-4 py-3">
                                                            <div className="flex items-center gap-2">
                                                                <GripVertical className="w-4 h-4 text-gray-400 cursor-move" />
                                                                <span className="text-[13px] text-gray-700 font-bold">
                                                                    {sub.name}
                                                                </span>
                                                            </div>
                                                        </td>
                                                        <td className="px-4 py-3 text-center"></td>
                                                        <td className="px-4 py-3 text-center">
                                                            <span className="inline-flex items-center justify-center w-5 h-5 bg-[#846adf] text-white rounded-full text-[10px] font-semibold">
                                                                {sub.services}
                                                            </span>
                                                        </td>
                                                        <td className="px-4 py-3 text-center">
                                                            <button
                                                                onClick={() => handleToggleSubService(service.id, idx)}
                                                                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-200 ease-in-out focus:outline-none cursor-pointer ${sub.enabled ? 'bg-[#846adf]' : 'bg-gray-300'
                                                                    }`}
                                                            >
                                                                <span
                                                                    className={`inline-block h-5 w-5 transform rounded-full bg-white transition-transform duration-200 ease-in-out ${sub.enabled ? 'translate-x-5' : 'translate-x-0.5'
                                                                        }`}
                                                                />
                                                            </button>
                                                        </td>
                                                        <td className="px-4 py-3">
                                                            <div className="flex items-center justify-center gap-2">
                                                                <Link
                                                                    href="/admin/services/packages"
                                                                    className="p-2 bg-[#846adf]! hover:opacity-90 text-white! rounded transition-colors cursor-pointer"
                                                                >
                                                                    <Menu className="w-4 h-4" />
                                                                </Link>
                                                                <Link
                                                                    href={`/admin/services/children/edit/${sub.id}`}
                                                                    className="p-2 bg-[#49b6f5]! hover:bg-cyan-600 text-white! rounded transition-colors cursor-pointer"
                                                                >
                                                                    <Edit2 className="w-4 h-4" />
                                                                </Link>
                                                                <button
                                                                    onClick={() => showDeleteChildServiceWarningAlert(sub.id)}
                                                                    className="p-2 bg-[#E6533C] hover:bg-red-600 text-white rounded transition-colors cursor-pointer"
                                                                >
                                                                    <Trash2 className="w-4 h-4" />
                                                                </button>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}

                    {isLoading && visibleCount < services.length && (
                        <div className="bg-gray-100 rounded-md shadow-sm border border-gray-200 p-3.5 animate-pulse">
                            <div className="flex items-center gap-3">
                                <div className="w-5 h-5 bg-gray-300 rounded"></div>
                                <div className="w-8 h-8 bg-gray-300 rounded"></div>
                                <div className="flex-1">
                                    <div className="h-5 bg-gray-300 rounded w-1/3"></div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                {/* Info Footer */}
                <div className="mt-6 flex items-center gap-2 bg-blue-50 border border-blue-200 rounded-md px-4 py-3">
                    <CircleQuestionMark className='w-3.5 h-3.5 text-cyan-500 mt-0.5' />
                    <p className="text-xs text-cyan-600 font-medium">
                        Bạn có thể kéo thả các chuyên mục cha để sắp xếp thứ tự. Nhấp vào biểu tượng kế và thả để dời vị trí.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default ParentServiceClient