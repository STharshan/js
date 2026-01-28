import React from 'react';

const FindOurWorkshop = () => {
  return (
    <div className="px-6 sm:px-8 lg:px-22 py-12 transition-colors duration-300 bg-white dark:bg-gray-900">
      <h2 className="text-3xl font-semibold text-center mb-8 text-gray-900 dark:text-gray-100">
        Find Our Workshop
      </h2>
      <p className="text-lg text-center mb-12 text-gray-700 dark:text-gray-300">
        Conveniently located in Doncaster with easy access and free customer parking
      </p>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Left Section: Workshop Location */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg transition-colors duration-300">
          <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
            Workshop Location
          </h3>
          <p className="mb-4 text-gray-700 dark:text-gray-300">
            Our fully equipped workshop is centrally located in Doncaster, making it easy to reach from all
            areas of the city and surrounding regions.
          </p>
          <ul className="list-none space-y-3 text-gray-700 dark:text-gray-300">
            <li>
              <strong>Easy Access:</strong> Close to major roads and public transport
            </li>
            <li>
              <strong>Free Parking:</strong> On-site customer parking available
            </li>
            <li>
              <strong>Facilities:</strong> Comfortable waiting area with refreshments
            </li>
          </ul>
        </div>

        {/* Right Section: Map */}
        <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-lg transition-colors duration-300">
          <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
            Doncaster Workshop
          </h3>

          {/* Google Map Embed */}
          <div className="w-full h-64 rounded-lg overflow-hidden">
            <iframe
              title="JS Automotive Edlington - New Edlington, Doncaster DN12 1DJ, UK"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2374.2580400980796!2d-1.1910733!3d53.4817191!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48e8ba4f0f5f8737%3A0x8c8d65d416363105!2sJS%20AUTOMOTIVE%20MOT%20AND%20SERVICE%20CENTER!5e0!3m2!1sen!2slk!4v1769625650434!5m2!1sen!2slk"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FindOurWorkshop;
