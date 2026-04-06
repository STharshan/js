import React from 'react';
import { FaPhoneAlt } from 'react-icons/fa';
import { FiClock } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const ServiceHeader = ({ 
  title, 
  description, 
  price, 
  duration, 
  imageSrc, 
  phone = "+44 1709 863222" 
}) => {
  return (
    <section className="relative bg-white dark:bg-[#0B1322] py-20 lg:py-26 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left side content */}
          <div className="space-y-8">
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight text-gray-900 dark:text-white">
              {title}
            </h1>

            <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
              {description}
            </p>

            {/* Price and Duration */}
            <div className="flex items-center space-x-6 text-gray-600 dark:text-gray-300">
              <div className="flex items-center space-x-2">
                <span className="font-semibold">{price}</span>
              </div>
              <div className="flex items-center space-x-2">
                <FiClock className="w-5 h-5" />
                <span className="font-semibold">{duration}</span>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex space-x-6">
              <a
                href={`tel:${phone.replace(/\s+/g, '')}`}
                className="bg-teal-500 text-white px-6 py-2 rounded-md hover:bg-teal-600 transition duration-300 flex items-center space-x-2"
              >
                <FaPhoneAlt className="w-4 h-4" />
                <span>Book Now {phone}</span>
              </a>
              <Link
                to="/contact"
                className="bg-teal-500 text-white px-6 py-2 rounded-md hover:bg-teal-600 transition duration-300"
              >
                Get Free Quote
              </Link>
            </div>
          </div>

          {/* Right side image */}
          <div className="relative">
            <img
              src={imageSrc || "/empty.svg"}
              alt={title}
              loading="lazy"
              className="object-cover w-full h-full rounded-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceHeader;