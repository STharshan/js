import React from "react";
import { Link } from "react-router-dom"; // Import Link

const MotServices = () => {
  return (
    <div className="container mx-auto px-6 sm:px-8 lg:px-18 py-16">
      <h2 className="text-3xl font-semibold text-center mb-8">Related Services</h2>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        
        {/* MOT Test */}
        <div
          className="
            bg-white p-6 rounded-lg shadow-md 
            transition-all duration-300
            hover:shadow-[0_0_25px_#00BFA5]
            active:shadow-[0_0_25px_#00BFA5]
          "
        >
          <h3 className="text-xl font-semibold mb-2">MOT Test</h3>
          <p className="text-orange-500 mb-4">From £35</p>
          <Link
            to="/services/mot"
            className="
              block bg-teal-500 text-white py-2 px-4 rounded-lg text-center
              hover:bg-teal-600 active:bg-teal-700
              transition-all duration-300
            "
          >
            Learn More →
          </Link>
        </div>

        {/* Suspension */}
        <div
          className="
            bg-white p-6 rounded-lg shadow-md 
            transition-all duration-300
            hover:shadow-[0_0_25px_#00BFA5]
            active:shadow-[0_0_25px_#00BFA5]
          "
        >
          <h3 className="text-xl font-semibold mb-2">Suspension</h3>
          <p className="text-orange-500 mb-4">From £120</p>
          <Link
            to="/services/suspension"
            className="
              block bg-teal-500 text-white py-2 px-4 rounded-lg text-center
              hover:bg-teal-600 active:bg-teal-700
              transition-all duration-300
            "
          >
            Learn More →
          </Link>
        </div>

        {/* Diagnostics */}
        <div
          className="
            bg-white p-6 rounded-lg shadow-md 
            transition-all duration-300
            hover:shadow-[0_0_25px_#00BFA5]
            active:shadow-[0_0_25px_#00BFA5]
          "
        >
          <h3 className="text-xl font-semibold mb-2">Diagnostics</h3>
          <p className="text-orange-500 mb-4">From £45</p>
          <Link
            to="/services/diagnostics"
            className="
              block bg-teal-500 text-white py-2 px-4 rounded-lg text-center
              hover:bg-teal-600 active:bg-teal-700
              transition-all duration-300
            "
          >
            Learn More →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MotServices;
