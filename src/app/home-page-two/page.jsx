"use client";

import "./homePageTwo.css";
import { useState, useEffect, useRef } from "react";
import testimonialData from "@/data/section/testimonial";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import Navbar from "@/components/Navbar/Navbar";
import Image from "next/image";
import "../../../node_modules/font-awesome/css/font-awesome.min.css";
import blogData from "@/data/section/home-blogpost";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faCheck } from "@fortawesome/free-solid-svg-icons";
import {
  faVimeoV,
  faFacebookF,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import TeamMemberSection from "@/components/Sections/TeamMemberSection/TeamMemberSection";
import SubscribeSection from "@/components/Sections/SubscribeSection/SubscribeSection";
import Reveal from "@/components/ui/Reveal/Reveal";
import { motion } from "framer-motion";
import Link from "next/link";
import DecorationTwo from "@/components/DecorationTwo/DecorationTwo";
import CountUp from "react-countup";
import data from "@/data/pages/home-two.js";
import Loading from "@/components/ui/Loading/Loading";

export default function page() {
  return (
    <Loading>
      <Navbar
        textColor="text-white hover:text-blue-500"
        bgColor="bg-transparent border-b border-brand-two"
        pageIndex={3}
        navBtn={2}
      />
      <Header />
      <About />
      <Analysis />
      <HowItWrok />
      <Testimonial />
      <TeamMemberSection
        bgColor="mt-40 max-sm:pt-64"
        limit={4}
        pageIndex={2}
        title="Our Marketing expertise"
        headLine="Lorem ipsum dolor sit amet, consectetur adipiscing elit dolor sit amet."
      />
      <PricingSection />
      <Blog />
      <SubscribeSection />
      <Footer />
    </Loading>
  );
}

function Header() {
  const heroCard = useRef(null);

  // scroll speed of hero-card
  const parallaxSpeed = 0.2;

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      const parallax = document.querySelector(".hero-card");
      const top = -380;
      {
        parallax
          ? (parallax.style.top = scrollTop * parallaxSpeed + top + "px")
          : null;
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [heroCard.current]);

  return (
    <header className="w-full h-auto min-h-screen flex items-center justify-center home-two relative -top-25 overflow-hidden">
      <div className="wrapper max-sm:pt-28 w-full flex items-center justify-between max-xl:flex-col">
        <Reveal className="header-left-content max-xl:flex flex-col items-center justify-center">
          <motion.h1
            initial={{ y: -150, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.3 }}
            className="max-xl:pt-28 max-xl:text-center"
          >
            {data[0].title}
          </motion.h1>
          <motion.h2
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.3 }}
            className="mb-10 max-xl:text-center"
          >
            {data[0].headLineOne}
          </motion.h2>
          <a
            href={data[0].btn.href}
            className="flex items-center justify-center mb-10"
          >
            {data[0].btn.text}
          </a>
          <p className="mb-6">{data[0].headLineTwo}</p>
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.3 }}
            className="flex items-center justify-start gap-5"
          >
            <Image
              width={170}
              height={50}
              src="/assets/home-two/widget.webp"
              alt="wedget"
            />
            <h3>ENQUIRE US</h3>
          </motion.div>
        </Reveal>
        <Reveal className="relative max-xl:top-32 max-sm:m-3 max-sm:pb-10">
          <motion.img
            initial={{ y: -150, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.4 }}
            src={data[0].imgOne.src}
            alt={data[0].imgOne.alt}
          />
          <motion.img
            initial={{ x: -150, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.4 }}
            src={data[0].imgTwo.src}
            alt={data[0].imgTwo.alt}
            ref={heroCard}
            className="relative -top-96 -left-16 max-sm:left-0 hero-card"
          />
        </Reveal>
      </div>
      <DecorationTwo />
    </header>
  );
}

function About() {
  const [aboutIndex, setAboutIndex] = useState(0);

  return (
    <section className="w-full h-auto flex items-center justify-center overflow-hidden">
      <div className="home-two-about">
        <div className="top-content w-full">
          <Reveal className="flex flex-col items-center justify-center w-full">
            <motion.h1
              initial={{ x: 150, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.3 }}
            >
              {data[1].title}
            </motion.h1>
            <motion.p
              initial={{ x: -150, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.3 }}
            >
              {data[1].headLineOne}
            </motion.p>
          </Reveal>
          <div className="top-content-container max-xl:flex-col max-xl:items-center max-xl:justify-center">
            <div className="left flex flex-col items-center justify-center overflow-hidden ">
              {data[1].aboutData.map((item, i) => (
                <button
                  onClick={() => setAboutIndex(item.id)}
                  key={item.id}
                  style={{
                    backgroundColor: aboutIndex === item.id ? "#3270de" : "",
                  }}
                  className="flex items-center justify-start"
                >
                  <Reveal>
                    <motion.h3
                      initial={{ x: -100, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.3, delay: 0.3 * i }}
                      className="ml-7"
                    >
                      <span className="mr-4">
                        <FontAwesomeIcon icon={item.icon} />
                      </span>
                      {item.name}
                    </motion.h3>
                  </Reveal>
                </button>
              ))}
            </div>
            <div className="right relative overflow-hidden">
              <img src={data[1].aboutData[aboutIndex].img} alt="about-img" />
              <Reveal className="w-full relative bg-blue-500/90 max-sm:h-20 max-sm:mt-6 h-25 rounded-br-xl rounded-bl-xl -top-25 flex justify-between items-center overflow-hidden">
                <motion.div
                  initial={{ y: 150, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.3 }}
                  className="ml-10 max-sm:ml-3"
                >
                  <h2 className="text-1xl text-white font-semibold mb-2">
                    {data[1].aboutData[aboutIndex].name}
                  </h2>
                  <h4>{data[1].aboutData[aboutIndex].title}</h4>
                </motion.div>
                <a
                  href={data[1].aboutData[aboutIndex].href}
                  className="mr-10 max-sm:mr-3 flex items-center justify-center"
                >
                  VIEW MORE
                </a>
              </Reveal>
            </div>
          </div>
        </div>
        <div className="middle-content w-full pt-28 max-sm:pt-0 max-sm:-mt-40 flex flex-col items-center justify-center">
          <h1>{data[1].headLineTwo}</h1>
          <div className="w-full flex items-center justify-between mt-13 max-xl:flex-col max-xl:gap-8">
            {data[1].companies.map((item, i) => {
              return (
                <div key={item.id} title={item.name}>
                  <Reveal>
                    <motion.a
                      initial={{ y: -100, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.3, delay: 0.3 * i }}
                      href={item.href}
                    >
                      <img src={item.icon} alt="company" />
                    </motion.a>
                  </Reveal>
                </div>
              );
            })}
          </div>
        </div>
        <div className="end-content flex items-start justify-between mb-29 max-xl:flex-col max-xl:items-center max-xl:justify-center">
          <Reveal className="left relative">
            <motion.img
              initial={{ x: 150, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.3 }}
              src={data[2].imgOne.src}
              alt={data[2].imgOne.alt}
              className="relative"
            />
            <img
              src="/assets/home-two/about/about-decoration.svg"
              alt="decoration"
              className="relative about-two-decoration"
            />
            <motion.img
              initial={{ y: 150, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.6 }}
              src={data[2].imgTwo.src}
              alt={data[2].imgOne.alt}
              className="relative about-two-card"
            />
          </Reveal>
          <Reveal className="right max-xl:flex flex-col items-center justify-center">
            <motion.h1
              initial={{ x: 150, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.3 }}
              className="mb-6 mt-12"
            >
              {data[2].title}
            </motion.h1>
            <motion.p
              initial={{ x: -150, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.6 }}
            >
              {data[2].headLine}
            </motion.p>
            <div className="flex items-start justify-start gap-13 mt-6 max-sm:flex-col max-sm:gap-5 max-xl:items-center max-xl:justify-center">
              {data[2].details.map((props) => {
                return (
                  <Reveal key={props.id}>
                    <h3>
                      <CountUp
                        start={0}
                        end={props.numOne}
                        delay={0.9}
                        duration={3}
                      />
                      .
                      <CountUp
                        start={0}
                        end={props.numTwo}
                        delay={0.9}
                        duration={3}
                      />
                      %
                      <span
                        className="ml-4 text-2xl"
                        style={{ color: props.color }}
                      >
                        <FontAwesomeIcon icon={props.icon} />
                      </span>
                    </h3>
                    <p className="mt-1">{props.title}</p>
                  </Reveal>
                );
              })}
            </div>
            <motion.a
              initial={{ x: 150, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.9 }}
              href={data[2].btn.href}
              className="flex items-center justify-center mt-10"
            >
              {data[2].btn.text}
            </motion.a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Analysis() {
  return (
    <section className="w-full h-auto flex items-center justify-center free-analysis overflow-hidden">
      <div className="wrapper flex justify-between items-center max-xl:flex-col max-xl:gap-20">
        <Reveal className="left max-xl:flex flex-col items-center justify-center">
          <motion.h1
            initial={{ x: 150, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.3 }}
            className="mb-6"
          >
            {data[3].title}
          </motion.h1>
          <motion.p
            initial={{ x: -150, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.6 }}
            className="mb-6"
          >
            {data[3].discription}
          </motion.p>
          <motion.h3
            initial={{ x: 150, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.9 }}
            className="mb-6"
          >
            {data[3].headLine}
          </motion.h3>
          <motion.h2
            initial={{ x: -150, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.9 }}
          >
            <span className="mr-4">
              <FontAwesomeIcon icon={faPhone} />
            </span>
            {data[3].phoneNumber}
          </motion.h2>
        </Reveal>
        <div className="right max-sm:w-full max-sm:flex items-center justify-center">
          <form className="flex flex-col items-center justify-center">
            <div className="max-sm:w-full">
              <h1 className="mb-5 max-sm:w-4/5 max-sm:ml-10">
                {data[3].from.title}
              </h1>
              <Reveal className="max-sm:w-full max-sm:ml-10">
                <motion.h2
                  initial={{ y: -100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.3 }}
                >
                  {data[3].from.inputs[0].title}
                </motion.h2>
                <input
                  type="text"
                  placeholder="&#xf007;    Type Hear"
                  className="focus:outline-blue-300"
                />
              </Reveal>
              <Reveal className="max-sm:w-full max-sm:ml-10">
                <motion.h2
                  initial={{ y: -100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.6 }}
                >
                  {data[3].from.inputs[1].title}
                </motion.h2>
                <input
                  type="text"
                  placeholder="&#xf0e0;    Type Hear"
                  className="focus:outline-blue-300"
                />
              </Reveal>
              <Reveal className="max-sm:w-full max-sm:ml-10">
                <motion.h2
                  initial={{ y: -100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.9 }}
                >
                  {data[3].from.inputs[2].title}
                </motion.h2>
                <input
                  type="text"
                  placeholder="&#xf0ac;    Type Hear"
                  className="focus:outline-blue-300"
                />
              </Reveal>
              <button className="max-sm:w-4/5 max-sm:ml-10">
                {data[3].from.btn.text}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

function HowItWrok() {
  const [index, setIndex] = useState(1);

  return (
    <section className="w-full h-auto flex items-center justify-center overflow-hidden">
      <div className="wrapper how-it-work">
        <Reveal className="flex flex-col items-center">
          <motion.h1
            initial={{ x: -150, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.3 }}
            className="mb-6"
          >
            {data[4].title}
          </motion.h1>
          <motion.h3
            initial={{ x: 150, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.3 }}
            className="mb-16"
          >
            {data[4].headLine}
          </motion.h3>
        </Reveal>
        <div>
          <Reveal className="flex items-center justify-center gap-7 mt-2 max-xl:flex-col">
            {data[4].data.map((props) => {
              return (
                <motion.button
                  initial={{ y: -100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.3 * props.id }}
                  onClick={() => setIndex(props.id)}
                  key={props.id}
                  className={
                    index === props.id
                      ? "how-it-work-button-active"
                      : "how-it-work-button"
                  }
                >
                  {props.name}
                </motion.button>
              );
            })}
          </Reveal>
          <div className="flex items-center justify-center gap-48 mt-20 max-xl:flex-col">
            <div className="left relative">
              <img
                src="/assets/home-two/how-it-works/how-it-works-card-one.png"
                alt="card one"
                className="relative card-one"
              />
              <img
                src="/assets/home-two/how-it-works/how-it-works-card-two.png"
                alt="card two"
                className="relative card-two"
              />
              <img
                src="/assets/home-two/how-it-works/how-it-works-card-three.png"
                alt="card three"
                className="relative card-three"
              />
              <img
                src="/assets/home-two/how-it-works/how-it-works-card-four.png"
                alt="card four"
                className="relative card-four"
              />
            </div>
            <Reveal className="right max-xl:flex flex-col items-center justify-center">
              <motion.h2
                initial={{ y: 150, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.3 }}
                className="mb-10 max-xl:text-center"
              >
                {data[4].data[index].title}
              </motion.h2>
              <motion.p
                initial={{ x: 150, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.3 }}
                className="mb-5 max-xl:text-center"
              >
                <span>
                  <FontAwesomeIcon
                    icon={faCheck}
                    className="text-blue-500 mr-3"
                  />
                </span>
                {data[4].data[index].points[1]}
              </motion.p>
              <motion.p
                initial={{ x: 150, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.6 }}
                className="mb-5 max-xl:text-center"
              >
                <span>
                  <FontAwesomeIcon
                    icon={faCheck}
                    className="text-blue-500 mr-3"
                  />
                </span>
                {data[4].data[index].points[2]}
              </motion.p>
              <motion.p
                initial={{ x: 150, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.9 }}
                className="mb-5 max-xl:text-center"
              >
                <span>
                  <FontAwesomeIcon
                    icon={faCheck}
                    className="text-blue-500 mr-3"
                  />
                </span>
                {data[4].data[index].points[3]}
              </motion.p>
              <motion.p
                initial={{ x: 150, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.3, delay: 1.2 }}
                className="mb-5 max-xl:text-center"
              >
                <span>
                  <FontAwesomeIcon
                    icon={faCheck}
                    className="text-blue-500 mr-3"
                  />
                </span>
                {data[4].data[index].points[4]}
              </motion.p>
              <motion.p
                initial={{ x: 150, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.3, delay: 1.5 }}
                className="mb-10 max-xl:text-center"
              >
                <span>
                  <FontAwesomeIcon
                    icon={faCheck}
                    className="text-blue-500 mr-3"
                  />
                </span>
                {data[4].data[index].points[5]}
              </motion.p>
              <a
                href={data[4].data[index].btn.href}
                className="how-it-work-button-active flex items-center justify-center"
              >
                {data[4].data[index].btn.text}
              </a>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

function Testimonial() {
  return (
    <section className="w-full h-auto items-center justify-center bg-very-light-gray">
      <div className="pt-29 testimonial-two">
        <div className="flex w-full items-center justify-center gap-28 max-xl:flex-col max-xl:gap-10">
          {data[5].data.map((item) => {
            return (
              <Reveal
                key={item.id}
                className="flex flex-col items-center justify-center"
              >
                <img src={item.icon} alt="testimonial" />
                <h1>
                  <CountUp
                    start={0}
                    end={item.numbers}
                    duration={4}
                    delay={0.3}
                  />
                  +
                </h1>
                <h3>{item.name}</h3>
              </Reveal>
            );
          })}
        </div>
        <div className="flex items-center justify-center">
          <div className="testimonial-two-wrapper">
            <Swiper
              modules={[Pagination]}
              pagination={{ clickable: true }}
              spaceBetween={3}
              slidesPerView={1}
              centeredSlides={true}
              loop={true}
            >
              {testimonialData.slice(0, 5).map((props) => {
                return (
                  <SwiperSlide key={props.id}>
                    <div className="flex items-center justify-center w-full">
                      <div className="testimonial-two-slide flex items-center justify-center flex-col text-center">
                        <img src={props.profile} alt="image" className="mb-3" />
                        <h2 className="mb-2">{props.name}</h2>
                        <h4>{props.role}</h4>
                        <p>{props.comment}</p>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}

function PricingSection() {
  return (
    <section className="w-full h-auto flex items-center justify-center pricing-section-two overflow-hidden">
      <div className="wrapper">
        <Reveal className="flex flex-col items-center justify-center">
          <motion.h1
            initial={{ x: 150, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            {data[6].title}
          </motion.h1>
          <motion.p
            initial={{ x: 150, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            {data[6].headLine}
          </motion.p>
        </Reveal>
        <Reveal className="w-full flex items-center justify-between mt-16 max-xl:flex-col max-xl:gap-8">
          {data[6].data.map((props) => {
            return (
              <motion.div
                initial={{ y: 150, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.3 * props.id }}
                className={props.id === 1 ? "price-two-active" : "price-two"}
                key={props.id}
              >
                <div
                  className={
                    "w-full h-1/2 flex flex-col items-center justify-center rounded-t" +
                    " " +
                    (props.id === 1 ? "bg-blue" : "bg-blue-o-20")
                  }
                >
                  <h1 className="mb-5">{props.plan}</h1>
                  <p className="mb-9">{props.title}</p>
                  <h2 className="mb-9">
                    <span className="text-5xl">{props.price}</span>/month
                  </h2>
                  <a
                    className="flex items-center justify-center"
                    href={props.link}
                  >
                    BUY NOW
                  </a>
                </div>
                <div className="w-full h-1/2 flex flex-col items-start justify-center bg-white rounded-b">
                  <div className="m-10">
                    <h3 className="flex mb-6">
                      <span>
                        <img
                          src="/assets/cheak-mark-blue.svg"
                          alt="icon"
                          className="mr-3"
                        />
                      </span>
                      {props.bulletPoint[1]}
                    </h3>
                    <h3 className="flex mb-6">
                      <span>
                        <img
                          src="/assets/cheak-mark-blue.svg"
                          alt="icon"
                          className="mr-3"
                        />
                      </span>
                      {props.bulletPoint[2]}
                    </h3>
                    <h3 className="flex mb-6">
                      <span>
                        <img
                          src="/assets/cheak-mark-blue.svg"
                          alt="icon"
                          className="mr-3"
                        />
                      </span>
                      {props.bulletPoint[3]}
                    </h3>
                    <h3 className="flex mb-6">
                      <span>
                        <img
                          src="/assets/cheak-mark-blue.svg"
                          alt="icon"
                          className="mr-3"
                        />
                      </span>
                      {props.bulletPoint[4]}
                    </h3>
                    <h3 className="flex mt-6">
                      <span>
                        <img
                          src="/assets/cheak-mark-blue.svg"
                          alt="icon"
                          className="mr-3"
                        />
                      </span>
                      {props.bulletPoint[5]}
                    </h3>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
}

function Blog() {
  return (
    <section className="blogpost flex flex-col items-center justify-center overflow-hidden">
      <Reveal>
        <motion.h1
          initial={{ x: 150, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          Our Daily Blogpost
        </motion.h1>
      </Reveal>
      <div className="flex items-center justify-center mt-16 post-div">
        {blogData.map((items, i) => {
          return (
            <Reveal key={items.id}>
              <motion.div
                initial={{ y: 150, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.2, delay: 0.2 * i }}
                className="post flex flex-col items-center justify-center"
              >
                <Image
                  width={370}
                  height={250}
                  src={items.img}
                  alt="img"
                  className="postImg"
                />
                <div className="flex items-center justify-center post-info">
                  <h2 className="text-black/40 font-medium pr-3 flex items-center border-r">
                    <span>
                      <Image
                        src="/assets/icon-user-blue.svg"
                        width={12}
                        height={12}
                        alt="icon"
                        className="w-3 h-3 mx-2"
                      />
                    </span>
                    By {items.author}
                  </h2>
                  <h2 className="text-black/40 font-medium pr-5 flex items-center">
                    <span>
                      <Image
                        src="/assets/icon-folder-blue.svg"
                        width={14}
                        height={10}
                        alt="icon"
                        className="w-3 h-3 mx-2"
                      />
                    </span>
                    {items.category}
                  </h2>
                </div>
                <h1>{items.title}</h1>
                <p>{items.description}</p>
                <div className="pb-8">
                  <a href={items.link}>View Details</a>
                </div>
              </motion.div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
function Footer() {
  const quickLink = [
    { key: 1, name: "Home", href: "/" },
    { key: 2, name: "About", href: "/about" },
    { key: 3, name: "Services", href: "/service" },
    { key: 4, name: "Pages", href: "/" },
    { key: 5, name: "Blog", href: "/blog" },
    { key: 6, name: "Shop", href: "/" },
    { key: 7, name: "Contact", href: "/contact" },
  ];

  const importantLink = [
    { key: 1, name: "Our Team", href: "/team-members" },
    { key: 2, name: "News & Media", href: "/blog" },
    { key: 3, name: "Case Studies", href: "/case-study" },
    { key: 4, name: "How it Works", href: "/" },
    { key: 5, name: "Locations", href: "/" },
    { key: 6, name: "Resources", href: "/" },
  ];

  const supportLink = [
    { key: 1, name: "Forum Support", href: "/" },
    { key: 2, name: "Help & FAQ", href: "/faq" },
    { key: 3, name: "Contact Us", href: "/contact" },
    { key: 4, name: "Pricing And plans", href: "/service-details" },
    { key: 5, name: "Cookies Policy", href: "/" },
    { key: 6, name: "Privacy Policy", href: "/" },
  ];

  return (
    <footer className="w-full flex flex-col items-center justify-center ">
      <div className="flex items-start justify-between w-full max-md:items-center footer-div">
        <div className="max-md:flex flex-col items-center justify-center max-md:text-center">
          <Reveal>
            <motion.img
              initial={{ x: -200, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.3 }}
              src="/assets/logo-dark-blue.svg"
              alt="logo"
            />
          </Reveal>

          <div>
            <p className="my-4">
              The European languages are members of the same family. Their
              separate existence is a myth.
            </p>
          </div>
          <div className="w-full h-48 flex items-start justify-start max-md:justify-center gap-3">
            <a
              href="/"
              className="flex w-11 h-11 duration-200 text-black/70 hover:bg-blue-500 hover:text-white bg-white rounded-lg items-center justify-center"
            >
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a
              href="/"
              className="flex w-11 h-11 duration-200 text-black/70 hover:bg-blue-500 hover:text-white bg-white rounded-lg items-center justify-center"
            >
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a
              href="/"
              className="flex w-11 h-11 duration-200 text-black/70 hover:bg-blue-500 hover:text-white bg-white rounded-lg items-center justify-center"
            >
              <FontAwesomeIcon icon={faVimeoV} />
            </a>
          </div>
        </div>
        <div className="max-md:my-10">
          <h1>Quick Link</h1>
          <ul className="flex flex-col items-start justify-center max-md:items-center">
            {quickLink.map((item) => {
              return (
                <li key={item.key} className="my-2">
                  <Link
                    key={item.key}
                    href={item.href}
                    className=" hover:text-blue-800 duration-100"
                  >
                    {item.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="max-md:my-10">
          <h1>Important Links</h1>
          <ul className="flex flex-col items-start justify-center max-md:items-center">
            {importantLink.map((item) => {
              return (
                <li key={item.key} className="my-2">
                  <Link
                    key={item.key}
                    href={item.href}
                    className=" hover:text-blue-800 duration-100"
                  >
                    {item.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="max-md:my-10">
          <h1>Support</h1>
          <ul className="flex flex-col items-start justify-center max-md:items-center">
            {supportLink.map((item) => {
              return (
                <li key={item.key} className="my-2">
                  <Link
                    key={item.key}
                    href={item.href}
                    className="hover:text-blue-800 duration-100"
                  >
                    {item.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      <div className="w-full h-24  flex justify-center items-center border-t mt-24">
        <Reveal>
          <motion.p
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3 }}
            className=" text-center w-full pt-0"
          >
            ©2021 All Rights Reserved. With Design by Loyalcoders
          </motion.p>
        </Reveal>
      </div>
    </footer>
  );
}
