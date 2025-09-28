import React from 'react';
import { FaPhoneAlt } from 'react-icons/fa';

const AboutHeader = () => {
  return (
    <section className="relative bg-white dark:bg-gray-900 py-20 lg:py-25 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side content */}
          <div className="space-y-8">
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight text-gray-900 dark:text-gray-100">
              Your Trusted Local{" "}
              <span className="text-teal-500">Automotive Experts</span>
            </h1>

            <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
              For over 15 years, we've been Sheffield's go-to automotive service
              center, providing honest, professional car repairs and maintenance
              with a personal touch that larger chains simply can't match.
            </p>

            {/* Rating and Customer count */}
            <div className="flex items-center space-x-2">
              <span className="text-yellow-400 text-2xl">★★★★★</span>
              <p className="text-gray-600 dark:text-gray-300">4.9/5 Rating</p>
              <p className="text-gray-600 dark:text-gray-300 px-3">
                500+ Happy Customers
              </p>
            </div>

            {/* Buttons */}
            <div className="flex space-x-6">
              <button className="bg-teal-500 text-white px-6 py-2 rounded-md hover:bg-teal-600 transition duration-300 flex items-center space-x-2">
                <FaPhoneAlt className="w-4 h-4" />
                <span>Get In Touch</span>
              </button>
              <button className="bg-teal-500 text-white px-6 py-2 rounded-md hover:bg-teal-600 transition duration-300">
                Our Services
              </button>
            </div>
          </div>

          {/* Right side image */}
          <div className="relative">
            <img
              src="empty.svg"
              alt="Automotive Service"
              className="object-cover w-full h-full rounded-md shadow-md dark:shadow-gray-700"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHeader;
