import React from "react";
import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";

const services = [
  {
    title: "Mechanical Repairs",
    price: "Quote on inspection",
    path: "/services/mechanical-repairs",
  },
  {
    title: "Engine Service",
    price: "From £180",
    path: "/services/mechanical-repairs",
  },
  {
    title: "Electrical Repairs",
    price: "Quote on inspection",
    path: "/services/diagnostics",
  },
];

const DiagnosticsServices = () => {
  return (
    <section className="px-6 sm:px-10 lg:px-18 py-16 bg-white dark:bg-[#0B1120] transition-colors duration-300">
      <h2 className="text-3xl font-semibold text-center mb-12 text-gray-900 dark:text-white">
        Related Services
      </h2>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white dark:bg-[#1E293B] p-8 rounded-xl shadow-md
                       transition-all duration-300 cursor-pointer
                       hover:scale-105 hover:shadow-[0_0_25px_#0d9488]
                       active:shadow-[0_0_25px_#0d9488]"
          >
            <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">
              {service.title}
            </h3>

            <p className="text-orange-500 mb-6 font-medium">
              {service.price}
            </p>

            <Link
              to={service.path}
              className="group inline-block w-full text-center
                         bg-teal-500 text-white py-3 px-6 rounded-lg
                         hover:bg-teal-600 active:bg-teal-700
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

export default DiagnosticsServices;
