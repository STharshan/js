import React from "react";
import { Link } from "react-router-dom";

const ServiceServices = () => {
  // iOS Safari hack to trigger :active styles
  const touchStart = () => {};

  const services = [
    {
      name: "MOT Test",
      price: "From £35",
      path: "/services/mot",
    },
    {
      name: "Diagnostics",
      price: "From £45",
      path: "/services/diagnostics",
    },
    {
      name: "Brake Service",
      price: "From £80",
      path: "/services/brake",
    },
  ];

  return (
    <section className="container mx-auto px-6 sm:px-8 lg:px-12 py-16">
      <h2 className="text-3xl font-semibold text-center mb-12 text-gray-900">
        Related Services
      </h2>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {services.map((service, index) => (
          <div
            key={index}
            role="button"
            tabIndex={0}
            onTouchStart={touchStart}
            className="bg-white p-8 rounded-xl shadow-md
                       transition-all duration-300 cursor-pointer select-none
                       hover:scale-105 
                       hover:shadow-[0_0_25px_#0d9488] 
                       active:shadow-[0_0_25px_#0d9488] 
                       focus-visible:ring-2 focus-visible:ring-teal-500"
          >
            <h3 className="text-xl font-semibold mb-3 text-gray-800">
              {service.name}
            </h3>
            <p className="text-orange-500 mb-6 font-medium">{service.price}</p>
            <Link
              to={service.path}
              className="inline-block w-full text-center 
                         bg-teal-500 text-white py-3 px-6 rounded-lg 
                         hover:bg-orange-500 transition-colors duration-300"
            >
              Learn More →
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServiceServices;
