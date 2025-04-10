"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";

const content = [
  {
    title: "Precision Eye Exams",
    description:
      "Our advanced eye examination technology ensures the most accurate prescriptions tailored to your vision needs. Get the clarity you deserve with state-of-the-art diagnostics.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--blue-500),var(--sky-400))] flex items-center justify-center text-white">
        Precision Eye Exams
      </div>
    ),
  },
  {
    title: "Wide Range of Frames",
    description:
      "From luxury designer styles to affordable classics, our collection of frames suits every face and fashion taste. Explore thousands of options tailored just for you.",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white bg-[linear-gradient(to_bottom_right,var(--purple-500),var(--pink-400))]">
        Wide Range of Frames
      </div>
    ),
  },
  {
    title: "Blue Light Protection",
    description:
      "Protect your eyes from digital screens with our blue light blocking lenses. Reduce eye strain, improve sleep, and stay comfortable all day long.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        Blue Light Protection
      </div>
    ),
  },
  // {
  //   title: "Same-Day Delivery",
  //   description:
  //     "Need your glasses in a hurry? Our in-house lab and express delivery service can get your custom prescription glasses to you on the same day .",
  //   content: (
  //     <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
  //       Same-Day Delivery
  //     </div>
  //   ),
  // },
];

function WhyChooseUs() {
  return (
    <div>
<StickyScroll content={content}/>

    </div>
  )
}

export default WhyChooseUs