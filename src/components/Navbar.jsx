import React, { useState, useEffect, useRef } from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  // Wrappers that include BOTH the button and the dropdown content
  const desktopWrapRef = useRef(null);
  const mobileWrapRef = useRef(null);

  // Close "Services" if clicking outside both wrappers
  useEffect(() => {
    const handleOutside = (e) => {
      const wrappers = [desktopWrapRef.current, mobileWrapRef.current];

      // If click is inside ANY wrapper, do nothing
      const clickedInside = wrappers.some(
        (el) => el && el.contains(e.target)
      );
      if (!clickedInside) setIsServicesOpen(false);
    };

    document.addEventListener("mousedown", handleOutside);
    document.addEventListener("touchstart", handleOutside, { passive: true });

    return () => {
      document.removeEventListener("mousedown", handleOutside);
      document.removeEventListener("touchstart", handleOutside);
    };
  }, []);

  // Optional: close on ESC key
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") setIsServicesOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md px-14 py-3 border-b border-gray-300 z-50">
      <div className="flex justify-between items-center">
        {/* Logo Section */}
        <div className="flex items-center space-x-2">
          <div className="bg-teal-600 text-white rounded-lg px-3 py-1.5 text-lg font-bold">JS</div>
          <div className="grid">
            <span className="text-xl font-bold text-gray-700">JS Automotive</span>
            <span className="text-xs text-gray-500">Service</span>
          </div>
        </div>

        {/* Navbar for Desktop */}
        <nav className="hidden md:flex space-x-8 relative">
          <Link to="/" className="text-gray-700 hover:text-teal-500">Home</Link>

          {/* Services Dropdown (Desktop) */}
          <div className="relative" ref={desktopWrapRef}>
            <button
              onClick={() => setIsServicesOpen((v) => !v)}
              className="text-gray-700 hover:text-teal-500"
              aria-expanded={isServicesOpen}
            >
              Services
            </button>
            {isServicesOpen && (
              <div className="absolute left-0 mt-2 bg-gray-200 shadow-md rounded-md w-48 p-2 z-20">
                <Link to="/services/mot" className="block text-gray-700 py-1 px-2 hover:bg-orange-500 rounded-lg">MOT Testing</Link>
                <Link to="/services/servicing" className="block text-gray-700 py-1 px-2 hover:bg-orange-500 rounded-lg">Servicing</Link>
                <Link to="/services/mechanical-repairs" className="block text-gray-700 py-1 px-2 hover:bg-orange-500 rounded-lg">Mechanical Repairs</Link>
                <Link to="/services/brake" className="block text-gray-700 py-1 px-2 hover:bg-orange-500 rounded-lg">Brakes</Link>
                <Link to="/services/diagnostics" className="block text-gray-700 py-1 px-2 hover:bg-orange-500 rounded-lg">Diagnostics</Link>
                <Link to="/services/dpf-clean" className="block text-gray-700 py-1 px-2 hover:bg-orange-500 rounded-lg">DPF Clean</Link>
                <Link to="/services/cam-belt" className="block text-gray-700 py-1 px-2 hover:bg-orange-500 rounded-lg">Cam Belt</Link>
                <Link to="/services/suspension" className="block text-gray-700 py-1 px-2 hover:bg-orange-500 rounded-lg">Suspension</Link>
              </div>
            )}
          </div>

          <Link to="/about" className="text-gray-700 hover:text-teal-500">About</Link>
          <Link to="/contact" className="text-gray-700 hover:text-teal-500">Contact</Link>
        </nav>

        {/* Phone and Get Quote Button */}
        <div className="hidden md:flex items-center space-x-2">
          <FaPhoneAlt className="w-4 h-4 text-gray-700" />
          <span className="text-gray-700 hover:text-teal-500 cursor-pointer">01709 863222</span>
          <button className="bg-teal-600 text-white px-4 py-2 rounded-md hover:bg-teal-500">
            Get Quote
          </button>
        </div>

        {/* Mobile Menu Icon */}
        <button
          className="md:hidden text-gray-700 hover:text-teal-500"
          onClick={() => setIsMenuOpen((v) => !v)}
          aria-expanded={isMenuOpen}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden flex flex-col space-y-4 mt-4">
          <Link to="/" className="text-gray-700 hover:text-teal-500">Home</Link>

          {/* Mobile Services Dropdown */}
          <div className="relative" ref={mobileWrapRef}>
            <button
              onClick={() => setIsServicesOpen((v) => !v)}
              className="text-gray-700 hover:text-teal-500"
              aria-expanded={isServicesOpen}
            >
              Services
            </button>
            {isServicesOpen && (
              <div className="flex flex-col space-y-2 mt-2 bg-gray-200 p-2 rounded-md w-48">
                <Link to="/services/mot" className="block text-gray-700 py-1 px-2 hover:bg-orange-500 rounded-lg">MOT Testing</Link>
                <Link to="/services/servicing" className="block text-gray-700 py-1 px-2 hover:bg-orange-500 rounded-lg">Servicing</Link>
                <Link to="/services/mechanical-repairs" className="block text-gray-700 py-1 px-2 hover:bg-orange-500 rounded-lg">Mechanical Repairs</Link>
                <Link to="/services/brake" className="block text-gray-700 py-1 px-2 hover:bg-orange-500 rounded-lg">Brakes</Link>
                <Link to="/services/diagnostics" className="block text-gray-700 py-1 px-2 hover:bg-orange-500 rounded-lg">Diagnostics</Link>
                <Link to="/services/dpf-clean" className="block text-gray-700 py-1 px-2 hover:bg-orange-500 rounded-lg">DPF Clean</Link>
                <Link to="/services/cam-belt" className="block text-gray-700 py-1 px-2 hover:bg-orange-500 rounded-lg">Cam Belt</Link>
                <Link to="/services/suspension" className="block text-gray-700 py-1 px-2 hover:bg-orange-500 rounded-lg">Suspension</Link>
              </div>
            )}
          </div>

          <Link to="/about" className="text-gray-700 hover:text-teal-500">About</Link>
          <Link to="/contact" className="text-gray-700 hover:text-teal-500">Contact</Link>
          <div className="flex items-center space-x-2">
            <FaPhoneAlt className="w-4 h-4 text-gray-700" />
            <span className="text-gray-700 hover:text-teal-500 cursor-pointer">01709 863222</span>
          </div>
          <button className="bg-teal-600 text-white px-4 py-2 rounded-md hover:bg-teal-500">
            Get Quote
          </button>
        </div>
      )}
    </header>
  );
};

export default Navbar;
