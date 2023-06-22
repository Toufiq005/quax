import Banner from "@/components/Sections/Banner/Banner";
import FaqSection from "@/components/Sections/FaqSection/FaqSection";
import ContactSection from "@/components/Sections/ContactSection/ContactSection";
import SubscribeSection from "@/components/Sections/SubscribeSection/SubscribeSection";

async function getData() {
  const res = await fetch("http://localhost:3000/api/faq");
  return res.json();
}

export default async function page() {
  const data = await getData();

  return (
    <>
      <Banner
        title="FAQ"
        description="Pick a template, customize the content and design elements, and launch! Or, design your next fabulous email."
      />
      <FaqSection data={data} />
      <ContactSection bgColor="bg-very-light-gray" inputColor="bg-color" />
      <SubscribeSection />
    </>
  );
}
