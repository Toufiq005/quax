import Banner from "@/components/Sections/Banner/Banner";
import FaqSection from "@/components/Sections/FaqSection/FaqSection";
import ContactSection from "@/components/Sections/ContactSection/ContactSection";
import SubscribeSection from "@/components/Sections/SubscribeSection/SubscribeSection";
import Loading from "@/components/ui/Loading/Loading";
import "font-awesome/css/font-awesome.min.css";

require("dotenv").config();

async function getData() {
  const res = await fetch((process.env.NEXT_PUBLIC_REST_API_ENDPOINT) + "/faq");
  return res.json();
}

export default async function page() {
  const data = await getData();

  return (
    <Loading>
      <Banner
        title="FAQ"
        description="Pick a template, customize the content and design elements, and launch! Or, design your next fabulous email."
      />
      <FaqSection data={data} />
      <ContactSection bgColor="bg-very-light-gray" inputColor="bg-color" headerOne="Contact Us" headerTwo="Drop Us a Text Massege" />
      <SubscribeSection />
    </Loading>
  );
}
