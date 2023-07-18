import Banner from "@/components/Sections/Banner/Banner";
import TeamMemberSection from "@/components/Sections/TeamMemberSection/TeamMemberSection";
import data from '@/data/pages/team-members.js';
import Loading from "@/components/ui/Loading/Loading";

export default function page() {
  return (
    <Loading>
      <Banner
        title={data[0].title}
        description={data[0].description}
      />
      <TeamMemberSection bgColor="bg-color" limit={8} pageIndex={1} title="Our Marketing expertise" headLine="Lorem ipsum dolor sit amet, consectetur adipiscing elit dolor sit amet."/>
    </Loading>
  );
}
