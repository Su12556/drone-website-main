import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/swiper-bundle.css";
import "../style/carousel.css";

export default function Carousel() {
  return (
    <div className="carousel">
      <Swiper
        className="mySwiper"
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
      >
        <SwiperSlide className="slides s1">
          <div className="slides-inner">
            {/* <h2>Slide 1 Title</h2>
            <p>Slide 1 Description</p> */}
          </div>
        </SwiperSlide>
        <SwiperSlide className="slides s2">
          <div className="slides-inner">
            {/* <h2>Slide 2 Title</h2>
            <p>Slide 2 Description</p> */}
          </div>
        </SwiperSlide>
        <SwiperSlide className="slides s3">
          <div className="slides-inner">
            {/* <h2>Slide 3 Title</h2>
            <p>Slide 3 Description</p> */}
          </div>
        </SwiperSlide>
        <SwiperSlide className="slides s4">
          <div className="slides-inner">
            {/* <h2>Slide 4 Title</h2>
            <p>Slide 4 Description</p> */}
          </div>
        </SwiperSlide>
        <SwiperSlide className="slides s5">
          <div className="slides-inner">
            {/* <h2>Slide 5 Title</h2>
            <p>Slide 5 Description</p> */}
          </div>
        </SwiperSlide>
        <SwiperSlide className="slides s6">
          <div className="slides-inner">
            {/* <h2>Slide 6 Title</h2>
            <p>Slide 6 Description</p> */}
          </div>
        </SwiperSlide>
        <SwiperSlide className="slides s7">
          <div className="slides-inner">
            {/* <h2>Slide 7 Title</h2>
            <p>Slide 7 Description</p> */}
          </div>
        </SwiperSlide> 
        {/* Add more slides as needed */}
      </Swiper>
    </div>
  );
}
