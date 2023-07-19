"use client";

import "./ContactSection.css";
import { useRef, } from "react";
import emailjs from "emailjs-com";
import { motion } from "framer-motion";
import Reveal from "@/components/ui/Reveal/Reveal";

export default function ContactSection(props) {
  const form = useRef();

  const serviceId = process.env.NEXT_PUBLIC_SERVICE_ID;
  const templateId = process.env.NEXT_PUBLIC_TEMPLATE_ID;
  const publicKey = process.env.NEXT_PUBLIC_PUBLIC_KEY;

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(serviceId, templateId, form.current, publicKey).then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
  };

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
        <form
          ref={form}
          onSubmit={sendEmail}
          className="flex flex-col justify-center items-center max-lg:w-full"
        >
          <div className="from-input-wrapper">
            <input
              type="text"
              placeholder="First Name"
              name="first_name"
              required
              className={"focus:outline-blue-300" + " " + props.inputColor}
            />
            <input
              type="text"
              placeholder="Last Name"
              name="last_name"
              required
              className={"focus:outline-blue-300" + " " + props.inputColor}
            />
            <input
              type="text"
              placeholder="Phone NO"
              name="phone_no"
              required
              className={"focus:outline-blue-300" + " " + props.inputColor}
            />
            <input
              type="text"
              placeholder="Subject ..."
              name="subject"
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
