import React, { useEffect } from 'react';
import { AiOutlineDashboard } from 'react-icons/ai';
import { FaSearch } from 'react-icons/fa';
import { HiOutlineBolt } from 'react-icons/hi2';
import { IoCog } from 'react-icons/io5';
import { LiaCarSideSolid } from 'react-icons/lia';
import { LuFilter, LuWrench } from 'react-icons/lu';
import { SiTarget } from 'react-icons/si';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

const services = [
  { name: 'MOT Testing', price: 'From £35', description: 'Comprehensive MOT tests with detailed reports and advice on any issues found.', icon: <LiaCarSideSolid size={30} />, path: '/services/mot' },
  { name: 'Full Servicing', price: 'From £120', description: 'Complete vehicle servicing to manufacturer specifications and beyond.', icon: <LuWrench size={30} />, path: '/services/servicing' },
  { name: 'Mechanical Repairs', price: 'Quote on inspection', description: 'Expert diagnosis and repair of all mechanical issues, big or small.', icon: <IoCog size={30} />, path: '/services/mechanical-repairs' },
  { name: 'Brake Services', price: 'From £80', description: 'Brake pad replacement, disc machining, and complete brake system overhauls.', icon: <SiTarget size={30} />, path: '/services/brake' },
  { name: 'Diagnostics', price: 'From £45', description: 'Advanced computer diagnostics to identify and resolve complex issues.', icon: <FaSearch size={30} />, path: '/services/diagnostics' },
  { name: 'DPF Cleaning', price: 'From £150', description: 'Professional DPF cleaning and regeneration services for diesel vehicles.', icon: <LuFilter size={30} />, path: '/services/dpf-clean' },
  { name: 'Cam Belt Replacement', price: 'From £280', description: 'Timing belt replacement and engine timing services to prevent costly damage.', icon: <HiOutlineBolt size={30} />, path: '/services/cam-belt' },
  { name: 'Suspension Work', price: 'From £120', description: 'Shock absorber replacement, spring repairs, and suspension geometry.', icon: <AiOutlineDashboard size={30} />, path: '/services/suspension' },
];

const ExpertServices = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
  }, []);

  return (
    <section className="py-16 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2
          className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-8"
          data-aos="fade-down"
        >
          Our Expert Services
        </h2>
        <p
          className="text-xl text-gray-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          From routine maintenance to complex repairs, we provide comprehensive
          automotive services with transparent pricing and expert craftsmanship.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              data-aos={index % 2 === 0 ? 'fade-up' : 'fade-down'}
              data-aos-delay={index * 100}
              className="
                bg-gray-50 dark:bg-gray-800 
                p-6 rounded-lg shadow-md 
                hover:shadow-[0_0_25px_#00BFA5] hover:scale-105 
                active:shadow-[0_0_25px_#00BFA5]
                transition-all duration-300 cursor-pointer
                flex flex-col h-full
              "
            >
              {/* Icon */}
              <div className="flex justify-center text-teal-800 dark:text-teal-400 mb-4">
                <div className="bg-teal-100 dark:bg-teal-900 rounded-full p-4">
                  {service.icon}
                </div>
              </div>

              {/* Title & Price */}
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
                {service.name}
              </h3>
              <p className="text-lg font-semibold text-orange-500">
                {service.price}
              </p>

              {/* Description expands to push button down */}
              <p className="text-gray-500 dark:text-gray-400 mb-4 mt-5 flex-grow">
                {service.description}
              </p>

              {/* Learn More Button pinned bottom */}
              <div className="mt-auto">
                <Link
                  to={service.path}
                  className="inline-block py-1 px-16 border border-gray-300 dark:border-gray-600 rounded-md hover:bg-orange-500 hover:text-white cursor-pointer transition"
                >
                  Learn More
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-8" data-aos="zoom-in">
          <Link
            to="/contact"
            className="bg-teal-600 text-white px-6 py-2 rounded-md hover:bg-teal-500 transition duration-300"
          >
            Get Your Free Quote Today
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ExpertServices;
