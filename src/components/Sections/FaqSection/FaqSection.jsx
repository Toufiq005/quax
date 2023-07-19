"use client";

import "./FaqSection.css";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import Reveal from "@/components/ui/Reveal/Reveal";

export default function FaqSection(props) {
  const [selectedFaq, setSelectedFaq] = useState(1);

  const handleFaqSelect = (faqId) => {
    setSelectedFaq(faqId === selectedFaq ? null : faqId);
  };

  return (
    <section className="w-full h-auto flex items-center justify-center bg-color">
      <div className="wrapper flex flex-col items-center justify-center faq-section">
        <h3>FAQ</h3>
        <h1>Frequently Asked Questions</h1>
        <div className="flex items-center justify-center gap-28 mt-14 max-xl:flex-col max-sm:w-full">
          <div className="faq-seciton-content ">
            {props.data.map(({ id, qustion, answer }) => {
              return (
                <div
                  key={id}
                  style={{ boxShadow: selectedFaq === id ? "0px 5px 20px rgba(0, 0, 0, 0.1)" : ""}}
                  className="faq-question flex flex-col items-center bg-white max-sm:w-4/5 overflow-hidden"
                >
                  <button
                    className="bg-white flex items-center justify-between max-sm:justify-evenly max-sm:w-4/5"
                    onClick={() => handleFaqSelect(id)}
                  >
                    <h2
                      className={
                        "ml-8 max-sm:ml-0" +
                        " " +
                        (selectedFaq === id ? "text-red-500" : "text-black/70")
                      }
                    >
                      {qustion}
                    </h2>
                    {selectedFaq === id ? (
                      <Reveal>
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.3, delay: 0.3 }}
                        >
                          <Image
                            width={16}
                            height={2}
                            src="/assets/faq/icon-minus.svg"
                            className="mr-7 max-sm:mr-0"
                          />
                        </motion.div>
                      </Reveal>
                    ) : (
                      <Reveal>
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.3, delay: 0.3 }}
                        >
                          <Image
                            width={16}
                            height={2}
                            src="/assets/faq/icon-plus.svg"
                            className="mr-7 max-sm:mr-0"
                          />
                        </motion.div>
                      </Reveal>
                    )}
                  </button>
                  {selectedFaq === id && (
                      <motion.div
                        initial={{ y: -100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.3 }}
                        className="faq-answer max-sm:pt-0 max-sm:pb-0 flex justify-center pt-5 pb-8 border-t border-black/10"
                      >
                        <p className="max-sm:py-3">{answer}</p>
                      </motion.div>
                  )}
                </div>
              );
            })}
          </div>
          <div className="faq-seciton-image">
            <Image src="/assets/faq/faq-image.svg" width={520} height={585} />
          </div>
        </div>
      </div>
    </section>
  );
}
