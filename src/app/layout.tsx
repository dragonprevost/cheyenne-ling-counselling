import type { Metadata } from "next";
import {Poppins} from "next/font/google";

import "./globals.css";

import Image from "next/image";
import logoImg from "../../public/logo-tree.png";

const poppins = Poppins({
  weight: "400",
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: "Cheyenne Ling Counselling",
  description:
    "Counselling with Cheyenne Ling"
};

const Header = () => {
  return (
    <header>
      <div className="container mx-auto flex items-center justify-between py-4 px-6 flex-wrap">
        {/* Logo Section */}
        <div className="flex items-center">
          <a href="/">
            <Image
              className="dark:invert"
              src={logoImg}
              alt="Company Logo"
              width={40}
              height={40}
            />
          </a>
          <span className="ml-3 text-xl font-semibold text-gray-900 dark:text-gray-100">
            Cheyenne Ling<br/>Counselling
          </span>
        </div>
        {/* Navigation */}
        <nav className="space-x-6 mt-4 md:mt-0 relative">
          <a
            href="/about"
            className="dark:text-gray-400 text-gray-700 hover:text-gray-900 dark:hover:text-gray-500"
          >
            About
          </a>
          <a
            href="/contact"
            className="dark:text-gray-400 text-gray-700 hover:text-gray-900 dark:hover:text-gray-500"
          >
            Contact
          </a>
          <a
            href="/faqs"
            className="dark:text-gray-400 text-gray-700 hover:text-gray-900 dark:hover:text-gray-500"
          >
            FAQs
          </a>
          <a
            href="/areas-of-focus"
            className="dark:text-gray-400 text-gray-700 hover:text-gray-900 dark:hover:text-gray-500"
          >
            Areas of focus
          </a>
          <a
            href="/offerings"
            className="dark:text-gray-400 text-gray-700 hover:text-gray-900 dark:hover:text-gray-500"
          >
            Offerings
          </a>
          <a
            href="/book"
            className="dark:text-gray-400 text-gray-700 hover:text-gray-900 dark:hover:text-gray-500"
          >
            Book now
          </a>
        </nav>
      </div>
    </header>
  );
};
const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4 text-center mt-auto">
      <p>&copy; 2024 Pemberton Landscaping. All rights reserved.</p>
    </footer>
  );
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} antialiased flex flex-col min-h-screen`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
