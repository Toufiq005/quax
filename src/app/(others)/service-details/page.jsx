"use client";

import "./service-details.css";
import Image from "next/image";
import Banner from "@/components/Sections/Banner/Banner";
import ServiceSection from "@/components/Sections/ServiceSection/ServiceSection";
import PricingSection from "@/components/Sections/PricingSection/PricingSection";
import SubscribeSection from "@/components/Sections/SubscribeSection/SubscribeSection";
import Button from "@/components/Buttons/Button";
import { motion } from "framer-motion";

export default function page() {
  const servicePoints = [
    {
      id: 1,
      title: "Elit aute irure tempor cupidatat.",
    },
    {
      id: 2,
      title: "Sunt qui esse pariatur.",
    },
    {
      id: 3,
      title: "Aliqua id fugiat nostrud.",
    },
  ];

  return (
    <>
      <Banner
        title="Business Idea"
        description="Pick a template, customize the content and design elements, and launch! Or, design your next fabulous email."
      />
      <section className="w-full h-auto flex items-center justify-center bg-color">
        <div className="wrapper h-auto flex max-xl:flex-col items-center justify-center gap-20">
          <div className="services-details-content">
            <motion.h1
              initial={{ y: -150, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              Increase Business Idea For your Business.
            </motion.h1>
            <motion.p
              initial={{ y: -150, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt
              qui esse pariatur duis deserun mollit dolore cillum minim tempor
              enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut
              duis ea quis id quis ad et. Sunt qui esse pariatur duis deser
              mollit dolore cillum minim tempor enim. Elit aute irure tempo
              cupidatat incididunt sint deser deserunt nisi.
            </motion.p>
            <div className="max-xl:flex flex-col items-center justify-center">
              {servicePoints.map((props, i) => (
                <motion.div initial={{ x: 150, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ duration: 0.3 * (i + 1) }} key={props.id} className="flex">
                  <Image
                    src="/assets/icon-check-square.svg"
                    width={24}
                    height={24}
                    alt="icon"
                    className="mr-3"
                  />
                  <h2>{props.title}</h2>
                </motion.div>
              ))}
              <div className="mt-6">
                <Button title="Get Started" link="/contact" />
              </div>
            </div>
          </div>
          <div className="xl:ml-10 w-1/2 max-xl:w-full max-xl:flex flex-col items-center justify-center max-xl:overflow-hidden">
            <motion.div
              initial={{ x: 150, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="services-details-image xl:scale-120"
            >
              <Image
                width={570}
                height={380}
                src="/assets/service-details/service-details-image-one.webp"
                alt="img"
                className="services-details-image-one xl:scale-150"
              />
              <Image
                width={370}
                height={250}
                src="/assets/service-details/service-details-image-two.webp"
                alt="img"
                className="services-details-image-two xl:scale-110"
              />
            </motion.div>
          </div>
        </div>
      </section>
      <ServiceSection />
      <PricingSection />
      <SubscribeSection />
    </>
  );
}
