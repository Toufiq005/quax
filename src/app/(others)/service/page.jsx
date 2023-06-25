import Banner from "@/components/Sections/Banner/Banner";
import ServiceSection from "@/components/Sections/ServiceSection/ServiceSection";
import PricingSection from "@/components/Sections/PricingSection/PricingSection";
import SubscribeSection from "@/components/Sections/SubscribeSection/SubscribeSection";

export default function page() {
  return (
    <>
      <Banner
        title="Survices"
        description="Pick a template, customize the content and design elements, and launch! Or, design your next fabulous email."
      />
      <ServiceSection />
      <PricingSection />
      <SubscribeSection />
    </>
  );
}
