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
<main className="min-h-sbg-grid-white antialiased/[0.9] bg-black text-white">
<div>

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
