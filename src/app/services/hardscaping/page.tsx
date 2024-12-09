import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hardscaping & Construction",
  //description: '',
};

const MainContent = () => {
  return (
    <div className="container mx-auto p-6">
      {/* About Section */}
      <section id="about" className="py-10">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-200 mb-4">
          Hardscaping & Construction
        </h2>
        <p className="text-gray-600 leading-relaxed dark:text-gray-200">
          Our hardscaping services bring structure and elegance to your outdoor
          spaces, blending form and function seamlessly. Whether it’s a small
          backyard feature or a large-scale project, we offer expert
          craftsmanship and innovative designs. Services include:
        </p>
        <ul className="list-disc pl-6 space-y-3 text-gray-600 dark:text-gray-200 p-4">
          <li>
            <span className="font-semibold">Retaining walls:</span> Built to
            manage slopes, prevent erosion, and add visual appeal.
          </li>
          <li>
            <span className="font-semibold">Pathways and walkways:</span>{" "}
            Carefully designed for both utility and style, using durable
            materials.
          </li>
          <li>
            <span className="font-semibold">
              Outdoor kitchens and fire pits:
            </span>{" "}
            Turn your backyard into the ultimate entertaining space with
            functional, beautifully designed installations.
          </li>
          <li>
            <span className="font-semibold">
              Rock features and custom hardscapes:
            </span>{" "}
            Unique creations that harmonize with BC’s natural beauty.{" "}
          </li>
        </ul>
        <p className="text-gray-600 leading-relaxed dark:text-gray-200">
          With a focus on quality and durability, our hardscaping projects are
          built to last, even in the rugged environments of Whistler and
          Pemberton.
        </p>
      </section>
    </div>
  );
};

export default MainContent;
