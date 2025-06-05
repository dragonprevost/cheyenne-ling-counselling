import type { Metadata } from "next";

import "./globals.css";

import Header from "./header";

export const metadata: Metadata = {
  title: "Cheyenne Ling Counselling",
  description: "Counselling with Cheyenne Ling",
};

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4 text-center mt-auto">
      <p>&copy; 2025 Cheyenne Ling Counselling. All rights reserved.</p>
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
      <body className={`font-souvenir antialiased flex flex-col min-h-screen`}>
        <div className="flex flex-col min-h-screen">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
