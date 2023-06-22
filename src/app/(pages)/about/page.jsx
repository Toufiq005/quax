import "./about.css";
import Image from "next/image";
import Banner from "../../../components/Sections/Banner/Banner";
import SubscribeSection from "../../../components/Sections/SubscribeSection/SubscribeSection";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareCheck } from "@fortawesome/free-solid-svg-icons";
import "font-awesome/css/font-awesome.min.css";
// import CountUp from "react-countup";
// import ScrollTrigger from "react-scroll-trigger";
import TeamMemberSection from "../../../components/Sections/TeamMemberSection/TeamMemberSection";


export default function About() {
  return (
    <>
      <Banner
        title="About Us"
        description="Pick a template, customize the content and design elements, and launch! Or, design your next fabulous email."
      />
      <AboutSection />
      <WhatWeDo />
      <WhyChoseUS />
      <TeamMemberSection  bgColor="bg-very-light-gray" limit={4} />
      <SubscribeSection />
    </>
  );
}

function AboutSection() {
  return (
    <section className="w-full min-h-screen bg-color flex items-center justify-center">
      <div className="wrapper about-section flex items-center justify-center  max-lg:flex-col max-lg:mt-10">
        <div className="about-section-content max-lg:flex flex-col items-center justify-center">
          <h3 className="text-header font-medium">About Us</h3>
          <h1 className="font-semibold">Our Company Story</h1>
          <h2>''Recognizing the need is the primary condition for design''</h2>
          <p className="text-light-gray">
            The European languages are members of the same family. Their
            separate existence is a myth. For science, music, sport, etc, Europe
            uses the same vocabulary. The languages only differ in their
            grammar, their pronunciation and their most common words.
          </p>
          <a href="/contact">Contact Us</a>
        </div>

        <div className="about-section-image ">
          <Image
          width={330}
          height={330}
            data-aos="fade-up"
            data-aos-duration="1000"
            src="/assets/about/about-image-one.webp"
            alt="img"
            className="about-section-image-one scale-125"
          />
          <Image
          width={300}
          height={400}
            data-aos="fade-left"
            src="/assets/about/about-image-two.webp"
            alt="img"
            className="about-section-image-two scale-125"
          />
        </div>
      </div>
    </section>
  );
}

function WhatWeDo() {

  return (
    <section className="w-full min-h-screen flex items-center justify-center bg-very-light-gray">
      <div className="wrapper what-we-do flex items-center justify-center my-28 max-lg:w-full">
        <div
          data-aos="fade-right"
          className="what-we-do-image bg-no-repeat flex justify-center mr-5 max-lg:mr-0 max-lg:mt-5"
        >
          <Image width={500} height={500} src='/assets/about/what-we-do.webp' alt="img" />
        </div>
        <div className="what-we-do-content ml-5 max-lg:flex flex-col items-center justify-center max-lg:ml-0">
          <h3 className="max-lg:pt-10">What We Do</h3>
          <div>
            <h1 className="max-lg:text-center max-lg:mt-5">
              Grow Your Business With Us.
            </h1>
          </div>
          <div className="flex items-start justify-center my-5 max-lg:flex-col max-lg:items-center max-lg:text-center max-lg:mt-10">
            <div className="w-16 h-16 bg-header rounded flex items-center justify-center text-lg font-bold text-white mr-7 max-lg:mr-0">
              {/* {animation && <CountUp start={0} end={90} duration={3} />} */}
              90%
            </div>
            <div className="max-lg:mt-3">
              <h2>SEO Optimization</h2>
              <p>
                The European languages are members of the same family. Their
                separate existence is a myth.
              </p>
            </div>
          </div>
          <div className="flex items-start justify-center my-5 max-lg:flex-col max-lg:items-center max-lg:text-center max-lg:mt-10">
            <div className="w-16 h-16 bg-header rounded flex items-center justify-center text-lg font-bold text-white mr-7 max-lg:mr-0">
              {/* {animation && <CountUp start={0} end={80} duration={3} />} */}
              80%
            </div>
            <div className="max-lg:mt-3">
              <h2>Business Analytics</h2>
              <p>
                The European languages are members of the same family. Their
                separate existence is a myth.
              </p>
            </div>
          </div>
          <div className="flex items-start justify-center my-5 max-lg:flex-col max-lg:items-center max-lg:text-center max-lg:mt-10">
            <div className="w-16 h-16 bg-header rounded flex items-center justify-center text-lg font-bold text-white mr-7 max-lg:mr-0">
              {/* {animation && <CountUp start={0} end={75} duration={3} />} */}
              75%
            </div>
            <div className="max-lg:mt-3">
              <h2>Web Developments</h2>
              <p>
                The European languages are members of the same family. Their
                separate existence is a myth.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function WhyChoseUS() {
  return (
    <section className="w-full min-h-screen bg-color flex items-center justify-center">
      <div className="wrapper flex items-center justify-center max-lg:flex-col my-28 overflow-hidden">
        <div className="why-chose-us-content mr-12 max-lg:pt-10 max-lg:text-center max-lg:mr-0 max-lg:flex flex-col items-center justify-center">
          <h3>Why Choose Us</h3>
          <h1>Save Your Time & Grow Your Business.</h1>
          <div className="flex mb-7 max-lg:flex-col">
            <div>
              <FontAwesomeIcon
                icon={faSquareCheck}
                className="text-3xl text-header mr-6"
              />
            </div>
            <div>
              <h2>First Working Process</h2>
              <p className="text-light-gray">
                The European languages are members of the same family. Their
                separate existence is a myth.
              </p>
            </div>
          </div>
          <div className="flex mb-7  max-lg:flex-col">
            <div>
              <FontAwesomeIcon
                icon={faSquareCheck}
                className="text-3xl text-header mr-6"
              />
            </div>
            <div>
              <h2>Skillful Team Member</h2>
              <p className="text-light-gray">
                The European languages are members of the same family. Their
                separate existence is a myth.
              </p>
            </div>
          </div>
          <div className="flex mb-7 max-lg:flex-col">
            <div>
              <FontAwesomeIcon
                icon={faSquareCheck}
                className="text-3xl text-header mr-6"
              />
            </div>
            <div>
              <h2>24/7 Hours Support</h2>
              <p className="text-light-gray">
                The European languages are members of the same family. Their
                separate existence is a myth.
              </p>
            </div>
          </div>
        </div>
        <div
          data-aos="fade-left"
          className="why-chose-us-image ml-12 max-lg:ml-5 max-lg:m-5 overflow-hidden"
        >
          <Image width={470} height={600} src="/assets/about/why-chose-us.webp" alt="" />
        </div>
      </div>
    </section>
  );
}

