import { useState } from "react";
import emailjs from "@emailjs/browser";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const phoneRegex = /^(?:\+44|0)[1-9]\d{8,9}$/;

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

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const handleInputChange = (e) => {
    let { name, value } = e.target;

    // Remove spaces in phone number for clean validation
    if (name === "phone") value = value.replace(/\s+/g, "");

    // Character limits
    if (name === "name" && value.length > 50) return;
    if (name === "make" && value.length > 30) return;
    if (name === "model" && value.length > 30) return;
    if (name === "additionalInfo" && value.length > 300) return;

    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    const newErrors = {};

    if (formData.name.trim().length < 2)
      newErrors.name = "Name must be at least 2 characters";

    if (!emailRegex.test(formData.email))
      newErrors.email = "Enter a valid email address";

    if (!phoneRegex.test(formData.phone))
      newErrors.phone = "Enter a valid UK phone number";

    if (!formData.service)
      newErrors.service = "Please select a service";

    if (formData.make.trim().length < 2)
      newErrors.make = "Vehicle make is required";

    if (!formData.model.trim())
      newErrors.model = "Vehicle model is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validate()) return;

    setLoading(true);
    setSuccessMsg("");
    setErrorMsg("");

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formData,
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
        setErrors({});
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

          <form onSubmit={handleSubmit} noValidate>

            <input
              name="name"
              placeholder="Full Name *"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full p-3 mb-4 border dark:border-white rounded-md dark:text-white"
            />
            {errors.name && <p className="text-red-500 text-sm mb-2">{errors.name}</p>}

            <input
              name="email"
              placeholder="Email Address *"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full p-3 mb-4 border dark:border-white rounded-md dark:text-white"
            />
            {errors.email && <p className="text-red-500 text-sm mb-2">{errors.email}</p>}

            <input
              name="phone"
              placeholder="Phone Number *"
              value={formData.phone}
              onChange={handleInputChange}
              className="w-full p-3 mb-4 border dark:border-white rounded-md dark:text-white"
            />
            {errors.phone && <p className="text-red-500 text-sm mb-2">{errors.phone}</p>}

            <select
              name="service"
              value={formData.service}
              onChange={handleInputChange}
              className="w-full p-3 mb-4 border rounded-md dark:bg-gray-800 dark:text-white dark:border-white"
            >
              <option value="">Select Service *</option>
              <option value="MOT Testing">MOT Testing</option>
              <option value="Full Servicing">Full Servicing</option>
              <option value="Brake Repairs">Brake Repairs</option>
              <option value="Diagnostics">Diagnostics</option>
              <option value="Cam Belt Replacement">Cam Belt Replacement</option>
              <option value="Mechanical Repairs">Mechanical Repairs</option>
            </select>
            {errors.service && <p className="text-red-500 text-sm mb-2">{errors.service}</p>}

            <input
              name="make"
              placeholder="Vehicle Make *"
              value={formData.make}
              onChange={handleInputChange}
              className="w-full p-3 mb-1 border dark:border-white rounded-md dark:text-white"
            />
            {errors.make && <p className="text-red-500 text-sm mb-2">{errors.make}</p>}

            <input
              name="model"
              placeholder="Vehicle Model *"
              value={formData.model}
              onChange={handleInputChange}
              className="w-full p-3 mb-4 border dark:border-white rounded-md dark:text-white"
            />
            {errors.model && <p className="text-red-500 text-sm mb-2">{errors.model}</p>}

            <textarea
              name="additionalInfo"
              rows="4"
              placeholder="Additional Information (max 300 characters)"
              value={formData.additionalInfo}
              onChange={handleInputChange}
              className="w-full p-3 mb-4 border dark:border-white rounded-md dark:text-white"
            />

            {successMsg && <p className="text-green-600 mb-2">{successMsg}</p>}
            {errorMsg && <p className="text-red-600 mb-2">{errorMsg}</p>}

            <button
              disabled={loading}
              className="bg-teal-600 text-white px-6 py-3 rounded-lg w-full hover:bg-teal-700 transition"
            >
              {loading ? "Sending..." : "Send My Free Quote Request"}
            </button>
          </form>
        </div>

        {/* Contact Information Side */}
        <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg shadow-lg transition-colors duration-300">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-4">
            Contact Information
          </h3>

          <div className="mb-4">
            <p className="font-semibold text-gray-700 dark:text-gray-300">Opening Hours</p>
            <p className="text-gray-600 dark:text-gray-400">Mon - Wed: 8:00AM - 5:00PM</p>
            <p className="text-gray-600 dark:text-gray-400">Thu: 8:00AM - 5:30PM</p>
            <p className="text-gray-600 dark:text-gray-400">Fri: 8:00AM - 5:00PM</p>
            <p className="text-gray-600 dark:text-gray-400">Saturday: 8:00AM - 2:00PM</p>
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
