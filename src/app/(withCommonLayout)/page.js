import FeaturedSubject from "@/components/Home/FeaturedSubject/FeaturedSubject";
import FeaturedTutors from "@/components/Home/FeaturedTutors/FeaturedTutors";
import OurNetwork from "@/components/Home/OurNetwork/OurNetwork";
import Sponsors from "@/components/Home/Sponsors/Sponsors";
import TrialClass from "@/components/Home/TrialClass/TrialClass";
import VisionMission from "@/components/Home/VisionMission/VisionMission";
import OurServices from "@/components/Home/WhatWeOffer/WhatWeOffer";
import SearchTutor from "@/components/SearchTutor/SearchTutor";
import SubscribeUs from "@/components/Home/SubscribeUs/SubscribeUs";


const Home = () => {
  return (
    <div>
      <SearchTutor />
      <OurServices />
      <FeaturedTutors />
      <FeaturedSubject />
      <VisionMission />
      <Sponsors />
      <TrialClass />
      <SubscribeUs />
      <OurNetwork />
    </div>
  )
}

export default Home;