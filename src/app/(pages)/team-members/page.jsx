import Banner from "@/components/Sections/Banner/Banner";
import TeamMemberSection from "@/components/Sections/TeamMemberSection/TeamMemberSection";

export default function page() {
  return (
    <>
      <Banner
        title="Team Members"
        description="Pick a template, customize the content and design elements, and launch! Or, design your next fabulous email."
      />
      <TeamMemberSection bgColor="bg-color" limit={8}/>
    </>
  );
}
