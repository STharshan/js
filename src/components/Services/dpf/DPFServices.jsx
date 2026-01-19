import React from "react";
import { Link } from "react-router-dom";

const DPFServices = () => {
  const touchStart = () => {};

  const services = [
    {
      name: "Diagnostics",
      price: "From £45",
      path: "/services/diagnostics",
    },
    {
      name: "Engine Service",
      price: "From £180",
      path: "/services/mechanical-repairs",
    },
    {
      name: "MOT Test",
      price: "From £35",
      path: "/services/mot",
    },
  ];

  return (
    <section className="  px-6 sm:px-10 lg:px-18 py-16 bg-white dark:bg-[#0B1322] transition-colors duration-300">
      <h2 className="text-3xl font-semibold text-center mb-12 text-gray-900 dark:text-white">
        Related Services
      </h2>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {services.map((service, idx) => (
          <div
            key={idx}
            role="button"
            tabIndex={0}
            onTouchStart={touchStart}
            className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-md
                       transition-all duration-300 cursor-pointer select-none
                       hover:scale-105 hover:shadow-[0_0_25px_#0d9488]
                       active:shadow-[0_0_25px_#0d9488]"
          >
            <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">
              {service.name}
            </h3>
            <p className="text-orange-500 dark:text-orange-300 mb-6 font-medium">
              {service.price}
            </p>
            <Link
              to={service.path}
              className="inline-block w-full text-center 
                         bg-teal-500 text-white py-3 px-6 rounded-lg 
                         hover:bg-teal-600 active:bg-teal-700
                         transition-colors duration-300"
            >
              Learn More →
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DPFServices;
