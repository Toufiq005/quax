"use client";

import "./home.css";
import { useState } from "react";
import Reveal from "@/components/ui/Reveal/Reveal";
import Image from "next/image";
import Navbar from "@/components/Navbar/Navbar";
import Decoration from "@/components/Decoration/Decoration";
import ServiceSection from "@/components/Sections/ServiceSection/ServiceSection";
import PricingSection from "@/components/Sections/PricingSection/PricingSection";
import Testimonial from "@/components/Testimonial/Testimonial";
import blogData from "../data/section/home-blogpost";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faVimeoV,
  faFacebookF,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
import CountUp from "react-countup";
import YoutubeEmbed from "@/components/ui/YoutubeEmbed/YoutubeEmbed";
import data from "../data/pages/home-one.js";
import Loading from "@/components/ui/Loading/Loading";

export default function Home() {

  return (
    <Loading>
      <Navbar
        bgColor="bg-dark-blue"
        textColor="text-white"
        pageIndex={1}
        navBtn={1}
      />
      <Header />
      <AboutCompany />
      <ServiceSection />
      <Experience />
      <PricingSection />
      <WhatNext />
      <Testimonial />
      <Blog />
      <Footer />
    </Loading>
  );
}

function Header() {
  return (
    <header className="relative flex items-center justify-evenly parent overflow-hidden">
      <div className="hero max-lg:flex-col max-lg:mt-28 -mt-8 max-sm:m">
        <div className="max-lg:flex max-lg:flex-col max-lg:justify-center max-lg:text-center max-lg:items-center max-sm:mt-28">
          <Reveal className="max-lg:flex items-center justify-center">
            <motion.h1
              initial={{ y: -150, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.4 }}
              className="max-lg:text-4xl"
            >
              {data[0].title}
            </motion.h1>
          </Reveal>
          <Reveal className="max-lg:flex items-center justify-center">
            <motion.p
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.3 }}
              className="mt-5 mb-16 max-lg:text-sm "
            >
              {data[0].headLine}
            </motion.p>
          </Reveal>
          <div>
            <a
              href={data[0].btn.href}
              className="px-7 py-4 text-white bg-header rounded hover:text-red-500 hover:bg-white "
            >
              {data[0].btn.text}
            </a>
          </div>
        </div>
        <Reveal>
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.3 }}
            className="-mt-6 max-lg:ml-0 hero-img"
          >
            <Image
              width={470}
              height={580}
              loading="lazy"
              src="/assets/home/hero-image.webp"
              alt="heroImg"
            />
          </motion.div>
        </Reveal>
        <Decoration />
      </div>
    </header>
  );
}

function AboutCompany() {
  return (
    <section className="section-one">
      <div className="flex gap-16 items-center justify-center w-full pt-29 max-sm:pt-14 max-lg:flex-col">
        <div className="flex items-start justify-end w-1/2 max-lg:w-4/5 max-lg:mr-0">
          <Reveal className="max-lg:flex items-center justify-center max-lg:w-full">
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.3, delay:0.3 }}
            >
              <Image
                width={data[1].imgOne.width}
                height={data[1].imgOne.height}
                src={data[1].imgOne.src}
                alt={data[1].imgOne.alt}
                loading="lazy"
              />
              <Image
                width={data[1].imgTwo.width}
                height={data[1].imgTwo.height}
                src={data[1].imgTwo.src}
                alt={data[1].imgTwo.alt}
                loading="lazy"
                className="-mt-40 -ml-40  max-lg:ml-0"
              />
            </motion.div>
          </Reveal>
          <Image
            width={31}
            height={85}
            loading="lazy"
            src="/assets/home/about-decoration.svg"
            alt="decoration"
            className="mt-9 max-sm:hidden max-lg:-ml-12 max-lg:hidden"
          />
        </div>
        <div className="section-one-text max-lg:ml-0 flex flex-col items-start justify-center">
          <Reveal>
            <motion.h3
              initial={{ y: -150, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.3 }}
              className="text-header"
            >
              {data[1].time}
            </motion.h3>
          </Reveal>
          <Reveal className="max-lg:flex items-center justify-center">
            <motion.h1
              initial={{ y: -150, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.2 }}
              className="max-lg:mt-0"
            >
              {data[1].title}
            </motion.h1>
          </Reveal>
          <Reveal>
            <motion.q
              initial={{ y: -150, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              {data[1].headLineOne}
            </motion.q>
          </Reveal>
          <Reveal className="max-lg:flex flex-col items-center justify-center">
            <motion.p
              initial={{ y: -150, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              {data[1].headLineTwo}
            </motion.p>
          </Reveal>
          <a
            href={data[1].btn.href}
            className="px-7 py-4 text-white bg-header rounded hover:text-red-500 duration-200 hover:bg-white border border-red-500/60"
          >
            {data[1].btn.text}
          </a>
        </div>
      </div>
      <Reveal>
        <motion.div
          initial={{ y: 150, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="form mt-10"
        >
          <h1>
            {data[2].title.text}
            <span className="text-header">{data[2].title.span}</span>
          </h1>
          <h2 className="flex items-center justify-center">
            <span>
              <Image
                width={36}
                height={36}
                loading="lazy"
                src="/assets/home/arrow-icon.svg"
                alt="arrow"
                className="mr-2"
              />
            </span>
            {data[2].headLine}
          </h2>
          <form className="pb-29 max-sm:pb-5">
            <div className="flex justify-center max-lg:items-center max-lg:flex-col">
              <input
                type="text"
                placeholder="Enter your name"
                className="max-lg:mx-4 focus:outline-blue-300"
              />
              <input
                type="email"
                placeholder="Enter your email"
                className="mx-4 max-lg:my-4 focus:outline-blue-300"
              />
              <button className="max-lg:mx-4 text-white bg-header font-semibold rounded">
                {data[2].btn.text}
              </button>
            </div>
            <p className="flex items-center justify-center terms-and-condition max-sm:text-xs">
              <span>
                <input type="checkbox" className="mx-2" />
              </span>
              <span>
                By signing up you agree to our
                <a href="/" className="text-header ml-1 leading-7">
                  Terms & Conditions.
                </a>
              </span>
            </p>
          </form>
        </motion.div>
      </Reveal>
    </section>
  );
}

function Experience() {
  //toggle video popup div
  const [isVideo, setIsVideo] = useState(false);

  //modal button click handler
  const toggleVideo = () => {
    setIsVideo(!isVideo);
    if (!isVideo) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  };

  const thumbnail = "url(" + data[3].video.img.thumbnail + ")";

  return (
    <section className="section-three">
      {isVideo && (
        <div
          className="video-popup fixed top-0 z-50 felx items-center justify-center w-full h-screen bg-black/50"
          onClick={() => toggleVideo()}
        >
          <YoutubeEmbed embedId={data[3].video.embedId} />
        </div>
      )}
      <div className="flex items-center justify-center pt-36 mb-96 max-sm:pt-12 max-xl:flex-col max-sm:mb-40">
        <div className="mr-10 left-content max-xl:mx-0 max-xl:mb-7">
          <img
            src="/assets/home/exp-profit-card.svg"
            alt="img"
            loading="lazy"
            className="card-one"
          />
            <motion.img
              initial={{ y: 250, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.3, delay:0.3 }}
              src={data[3].imgOne.src}
              alt={data[3].imgOne.alt}
              loading="lazy"
              className="exp-img-one"
            />
            <motion.img
              initial={{ y: -250, opacity: 0 }}
              animate={{ y: 50, opacity: 1 }}
              transition={{ duration: 0.3, delay:0.3 }}
              src={data[3].imgTwo.src}
              alt={data[3].imgTwo.alt}
              loading="lazy"
              className="exp-img-two"
            />
          <img
            src="/assets/home/exp-ratting-card.svg"
            alt="img"
            loading="lazy"
            className="card-two"
          />
        </div>
        <div className="ml-10 max-lg:flex max-lg:flex-col max-lg:items-center max-lg:justify-center max-xl:text-center max-sm:w-full max-sm:ml-0">
          <Reveal>
            <motion.h3
              initial={{ y: -150, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              {data[3].headLineOne}
            </motion.h3>
          </Reveal>
          <Reveal className="max-lg:flex items-center justify-center">
            <motion.h1
              initial={{ y: -150, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.2 }}
              className="max-sm:max-w-xs max-sm:h-auto"
            >
              {data[3].title}
            </motion.h1>
          </Reveal>
          <Reveal className="max-lg:flex items-center justify-center">
            <motion.p
              initial={{ y: -150, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.3 }}
              className="my-5"
            >
              {data[3].headLineTwo}
            </motion.p>
          </Reveal>
          <div className="mt-5 max-sm:w-11/12 max-sm:flex flex-col items-center justify-center max-sm:items-start max-sm:ml-8">
            <h4>{data[3].exp.marketing}</h4>
            <div className="bar">
              <Reveal>
                <motion.div
                  initial={{ x: -250 }}
                  animate={{ x: 0 }}
                  className="bar-one"
                ></motion.div>
              </Reveal>
            </div>
          </div>
          <div className="mt-5 max-sm:w-11/12 max-sm:flex flex-col items-center justify-center max-sm:items-start max-sm:ml-8">
            <h4>{data[3].exp.development}</h4>
            <div className="bar">
              <Reveal>
                <motion.div
                  initial={{ x: -250 }}
                  animate={{ x: 0 }}
                  className="bar-two"
                ></motion.div>
              </Reveal>
            </div>
          </div>
          <div className="mt-5 max-sm:w-11/12 max-sm:flex flex-col items-center justify-center max-sm:items-start max-sm:ml-8">
            <h4>{data[3].exp.research}</h4>
            <div className="bar">
              <Reveal>
                <motion.div
                  initial={{ x: -200 }}
                  animate={{ x: 0 }}
                  className="bar-three"
                ></motion.div>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-very-light-gray section-three-video flex flex-col items-center justify-center">
        <div className="max-md:flex max-md:flex-col max-md:items-center max-md:justify-center max-md:w-full">
          <div
            style={{ backgroundImage: thumbnail }}
            className="exp-video cursor-pointer relative"
          >
            <Image
              width={970}
              height={500}
              loading="lazy"
              src="/assets/home/exp-video-effect.svg"
              alt="video"
              className="exp-video-effect"
            />
            <div className="absolute w-full h-auto flex justify-between items-center bottom-0 ">
              <button
                className="m-7 max-md:scale-75 max-md:m-5 max-sm:m-0 max-sm:scale-50"
                onClick={() => toggleVideo()}
              >
                <img src="/assets/video-play-icon.svg" alt="icon" loading="lazy" />
              </button>
              <img
                className="m-7 max-md:scale-75 max-md:m-5 max-sm:m-0 max-sm:scale-50"
                src="/assets/video-duration.svg"
                loading="lazy"
                alt="icon"
              />
            </div>
          </div>
        </div>
        <Reveal>
          <motion.h2
            initial={{ y: -150, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className="max-sm:text-center"
          >
            {data[3].video.title}
          </motion.h2>
        </Reveal>
        <Reveal className="max-lg:flex items-center justify-center">
          <motion.p
            initial={{ y: -150, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="text-center"
          >
            {data[3].video.headLine}
          </motion.p>
        </Reveal>
        <div className="flex items-center justify-center w-full gap-64 max-md:gap-4 mt-13 pb-29 max-sm:pb-14 max-md:flex-col">
          <div className="flex flex-col items-center justify-center">
            <Reveal>
              <h5>
                <CountUp
                  start={0}
                  end={data[3].details[0].num}
                  duration={2}
                ></CountUp>
                %
              </h5>
            </Reveal>
            <h6 className="text-center">{data[3].details[0].title}</h6>
          </div>
          <div className="flex flex-col items-center justify-center max-md:my-5">
            <Reveal>
              <h5>
                <CountUp
                  start={0}
                  end={data[3].details[1].num}
                  duration={2}
                ></CountUp>
                x
              </h5>
            </Reveal>
            <h6 className="text-center">{data[3].details[1].title}</h6>
          </div>
          <div className="flex flex-col items-center justify-center">
            <Reveal>
              <h5>
                <CountUp
                  start={0}
                  end={data[3].details[2].num}
                  duration={2}
                ></CountUp>
                K
              </h5>
            </Reveal>
            <h6 className="text-center">{data[3].details[2].title}</h6>
          </div>
        </div>
      </div>
    </section>
  );
}
function WhatNext() {
  return (
    <section className="w-full h-auto flex items-center justify-center bg-color">
      <div className="what-next overflow-hidden">
        <Reveal>
          <motion.h1
            initial={{ x: -150, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.3, delay:0.3 }}
          >
            {data[4].title}
          </motion.h1>
        </Reveal>
        <Reveal>
          <motion.p
            initial={{ x: 150, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.3, delay:0.3 }}
            className="mt-3"
          >
            {data[4].headLine}
          </motion.p>
        </Reveal>
        <div className="flex items-center justify-evenly mt-14 max-lg:flex-col">
          {data[4].contactOptions.map((props, i) => {
            return (
              <Reveal key={props.id}>
                <motion.div
                  initial={{ y: 150, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.2 * i }}
                  className="flex flex-col items-center justify-center max-lg:py-5"
                >
                  <img className="w-8 h-8" src={props.icon} alt="icon" loading="lazy" />
                  <h2>{props.title}</h2>
                  <h3>{props.discription}</h3>
                  <a
                    href={props.href}
                    className="bg-red-500 hover:bg-white hover:text-red-500 duration-200 text-white "
                  >
                    {props.method}
                  </a>
                </motion.div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Blog() {
  return (
    <section className="blogpost flex flex-col items-center justify-center overflow-hidden">
      <Reveal>
        <motion.h3
          initial={{ x: -150, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.3,delay:0.3 }}
        >
          Our Blogpost
        </motion.h3>
      </Reveal>
      <Reveal>
        <motion.h1
          initial={{ x: 150, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.3,delay:0.3 }}
        >
          Our Daily Blogpost
        </motion.h1>
      </Reveal>
      <div className="flex items-center justify-center  mb-28 mt-16 post-div max-sm:mb-20">
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
                  loading="lazy"
                  alt="img"
                  className="postImg"
                />
                <div className="flex items-center justify-center post-info">
                  <h2 className="text-black/40 font-medium pr-3 flex items-center border-r">
                    <span>
                      <Image
                        src="/assets/icon-user.svg"
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
                        src="/assets/icon-folder.svg"
                        width={14}
                        height={10}
                        loading="lazy"
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
              transition={{ duration: 0.3,delay:0.3 }}
              loading="lazy"
              src="/assets/logo-dark.svg"
              alt="logo"
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
        <div className="max-md:my-0">
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
      <div className="w-full h-24 flex justify-center items-center border-t mt-24 max-sm:mt-8">
        <Reveal>
          <motion.p
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3,delay:0.3 }}
            className=" text-center w-full pt-0"
          >
            ©2021 All Rights Reserved. With Design by Loyalcoders
          </motion.p>
        </Reveal>
      </div>
    </footer>
  );
}
