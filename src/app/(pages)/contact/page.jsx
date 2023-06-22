import React from "react";
import "./contact.css";
import ContactSection from "../../../components/sections/ContactSection/ContactSection";
import Banner from "../../../components/sections/Banner/Banner";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";

export default function page() {
  return (
    <>
      <Banner
        title="Contact Us"
        description="Pick a template, customize the content and design elements, and launch! Or, design your next fabulous email."
      />
      <section className="contact ">
        <div className="flex flex-col items-center justify-center my-14">
          <div className="contact-icon">
            <FontAwesomeIcon icon={faPhone} className="text-header text-2xl" />
          </div>
          <h1>Phone Numbers</h1>
          <p>
            (+1) 012 345 6789 <br /> (+1) 012 345 6789
          </p>
        </div>
        <div className="flex flex-col items-center justify-center mx-40 max-lg:mx-0 my-14">
          <div className="contact-icon">
            <FontAwesomeIcon
              icon={faEnvelope}
              className="text-header text-2xl"
            />
          </div>
          <h1>Email Address</h1>
          <p>
            support@loyalcoder.com <br /> info@loyalcoder.com
          </p>
        </div>
        <div className="flex flex-col items-center justify-center my-14">
          <div className="contact-icon">
            <FontAwesomeIcon
              icon={faLocationDot}
              className="text-header text-2xl"
            />
          </div>
          <h1>Office Address</h1>
          <p>
            334 Valley Street Riverside <br />
            Burlingto, NJ 08075
          </p>
        </div>
      </section>
      <ContactSection bgColor="bg-color" inputColor="bg-very-light-gray" />
    </>
  );
}
