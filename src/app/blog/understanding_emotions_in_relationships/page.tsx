import type { Metadata } from "next";
import Image from "next/image";
import banner from "/public/images/blogs/couple-sunset.jpg";
import ParagraphLink from "../../../components/ParagraphLink";
import { H1, H2, H3 } from "@/components/layout/Heading";
import Prose from "@/components/layout/Prose";
import { blogPostingJsonLd, pageMetadata } from "@/lib/seo";

const TITLE = "Why Your Feelings Can Feel So Intense in Relationships";
const DESCRIPTION =
  "Feeling overwhelmed in your relationship? Discover how past experiences may be impacting your current relationships and emotions and how online counselling can help.";
const PATH = "/blog/understanding_emotions_in_relationships";
const IMAGE = "/images/blogs/couple-sunset.jpg";

export const metadata: Metadata = pageMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: PATH,
  image: IMAGE,
});

const jsonLd = blogPostingJsonLd({
  title: TITLE,
  description: DESCRIPTION,
  path: PATH,
  image: IMAGE,
  datePublished: "2025-10-19",
});

const MainContent = () => {
  return (
    <Prose>
      <H1>
        Feeling ‘Too Emotional’ in Your Relationship? Understanding Why Your
        Feelings Can Feel So Intense
      </H1>
      <Image
        src={banner}
        alt="Couple watching the sunset together, representing emotional intensity in relationships"
        className="object-cover rounded-xl"
      />
      <p className="text-gray-500 text-sm italic">
        Feeling overwhelmed in your relationship? Discover how past experiences
        may be impacting your current relationships and emotions and how online
        counselling can help.
      </p>
      <H2>
        Why Emotions Can Feel Overwhelming in Relationship
      </H2>
      <p>
        Within therapy, many people often share they feel “too emotional” in
        their relationships. However, there is often a very understandable
        reason for this intensity.{" "}
        <ParagraphLink href="https://pmc.ncbi.nlm.nih.gov/articles/PMC11010316/">
          Attachment theory
        </ParagraphLink>{" "}
        shows that our need for emotional closeness and security is wired deep
        within us.
      </p>
      <p>
        As infants, we depend on caregivers for comfort and safety. If your
        caregivers were not consistently available, you may have become more
        sensitive to signs of distance or disconnection, as a way of
        anticipating and responding to emotional unpredictability. Over time,
        these early experiences shape our internal understanding, or “model,” of
        what relationships are like. These experiences influence how we open-up
        to others, handle conflict, and what we expect when we need care or
        support as adults. Thus, when we enter into close relationships as
        adults this can activate deep emotional patterns formed long before your
        current relationship.
      </p>

      <H2>
        What Emotional Overwhelm Looks Like in Relationships
      </H2>
      <p>
        When emotional closeness feels uncertain or threatened, you might notice
        yourself becoming emotionally overwhelmed. Common signs include:
      </p>
      <ul className="list-disc list-inside ml-4">
        <li>Shutting down, going numb, or withdrawing to cope</li>
        <li>
          Quick reactions like defensiveness or snapping when hurt or scared
        </li>
        <li>Feeling “too much” and worrying you’ll push your partner away</li>
        <li>Overthinking every word or needing constant reassurance</li>
        <li>“Seeing red” or feeling sudden anger</li>
        <li>Persistently apologizing, even when it’s not your fault</li>
      </ul>
      <p>
        These reactions are often your mind and body’s way of trying to protect
        you from feeling rejected, unseen, or unsafe. Emotional overwhelm can
        happen when something in the present stirs up old fears of disconnection
        or abandonment. Even though these responses can feel confusing or “too
        much,” they’re rooted in your natural need for closeness and safety.
        Understanding where they come from is the first step toward responding
        differently.
      </p>
      <H2>
        Could My Emotional Reactions Be Linked to Past Experiences or Trauma?
      </H2>
      <p>
        Many emotional reactions in adult relationships such as the examples
        listed above, trace back to early experiences with caregivers. Intense
        responses like withdrawal or constant reassurance may be the residual
        impact of past relationships and experiences. These responses often come
        from the{" "}
        <ParagraphLink href="https://pmc.ncbi.nlm.nih.gov/articles/PMC4845754/#:~:text=The%20second%20dimension%2C%20anxiety%2C%20assesses,systems%20chronically%20activated%20%5B17%5D">
          attachment system
        </ParagraphLink>
        , the same instinctive part of us that once helped keep us safe and
        connected to caregivers.
      </p>
      <p>
        Attachment patterns act like filters that shape how we experience and
        respond to relationships as adults. For example, if you received
        inconsistent care as a child, you might have learned to work harder for
        attention or to pull away to avoid disappointment. As an adult, this can
        show up as seeking constant reassurance in relationships or withdrawing
        to protect yourself from emotional pain.
      </p>
      <p>
        Understanding your attachment style helps explain why you respond
        emotionally in certain ways, especially during stress or conflict.
        Recognizing these patterns is the first step toward responding from the
        present, rather than being unconsciously driven by past experiences or
        trauma.
      </p>
      <H2>
        How Therapy Can Help You Navigate Emotional Intensity
      </H2>
      <p>
        Through counselling approaches like{" "}
        <b>Emotionally Focused Therapy (EFT)</b> and{" "}
        <b>Eye Movement Desensitization and Reprocessing (EMDR)</b>, I will
        support you:
      </p>
      <ul className="list-disc list-inside ml-4">
        <li>
          Explore the roots of your emotional reactions and attachment patterns
        </li>
        <li>
          Understand how past experiences may influence your present responses
        </li>
        <li>
          Reconnect compassionately with parts of yourself that learned to
          protect you
        </li>
        <li>
          Respond to your partner from the present moment, rather than reacting
          automatically from the past
        </li>
      </ul>
      <p>
        Counselling provides a safe space to unpack emotional overwhelm, build
        trust in yourself and your relationships, and learn supportive ways to
        communicate and connect with others. I offer{" "}
        <b>in-person counselling in Kitsilano, Vancouver</b> and{" "}
        <b>online counselling</b> across British Columbia, supporting adults
        who want to work through past wounds, fear, and trust issues so they
        can build secure and fulfilling connections in their relationships.
      </p>

      <p
        className={`inline-block px-4 py-2 rounded-md text-primary transition-colors bg-white`}
      >
        <ParagraphLink href="/book">
          🌿 <b>Book a free 15-minute consultation</b>
        </ParagraphLink>{" "}
        to start learning how to manage emotional overwhelm and create
        relationships that feel secure, authentic, and connected.
      </p>
    </Prose>
  );
};

export default function Home() {
  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="container mx-auto px-4 sm:px-8 md:px-16 lg:px-20 py-8">
        <main className="flex-grow">
          <MainContent />
        </main>
      </div>
    </div>
  );
}
