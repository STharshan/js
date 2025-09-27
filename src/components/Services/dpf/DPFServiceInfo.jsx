import React from 'react';

const DPFServiceInfo = () => {
  // iOS Safari hack to trigger :active styles
  const touchStart = () => {};

  return (
    <section className="container mx-auto px-6 sm:px-10 lg:px-18 py-16">
      <div className="grid md:grid-cols-2 gap-10">
        {/* What's Included Section */}
        <div
          role="button"
          tabIndex={0}
          onTouchStart={touchStart}
          className="bg-white p-8 rounded-xl shadow-md 
                     transition-all duration-300 cursor-pointer select-none
                     hover:scale-105 hover:shadow-[0_0_25px_#0d9488]
                     active:shadow-[0_0_25px_#0d9488]"
        >
          <h2 className="text-2xl font-semibold mb-6 text-gray-900">
            What's Included
          </h2>
          <ul className="list-none space-y-4 text-gray-700">
            {[
              "Comprehensive DPF system diagnosis",
              "Professional cleaning or regeneration",
              "Fault code clearing",
              "System performance testing",
              "Road test verification",
              "Preventive maintenance advice",
            ].map((item, i) => (
              <li key={i} className="flex items-center space-x-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-teal-500"
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
          role="button"
          tabIndex={0}
          onTouchStart={touchStart}
          className="bg-white p-8 rounded-xl shadow-md 
                     transition-all duration-300 cursor-pointer select-none
                     hover:scale-105 hover:shadow-[0_0_25px_#0d9488]
                     active:shadow-[0_0_25px_#0d9488]"
        >
          <h2 className="text-2xl font-semibold mb-6 text-gray-900">
            Why Choose Our Service
          </h2>
          <ul className="list-none space-y-4 text-gray-700">
            {[
              "Specialist DPF equipment",
              "All diesel vehicles covered",
              "Same-day service available",
              "Guaranteed results",
              "Competitive pricing",
              "Expert diesel technicians",
            ].map((item, i) => (
              <li key={i} className="flex items-center space-x-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-orange-500"
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

export default DPFServiceInfo;
