import React from 'react';
import { FaClock, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';
import { FiClock } from 'react-icons/fi';
import { IoLocationOutline } from 'react-icons/io5';

const SupsensionHeader = () => {
    return (
        <section className="relative bg-white py-20 lg:py-25">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left side content */}
                    <div className="space-y-8">
                        <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                           Suspension Services
                        </h1>
                        <p className="text-xl text-gray-600 leading-relaxed">
                            Professional suspension repairs and replacements for improved ride comfort, handling, and safety. From shock absorbers to complete suspension overhauls.
                        </p>
                        {/* Details */}


                        <div className=" text-gray-600 flex items-center space-x-5">
                        <div className="flex items-center space-x-2">
                            {/* Right side Content with Top and Bottom */}
                            <div className="flex flex-col text-gray-600">
                                <p className="font-semibold">From £120</p>
                            </div>
                        </div>
                            {/* Clock icon for hours */}
                            <div className="flex items-center space-x-2">
                                {/* Left side Icon */}
                                <FiClock className="w-5 h-5 text-gray-600" />

                                {/* Right side Content with Top and Bottom */}
                                <div className="flex flex-col text-gray-600">
                                    <p className="font-semibold">2-4 hours</p>  {/* Top Content */}
                                </div>
                            </div>
                        </div>
                        {/* Buttons */}
                        <div className="flex space-x-6">
                            <button className="bg-teal-500 text-white px-6 py-2 rounded-md hover:bg-teal-600 transition duration-300 flex items-center space-x-2">
                                {/* Phone Icon */}
                                <FaPhoneAlt className="w-4 h-4" />
                                <span>Book Now-01709 863222</span>
                            </button>
                            <button className="bg-teal-500 text-white px-6 py-2 rounded-md hover:bg-teal-600 transition duration-300">
                                Get Free Quote
                            </button>
                        </div>
                    </div>

                    {/* Right side image */}
                    <div className="relative">
                        <img src="/empty.svg" alt="Automotive Service" className="object-cover w-full h-full rounded-md" />
                    </div>

                </div>
            </div>
        </section>
    );
};

export default SupsensionHeader
