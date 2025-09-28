import React from 'react';

const MechanicalSafety = () => {
  const touchStart = () => {};

  const services = [
    {
      title: "Engine Repairs",
      iconPath: "M3 5h18M3 19h18M3 12h18M3 9h18",
      items: [
        "Engine diagnostics",
        "Head gasket replacement",
        "Timing belt/chain issues",
        "Cooling system repairs",
        "Oil leak repairs",
      ],
    },
    {
      title: "Transmission",
      iconPath:
        "M15 14l-2 2-2-2m2-6h6a2 2 0 012 2v12a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6m2 0V3a2 2 0 00-2-2H9a2 2 0 00-2 2v3",
      items: [
        "Clutch replacement",
        "Gearbox repairs",
        "CV joint replacement",
        "Driveshaft repairs",
        "Automatic transmission service",
      ],
    },
    {
      title: "Electrical",
      iconPath: "M15 12V4a3 3 0 00-3-3h-3a3 3 0 00-3 3v8M19 9l-7 7-7-7",
      items: [
        "Alternator replacement",
        "Starter motor repairs",
        "Wiring fault diagnosis",
        "Battery replacement",
        "Lighting system repairs",
      ],
    },
  ];

  return (
    <section className="container mx-auto px-6 sm:px-8 lg:px-18 py-16 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white transition-colors duration-300">
          Common Repairs We Handle
        </h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 mt-3 transition-colors duration-300">
          From minor fixes to major overhauls, our experienced mechanics can
          handle all types of mechanical issues.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {services.map((service, idx) => (
          <div
            key={idx}
            role="button"
            tabIndex={0}
            onTouchStart={touchStart}
            className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-md transition-all duration-300 
                       cursor-pointer select-none
                       hover:scale-105 
                       hover:shadow-[0_0_25px_#0d9488]
                       active:shadow-[0_0_25px_#0d9488]"
          >
            <div className="flex items-center justify-center mb-6">
              <svg
                className="w-14 h-14 text-teal-500 dark:text-teal-400"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={service.iconPath}
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-center text-gray-800 dark:text-gray-200 transition-colors duration-300">
              {service.title}
            </h3>
            <ul className="mt-5 space-y-2 text-gray-700 dark:text-gray-400 text-center md:text-left transition-colors duration-300">
              {service.items.map((item, i) => (
                <li key={i}>• {item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MechanicalSafety;
