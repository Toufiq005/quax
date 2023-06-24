import './service-details.css'
import Image from "next/image";
import Banner from "@/components/Sections/Banner/Banner";
import ServiceSection from '@/components/Sections/ServiceSection/ServiceSection';
import PricingSection from '@/components/Sections/PricingSection/PricingSection';
import SubscribeSection from '@/components/Sections/SubscribeSection/SubscribeSection';
import Button from "@/components/Buttons/Button";

export default function page() {
  return (
    <>
      <Banner
        title="Business Idea"
        description="Pick a template, customize the content and design elements, and launch! Or, design your next fabulous email."
      />
      <section className="w-full h-auto flex items-center justify-center bg-color">
        <div className="wrapper h-auto flex items-center justify-center gap-20">
          <div className="services-details-content">
            <h6 className='text-6xl text-red-500'>work in progress</h6>
            <h1>Increase Business Idea For your Business.</h1>
            <p>
              Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt
              qui esse pariatur duis deserun mollit dolore cillum minim tempor
              enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut
              duis ea quis id quis ad et. Sunt qui esse pariatur duis deser
              mollit dolore cillum minim tempor enim. Elit aute irure tempo
              cupidatat incididunt sint deser deserunt nisi. Aliqua id fugiat
              nostrud irure ex duis ea quis id quis ad et. Sunt qui esse
              pariatur duis deserunt mollit dolore cillum minim tempor enim
              irure tempor.
            </p>
            <div className="flex">
              <Image
                src="/assets/icon-check-square.svg"
                width={24}
                height={24}
                alt="icon"
                className="mr-3"
              />
              <h2>Elit aute irure tempor cupidatat.</h2>
            </div>
            <div className="flex">
              <Image
                src="/assets/icon-check-square.svg"
                width={24}
                height={24}
                alt="icon"
                className="mr-3"
              />
              <h2>Sunt qui esse pariatur.</h2>
            </div>
            <div className="flex mb-7">
              <Image
                src="/assets/icon-check-square.svg"
                width={24}
                height={24}
                alt="icon"
                className="mr-3"
              />
              <h2>Aliqua id fugiat nostrud.</h2>
            </div>
            <Button title={"Get Started"} link={"/contact"}/>
          </div>
          <div className="services-details-image">
            <Image width={570} height={380} src="/assets/service-details/service-details-image-one.webp" alt='img' className='services-details-image-one'/>
            <Image width={370} height={250} src="/assets/service-details/service-details-image-two.webp" alt='img' className='services-details-image-two'/>
          </div>
        </div>
      </section>
      <ServiceSection/>
      <PricingSection/>
      <SubscribeSection/>
    </>
  );
}
