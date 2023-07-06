"use client";

import "./Testimonial.css";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import data from "../../data/testimonial";
import { motion } from "framer-motion";
import Reveal from "../ui/Reveal/Reveal";
import { useRef, useState, useEffect, useCallback } from "react";

export default function Testimonial() {
  return (
    <section className="w-full h-auto bg-very-light-gray flex flex-col items-center justify-center">
      <div className="testimonial pt-29 pb-18 ">
        <Reveal>
          <motion.h3
            initial={{ x: -150, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            Testimonial
          </motion.h3>
        </Reveal>
        <Reveal>
          <motion.h1
            initial={{ x: 150, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className="mt-2"
          >
            What Our Clients Say
          </motion.h1>
        </Reveal>
        <Reveal>
          <motion.div
            initial={{ y: 150, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className="h-full w-full mt-16"
          >
            <Carousel />
          </motion.div>
        </Reveal>
      </div>
    </section>
  );
}

function Carousel() {
  var offsetIndex;
  if (window.matchMedia("(max-width: 780px)").matches) {
    offsetIndex = 1;
  } else {
    offsetIndex = 2;
  }

  const swiperRef = useRef(null);

  const [currentSlide, setCurrentSlide] = useState(0);

  const [isLeftDisabled, setIsLeftDisabled] = useState(true);
  const [isRightDisabled, setIsRightDisabled] = useState(false);

  const updateIndex = useCallback(
    () => setCurrentSlide(swiperRef.current.swiper.realIndex),
    []
  );

  useEffect(() => {
    const swiperInstance = swiperRef.current.swiper;

    if (swiperInstance) {
      swiperInstance.on("slideChange", updateIndex);
    }

    return () => {
      if (swiperInstance) {
        swiperInstance.off("slideChange", updateIndex);
      }
    };
  }, [updateIndex]);
  return (
    <Swiper
      ref={swiperRef}
      modules={[Pagination]}
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
        <SwiperSlide key={item.id}>
          <div className="testimonial-card flex flex-col items-start max-md:items-center justify-center mb-32">
            <div
              className={
                "testimonial-card-content flex items-center justify-center text-center " +
                (currentSlide === item.id - offsetIndex
                  ? "bg-header text-white"
                  : "bg-white text-light-gray")
              }
            >
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
