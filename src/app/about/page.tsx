//import GridImageGallery from "@/components/GridImageGallery";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "Get to know Pemberton Landscaping.",
};

const MainContent = () => {
  return (
    <div className="container mx-auto p-6">
      <section id="about" className="py-10">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-200 mb-4">
          About Us
        </h2>
        <p className="text-gray-600 leading-relaxed dark:text-gray-200">
          Pemberton Landscaping was founded in 2021 by Dre Morel and later
          turned into a partnership with Dragon Prevost. Pemberton Landscaping
          has deep roots in the Whistler and Pemberton communities. Dre, with
          over 10 years of experience in the local landscaping industry, has
          developed a reputation for transforming outdoor spaces into beautiful,
          functional areas that stand the test of time. Dragon, with a
          background in software engineering and 4 years of landscaping
          experience, brings a fresh perspective to the operations of th team.
          <br />
          <br />
          Dre and Dragon have been working together since 2014, combining their
          experience and skills to deliver quality landscaping services in
          Whistler and Pemberton. Alongside them is Kotaro, a valued team member
          who has been contributing his hard work and expertise for the past
          three years. Whether it’s refreshing a garden, building custom patios,
          or completing complex hardscaping projects, the team at Pemberton
          Landscaping focuses on craftsmanship and ensuring every client’s
          vision becomes reality.{" "}
        </p>
      </section>
    </div>
  );
};

export default MainContent;
