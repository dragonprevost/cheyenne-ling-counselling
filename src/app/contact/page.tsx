import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: 'Get in touch with Cheyenne Ling Counselling.',
};

const Contact = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md w-full max-w-md text-center">
        <h1 className="text-3xl font-bold mb-6 text-gray-900 dark:text-gray-200">Get In Touch</h1>
        
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
          Feel free to contact us via phone or email!
        </p>

        <div className="mb-4">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-200">Phone</h2>
          <a href="tel:+16041111111" className="text-indigo-600 hover:text-indigo-800 dark:text-indigo-400 dark:hover:text-indigo-300">
            +1 (604) 111-1111
          </a>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-200">Email</h2>
          <a href="mailto:cheyennelingcounselling@gmail.com" className="text-indigo-600 hover:text-indigo-800 dark:text-indigo-400 dark:hover:text-indigo-300">
            cheyennelingcounselling@gmail.com
          </a>
        </div>
      </div>
    </div>
  );
};

export default function MainContent() {
  return (
      <main className="flex-grow">
        <div className="container mx-auto p-6">
          <Contact />
        </div>
      </main>
  );
}
