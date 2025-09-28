import React from 'react';
import { FaPhoneAlt } from 'react-icons/fa';
import { FiClock } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const BrakeHeader = () => {
  return (
    <section className="relative bg-white dark:bg-gray-900 py-20 lg:py-25 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side content */}
          <div className="space-y-8">
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight text-gray-900 dark:text-white transition-colors duration-300">
              Brake Services
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed transition-colors duration-300">
              Professional brake services including pad replacement, disc machining, and complete brake system
              overhauls. Your safety is our priority - don't compromise on brakes.
            </p>

            {/* Details */}
            <div className="text-gray-600 dark:text-gray-300 flex items-center space-x-5 transition-colors duration-300">
              <div className="flex items-center space-x-2">
                <div className="flex flex-col">
                  <p className="font-semibold">From £80</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <FiClock className="w-5 h-5 text-gray-600 dark:text-gray-400 transition-colors duration-300" />
                <div className="flex flex-col">
                  <p className="font-semibold">1-3 hours</p>
                </div>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex space-x-6">
              <Link
                to="/contact"
                className="bg-teal-500 text-white px-6 py-2 rounded-md hover:bg-teal-600 transition duration-300 flex items-center space-x-2"
              >
                <FaPhoneAlt className="w-4 h-4" />
                <span>Book Now-01709 863222</span>
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

export default BrakeHeader;
