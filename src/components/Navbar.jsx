import React, { useState, useEffect, useRef } from 'react';
import { FaPhoneAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';  // Import the Link component

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);  // State for the Services dropdown
  const servicesDropdownRef = useRef(null);

  // Close the Services dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (servicesDropdownRef.current && !servicesDropdownRef.current.contains(event.target)) {
        setIsServicesOpen(false);
      }
    };
    
    // Add event listener
    document.addEventListener('mousedown', handleClickOutside);
    
    // Cleanup the event listener on component unmount
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <header className="bg-white shadow-md px-14 py-3 border-b border-gray-300">
      <div className="flex justify-between items-center">
        {/* Logo Section */}
        <div className="flex items-center space-x-2">
          <div className="bg-teal-600 text-white rounded-lg px-3 py-1.5 text-lg font-bold">JS</div>
          <div className='grid'>
            <span className="text-xl font-bold text-foreground text-gray-700">JS Automotive</span>
            <span className='text-xs text-muted-foreground'>Service</span>
          </div>
        </div>

        {/* Navbar for Desktop */}
        <nav className="hidden md:flex space-x-8 relative">
          <Link to="/" className="text-gray-700 hover:text-teal-500">Home</Link>

          {/* Services Dropdown */}
          <div className="relative">
            <button
              onClick={() => setIsServicesOpen(!isServicesOpen)}
              className="text-gray-700 hover:text-teal-500"
            >
              Services
            </button>
            {isServicesOpen && (
              <div ref={servicesDropdownRef} className="absolute left-0 mt-2 bg-gray-200 shadow-md rounded-md w-48 p-2 z-20">
                <Link to="/services/mot" className="block text-gray-700 py-1 hover:bg-teal-100">MOT Testing</Link>
                <Link to="/services/servicing" className="block text-gray-700 py-1 hover:bg-teal-100">Servicing</Link>
                <Link to="/services/mechanical-repairs" className="block text-gray-700 py-1 hover:bg-teal-100">Mechanical Repairs</Link>
                <Link to="/services/brake" className="block text-gray-700 py-1 hover:bg-teal-100">Brakes</Link>
                <Link to="/services/diagnostics" className="block text-gray-700 py-1 hover:bg-teal-100">Diagnostics</Link>
                <Link to="/services/dpf-clean" className="block text-gray-700 py-1 hover:bg-teal-100">DPF Clean</Link>
                <Link to="/services/cam-belt" className="block text-gray-700 py-1 hover:bg-teal-100">Cam Belt</Link>
                <Link to="/services/suspension" className="block text-gray-700 py-1 hover:bg-teal-100">Suspension</Link>
              </div>
            )}
          </div>

          <Link to="/about" className="text-gray-700 hover:text-teal-500">About</Link>
          <Link to="/contact" className="text-gray-700 hover:text-teal-500">Contact</Link>
        </nav>

        {/* Phone and Get Quote Button */}
        <div className="hidden md:flex items-center space-x-2">
          <FaPhoneAlt className="w-4 h-4 text-gray-700" />
          <span className="text-gray-700">01709 863222</span>
          <button className="bg-teal-500 text-white px-4 py-2 rounded-md hover:bg-teal-600">
            Get Quote
          </button>
        </div>

        {/* Mobile Menu Icon */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden flex flex-col space-y-4 mt-4">
          <Link to="/" className="text-gray-700">Home</Link>

          {/* Mobile Services Dropdown */}
          <div className="relative">
            <button
              onClick={() => setIsServicesOpen(!isServicesOpen)}
              className="text-gray-700"
            >
              Services
            </button>
            {isServicesOpen && (
              <div ref={servicesDropdownRef} className="flex flex-col space-y-2 mt-2 bg-gray-200 p-2 rounded-md w-48">
                <Link to="/services/mot" className="block text-gray-700 py-1 hover:bg-teal-100">MOT Testing</Link>
                <Link to="/services/servicing" className="block text-gray-700 py-1 hover:bg-teal-100">Servicing</Link>
                <Link to="/services/mechanical-repairs" className="block text-gray-700 py-1 hover:bg-teal-100">Mechanical Repairs</Link>
                <Link to="/services/brake" className="block text-gray-700 py-1 hover:bg-teal-100">Brakes</Link>
                <Link to="/services/diagnostics" className="block text-gray-700 py-1 hover:bg-teal-100">Diagnostics</Link>
                <Link to="/services/dpf-clean" className="block text-gray-700 py-1 hover:bg-teal-100">DPF Clean</Link>
                <Link to="/services/cam-belt" className="block text-gray-700 py-1 hover:bg-teal-100">Cam Belt</Link>
                <Link to="/services/suspension" className="block text-gray-700 py-1 hover:bg-teal-100">Suspension</Link>
              </div>
            )}
          </div>

          <Link to="/about" className="text-gray-700">About</Link>
          <Link to="/contact" className="text-gray-700">Contact</Link>
          <div className="flex items-center space-x-2">
            <FaPhoneAlt className="w-4 h-4 text-gray-700" />
            <span className="text-gray-700">01709 863222</span>
          </div>
          <button className="bg-teal-500 text-white px-4 py-2 rounded-md hover:bg-teal-600">
            Get Quote
          </button>
        </div>
      )}
    </header>
  );
};

export default Navbar;
