import React from "react";
import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";

const services = [
  {
    title: "MOT Test",
    price: "From £40",
    link: "/services/mot",
  },
  {
    title: "Suspension",
    price: "From £120",
    link: "/services/suspension",
  },
  {
    title: "Diagnostics",
    price: "From £45",
    link: "/services/diagnostics",
  },
];

const MotServices = () => {
  return (
    <div className="px-6 sm:px-8 lg:px-18 py-16 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <h2 className="text-3xl font-semibold text-center mb-8 text-gray-900 dark:text-gray-100">
        Related Services
      </h2>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="
              bg-white dark:bg-gray-800
              p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700
              transition-all duration-300
              hover:shadow-[0_0_25px_#00BFA5] hover:scale-105
            "
          >
            <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">
              {service.title}
            </h3>

            <p className="text-orange-500 dark:text-orange-400 mb-4">
              {service.price}
            </p>

            <Link
              to={service.link}
              className="
                group block bg-teal-500 text-white py-2 px-4 rounded-lg text-center
                hover:bg-teal-600 active:bg-teal-700
                transition-all duration-300
              "
            >
              <span className="flex items-center justify-center gap-2">
                Learn More
                <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MotServices;
