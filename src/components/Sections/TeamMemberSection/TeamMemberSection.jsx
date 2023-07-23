"use client";

import React from "react";
import "./TeamMemberSection.css";
import { useState } from "react";
import Reveal from "@/components/ui/Reveal/Reveal";
import data from "@/data/section/team-members.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faVimeoV,
} from "@fortawesome/free-brands-svg-icons";
import { motion } from "framer-motion";

export default function TeamMemberSection(props) {
  return (
    <section
      className={
        "w-full h-auto flex items-center justify-center" + " " + props.bgColor
      }
    >
      <div className="wrapper team-member flex flex-col items-center justify-center">
        <div className="max-md:overflow-hidden flex flex-col items-center justify-center">
          <Reveal>
            <motion.h1
              initial={{ x: -150, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.3 }}
            >
              {props.title}
            </motion.h1>
          </Reveal>
          <Reveal>
            <motion.p
              initial={{ x: 150, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.3 }}
            >
              {props.headLine}
            </motion.p>
          </Reveal>
        </div>

        <Team data={data} limit={props.limit} pageIndex={props.pageIndex} />
      </div>
    </section>
  );
}
function TeamProfile({ name, img, role, socialLinks, i, pageIndex }) {
  const [showLinks, setShowLinks] = useState(false);

  let hoverBrand;

  if(pageIndex === 1){
    hoverBrand = "hover:bg-red-500";
  }else if(pageIndex === 2){
    hoverBrand = "hover:bg-blue-500";
  }else{
    hoverBrand = "hover:bg-red-500";
  }

  return (
    <Reveal>
      <motion.div
        className="team-member-profile overflow-hidden"
        onMouseEnter={() => setShowLinks(true)}
        onMouseLeave={() => setShowLinks(false)}
        initial={{ y: 150, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.2 * (i + 1) }}
      >
        <div>
          <motion.img initial={{filter: "blur(20px)"}} animate={{filter: "blur(0px)"}} transition={{delay: 0.2 * (i + 1)}} src={img} alt="img" className="team-member-profile-img" />
          <h2>{name}</h2>
          <h3>{role}</h3>
        </div>
        {showLinks && (
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.2, delay: 0.2 }}
            className="social-links flex flex-col w-10"
          >
            <a
              href={socialLinks.facebook}
              className={"flex w-11 h-11 duration-200 text-header hover:text-white bg-white rounded-lg items-center justify-center" + " " + hoverBrand}
            >
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a
              href={socialLinks.twitter}
              className={"flex w-11 h-11 duration-200 text-header hover:text-white bg-white rounded-lg items-center justify-center" + " " + hoverBrand}
            >
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a
              href={socialLinks.vimeo}
              className={"flex w-11 h-11 duration-200 text-header hover:text-white bg-white rounded-lg items-center justify-center" + " " + hoverBrand}
            >
              <FontAwesomeIcon icon={faVimeoV} />
            </a>
          </motion.div>
        )}
      </motion.div>
    </Reveal>
  );
}
function Team(props) {
  return (
    <div className="team w-full h-auto mt-11 ">
      {props.data.slice(0, props.limit).map((profile, i) => (
        <TeamProfile key={profile.name} {...profile} i={i} pageIndex={props.pageIndex} />
      ))}
    </div>
  );
}
