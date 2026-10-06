import Sheet from "@/components/Sheet";
import type { Metadata } from "next";

import FullBleedHero from "@/components/layout/FullBleedHero";
import { H1, H3 } from "@/components/layout/Heading";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Contact",
  description:
    "Get in touch with Cheyenne Ling, RCC, for counselling in Kitsilano, Vancouver or online across BC. Call, email, or book a free 15-minute consultation.",
  path: "/contact",
});

const Contact = () => {
  return (
    <FullBleedHero
      backgroundImage="/images/mixed-flowers-3.jpg"
      className="flex items-center justify-center py-12"
      accountForFooter
    >
      <Sheet>
        <div className="p-7">
          <div className="text-center">
            <H1 size="compact" className="mb-6 text-primary">
              Get In Touch
            </H1>
            <p className="text-lg text-primary mb-4">
              Feel free to contact me via email or phone! I offer
              counselling in Kitsilano, Vancouver and online across BC.
            </p>
          </div>
          <div className="mt-5">
            <H3 className="text-primary">Phone - Qi Integrated Health</H3>
            <a
              href="tel:+16047428383"
              className="text-blue-600 hover:text-indigo-800"
            >
              (604) 742-8383
            </a>
          </div>
          <div className="mt-5">
            <H3 className="text-primary">In-Person Office</H3>
            <p className="text-primary">1764 W 7th Ave, Vancouver, BC V6J 5A3</p>
          </div>
          <div className="mt-5">
            <H3 className="text-primary">Email</H3>
            <a
              href="mailto:cheyenneling.psychotherapy@gmail.com"
              className="text-blue-600 hover:text-indigo-800"
            >
              cheyenneling.psychotherapy@gmail.com
            </a>
          </div>
        </div>
      </Sheet>
    </FullBleedHero>
  );
};

export default function MainContent() {
  return (
    <main className="flex-grow">
      <Contact />
    </main>
  );
}
