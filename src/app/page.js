import FeaturedSubject from "@/components/FeaturedSubject/FeaturedSubject";
import FeaturedTutors from "@/components/FeaturedTutors/FeaturedTutors";
import HeroSection from "@/components/HeroSection/HeroSection";
import OurServices from "@/components/OurServices/OurServices";
import Sponsors from "@/components/Sponsors/Sponsors";
import TrialClass from "@/components/TrialClass/TrialClass";

const Home = () => {
  return (
    <div className="bg-[#E8E8E8]">
      <HeroSection/>
      <OurServices/>
      <FeaturedTutors/>
      <FeaturedSubject/>
      <Sponsors/>
      <TrialClass/>
      
    </div>
  )
}

export default Home;