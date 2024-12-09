//import GridImageGallery from "@/components/GridImageGallery";
import StyledLink from "@/components/StyledLink";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pemberton Landscaping",
  description: "Landscaping services in Pemberton, BC",
};

const MainContent = () => {
  return (
    <div className="container mx-auto p-6">
      {/* About Section */}
      <section id="about" className="py-10">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-200 mb-4">
          Landscaping in Pemberton
        </h2>
        <p className="text-gray-600 leading-relaxed dark:text-gray-200">
          At Pemberton Landscaping, we proudly serve the greater Pemberton area,
          including the stunning Pemberton Valley. Whether your property is
          nestled in the heart of Pemberton or sprawls across the valley’s
          scenic landscapes, our team is here to provide top-quality landscaping
          services tailored to your unique needs. With our deep roots in the
          region, we understand the local environment and take pride in
          enhancing the beauty of properties throughout the Pemberton area. Let
          us bring your outdoor vision to life—no matter where in the valley you
          call home! <StyledLink href="/contact">Reach out today!</StyledLink>
        </p>
      </section>
    </div>
  );
};

export default MainContent;
