"use client"

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { Star } from "lucide-react";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";

export default function Feedback() {
  const feedbacks = [
    {
      name: "Jason Statham",
      role: "Project Manager",
      avatar: "https://randomuser.me/api/portraits/men/11.jpg",
      text: "Quis ipsum suspendisse ultrices gravida. Risus top commodo viverra maecenas accumsan lacus vel facilisis ultrices gravida.",
    },
    {
      name: "Jason Roy",
      role: "Project Manager",
      avatar: "https://randomuser.me/api/portraits/men/12.jpg",
      text: "Quis ipsum suspendisse ultrices gravida. Risus top commodo viverra maecenas accumsan lacus vel facilisis ultrices gravida.",
    },
    {
      name: "Sarah Taylor",
      role: "Web Developer",
      avatar: "https://randomuser.me/api/portraits/women/12.jpg",
      text: "Quis ipsum suspendisse ultrices gravida. Risus top commodo viverra maecenas accumsan lacus vel facilisis ultrices gravida.",
    },
    {
      name: "Emily Clark",
      role: "UI Designer",
      avatar: "https://randomuser.me/api/portraits/women/13.jpg",
      text: "Suspendisse potenti. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
    },
    {
      name: "Michael Lee",
      role: "Marketing Lead",
      avatar: "https://randomuser.me/api/portraits/men/13.jpg",
      text: "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
    },
    {
      name: "Anna Nguyen",
      role: "Content Creator",
      avatar: "https://randomuser.me/api/portraits/women/14.jpg",
      text: "Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Nulla porttitor accumsan tincidunt.",
    },
  ];

  return (
    <section className="pt-28 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-semibold text-center text-gray-700 mb-6">
          User Ratings Are A Confirmation
          <br />
          Of Our Quality
        </h2>
        <p className="text-center text-sm text-gray-600 mb-14 max-w-2xl mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
          suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan
          lacus vel facilisis.
        </p>
        <Swiper
          modules={[Pagination, Autoplay]}
          slidesPerView={3}
          spaceBetween={32}
          loop={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          className="pb-10!"
          breakpoints={{
            0: { slidesPerView: 1 },
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {feedbacks.map((fb, idx) => (
            <SwiperSlide key={idx}>
              <div className="flex flex-col items-center text-center min-w-75">
                <Image
                  src={fb.avatar}
                  alt={fb.name}
                  className="w-16 h-16 rounded-full object-cover mb-4 shadow"
                  width={16}
                  height={16}
                />
                <div className="flex gap-1 mb-7">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={18} color="#FFD600" fill="#FFD600" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 text-sm max-w-xs">{fb.text}</p>
                <div className="font-semibold text-lg text-gray-700">
                  {fb.name}
                </div>
                <div className="text-gray-500 text-xs">{fb.role}</div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
