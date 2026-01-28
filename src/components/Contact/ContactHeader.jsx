import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const ContactHeader = () => {
  return (
    <div className="bg-white dark:bg-gray-900 py-16 px-4 transition-colors duration-300">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-semibold mb-6 mt-10 text-gray-900 dark:text-gray-100">
          Contact JS Automotive
        </h2>
        <p className="text-lg mb-12 text-gray-700 dark:text-gray-300">
          Ready to book a service or have questions about your vehicle? We're here to help with expert advice and professional automotive services.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Phone */}
          <div
            className="
              bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-md text-center
              transition-all duration-300
              hover:shadow-[0_0_25px_#00BFA5]
              active:shadow-[0_0_25px_#00BFA5]
              hover:scale-105
            "
          >
            <div className="text-teal-500 mb-4 flex justify-center">
              <FaPhoneAlt size={36} />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">
              Call Us Now
            </h3>
            <p className="text-teal-600 dark:text-teal-400 text-xl mb-2">
              +44 1709 863222
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Mon-Fri: 8AM-6PM
            </p>
          </div>

          {/* Email */}
          <div
            className="
              bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-md text-center
              transition-all duration-300
              hover:shadow-[0_0_25px_#00BFA5]
              active:shadow-[0_0_25px_#00BFA5]
              hover:scale-105
            "
          >
            <div className="text-teal-500 mb-4 flex justify-center">
              <FaEnvelope size={36} />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">
              Email Us
            </h3>
            <p className="text-teal-600 dark:text-teal-400 text-xl mb-2">
              Js.automotive1@outlook.com
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              We'll respond within 24 hours
            </p>
          </div>

          {/* Location */}
          <div
            className="
              bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-md text-center
              transition-all duration-300
              hover:shadow-[0_0_25px_#00BFA5]
              active:shadow-[0_0_25px_#00BFA5]
              hover:scale-105
            "
          >
            <div className="text-teal-500 mb-4 flex justify-center">
              <FaMapMarkerAlt size={36} />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">
              Visit Our Workshop
            </h3>
            <p className="text-teal-600 dark:text-teal-400 text-xl mb-2">
              Doncaster
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Free customer parking
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactHeader;
