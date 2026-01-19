import React from 'react';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const ComServices = () => {
  const services = [
    {
      id: 1,
      title: "Engine Service",
      price: "From £180",
      path: "/services/mechanical-repairs",
    },
    {
      id: 2,
      title: "Water Pump",
      price: "Quote on inspection",
      path: "/services/mechanical-repairs",
    },
    {
      id: 3,
      title: "Diagnostics",
      price: "From £45",
      path: "/services/diagnostics",
    },
  ];

  return (
    <section className="px-6 sm:px-10 lg:px-18 py-16 bg-white dark:bg-[#0B101B] transition-colors duration-300">
      <h2 className="text-3xl font-semibold text-center mb-12 text-gray-900 dark:text-white">
        Related Services
      </h2>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {services.map((service) => (
          <div
            key={service.id}
            className="bg-white dark:bg-[#0B1322] p-8 rounded-xl shadow-md
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
              className=" w-full text-center 
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

export default ComServices;
