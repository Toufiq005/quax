"use client"

import "./BlogSection.css";
import Image from "next/image";
import Line from '@/components/ui/Line/Line';
import data from "@/data/section/blog-section"
import Reveal from "@/components/ui/Reveal/Reveal";
import { motion } from "framer-motion";

export default  function BlogSection() {

  return (
    <>
      <div className="w-full mt-10">
        <div className="blog-div mb-4">
          <from className="w-full flex items-center justify-center h-14">
            <input type="text" placeholder="Search..." className="focus:outline-blue-300 w-2/3 h-full pl-3" />
            <button className="w-1/3 h-full bg-header font-bold text-white rounded-tr-lg rounded-br-lg">Search</button>
          </from>
        </div>
        <div className="blog-div w-full h-auto mb-4">
          <h1 className="font-semibold text-black/70 text-3xl m-7">
            Recent Posts
          </h1>
          <Line/>
          <div className="w-full flex flex-col items-center justify-center">
            <a href="/">
              <Reveal className="flex w-80 my-5 ">
                <motion.img initial={{filter: "blur(15px)"}} animate={{filter: "blur(0px)"}} transition={{duration:0.3, delay:0.3}} src="/assets/blog-post/blog-post-one.png" alt="img" style={{width: "120px", height: "80px"}} />
                <h className="ml-5 text-gray-600 text-xl font-medium hover:text-red-500 duration-300">Ten Sass That Had Gone Way To Far.</h>
              </Reveal>
            </a>
            <a href="/">
              <Reveal className="flex w-80 my-5 ">
                <motion.img initial={{filter: "blur(15px)"}} animate={{filter: "blur(0px)"}} transition={{duration:0.3, delay:0.3}} src="/assets/blog-post/blog-post-two.png" alt="img" style={{width: "120px", height: "80px"}} />
                <h className="ml-5 text-gray-600 text-xl font-medium hover:text-red-500 duration-300">Ten Moments To Remember From Seo.</h>
              </Reveal>
            </a>
            <a href="/">
              <Reveal className="flex w-80 my-5 ">
                <motion.img initial={{filter: "blur(15px)"}} animate={{filter: "blur(0px)"}} transition={{duration:0.3, delay:0.3}} src="/assets/blog-post/blog-post-three.png" alt="img" style={{width: "120px", height: "80px"}} />
                <h className="ml-5 text-gray-600 text-xl font-medium hover:text-red-500 duration-300">Simple Guidance For You In Startup Business.</h>
              </Reveal>
            </a>
          </div>
        </div>
        <div className="blog-div my-4">
          <h1 className="font-semibold text-black/70 text-3xl m-7">
            Categories
          </h1>
          <Line/>
          <div>
            {data.blogCategories.map(({ id, category, href }) => {
              return (
                <a href={href} key={id} target="_blank">
                  <h2 className="text-lg text-black/70 duration-300 hover:text-red-500 font-medium mx-7 my-3">
                    {category}
                  </h2>
                </a>
              );
            })}
          </div>
        </div>
        <div className="blog-div w-full my-4">
          <h1 className="font-semibold text-black/70 text-3xl m-7">
            Follow Us
          </h1>
          <Line/>
          <div className="follow-us-icons pb-3">
            {data.blogFollowUsLinks.map((items) => {
              return (
                <a
                  href={items.link}
                  key={items.id}
                  target="_blank"
                  className="hover:scale-105 duration-300 block"
                >
                  <Image width={90} height={90} src={items.icon} alt="icon" />
                </a>
              );
            })}
          </div>
        </div>
        <div className="blog-div my-4">
          <h1 className="font-semibold text-black/70 text-3xl m-7">Tags</h1>
          <Line/>
          <div className="blog-tags ">
            {data.blogTags.map(({ id, tag, href }) => {
              return (
                <a href={href} key={id} target="_blank">
                  <h2 className="px-3 py-2 hover:bg-red-500 bg-very-light-gray duration-300 text-black/30 hover:text-white rounded m-1 text-center">
                    {tag}
                  </h2>
                </a>
              );
            })}
          </div>
        </div>
        <div className="blog-div my-4">
          <h1 className="font-semibold text-black/70 text-3xl m-7">
            About Author
          </h1>
          <Line/>
          <p className="text-light-gray m-7">
            {data.aboutAuthor}
          </p>
        </div>
      </div>
    </>
  );
}
