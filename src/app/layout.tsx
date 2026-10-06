import type { Metadata } from "next";

import "./globals.css";

import Header from "./header";
import StructuredData from "@/components/StructuredData";
import {
  BUSINESS_EMAIL,
  BUSINESS_LOCALITY,
  BUSINESS_PHONE_DISPLAY,
  DEFAULT_OG_IMAGE,
  SITE_NAME,
  SITE_URL,
} from "@/lib/seo";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} | Registered Clinical Counsellor in Kitsilano, Vancouver`,
    template: `%s | ${SITE_NAME}`,
  },
  description:
    "Emotionally Focused Individual Therapy (EFIT) and trauma-informed counselling with Cheyenne Ling, RCC, in Kitsilano, Vancouver and online across BC.",
  openGraph: {
    siteName: SITE_NAME,
    locale: "en_CA",
    type: "website",
    images: [{ url: DEFAULT_OG_IMAGE }],
  },
  twitter: {
    card: "summary_large_image",
    images: [DEFAULT_OG_IMAGE],
  },
};

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 text-center mt-auto">
      <p className="font-semibold">{SITE_NAME}</p>
      <p className="text-sm mt-1">
        Registered Clinical Counsellor (RCC) serving {BUSINESS_LOCALITY}, BC
        and online across British Columbia
      </p>
      <p className="text-sm mt-1">
        <a href="tel:+16047428383" className="hover:underline">
          {BUSINESS_PHONE_DISPLAY}
        </a>
        {" · "}
        <a href={`mailto:${BUSINESS_EMAIL}`} className="hover:underline">
          {BUSINESS_EMAIL}
        </a>
      </p>
      <p className="text-sm mt-4">
        &copy; {new Date().getFullYear()} {SITE_NAME}. All rights reserved.
      </p>
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
        <StructuredData />
        <div className="flex flex-col min-h-screen">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
