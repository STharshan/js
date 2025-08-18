import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-100 py-8">
            <div className="max-w-screen-xl mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Logo and Description */}
                    <div className="flex flex-col items-start space-y-4">
                        <div className="flex items-center space-x-2">
                            <div className="bg-teal-600 text-white rounded-lg px-3 py-1.5 text-lg font-bold">JS</div>
                            <div className='grid'>
                                <span className="text-xl font-bold text-foreground text-gray-700">JS Automotive</span>
                                <span className='text-xs text-muted-foreground'>Service</span>
                            </div>
                        </div>
                        <p className="text-gray-600">Professional automotive services in Sheffield. Over 15 years of experience providing honest, reliable car repairs and maintenance.</p>
                        <div className="flex space-x-4">
                            <a href="https://facebook.com" className="text-gray-500 hover:text-gray-700">
                                <i className="fab fa-facebook-f"></i>
                            </a>
                            <a href="https://twitter.com" className="text-gray-500 hover:text-gray-700">
                                <i className="fab fa-twitter"></i>
                            </a>
                            <a href="https://instagram.com" className="text-gray-500 hover:text-gray-700">
                                <i className="fab fa-instagram"></i>
                            </a>
                        </div>
                    </div>

                    {/* Services Section */}
                    <div className="flex flex-col space-y-2">
                        <h3 className="text-lg font-semibold text-gray-700">Our Services</h3>
                        <ul className="text-gray-600 space-y-1">
                            <li>MOT Testing</li>
                            <li>Full Servicing</li>
                            <li>Brake Services</li>
                            <li>Diagnostics</li>
                            <li>DPF Cleaning</li>
                            <li>Cam Belt Replacement</li>
                        </ul>
                    </div>

                    {/* Quick Links Section */}
                    <div className="flex flex-col space-y-2">
                        <h3 className="text-lg font-semibold text-gray-700">Quick Links</h3>
                        <ul className="text-gray-600 space-y-1">
                            <li><a href="/home" className="hover:text-gray-800">Home</a></li>
                            <li><a href="/about" className="hover:text-gray-800">About Us</a></li>
                            <li><a href="/contact" className="hover:text-gray-800">Contact</a></li>
                            <li><a href="/book-mot" className="hover:text-gray-800">Book MOT</a></li>
                            <li><a href="/get-quote" className="hover:text-gray-800">Get Quote</a></li>
                        </ul>
                    </div>

                    {/* Contact Info Section */}
                    <div className="flex flex-col space-y-2">
                        <h3 className="text-lg font-semibold text-gray-700">Contact Info</h3>
                        <p className="text-gray-600">01709 863222</p>
                        <p className="text-gray-600">Mon-Fri: 8AM-6PM</p>
                        <p className="text-gray-600">Sat: 8AM-4PM</p>
                        <p className="text-gray-600">Sun: Closed</p>
                        <p className="text-gray-600">Sheffield Based</p>
                        <p className="text-gray-600">Free customer parking</p>
                        <a href="mailto:Js.automotive1@outlook.com" className="text-teal-500 hover:text-teal-700">Js.automotive1@outlook.com</a>
                    </div>
                </div>

                {/* Footer Bottom Section */}
                <div className="mt-8 border-t pt-4 text-center text-sm text-gray-500">
                    <p>© 2024 JS Automotive Services. All rights reserved. Professional automotive services in Sheffield since 2008</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
