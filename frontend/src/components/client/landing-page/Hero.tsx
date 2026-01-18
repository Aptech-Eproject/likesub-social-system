import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="mt-16 pt-20 pb-16 bg-white">
      <div className="flex flex-col md:flex-row items-center max-w-7xl mx-auto px-6 gap-12">
        {/* Left: Content */}
        <div className="md:w-1/2 w-full">
          <div>
            <span className="text-gray-600 font-medium text-base mb-2 block">
              Social Media Script
            </span>
            <h1 className="text-5xl font-semibold text-gray-700 mb-6 leading-tight">
              <span className="block">Bảng điều khiển truyền</span>
              <span className="block">thông xã hội tốt nhất</span>
              <span className="block">trên thế giới!</span>
            </h1>
            <p className="text-xs text-gray-500 font-semibold mb-8 leading-relaxed">
              Quản lý tất cả các mạng truyền thông xã hội từ một bảng điều khiển
              duy nhất, chất lượng và giá rẻ. Chúng tôi cung cấp dịch vụ trên
              các mạng xã hội phổ biến nhất hiện nay. Chúng tôi có Instagram,
              Twitter, Facebook, Youtube, TikTok, Spotify và nhiều dịch vụ khác.
            </p>
            <Link
              href="/login"
              className="inline-block bg-linear-to-r from-cyan-400 to-green-300 text-white font-bold px-10 py-2 rounded shadow transition-colors duration-600 hover:from-black hover:to-black"
            >
              Bắt đầu ngay
            </Link>
          </div>
        </div>
        {/* Right: Image */}
        <div className="md:w-1/2 w-full flex justify-center">
          <Image
            src="/images/who-we-are.png"
            alt="image"
            className="w-full max-w-xl h-auto object-contain drop-shadow-xl animate-float"
            height={300}
            width={300}
          />
        </div>
      </div>
    </section>
  );
}
