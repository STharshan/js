import React from 'react';
import { FaCheckCircle, FaExclamationTriangle, FaTimesCircle, FaCarSide } from 'react-icons/fa';

const MotSafety = () => {
  // iOS Safari hack to trigger :active state
  const touchStart = () => {};

  return (
    <section className="min-h-screen flex flex-col items-center py-16 px-6 bg-gray-50">
      <div className="w-full max-w-6xl rounded-lg">
        {/* Title */}
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-6">
          MOT Test Information
        </h1>
        <p className="text-lg text-center text-gray-700 max-w-3xl mx-auto mb-12">
          Your MOT certificate is a legal requirement for vehicles over 3 years old. 
          We provide <span className="font-semibold text-teal-600">comprehensive testing</span> 
          with transparent reports and same-day repairs if needed.
        </p>

        {/* Test Result Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-16">
          {/* Pass */}
          <div
            role="button"
            tabIndex={0}
            onTouchStart={touchStart}
            className="flex flex-col items-center bg-green-50 p-8 rounded-xl shadow-md
                       cursor-pointer select-none outline-none
                       transition-all duration-300
                       hover:scale-105
                       hover:shadow-[0_0_25px_#22c55e]
                       active:shadow-[0_0_25px_#22c55e]
                       focus-visible:ring-2 focus-visible:ring-green-500"
          >
            <div className="bg-green-500 text-white p-5 rounded-full mb-4">
              <FaCheckCircle className="text-4xl" />
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">Pass</h3>
            <p className="text-center text-sm text-gray-600">
              Your vehicle meets all safety and environmental standards. 
              Certificate issued immediately.
            </p>
          </div>

          {/* Advisory */}
          <div
            role="button"
            tabIndex={0}
            onTouchStart={touchStart}
            className="flex flex-col items-center bg-yellow-50 p-8 rounded-xl shadow-md
                       cursor-pointer select-none outline-none
                       transition-all duration-300
                       hover:scale-105
                       hover:shadow-[0_0_25px_#facc15]
                       active:shadow-[0_0_25px_#facc15]
                       focus-visible:ring-2 focus-visible:ring-yellow-400"
          >
            <div className="bg-yellow-500 text-white p-5 rounded-full mb-4">
              <FaExclamationTriangle className="text-4xl" />
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">Advisory</h3>
            <p className="text-center text-sm text-gray-600">
              Minor issues noted that should be monitored. Certificate still issued with advisory notes.
            </p>
          </div>

          {/* Fail */}
          <div
            role="button"
            tabIndex={0}
            onTouchStart={touchStart}
            className="flex flex-col items-center bg-red-50 p-8 rounded-xl shadow-md
                       cursor-pointer select-none outline-none
                       transition-all duration-300
                       hover:scale-105
                       hover:shadow-[0_0_25px_#ef4444]
                       active:shadow-[0_0_25px_#ef4444]
                       focus-visible:ring-2 focus-visible:ring-red-500"
          >
            <div className="bg-red-500 text-white p-5 rounded-full mb-4">
              <FaTimesCircle className="text-4xl" />
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">Fail</h3>
            <p className="text-center text-sm text-gray-600">
              Safety issues found that must be fixed. We can repair and retest the same day in most cases.
            </p>
          </div>
        </div>

        {/* Test Categories */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h3 className="text-2xl font-semibold text-gray-900 mb-8 text-center">What We Test</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {/* Safety Systems */}
            <div
              role="button"
              tabIndex={0}
              onTouchStart={touchStart}
              className="p-6 bg-gray-50 rounded-lg
                         cursor-pointer select-none outline-none
                         transition-all duration-300
                         hover:shadow-[0_0_20px_#22c55e]
                         active:shadow-[0_0_20px_#22c55e]
                         focus-visible:ring-2 focus-visible:ring-green-500"
            >
              <div className="flex items-center gap-3 mb-3">
                <FaCarSide className="text-teal-600 text-2xl" />
                <h4 className="font-semibold text-lg">Safety Systems</h4>
              </div>
              <ul className="text-sm text-gray-700 space-y-2">
                <li>✔ Brakes and handbrake</li>
                <li>✔ Steering and suspension</li>
                <li>✔ Tyres and wheels</li>
                <li>✔ Seat belts</li>
              </ul>
            </div>

            {/* Vehicle Condition */}
            <div
              role="button"
              tabIndex={0}
              onTouchStart={touchStart}
              className="p-6 bg-gray-50 rounded-lg
                         cursor-pointer select-none outline-none
                         transition-all duration-300
                         hover:shadow-[0_0_20px_#f97316]
                         active:shadow-[0_0_20px_#f97316]
                         focus-visible:ring-2 focus-visible:ring-orange-500"
            >
              <div className="flex items-center gap-3 mb-3">
                <FaCarSide className="text-orange-500 text-2xl" />
                <h4 className="font-semibold text-lg">Vehicle Condition</h4>
              </div>
              <ul className="text-sm text-gray-700 space-y-2">
                <li>✔ Lights and electrical systems</li>
                <li>✔ Mirrors and windscreen</li>
                <li>✔ Exhaust and emissions</li>
                <li>✔ Body and structure</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MotSafety;
