"use client";

import "./ServiceSection.css";
import data from "@/data/section/services";
import Image from "next/image";
import { motion } from "framer-motion";
import Reveal from "@/components/ui/Reveal/Reveal";

export default function ServiceSection() {
  return (
    <section className="section-two flex flex-col items-center ">
      <div>
        <h3>Our Services</h3>
        <Reveal>
          <motion.h1
            initial={{ y: 150, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.3 }}
          >
            Integrate The <br /> Tools You Use Everyday
          </motion.h1>
        </Reveal>
      </div>
      <div className="service-wrapper mt-17 pb-29 ">
        {data.map((items, i) => {
          return (
            <Reveal key={items.id} className="max-lg:flex items-center justify-center">
              <motion.div
                initial={{ y: 150, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.3, delay: i * 0.3 }}
                className="services"
              >
                <Image
                  src={items.icon}
                  width={70}
                  height={80}
                  alt="icon"
                  className="hoverEffect"
                />
                <h2>{items.title}</h2>
                <p>{items.description}</p>
              </motion.div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
