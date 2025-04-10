"use client";
import Link from "next/link";
import { HoverEffect } from "./ui/card-hover-effect";
import {
  Glasses,
  Eye,
  Contact2,
  MonitorSmartphone,
  TrendingUp,
  CalendarCheck,
} from "lucide-react";

const featuredSessions = [
  {
    title: "How to Choose the Right Glasses",
    description:
      "Pick the perfect frames for your face shape, lifestyle, and visual needs.",
    slug: "choose-right-glasses",
    icon: <Glasses className="w-6 h-6 text-sky-600" />,
  },
  {
    title: "Understanding Blue Light Lenses",
    description:
      "Protect your eyes from screens — learn if blue light glasses are right for you.",
    slug: "blue-light-lenses",
    icon: <MonitorSmartphone className="w-6 h-6 text-sky-600" />,
  },
  {
    title: "Contact Lens Care 101",
    description:
      "Proper hygiene, application tips, and myths about contact lenses.",
    slug: "contact-lens-care",
    icon: <Contact2 className="w-6 h-6 text-sky-600" />,
  },
  {
    title: "Latest Trends in Eyewear Fashion",
    description:
      "From retro to minimal — discover the most stylish frames of the year.",
    slug: "eyewear-trends",
    icon: <TrendingUp className="w-6 h-6 text-sky-600" />,
  },
  {
    title: "Vision Tips for Digital Eye Strain",
    description:
      "Reduce fatigue and headaches with proven screen-time strategies.",
    slug: "digital-eye-strain",
    icon: <Eye className="w-6 h-6 text-sky-600" />,
  },
  {
    title: "When Should You Visit an Optometrist?",
    description:
      "Spot early signs of eye issues and know when it's time for a check-up.",
    slug: "visit-optometrist",
    icon: <CalendarCheck className="w-6 h-6 text-sky-600" />,
  },
];

function UpcomingWebinars() {
  return (
    <div className="p-12 bg-sky-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center">
          <h2 className="text-base text-sky-600 font-semibold tracking-wide uppercase">
            Free Vision Webinars
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-sky-900 sm:text-4xl">
            See Better. Learn Smarter.
          </p>
        </div>

        <div className="mt-10">
          <HoverEffect
            items={featuredSessions.map((session, index) => ({
              key: session.slug || index,
              title: session.title,
              description: session.description,
              icon: session.icon, // optional — plug into your HoverEffect component if it supports it
              link: `/webinar/${session.slug}`,
            }))}
          />
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/webinars"
            className="inline-block px-6 py-2 rounded-full border border-sky-600 text-sky-700 bg-white hover:bg-sky-100 transition duration-200 font-medium"
          >
            View All Sessions
          </Link>
        </div>
      </div>
    </div>
  );
}

export default UpcomingWebinars;
