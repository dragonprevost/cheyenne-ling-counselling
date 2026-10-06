import {
  BUSINESS_EMAIL,
  BUSINESS_PHONE,
  BUSINESS_REGION,
  SITE_NAME,
  SITE_URL,
} from "@/lib/seo";

/**
 * Site-wide JSON-LD: a LocalBusiness/ProfessionalService entity for local
 * ("counselling in Kitsilano/Vancouver") search, plus the Person who runs it
 * so credentials can surface in rich results. Rendered once in the root
 * layout so it's present on every page.
 */
export default function StructuredData() {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["LocalBusiness", "ProfessionalService"],
        "@id": `${SITE_URL}/#business`,
        name: SITE_NAME,
        url: SITE_URL,
        image: `${SITE_URL}/images/head-shot.jpg`,
        telephone: BUSINESS_PHONE,
        email: BUSINESS_EMAIL,
        priceRange: "$140-$224",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Vancouver",
          addressRegion: BUSINESS_REGION,
          addressCountry: "CA",
        },
        areaServed: [
          {
            "@type": "Neighborhood",
            name: "Kitsilano",
          },
          {
            "@type": "City",
            name: "Vancouver",
          },
          {
            "@type": "AdministrativeArea",
            name: "British Columbia",
          },
        ],
        medicalSpecialty: "Psychotherapy",
        founder: {
          "@id": `${SITE_URL}/#cheyenne`,
        },
        sameAs: [],
      },
      {
        "@type": "Person",
        "@id": `${SITE_URL}/#cheyenne`,
        name: "Cheyenne Ling",
        jobTitle: "Registered Clinical Counsellor (RCC)",
        worksFor: {
          "@id": `${SITE_URL}/#business`,
        },
        image: `${SITE_URL}/images/head-shot.jpg`,
        url: `${SITE_URL}/about`,
        knowsAbout: [
          "Emotionally Focused Individual Therapy (EFIT)",
          "Attachment theory",
          "Trauma-informed counselling",
          "Internal Family Systems (IFS)",
        ],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
