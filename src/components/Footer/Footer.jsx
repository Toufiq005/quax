"use client";

import React from "react";
import Image from "next/image";
// import { useState } from "react";
import "./Footer.css";
import Link from "next/link";

export default function Footer() {
  // const [animationOn, setAnimationOn] = useState(false);
  // const [logoAnimationOn, setLogoAnimationOn] = useState(false);

  const quickLink = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Pages", href: "/pages" },
    { name: "Blog", href: "/blog" },
    { name: "Shop", href: "/shop" },
    { name: "Contact", href: "/contact" },
  ];

  const importantLink = [
    { name: "Our Team", href: "/our-team" },
    { name: "News & Media", href: "/news-and-media" },
    { name: "Case Studies", href: "/case-studies" },
    { name: "How it Works", href: "/how-it-works" },
    { name: "Locations", href: "/locations" },
    { name: "Resources", href: "/resources" },
  ];

  const supportLink = [
    { name: "Forum Support", href: "/forum-support" },
    { name: "Help & FAQ", href: "/help-and-faq" },
    { name: "Contact Us", href: "/contact" },
    { name: "Pricing And plans", href: "/pricing" },
    { name: "Cookies Policy", href: "/cookies-policy" },
    { name: "Privacy Policy", href: "/privacy-policy" },
  ];

  return (
    <footer className="w-full flex flex-col items-center justify-center ">
      <div className="flex items-start justify-between w-full mt-24 footer-div">
        <div className="max-md:flex flex-col items-center justify-center max-md:text-center">
          <Image
          width={155}
          height={50}
            data-aos="fade-right"
            data-aos-duration="1000"
            src="/assets/logo-dark.svg"
            alt="logo"
          />

          <div>
            <p className="my-4">
              The European languages are members of the same family. Their
              separate existence is a myth.
            </p>
          </div>
          <div className="w-full h-48 flex items-start justify-start max-md:justify-center">
            <a
              href="/"
              className="flex w-11 h-11  bg-white rounded-lg items-center justify-center"
            >
              <Image width={10} height={20} src="/assets/icon-facebook.svg" alt="icon" />
            </a>
            <a
              href="/"
              className="flex w-11 h-11 mx-3 bg-header rounded-lg items-center justify-center"
            >
              <Image width={20} height={16} src="/assets/icon-twitter.svg" alt="icon" />
            </a>
            <a
              href="/"
              className="flex w-11 h-11 bg-white rounded-lg items-center justify-center"
            >
              <Image width={17} height={15} src="/assets/icon-vimeo.svg" alt="icon" />
            </a>
          </div>
        </div>
        <div className="max-md:my-10">
          <h1>Quick Link</h1>
          <ul className="flex flex-col items-start justify-center max-md:items-center">
            {quickLink.map((item) => {
              return (
                <li className="my-2">
                  <Link
                    key={item.name}
                    href={item.href}
                    className={({ isActive }) => {
                      return (
                        "uppercase font-medium" +
                        (!isActive ? " text-base" : " text-header")
                      );
                    }}
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
                <li className="my-2">
                  <Link
                    key={item.name}
                    href={item.href}
                    className={({ isActive }) => {
                      return (
                        "uppercase font-medium" +
                        (!isActive ? " text-base" : " text-header")
                      );
                    }}
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
                <li className="my-2">
                  <Link
                    key={item.name}
                    href={item.href}
                    className={({ isActive }) => {
                      return (
                        "uppercase font-medium" +
                        (!isActive ? " text-base" : " text-header")
                      );
                    }}
                  >
                    {item.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      <div className="w-full h-24 flex justify-center items-center border-t mt-24">
        <p className=" text-center w-full pt-0 duration-1000 opacity-100">
          ©2021 All Rights Reserved. With Design by Loyalcoders
        </p>
      </div>
    </footer>
  );
}
