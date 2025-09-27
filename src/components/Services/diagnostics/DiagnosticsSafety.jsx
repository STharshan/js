import React from 'react';

const DiagnosticsSafety = () => {
  return (
    <section className="container mx-auto px-6 sm:px-10 lg:px-18 py-16">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Advanced Diagnostic Equipment
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          We use the latest diagnostic technology to quickly identify issues
          and provide accurate solutions.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {/* Engine Diagnostics */}
        <div
          className="bg-white p-8 rounded-xl shadow-md text-center 
                     transition-all duration-300 hover:scale-105
                     hover:shadow-[0_0_25px_#0d9488] active:shadow-[0_0_25px_#0d9488]"
        >
          <div className="flex items-center justify-center mb-6">
            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-teal-100">
              <i className="fas fa-search text-2xl text-teal-600"></i>
            </div>
          </div>
          <h2 className="text-xl font-bold mb-4">Engine Diagnostics</h2>
          <ul className="text-left text-gray-700 space-y-2">
            <li>• Check engine light diagnosis</li>
            <li>• Performance issues</li>
            <li>• Fuel system problems</li>
            <li>• Emission control faults</li>
          </ul>
        </div>

        {/* Electrical Systems */}
        <div
          className="bg-white p-8 rounded-xl shadow-md text-center 
                     transition-all duration-300 hover:scale-105
                     hover:shadow-[0_0_25px_#0d9488] active:shadow-[0_0_25px_#0d9488]"
        >
          <div className="flex items-center justify-center mb-6">
            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-teal-100">
              <i className="fas fa-bolt text-2xl text-teal-600"></i>
            </div>
          </div>
          <h2 className="text-xl font-bold mb-4">Electrical Systems</h2>
          <ul className="text-left text-gray-700 space-y-2">
            <li>• Battery and charging faults</li>
            <li>• Starting system issues</li>
            <li>• Lighting problems</li>
            <li>• Electronic control units</li>
          </ul>
        </div>

        {/* Warning Lights */}
        <div
          className="bg-white p-8 rounded-xl shadow-md text-center 
                     transition-all duration-300 hover:scale-105
                     hover:shadow-[0_0_25px_#0d9488] active:shadow-[0_0_25px_#0d9488]"
        >
          <div className="flex items-center justify-center mb-6">
            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-teal-100">
              <i className="fas fa-exclamation-triangle text-2xl text-teal-600"></i>
            </div>
          </div>
          <h2 className="text-xl font-bold mb-4">Warning Lights</h2>
          <ul className="text-left text-gray-700 space-y-2">
            <li>• ABS warning lights</li>
            <li>• Airbag system faults</li>
            <li>• Traction control issues</li>
            <li>• Dashboard warning lights</li>
          </ul>
        </div>
      </div>

      {/* Diagnostic Process */}
      <div
        className="bg-white p-10 rounded-xl shadow-md text-center 
                   transition-all duration-300 hover:scale-[1.01]
                   hover:shadow-[0_0_25px_#0d9488] active:shadow-[0_0_25px_#0d9488]"
      >
        <h2 className="text-2xl font-semibold mb-8 text-gray-900">
          Our Diagnostic Process
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              step: "1",
              title: "Initial Assessment",
              desc: "We listen to your concerns and perform a visual inspection",
            },
            {
              step: "2",
              title: "Computer Scan",
              desc: "Advanced diagnostic equipment reads fault codes",
            },
            {
              step: "3",
              title: "Analysis",
              desc: "Our experts interpret the data and identify root causes",
            },
            {
              step: "4",
              title: "Report & Quote",
              desc: "Clear explanation of issues and repair options",
            },
          ].map((item, i) => (
            <div key={i} className="text-center">
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-teal-100 mx-auto mb-4 text-xl font-bold text-teal-600">
                {item.step}
              </div>
              <h3 className="font-bold text-lg mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DiagnosticsSafety;
