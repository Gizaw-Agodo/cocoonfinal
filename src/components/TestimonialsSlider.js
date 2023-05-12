import React from "react";
import TestimonialsCard from "./card/TestimonialsCard";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

export default function TestimonialsSlider() {
  return (
    <>
      <h1 className="text-lg font-bold">
        Here is what our Clients are saying about us
      </h1>
      <Swiper
        spaceBetween={1}
        slidesPerView={1}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <TestimonialsCard />
        </SwiperSlide>
        <SwiperSlide>
          <TestimonialsCard />
        </SwiperSlide>
        <SwiperSlide>
          <TestimonialsCard />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
