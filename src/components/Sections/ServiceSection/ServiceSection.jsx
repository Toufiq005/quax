"use client"

import "./ServiceSection.css";
import data from "../../../data/services";
import Image from "next/image";
import { motion } from "framer-motion";

export default function ServiceSection() {
  return (
    <section className="section-two flex flex-col items-center ">
      <div>
        <h3>Our Services</h3>
        <motion.h1 initial={{ y: 150, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 0.3 }} className="mb-">
          Integrate The <br /> Tools You Use Everyday
        </motion.h1>
      </div>
      <div className="service-wrapper mt-17 pb-29 ">
        {data.map((items, i) => {
          return (
            <motion.div initial={{ y: 150, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 0.2, delay: i * 0.1 }} className="services " key={items.id}>
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
          );
        })}
      </div>
    </section>
  );
}
