import React from 'react';
import { FiAlertTriangle } from 'react-icons/fi';

const SupsensionSafety = () => {
  return (
    <section className="px-6 sm:px-10 lg:px-18 py-16 mx-auto bg-white dark:bg-[#0A101D] transition-colors duration-300">
      {/* Title */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
          Suspension System Services
        </h2>
        <p className="mt-3 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-lg">
          Your suspension system affects safety, comfort, and tire wear. We
          provide comprehensive suspension services for all vehicles.
        </p>
      </div>

      {/* Signs of Problems */}
      <div className="bg-red-50 dark:bg-red-900/30 p-8 rounded-xl mb-12 shadow-md hover:shadow-[0_0_25px_#dc2626] active:shadow-[0_0_25px_#dc2626] transition">
        <div className="flex items-start gap-4">
          <FiAlertTriangle className="text-red-600 dark:text-red-400 w-8 h-8 mt-1 shrink-0" />
          <div>
            <h3 className="text-red-700 dark:text-red-300 font-semibold text-lg">
              Signs of Suspension Problems
            </h3>
            <div className="grid md:grid-cols-2 gap-8 mt-4 text-gray-700 dark:text-gray-200 text-base">
              <ul className="list-disc list-inside space-y-2">
                <li>Vehicle bounces excessively over bumps</li>
                <li>Uneven tire wear patterns</li>
                <li>Vehicle pulls to one side</li>
                <li>Nose dives when braking</li>
              </ul>
              <ul className="list-disc list-inside space-y-2">
                <li>Excessive body roll in corners</li>
                <li>Clunking or knocking noises</li>
                <li>Steering feels loose or vague</li>
                <li>Vehicle sits lower on one side</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Service Options */}
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div className="p-6 rounded-xl shadow-md bg-white dark:bg-[#111827] hover:scale-105 hover:shadow-[0_0_25px_#0d9488] active:shadow-[0_0_25px_#0d9488] transition">
          <h4 className="font-semibold text-gray-900 dark:text-white mb-3 text-lg">
            Shock Absorber Service
          </h4>
          <p className="text-teal-600 dark:text-teal-400 font-bold mb-3">From £120</p>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2 text-base">
            <li>Front or rear shock replacement</li>
            <li>Quality shock absorbers fitted</li>
            <li>Suspension mounting inspection</li>
            <li>Road test included</li>
          </ul>
        </div>
        <div className="p-6 rounded-xl shadow-md bg-white dark:bg-[#111827] hover:scale-105 hover:shadow-[0_0_25px_#0d9488] active:shadow-[0_0_25px_#0d9488] transition">
          <h4 className="font-semibold text-gray-900 dark:text-white mb-3 text-lg">
            Complete Suspension Overhaul
          </h4>
          <p className="text-teal-600 dark:text-teal-400 font-bold mb-3">From £350</p>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2 text-base">
            <li>All shock absorbers replaced</li>
            <li>Springs and mounting hardware</li>
            <li>Suspension geometry check</li>
            <li>Wheel alignment included</li>
          </ul>
        </div>
      </div>

      {/* Components We Service */}
      <div className="grid md:grid-cols-3 gap-8">
        {[
          {
            title: 'Front Suspension',
            items: ['MacPherson struts', 'Coil springs', 'Anti-roll bars', 'Ball joints', 'Control arms'],
          },
          {
            title: 'Rear Suspension',
            items: ['Shock absorbers', 'Leaf springs', 'Coil springs', 'Trailing arms', 'Panhard rods'],
          },
          {
            title: 'Additional Services',
            items: ['Wheel alignment', 'Suspension geometry', 'Ride height adjustment', 'Performance upgrades', 'Load leveling systems'],
          },
        ].map(({ title, items }) => (
          <div
            key={title}
            className="p-6 rounded-xl shadow-md bg-white dark:bg-[#111827] hover:scale-105 hover:shadow-[0_0_25px_#0d9488] active:shadow-[0_0_25px_#0d9488] transition"
          >
            <h4 className="font-semibold text-gray-900 dark:text-white mb-3">{title}</h4>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
              {items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SupsensionSafety;
