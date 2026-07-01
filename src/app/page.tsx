import Footer from "@/components/layouts/Footer";
import HighlightProject from "@/components/layouts/HighlightProject";
import ProfileAbout from "@/components/layouts/ProfileAbout";
import ProfileHeader from "@/components/layouts/ProfileHeader";
import Projects from "@/components/layouts/Projects";
import Services from "@/components/layouts/Services";
import TechStack from "@/components/layouts/TechStack";
import WorkExperience from "@/components/layouts/WorkExperience";
import WorkflowHighlight from "@/components/layouts/WorkflowHighlight";

export default function Home() {
  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-center py-4">
      <div className="relative mx-auto grid max-w-7xl gap-6 p-4 sm:grid-cols-2 lg:grid-cols-[1fr_1.5fr_1fr]">
        <div className="glow fixed bottom-0 left-0 right-0 top-[25%] -z-20 h-1/2 scale-[80%] rounded-full bg-purple-900 blur-[120px]"></div>

        <div className="left h-full w-full">
          <ProfileHeader />
          <ProfileAbout />
          <Services />
        </div>
        {/* Mid Section */}
        <div className="mid">
          <Projects />
          <TechStack />
        </div>

        {/* Right Section */}
        <div className="right">
          {/* <HighlightProject /> */}
          <WorkflowHighlight />
          <WorkExperience />
        </div>
      </div>
      <Footer />
    </main>
  );
}
