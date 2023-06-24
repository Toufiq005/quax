"use client";

import "./TeamMemberSection.css";
import Image from "next/image";
import { useState, useEffect } from "react";

require("dotenv").config();

// async function getData() {
//   const res = await fetch((process.env.NEXT_PUBLIC_REST_API_ENDPOINT) + "/team-members")

//   return res.json()
// }

export default function TeamMemberSection(props) {
  const [showLinks, setShowLinks] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(process.env.NEXT_PUBLIC_REST_API_ENDPOINT + "/team-members")
    .then(res => res.json())
    .then(data => setData(data))
  }, []);

  return (
    <section
      className={
        "w-full min-h-screen flex items-center justify-center" +
        " " +
        props.bgColor
      }
    >
      <div className="wrapper team-member flex flex-col items-center justify-center my-28">
        <div>
          <h1>Our Marketing expertise</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit dolor sit
            amet.
          </p>
        </div>
        <div data-aos="fade-up" className="team w-full h-auto mt-11 ">
          {data ??
            data.slice(0, props.limit).map((profile) => (
              <div
                key={profile.id}
                className="team-member-profile overflow-hidden"
                onMouseEnter={() => setShowLinks(true)}
                onMouseLeave={() => setShowLinks(false)}
              >
                <div>
                  <Image
                    width={270}
                    height={270}
                    src={img}
                    alt="img"
                    className="team-member-profile-img"
                  />
                  <h2>{profile.name}</h2>
                  <h3>{profile.role}</h3>
                </div>
                {showLinks && (
                  <div data-aos="fade-left" className="social-links block w-10">
                    <a href={profile.socialLinks.facebook}>
                      <div className="w-10 h-10 rounded bg-white flex items-center justify-center ">
                        <Image
                          width={9}
                          height={16}
                          src="/assets/sections/team-members/icon-facebook.svg"
                          alt="icon"
                        />
                      </div>
                    </a>
                    <a href={profile.socialLinks.twitter}>
                      <div className="w-10 h-10 rounded bg-header flex items-center justify-center ">
                        <Image
                          width={16}
                          height={13}
                          src="/assets/sections/team-members/icon-twitter.svg"
                          alt="icon"
                        />
                      </div>
                    </a>
                    <a href={profile.socialLinks.vimeo}>
                      <div className="w-10 h-10 rounded bg-white flex items-center justify-center ">
                        <Image
                          width={14}
                          height={12}
                          src="/assets/sections/team-members/icon-vimeo.svg"
                          alt="icon"
                        />
                      </div>
                    </a>
                  </div>
                )}
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}
