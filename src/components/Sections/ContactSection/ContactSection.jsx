"use client";

import "./ContactSection.css";
import { motion } from "framer-motion";
import Reveal from "@/components/ui/Reveal/Reveal";

export default function ContactSection(props) {
  return (
    <section
      className={
        "w-full h-auto flex items-center justify-center" + " " + props.bgColor
      }
    >
      <div className="wrapper contact-section flex flex-col items-center justify-center max-lg:w-full">
        {props.headerOne ? (
          <Reveal>
            <motion.h3
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              {props.headerOne}
            </motion.h3>
          </Reveal>
        ) : null}
        <Reveal>
          <motion.h1
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            style={{ marginBottom: props.headerOne ? "60px" : "0" }}
          >
            {props.headerTwo}
          </motion.h1>
        </Reveal>
        {props.headerThree ? (
          <Reveal className="flex items-center justify-center">
            <motion.p
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              {props.headerThree}
            </motion.p>
          </Reveal>
        ) : null}
        <form className="flex flex-col justify-center items-center max-lg:w-full">
          <div className="from-input-wrapper">
            <input
              type="text"
              placeholder="First Name"
              required
              className={"focus:outline-blue-300" + " " + props.inputColor}
            />
            <input
              type="text"
              placeholder="Last Name"
              required
              className={"focus:outline-blue-300" + " " + props.inputColor}
            />
            <input
              type="text"
              placeholder="Phone NO"
              required
              className={"focus:outline-blue-300" + " " + props.inputColor}
            />
            <input
              type="text"
              placeholder="Subject ..."
              className={"focus:outline-blue-300" + " " + props.inputColor}
            />
          </div>
          <textarea
            name="message"
            cols="30"
            rows="10"
            placeholder="Type massege ..."
            className={"focus:outline-blue-300" + " " + props.inputColor}
          ></textarea>
          <button type="submit">Submit Message</button>
        </form>
      </div>
    </section>
  );
}
