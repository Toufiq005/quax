"use client";

import { useState } from "react";
import "./CaseStudySection.css";
import { motion } from "framer-motion";
import Image from "next/image";
import Reveal from "@/components/ui/Reveal/Reveal";
import data from "@/data/section/case-study.js";

export default function CaseStudySection() {
  const [category, setCategory] = useState("all");

  const filteredData = data.filter((item) => {
    if (category === "all") {
      return true;
    } else {
      return item.category === category;
    }
  });

  const handleCategoryChange = (selectedCategory) => {
    setCategory(selectedCategory);
  };
  return (
    <section className="case-study w-full min-h-screen flex items-center justify-center bg-very-light-gray">
      <div className="wrapper w-full h-auto flex flex-col items-center justify-center">
        <h3>Portfolio</h3>
        <h1>Recent Case Study</h1>
        <ul className="flex items-center justify-between">
          <li onClick={() => handleCategoryChange("all")}>
            <h4>All</h4>
          </li>
          <li onClick={() => handleCategoryChange("Marketing")}>
            <h4>Marketing</h4>
          </li>
          <li onClick={() => handleCategoryChange("Designing")}>
            <h4>Designing</h4>
          </li>
          <li onClick={() => handleCategoryChange("Development")}>
            <h4>Development</h4>
          </li>
          <li onClick={() => handleCategoryChange("E-Commerce")}>
            <h4>E-Commerce</h4>
          </li>
        </ul>
        <div className="case-study-container overflow-hidden">
          {filteredData.map((props, i) => {
            return (
              <Reveal key={props.id}>
                <motion.div
                  initial={{ y: -150, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.3, delay: i * 0.2 }}
                  className="relative mx-4"
                >
                  <Image
                    width={370}
                    height={370}
                    src={props.img}
                    alt={props.category}
                  />
                  <h2>{props.title}</h2>
                  <div className="flex items-center">
                    <p className="w-14 h-4 flex items-center border-r border-black/60">
                      {props.author}
                    </p>
                    <p className="ml-4">{props.date}</p>
                  </div>
                  <div className="relative flex items-center justify-center case-study-type">
                    <h5>{props.category}</h5>
                  </div>
                </motion.div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
