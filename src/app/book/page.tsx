import type { Metadata } from "next";
import { Monitor, MapPin } from "lucide-react";
import Sheet from "@/components/Sheet";

export const metadata: Metadata = {
  title: "Book",
  description: "Book Cheyenne Ling Counselling.",
};

const Book = () => {
  return (
    <main className="flex flex-col min-h-screen bg-background text-onBackground relative overflow-hidden">
      {/* Background image container with overlays */}
      <div className="absolute inset-0 bg-cover bg-center z-0" style={{ backgroundImage: "url('/images/pale-sky.jpg')" }}>
      </div>

      {/* Content */}
      <div className="relative flex-grow flex flex-col items-center justify-start pt-[20vh] px-6 md:px-12 z-10">
        {/* Heading */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-semibold text-primary mb-2">
            Book a Session
          </h1>
          <p className="text-md md:text-lg text-muted-foreground">
            Choose your preferred booking option below.
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12">
          {/* Book Online */}
          <a
            href="https://cheyennelingcounselling.janeapp.com/#/staff_member/1"
            aria-label="Book an online appointment"
            className="flex items-center gap-2 rounded-lg px-6 py-3 bg-primary hover:bg-primary-light text-background text-lg shadow-md hover:shadow-lg transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
          >
            <Monitor className="w-5 h-5" />
            Book online
          </a>

          {/* Book In-Person */}
          <a
            href="https://qiintegratedhealth.janeapp.com/#/staff_member/363"
            aria-label="Book an in-person appointment"
            className="flex items-center gap-2 rounded-lg px-6 py-3 bg-surface hover:bg-primary-light text-primary text-lg shadow-md hover:shadow-lg transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
          >
            <MapPin className="w-5 h-5" />
            Book in-person
          </a>
        </div>
      </div>
    </main>
  );
};

export default Book;

