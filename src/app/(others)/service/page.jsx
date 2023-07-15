import Banner from "@/components/Sections/Banner/Banner";
import ServiceSection from "@/components/Sections/ServiceSection/ServiceSection";
import PricingSection from "@/components/Sections/PricingSection/PricingSection";
import SubscribeSection from "@/components/Sections/SubscribeSection/SubscribeSection";
import data from "@/data/pages/service.js"

export default function page() {
  return (
    <>
      <Banner
        title={data[0].title}
        description={data[0].description}
      />
      <ServiceSection />
      <PricingSection />
      <SubscribeSection />
    </>
  );
}
