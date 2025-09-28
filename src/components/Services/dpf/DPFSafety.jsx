import React from 'react';

const DPFSafety = () => {
  const touchStart = () => {};

  return (
    <section className="container mx-auto px-6 sm:px-10 lg:px-18 py-16 bg-white dark:bg-[#0B1322] transition-colors duration-300">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
          DPF Problems & Solutions
        </h1>
        <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
          Diesel Particulate Filter issues are common in modern diesel vehicles. 
          We provide professional cleaning and regeneration services.
        </p>
      </div>

      {/* Warning Signs */}
      <div className="bg-red-100 dark:bg-red-950 p-6 sm:p-8 rounded-xl mb-12">
        <h2 className="text-xl font-semibold text-red-600 dark:text-red-400 mb-4">
          Signs of DPF Problems
        </h2>
        <ul className="list-disc list-inside text-lg text-red-600 dark:text-red-300 space-y-2">
          <li>DPF warning light on dashboard</li>
          <li>Reduced engine power (limp mode)</li>
          <li>Increased fuel consumption</li>
          <li>Excessive exhaust smoke</li>
          <li>Strong smell from exhaust</li>
          <li>Engine management light</li>
        </ul>
      </div>

      {/* Services + Process */}
      <div className="grid md:grid-cols-2 gap-10">
        {/* Our DPF Services */}
        <div
          role="button"
          tabIndex={0}
          onTouchStart={touchStart}
          className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-md 
                     transition-all duration-300 cursor-pointer select-none
                     hover:scale-105 hover:shadow-[0_0_25px_#0d9488] 
                     active:shadow-[0_0_25px_#0d9488]"
        >
          <h3 className="text-2xl font-semibold text-teal-600 dark:text-teal-400 mb-6">
            Our DPF Services
          </h3>
          <ul className="list-disc list-inside text-lg text-gray-700 dark:text-gray-300 space-y-2">
            <li>Professional DPF cleaning</li>
            <li>Forced regeneration cycles</li>
            <li>DPF replacement if required</li>
            <li>System diagnostics</li>
            <li>Post-service testing</li>
          </ul>
        </div>

        {/* Cleaning Process */}
        <div
          role="button"
          tabIndex={0}
          onTouchStart={touchStart}
          className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-md text-center 
                     transition-all duration-300 cursor-pointer select-none
                     hover:scale-105 hover:shadow-[0_0_25px_#0d9488] 
                     active:shadow-[0_0_25px_#0d9488]"
        >
          <h2 className="text-2xl font-semibold mb-8 text-gray-900 dark:text-white">
            DPF Cleaning Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div>
              <div className="text-4xl text-teal-500 dark:text-teal-400 mb-4">1</div>
              <h3 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">Diagnosis</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Computer diagnostic to assess DPF condition and fault codes
              </p>
            </div>
            {/* Step 2 */}
            <div>
              <div className="text-4xl text-teal-500 dark:text-teal-400 mb-4">2</div>
              <h3 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">Cleaning</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Professional cleaning or forced regeneration to clear blockages
              </p>
            </div>
            {/* Step 3 */}
            <div>
              <div className="text-4xl text-teal-500 dark:text-teal-400 mb-4">3</div>
              <h3 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">Testing</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Road test and system verification to ensure proper operation
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DPFSafety;
