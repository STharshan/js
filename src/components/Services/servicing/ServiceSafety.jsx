import React from 'react';

const ServiceSafety = () => {
    return (
    <div className="container mx-auto px-4 py-16">
      <h2 className="text-4xl font-semibold text-center mb-8">
        Service Intervals
      </h2>
      <p className="text-center text-lg mb-8">
        Regular servicing keeps your vehicle running efficiently and helps prevent costly breakdowns.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Basic Service */}
        <div className="service-card bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold text-teal-600">Basic Service</h3>
          <p className="text-xl text-teal-500">£120</p>
          <ul className="mt-4 space-y-2">
            <li>• Oil and filter change</li>
            <li>• Fluid level checks</li>
            <li>• Battery test</li>
            <li>• Tyre pressure check</li>
            <li>• Basic safety inspection</li>
          </ul>
        </div>

        {/* Full Service */}
        <div className="service-card bg-teal-100 p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold text-teal-600">Full Service</h3>
          <p className="text-xl text-teal-500">£180</p>
          <p className="text-md text-teal-500 font-medium mt-2">Most Popular</p>
          <ul className="mt-4 space-y-2">
            <li>• Everything in Basic Service</li>
            <li>• Comprehensive inspection</li>
            <li>• Brake system check</li>
            <li>• Suspension inspection</li>
            <li>• Exhaust system check</li>
            <li>• Detailed report</li>
          </ul>
        </div>

        {/* Major Service */}
        <div className="service-card bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold text-teal-600">Major Service</h3>
          <p className="text-xl text-teal-500">£250</p>
          <ul className="mt-4 space-y-2">
            <li>• Everything in Full Service</li>
            <li>• Timing belt inspection</li>
            <li>• Coolant system service</li>
            <li>• Air filter replacement</li>
            <li>• Spark plug check/replace</li>
            <li>• Comprehensive diagnostics</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ServiceSafety;
