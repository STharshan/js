import React from 'react';
import { FaShieldAlt, FaClock, FaTrophy, FaUsers, FaTools, FaCheckCircle } from 'react-icons/fa';

const WhyChooseUs = () => {
  const cardData = [
    {
      icon: <FaShieldAlt size={40} className="text-teal-500" />,
      bgColor: "bg-teal-200",
      title: 'Fully Insured & Certified',
      description:
        "All work is fully guaranteed with comprehensive insurance coverage. We're DVSA approved for MOT testing and hold all necessary certifications for professional automotive repair."
    },
    {
      icon: <FaClock size={40} className="text-teal-500" />,
      bgColor: "bg-orange-200",
      title: 'Fast Turnaround',
      description:
        'Most services completed same day. We understand your time is valuable and work efficiently to get you back on the road quickly without compromising on quality.'
    },
    {
      icon: <FaTrophy size={40} className="text-teal-500" />,
      bgColor: "bg-yellow-200",
      title: '15+ Years Experience',
      description:
        "Decades of automotive expertise working on all makes and models. Our experience means we can quickly diagnose issues and provide effective, long-lasting solutions."
    },
    {
      icon: <FaUsers size={40} className="text-orange-500" />,
      title: 'Trusted by 500+ Customers',
      description:
        'Building lasting relationships through honest service and transparent pricing. Our customers return to us year after year and recommend us to their friends and family.',
    },
    {
      icon: <FaTools size={40} className="text-orange-500" />,
      title: 'Latest Equipment',
      description:
        'State-of-the-art diagnostic tools and equipment for accurate, efficient repairs. We invest in the latest technology to provide the best possible service for modern vehicles.',
    },
    {
      icon: <FaCheckCircle size={40} className="text-orange-500" />,
      title: 'No Hidden Costs',
      description:
        'Transparent pricing with detailed quotes before any work begins. You only pay for what you need, and we\'ll always explain what we\'re doing and why it\'s necessary.',
    },
  ];

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-semibold text-gray-900 mb-8">Why Choose JS Automotive?</h2>
        <p className="text-lg text-gray-600 mb-12">
          We're not just another garage. We're your trusted automotive partner, committed to keeping you safe on the road.
        </p>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {cardData.map((card, index) => (
            <div
              key={index}
              className="
                bg-white p-8 rounded-xl shadow-md text-left
                transition-all duration-300
                hover:shadow-[0_0_25px_#00BFA5]
                active:shadow-[0_0_25px_#00BFA5]
                hover:scale-105
              "
            >
              <div className="flex mb-6">
                <div className={`${card.bgColor || "bg-gray-200"} rounded-full p-3`}>
                  {card.icon}
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">{card.title}</h3>
              <p className="text-gray-600">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
