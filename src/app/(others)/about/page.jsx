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
import { motion,} from "framer-motion";
import data from "@/data/pages/about.js";
import Reveal from "@/components/ui/Reveal/Reveal";
import Loading from "@/components/ui/Loading/Loading";

export default function About() {
  return (
    <Loading>
      <Banner title={data[0].title} description={data[0].headLine} />
      <AboutSection />
      <WhatWeDo />
      <WhyChoseUS />
      <TeamMemberSection
        bgColor="bg-very-light-gray"
        limit={4}
        title="Our Marketing expertise"
        headLine="Lorem ipsum dolor sit amet, consectetur adipiscing elit dolor sit amet."
      />
      <SubscribeSection />
    </Loading>
  );
}

function AboutSection() {
  return (
    <section className="w-full h-auto bg-color flex items-center justify-center">
      <div className="wrapper about-section flex items-center justify-center pb-29 mt-10 max-lg:flex-col max-lg:mt-10 overflow-hidden">
        <div className="about-section-content max-lg:flex flex-col items-center justify-center ">
          <h3 className="text-header font-medium">{data[1].headLineOne}</h3>
          <h1 className="font-semibold">{data[1].title}</h1>
          <q>{data[1].headLineTwo}</q>
          <p className="text-light-gray">{data[1].discription}</p>
          <a href={data[1].btn.href}>{data[1].btn.text}</a>
        </div>
        <Reveal className="about-section-image ">
            <motion.img
              initial={{ x: -150, opacity: 0, filter: "blur(20px)" }}
              animate={{ x: 0, opacity: 1, filter: "blur(0px)" }}
              transition={{duration:0.4, delay:0.3}}
              src={data[1].imgOne.src}
              alt={data[1].imgOne.alt}
              loading="lazy"
              className="about-section-image-one"
            />
            <motion.img
              initial={{ y: -150, opacity: 0, filter: "blur(20px)" }}
              animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
              transition={{duration:0.4, delay:0.7}}
              src={data[1].imgTwo.src}
              alt={data[1].imgTwo.alt}
              loading="lazy"
              className="about-section-image-two"
            />
        </Reveal>
      </div>
    </section>
  );
}

function WhatWeDo() {
  const [animationOn, setAnimationOn] = useState(false);

  return (
    <section className="w-full h-auto flex items-center justify-center bg-very-light-gray">
      <div className="wrapper what-we-do flex gap-6 items-center justify-center py-29 max-lg:w-full max-md:overflow-hidden">
        <Reveal
          className="what-we-do-image bg-no-repeat flex justify-center mr-5 max-lg:mr-0 max-lg:mt-5 overflow-hidden"
        >
          <motion.img
            initial={{x: -100, opacity: 0, filter: "blur(20px)"}}
            animate={{ x: 0, opacity: 1, filter: "blur(0px)"}}
            transition={{duration:0.4, delay:0.4}}
            width={500}
            height={500}
            src={data[2].imgOne.src}
            alt={data[2].imgOne.alt}
            loading="lazy"
          />
        </Reveal>
        <div className="what-we-do-content ml-5 max-lg:flex flex-col items-center justify-center max-lg:ml-0">
          <h3 className="max-lg:pt-10 mb-2">{data[2].headLine}</h3>
          <ScrollTrigger onEnter={() => setAnimationOn(true)}>
            <h1 className="max-lg:text-center max-lg:mt-5 mb-7">
              {data[2].title}
            </h1>
          </ScrollTrigger>
          <div className="flex flex-col items-center justify-start gap-7">
            {data[2].data.map((props) => {
              return (
                <div
                  key={props.id}
                  className="flex items-start justify-center max-lg:flex-col max-lg:items-center max-lg:text-center max-lg:mt-10"
                >
                  <div className="w-16 h-16 bg-header rounded flex items-center justify-center text-lg font-bold text-white mr-7 max-lg:mr-0">
                    {animationOn && (
                      <CountUp start={0} end={props.num} duration={3} />
                    )}
                    %
                  </div>
                  <div className="max-lg:mt-3 max-sm:flex flex-col items-center justify-center">
                    <h2 className="mb-3">{props.title}</h2>
                    <p>{props.discription}</p>
                  </div>
                </div>
              );
            })}
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
          <h3 className="mb-2">{data[3].headLine}</h3>
          <h1 className="mb-10">{data[3].title}</h1>
          {data[3].data.map((props) => {
            return (
              <div key={props.id} className="flex mb-7 max-lg:flex-col">
                <div>
                  <FontAwesomeIcon
                    icon={faSquareCheck}
                    className="text-3xl text-header mr-6"
                  />
                </div>
                <div>
                  <h2>{props.title}</h2>
                  <p className="text-light-gray mt-3">{props.discription}</p>
                </div>
              </div>
            );
          })}
        </div>
        <Reveal>
          <motion.div
            initial={{ x: 200, opacity: 0, filter: "blur(20px)" }}
            animate={{ x: 0, opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: 0.5, delay:0.3 }}
            className="why-chose-us-image ml-12 max-lg:ml-5 max-lg:m-5 overflow-hidden"
          >
            <Image
              width={470}
              height={600}
              src={data[3].imgOne.src}
              alt={data[3].imgOne.alt}
              loading="lazy"
            />
          </motion.div>
        </Reveal>
      </div>
    </section>
  );
}
