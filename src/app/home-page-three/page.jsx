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
  faBullhorn,
  faChartLine,
  faCheck,
  faFolderPlus,
} from "@fortawesome/free-solid-svg-icons";
import { faBookmark, faCircleCheck } from "@fortawesome/free-regular-svg-icons";
import { faFacebookF, faVimeoV, faTwitter } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { useRef } from "react";
import "swiper/css";
import "swiper/css/navigation";

export default function page() {
  return (
    <>
      <Navbar
        pageIndex={3}
        textColor="text-white hover:text-red-500"
        bgColor="bg-transparent"
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
      <TeamMemberSection limit={4} pageIndex={2} />
      <Testimonial/>
      <Footer/>
    </>
  );
}

function Header() {
  return (
    <header className="w-full h-auto min-h-screen flex items-center justify-center home-page-three relative -top-25 left-0 overflow-hidden">
      <div className="wrapper flex items-center justify-between my-28 max-xl:flex-col max-xl:justify-center max-xl:gap-20">
        <Reveal className="left-content max-xl:flex flex-col items-center justify-center">
          <motion.p initial={{ x: 150, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.3, delay: 0.3 }} className="mb-3">You deserve a stuning website</motion.p>
          <motion.h1 initial={{ x: -150, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.3, delay: 0.6 }} className="mb-5 max-xl:text-center">
            Rank your local business with SEO
          </motion.h1>
          <motion.h2 initial={{ x: -150, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.3, delay: 0.9 }} className="mb-10 max-xl:text-center">
            Posh plasterd dropped a clanger jeffey beffrey blimey beeding
            knackerd weel, bleeder spiffing.
          </motion.h2>
          <div className="flex items-center justify-start gap-8">
            <motion.a initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.3, delay: 0.9 }} href="#" className="flex items-center justify-center">
              Contact Today
            </motion.a>
            <motion.a initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.3, delay: 1.2 }} href="#" className="flex items-center justify-center">
              Free Analysis
            </motion.a>
          </div>
        </Reveal>
        <Reveal className="right-content relative">
          <img
            src="/assets/home-three/home-three-decoration.svg"
            alt="image"
            className="absolute top-0 -right-12 max-2xl:right-0 max-sm:left-40"
          />
          <motion.img
          initial={{ y: -150, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.9 }}
            src="/assets/home-three/home-three-image-one.webp"
            alt="image"
            className="absolute top-0 left-17 max-sm:left-0"
          />
          <motion.img
          initial={{ y: 150, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3, delay: 1.2 }}
            src="/assets/home-three/home-three-image-two.webp"
            alt="image"
            className="absolute top-74 -right-28 max-2xl:right-0 max-sm:left-32"
          />
        </Reveal>
      </div>
      <DecorationTwo/>
    </header>
  );
}

function CompanyLogo() {
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
      <div className="w-wrapper h-auto flex flex-col items-center justify-center">
        <div className="w-80 flex items-center justify-center">
          <h1 className="text-2xl font-semibold text-black/80 text-center">
            Join 400+ other companies who switched
          </h1>
        </div>
        <div className="w-full flex items-center justify-between mt-13 max-xl:flex-col max-xl:gap-4">
          {companies.map((item, i) => {
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
    </section>
  );
}

function Service() {
  const data = [
    {
      id: 1,
      name: "Optimize Your SEO",
      title: "We help you social media grow your business",
      href: "#",
      icon: "/assets/home-three/service/service-icon-one.svg",
    },
    {
      id: 2,
      name: "Optimize Your SEO",
      title: "We help you social media grow your business",
      href: "#",
      icon: "/assets/home-three/service/service-icon-two.svg",
    },
    {
      id: 3,
      name: "Optimize Your SEO",
      title: "We help you social media grow your business",
      href: "#",
      icon: "/assets/home-three/service/service-icon-three.svg",
    },
    {
      id: 4,
      name: "Optimize Your SEO",
      title: "We help you social media grow your business",
      href: "#",
      icon: "/assets/home-three/service/service-icon-four.svg",
    },
  ];

  return (
    <section className="w-full h-auto flex items-center justify-center overflow-hidden">
      <div className="w-wrapper pt-29 home-three-service flex flex-col items-center justify-center">
        <Reveal className="flex flex-col items-center justify-center">
          <motion.h1 initial={{ x: 150, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.3, delay: 0.3 }} className="mb-6">See our full service of SEO agency</motion.h1>
          <motion.h3 initial={{ x: -150, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.3, delay: 0.6 }} className="mb-15">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit dolor sit
            amet.
          </motion.h3>
        </Reveal>
        <Reveal className="service">
          {data.map((props) => {
            return (
              <motion.div initial={{ y: 150, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.3, delay: 0.3 * props.id }} key={props.id} className="card">
                <div className="card-container">
                  <img src={props.icon} alt="icon" />
                  <h2>{props.name}</h2>
                  <p>{props.title}</p>
                  <a
                    href={props.href}
                    className="text-black/70 hover:ml-3 duration-500"
                  >
                    <FontAwesomeIcon icon={faArrowRight} />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </Reveal>
        <a
          href="#"
          className="home-three-service-btn flex items-center justify-center"
        >
          Analyze Website
        </a>
      </div>
    </section>
  );
}

function CaseStudy() {
  const data = [
    {
      id: 1,
      img: "/assets/home-three/case-study/case-study-image-four.webp",
      title: "Complexities of each new themey",
      catagory: "Digital Experiences",
    },
    {
      id: 2,
      img: "/assets/home-three/case-study/case-study-image-two.webp",
      title: "Business Agility beyand hype",
      catagory: "Branding Strategy",
    },
    {
      id: 3,
      img: "/assets/home-three/case-study/case-study-image-three.webp",
      title: "Neural Network design",
      catagory: "Branding Strategy",
    },
    {
      id: 4,
      img: "/assets/home-three/case-study/case-study-image-one.webp",
      title: "Neural Network design",
      catagory: "Branding Strategy",
    },
  ];

  const swiperRef = useRef;

  return (
    <section className="w-full h-auto flex items-center justify-center overflow-hidden">
      <div className="wrapper home-three-case-study relative">
        <div className="flex items-end justify-between mb-16 max-xl:flex-col max-xl:items-center max-sm:w-full ">
          <Reveal className="max-xl:flex flex-col items-center justify-center max-sm:w-full">
            <motion.h1 initial={{ y: -150, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.3, delay: 0.6 }} className="mb-6 max-xl:text-center">
              Solid results of <br /> our different case studies
            </motion.h1>
            <motion.h3 initial={{ y: -150, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.3, delay: 0.3 }} className="max-xl:text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit dolor sit
              amet.
            </motion.h3>
          </Reveal>
          <div className="flex items-center justify-center gap-5 max-xl:mt-5">
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
            loop={true}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
          >
            {data.map((props) => {
              return (
                <SwiperSlide key={props.id}>
                  <div className="flex items-center justify-start">
                    <div className="relative">
                      <img src={props.img} alt="image" />
                      <div className="absolute bottom-5 left-5">
                        <h2>{props.title}</h2>
                        <p>{props.catagory}</p>
                      </div>
                      <div className="absolute top-0 left-0 w-full h-full hover:bg-red-500/60 duration-300"></div>
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

function About() {
  const data = [
    {
      id: 1,
      name: "SEO Consultancy",
      title: "We help you social media grow your business",
      icon: faBookmark,
    },
    {
      id: 2,
      name: "Organic long term SEO",
      title: "We help you social media grow your business",
      icon: faCircleCheck,
    },
    {
      id: 3,
      name: "Competitor analysis",
      title: "We help you social media grow your business",
      icon: faFolderPlus,
    },
  ];

  const [index, setIndex] = useState(1);

  return (
    <section className="w-full h-auto flex items-center justify-center home-three-about overflow-hidden">
      <div className="w-wrapper flex  items-center justify-center gap-20 pt-29 pb-36 max-xl:flex-col-reverse">
        <Reveal className="left-content relative">
          <motion.img initial={{ y: -150, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.3, delay: 0.3 }} src="/assets/home-three/about/about-image-one.webp" alt="img" />
          <motion.img
            initial={{ x: -150, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.6 }}
            src="/assets/home-three/about/about-image-two.webp"
            alt="img"
            className="absolute -bottom-20 -left-28 max-lg:left-0 max-sm:scale-75"
          />
          <img
            src="/assets/home-three/about/about-image-decoration.svg"
            alt="img"
            className="absolute -bottom-16 left-96 max-sm:hidden"
          />
        </Reveal>
        <Reveal className="right-content max-sm:w-full max-sm:flex flex-col items-center justify-center">
          <motion.h1 initial={{ y: -150, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.3, delay: 0.6 }} className="max-xl:text-center">
            What people think about company
          </motion.h1>
          <motion.h3 initial={{ y: -150, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.3, delay: 0.3 }} className="max-xl:text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit dolor sit
            amet.
          </motion.h3>
          <Reveal>
            {data.map((props) => {
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
          <motion.h1 initial={{ y: -150, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.3, delay: 0.6 }} className="max-xl:text-center">
            It&apos;s all about the people, and process
          </motion.h1>
          <motion.h3 initial={{ y: -150, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.3, delay: 0.3 }} className="max-xl:text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit dolor sit
            amet. Lorem ipsum dolor sit amet.
          </motion.h3>
          <div className="flex gap-8 max-xl:items-center justify-center max-sm:flex-col">
            <motion.div initial={{ x: -150, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.3, delay: 0.6 }} className="max-xl:flex flex-col items-center justify-center">
              <FontAwesomeIcon
                icon={faChartLine}
                className="text-brand-two mb-4 text-3xl"
              />
              <h2>Grow Business</h2>
              <p className="max-xl:text-center">
                We help you social media grow your business
              </p>
            </motion.div>
            <motion.div initial={{ x: -150, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.3, delay: 0.3 }} className="max-xl:flex flex-col items-center justify-center">
              <FontAwesomeIcon
                icon={faBullhorn}
                className="text-brand-two mb-4 text-3xl"
              />
              <h2>Media Marketing</h2>
              <p className="max-xl:text-center">
                We help you social media grow your business
              </p>
            </motion.div>
          </div>
          <motion.a initial={{ y: 150, opacity: 0 }} animate={{ y: 0, opacity: 1 }} href="#" className="flex items-center justify-center">
            Free Consultation
          </motion.a>
        </Reveal>
        <Reveal className="right-content relative w-96 h-72">
          <img
            src="/assets/home-three/work-process/work-process-decoration.svg"
            alt="decoration"
            className="absolute top-72 left-10 max-sm:hidden"
          />
          <motion.img
          initial={{ x: 150, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.6 }}
            src="/assets/home-three/work-process/work-process-image-one.webp"
            alt="image"
            className="absolute top-40 left-40 scale-125 max-sm:scale-100 img-one"
          />
          <motion.img
          initial={{ y: -150, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.9 }}
            src="/assets/home-three/work-process/work-process-image-two.webp"
            alt="image"
            className="absolute top-0 left-0 img-two"
          />
        </Reveal>
      </div>
    </section>
  );
}

function Pricing() {
  const data = [
    {
      id: 1,
      plan: "STARTER PLAN",
      price: "$29",
      title: "Bunc id tincidunt duis faucibus urna Adipiscing. Id lorem diam.",
      features: ["Free hosting", "A Dedicated Domain", "2GB of storage space"],
      href: "#",
    },
    {
      id: 2,
      plan: "REGULAR PLAN",
      price: "$50",
      title: "Bunc id tincidunt duis faucibus urna Adipiscing. Id lorem diam.",
      features: [
        "Unlimited of support",
        "Advanced analytic",
        "Free hosting",
        "1 Dedicated Domain",
        "10GB of storage space",
        "24/7 Support",
      ],
      href: "#",
    },
    {
      id: 3,
      plan: "STARTER PLAN",
      price: "$100",
      title: "Bunc id tincidunt duis faucibus urna Adipiscing. Id lorem diam.",
      features: ["Free hosting", "A Dedicated Domain", "2GB of storage space"],
      href: "#",
    },
  ];

  return (
    <section className="w-full h-auto flex items-center justify-center overflow-hidden">
      <div className="w-wrapper home-three-pricing pt-29 pb-29 max-xl:mt-28 max-xl:flex flex-col items-center justify-center">
        <h1>
          Simple
          <br />
          Scalable Pricing.
        </h1>
        <h2>Lorem ipsum dolor sit amet, consectur adipiscing elit.</h2>
        <Reveal className="flex items-center justify-center gap-7 max-xl:flex-col">
          {data.map((props) => {
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
                    className="pl-10 mb-8"
                  />
                ) : (
                  <img
                    src="/assets/home-three/line.svg"
                    alt="line"
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
        <h1 className="mb-6">Boosts your website trafic!</h1>
        <h2 className="mb-8">
          Lorem ipsum dolor sit amet, consectur adipiscing elit.
        </h2>
        <form className="flex gap-4 max-lg:flex-col max-lg:items-center max-lg:justify-center">
          <input
            type="text"
            placeholder="Your Web URL"
            className="focus:outline-blue-400"
          />
          <input
            type="text"
            placeholder="Email Address"
            className="focus:outline-blue-400"
          />
          <button>Check Now</button>
        </form>
        <div className="flex items-center justify-center gap-5 mt-8 max-sm:flex-col">
          <p>
            <span>
              <FontAwesomeIcon icon={faCheck} className="mr-2" />
            </span>
            14 days free trial
          </p>
          <p>
            <span>
              <FontAwesomeIcon icon={faCheck} className="mr-2" />
            </span>
            Not credit card required
          </p>
          <p>
            <span>
              <FontAwesomeIcon icon={faCheck} className="mr-2" />
            </span>
            Cancel anytime
          </p>
        </div>
      </div>
    </section>
  );
}

function Testimonial() {

  const data = [
    {
      id: 1,
      name: "Denis Robinson",
      role: "Ux Designer",
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elitsed  eiusmod tempor incid labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida risus commodo.",
      profile:
        "/assets/home-three/testimonial/testimonial-profile-image-one.png",
    },
    {
      id: 2,
      name: "Claude Boone",
      role: "Co-Founder",
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elitsed  eiusmod tempor incid labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida risus commodo.",
      profile:
        "/assets/home-three/testimonial/testimonial-profile-image-two.png",
    },
    {
      id: 3,
      name: "John Doe",
      role: "CEO",
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elitsed  eiusmod tempor incid labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida risus commodo.",
      profile:
        "/assets/home-three/testimonial/testimonial-profile-image-three.png",
    },
  ];

  const swiper = useRef;

  return (
    <section className="w-full h-auto flex items-center justify-center bg-very-light-gray">
      <div className="wrapper home-three-testimonial ">
        <div className="left mt-7 max-xl:flex flex-col items-center justify-center">
          <div className="max-xl:flex flex-col items-center justify-center">
          <h1>What clients say about us</h1>
          <p>Lorem ipsum dolor sit amet, consectur elit.</p>
          </div>
          <div className="mt-10 flex gap-5">
          <button onClick={() => swiper.current.slideNext()}>
              <FontAwesomeIcon icon={faArrowLeft} />
            </button>
            <button onClick={() => swiper.current.slidePrev()}>
              <FontAwesomeIcon icon={faArrowRight} />
            </button>
          </div>
        </div>
        <div className="right relative left-10 max-xl:left-0 max-xl:w-screen ">
          <Swiper onSwiper={(props) => {
              swiper.current = props;
            }} slidesPerView={1} loop={true} ref={swiper}>
          {
            data.map((props) => {
              return(
                <SwiperSlide key={props.id}>
                  <div className="flex items-center justify-center">
                    <div className="testimonial-card my-7">
                      <img src={props.profile} alt="profile-image" className="img mt-10 ml-10 mb-3" />
                      <p className="px-10 mb-3">{props.comment}</p>
                      <img src="/assets/home-three/testimonial/line.svg" alt="line" className="pl-10 mb-3" />
                      <h3 className="pl-10 mb-1">{props.name}</h3>
                      <h4 className="pl-10 max-sm:pb-10">{props.role}</h4>
                    </div>
                  </div>
                </SwiperSlide>
              )
            })
          }
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
        <div className="max-md:my-10">
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

      <div className="w-full h-24  flex justify-center items-center border-t border-black/80 mt-24">
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