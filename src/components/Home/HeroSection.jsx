import React from 'react';
import { FaClock, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';
import { FiClock } from 'react-icons/fi';
import { IoLocationOutline } from 'react-icons/io5';

const HeroSection = () => {
    return (
        <section className="relative bg-white py-20 lg:py-25">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left side content */}
                    <div className="space-y-8">
                        <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                            Professional <span className="text-teal-600">Automotive Services</span>
                        </h1>
                        <p className="text-xl text-gray-600 leading-relaxed">
                            Expert car repairs, MOT testing, and maintenance services you can trust. Over 15 years of experience keeping Sheffield's vehicles running smoothly.
                        </p>
                        {/* Rating and Customer count */}
                        <div className="flex items-center space-x-2">
                            <span className="text-orange-500 text-2xl">★★★★★</span>
                            <p className="text-gray-600">4.9/5 Rating</p>
                            <p className="text-gray-600 px-3">500+ Happy Customers</p>
                        </div>
                        {/* Buttons */}
                        <div className="flex space-x-6">
                            <button className="bg-teal-500 text-white px-6 py-2 rounded-md hover:bg-teal-600 transition duration-300 flex items-center space-x-2">
                                {/* Phone Icon */}
                                <FaPhoneAlt className="w-4 h-4" />
                                <span>Book Service Now</span>
                            </button>
                            <button className="bg-teal-500 text-white px-6 py-2 rounded-md hover:bg-teal-600 transition duration-300">
                                MOT Testing
                            </button>
                        </div>
                        {/* Details */}
                        <div className=" text-gray-600 flex items-center space-x-50">
                            {/* Clock icon for hours */}
                            <div className="flex items-center space-x-2">
                                {/* Left side Icon */}
                                <FiClock className="w-5 h-5 text-gray-600" />

                                {/* Right side Content with Top and Bottom */}
                                <div className="flex flex-col text-gray-600">
                                    <p className="font-semibold">Open Mon-Fri</p>  {/* Top Content */}
                                    <p className="text-sm">8:00 AM - 6:00 PM</p>  {/* Bottom Content */}
                                </div>
                            </div>

                            <div className="flex items-center space-x-2">
                                {/* Left side Icon */}
                                <IoLocationOutline className="w-5 h-5 text-gray-600" />

                                {/* Right side Content with Top and Bottom */}
                                <div className="flex flex-col text-gray-600">
                                    <p className="font-semibold">Sheffield Based</p>  {/* Top Content */}
                                    <p className="text-sm">Local & Trusted</p>  {/* Bottom Content */}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right side image */}
                    <div className="relative">
                        <img src="empty.svg" alt="Automotive Service" className="object-cover w-full h-full rounded-md" />
                    </div>
                    
                </div>
            </div>
        </section>
    );
};

export default HeroSection
