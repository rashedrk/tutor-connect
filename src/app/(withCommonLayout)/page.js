import FeaturedSubject from "@/components/Home/FeaturedSubject/FeaturedSubject";
import FeaturedTutors from "@/components/Home/FeaturedTutors/FeaturedTutors";
import HeroSection from "@/components/Home/HeroSection/HeroSection";
import OurServices from "@/components/Home/WhatWeOffer/WhatWeOffer";
import Sponsors from "@/components/Home/Sponsors/Sponsors";
import TrialClass from "@/components/Home/TrialClass/TrialClass";
import VisionMission from "@/components/Home/VisionMission/VisionMission";
import OurNetwork from "@/components/Home/OurNetwork/OurNetwork";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <OurServices />
      <FeaturedTutors />
      <FeaturedSubject />
      <VisionMission />
      <Sponsors />
      <TrialClass />
      <OurNetwork />
    </div>
  )
}

export default Home;