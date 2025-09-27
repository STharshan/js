import React from 'react';
import { FiAlertTriangle } from 'react-icons/fi';

const ComSafety = () => {
  return (
    <section className="px-6 sm:px-10 lg:px-18 py-16 max-w-7xl mx-auto">
      {/* Title */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Timing Belt Replacement
        </h2>
        <p className="mt-3 text-gray-600 max-w-2xl mx-auto text-lg">
          The timing belt is critical to your engine&apos;s operation. Failure can
          cause catastrophic engine damage.
        </p>
      </div>

      {/* Critical Warning Box */}
      <div className="bg-red-50 p-8 rounded-xl mb-12 shadow-md hover:shadow-[0_0_25px_#ef4444] active:shadow-[0_0_25px_#b91c1c] transition">
        <div className="flex items-start gap-4">
          
          <div>
            <h3 className="text-red-700 font-semibold text-lg">
              Critical Warning
            </h3>
            <p className="text-gray-700 mt-2 leading-relaxed">
              If your timing belt breaks while driving, it can cause severe
              engine damage costing thousands to repair. Don’t risk it – replace
              your timing belt at the recommended intervals.
            </p>

            {/* Two Column Info */}
            <div className="grid md:grid-cols-2 gap-8 mt-6">
              <div className="bg-white p-4 rounded-lg shadow-sm hover:shadow-[0_0_20px_#0d9488] active:shadow-[0_0_20px_#0d9488] transition">
                <h4 className="font-semibold text-gray-800">
                  Interference Engines
                </h4>
                <p className="text-gray-600 text-sm mt-2 leading-relaxed">
                  Most modern engines are &quot;interference&quot; engines where pistons
                  and valves occupy the same space at different times. Belt
                  failure = bent valves and damaged pistons.
                </p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm hover:shadow-[0_0_20px_#0d9488] active:shadow-[0_0_20px_#0d9488] transition">
                <h4 className="font-semibold text-gray-800">
                  Replacement Intervals
                </h4>
                <p className="text-gray-600 text-sm mt-2 leading-relaxed">
                  Typically every <span className="font-semibold">60,000–100,000 miles</span> or 
                  <span className="font-semibold"> 4–6 years</span>, whichever comes first. 
                  Always check your vehicle handbook for exact intervals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* What We Replace & Service Includes */}
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div className="p-6 rounded-lg shadow-md hover:shadow-[0_0_25px_#0d9488] active:shadow-[0_0_25px_#0d9488] transition">
          <h4 className="font-semibold text-gray-900 mb-4 text-lg">What We Replace</h4>
          <ul className="list-disc list-inside text-gray-700 space-y-2 text-base">
            <li>Timing belt</li>
            <li>Tensioner pulleys</li>
            <li>Idler pulleys</li>
            <li>Water pump (if driven by timing belt)</li>
            <li>Auxiliary drive belts if required</li>
          </ul>
        </div>
        <div className="p-6 rounded-lg shadow-md hover:shadow-[0_0_25px_#0d9488] active:shadow-[0_0_25px_#0d9488] transition">
          <h4 className="font-semibold text-gray-900 mb-4 text-lg">Service Includes</h4>
          <ul className="list-disc list-inside text-gray-700 space-y-2 text-base">
            <li>Complete timing system inspection</li>
            <li>Precision timing setup</li>
            <li>Quality replacement parts</li>
            <li>Engine timing verification</li>
            <li>Road test and final checks</li>
          </ul>
        </div>
      </div>

      {/* Recommended Replacement Schedule */}
      <div className="grid md:grid-cols-3 gap-8 text-center">
        <div className="p-8 rounded-lg bg-teal-50 shadow-md hover:shadow-[0_0_25px_#0d9488] active:shadow-[0_0_25px_#0d9488] transition">
          <h4 className="font-semibold text-gray-800 mb-2">
            Recommended Schedule
          </h4>
          <p className="text-gray-600">Most Vehicles</p>
          <p className="text-4xl font-bold text-teal-700 mt-3">60,000</p>
          <p className="text-gray-600 text-sm">miles or 4 years</p>
        </div>
        <div className="p-8 rounded-lg bg-teal-50 shadow-md hover:shadow-[0_0_25px_#0d9488] active:shadow-[0_0_25px_#0d9488] transition">
          <h4 className="font-semibold text-gray-800 mb-2">Extended Models</h4>
          <p className="text-gray-600">Some Vehicles</p>
          <p className="text-4xl font-bold text-teal-700 mt-3">80,000</p>
          <p className="text-gray-600 text-sm">miles or 5 years</p>
        </div>
        <div className="p-8 rounded-lg bg-teal-50 shadow-md hover:shadow-[0_0_25px_#0d9488] active:shadow-[0_0_25px_#0d9488] transition">
          <h4 className="font-semibold text-gray-800 mb-2">Newer Vehicles</h4>
          <p className="text-gray-600">Latest Models</p>
          <p className="text-4xl font-bold text-teal-700 mt-3">100,000</p>
          <p className="text-gray-600 text-sm">miles or 6 years</p>
        </div>
      </div>
    </section>
  );
};

export default ComSafety;
