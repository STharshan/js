import React from 'react';

const ComServices = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <h2 className="text-3xl font-semibold text-center mb-8">Related Services</h2>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-2">Engine Service</h3>
          <p className="text-orange-500 mb-4">From £180</p>
          <button className="bg-gray-200 text-blue-500 py-2 px-4 rounded-lg hover:bg-blue-500 hover:text-white">
            Learn More &rarr;
          </button>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-2">Water Pump</h3>
          <p className="text-orange-500 mb-4">Quote on inspection</p>
          <button className="bg-gray-200 text-blue-500 py-2 px-4 rounded-lg hover:bg-blue-500 hover:text-white">
            Learn More &rarr;
          </button>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-2">Diagnostics</h3>
          <p className="text-orange-500 mb-4">From £45</p>
          <button className="bg-gray-200 text-blue-500 py-2 px-4 rounded-lg hover:bg-blue-500 hover:text-white">
            Learn More &rarr;
          </button>
        </div>
      </div>
    </div>
  );
};

export default ComServices;
