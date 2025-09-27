import React, { useState } from 'react';

const QuoteForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    make: '',
    model: '',
    additionalInfo: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* ✅ Quote Form */}
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Get Your Free Quote</h2>
          <p className="text-gray-600 mb-8">
            Fill out the form below and we’ll get back to you with a detailed quote.
          </p>

          <form action="#">
            {/* Full Name */}
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-semibold text-gray-700">
                Full Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full p-3 border border-gray-300 rounded-md mt-2 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </div>

            {/* Email */}
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-semibold text-gray-700">
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full p-3 border border-gray-300 rounded-md mt-2 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>

            {/* Phone */}
            <div className="mb-4">
              <label htmlFor="phone" className="block text-sm font-semibold text-gray-700">
                Phone Number *
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                className="w-full p-3 border border-gray-300 rounded-md mt-2 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none"
                value={formData.phone}
                onChange={handleInputChange}
                required
              />
            </div>

            {/* Service Required */}
            <div className="mb-4">
              <label htmlFor="service" className="block text-sm font-semibold text-gray-700">
                Service Required *
              </label>
              <select
                id="service"
                name="service"
                className="w-full p-3 border border-gray-300 rounded-md mt-2 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none"
                value={formData.service}
                onChange={handleInputChange}
                required
              >
                <option value="">Select the service you need</option>
                <option value="MOT Testing">MOT Testing</option>
                <option value="Full Servicing">Full Servicing</option>
                <option value="Brake Repairs">Brake Repairs</option>
                <option value="Diagnostic">Diagnostics</option>
                <option value="Cam Belt Replacement">Cam Belt Replacement</option>
                <option value="Mechanical Repairs">Mechanical Repairs</option>
              </select>
            </div>

            {/* Make */}
            <div className="mb-4">
              <label htmlFor="make" className="block text-sm font-semibold text-gray-700">
                Make *
              </label>
              <input
                type="text"
                id="make"
                name="make"
                className="w-full p-3 border border-gray-300 rounded-md mt-2 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none"
                value={formData.make}
                onChange={handleInputChange}
                placeholder="e.g., Ford, BMW, Toyota"
                required
              />
            </div>

            {/* Model */}
            <div className="mb-4">
              <label htmlFor="model" className="block text-sm font-semibold text-gray-700">
                Model *
              </label>
              <input
                type="text"
                id="model"
                name="model"
                className="w-full p-3 border border-gray-300 rounded-md mt-2 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none"
                value={formData.model}
                onChange={handleInputChange}
                placeholder="e.g., Focus, 3 Series, etc."
                required
              />
            </div>

            {/* Additional Info */}
            <div className="mb-4">
              <label htmlFor="additionalInfo" className="block text-sm font-semibold text-gray-700">
                Additional Information
              </label>
              <textarea
                id="additionalInfo"
                name="additionalInfo"
                className="w-full p-3 border border-gray-300 rounded-md mt-2 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none"
                value={formData.additionalInfo}
                onChange={handleInputChange}
                rows="4"
              ></textarea>
            </div>

            {/* ✅ Submit Button with Teal Color */}
            <div className="flex justify-center mb-3">
              <button
                type="submit"
                className="
                  bg-teal-600 text-white px-6 py-3 rounded-lg 
                  hover:bg-teal-700 active:bg-teal-800
                  transition-all duration-300 shadow-md
                "
              >
                Send My Free Quote Request
              </button>
            </div>

            <p className="text-sm text-center text-gray-500">
              We’ll respond within 24 hours with a detailed quote.
            </p>
          </form>
        </div>

        {/* ✅ Contact Information Side */}
        <div className="bg-gray-50 p-8 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Contact Information</h3>

          <div className="mb-4">
            <p className="font-semibold text-gray-700">Opening Hours</p>
            <p className="text-gray-600">Monday - Friday: 8:00 AM - 6:00 PM</p>
            <p className="text-gray-600">Saturday: 8:00 AM - 4:00 PM</p>
            <p className="text-gray-600">Sunday: Closed</p>
          </div>

          <div className="mb-4">
            <p className="font-semibold text-gray-700">Services We Offer</p>
            <ul className="text-gray-600 list-disc list-inside">
              <li>MOT Testing</li>
              <li>Full Servicing</li>
              <li>Brake Repairs</li>
              <li>Diagnostics</li>
              <li>Cam Belt Replacement</li>
              <li>Mechanical Repairs</li>
            </ul>
          </div>

          <div className="mb-4">
            <p className="font-semibold text-gray-700">Emergency Breakdown</p>
            <p className="text-red-500">
              If you’re experiencing a breakdown or urgent automotive issue, call us immediately at:
            </p>
            <p className="text-teal-600 font-semibold">01709 863222</p>
          </div>

          <div className="mt-8">
            <h4 className="text-lg font-semibold text-gray-800">What to Expect</h4>
            <ul className="text-gray-600 mt-2 list-disc list-inside">
              <li>Free Quote</li>
              <li>Expert Service</li>
              <li>Quality Guarantee</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuoteForm;
