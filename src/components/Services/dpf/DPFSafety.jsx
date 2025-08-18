import React from 'react';

const DPFSafety = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-semibold text-center mb-8">
        DPF Problems & Solutions
      </h1>
      <p className="text-lg text-center mb-8">
        Diesel Particulate Filter issues are common in modern diesel vehicles. We provide professional cleaning and regeneration services.
      </p>

      <div className="bg-red-100 p-4 rounded-md mb-8">
        <h2 className="text-xl font-semibold text-red-600 mb-4">Signs of DPF Problems</h2>
        <ul className="list-disc list-inside text-lg text-red-600">
          <li>DPF warning light on dashboard</li>
          <li>Reduced engine power (limp mode)</li>
          <li>Increased fuel consumption</li>
          <li>Excessive exhaust smoke</li>
          <li>Strong smell from exhaust</li>
          <li>Engine management light</li>
        </ul>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold text-teal-600 mb-4">Our DPF Services</h3>
          <ul className="list-disc list-inside text-lg">
            <li>Professional DPF cleaning</li>
            <li>Forced regeneration cycles</li>
            <li>DPF replacement if required</li>
            <li>System diagnostics</li>
            <li>System diagnostics</li>
            <li>Post-service testing</li>
          </ul>
        </div>

        {/* Diagnostic Process */}
        <div className="bg-white p-6 rounded-lg shadow-lg text-center col-span-1 md:col-span-2 lg:col-span-4">
          <h2 className="text-2xl font-semibold mb-6">DPF Cleaning Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Steps */}
            <div className="text-center">
              <div className="text-4xl text-teal-500 mb-4">1</div>
              <h3 className="font-bold text-xl mb-2">Diagnosis</h3>
              <p>Computer diagnostic to assess DPF condition and fault codes</p>
            </div>

            <div className="text-center">
              <div className="text-4xl text-teal-500 mb-4">2</div>
              <h3 className="font-bold text-xl mb-2">Cleaning</h3>
              <p>Professional cleaning or forced regeneration to clear blockages</p>
            </div>

            <div className="text-center">
              <div className="text-4xl text-teal-500 mb-4">3</div>
              <h3 className="font-bold text-xl mb-2">Testing</h3>
              <p>Road test and system verification to ensure proper operation</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DPFSafety;
