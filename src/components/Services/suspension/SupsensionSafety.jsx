import React from 'react';
import { FiAlertTriangle } from 'react-icons/fi';

const SupsensionSafety = () => {
  return (
    <section className="px-6 sm:px-10 lg:px-18 py-16 max-w-7xl mx-auto">
      {/* Title */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Suspension System Services
        </h2>
        <p className="mt-3 text-gray-600 max-w-2xl mx-auto text-lg">
          Your suspension system affects safety, comfort, and tire wear. We
          provide comprehensive suspension services for all vehicles.
        </p>
      </div>

      {/* Signs of Problems */}
      <div className="bg-red-50 p-8 rounded-xl mb-12 shadow-md hover:shadow-[0_0_25px_#dc2626] active:shadow-[0_0_25px_#dc2626] transition">
        <div className="flex items-start gap-4">
          
          <div>
            <h3 className="text-red-700 font-semibold text-lg">
              Signs of Suspension Problems
            </h3>
            <div className="grid md:grid-cols-2 gap-8 mt-4 text-gray-700 text-base">
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
        <div className="p-6 rounded-xl shadow-md bg-white hover:scale-105 hover:shadow-[0_0_25px_#0d9488] active:shadow-[0_0_25px_#0d9488] transition">
          <h4 className="font-semibold text-gray-900 mb-3 text-lg">
            Shock Absorber Service
          </h4>
          <p className="text-teal-600 font-bold mb-3">From £120</p>
          <ul className="list-disc list-inside text-gray-700 space-y-2 text-base">
            <li>Front or rear shock replacement</li>
            <li>Quality shock absorbers fitted</li>
            <li>Suspension mounting inspection</li>
            <li>Road test included</li>
          </ul>
        </div>
        <div className="p-6 rounded-xl shadow-md bg-white hover:scale-105 hover:shadow-[0_0_25px_#0d9488] active:shadow-[0_0_25px_#0d9488] transition">
          <h4 className="font-semibold text-gray-900 mb-3 text-lg">
            Complete Suspension Overhaul
          </h4>
          <p className="text-teal-600 font-bold mb-3">From £350</p>
          <ul className="list-disc list-inside text-gray-700 space-y-2 text-base">
            <li>All shock absorbers replaced</li>
            <li>Springs and mounting hardware</li>
            <li>Suspension geometry check</li>
            <li>Wheel alignment included</li>
          </ul>
        </div>
      </div>

      {/* Components We Service */}
      <div className="grid md:grid-cols-3 gap-8">
        <div className="p-6 rounded-xl shadow-md bg-white hover:scale-105 hover:shadow-[0_0_25px_#0d9488] active:shadow-[0_0_25px_#0d9488] transition">
          <h4 className="font-semibold text-gray-900 mb-3">Front Suspension</h4>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>MacPherson struts</li>
            <li>Coil springs</li>
            <li>Anti-roll bars</li>
            <li>Ball joints</li>
            <li>Control arms</li>
          </ul>
        </div>
        <div className="p-6 rounded-xl shadow-md bg-white hover:scale-105 hover:shadow-[0_0_25px_#0d9488] active:shadow-[0_0_25px_#0d9488] transition">
          <h4 className="font-semibold text-gray-900 mb-3">Rear Suspension</h4>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Shock absorbers</li>
            <li>Leaf springs</li>
            <li>Coil springs</li>
            <li>Trailing arms</li>
            <li>Panhard rods</li>
          </ul>
        </div>
        <div className="p-6 rounded-xl shadow-md bg-white hover:scale-105 hover:shadow-[0_0_25px_#0d9488] active:shadow-[0_0_25px_#0d9488] transition">
          <h4 className="font-semibold text-gray-900 mb-3">Additional Services</h4>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Wheel alignment</li>
            <li>Suspension geometry</li>
            <li>Ride height adjustment</li>
            <li>Performance upgrades</li>
            <li>Load leveling systems</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default SupsensionSafety;
