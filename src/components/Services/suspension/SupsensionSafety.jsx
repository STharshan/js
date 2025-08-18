import React from 'react';
import { FiAlertTriangle } from 'react-icons/fi';

const SupsensionSafety = () => {
  return (
    <section className="px-4 md:px-12 py-12 max-w-7xl mx-auto">
      {/* Title */}
      <div className="text-center mb-10">
        <h2 className="text-2xl md:text-3xl font-semibold">
          Suspension System Services
        </h2>
        <p className="mt-2 text-gray-600 max-w-2xl mx-auto">
          Your suspension system affects safety, comfort, and tire wear. We
          provide comprehensive suspension services for all vehicles.
        </p>
      </div>

      {/* Signs of Problems */}
      <div className="border border-red-300 bg-red-50 p-6 rounded-lg mb-10">
        <div className="flex items-start gap-2">
          <FiAlertTriangle className="text-red-600 w-6 h-6 mt-1" />
          <div>
            <h3 className="text-red-700 font-semibold">
              Signs of Suspension Problems
            </h3>
            <div className="grid md:grid-cols-2 gap-6 mt-3 text-gray-700 text-sm">
              <ul className="list-disc list-inside space-y-1">
                <li>Vehicle bounces excessively over bumps</li>
                <li>Uneven tire wear patterns</li>
                <li>Vehicle pulls to one side</li>
                <li>Nose dives when braking</li>
              </ul>
              <ul className="list-disc list-inside space-y-1">
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
      <div className="grid md:grid-cols-2 gap-6 mb-10">
        <div className="border p-6 rounded-lg">
          <h4 className="font-semibold text-gray-800 mb-2">
            Shock Absorber Service
          </h4>
          <p className="text-green-700 font-bold">From £120</p>
          <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm mt-2">
            <li>Front or rear shock replacement</li>
            <li>Quality shock absorbers fitted</li>
            <li>Suspension mounting inspection</li>
            <li>Road test included</li>
          </ul>
        </div>
        <div className="border p-6 rounded-lg">
          <h4 className="font-semibold text-gray-800 mb-2">
            Complete Suspension Overhaul
          </h4>
          <p className="text-green-700 font-bold">From £350</p>
          <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm mt-2">
            <li>All shock absorbers replaced</li>
            <li>Springs and mounting hardware</li>
            <li>Suspension geometry check</li>
            <li>Wheel alignment included</li>
          </ul>
        </div>
      </div>

      {/* Components We Service */}
      <div className="border p-6 rounded-lg grid md:grid-cols-3 gap-6 text-sm">
        <div>
          <h4 className="font-semibold text-gray-800 mb-2">Front Suspension</h4>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>MacPherson struts</li>
            <li>Coil springs</li>
            <li>Anti-roll bars</li>
            <li>Ball joints</li>
            <li>Control arms</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-gray-800 mb-2">Rear Suspension</h4>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>Shock absorbers</li>
            <li>Leaf springs</li>
            <li>Coil springs</li>
            <li>Trailing arms</li>
            <li>Panhard rods</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-gray-800 mb-2">Additional Services</h4>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
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
