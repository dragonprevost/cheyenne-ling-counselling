import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQs",
  description: "Frequently asked questions.",
};

const FAQs = () => {
  return (
    <div>
      <h2 className="text-3xl font-bold text-primary mb-4 font-cooper">
        Frequently Asked Questions
      </h2>
      <div className="bg-foreground rounded-xl p-2">
        <div className="m-4">
          <h4 className="text-xl font-bold text-black mb-4">
            First Question?
          </h4>
          <p className="text-background">This is the answer</p>
        </div>
        <div className="m-4">
          <h4 className="text-xl font-bold text-white mb-4">
            First Question?
          </h4>
          <p className="text-background">This is the answer</p>
        </div>
        <div className="m-4">
          <h4 className="text-xl font-bold text-background mb-4">
            First Question?
          </h4>
          <p className="text-background">This is the answer</p>
        </div>
      </div>
    </div>
  );
};

export default function MainContent() {
  return (
    <main className="flex-grow">
      <div className="container mx-auto p-6">
        <FAQs />
      </div>
    </main>
  );
}
