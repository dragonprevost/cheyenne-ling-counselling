import Sheet from "@/components/Sheet";
import type { Metadata } from "next";
import Image from "next/image";
import headShot from "/public/images/head-shot.jpg";


export const metadata: Metadata = {
  title: "About",
  description: "About Cheyenne Ling Counselling.",
};

const HEADER_HEIGHT = 88; // px — adjust if your header height differs

const About = () => {
  return (
    <>
      {/* Top Section with bg image filling viewport minus header */}
      <div
        className="bg-[url(/images/winter-tree-top.jpg)] bg-cover bg-center p-6 flex items-center"
        style={{ minHeight: `calc(100vh - ${HEADER_HEIGHT}px)` }}
      >
        <div className="flex flex-col md:flex-row items-center gap-6 md:gap-12 w-full">
          <div className="md:w-1/2 text-onBackground">
            <h2 className="font-cooper text-7xl mb-4">About</h2>
            <p className="text-base text-gray-600 mb-4">
              Welcome to my page! I’m Cheyenne, a Registered Clinical Counsellor
              (RCC) based in Vancouver, BC.
            </p>
            <div className="flex justify-center">
              <Image
                src={headShot.src}
                alt="Avatar about image"
                width={400}
                height={400}
                className="mx-auto rounded-xl"
              />
            </div>
          </div>
          <div className="md:w-1/2">
            <Sheet>
              <AboutFirstParagraphContent />
            </Sheet>
          </div>
        </div>
      </div>

      {/* My approach Section */}
      <section className="p-6">
        <div className="bg-cover p-7">
          <h2 className="font-cooper font-light text-6xl text-center">
            My approach
          </h2>
        </div>
        <ApproachContent />
      </section>

      {/* Education & training Section */}
      <section className="p-6 bg-backgroundDark">
        <div className="bg-cover p-7">
          <h2 className="font-cooper font-light text-6xl text-center">
            Education & training
          </h2>
        </div>
        <div className="flex flex-col md:flex-row gap-6 md:gap-12">
          <div className="md:w-1/2">
            <Sheet>
              <EducationAndCertificationsContent />
            </Sheet>
          </div>
          <div className="md:w-1/2">
            <Sheet>
              <TrainingsContent />
            </Sheet>
          </div>
        </div>
      </section>
    </>
  );
};
const List = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return <ul className="list-none pl-6 space-y-4">{children}</ul>;
};

const EducationItem = ({ title, body }: { title: string; body: string }) => {
  return (
    <>
      <li>
        <span className="font-bold">{title}</span>
        <br />
        {body}
      </li>
      <hr className="my-4 border-primary" />
    </>
  );
};

const TrainingsContent = () => {
  return (
    <section className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Trainings</h2>
      <List>
        <EducationItem
          title="Fundamentals of Psilocybin-Assisted Psychotherapy Training Program"
          body="TheraPsil, November 2024 (in progress)"
        />
        <EducationItem
          title="Complete Internal Family Systems Therapy (IFS) Immersion"
          body="PESI — In progress"
        />
        <EducationItem
          title="Level 1 Certificate Course in Emotionally Focused Individual Therapy"
          body=" PESI - International Centre for Excellence in Emotionally Focused Therapy (ICEEFT), October 2024"
        />
        <EducationItem
          title="Emotionally Focused Therapy for Traumatized Individuals: Shaping a New Sense of Self"
          body="PESI, October 2024"
        />
        <EducationItem
          title="Applied Suicide Intervention Skills Training (ASIST)"
          body="Crisis Intervention & Suicide Prevention Centre of BC, September 2024"
        />
      </List>
    </section>
  );
};

const EducationAndCertificationsContent = () => {
  return (
    <section className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Certifications</h2>
      <List>
        <EducationItem
          title="Registered Clinical Counsellor (RCC #24200)"
          body="Member of the BC Association of Clinical Counsellors"
        />
        <EducationItem
          title="Crime Victims Assistance Program (CVAP) Approved"
          body="BC Government, December 2024"
        />
      </List>
      <br />
      <h2 className="text-2xl font-semibold mb-4">Education</h2>
      <List>
        <EducationItem
          title="Master of Arts in Counselling Psychology — With Distinction"
          body="Yorkville University"
        />
        <EducationItem
          title="Bachelor of Science in Psychology — With Distinction"
          body="University of Victoria"
        />
      </List>
    </section>
  );
};

const ApproachContent = () => {
  return (
    <div className="text-lg">
      <p className="indent-4 pt-3 text-base">
        My approach to therapy is trauma-informed and person-centred,
        recognizing the profound impact that past experiences can have on
        emotional, physical, and spiritual well-being. Central to my work is a
        person-centred approach, grounded in Carl Rogers’ belief that the
        therapeutic relationship itself can be a powerful catalyst for healing.
        I aim to create a warm, non-judgmental space where you can be your most
        authentic self, listened to with empathy and acceptance, and feel fully
        understood.
      </p>
      <p className="text-base indent-4 pt-3">
        In addition to this foundation, I draw from cognitive-behavioural
        therapy (CBT) to help you identify and shift unhelpful thought and
        behaviour patterns. I also believe that emotions hold valuable messages
        we need to hear, and that every feeling serves a purpose. Therefore, I
        incorporate Emotion-Focused Individual Therapy (EFIT), guiding you to
        explore and process emotions in a meaningful way, helping you understand
        and integrate your feelings. Furthermore, I use Internal Family Systems
        (IFS) to help you connect with and heal different parts of yourself,
        fostering greater self-understanding and inner harmony. This integrative
        framework offers flexible treatment, combining various therapeutic
        modalities tailored to your unique needs. I also place a strong emphasis
        on the quality of our connection, recognizing the importance of the
        therapeutic relationship in supporting your healing process.
        <br />
      </p>
    </div>
  );
};
const AboutFirstParagraphContent = () => {
  return (
    <div className="text-lg">
      <p className="indent-4 pt-3 text-base">
        I understand how isolating and exhausting it can feel to be stuck in a
        cycle of depression, anxiety, grief, addiction, or low self-esteem.
        Through my own personal struggles with disordered eating, depression,
        and anxiety, I've learned how important it is to have a welcoming space
        where you can express yourself freely, without judgment.
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
