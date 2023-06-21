"use client";
import "./Testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import data from "../../data/testimonial";

export default function Testimonial() {
  return (
    <section className="w-full min-h-screen bg-very-light-gray flex flex-col items-center justify-center">
      <div className="wrapper testimonial ">
        <h3>Testimonial</h3>
        <h1 className="mt-2">What Our Clients Say</h1>
        <div className="h-full w-full mt-16">
        <Carousel />
        </div>
      </div>
    </section>
  );
}

function Carousel() {
  return (
    <Swiper spaceBetween={3} slidesPerView={3}>
      {data.map((item) => (
        <SwiperSlide key={item.id}>
          <div key={item.id} className="testimonial-card flex flex-col items-start justify-center">
            <div className="testimonial-card-content flex items-center justify-center text-center">
              <p className="m-10">{item.comment}</p>
            </div>
            <div className="testimonial-card-author flex items-center justify-center mt-6 ml-4">
              <img src={item.profile} alt="user-icon" />
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
