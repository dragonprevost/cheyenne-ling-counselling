import Sheet from "@/components/Sheet";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "About Cheyenne Ling Counselling.",
};

const About = () => {
  return (
    <div className="bg-[url(/images/forget-me-nots.jpg)] bg-cover p-6">
      <div className="flex flex-col md:flex-row items-center gap-6 md:gap-12">
        <div className="md:w-1/2 text-onBackground">
          <h2 className="text-2xl font-semibold mb-4">About</h2>
          <p className="text-base text-gray-600">
            We provide professional, high-quality services that help you
            succeed. Our team of experts works with passion and precision to
            bring your ideas to life.
          </p>
        </div>

        <div className="md:w-1/2">
          <Sheet>
            <AboutFirstParagraphContent />
          </Sheet>
        </div>
      </div>
    </div>
  );
};

const AboutFirstParagraphContent = () => {
  return (
    <div className="text-lg">
      <p className="indent-4">
        Welcome to my page! I’m Cheyenne, a Registered Clinical Counsellor (RCC)
        based in Vancouver, BC. I understand how isolating and exhausting it can
        feel to be stuck in a cycle of depression, anxiety, grief, addiction, or
        low self-esteem. Through my own personal struggles with disordered
        eating, depression, and anxiety, I've learned how important it is to
        have a welcoming space where you can express yourself freely, without
        judgment.
      </p>
      <p className="text-base indent-4 pt-3">
        My personal experiences inspired me to pursue a Bachelor of Science
        degree in Psychology (with distinction), which led me to work in a
        neuropsychology program as a psychometrist. In this role, I administered
        psychometric tests for neurological and mental health conditions,
        including Parkinson’s disease, substance use, and depression.
        <br />
      </p>
      <p className="text-base indent-4 pt-3">
        Subsequently, I decided to pursue my goal of becoming a Registered
        Clinical Counsellor by obtaining a Master of Arts in Counselling
        Psychology. This path has allowed me to work in a field that aligns with
        my passion for creating safe, non-judgmental spaces where people can
        explore their emotions and navigate life’s challenges. I am deeply
        honoured to collaborate with individuals as they explore their inner
        worlds and journeys toward healing.
        <br />
      </p>
      <p className="text-base indent-4 pt-3">
        Outside of my practice, I enjoy spending time in the forest, gardening,
        connecting with family and friends, and listening to music while on a
        run. I also love keeping up with the latest counselling research through
        podcasts and books, as well as deepening my understanding of
        psychedelic-assisted psychotherapy.
        <br />
      </p>
      <p className="text-base indent-4 pt-3">
        I acknowledge the privilege and responsibility I hold in living and
        working on the unceded, ancestral territories of the xʷməθkʷəy̓əm
        (Musqueam), Sḵwx̱wú7mesh (Squamish), and səlilwətaɬ (Tsleil-Waututh)
        Nations. I feel deeply grateful to be on this beautiful and abundant
        land. What I value most is holding space for the full range of human
        emotions. In our space, all feelings are always welcome!
      </p>
    </div>
  );
};

export default function MainContent() {
  return (
    <main className="flex-grow">
      <About />
    </main>
  );
}
