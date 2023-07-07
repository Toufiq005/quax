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
          <Reveal>
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
          <div className="flex items-center max-lg:flex-col max-sm:w-full">
            <input
              type="text"
              placeholder="First Name"
              required
              className={"mr-4 max-lg:mr-0" + " " + props.inputColor}
            />
            <input
              type="text"
              placeholder="Last Name"
              required
              className={"mr-4 max-lg:mr-0" + " " + props.inputColor}
            />
          </div>
          <div className="flex items-center max-lg:flex-col max-sm:w-full">
            <input
              type="text"
              placeholder="Phone NO"
              required
              className={"mr-4 max-lg:mr-0" + " " + props.inputColor}
            />
            <input
              type="text"
              placeholder="Subject ..."
              className={"mr-4 max-lg:mr-0" + " " + props.inputColor}
            />
          </div>
          <textarea
            name="message"
            cols="30"
            rows="10"
            placeholder="Type massege ..."
            className={props.inputColor}
          ></textarea>
          <button type="submit">Submit Message</button>
        </form>
      </div>
    </section>
  );
}
