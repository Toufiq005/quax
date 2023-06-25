"use client";

import React from "react";
import "./TeamMemberSection.css";
import { useState, } from "react";
import data from '@/data/team-members.js';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faTwitter, faVimeoV } from "@fortawesome/free-brands-svg-icons";

export default async function TeamMemberSection(props) {

  return (
    <section
      className={
        "w-full h-auto flex items-center justify-center" +
        " " +
        props.bgColor
      }
    >
      <div className="wrapper team-member flex flex-col items-center justify-center">
        <div>
          <h1>Our Marketing expertise</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit dolor sit
            amet.
          </p>
        </div>

        <Team data={data} limit={props.limit} />
      </div>
    </section>
  );
}
function TeamProfile({ name, img, role, socialLinks }) {
  const [showLinks, setShowLinks] = useState(false);

  return (
    <div
      className="team-member-profile overflow-hidden"
      onMouseEnter={() => setShowLinks(true)}
      onMouseLeave={() => setShowLinks(false)}
    >
      <div>
        <img src={img} alt="img" className="team-member-profile-img" />
        <h2>{name}</h2>
        <h3>{role}</h3>
      </div>
      {showLinks && (
        <div data-aos="fade-left" className="social-links flex flex-col w-10">
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
        </div>
      )}
    </div>
  );
}
function Team(props) {
  return (
    <div data-aos="fade-up" className="team w-full h-auto mt-11 ">
      {props.data.slice(0, props.limit).map((profile) => (
        <TeamProfile key={profile.name} {...profile} />
      ))}
    </div>
  );
}
