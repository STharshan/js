import React from 'react';
import { FiCheckCircle } from 'react-icons/fi';

const SupsensionServiceInfo = () => {
  return (
    <section className="container mx-auto px-6 sm:px-10 lg:px-18 py-16 bg-white dark:bg-[#0A101D] transition-colors duration-300">
      <div className="grid md:grid-cols-2 gap-10">
        
        {/* What's Included Section */}
        <div
          className="bg-white dark:bg-[#111827] p-8 rounded-xl shadow-md
                     transition-all duration-300 cursor-pointer
                     hover:scale-105 hover:shadow-[0_0_25px_#0d9488]
                     active:shadow-[0_0_25px_#0d9488]"
        >
          <h2 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">
            What's Included
          </h2>
          <ul className="list-none space-y-4">
            {[
              'Comprehensive suspension inspection',
              'Quality replacement components',
              'Suspension geometry check',
              'Road test and handling assessment',
              '12-month warranty on parts and labor',
              'Wheel alignment check included',
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-3">
                <FiCheckCircle className="h-6 w-6 text-teal-500 dark:text-teal-400 flex-shrink-0" />
                <span className="text-gray-700 dark:text-gray-300">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Why Choose Our Service Section */}
        <div
          className="bg-white dark:bg-[#111827] p-8 rounded-xl shadow-md
                     transition-all duration-300 cursor-pointer
                     hover:scale-105 hover:shadow-[0_0_25px_#0d9488]
                     active:shadow-[0_0_25px_#0d9488]"
        >
          <h2 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">
            Why Choose Our Service
          </h2>
          <ul className="list-none space-y-4">
            {[
              'All suspension types serviced',
              'Quality branded components',
              'Expert suspension technicians',
              'Competitive pricing',
              'Same-day service available',
              'Performance upgrade options',
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-3">
                <FiCheckCircle className="h-6 w-6 text-orange-500 dark:text-orange-400 flex-shrink-0" />
                <span className="text-gray-700 dark:text-gray-300">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default SupsensionServiceInfo;
