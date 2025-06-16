import Sheet from "@/components/Sheet";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Cheyenne Ling Counselling.",
};

const Contact = () => {
  return (
    <div className="flex items-center justify-center">
      <Sheet>
        <div className="p-7">
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-6 text-primary">
              Get In Touch
            </h1>
            <p className="text-lg text-primary mb-4">
              Feel free to contact me via email or phone!
            </p>
          </div>
          <div className="mt-5">
            <h2 className="text-xl font-semibold text-primary">
              Phone - Qi Integrated Health
            </h2>
            <a
              href="tel:+16047428383"
              className="text-indigo-600 hover:text-indigo-800 dark:text-indigo-400 dark:hover:text-indigo-300"
            >
              (604) 742-8383
            </a>
          </div>
          <div className="mt-5">
            <h2 className="text-xl font-semibold text-primary">Email</h2>
            <a
              href="mailto:cheyenneling.psychotherapy@gmail.com"
              className="text-indigo-600 hover:text-indigo-800 dark:text-indigo-400 dark:hover:text-indigo-300"
            >
              cheyenneling.psychotherapy@gmail.com
            </a>
          </div>
        </div>
      </Sheet>
    </div>
  );
};

export default function MainContent() {
  return (
    <main className="flex-grow">
      <div className="container mx-auto p-6">
        <Contact />
      </div>
    </main>
  );
}
