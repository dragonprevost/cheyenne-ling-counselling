import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Areas of focus",
  description: 'Areas of focus.',
};

const Focus = () => {
  return (
    <div>
      Areas of focus
    </div>
  );
};

export default function MainContent() {
  return (
      <main className="flex-grow">
        <div className="container mx-auto p-6">
          <Focus />
        </div>
      </main>
  );
}
