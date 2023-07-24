"use client";

import React, { useState, useEffect } from "react";
import "./Navbar.css";
import Logo from "../ui/Logo/Logo";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAdd,
  faArrowRight,
  faMagnifyingGlass,
  faMultiply,
} from "@fortawesome/free-solid-svg-icons";
import "next/navigation";
import { motion } from "framer-motion";

export default function Navbar(props) {
  const [navColor, setNavColor] = useState(false);
  const [isActive, setActive] = useState(false);
  const [isHomeOption, setHomeOption] = useState(false);
  const [isServicesOption, setServicesOption] = useState(false);
  const [isPagesOption, setPagesOption] = useState(false);
  const [isBlogOption, setBlogOption] = useState(false);
  const [isSearchOption, setSearchOption] = useState(false);
  const [isMobileSearchOption, setMobileSearchOption] = useState(false);
  const [timerId, setTimerId] = useState(null);

  function clearHoverOptions() {
    setHomeOption(false);
    setServicesOption(false);
    setPagesOption(false);
    setBlogOption(false);
    setSearchOption(false);
    setMobileSearchOption(false);
  }

  function handleMouseLeave(props) {
    if (props === 1) {
      setTimerId(
        setTimeout(function () {
          setHomeOption(false);
        }, 500)
      );
    } else if (props === 2) {
      setTimerId(
        setTimeout(function () {
          setServicesOption(false);
        }, 500)
      );
    } else if (props === 3) {
      setTimerId(
        setTimeout(function () {
          setPagesOption(false);
        }, 500)
      );
    } else if (props === 4) {
      setTimerId(
        setTimeout(function () {
          setBlogOption(false);
        }, 500)
      );
    }
  }

  function handleMouseEnter(props) {
    clearHoverOptions();
    clearTimeout(timerId);
    if (props === 1) {
      setHomeOption(true);
    } else if (props === 2) {
      setServicesOption(true);
    } else if (props === 3) {
      setPagesOption(true);
    } else if (props === 4) {
      setBlogOption(true);
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      if (scrollPosition > 100) {
        setNavColor(true);
      } else {
        setNavColor(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleNavModal = () => {
    setActive(!isActive);
    if (!isActive) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  };

  return (
    <>
      <nav
        style={{ backgroundColor: navColor ? "#fff" : "", borderColor: navColor ? "#fff" : null }}
        className={
          "w-full h-25 flex items-center justify-center fixed z-50" +
          " " +
          props.bgColor
        }
      >
        <div className="navbar">
          <a href="/" className="max-sm:ml-4">
            <Logo pageIndex={props.pageIndex} />
          </a>
          <ul className="flex items-center">
            <li>
              <a
                onMouseEnter={() => {
                  handleMouseEnter(1);
                }}
                onMouseLeave={() => {
                  handleMouseLeave(1);
                }}
                style={{ color: navColor ? "#444444" : "" }}
                className={"flex items-center hover:text-red-500" + " " + props.textColor}
                href="/"
              >
                <p>HOME</p>
                <FontAwesomeIcon icon={faAdd} className="text-xs ml-1" />
              </a>

              {isHomeOption && (
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="home-option-wrapper"
                >
                  <ul
                    onMouseEnter={() => {
                      handleMouseEnter(1);
                    }}
                    onMouseLeave={() => {
                      handleMouseLeave(1);
                    }}
                    className="home-option pt-3"
                  >
                    <li>
                      <a
                        href="/"
                        className="flex flex-col items-center justify-center"
                      >
                        <motion.img
                          initial={{filter: "blur(20px)"}}
                          animate={{filter: "blur(0px)"}}
                          transition={{duration: 0.3}}
                          src="/assets/navbar/Homepage-1.webp"
                          width="307"
                          height="168"
                          loading="lazy"
                          alt="img"
                          className="navbar-home-img"
                        />
                        <p className="pb-3">Homepage One</p>
                      </a>
                    </li>
                    <li>
                      <a
                        href="/home-page-two"
                        className="flex flex-col items-center justify-center"
                      >
                        <motion.img
                          initial={{filter: "blur(20px)"}}
                          animate={{filter: "blur(0px)"}}
                          transition={{duration: 0.3}}
                          src="/assets/navbar/Homepage-2.webp"
                          width="307"
                          height="161"
                          loading="lazy"
                          alt="img"
                          className="navbar-home-img"
                        />
                        <p className="pb-3">Homepage Two</p>
                      </a>
                    </li>
                    <li>
                      <a
                        href="/home-page-three"
                        className="flex flex-col items-center justify-center"
                      >
                        <motion.img
                          initial={{filter: "blur(20px)"}}
                          animate={{filter: "blur(0px)"}}
                          transition={{duration: 0.3}}
                          src="/assets/navbar/Homepage-3.webp"
                          width="307"
                          height="160"
                          loading="lazy"
                          alt="img"
                          className="navbar-home-img"
                        />
                        <p className="pb-3">Homepage Three</p>
                      </a>
                    </li>
                  </ul>
                </motion.div>
              )}
            </li>
            <li>
              <a
                href="/about"
                style={{ color: navColor ? "#444444" : "" }}
                className={
                  "hover:text-red-500 flex items-center" + " " + props.textColor
                }
              >
                <p>ABOUT</p>
              </a>
            </li>
            <li>
              <a
                onMouseEnter={() => {
                  handleMouseEnter(2);
                }}
                onMouseLeave={() => {
                  handleMouseLeave(2);
                }}
                href="/service"
                style={{ color: navColor ? "#444444" : "" }}
                className={
                  "hover:text-red-500 flex items-center" + " " + props.textColor
                }
              >
                <p>SERVICES</p>
                <FontAwesomeIcon icon={faAdd} className="text-xs ml-1" />
              </a>
              {isServicesOption && (
                <motion.ul
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  onMouseEnter={() => {
                    handleMouseEnter(2);
                  }}
                  onMouseLeave={() => {
                    handleMouseLeave(2);
                  }}
                  className="w-auto rounded-md absolute top-20 h-28 bg-white flex flex-col items-start justify-evenly"
                >
                  <li>
                    <a
                      href="/service"
                      className="text-black/80 pr-4 hover:text-red-600"
                    >
                      Services
                    </a>
                  </li>
                  <li>
                    <a
                      href="/service-details"
                      className="text-black/80 pr-4 hover:text-red-600"
                    >
                      Services Details
                    </a>
                  </li>
                </motion.ul>
              )}
            </li>
            <li>
              <a
                onMouseEnter={() => {
                  handleMouseEnter(3);
                }}
                onMouseLeave={() => {
                  handleMouseLeave(3);
                }}
                href="/team-members"
                style={{ color: navColor ? "#444444" : "" }}
                className={
                  "hover:text-red-500 flex items-center" + " " + props.textColor
                }
              >
                <p>PAGES</p>
                <FontAwesomeIcon icon={faAdd} className="text-xs ml-1" />
              </a>
              {isPagesOption && (
                <motion.ul
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  onMouseEnter={() => {
                    handleMouseEnter(3);
                  }}
                  onMouseLeave={() => {
                    handleMouseLeave(3);
                  }}
                  className="w-auto rounded-md absolute top-20 min-h-28 bg-white flex flex-col gap-3 items-start justify-evenly"
                >
                  <li className="pt-3">
                    <a
                      href="/team-members"
                      className="text-black/80 pr-4 hover:text-red-600"
                    >
                      Team members
                    </a>
                  </li>
                  <li>
                    <a
                      href="/team-members-details"
                      className="text-black/80 pr-4 hover:text-red-600"
                    >
                      Team Members Details
                    </a>
                  </li>
                  <li>
                    <a
                      href="/faq"
                      className="text-black/80 pr-4 hover:text-red-600"
                    >
                      FAQ
                    </a>
                  </li>
                  <li className="pb-3">
                    <a
                      href="/case-study"
                      className="text-black/80 pr-4 hover:text-red-600"
                    >
                      Case Study
                    </a>
                  </li>
                </motion.ul>
              )}
            </li>
            <li>
              <a
                onMouseEnter={() => {
                  handleMouseEnter(4);
                }}
                onMouseLeave={() => {
                  handleMouseLeave(4);
                }}
                href="/blog"
                style={{ color: navColor ? "#444444" : "" }}
                className={
                  "hover:text-red-500 flex items-center" + " " + props.textColor
                }
              >
                <p>BLOG</p>
                <FontAwesomeIcon icon={faAdd} className="text-xs ml-1" />
              </a>
              {isBlogOption && (
                <motion.ul
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  onMouseEnter={() => {
                    handleMouseEnter(4);
                  }}
                  onMouseLeave={() => {
                    handleMouseLeave(4);
                  }}
                  className="w-auto rounded-md absolute top-20 h-28 bg-white flex flex-col items-start justify-evenly"
                >
                  <li>
                    <a
                      href="/blog"
                      className="text-black/80 pr-4 hover:text-red-600"
                    >
                      Blog
                    </a>
                  </li>
                  <li>
                    <a
                      href="/blog-details"
                      className="text-black/80 pr-4 hover:text-red-600"
                    >
                      Blog Details
                    </a>
                  </li>
                </motion.ul>
              )}
            </li>
            <li>
              <a
                href="/error-page"
                style={{ color: navColor ? "#444444" : "" }}
                className={
                  "hover:text-red-500 flex items-center" + " " + props.textColor
                }
              >
                <p>SHOP</p>
              </a>
            </li>
            <li>
              <a
                href="/contact"
                style={{ color: navColor ? "#444444" : "" }}
                className={
                  "hover:text-red-500 flex items-center" + " " + props.textColor
                }
              >
                <p>CONTACT</p>
              </a>
            </li>
            <li>
              <p
                onClick={() => {
                  setSearchOption(!isSearchOption);
                }}
              >
                {props.pageIndex === 2 ? (
                  <FontAwesomeIcon
                  icon={faMagnifyingGlass}
                  style={{ color: "#444444"}}
                  className=" relative top-0 left-16"
                />
                ): (
                  <FontAwesomeIcon
                  icon={faMagnifyingGlass}
                  style={{ color: navColor ? "#444444" : "#fff" }}
                  className=" relative top-0 left-16"
                />
                )}
              </p>
              {isSearchOption && (
                <motion.div
                  initial={{ y: 80, x: 135, opacity: 0 }}
                  animate={{ y: 0, x: 0, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="search-bar absolute flex items-center justify-between"
                >
                  <input
                    type="text"
                    placeholder="Search..."
                    className="w-4/5 h-full ml-4"
                  />
                  <button className="w-1/5">
                    <FontAwesomeIcon
                      icon={faArrowRight}
                      className="text-red-500"
                    />
                  </button>
                </motion.div>
              )}
            </li>
          </ul>
            <NavBtn pageIndex={props.navBtn}/>
          <button
            onClick={() => {
              toggleNavModal();
            }}
            className="navbar-button"
          >
            {props.homePage ? (
              <>
                <Image
                  src="/assets/navbar/menu-bars-white.svg"
                  width="14"
                  height="9"
                  alt="menu"
                  className={!navColor ? "block w-5 h-5" : "hidden"}
                />
                <Image
                  src="/assets/navbar/menu-bars-red.svg"
                  width="14"
                  height="9"
                  alt="menu"
                  className={!navColor ? "hidden" : "block w-5 h-5"}
                />
              </>
            ) : (
              <Image
                src="/assets/navbar/menu-bars-red.svg"
                width="14"
                height="9"
                alt="menu"
                className="w-5 h-5"
              />
            )}
          </button>
        </div>
      </nav>

      <div className={isActive ? "mobile-nav mobile-nav-active" : "mobile-nav"}>
        <div
          className={
            isActive ? "mobile-navbar mobile-navbar-active" : "mobile-navbar"
          }
        >
          <div className="h-25 bg-white w-full flex items-center justify-between">
            <a href="/" className="mx-3">
              <Image
                src="/assets/logo-dark.svg"
                width="155"
                height="50"
                alt="Logo"
                className=" logo"
              />
            </a>
            <button
              onClick={() => {
                toggleNavModal();
              }}
              className="navbar-button mx-3"
            >
              <FontAwesomeIcon
                icon={faMultiply}
                className="text-2xl text-black/60 hover:text-red-500 mr-4"
              />
            </button>
          </div>
          <ul className="flex items-center flex-col gap-2 w-full">
            <li>
              <div
                onClick={() => {
                  clearHoverOptions();
                  setHomeOption(!isHomeOption);
                }}
                className=" text-black/60 hover:text-red-500 flex items-center justify-between "
              >
                <p>Home</p>
                <FontAwesomeIcon icon={faAdd} className="text-xs mr-3" />
              </div>
              <ul
                className={
                  isHomeOption
                    ? "mobile-home-dropdown"
                    : " mobile-home-dropdown-hidden"
                }
              >
                <li
                  className={
                    isHomeOption
                      ? "h-auto flex flex-col items-center justify-center  pt-7"
                      : "hidden"
                  }
                >
                  <a
                    href="/"
                    className={
                      isHomeOption
                        ? "text-black/60 hover:text-red-500 flex flex-col items-center"
                        : "hidden"
                    }
                  >
                    <img src="/assets/navbar/Homepage-1.webp" alt="img" loading="lazy" />
                    <p className="text-xs">Homepage One</p>
                  </a>
                </li>
                <li
                  className={
                    isHomeOption
                      ? "h-auto flex flex-col items-center justify-center  pt-7"
                      : "hidden"
                  }
                >
                  <a
                    href="/home-page-two"
                    className={
                      isHomeOption
                        ? "text-black/60 hover:text-red-500 flex flex-col items-center"
                        : "hidden"
                    }
                  >
                    <img src="/assets/navbar/Homepage-2.webp" alt="img" loading="lazy"/>
                    <p className="text-xs">Homepage Two</p>
                  </a>
                </li>
                <li
                  className={
                    isHomeOption
                      ? "h-auto flex flex-col items-center justify-center  pt-7"
                      : "hidden"
                  }
                >
                  <a
                    href="/home-page-three"
                    className={
                      isHomeOption
                        ? "text-black/60 hover:text-red-500 flex flex-col items-center "
                        : "hidden"
                    }
                  >
                    <img src="/assets/navbar/Homepage-3.webp" alt="img" loading="lazy"/>
                    <p className="text-xs">Homepage Three</p>
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a
                href="/about"
                className=" text-black/60 hover:text-red-500 flex items-center justify-between "
              >
                <p>About</p>
              </a>
            </li>
            <li>
              <div
                onClick={() => {
                  clearHoverOptions();
                  setServicesOption(!isServicesOption);
                }}
                className=" text-black/60 hover:text-red-500 flex items-center justify-between "
              >
                <p>Serices</p>
                <FontAwesomeIcon icon={faAdd} className="text-xs mr-3" />
              </div>

              <ul
                className={
                  isServicesOption
                    ? "w-2/3 rounded-md h-28 bg-white flex flex-col items-start justify-evenly duration-500 my-3"
                    : "h-0 w-2/3 duration-500"
                }
              >
                <li className={isServicesOption ? "block" : "hidden"}>
                  <a href="/service" className="text-black/80 ml-5">
                    Services
                  </a>
                </li>
                <li className={isServicesOption ? "block" : "hidden"}>
                  <a href="/service-details" className="text-black/80 ml-5">
                    Services Details
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <div
                onClick={() => {
                  clearHoverOptions();
                  setPagesOption(!isPagesOption);
                }}
                className=" text-black/60 hover:text-red-500 flex items-center justify-between "
              >
                <p>Pages</p>
                <FontAwesomeIcon icon={faAdd} className="text-xs mr-3" />
              </div>

              <ul
                className={
                  isPagesOption
                    ? "w-2/3 rounded-md min-h-28 bg-white flex flex-col items-start justify-evenly duration-500 my-3 gap-3"
                    : "h-0 w-2/3 duration-500"
                }
              >
                <li className={isPagesOption ? "block pt-3" : "hidden"}>
                  <a href="/team-members" className="text-black/80 ml-5">
                    Team members
                  </a>
                </li>
                <li className={isPagesOption ? "block" : "hidden"}>
                  <a
                    href="/team-members-details"
                    className="text-black/80 ml-5"
                  >
                    Team Members Details
                  </a>
                </li>
                <li className={isPagesOption ? "block" : "hidden"}>
                  <a href="/faq" className="text-black/80 ml-5">
                    FAQ
                  </a>
                </li>
                <li className={isPagesOption ? "block pb-3" : "hidden"}>
                  <a href="/case-study" className="text-black/80 ml-5">
                    Case Study
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <div
                onClick={() => {
                  clearHoverOptions();
                  setBlogOption(!isBlogOption);
                }}
                className=" text-black/60 hover:text-red-500 flex items-center justify-between "
              >
                <p>Blog</p>
                <FontAwesomeIcon icon={faAdd} className="text-xs mr-3" />
              </div>

              <ul
                className={
                  isBlogOption
                    ? "w-2/3 rounded-md h-28 bg-white flex flex-col items-start justify-evenly duration-500 my-3"
                    : "h-0 duration-500 w-2/3"
                }
              >
                <li className={isBlogOption ? "block" : "hidden"}>
                  <a href="/blog" className="text-black/80 ml-5">
                    Blog
                  </a>
                </li>
                <li className={isBlogOption ? "block" : "hidden"}>
                  <a href="/blog-details" className="text-black/80 ml-5">
                    Blog Details
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <div className=" text-black/60 hover:text-red-500 flex items-center justify-between ">
                <a href="/service">Shop</a>
              </div>
            </li>
            <li>
              <a
                href="/contact"
                className=" text-black/60 hover:text-red-500 flex items-center justify-between "
              >
                <p>Contact</p>
              </a>
            </li>
            <li className="mt-5 w-full">
              <div className="flex items-center justify-between w-full">
                <div>
                  <a href="/contact" className="mobile-nav-contact-link">
                    LETS TALK
                  </a>
                </div>
                <div
                  onClick={() => {
                    clearHoverOptions();
                    setMobileSearchOption(!isMobileSearchOption)
                  }}
                >
                  <FontAwesomeIcon
                    icon={faMagnifyingGlass}
                    className="mr-5 text-red-500"
                  />
                </div>
                {isMobileSearchOption && (
                  <motion.div
                    initial={{ y: 80, x: 135, opacity: 0 }}
                    animate={{ y: 0, x: 0, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="mobile-search-bar absolute flex"
                  >
                    <input
                      type="text"
                      placeholder="Search..."
                      className="w-full h-full ml-5"
                    />
                    <button className="mr-5">
                      <FontAwesomeIcon
                        icon={faArrowRight}
                        className="text-red-500 ml-3"
                      />
                    </button>
                  </motion.div>
                )}
              </div>
            </li>
          </ul>
        </div>
        <div
          onClick={() => {
            toggleNavModal();
          }}
          className={
            isActive
              ? "h-screen w-full fixed top-0 bg-black/20 duration-500 -z-10"
              : "hidden "
          }
        ></div>
      </div>
    </>
  );
}

function NavBtn({ pageIndex }) {
  const [navColor, setNavColor] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      if (scrollPosition > 100) {
        setNavColor(true);
      } else {
        setNavColor(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  if (pageIndex === 1) {
    return (
      <a href="/contact" className="nav-contact-link">
        LETS TALK
      </a>
    );
  }else if (pageIndex === 2){
    return (
      <a href="/contact" className="nav-contact-link">
        LETS TALK
      </a>
    );
  }else if (pageIndex === 3){
    return (
      <a href="/contact" className="nav-contact-link-three">
        <p style={{color: navColor ? "#444" : "#fff"}}>Call Us</p>
        <h1 style={{color: navColor ? "#444" : "#fff"}}>+1 012 345 6789</h1>
      </a>
    );
  }
}
