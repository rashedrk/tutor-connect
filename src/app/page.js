import FeaturedTutors from "@/components/FeaturedTutors/FeaturedTutors";
import HeroSection from "@/components/HeroSection/HeroSection";
import OurServices from "@/components/OurServices/OurServices";

const Home = () => {
  return (
    <div className="bg-[#E8E8E8]">
      <HeroSection/>
      <OurServices/>
      <FeaturedTutors/>
    </div>
  )
}

export default Home;