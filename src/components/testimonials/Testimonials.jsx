import React from "react";
import TestimonialCard from "../testimonialCard/TestimonialCard";

// import Swiper core and required modules
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import TEST from "./testimonials.json";
import "./testimonials.css";

const Testimonials = () => {
  return (
    <section>
      <h5>Reviw from clients</h5>
      <h2>Testimonials</h2>

      <Swiper
        className="container testimonials__container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {TEST.map((el) => (
          <SwiperSlide className="testimonial" key={el.id}>
            <TestimonialCard cardInfo={el} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;
