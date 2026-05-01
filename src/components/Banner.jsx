"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import { useRouter } from "next/navigation";
import Image from "next/image";
import heroImage1 from "@/assets/heroImage1.jpg";
import heroImage2 from "@/assets/heroImage2.jpg";
import heroImage3 from "@/assets/heroImage4.png";
import heroImage4 from "@/assets/heroImage5.png";
import heroImage5 from '@/assets/heroImage6.png';
import heroImage6 from '@/assets/heroImage7.png';
import heroImage7 from '@/assets/heroImage10.jpg';
import heroImage8 from '@/assets/heroImage11.jpg';
export default function Banner() {
  const router = useRouter();

  const images = [
    heroImage2,heroImage3,heroImage4,heroImage5,heroImage6,heroImage7,heroImage8,heroImage1
  ];

  return (
    <div className="relative w-full h-125">
      <Swiper
        modules={[Autoplay,Pagination]}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        speed={4000}
        loop={true}
        className="h-full"
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <Image
            src={img}
            alt="hero image"
            height={600}
            width={600}
            className="h-full w-full"
            >
            </Image>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="absolute inset-0 flex items-center justify-center text-center text-white px-4 z-10">
        <div>
          <h1 className="text-3xl md:text-5xl font-bold mb-4 text-white">
            Discover Your Perfect Aesthetic
          </h1>

          <button
            onClick={() => router.push("/all_tiles")}
            className=" bg-white text-black px-6 py-2 rounded-lg font-semibold hover:bg-[var(--accent)] hover:text-white transition cursor-pointer "
          >
            Browse Now
          </button>
        </div>
      </div>
    </div>
  );
}