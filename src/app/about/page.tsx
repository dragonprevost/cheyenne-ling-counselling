//import GridImageGallery from "@/components/GridImageGallery";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: 'Get to know Pemberton Landscaping.',
};

const MainContent = () => {
  return (
    <div className="container mx-auto p-6">
      {/* About Section */}
      <section id="about" className="py-10">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-200 mb-4">
          About Us
        </h2>
        <p className="text-gray-600 leading-relaxed dark:text-gray-200">
          Pemberton Landscaping was founded in 2021 by Dre Morel and later
          turned into a partnership with Dragon Prevost. Pemberton Landscaping
          has deep roots in the Whistler and Pemberton communities. Dre, with
          over 12 years of experience in the local landscaping industry, has
          developed a reputation for transforming outdoor spaces into beautiful,
          functional areas that stand the test of time. His experience includes
          managing the maintenance team at{" "}
          <a href="https://highcountrylandscaping.ca/">
            High Country Landscaping
          </a>
          , where he honed his leadership and project management skills. Dragon,
          with 4 years of experience, brings a fresh perspective and energy to
          the team.
          <br />
          <br />
          Dre and Dragon first crossed paths in 2014, and from the moment they
          collaborated, it was clear they made an unbeatable team. Their keen
          work ethic, attention to detail, and shared passion for landscaping
          have helped them bring countless visions to life for clients across
          Whistler and Pemberton. They are also joined by Kotaro, a dedicated
          team member with an incredible work ethic, who has been working
          alongside Dre and Dragon for the past 3 years. Together, they create
          stunning outdoor spaces, whether it’s a simple garden refresh, custom
          patios, or intricate hardscaping projects. At Pemberton Landscaping,
          we take pride in every project, big or small, and are committed to
          delivering exceptional results for every client.
        </p>
      </section>
    </div>
  );
};

export default MainContent;
