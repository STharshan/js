import React from 'react';
import { FaCar, FaWrench, FaCog, FaTools, FaSearch, FaFilter, FaBolt, FaCogs } from 'react-icons/fa';

const services = [
    {
        name: 'MOT Testing',
        price: 'From £35',
        description: 'Comprehensive MOT tests with detailed reports and advice on any issues found.',
        icon: <FaCar size={40} />,
    },
    {
        name: 'Full Servicing',
        price: 'From £120',
        description: 'Complete vehicle servicing to manufacturer specifications and beyond.',
        icon: <FaWrench size={40} />,
    },
    {
        name: 'Mechanical Repairs',
        price: 'Quote on inspection',
        description: 'Expert diagnosis and repair of all mechanical issues, big or small.',
        icon: <FaCog size={40} />,
    },
    {
        name: 'Brake Services',
        price: 'From £80',
        description: 'Brake pad replacement, disc machining, and complete brake system overhauls.',
        icon: <FaTools size={40} />,
    },
    {
        name: 'Diagnostics',
        price: 'From £45',
        description: 'Advanced computer diagnostics to identify and resolve complex issues.',
        icon: <FaSearch size={40} />,
    },
    {
        name: 'DPF Cleaning',
        price: 'From £150',
        description: 'Professional DPF cleaning and regeneration services for diesel vehicles.',
        icon: <FaFilter size={40} />,
    },
    {
        name: 'Cam Belt Replacement',
        price: 'From £280',
        description: 'Timing belt replacement and engine timing services to prevent costly damage.',
        icon: <FaBolt size={40} />,
    },
    {
        name: 'Suspension Work',
        price: 'From £120',
        description: 'Shock absorber replacement, spring repairs, and suspension geometry.',
        icon: <FaCogs size={40} />,
    },
];

const ExpertServices = () => {
    return (
        <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-3xl font-extrabold text-gray-900 mb-8">Our Expert Services</h2>
                <p className="text-xl text-gray-600 mb-12">
                    From routine maintenance to complex repairs, we provide comprehensive automotive services with transparent pricing and expert craftsmanship.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Mapping through services array */}
                    {services.map((service, index) => (
                        <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-xl transition-all">
                            <div className="flex justify-center text-4xl text-teal-500 mb-4">
                                <div className='bg-teal-200 rounded-full p-3'>
                                    {service.icon}
                                </div>

                            </div>
                            <h3 className="text-2xl font-semibold text-gray-800 mb-2">{service.name}</h3>
                            <p className="text-xl font-bold text-orange-500">{service.price}</p>
                            <p className="text-lg text-gray-500 mb-4">{service.description}</p>
                            <button className="mt-4 py-2 px-6 bg-teal-500 text-white rounded-md hover:bg-teal-600 transition">
                                Learn More
                            </button>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-8">
                    <button className="bg-teal-500 text-white px-6 py-2 rounded-md hover:bg-teal-600 transition duration-300">
                        Get Your Free Quote Today
                    </button>
                </div>
            </div>
        </section>
    );
};

export default ExpertServices;
