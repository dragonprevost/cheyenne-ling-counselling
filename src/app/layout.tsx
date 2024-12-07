import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

import Image from "next/image";
import logoImg from "../../public/logo-tree.png";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Pemberton Landscaping",
  description: "Landscaping construction, installations, and maintenance in the sea to sky corridor.",
};

const Header = () => {
  return (
    <header>
      <div className="container mx-auto flex items-center justify-between py-4 px-6 flex-wrap">
        {/* Logo Section */}
        <div className="flex items-center">
          <Image className="dark:invert" src={logoImg} alt="Company Logo" width={50} height={50} />
          <span className="ml-3 text-xl font-semibold text-gray-900 dark:text-gray-300">
            Pemberton Landscaping
          </span>
        </div>
        {/* Navigation */}
        <nav className="space-x-6 mt-4 md:mt-0">
          <a href="/" className="dark:text-gray-400 text-gray-700 hover:text-gray-900">
            Home
          </a>
          <a href="/about" className="dark:text-gray-400 text-gray-700 hover:text-gray-900">
            About
          </a>
          <a href="/contact" className="dark:text-gray-400 text-gray-700 hover:text-gray-900">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
};
const Footer = () => {
  return (
      <footer className="bg-gray-800 text-white py-4 text-center mt-auto">
        <p>9101 Riverside Drive, Whistler BC</p>
        <p>&copy; 2024 Pemberton Landscaping. All rights reserved.</p>
      </footer>
  );
}
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
