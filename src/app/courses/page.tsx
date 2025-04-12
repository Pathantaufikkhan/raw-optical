'use client';
import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import courseData from "@/data/music_cources.json";

const Page = () => {
  return (
    <div className="min-h-screen bg-black py-12 pt-36 px-4">
      <h1 className="text-2xl md:text-7xl text-center font-sans font-bold mb-12 text-white">
        All Frames ({courseData.products.length})
      </h1>

      <div className="flex flex-wrap justify-center gap-x-6 gap-y-4 ">
        {courseData.products.map((course) => (
          <CardContainer key={course.id} className="inter-var mx-2 my-1">
            <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full sm:w-[30rem] h-auto rounded-xl p-6 border transition-all duration-300">
              <CardItem
                translateZ="50"
                className="text-xl font-bold text-neutral-600 dark:text-white"
              >
                {course.name}
              </CardItem>

              <CardItem
                as="p"
                translateZ="60"
                className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
              >
                {course.description}
              </CardItem>

              <CardItem translateZ="100" className="w-full mt-4">
                <Image
                  src={course.image}
                  height={1000}
                  width={1000}
                  className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl transition"
                  alt={course.name}
                />
              </CardItem>
            </CardBody>
          </CardContainer>
        ))}
      </div>
    </div>
  );
};

export default Page;
