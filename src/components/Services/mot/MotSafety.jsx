import React from 'react';

const MotSafety = () => {
  return (
    <div className=" min-h-screen flex flex-col items-center py-8 px-4">
      <div className=" w-full max-w-4xl rounded-lg p-8">
        {/* Title */}
        <h1 className="text-3xl font-semibold text-center mb-6">
          MOT Test Information
        </h1>
        <p className="text-lg text-center mb-8">
          Your MOT certificate is legally required for vehicles over 3 years
          old. We provide comprehensive testing with detailed reports.
        </p>

        {/* Test Result Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-8">
          <div className="flex flex-col items-center bg-green-100 p-6 rounded-lg shadow-lg">
            <div className="bg-green-500 text-white p-4 rounded-full mb-4">
              <i className="fas fa-check text-4xl"></i>
            </div>
            <h3 className="text-xl font-semibold text-center">Pass</h3>
            <p className="text-center text-sm text-gray-600">
              Your vehicle meets all safety and environmental standards.
              Certificate issued immediately.
            </p>
          </div>

          <div className="flex flex-col items-center bg-yellow-100 p-6 rounded-lg shadow-lg">
            <div className="bg-yellow-500 text-white p-4 rounded-full mb-4">
              <i className="fas fa-exclamation-circle text-4xl"></i>
            </div>
            <h3 className="text-xl font-semibold text-center">Advisory</h3>
            <p className="text-center text-sm text-gray-600">
              Minor issues noted that should be monitored. Certificate still
              issued with advisory notes.
            </p>
          </div>

          <div className="flex flex-col items-center bg-red-100 p-6 rounded-lg shadow-lg">
            <div className="bg-red-500 text-white p-4 rounded-full mb-4">
              <i className="fas fa-times-circle text-4xl"></i>
            </div>
            <h3 className="text-xl font-semibold text-center">Fail</h3>
            <p className="text-center text-sm text-gray-600">
              Safety issues found that must be fixed. We can repair and retest
              the same day in most cases.
            </p>
          </div>
        </div>

        {/* Test Categories */}
        <div>
          <h3 className="text-xl font-semibold mb-4">What We Test</h3>

          {/* Safety Systems & Vehicle Condition */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-lg mb-2">Safety Systems</h4>
              <ul className="list-disc pl-5 text-sm text-gray-600">
                <li>Brakes and handbrake</li>
                <li>Steering and suspension</li>
                <li>Tyres and wheels</li>
                <li>Seat belts</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-2">Vehicle Condition</h4>
              <ul className="list-disc pl-5 text-sm text-gray-600">
                <li>Lights and electrical systems</li>
                <li>Mirrors and windscreen</li>
                <li>Exhaust and emissions</li>
                <li>Body and structure</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MotSafety;
