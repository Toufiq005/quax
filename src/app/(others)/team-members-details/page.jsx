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
        title="Team Members Details"
        description="Pick a template, customize the content and design elements, and launch! Or, design your next fabulous email."
      />
      <section className="w-full h-auto flex flex-col items-center justify-center bg-very-light-gray">
        <div className="wrapper flex flex-col items-center justify-center gap-20">
          <div className="max-lg:flex-col max-lg:text-center flex items-center justify-center gap-20 w-full ">
            <div className="members-image flex items-center justify-center bg-color w-1/2">
              <motion.div
                initial={{ scale: 0, rotate: -90, opacity: 0 }}
                whileInView={{ scale: 1, rotate: 0, opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  width={485}
                  height={485}
                  src="/assets/sections/team-members/member-robert-banks.png"
                  alt="img"
                />
              </motion.div>
            </div>
            <div className="members-info w-1/2">
              <h1>Robert Banks</h1>
              <h3>CEO & Founder</h3>
              <p>
                But I must explain to you how all this mistaken idea of denounci
                pleasure and paling was born and I will give you a complete
                account of the system and expound the actual teachings of the
                great explorer of the truth, the master-builder of human
                happiness.
              </p>
              <div className="flex flex-col items-start max-lg:items-center justify-center gap-3 mt-5">
                <div className="flex items-center justify-start max-lg:justify-center gap-6">
                  <div className="w-10 h-10 bg-header rounded-full flex items-center justify-center">
                    <FontAwesomeIcon icon={faPhone} className="text-white" />
                  </div>
                  <h2>+1 012 345 6789</h2>
                </div>
                <div className="flex items-center justify-start gap-6">
                  <div className="w-10 h-10 bg-header rounded-full flex items-center justify-center">
                    <FontAwesomeIcon icon={faTty} className="text-white" />
                  </div>
                  <h2>+44-208-1234567</h2>
                </div>
                <div className="flex items-center justify-start gap-6">
                  <div className="w-10 h-10 bg-header rounded-full flex items-center justify-center">
                    <FontAwesomeIcon icon={faEnvelope} className="text-white" />
                  </div>
                  <h2>mail@loyalcoder.com</h2>
                </div>
              </div>
              <div className="flex items-center justify-start max-lg:justify-center gap-5 mt-10">
                {socialLinks.map((props, i) => (
                  <motion.a
                  initial={{y:-50,opacity: 0}} whileInView={{y: 0,opacity: 1}} transition={{duration: 0.2, delay: i * 0.2}}
                    key={props.id}
                    href={props.link}
                    className="flex items-center justify-center text-red-500 hover:text-white hover:bg-red-500 duration-100 w-10 h-10 rounded-full border border-red-500"
                  >
                    <FontAwesomeIcon icon={props.icon} />
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
          <div className="max-lg:flex-col max-lg:text-center w-full gap-20 flex items-center justify-center">
            <div className="members-overview max-lg:w-4/5 w-1/2">
              <h1>Overview</h1>
              <p>
                But I must explain to you how all this mistaken idea of denounci
                pleasure and paling was born and I will give you a complete
                account of the system and expound the actual teachings give you
                a complete account of the system and expound the actual
                teachings of the great explorer of the truth, the master-builder
                of human happiness.
                <br />
                <br />
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been give you a complete account of
                the system and expound the actual teachings the industrys
                standard dummy text ever since the 1500s, when an unknown
                printer took a galley of type and scrambled it to make a type
                specimen book.
                <br />
                <br />
                Lorem Ipsum has been give you a complete account of the system
                and expound the actual teachings the industry.
              </p>
            </div>
            <div className="members-experience max-lg:w-full w-1/2">
              <h1>Experiences</h1>
              <div className="max-lg:w-full max-lg:flex flex-col items-center justify-center">
                <div className="max-lg:w-4/5">
                  <h3>Wordpress</h3>
                  <div className="exp-bar">
                    <motion.div
                      initial={{ x: -300 }}
                      whileInView={{ x: 0 }}
                      transition={{ duration: 0.5 }}
                      className="exp-bar-wordpress"
                    ></motion.div>
                  </div>
                </div>
                <div className="max-lg:w-4/5">
                  <h3>Joomla</h3>
                  <div className="exp-bar">
                    <motion.div
                      initial={{ x: -300 }}
                      whileInView={{ x: 0 }}
                      transition={{ duration: 0.5 }}
                      className="exp-bar-joomla"
                    ></motion.div>
                  </div>
                </div>
                <div className="max-lg:w-4/5">
                  <h3>Laravel</h3>
                  <div className="exp-bar">
                    <motion.div
                      initial={{ x: -300 }}
                      whileInView={{ x: 0 }}
                      transition={{ duration: 0.5 }}
                      className="exp-bar-laravel"
                    ></motion.div>
                  </div>
                </div>
                <div className="max-lg:w-4/5">
                  <h3>Magento</h3>
                  <div className="exp-bar">
                    <motion.div
                      initial={{ x: -300 }}
                      whileInView={{ x: 0 }}
                      transition={{ duration: 0.5 }}
                      className="exp-bar-magento"
                    ></motion.div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <TeamMemberSection bgColor="bg-color" limit={4} />
    </>
  );
}
