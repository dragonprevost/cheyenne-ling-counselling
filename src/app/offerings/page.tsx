import type { Metadata } from "next";
import Image from "next/image";
import dahlia from "/public/images/dahlia.jpg";
import dahliaWhite from "/public/images/dahlia-white.jpg";
import shroom from "/public/images/mushroom.jpg";
import fiddleHead from "/public/images/fiddle-head.jpg";

export const metadata: Metadata = {
  title: "Offerings",
  description: "Cheyenne Ling Counselling, services and offerings.",
};

const Offering = ({
  title,
  body,
  imgSrc,
  reverse,
}: {
  title: string;
  body: string;
  imgSrc: string;
  reverse: boolean;
}) => {
  return (
    <div className="m-5">
      <div className="flex flex-col md:flex-row items-center gap-6 md:gap-12 w-full mt-4 mb-4">
        {/* Text Block */}
        <div
          className={`
              md:w-1/2 text-onBackground
              ${reverse ? "order-1 md:order-2" : "order-1"}
            `}
        >
          <h2 className="text-4xl mb-4">{title}</h2>
          <p className="text-xl">{body}</p>
        </div>
        <div
          className={`
              md:w-1/2
              ${reverse ? "order-2 md:order-1" : "order-2"}
            `}
        >
          <Image
            src={imgSrc}
            alt="Avatar about image"
            width={400}
            height={400}
            className="mx-auto rounded-xl"
          />
        </div>
      </div>
    </div>
  );
};

const Offerings = () => {
  return (
    <div>
      <Offering
        title="Free 15- Minute Initial Consultation"
        body="A free 15-minute virtual consultation is a recommended first step to see if we’re a good fit in working together for counselling. This is a chance for us to connect, for you to share what’s bringing you to counselling, and to ask any questions you might have about my approach."
        imgSrc={dahlia.src}
        reverse={false}
      />
      <hr />
      <Offering
        title="Individual Counselling"
        body="Standard counselling sessions are 50 minutes long. I offer both online and in-person sessions for adults seeking a supportive, warm, and non-judgmental approach to navigating life’s challenges. In our sessions, you’ll have the space to unpack your thoughts and emotions at your own pace. Together, we’ll work towards understanding the patterns in your life, uncovering the roots of your challenges, and creating a path forward that aligns with your authentic self."
        imgSrc={fiddleHead.src}
        reverse={true}
      />
      <hr />
      <Offering
        title="Extended Session"
        body="Extended sessions are offered for individual adults and are 80 minutes in length. These sessions offer an opportunity for deeper exploration into emotions, thoughts and feelings and patterns in your life. Extended sessions provide more time to reflect, process, and integrate insights, offering a valuable opportunity to strengthen our therapeutic relationship."
        imgSrc={shroom.src}
        reverse={false}
      />
      <hr />
      <Offering
        title="Crime Victims Assistance Program (CVAP) Session"
        body="A CVAP session is a 50-minute online counselling session for individuals registered with the Crime Victim Assistance Program (CVAP). CVAP provides coverage for a pre-determined number of sessions for victims, immediate family members, and some witnesses. Direct billing and coverage is available for those registered with the CVAP program."
        imgSrc={dahliaWhite.src}
        reverse={true}
      />
    </div>
  );
};

export default function MainContent() {
  return (
    <main className="flex-grow">
      <div className="container mx-auto p-6">
        <Offerings />
      </div>
    </main>
  );
}
