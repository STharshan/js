import React from 'react';

const FindOurWorkshop = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h2 className="text-3xl font-semibold text-center mb-8">Find Our Workshop</h2>
      <p className="text-lg text-center mb-12">Conveniently located in Sheffield with easy access and free customer parking</p>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Left Section: Workshop Location */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-4">Workshop Location</h3>
          <p className="mb-4">Our fully equipped workshop is centrally located in Sheffield, making it easy to reach from all areas of the city and surrounding regions.</p>
          <ul className="list-none space-y-3">
            <li><strong>Easy Access:</strong> Close to major roads and public transport</li>
            <li><strong>Free Parking:</strong> On-site customer parking available</li>
            <li><strong>Facilities:</strong> Comfortable waiting area with refreshments</li>
          </ul>
        </div>

        {/* Right Section: Map */}
        <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-4">Sheffield Workshop</h3>
          <p className="mb-4">Call for exact directions</p>
          <div className="w-full h-64 bg-blue-300 rounded-lg flex items-center justify-center text-white">
            {/* Replace the below with actual map or an image */}
            <span className="text-xl">Map Placeholder</span>
          </div>
        </div>
      </div>

      {/* Bottom Section: Getting Here */}
      <div className="mt-12 bg-white p-6 rounded-lg shadow-lg">
        <h3 className="text-xl font-semibold mb-4">Getting Here</h3>
        <ul className="list-none space-y-3">
          <li><strong>By Car:</strong> Easy access from A57, A61, and M1</li>
          <li><strong>Public Transport:</strong> Bus routes nearby</li>
          <li><strong>Drop-off Service:</strong> Available for local customers</li>
        </ul>
      </div>
    </div>
  );
};

export default FindOurWorkshop;
