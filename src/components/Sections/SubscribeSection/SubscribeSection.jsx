"use client"

import "./SubscribeSection.css";
import { motion } from "framer-motion";

export default function SubscribeSection() {
  return (
    <section className="w-full h-auto bg-color flex items-center justify-center">
      <div className="w-full flex items-center justify-center py-32">
        <div className="subscribe-section bg-header flex flex-col items-center justify-center overflow-hidden">
          <h1>Get Your Site Optimized & Converting Now</h1>
          <motion.form
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: [1 ,1.3,1], opacity: 1 }}
          transition={{ duration: 0.3 }}
            className="max-xl:flex flex-col items-center justify-center"
          >
            <input
              type="email"
              placeholder="&#xf0e0;   e-mail address"
              style={{ fontFamily: "FontAwesome" }}
              className="bg-transparent text-white placeholder:text-white"
            />
            <button type="submit">SUBSCRIBE NOW</button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
