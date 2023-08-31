import FeaturedSubject from "@/components/FeaturedSubject/FeaturedSubject";
import FeaturedTutors from "@/components/FeaturedTutors/FeaturedTutors";
import HeroSection from "@/components/HeroSection/HeroSection";
import OurServices from "@/components/OurServices/OurServices";
import Sponsors from "@/components/Sponsors/Sponsors";
import TrialClass from "@/components/TrialClass/TrialClass";
import VisionMission from "@/components/VisionMission/VisionMission";

const Home = () => {
  return (
    <div>
      <HeroSection/>
      <OurServices/>
      <FeaturedTutors/>
      <FeaturedSubject/>
      <VisionMission/>
      <Sponsors/>
      <TrialClass/>
      
    </div>
  )
}

export default Home;