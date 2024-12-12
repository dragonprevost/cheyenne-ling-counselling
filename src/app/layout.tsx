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
  title: "Pemberton Landscaping",
  description:
    "Landscaping construction, installations, and maintenance in the sea to sky corridor.",
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
            PEMBERTON<br/>LANDSCAPING
          </span>
        </div>
        {/* Navigation */}
        <nav className="space-x-6 mt-4 md:mt-0 relative">
          <a
            href="/"
            className="dark:text-gray-400 text-gray-700 hover:text-gray-900 dark:hover:text-gray-500"
          >
            Home
          </a>
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
          {/* Services Dropdown */}
          <div className="relative group inline-block">
            <button className="dark:text-gray-400 text-gray-700 dark:hover:text-gray-500 hover:text-gray-900 focus:outline-none">
              Services
              <svg
                className="inline-block ml-1 w-4 h-4"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            <div className="absolute right-0 hidden group-hover:block bg-white dark:bg-black shadow-lg rounded-lg py-2 mt-0 z-10">
              <a
                href="/services/maintenance"
                className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                Maintenance
              </a>
              <a
                href="/services/patios"
                className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                Patios
              </a>
              <a
                href="/services/hardscaping"
                className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                Hardscaping
              </a>
            </div>
          </div>
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
