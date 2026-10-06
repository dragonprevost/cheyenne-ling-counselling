import type { Metadata } from "next";
import { MapPin, Monitor } from "lucide-react";

import StyledLink from "@/components/StyledLink";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  // The root layout's title template doesn't apply to the root page itself
  // (Next.js treats them as the same leaf segment), so the brand suffix is
  // spelled out here explicitly.
  title: "Counselling in Kitsilano, Vancouver | Cheyenne Ling Counselling",
  description:
    "Cheyenne Ling, RCC, offers Emotionally Focused Individual Therapy (EFIT) and trauma-informed counselling in Kitsilano, Vancouver and online across BC. Book a free 15-minute consultation.",
  path: "/",
});

const HEADER_HEIGHT = 88;
const FOOTER_HEIGHT = 80;

const Hero = () => {
  return (
    <div
      className="flex flex-col items-center justify-start bg-[url(/images/poppies.jpg)] bg-cover bg-center px-6 pt-[12vh]"
      style={{ minHeight: `calc(100vh - ${HEADER_HEIGHT + FOOTER_HEIGHT}px)` }}
    >
      {/* Header Content */}
      <div className="text-center">
        <p className="text-xl font-semibold">Welcome to</p>
        <h1 className="font-cooper text-5xl font-bold md:text-6xl">
          Cheyenne Ling Counselling
        </h1>
        <h2 className="mt-3 text-xl font-semibold md:text-2xl">
          Registered Clinical Counsellor in Kitsilano, Vancouver
          <br />
          and online across BC
        </h2>
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

const Intro = () => {
  return (
    <section className="container mx-auto max-w-3xl px-6 py-16 text-center">
      <p className="text-lg indent-0">
        I&apos;m Cheyenne Ling, a Registered Clinical Counsellor (RCC) based in
        Kitsilano, Vancouver, offering in-person and online counselling across
        British Columbia. I specialize in{" "}
        <b>Emotionally Focused Individual Therapy (EFIT)</b>, a trauma-informed,
        attachment-based approach that helps you understand your emotions,
        heal old relational wounds, and build more secure, authentic
        connections with yourself and others.
      </p>
    </section>
  );
};

const FocusAreas = () => {
  const areas = [
    {
      title: "Relationship & Interpersonal Issues",
      body: "Improve communication, set healthy boundaries, and understand attachment patterns in your relationships.",
    },
    {
      title: "Trauma & PTSD",
      body: "Compassionate, trauma-informed support to rebuild a sense of safety and move toward healing.",
    },
    {
      title: "Anxiety & Stress",
      body: "Uncover the emotional triggers behind anxiety and work toward lasting emotional regulation.",
    },
    {
      title: "Grief & Loss",
      body: "Process loss and life transitions with compassion, at your own pace.",
    },
  ];

  return (
    <section className="bg-backgroundDark px-6 py-16">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="font-cooper text-4xl font-light">
          Areas I Support
        </h2>
        <div className="mt-8 grid gap-6 text-left sm:grid-cols-2">
          {areas.map((area) => (
            <div key={area.title} className="rounded-xl bg-surface p-6">
              <h3 className="text-xl font-semibold">{area.title}</h3>
              <p className="mt-2 text-base">{area.body}</p>
            </div>
          ))}
        </div>
        <div className="mt-8">
          <StyledLink href="/focus">See all areas of focus</StyledLink>
        </div>
      </div>
    </section>
  );
};

const AboutTeaser = () => {
  return (
    <section className="container mx-auto max-w-3xl px-6 py-16 text-center">
      <h2 className="font-cooper text-4xl font-light">My Approach</h2>
      <p className="mt-4 text-lg">
        My approach is trauma-informed and person-centred, drawing on
        Emotionally Focused Individual Therapy (EFIT), Internal Family Systems
        (IFS), and cognitive-behavioural therapy (CBT) to help you understand
        your emotions and build the relationships you want.
      </p>
      <div className="mt-6 flex flex-wrap items-center justify-center gap-6">
        <StyledLink href="/about">Learn more about me</StyledLink>
        <StyledLink href="/services">View services & pricing</StyledLink>
        <StyledLink href="/book">Book a free consultation</StyledLink>
      </div>
    </section>
  );
};

export default function Home() {
  return (
    <div>
      <main className="flex-grow">
        <Hero />
        <Intro />
        <FocusAreas />
        <AboutTeaser />
      </main>
    </div>
  );
}
