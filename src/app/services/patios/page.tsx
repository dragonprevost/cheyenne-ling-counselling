import type { Metadata } from "next";

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
            <span className="font-semibold">Patios:</span> From natural stone to
            pavers, we create functional and inviting spaces perfect for
            entertaining or relaxing outdoors.
          </li>
          <li>
            <span className="font-semibold">Garden bed maintenance:</span>{" "}
            Durable and aesthetically pleasing, our driveways are designed to
            withstand BC’s climate while boosting curb appeal.
          </li>
          <li>
            <span className="font-semibold">Materials:</span> We specialize in
            high-quality materials such as flagstone, concrete, interlocking
            pavers, and gravel for a unique, long-lasting finish.
          </li>
          <li>
            <span className="font-semibold">Seasonal cleanups:</span> Removal of
            debris, leaves, and dead plants to prepare your yard for the
            changing seasons.
          </li>
        </ul>
        <p className="text-gray-600 leading-relaxed dark:text-gray-200">
          Let us transform your outdoor spaces into practical, beautiful areas
          you’ll love for years to come.
        </p>
      </section>
    </div>
  );
};

export default MainContent;
