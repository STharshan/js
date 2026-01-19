import React from 'react';
import { FiCheckCircle } from 'react-icons/fi';

const BrakeServiceInfo = () => {
  const touchStart = () => {};

  return (
    <section
      className=" px-6 sm:px-8 lg:px-18 py-16
                 bg-white dark:bg-[#0E1625] transition-colors duration-300"
    >
      <div className="grid md:grid-cols-2 gap-10">
        {/* What's Included Section */}
        <div
          role="button"
          tabIndex={0}
          onTouchStart={touchStart}
          className="p-8 rounded-xl shadow-md transition-all duration-300
                     cursor-pointer select-none
                     hover:scale-105 
                     hover:shadow-[0_0_25px_#0d9488] 
                     active:shadow-[0_0_25px_#0d9488]
                     bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
        >
          <h2 className="text-2xl font-semibold mb-6">What's Included</h2>
          <ul className="list-none space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed">
            {[
              "Comprehensive brake system inspection",
              "Quality brake pads or discs fitted",
              "Brake fluid level check and top-up",
              "Brake performance road test",
              "12-month warranty on parts and labor",
              "Safety certificate upon completion",
            ].map((item, i) => (
              <li key={i} className="flex items-center space-x-3">
                <FiCheckCircle className="h-6 w-6 text-teal-500 dark:text-teal-400 flex-shrink-0" />
                <span className="text-base">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Why Choose Our Service Section */}
        <div
          role="button"
          tabIndex={0}
          onTouchStart={touchStart}
          className="p-8 rounded-xl shadow-md transition-all duration-300
                     cursor-pointer select-none
                     hover:scale-105 
                     hover:shadow-[0_0_25px_#0d9488]
                     active:shadow-[0_0_25px_#0d9488]
                     bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
        >
          <h2 className="text-2xl font-semibold mb-6">Why Choose Our Service</h2>
          <ul className="list-none space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed">
            {[
              "Premium quality brake components",
              "Expert brake technicians",
              "Same-day service available",
              "Competitive pricing",
              "All makes and models",
              "Emergency brake repairs",
            ].map((item, i) => (
              <li key={i} className="flex items-center space-x-3">
                <FiCheckCircle className="h-6 w-6 text-orange-500 dark:text-orange-400 flex-shrink-0" />
                <span className="text-base">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default BrakeServiceInfo;
