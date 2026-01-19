import React from 'react';
import { FiCheckCircle } from 'react-icons/fi';

const MechanicalServiceInfo = () => {
  // iOS Safari hack to trigger :active styles
  const touchStart = () => {};

  return (
    <section className="  px-6 sm:px-8 lg:px-18 py-16 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="grid md:grid-cols-2 gap-10">
        {/* What's Included Section */}
        <div
          role="button"
          tabIndex={0}
          onTouchStart={touchStart}
          className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-md 
                     transition-all duration-300 cursor-pointer select-none
                     hover:scale-105 md:hover:shadow-[0_0_25px_#0d9488]
                     active:shadow-[0_0_25px_#0d9488]"
        >
          <h2 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white transition-colors duration-300">
            What's Included
          </h2>
          <ul className="list-none space-y-4 text-gray-700 dark:text-gray-300 transition-colors duration-300">
            {[
              "Comprehensive diagnostic assessment",
              "Detailed repair estimate before work begins",
              "Quality replacement parts",
              "Thorough testing after repairs",
              "12-month warranty on parts and labor",
              "Clear explanation of work completed",
            ].map((item, i) => (
              <li key={i} className="flex items-center space-x-3">
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
          className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-md 
                     transition-all duration-300 cursor-pointer select-none
                     hover:scale-105 md:hover:shadow-[0_0_25px_#0d9488]
                     active:shadow-[0_0_25px_#0d9488]"
        >
          <h2 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white transition-colors duration-300">
            Why Choose Our Service
          </h2>
          <ul className="list-none space-y-4 text-gray-700 dark:text-gray-300 transition-colors duration-300">
            {[
              "All makes and models serviced",
              "Latest diagnostic equipment",
              "Experienced certified technicians",
              "Competitive repair pricing",
              "Quality parts guarantee",
              "No fix, no fee policy on diagnostics",
            ].map((item, i) => (
              <li key={i} className="flex items-center space-x-3">
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

export default MechanicalServiceInfo;
