import GridImageGallery from "@/components/GridImageGallery";

import type { Metadata } from "next";

import cypressMaintenanceOne from "/public/images/cypress_maintenance_square.jpeg";
import cypressMaintenanceTwo from "/public/images/cypress_maintenance_two_square.jpeg";
import kyahMaintenance from "/public/images/kyah_turf_square.jpeg";

export const metadata: Metadata = {
  title: "Maintenance",
  //description: '',
};

const MainContent = () => {
  return (
    <div className="container mx-auto p-6">
      {/* About Section */}
      <section id="about" className="py-10">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-200 mb-4">
          Maintenance
        </h2>
        <p className="text-gray-600 leading-relaxed dark:text-gray-200">
          Our landscaping maintenance services are designed to keep your outdoor
          spaces vibrant, healthy, and beautiful throughout the year. Whether
          it&#39;s spring cleanups, summer lawn care, or fall leaf removal, our
          skilled team provides meticulous attention to detail for every task.
          Services include:
        </p>
        <ul className="list-disc pl-6 space-y-3 text-gray-600 dark:text-gray-200 p-4">
          <li>
            <span className="font-semibold">Lawn care:</span> Mowing, aeration,
            fertilization, and weed control.
          </li>
          <li>
            <span className="font-semibold">Garden bed maintenance:</span>{" "}
            Weeding, pruning, top-dressing, planting, and mulching to keep
            flower beds in pristine condition.
          </li>
          <li>
            <span className="font-semibold">Hedge and shrub trimming:</span>{" "}
            Shaping and maintaining plants for optimal health and aesthetics.
          </li>
          <li>
            <span className="font-semibold">Seasonal cleanups:</span> Removal of
            debris, leaves, and dead plants to prepare your yard for the
            changing seasons.
          </li>
        </ul>

        <section id="images" className="py-10">
          <GridImageGallery
            images={[
              {
                src: cypressMaintenanceOne.src,
                caption: "Cypress Place",
              },
              {
                src: kyahMaintenance.src,
                caption: "Tapleys",
              },
              {
                src: cypressMaintenanceTwo.src,
                caption: "Cypress Place",
              },
            ]}
          />
        </section>
        <p className="text-gray-600 leading-relaxed dark:text-gray-200">
          Our maintenance team proudly serves the communities of Whistler,
          Pemberton, and surrounding areas, ensuring your property reflects the
          natural beauty of British Columbia.
        </p>
      </section>
    </div>
  );
};

export default MainContent;
