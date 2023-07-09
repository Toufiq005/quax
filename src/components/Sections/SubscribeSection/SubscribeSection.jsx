"use client";

import "./SubscribeSection.css";
import { motion } from "framer-motion";
import Reveal from "@/components/ui/Reveal/Reveal";

export default function SubscribeSection() {
  return (
    <section className="w-full h-auto bg-color flex items-center justify-center">
      <div className="w-full flex items-center justify-center py-29">
        <div className="subscribe-section bg-header flex flex-col items-center justify-center overflow-hidden">
          <h1>Get Your Site Optimized & Converting Now</h1>
          <Reveal>
            <motion.form
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.2 }}
              className="max-xl:flex flex-col items-center justify-center"
            >
              <input
                type="email"
                placeholder='&#xf0e0;     e-mail address'
                className="bg-transparent subscribe-input text-white placeholder:text-white focus:outline-blue-300"
              />
              <button type="submit">SUBSCRIBE NOW</button>
            </motion.form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
