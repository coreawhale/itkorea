"use client";

import { Navigation } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "../mdSlider/swiper.css";
import Container from "@/components/common/layout/Container";
import Heading from "@/components/common/typography/Heading";
import Md from "./Md";

const MdSlider = () => {
  const data = [
    { title: "md1", subtitle: "어쩌구저쩌구", imageSrc: "/md_1.jpg" },
    { title: "md2", subtitle: "어쩌구저쩌구", imageSrc: "/md_2.jpg" },
    { title: "md3", subtitle: "어쩌구저쩌구", imageSrc: "/md_3.jpg" },
    { title: "md4", subtitle: "어쩌구저쩌구", imageSrc: "/md_4.jpg" },
    { title: "md5", subtitle: "어쩌구저쩌구", imageSrc: "/md_5.png" },
  ];
  return (
    <Container>
      <Heading level={3}>New & Best MD</Heading>
      <div className="py-10 px-8 md:px-0">
        <Swiper
          modules={[Navigation]}
          loop={true}
          navigation={true}
          //   slidesPerView={4}
          //   slidesOffsetBefore={30}
          //   slidesOffsetAfter={30}
          centeredSlides
          breakpoints={{
            320: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            480: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            640: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
          }}
        >
          {data.map((v) => {
            return (
              <SwiperSlide>
                <Md {...v} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </Container>
  );
};

export default MdSlider;
