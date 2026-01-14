import React, { useState, useEffect, useRef } from "react";
import { FaPhoneAlt, FaSun, FaMoon } from "react-icons/fa";
import { Link } from "react-router-dom";

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

  // Toggle theme
  const toggleTheme = () => {
    if (darkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setDarkMode(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setDarkMode(true);
    }
  };

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

  return (
    <header className="fixed top-0 left-0 w-full bg-white dark:bg-gray-900 shadow-md px-6 md:px-14 py-3 border-b border-gray-300 dark:border-gray-700 z-50">
      {/* DESKTOP GRID LAYOUT */}
      <div className="grid grid-cols-3 items-center">
        {/* Logo */}
        <div className="flex items-center space-x-2 justify-self-start">
          <div className="bg-teal-600 text-white rounded-lg px-3 py-1.5 text-lg font-bold">
            JS
          </div>
          <div className="grid">
            <span className="text-xl font-bold text-gray-700 dark:text-gray-200">
              JS Automotive
            </span>
            <span className="text-xs text-gray-500 dark:text-gray-400">
              Service
            </span>
          </div>
        </div>

        {/* CENTER NAV */}
        <nav className="hidden md:flex justify-center space-x-8 items-center justify-self-center">
          <Link
            to="/"
            className="text-gray-700 dark:text-gray-300 hover:text-teal-500"
          >
            Home
          </Link>

          {/* Services */}
          <div className="relative" ref={desktopWrapRef}>
            <button
              onClick={() => setIsServicesOpen((v) => !v)}
              className="text-gray-700 dark:text-gray-300 hover:text-teal-500"
            >
              Services
            </button>
            {isServicesOpen && (
              <div className="absolute left-1/2 -translate-x-1/2 mt-2 bg-gray-200 dark:bg-gray-800 shadow-md rounded-md w-48 p-2 z-20">
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
                    className="block text-gray-700 dark:text-gray-300 py-1 px-2 hover:bg-orange-500 rounded-lg"
                  >
                    {label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link
            to="/about"
            className="text-gray-700 dark:text-gray-300 hover:text-teal-500"
          >
            About
          </Link>
          <Link
            to="/contact"
            className="text-gray-700 dark:text-gray-300 hover:text-teal-500"
          >
            Contact
          </Link>
        </nav>

        {/* RIGHT ACTIONS */}
        <div className="hidden md:flex items-center space-x-4 justify-self-end">
          <FaPhoneAlt className="w-4 h-4 text-gray-700 dark:text-gray-300" />
          <a
            href="tel:+441709863222"
            className="text-gray-700 dark:text-gray-300 hover:text-teal-500"
          >
            01709 863222
          </a>
          <Link to="/contact">
            <button className="bg-teal-600 text-white px-4 py-2 rounded-md hover:bg-teal-500">
              Get Quote
            </button>
          </Link>
          <button
            onClick={toggleTheme}
            className="ml-2 text-gray-700 dark:text-gray-300 hover:text-teal-500"
          >
            {darkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
          </button>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          className="md:hidden justify-self-end text-gray-700 dark:text-gray-300 hover:text-teal-500"
          onClick={() => setIsMenuOpen((v) => !v)}
        >
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
        </button>
      </div>

      {/* MOBILE MENU */}
      {isMenuOpen && (
        <div className="md:hidden flex flex-col space-y-4 mt-4 bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
          {["/", "/about", "/contact"].map((path, i) => (
            <Link
              key={i}
              to={path}
              className="text-gray-700 dark:text-gray-300 hover:text-teal-500"
            >
              {path === "/" ? "Home" : path.slice(1)}
            </Link>
          ))}

          {/* Mobile Services */}
          <div ref={mobileWrapRef}>
            <button
              onClick={() => setIsServicesOpen((v) => !v)}
              className="w-full text-left text-gray-700 dark:text-gray-300 hover:text-teal-500"
            >
              Services
            </button>
            {isServicesOpen && (
              <div className="flex flex-col space-y-2 mt-2 bg-gray-200 dark:bg-gray-700 p-2 rounded-md">
                {[
                  "mot",
                  "servicing",
                  "mechanical-repairs",
                  "brake",
                  "diagnostics",
                  "dpf-clean",
                  "cam-belt",
                  "suspension",
                ].map((item) => (
                  <Link
                    key={item}
                    to={`/services/${item}`}
                    className="block text-gray-700 dark:text-gray-300 py-1 px-2 hover:bg-orange-500 rounded-lg"
                  >
                    {item.replace("-", " ").toUpperCase()}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <div className="flex items-center space-x-2">
            <FaPhoneAlt className="w-4 h-4 text-gray-700 dark:text-gray-300" />
            <a
              href="tel:+441709863222"
              className="text-gray-700 dark:text-gray-300 hover:text-teal-500"
            >
              01709 863222
            </a>
          </div>

          <Link to="/contact">
            <button className="bg-teal-600 text-white px-4 py-2 rounded-md w-full hover:bg-teal-500">
              Get Quote
            </button>
          </Link>

          <button
            onClick={toggleTheme}
            className="self-start text-gray-700 dark:text-gray-300 hover:text-teal-500"
          >
            {darkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
          </button>
        </div>
      )}
    </header>
  );
};

export default Navbar;
