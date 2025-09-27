import React from 'react';

const ComServiceInfo = () => {
  return (
    <section className="container mx-auto px-6 sm:px-10 lg:px-18 py-16">
      <div className="grid md:grid-cols-2 gap-10">
        {/* What's Included Section */}
        <div
          className="bg-white p-8 rounded-xl shadow-md
                     transition-all duration-300
                     hover:scale-105 hover:shadow-[0_0_25px_#0d9488]
                     active:shadow-[0_0_25px_#0d9488]"
        >
          <h2 className="text-2xl font-semibold mb-6 text-gray-800">
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
                <span className="text-gray-700">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Why Choose Our Service Section */}
        <div
          className="bg-white p-8 rounded-xl shadow-md
                     transition-all duration-300
                     hover:scale-105 hover:shadow-[0_0_25px_#0d9488]
                     active:shadow-[0_0_25px_#0d9488]"
        >
          <h2 className="text-2xl font-semibold mb-6 text-gray-800">
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
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-orange-500 flex-shrink-0"
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
                <span className="text-gray-700">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ComServiceInfo;
