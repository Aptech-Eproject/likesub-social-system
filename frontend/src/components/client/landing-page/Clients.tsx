import Image from "next/image";

export default function Clients() {
  const socialIcons = [
    {
      name: "Facebook",
      src: "/images/facebook.png",
    },
    {
      name: "TikTok",
      src: "/images/tiktok.png",
    },
    {
      name: "Telegram",
      src: "/images/telegram.png",
    },
    {
      name: "Instagram",
      src: "/images/instagram.png",
    },
    {
      name: "YouTube",
      src: "/images/youtube.png",
    },
    {
      name: "X",
      src: "/images/twitter.png",
    },
  ];

  return (
    <section className="py-42 px-4 bg-blue-50">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-start">
        {/* Left: Content */}
        <div>
          <h2 className="text-3xl w-5/6 font-semibold text-gray-700 mb-4 leading-10">
            Cung cấp dịch vụ trên tất cả các mạng xã hội
          </h2>
          <p className="text-gray-600 text-sm! font-medium mb-8 leading-relaxed">
            Bảng điều khiển dịch vụ SMM tốt nhất và rẻ nhất trực tuyến cho
            TikTok, Instagram, YouTube, Facebook, Spotify, Telegram, Twitch,
            Twitter, Lưu lượng truy cập trang web, LinkedIn, Discord và
            SoundCloud từ Nhà cung cấp smmpanel-v3.baocms.net SMM.
          </p>
          <button className="bg-linear-to-r from-cyan-400 to-green-300 text-white font-semibold px-14 py-2 rounded shadow hover:from-cyan-500 hover:to-green-400 transition">
            View More
          </button>
        </div>

        {/* Right: Social Icons */}
        <div className="grid grid-cols-3 gap-8 justify-center">
          {socialIcons.map((icon) => (
            <div
              key={icon.name}
              className="bg-white rounded-xl flex items-center justify-center p-8 shadow-md animate-bounce hover:ring-4 hover:ring-cyan-400 hover:ring-opacity-50 transition-all duration-200"
            >
              <Image
                src={icon.src}
                alt={icon.name}
                className="object-contain"
                width={60}
                height={60}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
