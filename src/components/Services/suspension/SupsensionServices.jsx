import React from "react";
import { Link } from "react-router-dom";

const SupsensionServices = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <h2 className="text-3xl font-semibold text-center mb-8">Related Services</h2>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

        {/* Wheel Alignment */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-2">Wheel Alignment</h3>
          <p className="text-orange-500 mb-4">From £45</p>
          <Link
            to="/services/suspension"
            className="inline-block bg-gray-200 text-blue-500 py-2 px-4 rounded-lg hover:bg-blue-500 hover:text-white"
          >
            Learn More &rarr;
          </Link>
        </div>

        {/* Brake Service */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-2">Brake Service</h3>
          <p className="text-orange-500 mb-4">From £80</p>
          <Link
            to="/services/brake"
            className="inline-block bg-gray-200 text-blue-500 py-2 px-4 rounded-lg hover:bg-blue-500 hover:text-white"
          >
            Learn More &rarr;
          </Link>
        </div>

        {/* MOT Test */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-2">MOT Test</h3>
          <p className="text-orange-500 mb-4">From £35</p>
          <Link
            to="/services/mot"
            className="inline-block bg-gray-200 text-blue-500 py-2 px-4 rounded-lg hover:bg-blue-500 hover:text-white"
          >
            Learn More &rarr;
          </Link>
        </div>

      </div>
    </div>
  );
};

export default SupsensionServices;
