"use client";

import "./about.css";
import { useState } from "react";
import Image from "next/image";
import Banner from "@/components/Sections/Banner/Banner";
import SubscribeSection from "@/components/Sections/SubscribeSection/SubscribeSection";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareCheck } from "@fortawesome/free-solid-svg-icons";
import "font-awesome/css/font-awesome.min.css";
import TeamMemberSection from "@/components/Sections/TeamMemberSection/TeamMemberSection";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import { motion } from "framer-motion";

export default function About() {
  return (
    <>
      <Banner
        title="About Us"
        description="Pick a template, customize the content and design elements, and launch! Or, design your next fabulous email."
      />
      <AboutSection />
      <WhatWeDo />
      <WhyChoseUS />
      <TeamMemberSection bgColor="bg-very-light-gray" limit={4} />
      <SubscribeSection />
    </>
  );
}

function AboutSection() {
  return (
    <section className="w-full h-auto bg-color flex items-center justify-center">
      <div className="wrapper about-section flex items-center justify-center  max-lg:flex-col max-lg:mt-10">
        <div className="about-section-content max-lg:flex flex-col items-center justify-center">
          <motion.h3
            initial={{ y: -150, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-header font-medium"
          >
            About Us
          </motion.h3>
          <motion.h1
            initial={{ y: -150, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="font-semibold"
          >
            Our Company Story
          </motion.h1>
          <motion.h2
            initial={{ y: -150, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.4 }}
          >
            Recognizing the need is the primary condition for design
          </motion.h2>
          <motion.p
            initial={{ y: -150, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.2 }}
            className="text-light-gray"
          >
            The European languages are members of the same family. Their
            separate existence is a myth. For science, music, sport, etc, Europe
            uses the same vocabulary. The languages only differ in their
            grammar, their pronunciation and their most common words.
          </motion.p>
          <a href="/contact">Contact Us</a>
        </div>

        <motion.div
          initial={{ x: 200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="about-section-image "
        >
          <Image
            width={330}
            height={330}
            src="/assets/about/about-image-one.webp"
            alt="img"
            className="about-section-image-one scale-125"
          />
          <Image
            width={300}
            height={400}
            src="/assets/about/about-image-two.webp"
            alt="img"
            className="about-section-image-two scale-125"
          />
        </motion.div>
      </div>
    </section>
  );
}

function WhatWeDo() {
  const [animationOn, setAnimationOn] = useState(false);

  return (
    <section className="w-full h-auto flex items-center justify-center bg-very-light-gray">
      <div className="wrapper what-we-do flex items-center justify-center max-lg:w-full">
        <motion.div initial={{ x: -200, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ duration: 0.5 }}

          className="what-we-do-image bg-no-repeat flex justify-center mr-5 max-lg:mr-0 max-lg:mt-5"
        >
          <Image
            width={500}
            height={500}
            src="/assets/about/what-we-do.webp"
            alt="img"
          />
        </motion.div>
        <div className="what-we-do-content ml-5 max-lg:flex flex-col items-center justify-center max-lg:ml-0">
          <h3 className="max-lg:pt-10">What We Do</h3>
          <div>
            <h1 className="max-lg:text-center max-lg:mt-5 mr-2">
              Grow Your Business With Us.
            </h1>
          </div>
          <div className="flex items-start justify-center my-5 max-lg:flex-col max-lg:items-center max-lg:text-center max-lg:mt-10">
            <div className="w-16 h-16 bg-header rounded flex items-center justify-center text-lg font-bold text-white mr-7 max-lg:mr-0">
              {animationOn && <CountUp start={0} end={90} duration={3} />}%
            </div>
            <div className="max-lg:mt-3">
              <h2>SEO Optimization</h2>
              <p>
                The European languages are members of the same family. Their
                separate existence is a myth.
              </p>
            </div>
          </div>
          <div className="flex items-start justify-center my-5 max-lg:flex-col max-lg:items-center max-lg:text-center max-lg:mt-10">
            <div className="w-16 h-16 bg-header rounded flex items-center justify-center text-lg font-bold text-white mr-7 max-lg:mr-0">
              {animationOn && <CountUp start={0} end={80} duration={3} />}%
            </div>
            <div className="max-lg:mt-3">
              <ScrollTrigger onEnter={() => setAnimationOn(true)} onExit={() => setAnimationOn(false)}>
                <h2>Business Analytics</h2>
              </ScrollTrigger>
              <p>
                The European languages are members of the same family. Their
                separate existence is a myth.
              </p>
            </div>
          </div>
          <div className="flex items-start justify-center my-5 max-lg:flex-col max-lg:items-center max-lg:text-center max-lg:mt-10">
            <div className="w-16 h-16 bg-header rounded flex items-center justify-center text-lg font-bold text-white mr-7 max-lg:mr-0">
              {animationOn && <CountUp start={0} end={75} duration={3} />}%
            </div>
            <div className="max-lg:mt-3">
              <h2>Web Developments</h2>
              <p>
                The European languages are members of the same family. Their
                separate existence is a myth.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function WhyChoseUS() {
  return (
    <section className="w-full h-auto bg-color flex items-center justify-center">
      <div className="wrapper flex items-center justify-center max-lg:flex-col overflow-hidden">
        <div className="why-chose-us-content mr-12 max-lg:pt-10 max-lg:text-center max-lg:mr-0 max-lg:flex flex-col items-center justify-center">
          <h3>Why Choose Us</h3>
          <h1>Save Your Time & Grow Your Business.</h1>
          <div className="flex mb-7 max-lg:flex-col">
            <div>
              <FontAwesomeIcon
                icon={faSquareCheck}
                className="text-3xl text-header mr-6"
              />
            </div>
            <div>
              <h2>First Working Process</h2>
              <p className="text-light-gray">
                The European languages are members of the same family. Their
                separate existence is a myth.
              </p>
            </div>
          </div>
          <div className="flex mb-7  max-lg:flex-col">
            <div>
              <FontAwesomeIcon
                icon={faSquareCheck}
                className="text-3xl text-header mr-6"
              />
            </div>
            <div>
              <h2>Skillful Team Member</h2>
              <p className="text-light-gray">
                The European languages are members of the same family. Their
                separate existence is a myth.
              </p>
            </div>
          </div>
          <div className="flex mb-7 max-lg:flex-col">
            <div>
              <FontAwesomeIcon
                icon={faSquareCheck}
                className="text-3xl text-header mr-6"
              />
            </div>
            <div>
              <h2>24/7 Hours Support</h2>
              <p className="text-light-gray">
                The European languages are members of the same family. Their
                separate existence is a myth.
              </p>
            </div>
          </div>
        </div>
        <motion.div
          initial={{ x: 200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="why-chose-us-image ml-12 max-lg:ml-5 max-lg:m-5 overflow-hidden"
        >
          <Image
            width={470}
            height={600}
            src="/assets/about/why-chose-us.webp"
            alt=""
          />
        </motion.div>
      </div>
    </section>
  );
}
