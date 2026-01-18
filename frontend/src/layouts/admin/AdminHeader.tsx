import AdminDropdown from "@/components/admin/AdminDropdown"
import NotificationDropdown from "@/components/admin/NotificationDropdown"
import ThemeToggleButton from "@/components/admin/ThemeToggleButton"

function AdminHeader() {
    return (
        <header className="sticky top-0 right-0 flex w-full h-20 bg-white z-50 lg:border-b border-gray-200">
            <div className="flex flex-col items-center justify-between grow lg:flex-row lg:px-6">
                {/* Left Side */}
                <div className="flex items-center justify-between w-full gap-2 lg:justify-start lg:border-b-0 sm:gap-6">
                    {/* Toggle Button */}
                    <button
                        className="p-3 rounded-lg border bg-transparent hover:bg-slate-50 cursor-pointer hover:scale-105 duration-200"
                    >
                        <svg
                            width="20"
                            height="16"
                            viewBox="0 0 16 12"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M0.583252 1C0.583252 0.585788 0.919038 0.25 1.33325 0.25H14.6666C15.0808 0.25 15.4166 0.585786 15.4166 1C15.4166 1.41421 15.0808 1.75 14.6666 1.75L1.33325 1.75C0.919038 1.75 0.583252 1.41422 0.583252 1ZM0.583252 11C0.583252 10.5858 0.919038 10.25 1.33325 10.25L14.6666 10.25C15.0808 10.25 15.4166 10.5858 15.4166 11C15.4166 11.4142 15.0808 11.75 14.6666 11.75L1.33325 11.75C0.919038 11.75 0.583252 11.4142 0.583252 11ZM1.33325 5.25C0.919038 5.25 0.583252 5.58579 0.583252 6C0.583252 6.41421 0.919038 6.75 1.33325 6.75L7.99992 6.75C8.41413 6.75 8.74992 6.41421 8.74992 6C8.74992 5.58579 8.41413 5.25 7.99992 5.25L1.33325 5.25Z"
                                fill="currentColor"
                            />
                        </svg>
                    </button>

                    {/* Title Page & Greeting message */}
                    <div className="hidden md:block">
                        <h1 className="text-2xl! font-bold text-slate-800 m-0!">
                            Quản trị hệ thống
                        </h1>
                        <p className="text-sm text-slate-600">
                            Chào mừng trở lại! Cùng xem sự kiện diễn ra hôm nay.
                        </p>
                    </div>
                </div>

                {/* Right Side */}
                <div className="flex items-center justify-end w-full px-5 py-4 gap-6">
                    {/* Buttons */}
                    <div className="flex items-center gap-3">
                        {/* Dark Mode Toggle */}
                        <ThemeToggleButton />

                        {/* Notification Toggle */}
                        <NotificationDropdown />
                    </div>

                    {/* User Info */}
                    <AdminDropdown />
                </div>
            </div>
        </header>
    )
}

export default AdminHeader