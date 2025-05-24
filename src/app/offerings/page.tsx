import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Offerings",
  description: 'Cheyenne Ling Counselling, services and offerings.',
};

const Offerings = () => {
  return (
    <div>
      Services and offerings
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
