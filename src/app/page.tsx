import { MapPin, Monitor } from "lucide-react";

const HEADER_HEIGHT = 88;
const FOOTER_HEIGHT = 80;

const MainContent = () => {
  return (
    <div
      className="flex flex-col items-center justify-start bg-[url(/images/poppies.jpg)] bg-cover bg-center px-6 pt-[12vh]"
      style={{ minHeight: `calc(100vh - ${HEADER_HEIGHT + FOOTER_HEIGHT}px)` }}
    >
      {/* Header Content */}
      <div className="text-center">
        <h1 className="font-cooper text-7xl font-bold">Welcome</h1>
        <h4 className="mt-2 text-2xl font-bold">
          Cheyenne Ling
          <br />
          Counselling
        </h4>
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
            className="flex bg-surfaceDark items-center gap-2 rounded-lg px-6 py-3 text-lg text-primary shadow-md transition hover:bg-primary-light hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          >
            <MapPin className="h-5 w-5" />
            Book in-person
          </a>
        </div>
      </div>
    </div>
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
