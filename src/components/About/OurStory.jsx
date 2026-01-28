import React from 'react';
import { FaCar, FaShieldAlt } from 'react-icons/fa'; // Importing icons from react-icons

const OurStory = () => {
  return (
    <div className="bg-white dark:bg-gray-900 py-10 transition-colors duration-300">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <h2 className="text-3xl font-semibold text-center mb-8 text-gray-900 dark:text-gray-100">
          Our Story
        </h2>
        <p className="text-center text-lg mb-12 text-gray-700 dark:text-gray-300">
          Built on a foundation of trust, expertise, and genuine care for our customers
        </p>

        {/* First Section */}
        <div className="max-w-4xl mx-auto">
          <div
            className="
              bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg flex items-center
              transition-all duration-300
              hover:shadow-[0_0_25px_#00BFA5] 
              active:shadow-[0_0_25px_#00BFA5]
            "
          >
            <div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
                How It All Started
              </h3>
              <div className="max-w-xl mx-auto">
                <p className="text-gray-600 dark:text-gray-300">
                  At JS Automotive Edlington, we pride ourselves on providing high-quality, honest, and affordable vehicle care to our local community. Whether it’s routine servicing, complex mechanical repairs, or advanced diagnostics, our goal is to get you back on the road safely without the main-dealer price tag.
                </p>
                <p className="mt-5 text-gray-600 dark:text-gray-300">
                  As a family-run business, we understand how much you rely on your vehicle, which is why we treat every car as if it were our own—offering transparent advice, fair quotes, and a commitment to first-class service. From brakes and exhausts to full engine health checks, you can trust JS Automotive to deliver professional results with a personal touch.
                </p>
              </div>
            </div>
            <div className="flex ml-6">
              <FaCar className="text-teal-500 bg-teal-100 dark:bg-teal-900 rounded-full p-4 w-20 h-20" />
            </div>
          </div>
        </div>

        {/* Mission and Values Section */}
        <div className="flex flex-col lg:flex-row max-w-4xl mx-auto mt-5 gap-6">
          {/* Mission */}
          <div
            className="
              flex-1 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg
              transition-all duration-300
              hover:shadow-[0_0_25px_#00BFA5] 
              active:shadow-[0_0_25px_#00BFA5]
            "
          >
            <FaCar className="text-teal-500 dark:text-teal-400 mr-3 mb-2" size={30} />
            <div className="flex items-center mb-4">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                Our Mission
              </h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300">
              To provide exceptional automotive services with complete transparency, fair pricing, and the highest standards of
              workmanship. We believe in building long-term relationships with our customers based on trust and reliability.
            </p>
          </div>

          {/* Values */}
          <div
            className="
              flex-1 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg
              transition-all duration-300
              hover:shadow-[0_0_25px_#00BFA5] 
              active:shadow-[0_0_25px_#00BFA5]
            "
          >
            <FaShieldAlt className="text-teal-500 dark:text-teal-400 mr-3 mb-2" size={30} />
            <div className="flex items-center mb-4">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                Our Values
              </h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300">
              Honesty, integrity, and customer satisfaction are at the heart of everything we do. We only recommend work that’s
              necessary and always explain what we’re doing and why, ensuring you make informed decisions about your vehicle.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurStory;
