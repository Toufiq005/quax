"use client";

import "./homePageThree.css";
import Navbar from "@/components/Navbar/Navbar";
import Reveal from "@/components/ui/Reveal/Reveal";
import TeamMemberSection from "@/components/Sections/TeamMemberSection/TeamMemberSection";
import DecorationTwo from "@/components/DecorationTwo/DecorationTwo";
import { useState } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faArrowRight,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faVimeoV,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { useRef } from "react";
import "swiper/css";
import "swiper/css/navigation";
import data from "@/data/pages/home-three.js";
import Loading from "@/components/ui/Loading/Loading";

export default function page() {
  return (
    <Loading>
      <Navbar
        pageIndex={1}
        textColor="text-white hover:text-red-500"
        bgColor="bg-transparent border-b border-brand-three"
        navBtn={3}
      />
      <Header />
      <CompanyLogo />
      <Service />
      <CaseStudy />
      <About />
      <WorkProcess />
      <Pricing />
      <SeoCheck />
      <TeamMemberSection
        limit={4}
        pageIndex={2}
        title="Meet our Expert team member"
        headLine="Lorem ipsum dolor sit amet, consectur adipiscing elit."
      />
      <Testimonial />
      <Footer />
    </Loading>
  );
}

function Header() {
  return (
    <header className="w-full h-auto min-h-screen flex items-center justify-center home-page-three relative -top-25 left-0 overflow-hidden">
      <div className="wrapper flex items-center justify-between my-28 max-sm:pt-28 max-sm:gpa-10 max-xl:flex-col max-xl:justify-center max-xl:gap-20 max-sm:gap-12 max-sm:pb-0">
        <Reveal className="left-content max-xl:flex flex-col items-center justify-center">
          <motion.p
            initial={{ x: 150, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.3 }}
            className="mb-3"
          >
            {data[0].headLineOne}
          </motion.p>
          <motion.h1
            initial={{ x: -150, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.6 }}
            className="mb-5 max-xl:text-center"
          >
            {data[0].title}
          </motion.h1>
          <motion.h2
            initial={{ x: -150, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.9 }}
            className="mb-10 max-xl:text-center"
          >
            {data[0].headLineTwo}
          </motion.h2>
          <div className="flex items-center justify-start gap-8">
            <motion.a
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.9 }}
              href={data[0].btnOne.href}
              className="flex items-center justify-center"
            >
              {data[0].btnOne.text}
            </motion.a>
            <motion.a
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.3, delay: 1.2 }}
              href={data[0].btnTwo.href}
              className="flex items-center justify-center"
            >
              {data[0].btnTwo.text}
            </motion.a>
          </div>
        </Reveal>
        <Reveal className="right-content relative">
          <img
            src="/assets/home-three/home-three-decoration.svg"
            alt="image"
            loading="lazy"
            className="absolute top-0 -right-12 max-2xl:right-0 max-sm:left-40"
          />
          <motion.img
            initial={{ y: -150, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.9 }}
            src={data[0].imgOne.src}
            alt={data[0].imgOne.alt}
            loading="lazy"
            className="absolute top-0 left-17 max-sm:left-0"
          />
          <motion.img
            initial={{ y: 150, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3, delay: 1.2 }}
            src={data[0].imgTwo.src}
            alt={data[0].imgTwo.alt}
            loading="lazy"
            className="absolute top-74 -right-28 max-2xl:right-0 max-sm:left-32"
          />
        </Reveal>
      </div>
      <DecorationTwo />
    </header>
  );
}

function CompanyLogo() {
  return (
    <section className="w-full h-auto flex items-center justify-center overflow-hidden max-sm:-mt-24">
      <div className="w-wrapper h-auto flex flex-col items-center justify-center">
        <div className="w-80 flex items-center justify-center">
          <h1 className="text-2xl font-semibold text-black/80 text-center">
            {data[1].title}
          </h1>
        </div>
        <div className="w-full flex items-center justify-between mt-13 max-xl:flex-col max-xl:gap-10">
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
                    <img src={item.icon} alt="company" loading="lazy" />
                  </motion.a>
                </Reveal>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Service() {
  const [delay, setDelay] = useState(0.3);

  return (
    <section className="w-full h-auto flex items-center justify-center overflow-hidden">
      <div className="w-wrapper pt-29 home-three-service flex flex-col items-center justify-center">
        <Reveal className="flex flex-col items-center justify-center">
          <motion.h1
            initial={{ x: 150, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.3 }}
            className="mb-6"
          >
            {data[2].title}
          </motion.h1>
          <motion.h3
            initial={{ x: -150, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.6 }}
            className="mb-15"
          >
            {data[2].headLine}
          </motion.h3>
        </Reveal>
        <Reveal className="service">
          {data[2].data.map((props) => {
            return (
              <motion.div
                initial={{ y: 150, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                whileHover={{ y: -35 }}
                transition={{ duration: 0.3, delay: delay * props.id }}
                onAnimationComplete={() => setDelay(0)}
                key={props.id}
                className="card cursor-pointer"
              >
                <div className="card-container">
                  <img src={props.icon} alt="icon" loading="lazy" />
                  <h2>{props.name}</h2>
                  <p>{props.title}</p>
                  <a href={props.href} className="text-black/70 duration-500">
                    <FontAwesomeIcon icon={faArrowRight} />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </Reveal>
        <a
          href={data[2].btn.href}
          className="home-three-service-btn flex items-center justify-center"
        >
          {data[2].btn.text}
        </a>
      </div>
    </section>
  );
}

function CaseStudy() {
  const swiperRef = useRef();

  return (
    <section className="w-full h-auto flex items-center justify-center overflow-hidden">
      <div className="wrapper home-three-case-study relative">
        <div className="flex items-end justify-between mb-16 max-xl:flex-col max-xl:items-center max-sm:w-full ">
          <Reveal className="max-xl:flex flex-col items-center justify-center max-sm:w-full">
            <motion.h1
              initial={{ y: -150, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.6 }}
              className="mb-6 max-xl:text-center"
            >
              {data[3].title}
            </motion.h1>
            <motion.h3
              initial={{ y: -150, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.3 }}
              className="max-xl:text-center"
            >
              {data[3].headLine}
            </motion.h3>
          </Reveal>
          <div className="flex items-center justify-center gap-5 max-xl:mt-5 max-sm:items-end max-sm:justify-end max-sm:w-screen max-sm:pr-5 max-sm:mt-7">
            <button onClick={() => swiperRef.current.slideNext()}>
              <FontAwesomeIcon icon={faArrowLeft} />
            </button>
            <button onClick={() => swiperRef.current.slidePrev()}>
              <FontAwesomeIcon icon={faArrowRight} />
            </button>
          </div>
        </div>
        <div className="max-xl:w-full overflow-hidden">
          <Swiper
            slidesPerView={3}
            spaceBetween={10}
            centeredSlides={false}
            loop={false}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
          >
            {data[3].data.map((props) => {
              return (
                <SwiperSlide key={props.id}>
                  <div className="relative">
                    <img
                      src={props.img}
                      alt="image"
                      loading="lazy"
                      className="img"
                    />
                    <div className="absolute z-10 bottom-5 left-5">
                      <h2>{props.title}</h2>
                      <p>{props.catagory}</p>
                    </div>
                    <div className="overlay absolute top-0 left-0"></div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
}

function About() {
  const [index, setIndex] = useState(1);

  return (
    <section className="w-full h-auto flex items-center justify-center home-three-about overflow-hidden">
      <div className="w-wrapper flex  items-center justify-center gap-20 pt-29 pb-36 max-sm:pb-52 max-xl:flex-col-reverse max-sm:pt-16">
        <Reveal className="left-content relative">
          <motion.img
            initial={{ y: -150, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.3 }}
            src={data[4].imgOne.src}
            alt={data[4].imgOne.alt}
            loading="lazy"
          />
          <motion.img
            initial={{ x: -150, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.6 }}
            src={data[4].imgTwo.src}
            alt={data[4].imgTwo.alt}
            loading="lazy"
            className="absolute -bottom-20 max-sm:-bottom-40 -left-28 max-lg:left-0 max-sm:scale-75"
          />
          <img
            src="/assets/home-three/about/about-image-decoration.svg"
            alt="img"
            loading="lazy"
            className="absolute -bottom-16 left-96 max-sm:hidden"
          />
        </Reveal>
        <Reveal className="right-content max-sm:w-full max-sm:flex flex-col items-center justify-center">
          <motion.h1
            initial={{ y: -150, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.6 }}
            className="max-xl:text-center"
          >
            {data[4].title}
          </motion.h1>
          <motion.h3
            initial={{ y: -150, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.3 }}
            className="max-xl:text-center"
          >
            {data[4].headLine}
          </motion.h3>
          <Reveal>
            {data[4].data.map((props) => {
              return (
                <motion.div
                  initial={{ x: 150, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.3 * props.id }}
                  onClick={() => setIndex(props.id)}
                  key={props.id}
                  className={
                    "flex justify-start gap-5 my-5 cursor-pointer" +
                    " " +
                    (props.id === index ? "card-active" : "card")
                  }
                >
                  <FontAwesomeIcon
                    icon={props.icon}
                    className={
                      "ml-5 p-3 rounded" +
                      " " +
                      (props.id === index
                        ? "mt-5 bg-blue-500/20 text-blue-800"
                        : "bg-white/20 text-white")
                    }
                  />
                  <div
                    className={
                      "flex flex-col items-start justify-start gap-3" +
                      " " +
                      (props.id === index ? "mt-5" : "")
                    }
                  >
                    <h2>{props.name}</h2>
                    {props.id === index && <p>{props.title}</p>}
                  </div>
                </motion.div>
              );
            })}
          </Reveal>
        </Reveal>
      </div>
    </section>
  );
}

function WorkProcess() {
  return (
    <section className="home-three-work-process w-full h-auto flex items-center justify-center overflow-hidden">
      <div className="wrapper flex gap-20 max-xl:flex-col max-xl:items-center max-xl:justify-center">
        <Reveal className="left-content max-xl:flex flex-col items-center justify-center">
          <motion.h1
            initial={{ y: -150, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.6 }}
            className="max-xl:text-center"
          >
            {data[5].title}
          </motion.h1>
          <motion.h3
            initial={{ y: -150, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.3 }}
            className="max-xl:text-center"
          >
            {data[5].headLine}
          </motion.h3>
          <div className="flex gap-8 max-xl:items-center justify-center max-sm:flex-col">
            {data[5].data.map((props) => {
              return (
                <motion.div
                  key={props.id}
                  initial={{ x: -150, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.6 }}
                  className="max-xl:flex flex-col items-center justify-center"
                >
                  <FontAwesomeIcon
                    icon={props.icon}
                    className="text-brand-two mb-4 text-3xl"
                  />
                  <h2>{props.title}</h2>
                  <p className="max-xl:text-center">{props.headLine}</p>
                </motion.div>
              );
            })}
          </div>
          <motion.a
            initial={{ y: 150, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            href={data[5].btn.href}
            className="flex items-center justify-center"
          >
            {data[5].btn.text}
          </motion.a>
        </Reveal>
        <Reveal className="right-content relative w-96 h-72 max-sm:h-96">
          <img
            src="/assets/home-three/work-process/work-process-decoration.svg"
            alt="decoration"
            loading="lazy"
            className="absolute top-72 left-10 max-sm:hidden"
          />
          <motion.img
            initial={{ x: 150, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.6 }}
            src={data[5].imgOne.src}
            alt={data[5].imgOne.alt}
            loading="lazy"
            className="absolute top-40 left-40 scale-125 max-sm:scale-100 img-one"
          />
          <motion.img
            initial={{ y: -150, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.9 }}
            src={data[5].imgTwo.src}
            alt={data[5].imgTwo.alt}
            loading="lazy"
            className="absolute top-0 left-0 img-two"
          />
        </Reveal>
      </div>
    </section>
  );
}

function Pricing() {
  return (
    <section className="w-full h-auto flex items-center justify-center overflow-hidden">
      <div className="w-wrapper home-three-pricing pt-29 pb-29 max-sm:pt-0 max-xl:mt-28 max-xl:flex flex-col items-center justify-center">
        <h1>{data[6].title}</h1>
        <h2>{data[6].headLine}</h2>
        <Reveal className="flex items-center justify-center gap-7 max-xl:flex-col">
          {data[6].data.map((props) => {
            return (
              <motion.div
                initial={{ y: 150, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.3 * props.id }}
                key={props.id}
                className={props.id === 2 ? "pricing-active" : "pricing"}
              >
                <h1 className="pt-10 pl-10">{props.plan}</h1>
                <h2 className="mt-5 pl-10">
                  <span className="text-5xl">{props.price}</span>/month
                </h2>
                <h3 className="my-5 pl-10">{props.title}</h3>
                {props.id === 2 ? (
                  <img
                    src="/assets/home-three/line-active.svg"
                    alt="line"
                    loading="lazy"
                    className="pl-10 mb-8"
                  />
                ) : (
                  <img
                    src="/assets/home-three/line.svg"
                    alt="line"
                    loading="lazy"
                    className="pl-10 mb-8"
                  />
                )}
                {props.features.map((props, i) => {
                  return (
                    <p key={i} className="flex mb-5 pl-10">
                      <span className="flex items-center justify-center w-6 h-6 rounded-full bg-blue-400/30 mr-3">
                        <FontAwesomeIcon icon={faCheck} />
                      </span>
                      {props}
                    </p>
                  );
                })}
                <a
                  href={props.href}
                  className="flex items-center justify-center mb-10 ml-10"
                >
                  BUY NOW
                </a>
              </motion.div>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
}

function SeoCheck() {
  return (
    <section className="w-full h-auto flex items-center justify-center home-three-seo overflow-hidden">
      <div className="wrapper flex flex-col items-center justify-center">
        <h1 className="mb-6">{data[7].title}</h1>
        <h2 className="mb-8">{data[7].headLine}</h2>
        <form className="flex gap-4 max-lg:flex-col max-lg:items-center max-lg:justify-center">
          <input
            type="text"
            placeholder="Your Web URL"
            className="focus:outline-blue-400"
          />
          <input
            type="email"
            placeholder="Email Address"
            className="focus:outline-blue-400"
          />
          <button>Check Now</button>
        </form>
        <div className="flex items-center justify-center gap-5 mt-8 max-sm:flex-col">
          {data[7].details.map((props) => {
            return (
              <p key={props.id}>
                <span>
                  <FontAwesomeIcon icon={faCheck} className="mr-2" />
                </span>
                {props.text}
              </p>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Testimonial() {
  const swiper = useRef();

  return (
    <section className="w-full h-auto flex items-center justify-center bg-very-light-gray">
      <div className="wrapper home-three-testimonial ">
        <div className="left mt-7 max-xl:flex flex-col items-center justify-center">
          <div className="max-xl:flex flex-col items-center justify-center">
            <h1>{data[8].title}</h1>
            <p>{data[8].headLine}</p>
          </div>
          <div className="mt-10 flex max-sm:w-screen max-sm:items-end max-sm:justify-end max-sm:pr-5 gap-5">
            <button onClick={() => swiper.current.slideNext()}>
              <FontAwesomeIcon icon={faArrowLeft} />
            </button>
            <button onClick={() => swiper.current.slidePrev()}>
              <FontAwesomeIcon icon={faArrowRight} />
            </button>
          </div>
        </div>
        <div className="right relative left-10 max-xl:left-0 max-xl:w-screen ">
          <Swiper
            onSwiper={(props) => {
              swiper.current = props;
            }}
            slidesPerView={1}
            loop={true}
            ref={swiper}
          >
            {data[8].data.map((props) => {
              return (
                <SwiperSlide key={props.id}>
                  <div className="flex items-center justify-center">
                    <div className="testimonial-card my-7">
                      <img
                        src={props.profile}
                        alt="profile-image"
                        loading="lazy"
                        className="img mt-10 ml-10 mb-3"
                      />
                      <p className="px-10 mb-3">{props.comment}</p>
                      <img
                        src="/assets/home-three/testimonial/line.svg"
                        alt="line"
                        loading="lazy"
                        className="pl-10 mb-3"
                      />
                      <h3 className="pl-10 mb-1">{props.name}</h3>
                      <h4 className="pl-10 max-sm:pb-10">{props.role}</h4>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
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
              src="/assets/logo-white.svg"
              alt="logo"
              loading="lazy"
            />
          </Reveal>

          <div>
            <p className="my-4">
              The European languages are members of the same family. Their
              separate existence is a myth.
            </p>
          </div>
          <div className="w-full h-48 max-sm:h-28 flex items-start justify-start max-md:justify-center gap-3">
            <a
              href="/"
              className="flex w-11 h-11 duration-200 text-black/70 hover:bg-red-500 hover:text-white bg-white rounded-lg items-center justify-center"
            >
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a
              href="/"
              className="flex w-11 h-11 duration-200 text-black/70 hover:bg-red-500 hover:text-white bg-white rounded-lg items-center justify-center"
            >
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a
              href="/"
              className="flex w-11 h-11 duration-200 text-black/70 hover:bg-red-500 hover:text-white bg-white rounded-lg items-center justify-center"
            >
              <FontAwesomeIcon icon={faVimeoV} />
            </a>
          </div>
        </div>
        <div className="max-md:my-10 max-sm:my-5">
          <h1>Quick Link</h1>
          <ul className="flex flex-col items-start justify-center max-md:items-center">
            {quickLink.map((item) => {
              return (
                <li key={item.key} className="my-2">
                  <Link
                    key={item.key}
                    href={item.href}
                    className=" hover:text-red-500 duration-100"
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
                    className=" hover:text-red-500 duration-100"
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
                    className="hover:text-red-500 duration-100"
                  >
                    {item.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      <div className="w-full h-24 flex justify-center items-center mt-24 max-sm:mt-10 border-t border-brand-four">
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
