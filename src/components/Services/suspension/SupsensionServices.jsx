import React from "react";
import { Link } from "react-router-dom";

const SupsensionServices = () => {
  return (
    <section className="  px-6 sm:px-10 lg:px-18 py-16 bg-white dark:bg-[#0A101D] transition-colors duration-300">
      <h2 className="text-3xl font-semibold text-center mb-12 text-gray-900 dark:text-white">
        Related Services
      </h2>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {/* Wheel Alignment */}
        <div
          className="bg-white dark:bg-[#111827] p-8 rounded-xl shadow-md
                     transition-all duration-300 cursor-pointer
                     hover:scale-105 hover:shadow-[0_0_25px_#0d9488]
                     active:shadow-[0_0_25px_#0d9488]"
        >
          <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">
            Wheel Alignment
          </h3>
          <p className="text-orange-500 mb-6 font-medium">From £45</p>
          <Link
            to="/services/suspension"
            className="inline-block w-full text-center 
                       bg-teal-500 text-white py-3 px-6 rounded-lg 
                       hover:bg-orange-500 active:bg-orange-600 
                       transition-colors duration-300"
          >
            Learn More →
          </Link>
        </div>

        {/* Brake Service */}
        <div
          className="bg-white dark:bg-[#111827] p-8 rounded-xl shadow-md
                     transition-all duration-300 cursor-pointer
                     hover:scale-105 hover:shadow-[0_0_25px_#0d9488]
                     active:shadow-[0_0_25px_#0d9488]"
        >
          <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">
            Brake Service
          </h3>
          <p className="text-orange-500 mb-6 font-medium">From £80</p>
          <Link
            to="/services/brake"
            className="inline-block w-full text-center 
                       bg-teal-500 text-white py-3 px-6 rounded-lg 
                       hover:bg-orange-500 active:bg-orange-600 
                       transition-colors duration-300"
          >
            Learn More →
          </Link>
        </div>

        {/* MOT Test */}
        <div
          className="bg-white dark:bg-[#111827] p-8 rounded-xl shadow-md
                     transition-all duration-300 cursor-pointer
                     hover:scale-105 hover:shadow-[0_0_25px_#0d9488]
                     active:shadow-[0_0_25px_#0d9488]"
        >
          <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">
            MOT Test
          </h3>
          <p className="text-orange-500 mb-6 font-medium">From £35</p>
          <Link
            to="/services/mot"
            className="inline-block w-full text-center 
                       bg-teal-500 text-white py-3 px-6 rounded-lg 
                       hover:bg-orange-500 active:bg-orange-600 
                       transition-colors duration-300"
          >
            Learn More →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SupsensionServices;
