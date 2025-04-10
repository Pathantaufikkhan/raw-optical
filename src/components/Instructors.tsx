"use client";
import { WavyBackground } from "./ui/wavy-background";
import { AnimatedTooltip } from "./ui/animated-tooltip";

const specialists = [
  {
    id: 1,
    name: "Pathan Sajidkhan",
    designation: "Optometrist",
    image: "/images/specialists/sajid.jpg",
  },
  {
    id: 2,
    name: "Pathan Asifkhan",
    designation: "Lens Expert",
    image: "/images/specialists/asif.jpg",
  },
  {
    id: 3,
    name: "Pathan Shakilkhan",
    designation: "Frame Stylist",
    image: "/images/specialists/shakil.jpg",
  },
  {
    id: 4,
    name: "Pathan Javedkhan",
    designation: "Vision Consultant",
    image: "/images/specialists/javed.jpg",
  },
];

function Instructors() {
  return (
    <div className="relative h-[40rem] overflow-hidden flex items-center justify-center">
      <WavyBackground className="w-full max-w-7xl mx-auto flex flex-col items-center justify-center h-full">
        <h2 className="text-2xl md:text-4xl lg:text-7xl text-white font-bold text-center mb-8">
          Meet Our Specialists
        </h2>
        <p className="text-base md:text-lg text-white text-center mb-4">
          Trusted professionals here to care for your eyes and style your vision.
        </p>
        <div className="flex flex-row items-center justify-center mb-10 w-full">
          <AnimatedTooltip items={specialists} />
        </div>
      </WavyBackground>
    </div>
  );
}

export default Instructors;
