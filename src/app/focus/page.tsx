import type { Metadata } from "next";
import Image from "next/image";
import dahlia from "/public/images/dahlia.jpg";
import dahliaWhite from "/public/images/dahlia-white.jpg";
import shroom from "/public/images/mushroom.jpg";
import fiddleHead from "/public/images/fiddle-head.jpg";

export const metadata: Metadata = {
  title: "Areas of focus",
  description: "Cheyenne Ling Counselling, services and offerings.",
};

const Row = ({
  title,
  body,
  imgSrc,
  caption,
  reverse,
}: {
  title: string;
  body: string;
  imgSrc: string;
  caption: string;
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
          <p className="text-xl indent-0">{body}</p>
          <div className="text-center text-primary mt-4">
            <p className="font-bold">{caption}</p>
          </div>
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

const AreasOfFocusList = () => {
  return (
    <div>
      <Row
        title="Anxiety & Stress"
        body="The demands of life can be overwhelming, often leading to anxiety and stress. Whether you're managing work or school pressures, navigating relationships, or facing uncertainty, I offer a supportive space to safely explore these feelings. Together, we'll uncover the emotional triggers behind your anxiety and understand the messages your feelings are trying to communicate. By bringing awareness and understanding to these emotions, we can work towards lasting change and better emotional regulation."
        imgSrc={dahlia.src}
        caption="Overthinking • Perfectionism • Fear"
        reverse={false}
      />
      <hr />
      <Row
        title="Trauma & PTSD"
        body="Experiencing trauma, whether from a single event or ongoing distress, can have a profound and pervasive effect on the mind, body and emotions. If past events continue to trigger painful memories, anxiety, or emotional numbness, I’m here to support you. My approach is compassionate, trauma-informed, and tailored to your unique pace. I’ll support you rebuilding your sense of safety and moving towards healing."
        imgSrc={fiddleHead.src}
        caption="Safety • Healing • Integrating"
        reverse={true}
      />
      <hr />
      <Row
        title="Relationship & Interpersonal Issues"
        body="I support individuals in navigating misunderstandings, improving communication, and setting healthy boundaries with partners, family members, friends, or colleagues. In our work together, we will explore how early relationship patterns and attachment styles may impact your current relationships and identify ways to foster stronger more fulfilling relationships."
        imgSrc={shroom.src}
        caption="Communication • Navigating Separation • Boundaries"
        reverse={false}
      />
      <hr />
      <Row
        title="Grief and Loss"
        body="Loss is a deeply personal experience that can affect every part of your life, leaving you feeling isolated and overwhelmed. Whether you are grieving the death of a loved one, the end of a relationship, or a significant life transition, I provide a supportive space where you can process your emotions with compassion and understanding. My approach helps you explore your feelings, find meaning in your experience, and begin to heal at your own pace while honoring your loss."
        imgSrc={dahliaWhite.src}
        caption="Processing Loss • Life Transitions • Meaning Making"
        reverse={true}
      />
    </div>
  );
};

export default function MainContent() {
  return (
    <main className="flex-grow">
      <div className="container mx-auto p-6">
        <AreasOfFocusList />
      </div>
    </main>
  );
}
