//import GridImageGallery from "@/components/GridImageGallery";
import StyledLink from "@/components/StyledLink";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Whistler Landscaping",
  description: "Landscaping services in Whistler, BC",
};

const MainContent = () => {
  return (
    <div className="container mx-auto p-6">
      {/* About Section */}
      <section id="about" className="py-10">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-200 mb-4">
          Landscaping in Whistler
        </h2>
        <p className="text-gray-600 leading-relaxed dark:text-gray-200">
          At Pemberton Landscaping, our name reflects one community, but our
          dedication spans the entire corridor. From Function Junction and
          Creekside to Whistler Village, Alpine Meadows, and Pemberton, we
          proudly serve properties of all sizes and types across this stunning
          region. No matter where your property is located, our team has the
          experience and expertise to meet your unique landscaping needs.
          Whether it’s maintaining lush gardens in Whistler’s temperate climate
          or designing functional outdoor spaces in Pemberton’s open landscapes,
          we’re here to bring your vision to life. With deep roots in both
          Whistler and Pemberton, we’ve always been committed to serving every
          community in between. Let us transform your outdoor space —{" "}
          <StyledLink href="/contact"> reach out today!</StyledLink>
        </p>
      </section>
    </div>
  );
};

export default MainContent;
