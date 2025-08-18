import React from 'react';

const DiagnosticsSafety = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-semibold text-center mb-10">Advanced Diagnostic Equipment</h1>
      <p className="text-center text-lg mb-12">We use the latest diagnostic technology to quickly identify issues and provide accurate solutions.</p>

      <div className="flex grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 justify-center items-center mx-auto">
        {/* Engine Diagnostics */}
        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
          <div className="text-4xl text-teal-500 mb-4">
            <i className="fas fa-search"></i>
          </div>
          <h2 className="text-xl font-bold mb-4">Engine Diagnostics</h2>
          <ul className="text-left">
            <li>• Check engine light diagnosis</li>
            <li>• Performance issues</li>
            <li>• Fuel system problems</li>
            <li>• Emission control faults</li>
          </ul>
        </div>

        {/* Electrical Systems */}
        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
          <div className="text-4xl text-teal-500 mb-4">
            <i className="fas fa-bolt"></i>
          </div>
          <h2 className="text-xl font-bold mb-4">Electrical Systems</h2>
          <ul className="text-left">
            <li>• Battery and charging faults</li>
            <li>• Starting system issues</li>
            <li>• Lighting problems</li>
            <li>• Electronic control units</li>
          </ul>
        </div>

        {/* Warning Lights */}
        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
          <div className="text-4xl text-teal-500 mb-4">
            <i className="fas fa-exclamation-triangle"></i>
          </div>
          <h2 className="text-xl font-bold mb-4">Warning Lights</h2>
          <ul className="text-left">
            <li>• ABS warning lights</li>
            <li>• Airbag system faults</li>
            <li>• Traction control issues</li>
            <li>• Dashboard warning lights</li>
          </ul>
        </div>
      </div>

      {/* Diagnostic Process */}
      <div className="bg-white p-6 rounded-lg shadow-lg text-center col-span-1 md:col-span-2 lg:col-span-4">
        <h2 className="text-2xl font-semibold mb-6">Our Diagnostic Process</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Steps */}
          <div className="text-center">
            <div className="text-4xl text-teal-500 mb-4">1</div>
            <h3 className="font-bold text-xl mb-2">Initial Assessment</h3>
            <p>We listen to your concerns and perform a visual inspection</p>
          </div>

          <div className="text-center">
            <div className="text-4xl text-teal-500 mb-4">2</div>
            <h3 className="font-bold text-xl mb-2">Computer Scan</h3>
            <p>Advanced diagnostic equipment reads fault codes</p>
          </div>

          <div className="text-center">
            <div className="text-4xl text-teal-500 mb-4">3</div>
            <h3 className="font-bold text-xl mb-2">Analysis</h3>
            <p>Our experts interpret the data and identify root causes</p>
          </div>

          <div className="text-center">
            <div className="text-4xl text-teal-500 mb-4">4</div>
            <h3 className="font-bold text-xl mb-2">Report & Quote</h3>
            <p>Clear explanation of issues and repair options</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DiagnosticsSafety;
