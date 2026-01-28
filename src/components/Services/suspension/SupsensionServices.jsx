import React from "react";
import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";

const services = [
  { title: "Wheel Alignment", price: "From £45", path: "/services/suspension" },
  { title: "Brake Service", price: "From £80", path: "/services/brake" },
  { title: "MOT Test", price: "From £40", path: "/services/mot" },
];

const SuspensionServices = () => {
  return (
    <section className="px-6 sm:px-10 lg:px-18 py-16 bg-white dark:bg-[#0A101D] transition-colors duration-300">
      <h2 className="text-3xl font-semibold text-center mb-12 text-gray-900 dark:text-white">
        Related Services
      </h2>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {services.map((service, idx) => (
          <div
            key={idx}
            className="bg-white dark:bg-[#111827] p-8 rounded-xl shadow-md
                       transition-all duration-300 cursor-pointer
                       hover:scale-105 hover:shadow-[0_0_25px_#0d9488]
                       active:shadow-[0_0_25px_#0d9488]"
          >
            <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">
              {service.title}
            </h3>
            <p className="text-orange-500 mb-6 font-medium">{service.price}</p>

            <Link
              to={service.path}
              className="group inline-block w-full text-center
                         bg-teal-500 text-white py-3 px-6 rounded-lg
                         hover:bg-orange-500 active:bg-orange-600
                         transition-colors duration-300"
            >
              <span className="flex items-center justify-center gap-2">
                Learn More
                <FiArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SuspensionServices;
