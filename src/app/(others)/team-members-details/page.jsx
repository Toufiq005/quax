"use client";

import "./team-members-details.css";
import Image from "next/image";
import Banner from "@/components/Sections/Banner/Banner";
import TeamMemberSection from "@/components/Sections/TeamMemberSection/TeamMemberSection";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone, faTty } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faInstagram,
  faTwitter,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import { motion } from "framer-motion";
import Reveal from "@/components/ui/Reveal/Reveal";
import data from '@/data/pages/team-members-details.js';

export default function page() {
  const socialLinks = [
    {
      id: 1,
      link: "/",
      name: "facebook",
      icon: faFacebookF,
    },
    {
      id: 2,
      link: "/",
      name: "instagram",
      icon: faInstagram,
    },
    {
      id: 3,
      link: "/",
      name: "twitter",
      icon: faTwitter,
    },
    {
      id: 4,
      link: "/",
      name: "linkedin",
      icon: faLinkedinIn,
    },
  ];

  return (
    <>
      <Banner
        title={data[0].title}
        description={data[0].description}
      />
      <section className="w-full h-auto flex flex-col items-center justify-center bg-very-light-gray">
        <div className="wrapper flex flex-col items-center justify-center gap-20">
          <div className="max-lg:flex-col max-lg:text-center flex items-center justify-center gap-20 w-full ">
            <div className="members-image flex items-center justify-center bg-color w-1/2">
              <Reveal>
                <motion.div
                  initial={{ scale: 0, rotate: -90, opacity: 0 }}
                  animate={{ scale: 1, rotate: 0, opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.3 }}
                >
                  <Image
                    width={485}
                    height={485}
                    src={data[1].img}
                    alt="img"
                  />
                </motion.div>
              </Reveal>
            </div>
            <div className="members-info w-1/2 max-md:w-11/12">
              <h1>{data[1].name}</h1>
              <h3>{data[1].role}</h3>
              <p>
              {data[1].description}
              </p>
              <div className="flex flex-col items-start max-lg:items-center justify-center gap-3 mt-5">
              {data[1].contactLinks.map((props) => (
                <div key={props.id} className="flex items-center justify-start max-lg:justify-center gap-6">
                <div className="w-10 h-10 bg-header rounded-full flex items-center justify-center">
                  <FontAwesomeIcon icon={props.icon} className="text-white" />
                </div>
                <h2>{props.link}</h2>
              </div>
              ))}
              </div>
              <div className="flex items-center justify-start max-lg:justify-center gap-5 mt-10">
                {data[1].socialLinks.map((props, i) => (
                  <Reveal key={props.id}>
                    <motion.a
                      initial={{ y: -50, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.2, delay: i * 0.2 }}
                      href={props.link}
                      className="flex items-center justify-center text-red-500 hover:text-white hover:bg-red-500 duration-100 w-10 h-10 rounded-full border border-red-500"
                    >
                      <FontAwesomeIcon icon={props.icon} />
                    </motion.a>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
          <div className="max-lg:flex-col max-lg:text-center w-full gap-20 flex items-center justify-center">
            <div className="members-overview max-lg:w-4/5 w-1/2">
              <h1>Overview</h1>
              <p>
               {data[1].overview}
              </p>
            </div>
            <div className="members-experience max-lg:w-full w-1/2">
              <h1>Experiences</h1>
              <div className="max-lg:w-full max-lg:flex flex-col items-center justify-center">
                <div className="max-lg:w-4/5">
                  <h3>Wordpress</h3>
                  <div className="exp-bar">
                    <Reveal>
                      <motion.div
                        initial={{ x: -300 }}
                        animate={{ x: 0 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                        className="exp-bar-wordpress"
                      ></motion.div>
                    </Reveal>
                  </div>
                </div>
                <div className="max-lg:w-4/5">
                  <h3>Joomla</h3>
                  <div className="exp-bar">
                    <Reveal>
                      <motion.div
                        initial={{ x: -300 }}
                        animate={{ x: 0 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                        className="exp-bar-joomla"
                      ></motion.div>
                    </Reveal>
                  </div>
                </div>
                <div className="max-lg:w-4/5">
                  <h3>Laravel</h3>
                  <div className="exp-bar">
                    <Reveal>
                      <motion.div
                        initial={{ x: -300 }}
                        animate={{ x: 0 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                        className="exp-bar-laravel"
                      ></motion.div>
                    </Reveal>
                  </div>
                </div>
                <div className="max-lg:w-4/5">
                  <h3>Magento</h3>
                  <div className="exp-bar">
                    <Reveal>
                      <motion.div
                        initial={{ x: -300 }}
                        animate={{ x: 0 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                        className="exp-bar-magento"
                      ></motion.div>
                    </Reveal>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <TeamMemberSection bgColor="bg-color" limit={4} isTitle={true} title="Another Team Members" headLine="Lorem ipsum dolor sit amet, consectetur adipiscing elit dolor sit amet." />
    </>
  );
}
