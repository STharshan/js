import React, { useState, useEffect, useRef } from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const desktopWrapRef = useRef(null);
  const mobileWrapRef = useRef(null);

  // Load saved theme
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark");
      setDarkMode(true);
    }
  }, []);


  // Close Services on outside click
  useEffect(() => {
    const handleOutside = (e) => {
      const wrappers = [desktopWrapRef.current, mobileWrapRef.current];
      if (!wrappers.some((el) => el && el.contains(e.target))) {
        setIsServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleOutside);
    document.addEventListener("touchstart", handleOutside, { passive: true });
    return () => {
      document.removeEventListener("mousedown", handleOutside);
      document.removeEventListener("touchstart", handleOutside);
    };
  }, []);

  // Close on ESC
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") setIsServicesOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  // Close mobile menu when clicking on a link
  const handleLinkClick = () => {
    setIsMenuOpen(false);
    setIsServicesOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-white dark:bg-gray-900 shadow-md px-4 sm:px-6 lg:px-14 py-3 border-b border-gray-300 dark:border-gray-700 z-50">
      {/* DESKTOP/TABLET GRID LAYOUT */}
      <div className="flex lg:grid lg:grid-cols-3 items-center justify-between">
        {/* Logo - Responsive sizing */}
        <div className="flex items-center space-x-2 justify-self-start">
          <div className="bg-teal-600 text-white rounded-lg px-2 sm:px-3 py-1 sm:py-1.5 text-base sm:text-lg font-bold">
            JS
          </div>
          <div className="grid">
            <span className="text-base sm:text-xl font-bold text-gray-700 dark:text-gray-200">
              JS Automotive
            </span>
            <span className="text-xs text-gray-500 dark:text-gray-400">
              Service
            </span>
          </div>
        </div>

        {/* CENTER NAV - Hidden on mobile, visible on desktop */}
        <nav className="hidden lg:flex justify-center space-x-6 xl:space-x-8 items-center justify-self-center">
          <Link
            to="/"
            className="text-gray-700 dark:text-gray-300 hover:text-teal-500 transition-colors"
          >
            Home
          </Link>

          {/* Services Dropdown */}
          <div className="relative" ref={desktopWrapRef}>
            <button
              onClick={() => setIsServicesOpen((v) => !v)}
              className="text-gray-700 dark:text-gray-300 hover:text-teal-500 transition-colors flex items-center gap-1"
            >
              Services
              <svg
                className={`w-4 h-4 transition-transform ${isServicesOpen ? "rotate-180" : ""
                  }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {isServicesOpen && (
              <div className="absolute left-1/2 -translate-x-1/2 mt-2 bg-white dark:bg-gray-800 shadow-lg rounded-md w-52 p-2 z-20 border border-gray-200 dark:border-gray-700">
                {[
                  ["mot", "MOT Testing"],
                  ["servicing", "Servicing"],
                  ["mechanical-repairs", "Mechanical Repairs"],
                  ["brake", "Brakes"],
                  ["diagnostics", "Diagnostics"],
                  ["dpf-clean", "DPF Clean"],
                  ["cam-belt", "Cam Belt"],
                  ["suspension", "Suspension"],
                ].map(([path, label]) => (
                  <Link
                    key={path}
                    to={`/services/${path}`}
                    onClick={handleLinkClick}
                    className="block text-gray-700 dark:text-gray-300 py-2 px-3 hover:bg-teal-500 hover:text-white rounded-lg transition-colors"
                  >
                    {label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link
            to="/about"
            className="text-gray-700 dark:text-gray-300 hover:text-teal-500 transition-colors"
          >
            About
          </Link>
          <Link
            to="/contact"
            className="text-gray-700 dark:text-gray-300 hover:text-teal-500 transition-colors"
          >
            Contact
          </Link>
        </nav>

        {/* RIGHT ACTIONS - Responsive */}
        <div className="hidden lg:flex items-center space-x-3 xl:space-x-4 justify-self-end">
          <FaPhoneAlt className="w-4 h-4 text-gray-700 dark:text-gray-300" />
          <a
            href="tel:+441709863222"
            className="text-gray-700 dark:text-gray-300 hover:text-teal-500 text-sm xl:text-base transition-colors"
          >
            01709 863222
          </a>
          <Link to="/contact">
            <button className="bg-teal-600 text-white px-3 xl:px-4 py-2 rounded-md hover:bg-teal-500 text-sm xl:text-base transition-colors">
              Get Quote
            </button>
          </Link>
          <ThemeToggle />
        </div>

        {/* MOBILE/TABLET ACTIONS - Visible below lg breakpoint */}
        <div className="flex lg:hidden items-center space-x-3">
          <ThemeToggle />

          {/* MOBILE MENU BUTTON */}
          <button
            className="text-gray-700 dark:text-gray-300 hover:text-teal-500 transition-colors p-1"
            onClick={() => setIsMenuOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* MOBILE/TABLET MENU */}
      {isMenuOpen && (
        <div className="lg:hidden flex flex-col space-y-3 mt-4 bg-gray-100 dark:bg-gray-800 p-4 rounded-lg max-h-[calc(100vh-5rem)] overflow-y-auto">
          <Link
            to="/"
            onClick={handleLinkClick}
            className="text-gray-700 dark:text-gray-300 hover:text-teal-500 py-2 transition-colors"
          >
            Home
          </Link>

          {/* Mobile Services Dropdown */}
          <div ref={mobileWrapRef}>
            <button
              onClick={() => setIsServicesOpen((v) => !v)}
              className="w-full text-left text-gray-700 dark:text-gray-300 hover:text-teal-500 py-2 flex items-center justify-between transition-colors"
            >
              Services
              <svg
                className={`w-4 h-4 transition-transform ${isServicesOpen ? "rotate-180" : ""
                  }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {isServicesOpen && (
              <div className="flex flex-col space-y-1 mt-2 bg-gray-200 dark:bg-gray-700 p-2 rounded-md">
                {[
                  ["mot", "MOT Testing"],
                  ["servicing", "Servicing"],
                  ["mechanical-repairs", "Mechanical Repairs"],
                  ["brake", "Brakes"],
                  ["diagnostics", "Diagnostics"],
                  ["dpf-clean", "DPF Clean"],
                  ["cam-belt", "Cam Belt"],
                  ["suspension", "Suspension"],
                ].map(([path, label]) => (
                  <Link
                    key={path}
                    to={`/services/${path}`}
                    onClick={handleLinkClick}
                    className="block text-gray-700 dark:text-gray-300 py-2 px-3 hover:bg-teal-500 hover:text-white rounded-lg transition-colors"
                  >
                    {label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link
            to="/about"
            onClick={handleLinkClick}
            className="text-gray-700 dark:text-gray-300 hover:text-teal-500 py-2 transition-colors"
          >
            About
          </Link>

          <Link
            to="/contact"
            onClick={handleLinkClick}
            className="text-gray-700 dark:text-gray-300 hover:text-teal-500 py-2 transition-colors"
          >
            Contact
          </Link>

          {/* Phone and CTA in mobile menu */}
          <div className="pt-3 border-t border-gray-300 dark:border-gray-600">
            <div className="flex items-center space-x-2 mb-3">
              <FaPhoneAlt className="w-4 h-4 text-gray-700 dark:text-gray-300" />
              <a
                href="tel:+441709863222"
                className="text-gray-700 dark:text-gray-300 hover:text-teal-500 transition-colors"
              >
                01709 863222
              </a>
            </div>

            <Link to="/contact" onClick={handleLinkClick}>
              <button className="bg-teal-600 text-white px-4 py-2.5 rounded-md w-full hover:bg-teal-500 transition-colors font-medium">
                Get Quote
              </button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;