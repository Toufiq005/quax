"use client";

import "./homePageTwo.css";
import { useState } from "react";
import testimonialData from "@/data/testimonial";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import Navbar from "@/components/Navbar/Navbar";
import Image from "next/image";
import "../../../node_modules/font-awesome/css/font-awesome.min.css";
import blogData from "@/data/home-blogpost";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPenToSquare,
  faLightbulb,
  faDesktop,
  faPieChart,
  faHeadphones,
  faArrowUp,
  faArrowDown,
  faPhone,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";
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

export default function page() {
  return (
    <>
      <Navbar
        textColor="text-white hover:text-blue-500"
        bgColor="bg-transparent"
        pageIndex={3}
      />
      <Header />
      <About />
      <Analysis />
      <HowItWrok />
      <Testimonial />
      <TeamMemberSection bgColor="mt-40 max-sm:pt-64" limit={4} pageIndex={2} />
      <PricingSection />
      <Blog />
      <SubscribeSection />
      <Footer />
    </>
  );
}

function Header() {
  return (
    <header className="w-full h-auto min-h-screen flex items-center justify-center home-two relative -top-25 overflow-hidden">
      <div className="wrapper w-full flex items-center justify-between max-xl:flex-col">
        <Reveal className="header-left-content max-xl:flex flex-col items-center justify-center">
          <motion.h1
            initial={{ y: -150, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.3 }}
            className="max-xl:pt-28 max-xl:text-center"
          >
            Your business find SEO Solutions
          </motion.h1>
          <motion.h2
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.3 }}
            className="mb-10 max-xl:text-center"
          >
            Me old mucker knackered a load of old tosh wellies amongst lost the
            plot.!
          </motion.h2>
          <a href="/" className="flex items-center justify-center mb-10">
            PURCHASE NOW
          </a>
          <p className="mb-6">
            Join over 100+ real people who have worked with us
          </p>
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
        <Reveal className="relative max-xl:top-32 max-sm:m-3">
          <motion.img
            initial={{ y: -150, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.4 }}
            src="/assets/home-two/hero-img.webp"
            alt="hero-img"
          />
          <motion.img
            initial={{ x: -150, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.4 }}
            src="/assets/home-two/hero-card.svg"
            alt="hero-card"
            className="relative -top-96 -left-16 max-sm:left-0"
          />
        </Reveal>
      </div>
      {/* <DecorationTwo/> */}
    </header>
  );
}

function About() {
  const [aboutIndex, setAboutIndex] = useState(0);

  const aboutData = [
    {
      id: 0,
      name: "Idea & Concept",
      title: "Lorem ipsum dolor sit amet, consectetur...",
      href: "#",
      img: "/assets/home-two/about/about-top-image.webp",
      icon: faPenToSquare,
    },
    {
      id: 1,
      name: "Infrastructure Plan",
      title: "Lorem ipsum dolor sit amet, consectetur...",
      href: "#",
      img: "/assets/home-two/about/about-top-image.webp",
      icon: faLightbulb,
    },
    {
      id: 2,
      name: "Desktop Computing",
      title: "Lorem ipsum dolor sit amet, consectetur...",
      href: "#",
      img: "/assets/home-two/about/about-top-image.webp",
      icon: faDesktop,
    },
    {
      id: 3,
      name: "UI Kit Template",
      title: "Lorem ipsum dolor sit amet, consectetur...",
      href: "#",
      img: "/assets/home-two/about/about-top-image.webp",
      icon: faPieChart,
    },
    {
      id: 4,
      name: "Support & Secure",
      title: "Lorem ipsum dolor sit amet, consectetur...",
      href: "#",
      img: "/assets/home-two/about/about-top-image.webp",
      icon: faHeadphones,
    },
  ];

  const companies = [
    {
      id: 1,
      name: "WordPress",
      icon: "/assets/home-two/about/word-press.svg",
      href: "#",
    },
    {
      id: 2,
      name: "WooCommerce",
      icon: "/assets/home-two/about/woo-commerce.svg",
      href: "#",
    },
    {
      id: 3,
      name: "Envato",
      icon: "/assets/home-two/about/envato.svg",
      href: "#",
    },
    {
      id: 4,
      name: "CitiBank",
      icon: "/assets/home-two/about/citibank.svg",
      href: "#",
    },
    {
      id: 5,
      name: "Magneto",
      icon: "/assets/home-two/about/magneto.svg",
      href: "#",
    },
  ];

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
              How we can level up your business
            </motion.h1>
            <motion.p
              initial={{ x: -150, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.3 }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit dolor sit
              amet.
            </motion.p>
          </Reveal>
          <div className="top-content-container max-xl:flex-col max-xl:items-center max-xl:justify-center">
            <div className="left flex flex-col items-center justify-center overflow-hidden ">
              {aboutData.map((item, i) => (
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
              <img src={aboutData[aboutIndex].img} alt="about-img" />
              <Reveal className="w-full relative bg-blue-500/90 h-25 rounded-br-xl rounded-bl-xl -top-25 flex justify-between items-center overflow-hidden">
                <motion.div
                  initial={{ y: 150, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.3 }}
                  className="ml-10 max-sm:ml-3"
                >
                  <h2 className="text-1xl text-white font-semibold mb-2">
                    {aboutData[aboutIndex].name}
                  </h2>
                  <h4>{aboutData[aboutIndex].title}</h4>
                </motion.div>
                <a
                  href={aboutData[aboutIndex].href}
                  className="mr-10 max-sm:mr-3 flex items-center justify-center"
                >
                  VIEW MORE
                </a>
              </Reveal>
            </div>
          </div>
        </div>
        <div className="middle-content w-full pt-28 max-sm:pt-0 max-sm:-mt-20 flex flex-col items-center justify-center">
          <h1>Join 400+ other companies who switched</h1>
          <div className="w-full flex items-center justify-between mt-13 max-xl:flex-col max-xl:gap-4">
            {companies.map((item, i) => {
              return (
                <div key={item.id} title={item.name}>
                  <Reveal>
                    <motion.a initial={{ y: -100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.3, delay: 0.3 * i }} href={item.href}>
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
              src="/assets/home-two/about/about-image-one.webp"
              alt="about-image"
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
              src="/assets/home-two/about/about-card-one.webp"
              alt="card"
              className="relative about-two-card"
            />
          </Reveal>
          <Reveal className="right max-xl:flex flex-col items-center justify-center">
            <motion.h1 initial={{ x: 150, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.3, delay: 0.3 }} className="mb-6 mt-12">What people Think about company</motion.h1>
            <motion.p initial={{ x: -150, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.3, delay: 0.6 }}>
              Owt to do with me jolly good a cheers barmy arse over tit you mug
              say the little rotter, pukka cack pardon me golly gosh what a
              load.!s
            </motion.p>
            <div className="flex items-start justify-start gap-13 mt-6 max-sm:flex-col max-sm:gap-5 max-xl:items-center max-xl:justify-center">
              <Reveal>
                <h3>
                  <CountUp start={0} end={8} delay={0.9} duration={3}/>.<CountUp start={0} end={44} delay={0.9} duration={3}/>%
                  <span className="ml-4 text-2xl text-green-500">
                    <FontAwesomeIcon icon={faArrowUp} />
                  </span>
                </h3>
                <p className="mt-1">Increase in monthly</p>
              </Reveal>
              <Reveal>
                <h3>
                  <CountUp start={0} end={1} delay={0.9} duration={3}/>.0<CountUp start={0} end={8} delay={0.9} duration={3}/>%
                  <span className="ml-4 text-2xl text-red-500">
                    <FontAwesomeIcon icon={faArrowDown} />
                  </span>
                </h3>
                <p className="mt-1">Decrease in yearly</p>
              </Reveal>
            </div>
            <motion.a initial={{ x: 150, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.3, delay: 0.9 }} href="#" className="flex items-center justify-center mt-10">
              ANALYZE WEBSITE
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
          <motion.h1 initial={{ x: 150, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.3, delay: 0.3 }} className="mb-6">We're the perfect local business assists</motion.h1>
          <motion.p initial={{ x: -150, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.3, delay: 0.6 }} className="mb-6">
            The new common language will be more simple and regular than the
            existing European languages. It will be as simple as Occidental; in
            fact, it will be Occidental. To an English
          </motion.p>
          <motion.h3 initial={{ x: 150, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.3, delay: 0.9 }} className="mb-6">Need Help? Talk to An Expert</motion.h3>
          <motion.h2 initial={{ x: -150, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.3, delay: 0.9 }}>
            <span className="mr-4">
              <FontAwesomeIcon icon={faPhone} />
            </span>
            +1-844-562-6896
          </motion.h2>
        </Reveal>
        <div className="right max-sm:w-full max-sm:flex items-center justify-center">
          <form className="flex flex-col items-center justify-center">
            <div className="max-sm:w-full">
              <h1 className="mb-5 max-sm:w-4/5 max-sm:ml-10">
                Get Free SEO Analysis?
              </h1>
              <Reveal className="max-sm:w-4/5 max-sm:ml-10">
                <motion.h2 initial={{ y: -100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.3, delay: 0.3 }}>Full Name</motion.h2>
                <input
                  type="text"
                  placeholder="&#xf007;    Type Hear"
                  className="focus:outline-blue-300"
                />
              </Reveal>
              <Reveal className="max-sm:w-4/5 max-sm:ml-10">
                <motion.h2 initial={{ y: -100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.3, delay: 0.6 }}>Work email</motion.h2>
                <input
                  type="text"
                  placeholder="&#xf0e0;    Type Hear"
                  className="focus:outline-blue-300"
                />
              </Reveal>
              <Reveal className="max-sm:w-4/5 max-sm:ml-10">
                <motion.h2 initial={{ y: -100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.3, delay: 0.9 }}>Website</motion.h2>
                <input
                  type="text"
                  placeholder="&#xf0ac;    Type Hear"
                  className="focus:outline-blue-300"
                />
              </Reveal>
              <button className="max-sm:w-4/5 max-sm:ml-10">
                SEND MESSAGE
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

  const data = [
    {
      id: 0,
      name: "SEND MESSAGE",
      title: "It's all about The people, and process",
      href: "#",
      points: {
        1: "Analyze the date",
        2: "Create template",
        3: "SEO Content Strategy",
        4: "Content Marketing",
        5: "Flexible and responsive",
      },
    },
    {
      id: 1,
      name: "SEO",
      title: "It's all about The people, and process",
      href: "#",
      points: {
        1: "Analyze the date",
        2: "Create template",
        3: "SEO Content Strategy",
        4: "Content Marketing",
        5: "Flexible and responsive",
      },
    },
    {
      id: 2,
      name: "WEB MONITORING",
      title: "It's all about The people, and process",
      href: "#",
      points: {
        1: "Analyze the date",
        2: "Create template",
        3: "SEO Content Strategy",
        4: "Content Marketing",
        5: "Flexible and responsive",
      },
    },
    {
      id: 3,
      name: "RESEARCH",
      title: "It's all about The people, and process",
      href: "#",
      points: {
        1: "Analyze the date",
        2: "Create template",
        3: "SEO Content Strategy",
        4: "Content Marketing",
        5: "Flexible and responsive",
      },
    },
  ];

  return (
    <section className="w-full h-auto flex items-center justify-center overflow-hidden">
      <div className="wrapper how-it-work">
        <Reveal className="flex flex-col items-center">
          <motion.h1 initial={{ x: -150, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.3, delay: 0.3 }} className="mb-6">How we can level up your business</motion.h1>
          <motion.h3 initial={{ x: 150, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.3, delay: 0.3 }} className="mb-16">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit dolor sit
            amet.
          </motion.h3>
        </Reveal>
        <div>
          <Reveal className="flex items-center justify-center gap-7 mt-2 max-xl:flex-col">
            {data.map((props) => {
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
              <motion.h2 initial={{ y: 150, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.3, delay: 0.3 }} className="mb-10 max-xl:text-center">{data[index].title}</motion.h2>
              <motion.p initial={{ x: 150, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.3, delay: 0.3 }} className="mb-5 max-xl:text-center">
                <span>
                  <FontAwesomeIcon
                    icon={faCheck}
                    className="text-blue-500 mr-3"
                  />
                </span>
                {data[index].points[1]}
              </motion.p>
              <motion.p initial={{ x: 150, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.3, delay: 0.6 }} className="mb-5 max-xl:text-center">
                <span>
                  <FontAwesomeIcon
                    icon={faCheck}
                    className="text-blue-500 mr-3"
                  />
                </span>
                {data[index].points[2]}
              </motion.p>
              <motion.p initial={{ x: 150, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.3, delay: 0.9 }} className="mb-5 max-xl:text-center">
                <span>
                  <FontAwesomeIcon
                    icon={faCheck}
                    className="text-blue-500 mr-3"
                  />
                </span>
                {data[index].points[3]}
              </motion.p>
              <motion.p initial={{ x: 150, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.3, delay: 1.2 }} className="mb-5 max-xl:text-center">
                <span>
                  <FontAwesomeIcon
                    icon={faCheck}
                    className="text-blue-500 mr-3"
                  />
                </span>
                {data[index].points[4]}
              </motion.p>
              <motion.p initial={{ x: 150, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.3, delay: 1.5 }} className="mb-10 max-xl:text-center">
                <span>
                  <FontAwesomeIcon
                    icon={faCheck}
                    className="text-blue-500 mr-3"
                  />
                </span>
                {data[index].points[5]}
              </motion.p>
              <a
                href={data[index].href}
                className="how-it-work-button-active flex items-center justify-center"
              >
                TRY SEO TOOLKIT
              </a>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

function Testimonial() {
  const data = [
    {
      id: 1,
      numbers: 104,
      name: "Happy Quantum Usars",
      icon: "/assets/home-two/testimonial/testimonial-two-happy-face.svg",
    },
    {
      id: 2,
      numbers: 306,
      name: "Successfull Projects",
      icon: "/assets/home-two/testimonial/testimonial-two-successful-projects.svg",
    },
    {
      id: 3,
      numbers: 208,
      name: "Positive Feedback",
      icon: "/assets/home-two/testimonial/testimonial-two-positive-feedback.svg",
    },
    {
      id: 4,
      numbers: 440,
      name: "Positive Feedback",
      icon: "/assets/home-two/testimonial/testimonial-two-blog-post.svg",
    },
  ];

  return (
    <section className="w-full h-auto items-center justify-center bg-very-light-gray">
      <div className="pt-29 testimonial-two">
        <div className="flex w-full items-center justify-center gap-28 max-xl:flex-col max-xl:gap-10">
          {data.map((item) => {
            return (
              <Reveal
                key={item.id}
                className="flex flex-col items-center justify-center"
              >
                <img src={item.icon} alt="testimonial" />
                <h1><CountUp start={0} end={item.numbers} duration={4} delay={0.3} />+</h1>
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
  const data = [
    {
      id: 0,
      plan: "STARTER PLAN",
      title: "Bunc id tincidunt duis faucibus urna Adipiscing. Id lorem diam.",
      link: "/",
      price: "$0",
      bulletPoint: {
        1: "10 hours of support",
        2: "Advanced analytic",
        3: "Free hosting",
        4: "A Dedicated Domain",
        5: "2GB of storage space",
      },
    },
    {
      id: 1,
      plan: "REGULAR PLAN",
      title: "Bunc id tincidunt duis faucibus urna Adipiscing. Id lorem diam.",
      link: "/",
      price: "$50",
      bulletPoint: {
        1: "Unlimited of support",
        2: "Advanced analytic",
        3: "Free hosting",
        4: "1 Dedicated Domain",
        5: "10GB of storage space",
      },
    },
    {
      id: 2,
      plan: "PREMIUM PLAN",
      title: "Bunc id tincidunt duis faucibus urna Adipiscing. Id lorem diam.",
      link: "/",
      price: "$100",
      bulletPoint: {
        1: "Unlimited of support",
        2: "Advanced analytic",
        3: "Free hosting",
        4: "2 Dedicated Domain",
        5: "20GB of storage space",
      },
    },
  ];

  return (
    <section className="w-full h-auto flex items-center justify-center pricing-section-two overflow-hidden">
      <div className="wrapper">
        <Reveal className="flex flex-col items-center justify-center">
          <motion.h1 initial={{ x: 150, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.3 }}>Simple Scalable Pricing.</motion.h1>
          <motion.p initial={{ x: 150, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.3 }}>Lorem ipsum dolor sit amet, consectur adipiscing elit.</motion.p>
        </Reveal>
        <Reveal className="w-full flex items-center justify-between mt-16 max-xl:flex-col max-xl:gap-8">
          {data.map((props) => {
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
