import React from 'react';
import { FaPhoneAlt } from 'react-icons/fa';
import { FiClock } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const ComHeader = () => {
  return (
    <section className="relative bg-white dark:bg-[#0B1322] py-20 lg:py-25 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side content */}
          <div className="space-y-8">
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight text-gray-900 dark:text-white">
              Cam Belt Replacement
            </h1>

            <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
              Professional timing belt replacement to prevent catastrophic engine damage.
              Don't risk expensive engine repairs – replace your timing belt at recommended intervals.
            </p>

            {/* Price and Duration */}
            <div className="flex items-center space-x-6 text-gray-600 dark:text-gray-300">
              <div className="flex items-center space-x-2">
                <span className="font-semibold">From £280</span>
              </div>
              <div className="flex items-center space-x-2">
                <FiClock className="w-5 h-5" />
                <span className="font-semibold">3–5 hours</span>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex space-x-6">
              <Link
                to="/contact"
                className="bg-teal-500 text-white px-6 py-2 rounded-md hover:bg-teal-600 transition duration-300 flex items-center space-x-2"
              >
                <FaPhoneAlt className="w-4 h-4" />
                <span>Book Now - 01709 863222</span>
              </Link>

              <button className="bg-teal-500 text-white px-6 py-2 rounded-md hover:bg-teal-600 transition duration-300">
                Get Free Quote
              </button>
            </div>
          </div>

          {/* Right side image */}
          <div className="relative">
            <img
              src="/empty.svg"
              alt="Automotive Service"
              className="object-cover w-full h-full rounded-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComHeader;
