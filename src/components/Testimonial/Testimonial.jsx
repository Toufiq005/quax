"use client";

import "./Testimonial.css";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import {Pagination } from "swiper";
import "swiper/css";
import 'swiper/css/pagination';
import data from "../../data/testimonial";
import { motion } from "framer-motion";

export default function Testimonial() {
  return (
    <section className="w-full h-auto bg-very-light-gray flex flex-col items-center justify-center">
      <div className="testimonial pt-29 pb-18 ">
        <motion.h3
          initial={{ x: -150, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          Testimonial
        </motion.h3>
        <motion.h1
          initial={{ x: 150, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.1 }}
          className="mt-2"
        >
          What Our Clients Say
        </motion.h1>
        <motion.div
          initial={{ y: 150, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.1 }}
          className="h-full w-full mt-16"
        >
          <Carousel />
        </motion.div>
      </div>
    </section>
  );
}

function Carousel() {
  return (
    <Swiper
      modules={[ Pagination]}
      pagination={{ clickable: true }}
      spaceBetween={3}
      breakpoints={{
        "@0.00": {
          slidesPerView: 1,
          spaceBetween: 0,
        },
        "@0.75": {
          slidesPerView: 1,
          spaceBetween: 0,
        },
        "@1.00": {
          slidesPerView: 2,
          spaceBetween: 3,
        },
        "@1.50": {
          slidesPerView: 3,
          spaceBetween: 3,
        },
      }}
      className="flex items-center justify-center"
    >
      {data.map((item) => (
        <SwiperSlide key={item.id} >
          <div className="testimonial-card flex flex-col items-start max-md:items-center justify-center mb-32">
            <div className="testimonial-card-content flex items-center justify-center text-center">
              <p className="m-10">{item.comment}</p>
            </div>
            <div className="testimonial-card-author flex items-center justify-center mt-6 ml-4">
              <Image
                width={60}
                height={60}
                src={item.profile}
                alt="user-icon"
              />
              <div className="ml-5">
                <h3 className="mb-1">{item.name}</h3>
                <p>{item.role}</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
