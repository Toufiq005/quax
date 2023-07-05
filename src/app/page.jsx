"use client";

import "./home.css";
import { useState } from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar/Navbar";
import Decoration from "@/components/Decoration/Decoration";
import ServiceSection from "@/components/Sections/ServiceSection/ServiceSection";
import PricingSection from "@/components/Sections/PricingSection/PricingSection";
import Testimonial from "@/components/Testimonial/Testimonial";
import blogData from "../data/home-blogpost";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

export default function Home() {
  return (
    <>
      <Navbar bgColor="bg-dark-blue" textColor="text-white" homePage={true} />
      <Header />
      <AboutCompany />
      <ServiceSection />
      <Experience />
      <PricingSection />
      <WhatNext />
      <Testimonial />
      <Blog />
    </>
  );
}

function Header() {
  return (
    <header className="relative flex items-center justify-evenly parent overflow-hidden">
      <div className="hero max-lg:flex-col max-lg:mt-28">
        <div className="max-lg:flex max-lg:flex-col max-lg:justify-center max-lg:text-center max-lg:items-center max-sm:mt-28">
          <motion.h1
            initial={{ y: -150, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className="max-lg:text-4xl"
          >
            Guiding Your Business to Achieve Online Success
          </motion.h1>
          <motion.p
            initial={{ y: -100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="mt-5 mb-16 max-lg:text-sm "
          >
            Me old mucker knackered a load of old tosh wellies amongst lost the
            plot say bodge tickety boo.!s
          </motion.p>
          <div>
            <a
              href="#price"
              className="px-7 py-4 text-white bg-header rounded hover:text-red-500 hover:bg-white "
            >
              PURCHES NOW
            </a>
          </div>
        </div>
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="-mt-6 max-lg:ml-0 hero-img"
        >
          <Image
            width={470}
            height={580}
            src="/assets/home/hero-image.webp"
            alt="heroImg"
          />
        </motion.div>
      </div>

      <Decoration />
    </header>
  );
}

function AboutCompany() {
  return (
    <section className="section-one">
      <div className="flex gap-16 items-center justify-center w-full pt-29 max-lg:flex-col">
        <div className="flex items-start justify-end w-1/2 max-lg:w-4/5 max-lg:mr-0">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <Image
              width={500}
              height={400}
              src="/assets/home/about-image.webp"
              alt="img"
            />
            <Image
              width={410}
              height={222}
              src="/assets/home/about-vector.svg"
              alt="img"
              className="-mt-40 -ml-40  max-lg:ml-0"
            />
          </motion.div>
          <Image
            width={31}
            height={85}
            src="/assets/home/about-decoration.svg"
            alt="decoration"
            className="mt-9 max-sm:hidden max-lg:-ml-12"
          />
        </div>
        <div className="section-one-text max-lg:ml-0 flex flex-col items-start justify-center">
          <motion.h3
            initial={{ y: -150, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.3 }}
            className="text-header"
          >
            EST. 1987
          </motion.h3>
          <motion.h1
            initial={{ y: -150, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.2 }}
            className="max-lg:text-4xl max-lg:mt-0"
          >
            Built For You, <br/> By People Who Care
          </motion.h1>
          <motion.q
            initial={{ y: -150, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            Recognizing the need is the primary condition for design
          </motion.q>
          <motion.p
            initial={{ y: -150, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            Pick a template, customize the content and design elements, and
            launch! Or, design your next fabulous email on your own with our
            simple visual builder.
          </motion.p>
          <a
            href="/"
            className="px-7 py-4 text-white bg-header rounded hover:text-red-500 duration-200 hover:bg-white border border-red-500/60"
          >
            DISCOVER MORE
          </a>
        </div>
      </div>
      <motion.div
        initial={{ y: 150, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="form mt-10"
      >
        <h1>
          Get Started <span className="text-header">- Its free</span>
        </h1>
        <h2 className="flex items-center justify-center">
          <span>
            <Image
              width={36}
              height={36}
              src="/assets/home/arrow-icon.svg"
              alt="arrow"
            />
          </span>
          Start Your 14-Days Free Trial
        </h2>
        <form className="pb-29">
          <div className="flex justify-center max-lg:items-center max-lg:flex-col">
            <input
              type="text"
              placeholder="Enter your name"
              className="max-lg:mx-4"
            />
            <input
              type="email"
              placeholder="Enter your email"
              className="mx-4 max-lg:my-4"
            />
            <button className="max-lg:mx-4 text-white bg-header font-semibold rounded hover:text-red-500 hover:bg-white hover:border border-red-500/60">
              Sign Up
            </button>
          </div>
          <p className="flex items-center justify-center max-sm:text-xs">
            <span>
              <input type="checkbox" className="mx-2" />
            </span>
            By signing up you agree to our
            <span className="mx-1">
              <a href="/" className="text-header">
                Terms & Conditions.
              </a>
            </span>
          </p>
        </form>
      </motion.div>
    </section>
  );
}

function Experience() {
  const [counterOn, setCounterOn] = useState(false);

  return (
    <section className="section-three ">
      <div className="flex items-center justify-center pt-36 mb-96 max-xl:flex-col max-sm:mb-40">
        <div className="mr-10 left-content max-xl:mx-0 max-xl:mb-7">
          <Image
            width={180}
            height={60}
            src="/assets/home/exp-profit-card.svg"
            alt="img"
            className="card-one"
          />
          <Image
            width={144}
            height={44}
            src="/assets/home/exp-ratting-card.svg"
            alt="img"
            className="card-two"
          />
          <motion.img
            initial={{ y: 250, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3 }}
            src="/assets/home/exp-image-one.webp"
            alt="img"
            className="exp-img-one"
          />
          <motion.img
            initial={{ y: -250, opacity: 0 }}
            whileInView={{ y: 50, opacity: 1 }}
            transition={{ duration: 0.3 }}
            src="/assets/home/exp-image-two.webp"
            alt="img"
            className="exp-img-two"
          />
        </div>
        <div className="ml-10 max-lg:flex max-lg:flex-col max-lg:items-center max-lg:justify-center max-xl:text-center max-sm:w-full max-sm:ml-0">
          <motion.h3
            initial={{ y: -150, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            Explore & Create
          </motion.h3>
          <motion.h1
            initial={{ y: -150, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.2 }}
            className="max-sm:max-w-xs max-sm:h-auto"
          >
            Bringing new business Solutions and ideas
          </motion.h1>
          <motion.p
            initial={{ y: -150, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.3 }}
            className="my-5"
          >
            Pick a template, customize the content and design elements, and
            launch! Or, design your next fabulous email on your own with our
            simple visual builder.
          </motion.p>
          <div className="mt-5 max-sm:w-full max-sm:flex flex-col items-center justify-center">
            <h4>Social Media Marketing</h4>
            <div className="bar">
              <motion.div
                initial={{ x: -250 }}
                whileInView={{ x: 0 }}
                className="bar-one"
              ></motion.div>
            </div>
          </div>
          <div className="mt-5 max-sm:w-full max-sm:flex flex-col items-center justify-center">
            <h4>Web Development</h4>
            <div className="bar">
              <motion.div
                initial={{ x: -250 }}
                whileInView={{ x: 0 }}
                className="bar-two"
              ></motion.div>
            </div>
          </div>
          <div className="mt-5 max-sm:w-full max-sm:flex flex-col items-center justify-center">
            <h4>Competitor Research</h4>
            <div className="bar">
              <motion.div
                initial={{ x: -200 }}
                whileInView={{ x: 0 }}
                className="bar-three"
              ></motion.div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-very-light-gray section-three-video flex flex-col items-center justify-center">
        <div className="max-md:flex max-md:flex-col max-md:items-center max-md:justify-center max-md:w-full">
          <div className="exp-video cursor-pointer">
            <Image
              width={970}
              height={500}
              src="/assets/home/exp-video-effect.svg"
              alt="video"
              className="exp-video-effect"
            />
          </div>
        </div>
        <motion.h2
          initial={{ y: -150, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.1 }}
          className="max-sm:text-center"
        >
          Spice it up with a wide video
        </motion.h2>
        <motion.p
          initial={{ y: -150, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="text-center"
        >
          This UI Kit uses attractive colors and modern typography to make you
          look good, no matter what business youre in.
        </motion.p>
        <div className="flex items-center justify-center w-full gap-64 max-md:gap-4 mt-13 pb-29 max-md:flex-col">
          <div className="flex flex-col items-center justify-center">
            <ScrollTrigger
              onEnter={() => setCounterOn(true)}
              onExit={() => setCounterOn(false)}
            >
              <h5>
                {counterOn && (
                  <CountUp start={0} end={18} duration={2}></CountUp>
                )}
                %
              </h5>
            </ScrollTrigger>
            <h6 className="text-center">Reduced running costs</h6>
          </div>
          <div className="flex flex-col items-center justify-center max-md:my-5">
            <h5>
              {counterOn && <CountUp start={0} end={4} duration={2}></CountUp>}x
            </h5>
            <h6 className="text-center">Increase in user activity</h6>
          </div>
          <div className="flex flex-col items-center justify-center">
            <h5>
              {counterOn && <CountUp start={0} end={13} duration={2}></CountUp>}
              K
            </h5>
            <h6 className="text-center">Increase in subscribers</h6>
          </div>
        </div>
      </div>
    </section>
  );
}
function WhatNext() {
  const contactOptions = [
    {
      id: 0,
      icon: "",
      title: "Leave a Message",
      discription:
        "Send us the address of your website and your contact number We will get in touch.",
      method: "Write to us",
      href: "/",
    },
    {
      id: 1,
      icon: "",
      title: "Lets Talk!",
      discription:
        "We will then call you or meet to talk about your business goals and priorities.",
      method: "Contact us",
      href: "/",
    },
    {
      id: 2,
      icon: "",
      title: "Leave a Message",
      discription:
        "Send us the address of your website and your contact number We will get in touch.",
      method: "View Plan",
      href: "/",
    },
  ];

  return (
    <section className="w-full h-auto flex items-center justify-center bg-color">
      <div className="what-next overflow-hidden">
        <motion.h1
          initial={{ x: -150, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          Whats Next?
        </motion.h1>
        <motion.p
          initial={{ x: 150, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="mt-3"
        >
          Are you interested in our services? We will arrange a phone call.
        </motion.p>
        <div className="flex items-center justify-evenly mt-14 max-lg:flex-col">
          {contactOptions.map((props, i) => {
            return (
              <motion.div
                initial={{ y: 150, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.2 * i }}
                key={props.id}
                className="flex flex-col items-center justify-center max-lg:py-5"
              >
                <Image
                  width={38}
                  height={38}
                  src="/assets/home/plan.svg"
                  alt="icon"
                />
                <h2>{props.title}</h2>
                <h3>{props.discription}</h3>
                <a
                  href={props.href}
                  className="bg-red-500 hover:bg-white hover:text-red-500 duration-200 text-white "
                >
                  {props.method}
                </a>
              </motion.div>
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
      <motion.h3
        initial={{ x: -150, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        Our Blogpost
      </motion.h3>
      <motion.h1
        initial={{ x: 150, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        Our Daily Blogpost
      </motion.h1>

      <motion.div
        initial={{ y: 150, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="flex items-center justify-center  mb-28 mt-16 post-div"
      >
        {blogData.map((items, i) => {
          return (
            <div
              key={items.id}
              className="post hover:scale-105 duration-500 flex flex-col items-center justify-center"
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
            </div>
          );
        })}
      </motion.div>
    </section>
  );
}
