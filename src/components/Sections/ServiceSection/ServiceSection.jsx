import "./ServiceSection.css";
import data from "../../../data/services";
import Image from "next/image"

export default function ServiceSection() {
  return (
    <section className="section-two flex flex-col items-center ">
      <div data-aos="zoom-in-up" data-aos-duration="1000">
        <h3 className="pt-32">Our Services</h3>
        <h1>
          Integrate The <br /> Tools You Use Everyday
        </h1>
      </div>
      <div className="service-wrapper mt-14 pb-32 ">
        {data.map((items) => {
          return (
            <div
              className="services "
              data-aos="fade-up"
              data-aos-offset="100"
              data-aos-duration="2000"
              key={items.id}
            >
              <Image src={items.icon} width={70} height={80} alt="icon" className="hoverEffect" />
              <h2>{items.title}</h2>
              <p>
                {items.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
