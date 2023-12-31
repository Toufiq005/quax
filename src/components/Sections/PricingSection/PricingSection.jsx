"use client";

import "./PricingSection.css";
import Image from "next/image";
import Reveal from "@/components/ui/Reveal/Reveal";
import { motion } from "framer-motion";
import data from '@/data/section/pricing-section.js'

export default function PricingSection() {

  return (
    <section className="section-four flex flex-col items-center ">
      <Reveal>
        <motion.h2
          initial={{ y: -150, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="pt-29 max-sm:pt-14"
        >
          {data.headLineOne}
        </motion.h2>
      </Reveal>
      <Reveal className="max-lg:flex items-center justify-center">
        <motion.h1
          initial={{ y: -150, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4 }}
        >
          {data.title}
        </motion.h1>
      </Reveal>
      <Reveal className="max-lg:flex items-center justify-center">
        <motion.p
          initial={{ y: -150, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.2 }}
        >
          {data.headLineTwo}
        </motion.p>
      </Reveal>

      <div className="flex items-center justify-center mt-17 price-div">
        {data.price.map((props, i) => {
          return (
            <Reveal
              key={props.id}
              className="max-lg:flex items-center justify-center"
            >
              <motion.div
                initial={{ y: 250, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.3 * i }}
                className="price flex flex-col items-center"
              >
                <h2>{props.plan}</h2>
                <p className="mx-3">{props.title}</p>
                <h1>
                  <span className="text-6xl">{props.price}</span>
                  /mo
                </h1>
                <a href={props.link} className="bg-white text-header">
                  Buy Now
                </a>
                <div className="flex flex-col justify-center mt-10">
                  <p className="flex ml-10">
                    <span className="mx-3">
                      <Image
                        width={25}
                        height={25}
                        src="/assets/cheak-mark.svg"
                        alt="icon"
                      />
                    </span>
                    {props.bulletPoint.bpOne}
                  </p>
                  <p className="flex ml-10 my-7">
                    <span className="mx-3">
                      <Image
                        width={25}
                        height={25}
                        src="/assets/cheak-mark.svg"
                        alt="icon"
                      />
                    </span>
                    {props.bulletPoint.bpTwo}
                  </p>
                  <p className="flex ml-10">
                    <span className="mx-3">
                      <Image
                        width={25}
                        height={25}
                        src="/assets/cheak-mark.svg"
                        alt="icon"
                      />
                    </span>
                    {props.bulletPoint.bpThree}
                  </p>
                </div>
              </motion.div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
