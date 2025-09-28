import React from 'react';

const VisitWorkshop = () => {
  return (
    <div className="py-10 px-4 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto text-center">
        {/* Section Title */}
        <h2 className="text-3xl font-semibold mb-8 text-gray-900 dark:text-gray-100">
          Visit Our Workshop
        </h2>
        <p className="text-xl mb-8 text-gray-700 dark:text-gray-300">
          Conveniently located in Sheffield with easy access and customer parking available
        </p>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Left Side - Location, Hours, Contact */}
          <div className="space-y-6 text-left md:text-left">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
                Our Location
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Centrally located in Sheffield with easy access from all major routes. Free
                customer parking available on-site.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
                Opening Hours
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Monday - Friday: 8:00 AM - 6:00 PM
                <br />
                Saturday: 8:00 AM - 4:00 PM
                <br />
                Sunday: Closed
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
                Contact Information
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Phone: 01709 863222
                <br />
                Email: Js.automotive1@outlook.com
              </p>
            </div>
          </div>

          {/* Right Side - Image/Map */}
          <div className="bg-gray-200 dark:bg-gray-700 h-60 rounded-md overflow-hidden shadow-md">
            <img
              src="empty1.svg"
              alt="Workshop Location"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisitWorkshop;
