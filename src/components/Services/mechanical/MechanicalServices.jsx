import React from "react";
import { FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";

const MechanicalServices = () => {
  // iOS Safari hack to trigger :active styles
  const touchStart = () => { };

  const services = [
    { name: "Diagnostics", price: "From £45", path: "/services/diagnostics" },
    { name: "Engine Service", price: "From £180", path: "/services/mechanical-repairs" },
    { name: "Brake Repairs", price: "From £80", path: "/services/brake" },
  ];

  return (
    <section className="  px-6 sm:px-8 lg:px-12 py-16 bg-white dark:bg-gray-900 transition-colors duration-300">
      <h2 className="text-3xl font-semibold text-center mb-12 text-gray-900 dark:text-white transition-colors duration-300">
        Related Services
      </h2>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {services.map((service, idx) => (
          <div
            key={idx}
            role="button"
            tabIndex={0}
            onTouchStart={touchStart} // ensures :active fires on iOS
            className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-md
                       transition-all duration-300 cursor-pointer select-none
                       hover:scale-105
                       hover:shadow-[0_0_25px_#0d9488]
                       active:shadow-[0_0_25px_#0d9488]
                       focus-visible:ring-2 focus-visible:ring-teal-500"
          >
            <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white transition-colors duration-300">
              {service.name}
            </h3>
            <p className="text-orange-500 dark:text-orange-400 mb-6 font-medium transition-colors duration-300">
              {service.price}
            </p>
            <Link
              to={service.path}
              onTouchStart={touchStart}
              className="group inline-block w-full text-center
             bg-teal-500 text-white py-3 px-6 rounded-lg
             hover:bg-orange-500 active:bg-orange-600
             transition-colors duration-300"
            >
              <span className="flex items-center justify-center gap-2">
                Learn More
                <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </Link>

          </div>
        ))}
      </div>
    </section>
  );
};

export default MechanicalServices;
