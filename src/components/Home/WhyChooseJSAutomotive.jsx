import React, { useEffect } from 'react';
import { FiAward, FiCheckCircle, FiUsers } from 'react-icons/fi';
import { LuClock4, LuShield, LuWrench } from 'react-icons/lu';
import AOS from 'aos';
import 'aos/dist/aos.css';

const services = [
  {
    title: 'Fully Insured & Certified',
    description:
      'All work is fully guaranteed with comprehensive insurance coverage for your peace of mind.',
    icon: <LuShield size={30} />,
  },
  {
    title: 'Fast Turnaround',
    description:
      'Most services completed same day. We respect your time and get you back on the road quickly.',
    icon: <LuClock4 size={30} />,
  },
  {
    title: '15+ Years Experience',
    description:
      'Decades of automotive expertise working on all makes and models of vehicles.',
    icon: <FiAward size={30} />,
  },
  {
    icon: <FiUsers size={30} />,
    title: 'Trusted by 500+ Customers',
    description:
      'Building lasting relationships through honest service and transparent pricing.',
  },
  {
    icon: <LuWrench size={30} />,
    title: 'Latest Equipment',
    description:
      'State-of-the-art diagnostic tools and equipment for accurate, efficient repairs.',
  },
  {
    icon: <FiCheckCircle size={30} />,
    title: 'No Hidden Costs',
    description:
      'Transparent pricing with detailed quotes. You only pay for what you need.',
  },
];

const WhyChooseJSAutomotive = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: false }); // animate every scroll up/down
  }, []);

  return (
    <section className="py-16 bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto text-center px-4">
        <h2
          className="text-4xl font-semibold mb-6 text-gray-900 dark:text-gray-100"
          data-aos="fade-down"
        >
          Why Choose JS Automotive?
        </h2>
        <p
          className="text-xl max-w-4xl mx-auto mb-12 text-gray-800 dark:text-gray-300"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          We're not just another garage. We're your trusted automotive partner,
          committed to keeping you safe on the road with honest, professional
          service.
        </p>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              data-aos={index % 2 === 0 ? 'fade-up' : 'fade-down'}
              data-aos-delay={index * 100}
              className="
                bg-white dark:bg-gray-800 
                p-6 rounded-lg shadow-md border border-gray-300 dark:border-gray-700 
                flex flex-col items-center
                transform transition duration-300
                hover:scale-105 hover:shadow-[0_0_25px_#00BFA5]
                active:shadow-[0_0_25px_#00BFA5]
              "
            >
              <div className="mb-4 bg-teal-100 dark:bg-teal-900 text-teal-800 dark:text-teal-400 rounded-full p-3">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-5 text-gray-800 dark:text-gray-200">
                {service.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseJSAutomotive;
