import type { Metadata } from "next";
import GridImageGallery from "@/components/GridImageGallery";

import rainbowPatio from "/public/images/rainbow_patio_square.jpeg";
import saunaPatio from "/public/images/sauna_patio_square.jpeg";

export const metadata: Metadata = {
  title: "Patios and Driveway Installation",
  //description: '',
};

const MainContent = () => {
  return (
    <div className="container mx-auto p-6">
      {/* About Section */}
      <section id="about" className="py-10">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-200 mb-4">
          Patio and Driveway Installation
        </h2>
        <p className="text-gray-600 leading-relaxed dark:text-gray-200">
          Enhance your property with professionally installed patios and
          driveways that blend durability with stunning design. We work closely
          with you to craft custom solutions tailored to your vision and
          lifestyle.
        </p>
        <ul className="list-disc pl-6 space-y-3 text-gray-600 dark:text-gray-200 p-4">
          <li>
            <span className="font-semibold">Patios:</span> Transform your
            outdoor living area with custom patios made from high-quality
            materials like natural stone, concrete pavers, and flagstone.
            Whether you’re creating a space for relaxing, dining, or
            entertaining, we design patios that seamlessly integrate with your
            home and yard.
          </li>
          <li>
            <span className="font-semibold">Driveways:</span> Boost your curb
            appeal with driveways that are both practical and visually striking.
            Using durable materials such as interlocking pavers, exposed
            aggregate concrete, and gravel, we ensure your driveway stands up to
            BC’s climate while enhancing your property’s value.
          </li>
          <li>
            <span className="font-semibold">Materials:</span> We specialize in
            premium materials, including flagstone, stamped concrete,
            interlocking pavers, and natural gravel, for a finish that’s built
            to last and suits your style.
          </li>
          <li>
            <span className="font-semibold">Custom Design:</span> Every project
            is unique. We work closely with you to bring your vision to life,
            considering your preferences, lifestyle, and the specific conditions
            of your property.
          </li>
        </ul>
        <section id="images" className="py-10">
          <GridImageGallery
            images={[
              {
                src: rainbowPatio.src,
                caption: "Covered Patios",
              },
              {
                src: saunaPatio.src,
                caption: "Outdoor Patios",
              },
            ]}
          />
        </section>
        <p className="text-gray-600 leading-relaxed dark:text-gray-200">
          Let us transform your outdoor spaces into practical, beautiful areas
          you’ll love for years to come.
        </p>
      </section>
    </div>
  );
};

export default MainContent;
