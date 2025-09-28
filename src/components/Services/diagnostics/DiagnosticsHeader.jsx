import React from 'react';
import { FaPhoneAlt } from 'react-icons/fa';
import { FiClock } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const DiagnosticsHeader = () => {
  return (
    <section className="relative bg-white dark:bg-[#0E1625] py-20 lg:py-25 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side content */}
          <div className="space-y-8">
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight text-gray-900 dark:text-white">
              Vehicle Diagnostics
            </h1>
            <p className="text-xl leading-relaxed text-gray-600 dark:text-gray-300">
              State-of-the-art diagnostic services to identify and resolve complex vehicle issues.
              Our advanced equipment and expert technicians get to the root of the problem quickly.
            </p>

            {/* Price & Duration */}
            <div className="flex items-center space-x-8 text-gray-600 dark:text-gray-300">
              {/* Price */}
              <div className="flex items-center space-x-2">
                <span className="font-semibold">From £45</span>
              </div>

              {/* Duration */}
              <div className="flex items-center space-x-2">
                <FiClock className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                <span className="font-semibold">30-60 minutes</span>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-3 rounded-md transition duration-300 flex items-center space-x-2"
              >
                <FaPhoneAlt className="w-4 h-4" />
                <span>Book Now - 01709 863222</span>
              </Link>
              <button className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-3 rounded-md transition duration-300">
                Get Free Quote
              </button>
            </div>
          </div>

          {/* Right side image */}
          <div className="relative">
            <img
              src="/empty.svg"
              alt="Automotive Service"
              className="object-cover w-full h-auto max-h-[500px] rounded-md shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiagnosticsHeader;
