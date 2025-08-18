import React from 'react';
import { FaShieldAlt, FaClock, FaRibbon, FaUser, FaWrench, FaCheckCircle } from 'react-icons/fa'; // Importing icons from react-icons

const services = [
  {
    title: 'Fully Insured & Certified',
    description: 'All work is fully guaranteed with comprehensive insurance coverage for your peace of mind.',
    icon: <FaShieldAlt size={40} />,
  },
  {
    title: 'Fast Turnaround',
    description: 'Most services completed same day. We respect your time and get you back on the road quickly.',
    icon: <FaClock size={40} />,
  },
  {
    title: '15+ Years Experience',
    description: 'Decades of automotive expertise working on all makes and models of vehicles.',
    icon: <FaRibbon size={40} />,
  },
  {
    icon: <FaUser />,
    title: "Trusted by 500+ Customers",
    description: "Building lasting relationships through honest service and transparent pricing."
  },
  {
    icon: <FaWrench />,
    title: "Latest Equipment",
    description: "State-of-the-art diagnostic tools and equipment for accurate, efficient repairs."
  },
  {
    icon: <FaCheckCircle />,
    title: "No Hidden Costs",
    description: "Transparent pricing with detailed quotes. You only pay for what you need."
  }
];

const WhyChooseJSAutomotive = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto text-center px-4">
        <h2 className="text-3xl font-semibold mb-6">Why Choose JS Automotive?</h2>
        <p className="text-xl mb-12">We're your trusted automotive partner, committed to keeping you safe on the road with honest, professional service.</p>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center">
              <div className="mb-4 bg-teal-200 rounded-full p-3">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseJSAutomotive;
