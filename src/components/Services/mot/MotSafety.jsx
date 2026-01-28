import React from "react";
import {
  FaCheckCircle,
  FaExclamationTriangle,
  FaTimesCircle,
  FaCarSide,
} from "react-icons/fa";
import { FiCheckCircle } from "react-icons/fi";

const MotSafety = () => {
  const touchStart = () => {};

  const safetySystems = [
    "Brakes and handbrake",
    "Steering and suspension",
    "Tyres and wheels",
    "Seat belts",
  ];

  const vehicleCondition = [
    "Lights and electrical systems",
    "Mirrors and windscreen",
    "Exhaust and emissions",
    "Body and structure",
  ];

  return (
    <section className="min-h-screen flex flex-col items-center px-6 sm:px-8 lg:px-18 py-16 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="rounded-lg">
        {/* Title */}
        <h1 className="text-4xl font-bold text-center text-gray-900 dark:text-gray-100 mb-6">
          MOT Test Information
        </h1>

        <p className="text-lg text-center text-gray-700 dark:text-gray-300 max-w-3xl mx-auto mb-12">
          Your MOT certificate is a legal requirement for vehicles over 3 years
          old. We provide{" "}
          <span className="font-semibold text-teal-600 dark:text-teal-400">
            comprehensive testing
          </span>{" "}
          with transparent reports and same-day repairs if needed.
        </p>

        {/* Test Result Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-16">
          {/* Pass */}
          <div className="flex flex-col items-center bg-green-50 dark:bg-green-900/30 p-8 rounded-xl shadow-md transition-all duration-300 hover:scale-105 hover:shadow-[0_0_25px_#22c55e]">
            <div className="bg-green-500 text-white p-5 rounded-full mb-4">
              <FaCheckCircle className="text-4xl" />
            </div>
            <h3 className="text-2xl font-semibold mb-2">Pass</h3>
            <p className="text-center text-sm text-gray-600 dark:text-gray-300">
              Your vehicle meets all safety and environmental standards.
            </p>
          </div>

          {/* Advisory */}
          <div className="flex flex-col items-center bg-yellow-50 dark:bg-yellow-900/30 p-8 rounded-xl shadow-md transition-all duration-300 hover:scale-105 hover:shadow-[0_0_25px_#facc15]">
            <div className="bg-yellow-500 text-white p-5 rounded-full mb-4">
              <FaExclamationTriangle className="text-4xl" />
            </div>
            <h3 className="text-2xl font-semibold mb-2">Advisory</h3>
            <p className="text-center text-sm text-gray-600 dark:text-gray-300">
              Minor issues noted but certificate still issued.
            </p>
          </div>

          {/* Fail */}
          <div className="flex flex-col items-center bg-red-50 dark:bg-red-900/30 p-8 rounded-xl shadow-md transition-all duration-300 hover:scale-105 hover:shadow-[0_0_25px_#ef4444]">
            <div className="bg-red-500 text-white p-5 rounded-full mb-4">
              <FaTimesCircle className="text-4xl" />
            </div>
            <h3 className="text-2xl font-semibold mb-2">Fail</h3>
            <p className="text-center text-sm text-gray-600 dark:text-gray-300">
              Safety issues found that must be fixed.
            </p>
          </div>
        </div>

        {/* Test Categories */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
          <h3 className="text-2xl font-semibold text-center mb-8">
            What We Test
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {/* Safety Systems */}
            <div className="p-6 bg-gray-50 dark:bg-gray-900 rounded-lg">
              <div className="flex items-center gap-3 mb-3">
                <FaCarSide className="text-teal-600 text-2xl" />
                <h4 className="font-semibold text-lg">Safety Systems</h4>
              </div>
              <ul className="space-y-2 text-sm">
                {safetySystems.map((item, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <FiCheckCircle className="w-4 h-4 text-teal-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Vehicle Condition */}
            <div className="p-6 bg-gray-50 dark:bg-gray-900 rounded-lg">
              <div className="flex items-center gap-3 mb-3">
                <FaCarSide className="text-orange-500 text-2xl" />
                <h4 className="font-semibold text-lg">Vehicle Condition</h4>
              </div>
              <ul className="space-y-2 text-sm">
                {vehicleCondition.map((item, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <FiCheckCircle className="w-4 h-4 text-orange-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MotSafety;
