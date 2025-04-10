"use client";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const opticalStoreTestimonials = [
  {
    quote:
      "I’ve never had a more thorough eye exam. The staff was friendly and explained everything clearly. I can finally see perfectly again!",
    name: "Priya Sharma",
    title: "Customer – Prescription Glasses",
  },
  {
    quote:
      "Loved the wide range of stylish frames. I walked in not knowing what I wanted and left with the perfect pair of glasses.",
    name: "Rahul Verma",
    title: "Customer – Eyewear",
  },
  {
    quote:
      "Their blue light protection lenses are a game changer for my screen-heavy workdays. No more headaches or tired eyes!",
    name: "Sneha Patel",
    title: "Customer – Blue Light Glasses",
  },
  {
    quote:
      "The optician was super knowledgeable and helped me find exactly what I needed. Great service and fast delivery too!",
    name: "Ankit Mehra",
    title: "Customer – Vision Care",
  },
  {
    quote:
      "I ordered my contact lenses online and they were delivered the same day. Smooth experience and excellent quality.",
    name: "Meera Iyer",
    title: "Customer – Contact Lenses",
  },
];

function TestimonialCards() {
  return (
    <div className="h-[40rem] w-full dark:bg-black dark:bg-grid-white/[0.2] relative flex flex-col items-center justify-center overflow-hidden">
      <h2 className="text-3xl font-bold text-center mb-8 z-10">
        Clear Vision, Happy Customers 👓
      </h2>
      <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-6xl">
          <InfiniteMovingCards
            items={opticalStoreTestimonials}
            direction="right"
            speed="fast"
          />
        </div>
      </div>
    </div>
  );
}

export default TestimonialCards;
