import type { Metadata } from "next";

export const SITE_URL = "https://cheyennelingcounselling.com";
export const SITE_NAME = "Cheyenne Ling Counselling";
export const DEFAULT_OG_IMAGE = "/images/head-shot.jpg";

export const BUSINESS_PHONE = "+1-604-742-8383";
export const BUSINESS_PHONE_DISPLAY = "(604) 742-8383";
export const BUSINESS_EMAIL = "cheyenneling.psychotherapy@gmail.com";
export const BUSINESS_LOCALITY = "Kitsilano, Vancouver";
export const BUSINESS_REGION = "BC";
export const BUSINESS_COUNTRY = "CA";

interface PageMetadataInput {
  title: string;
  description: string;
  path: string;
  image?: string;
}

/**
 * Builds a full Metadata object (title, description, canonical, Open Graph,
 * Twitter card) for a single route so every page gets consistent social +
 * crawler metadata instead of relying on partial parent/child merging.
 */
interface BlogPostingJsonLdInput {
  title: string;
  description: string;
  path: string;
  image: string;
  datePublished: string;
}

/**
 * BlogPosting JSON-LD for a single article, authored by Cheyenne Ling
 * (@id matches the Person in StructuredData) so posts can surface as rich
 * results and reinforce topical authorship.
 */
export function blogPostingJsonLd({
  title,
  description,
  path,
  image,
  datePublished,
}: BlogPostingJsonLdInput) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: title,
    description,
    image: `${SITE_URL}${image}`,
    url: `${SITE_URL}${path}`,
    datePublished,
    author: {
      "@id": `${SITE_URL}/#cheyenne`,
    },
    publisher: {
      "@id": `${SITE_URL}/#business`,
    },
  };
}

export function pageMetadata({
  title,
  description,
  path,
  image = DEFAULT_OG_IMAGE,
}: PageMetadataInput): Metadata {
  const url = `${SITE_URL}${path}`;
  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE_NAME,
      images: [{ url: image }],
      locale: "en_CA",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}
