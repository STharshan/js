import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const QuoteForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    make: "",
    model: "",
    additionalInfo: "",
  });

  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccessMsg("");
    setErrorMsg("");

    // Use environment variables here
    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          service: formData.service,
          make: formData.make,
          model: formData.model,
          additionalInfo: formData.additionalInfo,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setSuccessMsg("Your quote request has been sent successfully!");
        setFormData({
          name: "",
          email: "",
          phone: "",
          service: "",
          make: "",
          model: "",
          additionalInfo: "",
        });
      })
      .catch(() => {
        setErrorMsg("Failed to send request. Please try again.");
      })
      .finally(() => setLoading(false));
  };
  return (
    <div className="mx-auto px-4 sm:px-6 lg:px-8 py-8 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

        {/* ================= FORM ================= */}
        <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4">
            Get Your Free Quote
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Fill out the form and we’ll get back to you shortly.
          </p>

          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Full Name *"
              className="w-full p-3 mb-4 border dark:border-white focus:outline-none focus:ring-2 focus:ring-teal-500 dark:text-white rounded-md"
              value={formData.name}
              onChange={handleInputChange}
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address *"
              className="w-full p-3 mb-4 border dark:border-white focus:outline-none focus:ring-2 focus:ring-teal-500 dark:text-white rounded-md"
              value={formData.email}
              onChange={handleInputChange}
              required
            />

            <input
              type="tel"
              name="phone"
              placeholder="Phone Number *"
              className="w-full p-3 mb-4 border focus:outline-none focus:ring-2 focus:ring-teal-500 dark:border-white dark:text-white rounded-md"
              value={formData.phone}
              onChange={handleInputChange}
              required
            />

            <select
              name="service"
              value={formData.service}
              onChange={handleInputChange}
              required
              className="
    w-full p-3 mb-4 rounded-md border
    bg-white text-gray-900
    dark:bg-gray-800 dark:text-white dark:border-white
    focus:outline-none focus:ring-2 focus:ring-teal-500
  "
            >
              <option value="" className="text-gray-500">
                Select Service *
              </option>
              <option value="MOT Testing">MOT Testing</option>
              <option value="Full Servicing">Full Servicing</option>
              <option value="Brake Repairs">Brake Repairs</option>
              <option value="Diagnostics">Diagnostics</option>
              <option value="Cam Belt Replacement">Cam Belt Replacement</option>
              <option value="Mechanical Repairs">Mechanical Repairs</option>
            </select>

            <input
              type="text"
              name="make"
              placeholder="Vehicle Make *"
              className="w-full p-3 mb-4 border dark:border-white focus:outline-none focus:ring-2 focus:ring-teal-500 dark:text-white rounded-md"
              value={formData.make}
              onChange={handleInputChange}
              required
            />

            <input
              type="text"
              name="model"
              placeholder="Vehicle Model *"
              className="w-full p-3 mb-4 border dark:border-white focus:outline-none focus:ring-2 focus:ring-teal-500 dark:text-white rounded-md"
              value={formData.model}
              onChange={handleInputChange}
              required
            />

            <textarea
              name="additionalInfo"
              placeholder="Additional Information"
              rows="4"
              className="w-full p-3 mb-4 border dark:border-white focus:outline-none focus:ring-2 focus:ring-teal-500 dark:text-white rounded-md"
              value={formData.additionalInfo}
              onChange={handleInputChange}
            />

            {successMsg && (
              <p className="text-green-600 text-sm mb-3">{successMsg}</p>
            )}
            {errorMsg && (
              <p className="text-red-600 text-sm mb-3">{errorMsg}</p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="bg-teal-600 text-white px-6 py-3 rounded-lg w-full hover:bg-teal-700 transition"
            >
              {loading ? "Sending..." : "Send My Free Quote Request"}
            </button>
            <p className="text-sm text-center text-gray-500 mt-4 dark:text-gray-400">
              By submitting this form, you agree to us processing your details to respond to your enquiry. Your information is handled securely and in line with our Privacy Policy.
            </p>
          </form>
        </div>

        {/* Contact Information Side */}
        <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg shadow-lg transition-colors duration-300">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-4">
            Contact Information
          </h3>

          <div className="mb-4">
            <p className="font-semibold text-gray-700 dark:text-gray-300">Opening Hours</p>
            <p className="text-gray-600 dark:text-gray-400">Monday - Friday: 8:00 AM - 6:00 PM</p>
            <p className="text-gray-600 dark:text-gray-400">Saturday: 8:00 AM - 4:00 PM</p>
            <p className="text-gray-600 dark:text-gray-400">Sunday: Closed</p>
          </div>

          <div className="mb-4">
            <p className="font-semibold text-gray-700 dark:text-gray-300">Services We Offer</p>
            <ul className="text-gray-600 dark:text-gray-400 list-disc list-inside">
              <li>MOT Testing</li>
              <li>Full Servicing</li>
              <li>Brake Repairs</li>
              <li>Diagnostics</li>
              <li>Cam Belt Replacement</li>
              <li>Mechanical Repairs</li>
            </ul>
          </div>

          <div className="mb-4">
            <p className="font-semibold text-gray-700 dark:text-gray-300">Emergency Breakdown</p>
            <p className="text-red-500">
              If you’re experiencing a breakdown or urgent automotive issue, call us immediately at:
            </p>
            <p className="text-teal-600 dark:text-teal-400 font-semibold">+44 1709 863222</p>
          </div>

          <div className="mt-8">
            <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-100">What to Expect</h4>
            <ul className="text-gray-600 dark:text-gray-400 mt-2 list-disc list-inside">
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
