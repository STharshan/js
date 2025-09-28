import React from 'react';

const MotServiceInfo = () => {
  return (
    <div className="container mx-auto px-6 sm:px-8 lg:px-19 py-10 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="grid md:grid-cols-2 gap-8">
        {/* What's Included Section */}
        <div
          className="
            bg-white dark:bg-gray-800 
            p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700
            transition-all duration-300
            hover:shadow-[0_0_25px_#00BFA5] hover:scale-105
          "
        >
          <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
            What's Included
          </h2>
          <ul className="list-none space-y-3">
            {[
              'Comprehensive brake system inspection',
              'Quality brake pads or discs fitted',
              'Brake fluid level check and top-up',
              'Brake performance road test',
              '12-month warranty on parts and labor',
              'Safety certificate upon completion',
            ].map((item, idx) => (
              <li
                key={idx}
                className="flex items-center space-x-2 text-gray-700 dark:text-gray-200"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-teal-500 dark:text-teal-400 flex-shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Why Choose Our Service Section */}
        <div
          className="
            bg-white dark:bg-gray-800 
            p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700
            transition-all duration-300
            hover:shadow-[0_0_25px_#00BFA5] hover:scale-105
          "
        >
          <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
            Why Choose Our Service
          </h2>
          <ul className="list-none space-y-3">
            {[
              'Premium quality brake components',
              'Expert brake technicians',
              'Same-day service available',
              'Competitive pricing',
              'All makes and models',
              'Emergency brake repairs',
            ].map((item, idx) => (
              <li
                key={idx}
                className="flex items-center space-x-2 text-gray-700 dark:text-gray-200"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-orange-500 dark:text-orange-400 flex-shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MotServiceInfo;
