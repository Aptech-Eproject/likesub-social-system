import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full bg-white/95 backdrop-blur z-50 border-b border-gray-100 shadow-sm">
      <div className="container mx-auto py-5 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Image
            src="/images/logo.png"
            alt="LIKESUB-VIP"
            className="h-9 w-auto"
            width={200}
            height={50}
          />
        </div>
        {/* Menu + Actions */}
        <div className="flex items-center gap-4 font-medium text-sm">
          <nav className="hidden md:flex items-center gap-4">
            <Link
              href="/"
              className="relative text-black font-bold transition px-1 group"
            >
              <span>TRANG CHỦ</span>
              <span className="pointer-events-none absolute left-0 -bottom-0.5 w-0 h-px bg-black rounded transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              href="/faq"
              className="relative text-black font-bold transition px-1 group"
            >
              <span>FAQS</span>
              <span className="pointer-events-none absolute left-0 -bottom-0.5 w-0 h-px bg-black rounded transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              href="#features"
              className="relative text-black font-bold transition px-1 group"
            >
              <span>TÀI LIỆU API</span>
              <span className="pointer-events-none absolute left-0 -bottom-0.5 w-0 h-px bg-black rounded transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              href="#benefits"
              className="relative text-black font-bold transition px-1 group"
            >
              <span>ĐIỀU KHOẢN SỬ DỤNG</span>
              <span className="pointer-events-none absolute left-0 -bottom-0.5 w-0 h-px bg-black rounded transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </nav>
          <Link href="/home" className="bg-linear-to-r from-cyan-400 to-green-300 hover:from-cyan-500 hover:to-green-400 text-black px-4 py-2 rounded-full font-semibold shadow transition text-xs">
            SỬ DỤNG NGAY
          </Link>
        </div>
      </div>
    </header>
  );
}
