"use client";

import React from "react";
import "./TeamMemberSection.css";
import { useState } from "react";
import Reveal from "@/components/ui/Reveal/Reveal";
import data from "@/data/team-members.js";
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
        <div className="max-md:overflow-hidden">
          <Reveal>
            <motion.h1
              initial={{ x: -150, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              Our Marketing expertise
            </motion.h1>
          </Reveal>
          <Reveal>
            <motion.p
              initial={{ x: 150, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit dolor sit
              amet.
            </motion.p>
          </Reveal>
        </div>

        <Team data={data} limit={props.limit} />
      </div>
    </section>
  );
}
function TeamProfile({ name, img, role, socialLinks, i }) {
  const [showLinks, setShowLinks] = useState(false);

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
          <img src={img} alt="img" className="team-member-profile-img" />
          <h2>{name}</h2>
          <h3>{role}</h3>
        </div>
        {showLinks && (
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.2 }}
            className="social-links flex flex-col w-10"
          >
            <a
              href={socialLinks.facebook}
              className="flex w-11 h-11 duration-200 text-black/70 hover:bg-red-500 hover:text-white bg-white rounded-lg items-center justify-center"
            >
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a
              href={socialLinks.twitter}
              className="flex w-11 h-11 duration-200 text-black/70 hover:bg-red-500 hover:text-white bg-white rounded-lg items-center justify-center"
            >
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a
              href={socialLinks.vimeo}
              className="flex w-11 h-11 duration-200 text-black/70 hover:bg-red-500 hover:text-white bg-white rounded-lg items-center justify-center"
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
        <TeamProfile key={profile.name} {...profile} i={i} />
      ))}
    </div>
  );
}
