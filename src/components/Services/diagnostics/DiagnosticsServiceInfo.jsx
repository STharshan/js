import React from 'react';

const DiagnosticsServiceInfo = () => {
  return (
    <section className="w-full px-6 sm:px-10 lg:px-18 py-16 bg-white dark:bg-[#0B1120] transition-colors duration-300">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10">
        {/* What's Included Section */}
        <div
          className="bg-white dark:bg-[#1E293B] p-8 rounded-xl shadow-md
                     transition-all duration-300 cursor-pointer
                     hover:scale-[1.03] hover:shadow-[0_0_25px_#14b8a6]
                     active:shadow-[0_0_25px_#14b8a6]"
        >
          <h2 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">
            What's Included
          </h2>
          <ul className="list-none space-y-3 text-gray-700 dark:text-gray-300">
            {[
              "Comprehensive computer diagnostic scan",
              "Fault code reading and interpretation",
              "Visual inspection of related systems",
              "Clear explanation of findings",
              "Detailed written report",
              "Repair recommendations and quotes",
            ].map((item, i) => (
              <li key={i} className="flex items-center space-x-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-teal-500 flex-shrink-0"
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
          className="bg-white dark:bg-[#1E293B] p-8 rounded-xl shadow-md
                     transition-all duration-300 cursor-pointer
                     hover:scale-[1.03] hover:shadow-[0_0_25px_#f97316]
                     active:shadow-[0_0_25px_#f97316]"
        >
          <h2 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">
            Why Choose Our Service
          </h2>
          <ul className="list-none space-y-3 text-gray-700 dark:text-gray-300">
            {[
              "Latest diagnostic equipment",
              "All makes and models covered",
              "Expert fault interpretation",
              "No fix, no fee guarantee",
              "Same-day diagnosis available",
              "Competitive diagnostic fees",
            ].map((item, i) => (
              <li key={i} className="flex items-center space-x-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-orange-400 flex-shrink-0"
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
    </section>
  );
};

export default DiagnosticsServiceInfo;
