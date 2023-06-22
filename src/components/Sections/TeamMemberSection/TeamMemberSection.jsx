"use client"

import './TeamMemberSection.css'
import Image from 'next/image';
import { useState } from "react";

async function getData() {
  const res = await fetch('http://localhost:3000/api/team-members')
 
  return res.json()
}

export default async function TeamMemberSection(props) {

  const data = await getData()

  return (
    <section className={"w-full min-h-screen flex items-center justify-center" + " " + (props.bgColor)}>
      <div className="wrapper team-member flex flex-col items-center justify-center my-28">
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
  )
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
          <Image width={270} height={270} src={img} alt="img" className="team-member-profile-img" />
          <h2>{name}</h2>
          <h3>{role}</h3>
        </div>
        {showLinks && (
          <div 
          data-aos="fade-left"
          className="social-links block w-10">
          <a href={socialLinks.facebook}>
            <div className="w-10 h-10 rounded bg-white flex items-center justify-center ">
              <Image width={9} height={16} src="/assets/sections/team-members/icon-facebook.svg" alt="icon" />
            </div>
          </a>
          <a href={socialLinks.twitter}>
            <div className="w-10 h-10 rounded bg-header flex items-center justify-center ">
              <Image width={16} height={13} src="/assets/sections/team-members/icon-twitter.svg" alt="icon" />
            </div>
          </a>
          <a href={socialLinks.vimeo}>
            <div className="w-10 h-10 rounded bg-white flex items-center justify-center ">
              <Image width={14} height={12} src="/assets/sections/team-members/icon-vimeo.svg" alt="icon" />
            </div>
          </a>
        </div>
        )}
      </div>
    );
  }
function Team(prop) {

    return (
      <div 
      data-aos="fade-up"
      className="team w-full h-auto mt-11 ">
        {prop.data.slice(0, (prop.limit)).map((profile) => (
          <TeamProfile key={profile.id} {...profile} />
        ))}
      </div>
    );
  }
  