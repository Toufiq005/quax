import "./ServiceSection.css";
import data from "../../../data/services";

export default function ServiceSection() {
  return (
    <section className="section-two flex flex-col items-center justify-center">
      <div data-aos="zoom-in-up" data-aos-duration="1000">
        <h3>Our Services</h3>
        <h1>
          Integrate The <br /> Tools You Use Everyday
        </h1>
      </div>
      <div className="service-wrapper mt-14 pb-28 ">
        {data.map((items) => {
          return (
            <div
              className="services "
              data-aos="fade-up"
              data-aos-offset="100"
              data-aos-duration="2000"
              key={items.id}
            >
              <img src={items.icon} alt="icon" className="hoverEffect" />
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
