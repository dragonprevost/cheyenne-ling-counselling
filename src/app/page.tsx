import GridImageGallery from "@/components/GridImageGallery";

const MainContent = () => {
  return (
    <div className="container mx-auto p-6">
      {/* About Section */}
      <section id="about" className="py-10">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-200 mb-4">
          About Us
        </h2>
        <p className="text-gray-600 leading-relaxed dark:text-gray-200">
          We are a full-service landscaping company operating in Whistler and
          Pemberton, BC. Our mission is to bring beautiful, functional outdoor
          spaces to life through professional landscape maintenance, custom
          installations, and hardscaping services. Whether you're looking to
          enhance your garden, build a patio, or create a new outdoor living
          area, we've got you covered!
        </p>
      </section>

      {/* Images Section 
      <section id="images" className="py-10">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-200 mb-4">
          Our Work
        </h2>
        <GridImageGallery
          images={[
            {
              src: "https://cdn.prod.website-files.com/65c10bb4b9d29f7d663d57f4/65ce0d7a0370299504f03c45_Placeholder%20Image-7-min.jpg",
              caption: "Test",
            },
            {
              src: "https://cdn.prod.website-files.com/65c10bb4b9d29f7d663d57f4/65cbdb7a769e20bf862bd00d_Placeholder%20Image-min.jpg",
              caption: "Test",
            },
            {
              src: "https://cdn.prod.website-files.com/65c10bb4b9d29f7d663d57f4/65cbdbc543d10d0f1dccf7c5_Placeholder%20Image-3-min.jpg",
              caption: "Test",
            },
          ]}
        />
      </section>
      */}
      {/* Services Section */}
      <section id="services" className="py-10">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-200 mb-4">
          Our Services
        </h2>
        <ul className="space-y-6 text-gray-600 dark:text-gray-300">
          <li>
            <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-300">
              Maintenance
            </h3>
            <p>
              Keep your outdoor spaces looking their best year-round with our
              professional landscaping maintenance services. We handle
              everything from lawn care to garden upkeep.
            </p>
          </li>
          <li>
            <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-300">
              Patios
            </h3>
            <p>
              Create a beautiful and functional outdoor living area with our
              custom patio design and installation services.
            </p>
          </li>
          <li>
            <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-300">
              Installs
            </h3>
            <p>
              Our team provides expert installations of plants, turf, irrigation
              systems, and more to bring your outdoor vision to life.
            </p>
          </li>
          <li>
            <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-300">
              Hardscaping & Construction
            </h3>
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
