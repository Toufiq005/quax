"use client";

import "./FaqSection.css";
import Image from "next/image";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

export default function FaqSection(props) {
  const [selectedFaq, setSelectedFaq] = useState(1);

  const handleFaqSelect = (faqId) => {
    setSelectedFaq(faqId === selectedFaq ? null : faqId);
  };

  return (
    <section className="w-full min-h-screen flex items-center justify-center bg-color">
      <div className="wrapper flex flex-col items-center justify-center faq-section">
        <h3>FAQ</h3>
        <h1>Frequently Asked Questions</h1>
        <div className="flex items-center justify-center gap-28 mt-14">
          <div className="faq-seciton-content">
            {props.data.map(({ id, qustion, answer }) => {
              return (
                <div
                  key={id}
                  className="faq-question flex flex-col items-center bg-white"
                >
                  <button
                    className="bg-white flex items-center justify-between"
                    onClick={() => handleFaqSelect(id)}
                  >
                    <h2
                      className={
                        "ml-8" +
                        " " +
                        (selectedFaq === id ? "text-red-500" : "text-black/70")
                      }
                    >
                      {qustion}
                    </h2>
                    {selectedFaq === id ? (
                      <Image
                        width={16}
                        height={2}
                        src="/assets/faq/icon-minus.svg"
                        className="mr-7"
                      />
                    ) : (
                      <Image
                        width={16}
                        height={2}
                        src="/assets/faq/icon-plus.svg"
                        className="mr-7"
                      />
                    )}
                  </button>
                  {selectedFaq === id && (
                    <div className="faq-answer flex justify-center pt-5 pb-8 border-t border-black/10">
                      <p>{answer}</p>
                    </div>
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
