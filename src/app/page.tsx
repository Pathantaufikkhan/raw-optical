// import Image from "next/image";

import FeauturedCources from "@/components/FeauturedCources";
import Footer from "@/components/Footer";
import Instructors from "@/components/Instructors";
import TestimonialCards from "@/components/TestimonialCards";
import HeroSection from "@/components/ui/HeroSection";
import UpcomingWebinars from "@/components/UpcomingWebinars";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function Home() {
  return (
<main className="min-h-screen antialiased bg-black text-white">

<div className="px-4 md:px-12"> 

  <HeroSection/>
  <FeauturedCources/>
  <WhyChooseUs/>
  <TestimonialCards/>
  <UpcomingWebinars/>
  <Instructors/>
  <Footer/>
</div>
</main> 
);
}
