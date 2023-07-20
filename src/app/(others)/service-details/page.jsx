"use client";

import "./service-details.css";
import Image from "next/image";
import Banner from "@/components/Sections/Banner/Banner";
import ServiceSection from "@/components/Sections/ServiceSection/ServiceSection";
import PricingSection from "@/components/Sections/PricingSection/PricingSection";
import SubscribeSection from "@/components/Sections/SubscribeSection/SubscribeSection";
import Button from "@/components/Buttons/Button";
import { motion } from "framer-motion";
import Reveal from "@/components/ui/Reveal/Reveal";
import "font-awesome/css/font-awesome.min.css";
import data from '@/data/pages/service-details.js';
import Loading from "@/components/ui/Loading/Loading";

export default function page() {

  return (
    <Loading>
      <Banner
        title={data[0].title}
        description={data[0].description}
      />
      <section className="w-full h-auto min-h-75 flex items-center justify-center bg-color">
        <div className="wrapper h-auto flex max-xl:flex-col items-center justify-center gap-20">
          <div className="services-details-content">
            <Reveal>
              <motion.h1
                initial={{ y: -150, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                {data[1].title}
              </motion.h1>
            </Reveal>
            <Reveal>
              <motion.p
                initial={{ y: -150, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.3 }}
              >
                {data[1].description}
              </motion.p>
            </Reveal>
            <div className="max-xl:flex flex-col items-center justify-center max-md:overflow-hidden">
              {data[1].servicePoints.map((props, i) => (
                <Reveal key={props.id}>
                  <motion.div
                    initial={{ x: 150, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.3 , delay: i * 0.3 }}
                    className="flex"
                  >
                    <Image
                      src="/assets/icon-check-square.svg"
                      width={24}
                      height={24}
                      alt="icon"
                      className="mr-3"
                    />
                    <h2>{props.title}</h2>
                  </motion.div>
                </Reveal>
              ))}
              <div className="mt-6">
                <Button title={data[1].btn.text} link={data[1].btn.href} />
              </div>
            </div>
          </div>
          <div className="xl:ml-10 w-1/2 max-xl:w-full max-xl:flex flex-col items-center justify-center max-xl:overflow-hidden">
            <Reveal>
              <motion.div
                initial={{ x: 150, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.3 }}
                className="services-details-image xl:scale-120 mt-32 max-xl:mt-0"
              >
                <img
                  src={data[1].imgOne.src}
                  alt={data[1].imgOne.alt}
                  className="services-details-image-one max-md:scale-90"
                />
                <img
                  src={data[1].imgTwo.src}
                  alt={data[1].imgTwo.alt}
                  className="services-details-image-two"
                />
              </motion.div>
            </Reveal>
          </div>
        </div>
      </section>
      <ServiceSection />
      <PricingSection />
      <SubscribeSection />
    </Loading>
  );
}
