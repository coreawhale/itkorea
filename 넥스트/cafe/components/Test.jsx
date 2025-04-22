"use client";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";
import { Scrollbar } from "swiper/modules";
import Image from "next/image";

const Test = () => {
  return (
    <>
      <Swiper
        modules={[Scrollbar]}
        scrollbar={{ draggable: true }}
        slidesPerView={1}
        loop={true}
      >
        <SwiperSlide className="relative h-[50vh]">
          <Image className="object-cover" fill src={"/swiper_01.jpg"} alt="" />
        </SwiperSlide>
        <SwiperSlide className="relative h-[50vh]">
          <Image className="object-cover" fill src={"/swiper_02.jpg"} alt="" />
        </SwiperSlide>
        <SwiperSlide className="relative h-[50vh]">
          <Image className="object-cover" fill src={"/swiper_03.jpg"} alt="" />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Test;
