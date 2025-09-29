import React from 'react';
import { FiCheckCircle } from 'react-icons/fi';

const ServiceServiceInfo = () => {
  // iOS Safari hack to trigger :active styles
  const touchStart = () => {};

  return (
    <section className="container mx-auto px-6 sm:px-8 lg:px-12 py-16 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="grid md:grid-cols-2 gap-10">
        
        {/* What's Included Section */}
        <div
          role="button"
          tabIndex={0}
          onTouchStart={touchStart}
          className="
            bg-white dark:bg-gray-800 p-8 rounded-xl shadow-md
            border border-gray-200 dark:border-gray-700
            transition-all duration-300 cursor-pointer select-none
            hover:scale-105
            hover:shadow-[0_0_25px_#0d9488]
            active:shadow-[0_0_25px_#0d9488]
          "
        >
          <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
            What's Included
          </h2>
          <ul className="list-none space-y-3 text-gray-700 dark:text-gray-300">
            {[
              "Oil and filter change with quality parts",
              "Comprehensive multi-point inspection",
              "Fluid level checks and top-ups",
              "Battery and charging system test",
              "Tyre condition and pressure check",
              "Detailed service report with recommendations",
            ].map((item, idx) => (
              <li key={idx} className="flex items-center space-x-2">
                <FiCheckCircle className="h-6 w-6 text-teal-500 dark:text-teal-400" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Why Choose Our Service Section */}
        <div
          role="button"
          tabIndex={0}
          onTouchStart={touchStart}
          className="
            bg-white dark:bg-gray-800 p-8 rounded-xl shadow-md
            border border-gray-200 dark:border-gray-700
            transition-all duration-300 cursor-pointer select-none
            hover:scale-105
            hover:shadow-[0_0_25px_#0d9488]
            active:shadow-[0_0_25px_#0d9488]
          "
        >
          <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
            Why Choose Our Service
          </h2>
          <ul className="list-none space-y-3 text-gray-700 dark:text-gray-300">
            {[
              "Manufacturer-approved parts and fluids",
              "Experienced technicians",
              "Digital service records",
              "12-month service warranty",
              "Service reminder notifications",
              "Competitive pricing",
            ].map((item, idx) => (
              <li key={idx} className="flex items-center space-x-2">
                <FiCheckCircle className="h-6 w-6 text-orange-500 dark:text-orange-400" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ServiceServiceInfo;
