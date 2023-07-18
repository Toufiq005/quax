import Banner from "@/components/Sections/Banner/Banner";
import CaseStudySection from "@/components/Sections/CaseStudySection/CaseStudySection";
import SubscribeSection from "@/components/Sections/SubscribeSection/SubscribeSection";
import Loading from "@/components/ui/Loading/Loading";
import "font-awesome/css/font-awesome.min.css";

export default async function CaseStudy() {
  return (
    <Loading>
      <Banner
        title="Case Studies"
        description="Pick a template, customize the content and design elements, and launch! Or, design your next fabulous email."
      />
      <CaseStudySection />
      <SubscribeSection />
    </Loading>
  );
}
