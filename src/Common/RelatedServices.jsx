import React from "react";
import { FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";

const RelatedServices = ({ services }) => {

  const touchStart = () => { };

  return (
    <section className="px-6 sm:px-8 lg:px-12 py-16 bg-white dark:bg-gray-900 transition-colors duration-300">
      <h2 className="text-3xl font-semibold text-center mb-12 text-gray-900 dark:text-white transition-colors duration-300">
        Related Services
      </h2>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {services.map((service, idx) => (
          <div
            key={idx}
            className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-md 
                       border border-gray-100 dark:border-gray-700
                       transition-all duration-300 select-none
                       hover:scale-105 
                       hover:shadow-[0_0_25px_#0d9488]"
          >
            <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">
              {service.name || service.title}
            </h3>
            <p className="text-orange-500 dark:text-orange-400 mb-6 font-medium">
              {service.price}
            </p>
            <Link
              to={service.path || service.link}
              onTouchStart={touchStart}
              className="group inline-block w-full text-center
                         bg-teal-500 text-white py-3 px-6 rounded-lg 
                         hover:bg-orange-500 transition-colors duration-300"
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

export default RelatedServices;