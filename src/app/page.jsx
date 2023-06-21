import "./home.css";
import Decoration from "@/components/Decoration/Decoration";
import ServiceSection from "@/components/Sections/ServiceSection/ServiceSection";
import PricingSection from "@/components/Sections/PricingSection/PricingSection";
import Testimonial from "@/components/Testimonial/Testimonial";
import blogData from "../data/home-blogpost";

export default function Home() {
  return (
    <>
      <Header />
      <AboutCompany />
      <ServiceSection />
      <Experience />
      <PricingSection />
      <WhatNext />
      <Testimonial />
      <Blog />
    </>
  );
}

function Header() {
  return (
    <header className="relative flex items-center justify-evenly parent overflow-hidden">
      <div className="hero  max-lg:flex-col max-lg:mt-28">
        <div className="mr-5 max-lg:flex max-lg:flex-col max-lg:justify-center max-lg:text-center max-lg:items-center max-sm:mt-28">
          <h1
            data-aos="fade-down"
            data-aos-duration="2000"
            className="max-lg:text-4xl"
          >
            Guiding Your Business to Achieve Online Success
          </h1>
          <p
            data-aos="fade-down"
            data-aos-duration="1500"
            className="mt-5 mb-10 max-lg:text-sm "
          >
            Me old mucker knackered a load of old tosh wellies amongst lost the
            plot say bodge tickety boo.!s
          </p>
          <a
            href="#price"
            className="px-7 py-4 text-white bg-header rounded hover:text-red-500 hover:bg-white "
          >
            PURCHES NOW
          </a>
        </div>
        <div
          className="ml-5 -mt-6 max-lg:ml-0 hero-img"
          data-aos="fade-left"
          data-aos-duration="1500"
        >
          <img src="/assets/home/hero-image.webp" alt="heroImg" />
        </div>
      </div>

      <Decoration />
    </header>
  );
}

function AboutCompany() {
  return (
    <section className="section-one">
      <div className="flex items-center justify-center w-full pt-28 max-lg:flex-col">
        <div className="flex items-start justify-end w-1/2 max-lg:w-4/5 mr-11 max-lg:mr-0">
          <div>
            <img
              data-aos="fade-right"
              data-aos-duration="300"
              src="/assets/home/about-image.webp"
              alt="img"
            />
            <img
              data-aos="fade-up"
              data-aos-duration="2000"
              src="/assets/home/about-vector.svg"
              alt="img"
              className="-mt-40 -ml-40  max-lg:ml-0"
            />
          </div>
          <img
            src="/assets/home/about-decoration.svg"
            alt="decoration"
            className="mt-9 max-sm:hidden max-lg:-ml-12"
          />
        </div>
        <div className="section-one-text ml-11 max-lg:ml-0 flex flex-col items-start justify-center">
          <h3 className="text-header">EST. 1987</h3>
          <h1
            data-aos="fade-up"
            data-aos-duration="1000"
            className="max-lg:text-4xl max-lg:mt-0"
          >
            Built For You, By People Who Care
          </h1>
          <h2>''Recognizing the need is the primary condition for design''</h2>
          <p data-aos="fade-up" data-aos-duration="1500">
            Pick a template, customize the content and design elements, and
            launch! Or, design your next fabulous email on your own with our
            simple visual builder.
          </p>
          <a
            data-aos="fade-up"
            data-aos-duration="2000"
            href="/"
            className="px-7 py-4 text-white bg-header rounded hover:text-red-500 hover:bg-white border border-red-500/60"
          >
            DISCOVER MORE
          </a>
        </div>
      </div>
      <div className="form mt-10" data-aos="fade-up" data-aos-duration="1000">
        <h1>
          Get Started <span className="text-red">- It's free</span>
        </h1>
        <div className="flex items-center justify-center">
          <img src="/assets/home/arrow-icon.svg" alt="arrow" />
          <h2>Start Your 14-Days Free Trial</h2>
        </div>
        <form className="pb-28">
          <div className="flex mt-7 justify-center max-lg:items-center max-lg:flex-col">
            <input
              type="text"
              placeholder="Enter your name"
              className="max-lg:mx-4"
            />
            <input
              type="email"
              placeholder="Enter your email"
              className="mx-4 max-lg:my-4"
            />
            <button className="max-lg:mx-4 text-white bg-header font-semibold rounded hover:text-red-500 hover:bg-white hover:border border-red-500/60">
              Sign Up
            </button>
          </div>
          <p className="flex items-center justify-center max-sm:text-xs">
            <span>
              <input type="checkbox" className="mx-2" />
            </span>
            By signing up you agree to our
            <span className="mx-1">
              <a href="/" className="text-red">
                Terms & Conditions.
              </a>
            </span>
          </p>
        </form>
      </div>
    </section>
  );
}

function Experience() {
  // const [counterOn, setCounterOn] = useState(false);
  // const [experienceBar, setExperienceBar] = useState(false);

  return (
    <section className="section-three ">
      <div className="flex items-center justify-center pt-36 mb-96 max-xl:flex-col max-sm:mb-40">
        <div className="mr-10 left-content max-xl:mx-0 max-xl:mb-7">
          <img
            src="/assets/home/exp-profit-card.svg"
            alt="img"
            className="card-one"
          />
          <img
            src="/assets/home/exp-ratting-card.svg"
            alt="img"
            className="card-two"
          />
          <img
            src="/assets/home/exp-image-one.webp"
            alt="img"
            className="exp-img-one"
          />
          <img
            src="/assets/home/exp-image-two.webp"
            alt="img"
            className="exp-img-two"
          />
        </div>
        <div className="ml-10 max-lg:flex max-lg:flex-col max-lg:items-center max-lg:justify-center max-xl:text-center max-sm:w-full max-sm:ml-0">
          <h3>Explore & Create</h3>
          <h1 className="max-sm:max-w-xs max-sm:h-auto">
            Bringing new business Solutions and ideas
          </h1>
          <p className="my-5">
            Pick a template, customize the content and design elements, and
            launch! Or, design your next fabulous email on your own with our
            simple visual builder.
          </p>
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            className="mt-5 max-sm:w-full max-sm:flex flex-col items-center justify-center"
          >
            <h4>Social Media Marketing</h4>
            <div className="bar">
              <div className="bar-one"></div>
            </div>
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            className="mt-5 max-sm:w-full max-sm:flex flex-col items-center justify-center"
          >
            <h4>Web Development</h4>
            <div className="bar">
              <div className="bar-two"></div>
            </div>
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            className="mt-5 max-sm:w-full max-sm:flex flex-col items-center justify-center"
          >
            <h4>Competitor Research</h4>
            <div className="bar">
              <div className="bar-three"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-very-light-gray section-three-video flex flex-col items-center justify-center">
        <div className="max-md:flex max-md:flex-col max-md:items-center max-md:justify-center max-md:w-full">
          <div className="exp-video cursor-pointer">
            <img
              src="/assets/home/exp-video-effect.svg"
              alt="video"
              className="exp-video-effect"
            />
          </div>
          <div className="flex items-center justify-between -mt-20 max-sm:-my-14 max-sm:w-full ">
            {/* <img
              src={videoPlayIcon}
              alt="icon"
              className="mx-24 max-sm:mx-7 max-sm:scale-50"
            />
            <img
              src={videoDuration}
              alt="icon"
              className="mx-24 max-sm:mx-7 max-sm:scale-50"
            /> */}
          </div>
        </div>
        <h2 className="max-sm:text-center">Spice it up with a wide video</h2>
        <p className="text-center">
          This UI Kit uses attractive colors and modern typography to make you
          look good, no matter what business you're in.
        </p>
        <div className="flex items-center justify-evenly w-full mt-10 pb-24 max-md:flex-col">
          <div className="flex flex-col items-center justify-center">
            <h5>
              {/* {counterOn && <CountUp start={0} end={18} duration={2}></CountUp>} */}
              18%
            </h5>
            <h6>Reduced running costs</h6>
          </div>
          <div className="flex flex-col items-center justify-center max-md:my-5">
            <h5>
              {/* {counterOn && <CountUp start={0} end={4} duration={2}></CountUp>} */}
              4x
            </h5>
            <h6>Increase in user activity</h6>
          </div>
          <div className="flex flex-col items-center justify-center">
            <h5>
              {/* {counterOn && <CountUp start={0} end={13} duration={2}></CountUp>} */}
              13K
            </h5>
            <h6>Increase in subscribers</h6>
          </div>
        </div>
      </div>
    </section>
  );
}
function WhatNext() {
  // const [animationOn, setAnimationOn] = useState(false);
  return (
    <section className="w-full min-h-screen flex items-center justify-center">
      <div className="what-next ">
        <h1>What's Next?</h1>
        <p>Are you interested in our services? We will arrange a phone call.</p>
        <div className="flex items-center justify-evenly mt-14 max-lg:flex-col">
          <div
            data-aos="fade-up"
            data-aos-duration="500"
            className="flex flex-col items-center justify-center max-lg:py-5"
          >
            <img src="/assets/home/message.svg" alt="icon" />
            <h2>Leave a Message</h2>
            <h3>
              Send us the address of your website and your contact number We
              will get in touch.
            </h3>
            <a href="/" className="bg-header text-white ">
              Write to us
            </a>
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            className="flex flex-col items-center justify-center max-lg:py-5"
          >
            <img src="/assets/home/talk.svg" alt="icon" />
            <h2>Let's Talk!</h2>
            <h3>
              We will then call you or meet to talk about your business goals
              and priorities.
            </h3>
            <a href="/" className="bg-white text-red ">
              Contact us
            </a>
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="1500"
            className="flex flex-col items-center justify-center max-lg:py-5"
          >
            <img src="/assets/home/plan.svg" alt="icon" />
            <h2>Leave a Message</h2>
            <h3>
              Send us the address of your website and your contact number We
              will get in touch.
            </h3>
            <a href="/" className="bg-header text-white ">
              View Plan
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}


function Blog() {
  return (
    <section className="blogpost flex flex-col items-center justify-center">
      <h3 data-aos="fade-up" data-aos-duration="500">
        Our Blogpost
      </h3>
      <h1 data-aos="fade-up" data-aos-duration="700">
        Our Daily Blogpost
      </h1>

      <div className="flex items-center justify-center  mb-28 mt-16 post-div">
        {blogData.map((items) => {
          return (
            <div
              data-aos="fade-up"
              data-aos-duration="1000"
              className="post hover:scale-105 duration-500 flex flex-col items-center justify-center"
            >
              <img src={items.img} alt="img" className="postImg" />
              <div className="flex items-center justify-center post-info">
                <h2 className="text-black/40 font-medium pr-5 flex items-center">
                  <span>
                    {/* <img src={userIcon} alt="icon" className="w-3 h-3 mx-2" /> */}
                  </span>
                  By {items.author}
                </h2>
                {/* <img src={divider} alt="icon" className="pr-5" /> */}
                <h2 className="text-black/40 font-medium pr-5 flex items-center">
                  <span>
                    {/* <img src={folderIcon} alt="icon" className="w-3 h-3 mx-2" /> */}
                  </span>
                  {items.category}
                </h2>
              </div>
              <h1>{items.title}</h1>
              <p>{items.description}</p>
              <div className="pb-8">
                <a href={items.link}>View Details</a>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
