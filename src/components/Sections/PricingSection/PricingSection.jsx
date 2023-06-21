import "./PricingSection.css";

export default function PricingSection() {
  return (
    <section className="section-four flex flex-col items-center justify-center">
      <h2>Explore & Create</h2>
      <h1>
        Simple <br /> Scalable Pricing.
      </h1>
      <p>Lorem ipsum dolor sit amet, consectur adipiscing elit.</p>

      <div className="flex items-center justify-center mt-16 price-div">
        <div
          data-aos="fade-up"
          data-aos-duration="500"
          className="price mb-16 flex flex-col items-center"
        >
          <h2>Solo</h2>
          <p>Bunc id tincidunt duis faucibus urna Adipiscing. Id lorem diam.</p>
          <h1>
            <span className="text-6xl">$44</span>
            /mo
          </h1>
          <a href="/" className="bg-white text-red">
            Buy Now
          </a>
          <div className="flex flex-col justify-center mt-10">
            <p className="flex ml-10">
              <span className="mx-3">
                <img src="/assets/cheak-mark.svg" alt="icon" />
              </span>
              Lorem ipsum dolor sit ametv
            </p>
            <p className="flex ml-10 my-7">
              <span className="mx-3">
                <img src="/assets/cheak-mark.svg" alt="icon" />
              </span>
              Unlimited Employees
            </p>
            <p className="flex ml-10">
              <span className="mx-3">
                <img src="/assets/cheak-mark.svg" alt="icon" />
              </span>
              24/7 Live Chat Support
            </p>
          </div>
        </div>

        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          className="price mb-16 flex flex-col items-center"
        >
          <h2>Team</h2>
          <p>Bunc id tincidunt duis faucibus urna Adipiscing. Id lorem diam.</p>
          <h1>
            <span className="text-6xl">$64</span>
            /mo
          </h1>
          <a href="/" className="bg-header text-white">
            Buy Now
          </a>
          <div className="flex flex-col justify-center mt-10">
            <p className="flex ml-10">
              <span className="mx-3">
                <img src="/assets/cheak-mark.svg" alt="icon" />
              </span>
              Lorem ipsum dolor sit ametv
            </p>
            <p className="flex ml-10 my-7">
              <span className="mx-3">
                <img src="/assets/cheak-mark.svg" alt="icon" />
              </span>
              Unlimited Employees
            </p>
            <p className="flex ml-10">
              <span className="mx-3">
                <img src="/assets/cheak-mark.svg" alt="icon" />
              </span>
              24/7 Live Chat Support
            </p>
          </div>
        </div>

        <div
          data-aos="fade-up"
          data-aos-duration="1500"
          className="price mb-16 flex flex-col items-center"
        >
          <h2>Agency</h2>
          <p>Bunc id tincidunt duis faucibus urna Adipiscing. Id lorem diam.</p>
          <h1>
            <span className="text-6xl">$78</span>
            /mo
          </h1>
          <a href="/" className="bg-white text-red">
            Buy Now
          </a>
          <div className="flex flex-col justify-center mt-10">
            <p className="flex ml-10">
              <span className="mx-3">
                <img src="/assets/cheak-mark.svg" alt="icon" />
              </span>
              Lorem ipsum dolor sit ametv
            </p>
            <p className="flex ml-10 my-7">
              <span className="mx-3">
                <img src="/assets/cheak-mark.svg" alt="icon" />
              </span>
              Unlimited Employees
            </p>
            <p className="flex ml-10">
              <span className="mx-3">
                <img src="/assets/cheak-mark.svg" alt="icon" />
              </span>
              24/7 Live Chat Support
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
