import React from 'react';
import { FiAlertTriangle } from 'react-icons/fi';

const ComSafety = () => {
  return (
    <section className="px-4 md:px-12 py-12 max-w-7xl mx-auto">
      {/* Title */}
      <div className="text-center mb-10">
        <h2 className="text-2xl md:text-3xl font-semibold">
          Timing Belt Replacement
        </h2>
        <p className="mt-2 text-gray-600 max-w-2xl mx-auto">
          The timing belt is critical to your engine&apos;s operation. Failure can
          cause catastrophic engine damage.
        </p>
      </div>

      {/* Critical Warning Box */}
      <div className="border border-red-300 bg-red-50 p-6 rounded-lg mb-10">
        <div className="flex items-start gap-2">
          <FiAlertTriangle className="text-red-600 w-6 h-6 mt-1" />
          <div>
            <h3 className="text-red-700 font-semibold">Critical Warning</h3>
            <p className="text-gray-700 mt-1">
              If your timing belt breaks while driving, it can cause severe
              engine damage costing thousands to repair. Don’t risk it – replace
              your timing belt at the recommended intervals.
            </p>

            {/* Two Column Info */}
            <div className="grid md:grid-cols-2 gap-6 mt-4">
              <div>
                <h4 className="font-semibold text-gray-800">
                  Interference Engines
                </h4>
                <p className="text-gray-700 text-sm mt-1">
                  Most modern engines are &quot;interference&quot; engines where pistons
                  and valves occupy the same space at different times. Belt
                  failure = bent valves and damaged pistons.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800">
                  Replacement Intervals
                </h4>
                <p className="text-gray-700 text-sm mt-1">
                  Typically every 60,000–100,000 miles or 4–6 years, whichever
                  comes first. Check your vehicle handbook for specific
                  intervals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* What We Replace & Service Includes */}
      <div className="grid md:grid-cols-2 gap-6 mb-10">
        <div className="border p-6 rounded-lg">
          <h4 className="font-semibold text-gray-800 mb-3">What We Replace</h4>
          <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm">
            <li>Timing belt</li>
            <li>Tensioner pulleys</li>
            <li>Idler pulleys</li>
            <li>Water pump (if driven by timing belt)</li>
            <li>Auxiliary drive belts if required</li>
          </ul>
        </div>
        <div className="border p-6 rounded-lg">
          <h4 className="font-semibold text-gray-800 mb-3">Service Includes</h4>
          <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm">
            <li>Complete timing system inspection</li>
            <li>Precision timing setup</li>
            <li>Quality replacement parts</li>
            <li>Engine timing verification</li>
            <li>Road test and final checks</li>
          </ul>
        </div>
      </div>

      {/* Recommended Replacement Schedule */}
      <div className="grid md:grid-cols-3 gap-6 text-center">
        <div className="border p-6 rounded-lg bg-blue-50">
          <h4 className="font-semibold text-gray-800 mb-2">
            Recommended Replacement Schedule
          </h4>
          <p className="text-gray-600">Most Vehicles</p>
          <p className="text-3xl font-bold text-blue-700 mt-2">60,000</p>
          <p className="text-gray-600 text-sm">miles or 4 years</p>
        </div>
        <div className="border p-6 rounded-lg bg-blue-50">
          <h4 className="font-semibold text-gray-800 mb-2">&nbsp;</h4>
          <p className="text-gray-600">Some Models</p>
          <p className="text-3xl font-bold text-blue-700 mt-2">80,000</p>
          <p className="text-gray-600 text-sm">miles or 5 years</p>
        </div>
        <div className="border p-6 rounded-lg bg-blue-50">
          <h4 className="font-semibold text-gray-800 mb-2">&nbsp;</h4>
          <p className="text-gray-600">Newer Vehicles</p>
          <p className="text-3xl font-bold text-blue-700 mt-2">100,000</p>
          <p className="text-gray-600 text-sm">miles or 6 years</p>
        </div>
      </div>
    </section>
  );
};

export default ComSafety;
