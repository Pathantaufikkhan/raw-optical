"use client";
import Link from "next/link";
import courseData from "../data/music_cources.json";
import { BackgroundGradient } from "./ui/background-gradient";
import Image from "next/image";
// import { Button } from "./ui/moving-border";

interface Product {
  id: number;
  name: string;
  slug: string;
  description: string;
  price: number;
  brand: string;
  isFeatured: boolean;
  image: string;
}

function FeaturedCourses() {
  const featuredCourses = courseData.products.filter(
    (products: Product) => products.isFeatured
  );

  return (
    <div className="py-12 bg-gray-900">
      <div>
        <div className="text-center">
          <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">
            FEATURED FRAMES{" "}
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
            Make With the Best
          </p>
        </div>
      </div>
      <div className="mt-10 mx-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {featuredCourses.map((course: Product) => (
            <div key={course.id} className="flex justify-center text-white">
              <BackgroundGradient className="flex flex-col rounded-[22px] bg-black dark:bg-zinc-900 overflow-hidden h-full max-w-sm text-white">
                <div className="p-4 sm:p-6 flex flex-col items-center text-center flex-grow">
                  <Image
                    width={500}   // 👈 specify width
                    height={300}  // 👈 and height
                    src={course.image}
                    alt={course.name}
                    className="w-full h-48 object-cover rounded-md mb-4"
                  />
                  <p className="text-lg sm:text-xl text-white mt-4 mb-2 dark:text-neutral-200">
                    {course.name}
                  </p>

                  <p className="text-sm text-neutral-400 dark:text-neutral-400 flex-grow">
                    {course.description}
                  </p>
                  <Link href={`/courses/${course.slug}`}>see the frame</Link>
                </div>
              </BackgroundGradient>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-20 text-center">
        <Link
          href={"/courses"}
          className="px-4 py-2 rounded border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200"
        >
          View All frmaes
        </Link>
      </div>
    </div>
  );
}

export default FeaturedCourses;
