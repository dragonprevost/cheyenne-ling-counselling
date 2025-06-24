import Sheet from "@/components/Sheet";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services",
  description: "Counselling services offerings, and prices.",
};

interface InfoCardProps {
  title: string;
  price: string;
  body: string;
}

const InfoCard: React.FC<InfoCardProps> = ({ title, price, body }) => {
  return (
    <div>
      <div className="p-8 pb-0">
        <div className="flex items-start mb-2">
          <h2 className="text-xl font-semibold">{title}</h2>
          <span className="text-xl ml-3 ">-</span>
          <span className="text-xl ml-3">{price}</span>
        </div>
        <p className="">{body}</p>
        <hr className="border-t-1 border-gray-400 mt-8" />
      </div>
    </div>
  );
};

const Offerings = () => {
  return (
    <div>
      <InfoCard
        title="Initial Consultation"
        price="Free"
        body="A free 15-minute online consultation is a recommended first step to see if we’re a good fit for working together in counseling. This is an opportunity for us to connect and for you to ask any questions you may have."
      />
      <InfoCard
        title="Individual Counselling"
        price="$140"
        body="Standard counselling sessions are 50 minutes long. I offer both online and in-person sessions for adults seeking a supportive, warm, and non-judgmental approach to navigating life’s challenges. In our sessions, you’ll have the space to unpack your thoughts and emotions at your own pace. Together, we’ll work towards understanding the patterns in your life, uncovering the roots of your challenges, and creating a path forward that aligns with your authentic self."
      />
      <InfoCard
        title="Extended Session"
        price="$224"
        body="Extended sessions are 80 minutes in length. These sessions offer an opportunity for deeper exploration into emotions, thoughts and feelings and patterns in your life. Extended sessions provide more time to reflect, process, and integrate insights, offering a valuable opportunity to strengthen our therapeutic relationship."
      />
      <InfoCard
        title="Crime Victims Assistance Program (CVAP) Session"
        price="$140"
        body="A CVAP session is a 50-minute online counselling session for individuals registered with the Crime Victim Assistance Program (CVAP). CVAP provides coverage for a predetermined number of sessions for victims, immediate family members, and some witnesses. Direct billing and coverage is available for those registered with the CVAP program."
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
