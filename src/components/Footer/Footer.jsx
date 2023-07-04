"use client";

import React from "react";
import "./Footer.css";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faVimeoV,
  faFacebookF,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { motion } from "framer-motion";

export default function Footer() {
  const quickLink = [
    { key: 1, name: "Home", href: "/" },
    { key: 2, name: "About", href: "/about" },
    { key: 3, name: "Services", href: "/services" },
    { key: 4, name: "Pages", href: "/pages" },
    { key: 5, name: "Blog", href: "/blog" },
    { key: 6, name: "Shop", href: "/shop" },
    { key: 7, name: "Contact", href: "/contact" },
  ];

  const importantLink = [
    { key: 1, name: "Our Team", href: "/our-team" },
    { key: 2, name: "News & Media", href: "/news-and-media" },
    { key: 3, name: "Case Studies", href: "/case-studies" },
    { key: 4, name: "How it Works", href: "/how-it-works" },
    { key: 5, name: "Locations", href: "/locations" },
    { key: 6, name: "Resources", href: "/resources" },
  ];

  const supportLink = [
    { key: 1, name: "Forum Support", href: "/forum-support" },
    { key: 2, name: "Help & FAQ", href: "/help-and-faq" },
    { key: 3, name: "Contact Us", href: "/contact" },
    { key: 4, name: "Pricing And plans", href: "/pricing" },
    { key: 5, name: "Cookies Policy", href: "/cookies-policy" },
    { key: 6, name: "Privacy Policy", href: "/privacy-policy" },
  ];

  return (
    <footer className="w-full flex flex-col items-center justify-center ">
      <div className="flex items-start justify-between w-full max-md:items-center footer-div">
        <div className="max-md:flex flex-col items-center justify-center max-md:text-center">
          <motion.img
            initial={{ x: -200, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.3 }}
            src="/assets/logo-dark.svg"
            alt="logo"
          />

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

      <div className="w-full h-24  flex justify-center items-center border-t mt-24">
        <motion.p
          initial={{ y: 80, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3 }}
          className=" text-center w-full pt-0"
        >
          ©2021 All Rights Reserved. With Design by Loyalcoders
        </motion.p>
      </div>
    </footer>
  );
}
