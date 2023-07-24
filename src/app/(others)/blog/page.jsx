"use client"

import "./blog.css";
import Banner from "@/components/Sections/Banner/Banner";
import Button from "@/components/Buttons/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faArrowRight,
  faClock,
} from "@fortawesome/free-solid-svg-icons";
import BlogSection from "@/components/Sections/BlogSection/BlogSection";
import siteData from '@/data/pages/blog.js';
import Reveal from '@/components/ui/Reveal/Reveal'
import {motion} from 'framer-motion'
import data from '@/data/section/blog-post';


export default function page() {

  const otherPages = [
    {
      id: 1,
      href: "#",
      name: "1",
    },
    {
      id: 2,
      href: "#",
      name: "2",
    },
    {
      id: 3,
      href: "#",
      name: "3",
    },
    {
      id: 4,
      href: "#",
      name: "...",
    },
  ];

  return (
    <>
      <Banner
        title={siteData[0].title}
        description={siteData[0].description}
      />
      <section className="w-full min-h-screen bg-color flex items-center justify-center">
        <div className="wrapper h-auto blog py-32">
          <div>
            {data.map((items, i) => {
              return (
                <Reveal key={items.id} className="blog-post relative">
                  <motion.img
                    initial={{filter: "blur(20px)"}}
                    animate={{filter: "blur(0px)"}}
                    transition={{duration: 0.3, delay: 0.3 * i}}
                    width={768}
                    height={499}
                    src={items.thumbnail}
                    sizes="(max-width: 868px) 80%"
                    loading="lazy"
                    alt="img"
                  />
                  <div className="flex items-center justify-start mt-10 ml-10">
                    <Reveal className="flex  items-center justify-start gap-4">
                      <motion.img
                        initial={{filter: "blur(20px)"}}
                        animate={{filter: "blur(0px)"}}
                        transition={{duration:0.4, delay: 0.3}}
                        width={40}
                        height={40}
                        src={items.author.profile}
                        alt="icon"
                        loading="lazy"
                      />
                      <h3 className="text-black/50 font-medium mr-10">
                        {items.author.name}
                      </h3>
                    </Reveal>
                    <div className="flex items-center justify-start gap-4 text-black/50 font-medium">
                      <FontAwesomeIcon icon={faClock} />
                      <h3>{items.date}</h3>
                    </div>
                  </div>
                  <a href={"/blog-details/" + items.id}>
                    <h1>{items.title}</h1>
                  </a>
                  <p>{items.summary}</p>
                  <div className="m-10 max-md:pb-10">
                    <Button title="Continue" link="/" />
                  </div>
                  <div className="w-32 h-10 flex items-center justify-center bg-red-500/50 rounded-md blog-post-catagory max-md:hidden">
                    <h2>{items.catagory}</h2>
                  </div>
                </Reveal>
              );
            })}
            <div className="flex items-center justify-center gap-3 mt-5">
              <a
                href="#"
                className="w-10 h-10 rounded-sm border text-xl text-gray-500 hover:text-white duration-300 hover:bg-red-500 flex items-center justify-center"
              >
                <FontAwesomeIcon icon={faArrowLeft} />
              </a>
              {otherPages.map(({ id, name, href }) => {
                return (
                  <a
                    key={id}
                    href={href}
                    className="w-10 h-10 rounded-sm border text-xl text-gray-500 hover:text-white duration-300 hover:bg-red-500 flex items-center justify-center"
                  >
                    {name}
                  </a>
                );
              })}
              <a
                href="#"
                className="w-10 h-10 rounded-sm border text-xl text-gray-500 hover:text-white duration-300 hover:bg-red-500 flex items-center justify-center"
              >
                <FontAwesomeIcon icon={faArrowRight} />
              </a>
            </div>
          </div>
          <BlogSection />
        </div>
      </section>
    </>
  );
}
