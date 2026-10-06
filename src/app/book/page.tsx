import type { Metadata } from "next";

import { MapPin, Monitor } from "lucide-react";

import FullBleedHero from "@/components/layout/FullBleedHero";
import { H1 } from "@/components/layout/Heading";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Book a Session",
  description:
    "Book a free 15-minute consultation or counselling session with Cheyenne Ling, RCC, online or in-person in Kitsilano, Vancouver.",
  path: "/book",
});

const MainContent = () => {
  return (
    <FullBleedHero
      backgroundImage="/images/pale-sky.jpg"
      className="flex flex-col items-center justify-start pt-[12vh]"
      accountForFooter
    >
      {/* Header Content */}
      <div className="text-center">
        <H1>Book a Session</H1>
        <p className="mt-2 text-lg font-normal">
          Choose your preferred booking option below
        </p>
      </div>

      {/* Buttons */}
      <div className="mt-12 w-full max-w-md">
        <div className="flex flex-col items-center gap-4 md:flex-row md:justify-between md:gap-16">
          {/* Book Online */}
          <a
            href="https://cheyennelingcounselling.janeapp.com/#/staff_member/1"
            aria-label="Book an online appointment"
            className="flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-lg text-background shadow-md transition hover:bg-primary-light hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          >
            <Monitor className="h-5 w-5" />
            Book online
          </a>

          {/* Book In-Person */}
          <a
            href="https://qiintegratedhealth.janeapp.com/#/staff_member/363"
            aria-label="Book an in-person appointment"
            className="flex items-center gap-2 rounded-lg bg-surface px-6 py-3 text-lg text-primary shadow-md transition hover:bg-primary-light hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          >
            <MapPin className="h-5 w-5" />
            Book in-person
          </a>
        </div>
      </div>
    </FullBleedHero>
  );
};

export default function Home() {
  return (
    <div>
      <main className="flex-grow">
        <MainContent />
      </main>
    </div>
  );
}
