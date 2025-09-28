import React from 'react';
import { Link } from 'react-router-dom';

const ComServices = () => {
  return (
    <section className="container mx-auto px-6 sm:px-10 lg:px-18 py-16 bg-white dark:bg-[#0B101B] transition-colors duration-300">
      <h2 className="text-3xl font-semibold text-center mb-12 text-gray-900 dark:text-white">
        Related Services
      </h2>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {/* Engine Service */}
        <div
          className="bg-white dark:bg-[#0B1322] p-8 rounded-xl shadow-md
                     transition-all duration-300 cursor-pointer
                     hover:scale-105 hover:shadow-[0_0_25px_#0d9488]
                     active:shadow-[0_0_25px_#0d9488]"
        >
          <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">
            Engine Service
          </h3>
          <p className="text-orange-500 mb-6 font-medium">From £180</p>
          <Link
            to="/services/mechanical-repairs"
            className="inline-block w-full text-center
                       bg-teal-500 text-white py-3 px-6 rounded-lg
                       hover:bg-teal-600 active:bg-teal-700
                       transition-colors duration-300"
          >
            Learn More →
          </Link>
        </div>

        {/* Water Pump */}
        <div
          className="bg-white dark:bg-[#0B1322] p-8 rounded-xl shadow-md
                     transition-all duration-300 cursor-pointer
                     hover:scale-105 hover:shadow-[0_0_25px_#0d9488]
                     active:shadow-[0_0_25px_#0d9488]"
        >
          <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">
            Water Pump
          </h3>
          <p className="text-orange-500 mb-6 font-medium">Quote on inspection</p>
          <Link
            to="/services/mechanical-repairs"
            className="inline-block w-full text-center
                       bg-teal-500 text-white py-3 px-6 rounded-lg
                       hover:bg-teal-600 active:bg-teal-700
                       transition-colors duration-300"
          >
            Learn More →
          </Link>
        </div>

        {/* Diagnostics */}
        <div
          className="bg-white dark:bg-[#0B1322] p-8 rounded-xl shadow-md
                     transition-all duration-300 cursor-pointer
                     hover:scale-105 hover:shadow-[0_0_25px_#0d9488]
                     active:shadow-[0_0_25px_#0d9488]"
        >
          <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">
            Diagnostics
          </h3>
          <p className="text-orange-500 mb-6 font-medium">From £45</p>
          <Link
            to="/services/diagnostics"
            className="inline-block w-full text-center
                       bg-teal-500 text-white py-3 px-6 rounded-lg
                       hover:bg-teal-600 active:bg-teal-700
                       transition-colors duration-300"
          >
            Learn More →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ComServices;
