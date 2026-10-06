import type { Metadata } from "next";

import { H1 } from "@/components/layout/Heading";
import PageContainer from "@/components/layout/PageContainer";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "FAQs",
  description:
    "Answers to common questions about counselling with Cheyenne Ling, RCC, in Kitsilano, Vancouver and online across BC, pricing, and Emotionally Focused Individual Therapy (EFIT).",
  path: "/faqs",
});

interface FAQ {
  question: string;
  answer: string;
}

const FAQS: FAQ[] = [
  {
    question: "Do you offer in-person counselling in Kitsilano, Vancouver?",
    answer:
      "Yes. I offer in-person sessions through Qi Integrated Health in Kitsilano, Vancouver, as well as online counselling for clients anywhere in British Columbia.",
  },
  {
    question: "What is Emotionally Focused Individual Therapy (EFIT)?",
    answer:
      "EFIT is a trauma-informed, attachment-based approach that helps you understand the emotions and relational patterns shaped by past experiences. It's an evidence-based way to process feelings, heal old attachment wounds, and build more secure relationships with yourself and others.",
  },
  {
    question: "How much does counselling cost?",
    answer:
      "A free 15-minute initial consultation is available before we begin. Standard 50-minute individual counselling sessions are $140, and extended 80-minute sessions are $224. Crime Victim Assistance Program (CVAP) sessions are also $140 with direct billing available. See the Services page for full details.",
  },
  {
    question: "Do you offer online counselling across BC?",
    answer:
      "Yes, I offer secure online counselling to adults anywhere in British Columbia, in addition to in-person sessions in Kitsilano, Vancouver.",
  },
  {
    question: "Do you direct bill CVAP?",
    answer:
      "Yes. I'm an approved provider with the Crime Victim Assistance Program (CVAP) and offer direct billing for registered clients, immediate family members, and some witnesses.",
  },
  {
    question: "What can I expect from a free consultation?",
    answer:
      "The free 15-minute consultation is a no-pressure opportunity for us to connect, for you to ask questions, and for us to see whether we're a good fit to work together before booking a full session.",
  },
  {
    question: "What issues do you help with?",
    answer:
      "I support adults with relationship and interpersonal issues, trauma and PTSD, anxiety and stress, and grief and loss. You can read more on the Areas of Focus page.",
  },
  {
    question: "How do I book an appointment?",
    answer:
      "You can book an online or in-person session directly through the Book page, or reach out by phone or email first if you have questions.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

const FAQs = () => {
  return (
    <div>
      <H1 className="mb-6">Frequently Asked Questions</H1>
      <div className="bg-foreground rounded-xl p-2">
        {FAQS.map((faq) => (
          <div className="m-4" key={faq.question}>
            <h2 className="text-xl font-bold text-primary mb-2">
              {faq.question}
            </h2>
            <p className="text-primary">{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default function MainContent() {
  return (
    <main className="flex-grow">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <PageContainer>
        <FAQs />
      </PageContainer>
    </main>
  );
}
