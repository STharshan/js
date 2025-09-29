import React from 'react';
import { FiCheckCircle } from 'react-icons/fi';

const ComServiceInfo = () => {
  return (
    <section className="container mx-auto px-6 sm:px-10 lg:px-18 py-16 bg-white dark:bg-[#0B101B] transition-colors duration-300">
      <div className="grid md:grid-cols-2 gap-10">
        
        {/* What's Included Section */}
        <div
          className="bg-white dark:bg-[#0B1322] p-8 rounded-xl shadow-md
                     transition-all duration-300
                     hover:scale-105 hover:shadow-[0_0_25px_#0d9488]
                     active:shadow-[0_0_25px_#0d9488]"
        >
          <h2 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-white">
            What's Included
          </h2>
          <ul className="list-none space-y-4">
            {[
              'Complete timing belt kit replacement',
              'Tensioner and idler pulley replacement',
              'Water pump replacement (if belt-driven)',
              'Precision engine timing setup',
              'Auxiliary belt inspection and replacement',
              '12-month warranty on parts and labor',
            ].map((item, idx) => (
              <li key={idx} className="flex items-center gap-3">
                <FiCheckCircle className="h-6 w-6 text-teal-500 dark:text-teal-400 flex-shrink-0" />
                <span className="text-gray-700 dark:text-gray-200">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Why Choose Our Service Section */}
        <div
          className="bg-white dark:bg-[#0B1322] p-8 rounded-xl shadow-md
                     transition-all duration-300
                     hover:scale-105 hover:shadow-[0_0_25px_#0d9488]
                     active:shadow-[0_0_25px_#0d9488]"
        >
          <h2 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-white">
            Why Choose Our Service
          </h2>
          <ul className="list-none space-y-4">
            {[
              'OEM quality timing belt kits',
              'Experienced engine technicians',
              'Precision timing equipment',
              'All makes and models',
              'Competitive pricing',
              'Same-day service available',
            ].map((item, idx) => (
              <li key={idx} className="flex items-center gap-3">
                <FiCheckCircle className="h-6 w-6 text-orange-500 dark:text-orange-400 flex-shrink-0" />
                <span className="text-gray-700 dark:text-gray-200">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ComServiceInfo;
