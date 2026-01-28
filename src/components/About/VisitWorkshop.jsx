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
          Conveniently located in Doncaster with easy access and customer parking available
        </p>

        <div className="flex flex-col md:flex-row gap-10">
          {/* Left Side - Location, Hours, Contact */}
          <div className="flex-1 space-y-6 text-left">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
                Our Location
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Centrally located in Doncaster with easy access from all major routes. Free
                customer parking available on-site.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
                Opening Hours
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Mon-Wed: 8AM-5PM
                <br />
                Thu: 8AM-5:30PM
                <br />
                Fri: 8AM-5PM
                <br />
                Sat: 8AM-2PM
                <br />
                Sun: Closed
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
                Contact Information
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Phone: +44 1709 863222
                <br />
                Email: Js.automotive1@outlook.com
              </p>
            </div>
          </div>

          {/* Right Side - Responsive Google Map */}
          <div className="flex-1">
            <div className="relative w-full h-100 pb-[56.25%] rounded-xl overflow-hidden shadow-md">
              <iframe
                title="Workshop Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2374.2580400980796!2d-1.1910733!3d53.4817191!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48e8ba4f0f5f8737%3A0x8c8d65d416363105!2sJS%20AUTOMOTIVE%20MOT%20AND%20SERVICE%20CENTER!5e0!3m2!1sen!2slk!4v1769625650434!5m2!1sen!2slk"
                loading="lazy"
                className="absolute top-0 left-0 w-full h-full border-0"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisitWorkshop;
