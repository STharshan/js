import React from 'react';
import { AiOutlineDashboard } from 'react-icons/ai';
import { FaSearch } from 'react-icons/fa';
import { HiOutlineBolt } from 'react-icons/hi2';
import { IoCog } from 'react-icons/io5';
import { LiaCarSideSolid } from 'react-icons/lia';
import { LuFilter, LuWrench } from 'react-icons/lu';
import { SiTarget } from 'react-icons/si';

const services = [
    {
        name: 'MOT Testing',
        price: 'From £35',
        description: 'Comprehensive MOT tests with detailed reports and advice on any issues found.',
        icon: <LiaCarSideSolid size={30} />,
    },
    {
        name: 'Full Servicing',
        price: 'From £120',
        description: 'Complete vehicle servicing to manufacturer specifications and beyond.',
        icon: <LuWrench size={30} />,
    },
    {
        name: 'Mechanical Repairs',
        price: 'Quote on inspection',
        description: 'Expert diagnosis and repair of all mechanical issues, big or small.',
        icon: <IoCog size={30} />,
    },
    {
        name: 'Brake Services',
        price: 'From £80',
        description: 'Brake pad replacement, disc machining, and complete brake system overhauls.',
        icon: <SiTarget size={30} />,
    },
    {
        name: 'Diagnostics',
        price: 'From £45',
        description: 'Advanced computer diagnostics to identify and resolve complex issues.',
        icon: <FaSearch size={30} />,
    },
    {
        name: 'DPF Cleaning',
        price: 'From £150',
        description: 'Professional DPF cleaning and regeneration services for diesel vehicles.',
        icon: <LuFilter size={30} />,
    },
    {
        name: 'Cam Belt Replacement',
        price: 'From £280',
        description: 'Timing belt replacement and engine timing services to prevent costly damage.',
        icon: <HiOutlineBolt size={30} />,
    },
    {
        name: 'Suspension Work',
        price: 'From £120',
        description: 'Shock absorber replacement, spring repairs, and suspension geometry.',
        icon: <AiOutlineDashboard size={30} />,
    },
];

const ExpertServices = () => {
    return (
        <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-4xl font-bold text-gray-900 mb-8">Our Expert Services</h2>
                <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
                    From routine maintenance to complex repairs, we provide comprehensive automotive services with transparent pricing and expert craftsmanship.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Mapping through services array */}
                    {services.map((service, index) => (
                        <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-xl transition-all">
                            <div className="flex justify-center  text-teal-800 mb-4">
                                <div className='bg-teal-100 rounded-full p-4'>
                                    {service.icon}
                                </div>

                            </div>
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">{service.name}</h3>
                            <p className="text-lg font-semibold text-orange-500">{service.price}</p>
                            <p className="text-gray-500 mb-4 mt-5">{service.description}</p>
                            <button className="mt-4 py-1 px-16 border-gray-300 border rounded-md hover:bg-orange-500 cursor-pointer transition">
                                Learn More
                            </button>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-8">
                    <button className="bg-teal-600 text-white px-6 py-2 rounded-md hover:bg-teal-500 transition duration-300">
                        Get Your Free Quote Today
                    </button>
                </div>
            </div>
        </section>
    );
};

export default ExpertServices;
