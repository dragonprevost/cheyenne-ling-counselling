import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book",
  description: 'Book Cheyenne Ling Counselling.',
};

const Book = () => {
  return (
    <div>
      Book
    </div>
  );
};

export default function MainContent() {
  return (
      <main className="flex-grow">
        <div className="container mx-auto p-6">
          <Book />
        </div>
      </main>
  );
}
