import "./team-members-details.css";
import Image from "next/image";
import Banner from "@/components/Sections/Banner/Banner";
import TeamMemberSection from "@/components/Sections/TeamMemberSection/TeamMemberSection";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone, faTty } from "@fortawesome/free-solid-svg-icons";

export default function page() {
  return (
    <>
      <Banner
        title="Team Members Details"
        description="Pick a template, customize the content and design elements, and launch! Or, design your next fabulous email."
      />
      <section className="w-full h-auto flex flex-col items-center justify-center bg-very-light-gray">
        <div className="wrapper flex flex-col items-center justify-center gap-20">
          <div className=" flex items-center justify-center gap-20 w-full ">
            <div className="members-image flex items-center justify-center bg-color w-1/2">
              <Image
                width={485}
                height={485}
                src="/assets/sections/team-members/member-robert-banks.png"
                alt="img"
              />
            </div>
            <div className="members-info w-1/2">
              <h1>Robert Banks</h1>
              <h3>CEO & Founder</h3>
              <p>
                But I must explain to you how all this mistaken idea of denounci
                pleasure and paling was born and I will give you a complete
                account of the system and expound the actual teachings of the
                great explorer of the truth, the master-builder of human
                happiness.
              </p>
              <div className="flex flex-col items-start justify-center gap-3 mt-5">
                <div className="flex items-center justify-start gap-6">
                  <div className="w-10 h-10 bg-header rounded-full flex items-center justify-center">
                    <FontAwesomeIcon icon={faPhone} className="text-white" />
                  </div>
                  <h2>+1 012 345 6789</h2>
                </div>
                <div className="flex items-center justify-start gap-6">
                  <div className="w-10 h-10 bg-header rounded-full flex items-center justify-center">
                    <FontAwesomeIcon icon={faTty} className="text-white" />
                  </div>
                  <h2>+44-208-1234567</h2>
                </div>
                <div className="flex items-center justify-start gap-6">
                  <div className="w-10 h-10 bg-header rounded-full flex items-center justify-center">
                    <FontAwesomeIcon icon={faEnvelope} className="text-white" />
                  </div>
                  <h2>mail@loyalcoder.com</h2>
                </div>
              </div>
              <div className="flex items-center justify-start gap-5 mt-10">
                <a href="#">
                  <Image
                    width={40}
                    height={40}
                    src="/assets/team-members-details/icon-facebook.svg"
                  />
                </a>
                <a href="#">
                  <Image
                    width={40}
                    height={40}
                    src="/assets/team-members-details/icon-instagram.svg"
                  />
                </a>
                <a href="#">
                  <Image
                    width={40}
                    height={40}
                    src="/assets/team-members-details/icon-twitter.svg"
                  />
                </a>
                <a href="#">
                  <Image
                    width={40}
                    height={40}
                    src="/assets/team-members-details/icon-linkedin.svg"
                  />
                </a>
              </div>
            </div>
          </div>
          <div className=" w-full gap-20 flex items-center justify-center">
            <div className="members-overview w-1/2">
              <h1>Overview</h1>
              <p>
                But I must explain to you how all this mistaken idea of denounci
                pleasure and paling was born and I will give you a complete
                account of the system and expound the actual teachings give you
                a complete account of the system and expound the actual
                teachings of the great explorer of the truth, the master-builder
                of human happiness.
                <br />
                <br />
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been give you a complete account of
                the system and expound the actual teachings the industrys
                standard dummy text ever since the 1500s, when an unknown
                printer took a galley of type and scrambled it to make a type
                specimen book.
                <br />
                <br />
                Lorem Ipsum has been give you a complete account of the system
                and expound the actual teachings the industry.
              </p>
            </div>
            <div className="members-experience w-1/2">
              <h1>Experiences</h1>
              <div>
                <div>
                  <h3>Wordpress</h3>
                  <div className="exp-bar">
                    <div className="exp-bar-wordpress"></div>
                  </div>
                </div>
                <div>
                  <h3>Joomla</h3>
                  <div className="exp-bar">
                    <div className="exp-bar-joomla"></div>
                  </div>
                </div>
                <div>
                  <h3>Laravel</h3>
                  <div className="exp-bar">
                    <div className="exp-bar-laravel"></div>
                  </div>
                </div>
                <div>
                  <h3>Magento</h3>
                  <div className="exp-bar">
                    <div className="exp-bar-magento"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <TeamMemberSection bgColor="bg-color" limit={4} />
    </>
  );
}
