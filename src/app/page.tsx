import GridImageGallery from "@/components/GridImageGallery";

import StyledLink from "@/components/StyledLink";
import Link from "next/link";

import cypressMaintenanceOne from "../../public/images/cypress_maintenance_square.jpeg";
import cypressMaintenanceTwo from "../../public/images/cypress_maintenance_two_square.jpeg";
import stoneSteps from "../../public/images/stone_steps_square.jpeg";

const MainContent = () => {
  return (
    <div className="container mx-auto p-6">
      {/* About Section */}
      <section id="about" className="py-10">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-200 mb-4">
          About Us
        </h2>
        <p className="text-gray-600 leading-relaxed dark:text-gray-200">
          We are a full-service landscaping company operating in{" "}
          <StyledLink href="/services/whistler">Whistler</StyledLink> and{" "}
          <StyledLink href="/services/pemberton">Pemberton</StyledLink>, BC. Our
          mission is to bring beautiful, functional outdoor spaces to life
          through professional landscape maintenance, custom installations, and
          hardscaping services. Whether you&#39;re looking to enhance your
          garden, build a patio, or create a new outdoor living area, we&#39;ve
          got you covered!
        </p>
      </section>

      <section id="images" className="py-10">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-200 mb-4">
          Our Work
        </h2>
        <GridImageGallery
          images={[
            {
              src: cypressMaintenanceOne.src,
              caption: "Cypress Place Maintenance",
            },
            {
              src: stoneSteps.src,
              caption: "Outdoor Staircase Hardscaping",
            },
            {
              src: cypressMaintenanceTwo.src,
              caption: "Cypress Place Maintenance",
            },
          ]}
        />
      </section>
      {/* Services Section */}
      <section id="services" className="py-10">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-200 mb-4">
          Our Services
        </h2>
        <p className="text-gray-600 dark:text-gray-300">
          At Pemberton Landscaping, our name reflects one community, but our
          dedication spans the entire corridor. From Function Junction and
          Creekside to Whistler Village, Alpine Meadows, and Pemberton, we
          proudly serve properties of all sizes and types across this stunning
          region. No matter where your property is located, our team has the
          experience and expertise to meet your unique landscaping needs.
          Whether it’s maintaining lush gardens in Whistler’s temperate climate
          or designing functional outdoor spaces in Pemberton’s open landscapes,
          we’re here to bring your vision to life.
        </p>
        <ul className="space-y-6 text-gray-600 dark:text-gray-300">
          <li>
            <Link href="services/maintenance">
              <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-300">
                Maintenance
              </h3>
            </Link>
            <p>
              Keep your outdoor spaces looking their best year-round with our
              professional landscaping maintenance services. We handle
              everything from lawn care to garden upkeep.
            </p>
          </li>
          <li>
            <Link href="services/patios">
              <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-300">
                Patios
              </h3>
            </Link>
            <p>
              Create a beautiful and functional outdoor living area with our
              custom patio design and installation services.
            </p>
          </li>
          <li>
            <Link href="services/hardscaping">
              <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-300">
                Installs
              </h3>
            </Link>
            <p>
              Our team provides expert installations of plants, turf, irrigation
              systems, and more to bring your outdoor vision to life.
            </p>
          </li>
          <li>
            <Link href="services/hardscaping">
              <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-300">
                Hardscaping and Construction
              </h3>
            </Link>
            <p>
              From retaining walls to walkways, our hardscaping services enhance
              the structure and functionality of your outdoor space.
            </p>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default function Home() {
  return (
    <div>
      <main className="flex-grow">
        <MainContent />
      </main>
    </div>
  );
}
