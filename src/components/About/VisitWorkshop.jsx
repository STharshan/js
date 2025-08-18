import React from 'react';

const VisitWorkshop = () => {
  return (
    <div className="py-10 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-8">Visit Our Workshop</h2>
        <p className="text-xl mb-8">Conveniently located in Sheffield with easy access and customer parking available</p>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Left Side - Location, Hours, Contact */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-semibold">Our Location</h3>
              <p className="text-lg">
                Centrally located in Sheffield with easy access from all major routes. Free customer parking available on-site.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold">Opening Hours</h3>
              <p className="text-lg">
                Monday - Friday: 8:00 AM - 6:00 PM
                <br />
                Saturday: 8:00 AM - 4:00 PM
                <br />
                Sunday: Closed
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold">Contact Information</h3>
              <p className="text-lg">
                Phone: 01709 863222
                <br />
                Email: Js.automotive1@outlook.com
              </p>
            </div>
          </div>

          {/* Right Side - Image/Map */}
          <div className="bg-gray-200 h-60">
            <img src="empty1.svg" alt="Workshop Location" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisitWorkshop;
