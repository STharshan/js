import React from 'react';

const MechanicalSafety = () => {
   return (
    <div className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900">Common Repairs We Handle</h2>
        <p className="text-lg text-gray-500 mt-2">
          From minor fixes to major overhauls, our experienced mechanics can handle all types of mechanical issues.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <div className="flex items-center justify-center mb-4">
            <svg className="w-12 h-12 text-teal-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5h18M3 19h18M3 12h18M3 9h18" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-center">Engine Repairs</h3>
          <ul className="mt-4 text-gray-600">
            <li>Engine diagnostics</li>
            <li>Head gasket replacement</li>
            <li>Timing belt/chain issues</li>
            <li>Cooling system repairs</li>
            <li>Oil leak repairs</li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg">
          <div className="flex items-center justify-center mb-4">
            <svg className="w-12 h-12 text-teal-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 14l-2 2-2-2m2-6h6a2 2 0 012 2v12a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6m2 0V3a2 2 0 00-2-2H9a2 2 0 00-2 2v3" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-center">Transmission</h3>
          <ul className="mt-4 text-gray-600">
            <li>Clutch replacement</li>
            <li>Gearbox repairs</li>
            <li>CV joint replacement</li>
            <li>Driveshaft repairs</li>
            <li>Automatic transmission service</li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg">
          <div className="flex items-center justify-center mb-4">
            <svg className="w-12 h-12 text-teal-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12V4a3 3 0 00-3-3h-3a3 3 0 00-3 3v8M19 9l-7 7-7-7" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-center">Electrical</h3>
          <ul className="mt-4 text-gray-600">
            <li>Alternator replacement</li>
            <li>Starter motor repairs</li>
            <li>Wiring fault diagnosis</li>
            <li>Battery replacement</li>
            <li>Lighting system repairs</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MechanicalSafety;
