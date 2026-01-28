import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { Link } from "react-router-dom";

const BrakeServices = () => {
  const touchStart = () => { };

  const services = [
    { name: "MOT Test", price: "From £40", path: "/services/mot" },
    { name: "Suspension", price: "From £120", path: "/services/suspension" },
    { name: "Diagnostics", price: "From £45", path: "/services/diagnostics" },
  ];

  return (
    <section
      className=" px-6 sm:px-8 lg:px-18 py-16
                 bg-white dark:bg-[#0E1625] transition-colors duration-300"
    >
      {/* Heading */}
      <h2 className="text-3xl font-semibold text-center mb-12 
                     text-gray-900 dark:text-white transition-colors">
        Related Services
      </h2>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {services.map((service, idx) => (
          <div
            key={idx}
            role="button"
            tabIndex={0}
            onTouchStart={touchStart}
            className="
              p-8 rounded-xl shadow-md transition-all duration-300
              cursor-pointer select-none
              hover:scale-105 
              hover:shadow-[0_0_25px_#0d9488] 
              active:shadow-[0_0_25px_#0d9488]
              focus-visible:ring-2 focus-visible:ring-teal-500

              bg-white text-gray-900
              dark:bg-gray-800 dark:text-gray-100
            "
          >
            <h3 className="text-xl font-semibold mb-3">
              {service.name}
            </h3>
            <p className="text-orange-600 dark:text-orange-400 mb-6 font-medium">
              {service.price}
            </p>
            <Link
              to={service.path}
              className="w-full text-center 
             bg-teal-500 text-white py-3 px-6 rounded-lg 
             hover:bg-orange-500 dark:hover:bg-teal-400 transition-colors duration-300 flex items-center justify-center gap-2"
            >
              Learn More <AiOutlineArrowRight size={18} />
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BrakeServices;
