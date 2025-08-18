import React, { useState } from 'react';
import { FaPhoneAlt } from 'react-icons/fa';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
        <nav className="hidden md:flex space-x-8">
          <a href="#home" className="text-gray-700 hover:text-teal-500">Home</a>
          <a href="#services" className="text-gray-700 hover:text-teal-500">Services</a>
          <a href="#about" className="text-gray-700 hover:text-teal-500">About</a>
          <a href="#contact" className="text-gray-700 hover:text-teal-500">Contact</a>
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
          <a href="#home" className="text-gray-700">Home</a>
          <a href="#services" className="text-gray-700">Services</a>
          <a href="#about" className="text-gray-700">About</a>
          <a href="#contact" className="text-gray-700">Contact</a>
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
