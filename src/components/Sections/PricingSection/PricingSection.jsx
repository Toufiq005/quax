import "./PricingSection.css";
import Image from "next/image";
import { motion } from "framer-motion";

export default function PricingSection() {
  return (
    <section className="section-four flex flex-col items-center ">
      <motion.h2
        initial={{ y: -150, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="pt-32"
      >
        Explore & Create
      </motion.h2>
      <motion.h1
        initial={{ y: -150, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4 }}
      >
        Simple <br /> Scalable Pricing.
      </motion.h1>
      <motion.p
        initial={{ y: -150, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.2 }}
      >
        Lorem ipsum dolor sit amet, consectur adipiscing elit.
      </motion.p>

      <div className="flex items-center justify-center mt-16 price-div">
        <motion.div
          initial={{ y: 250, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="price mb-16 flex flex-col items-center"
        >
          <h2>Solo</h2>
          <p className="mx-3">
            Bunc id tincidunt duis faucibus urna Adipiscing. Id lorem diam.
          </p>
          <h1>
            <span className="text-6xl">$44</span>
            /mo
          </h1>
          <a href="/" className="bg-white text-header">
            Buy Now
          </a>
          <div className="flex flex-col justify-center mt-10">
            <p className="flex ml-10">
              <span className="mx-3">
                <Image
                  width={25}
                  height={25}
                  src="/assets/cheak-mark.svg"
                  alt="icon"
                />
              </span>
              Lorem ipsum dolor sit ametv
            </p>
            <p className="flex ml-10 my-7">
              <span className="mx-3">
                <Image
                  width={25}
                  height={25}
                  src="/assets/cheak-mark.svg"
                  alt="icon"
                />
              </span>
              Unlimited Employees
            </p>
            <p className="flex ml-10">
              <span className="mx-3">
                <Image
                  width={25}
                  height={25}
                  src="/assets/cheak-mark.svg"
                  alt="icon"
                />
              </span>
              24/7 Live Chat Support
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ y: 250, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.2 }}
          className="price mb-16 flex flex-col items-center"
        >
          <h2>Team</h2>
          <p className="mx-3">
            Bunc id tincidunt duis faucibus urna Adipiscing. Id lorem diam.
          </p>
          <h1>
            <span className="text-6xl">$64</span>
            /mo
          </h1>
          <a href="/" className="bg-white text-header">
            Buy Now
          </a>
          <div className="flex flex-col justify-center mt-10">
            <p className="flex ml-10">
              <span className="mx-3">
                <Image
                  width={25}
                  height={25}
                  src="/assets/cheak-mark.svg"
                  alt="icon"
                />
              </span>
              Lorem ipsum dolor sit ametv
            </p>
            <p className="flex ml-10 my-7">
              <span className="mx-3">
                <Image
                  width={25}
                  height={25}
                  src="/assets/cheak-mark.svg"
                  alt="icon"
                />
              </span>
              Unlimited Employees
            </p>
            <p className="flex ml-10">
              <span className="mx-3">
                <Image
                  width={25}
                  height={25}
                  src="/assets/cheak-mark.svg"
                  alt="icon"
                />
              </span>
              24/7 Live Chat Support
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ y: 250, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.5 }}
          className="price mb-16 flex flex-col items-center"
        >
          <h2>Agency</h2>
          <p className="mx-3">
            Bunc id tincidunt duis faucibus urna Adipiscing. Id lorem diam.
          </p>
          <h1>
            <span className="text-6xl">$78</span>
            /mo
          </h1>
          <a href="/" className="bg-white text-header">
            Buy Now
          </a>
          <div className="flex flex-col justify-center mt-10">
            <p className="flex ml-10">
              <span className="mx-3">
                <Image
                  width={25}
                  height={25}
                  src="/assets/cheak-mark.svg"
                  alt="icon"
                />
              </span>
              Lorem ipsum dolor sit ametv
            </p>
            <p className="flex ml-10 my-7">
              <span className="mx-3">
                <Image
                  width={25}
                  height={25}
                  src="/assets/cheak-mark.svg"
                  alt="icon"
                />
              </span>
              Unlimited Employees
            </p>
            <p className="flex ml-10">
              <span className="mx-3">
                <Image
                  width={25}
                  height={25}
                  src="/assets/cheak-mark.svg"
                  alt="icon"
                />
              </span>
              24/7 Live Chat Support
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
