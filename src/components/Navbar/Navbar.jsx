"use client";

import React, { useState } from "react";
import "./Navbar.css";
import Image from "next/image";
import DarkMode from "./DarkMode/DarkMode";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAdd, faMultiply } from "@fortawesome/free-solid-svg-icons";
import "next/navigation";

export default function Navbar(props) {
  const [navbarColor, setNavbarColor] = useState(false);
  const [isActive, setActive] = useState(false);
  const [isHomeOption, setHomeOption] = useState(false);
  const [isServicesOption, setServicesOption] = useState(false);
  const [isPagesOption, setPagesOption] = useState(false);
  const [isBlogOption, setBlogOption] = useState(false);
  const [timerId, setTimerId] = useState(null);
  const [isHomePage, setIsHomePage] = useState(true);

  function clearHoverOptions() {
    setHomeOption(false);
    setServicesOption(false);
    setPagesOption(false);
    setBlogOption(false);
    setShopOption(false);
    setContactOption(false);
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
    } else if (props === 5) {
      setTimerId(
        setTimeout(function () {
          setShopOption(false);
        }, 500)
      );
    } else if (props === 6) {
      setTimerId(
        setTimeout(function () {
          setContactOption(false);
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
    } else if (props === 5) {
      setShopOption(true);
    } else if (props === 6) {
      setContactOption(true);
    }
  }

  const changeNavbarColor = () => {
    if (window.scrollY > 100) {
      setNavbarColor(true);
    } else {
      setNavbarColor(false);
    }
  };


  return (
    <>
      <nav
        className={
          "w-full h-25 flex items-center justify-center fixed z-50" +
          " " +
          props.bgColor
        }
      >
        <div className="navbar">
          <a href="/">
            {props.homePage ? (
              <>
                <Image
                  src="/assets/logo-white.svg"
                  width="155"
                  height="50"
                  alt="Logo"
                  className={navbarColor ? "hidden logo" : "block logo"}
                />
                <Image
                  src="/assets/logo-dark.svg"
                  width="155"
                  height="50"
                  alt="Logo"
                  className={!navbarColor ? "hidden logo" : "block logo"}
                />
              </>
            ) : (
              <Image
                src="/assets/logo-dark.svg"
                width="155"
                height="50"
                alt="Logo"
                className="logo"
              />
            )}
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
                className={"flex items-center" + " " + props.textColor}
                href="/"
              >
                <p>HOME</p>
                <FontAwesomeIcon icon={faAdd} className="text-xs ml-1" />
              </a>

              {isHomeOption && (
                <div className="home-option-wrapper">
                  <ul
                    onMouseEnter={() => {
                      handleMouseEnter(1);
                    }}
                    onMouseLeave={() => {
                      handleMouseLeave(1);
                    }}
                    className="home-option"
                  >
                    <li>
                      <a
                        href="/"
                        className="flex flex-col items-center justify-center"
                      >
                        <Image
                          src="/assets/navbar/Homepage-1.webp"
                          width="307"
                          height="168"
                          alt="img"
                        />
                        <p>Homepage One</p>
                      </a>
                    </li>
                    <li>
                      <a
                        href="/"
                        className="flex flex-col items-center justify-center"
                      >
                        <Image
                          src="/assets/navbar/Homepage-2.webp"
                          width="307"
                          height="161"
                          alt="img"
                        />
                        <p>Homepage Two</p>
                      </a>
                    </li>
                    <li>
                      <a
                        href="/"
                        className="flex flex-col items-center justify-center"
                      >
                        <Image
                          src="/assets/navbar/Homepage-3.webp"
                          width="307"
                          height="160"
                          alt="img"
                        />
                        <p>Homepage Three</p>
                      </a>
                    </li>
                  </ul>
                </div>
              )}
            </li>
            <li>
              <a
                href="/about"
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
                className={
                  "hover:text-red-500 flex items-center" + " " + props.textColor
                }
              >
                <p>SERVICES</p>
                <FontAwesomeIcon icon={faAdd} className="text-xs ml-1" />
              </a>
              {isServicesOption && (
                <ul
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
                </ul>
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
                className={
                  "hover:text-red-500 flex items-center" + " " + props.textColor
                }
              >
                <p>PAGES</p>
                <FontAwesomeIcon icon={faAdd} className="text-xs ml-1" />
              </a>
              {isPagesOption && (
                <ul
                  onMouseEnter={() => {
                    handleMouseEnter(3);
                  }}
                  onMouseLeave={() => {
                    handleMouseLeave(3);
                  }}
                  className="w-auto rounded-md absolute top-20 h-28 bg-white flex flex-col items-start justify-evenly"
                >
                  <li>
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
                  <li>
                    <a
                      href="/case-study"
                      className="text-black/80 pr-4 hover:text-red-600"
                    >
                      Case Study
                    </a>
                  </li>
                </ul>
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
                className={
                  "hover:text-red-500 flex items-center" + " " + props.textColor
                }
              >
                <p>BLOG</p>
                <FontAwesomeIcon icon={faAdd} className="text-xs ml-1" />
              </a>
              {isBlogOption && (
                <ul
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
                </ul>
              )}
            </li>
            <li>
              <a
                href="/shop"
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
                className={
                  "hover:text-red-500 flex items-center" + " " + props.textColor
                }
              >
                <p>CONTACT</p>
              </a>
            </li>
          </ul>
          <div className="dark-mode-desk">
            <DarkMode />
          </div>
          <a href="/contact" className="nav-contact-link">
            LETS TALK
          </a>
          <button
            onClick={() => {
              setActive(!isActive);
            }}
            className="navbar-button"
          >
            {isHomePage ? (
              <>
                <Image
                  src="/assets/navbar/menu-bars-white.svg"
                  width="14"
                  height="9"
                  alt="menu"
                  className={!navbarColor ? "block w-5 h-5" : "hidden"}
                />
                <Image
                  src="/assets/navbar/menu-bars-red.svg"
                  width="14"
                  height="9"
                  alt="menu"
                  className={!navbarColor ? "hidden" : "block w-5 h-5"}
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
          <div className="h-25 bg-dark-blue w-full flex items-center justify-between">
            <a href="/" className="mx-3">
              <Image
                src="/assets/logo-white.svg"
                width="155"
                height="50"
                alt="Logo"
                className=" logo"
              />
            </a>
            <button
              onClick={() => {
                setActive(!isActive);
              }}
              className="navbar-button mx-3"
            >
              <FontAwesomeIcon
                icon={faMultiply}
                className="text-2xl text-white hover:text-red-500 mr-4"
              />
            </button>
          </div>
          <ul className="flex items-center flex-col w-full">
            <li>
              <div
                onClick={() => {
                  clearHoverOptions();
                  setHomeOption(!isHomeOption);
                }}
                className=" text-white hover:text-red-500 flex items-center justify-between "
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
                      ? "w-full h-auto flex flex-col items-center justify-center"
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
                    <Image
                      src="/assets/navbar/Homepage-1.webp"
                      width={100}
                      height={50}
                      alt="img"
                    />
                    <p className="text-xs">Homepage One</p>
                  </a>
                </li>
                <li
                  className={
                    isHomeOption
                      ? "w-full h-auto flex flex-col items-center justify-center"
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
                    <Image
                      src="/assets/navbar/Homepage-2.webp"
                      width={100}
                      height={50}
                      alt="img"
                    />
                    <p className="text-xs">Homepage Two</p>
                  </a>
                </li>
                <li
                  className={
                    isHomeOption
                      ? "w-full h-auto flex flex-col items-center justify-center"
                      : "hidden"
                  }
                >
                  <a
                    href="/"
                    className={
                      isHomeOption
                        ? "text-black/60 hover:text-red-500 flex flex-col items-center "
                        : "hidden"
                    }
                  >
                    <Image
                      src="/assets/navbar/Homepage-3.webp"
                      width={100}
                      height={50}
                      alt="img"
                    />
                    <p className="text-xs">Homepage Three</p>
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a
                href="/about"
                className=" text-white hover:text-red-500 flex items-center justify-between "
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
                className=" text-white hover:text-red-500 flex items-center justify-between "
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
                className=" text-white hover:text-red-500 flex items-center justify-between "
              >
                <p>Pages</p>
                <FontAwesomeIcon icon={faAdd} className="text-xs mr-3" />
              </div>

              <ul
                className={
                  isPagesOption
                    ? "w-2/3 rounded-md h-28 bg-white flex flex-col items-start justify-evenly duration-500 my-3"
                    : "h-0 w-2/3 duration-500"
                }
              >
                <li className={isPagesOption ? "block" : "hidden"}>
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
                <li className={isPagesOption ? "block" : "hidden"}>
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
                className=" text-white hover:text-red-500 flex items-center justify-between "
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
                  <a href="/blog-deltails" className="text-black/80 ml-5">
                    Blog Details
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <div className=" text-white hover:text-red-500 flex items-center justify-between ">
                <p>Shop</p>
              </div>
            </li>
            <li>
              <div className=" text-white hover:text-red-500 flex items-center justify-between ">
                <p>Contact</p>
              </div>
            </li>
            <li className="mt-5">
              <a href="/contact" className="mobile-nav-contact-link">
                LETS TALK
              </a>
            </li>
            <li className="mt-5">
              <div className="dark-mode-mobile">
                <DarkMode />
              </div>
            </li>
          </ul>
        </div>
        <div
          onClick={() => {
            setActive(!isActive);
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
