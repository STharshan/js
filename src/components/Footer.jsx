import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { FiPhone, FiMail, FiMapPin, FiClock } from "react-icons/fi";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#00BFA5] text-white">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* Company Info */}
        <div>
          <div className="flex items-center mb-4">
            <div className="bg-white text-[#00BFA5] w-10 h-10 flex items-center justify-center text-xl rounded-md font-bold">
              JS
            </div>
            <div className="ml-2">
              <h3 className="text-lg font-bold">JS Automotive</h3>
              <p className="text-sm opacity-90">Services</p>
            </div>
          </div>
          <p className="text-sm opacity-90 mb-4">
            Professional automotive services in Sheffield. Over 15 years of
            experience providing honest, reliable car repairs and maintenance.
          </p>
          <div className="flex space-x-4 text-white text-lg">
            <a
              href="https://www.facebook.com/profile.php?id=61562506876945"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-200"
            >
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-blue-200">
              <FaTwitter />
            </a>
            <a href="#" className="hover:text-pink-300">
              <FaInstagram />
            </a>
          </div>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Our Services</h3>
          <ul className="space-y-2 text-sm opacity-90">
            <li><Link to="/services/mot" className="hover:text-white">MOT Testing</Link></li>
            <li><Link to="/services/servicing" className="hover:text-white">Full Servicing</Link></li>
            <li><Link to="/services/brake" className="hover:text-white">Brake Services</Link></li>
            <li><Link to="/services/diagnostics" className="hover:text-white">Diagnostics</Link></li>
            <li><Link to="/services/dpf-clean" className="hover:text-white">DPF Cleaning</Link></li>
            <li><Link to="/services/cam-belt" className="hover:text-white">Cam Belt Replacement</Link></li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm opacity-90">
            <li><Link to="/" className="hover:text-white">Home</Link></li>
            <li><Link to="/about" className="hover:text-white">About Us</Link></li>
            <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
            <li><Link to="/services/mot" className="hover:text-white">Book MOT</Link></li>
            <li><Link to="/contact" className="hover:text-white">Get Quote</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
          <ul className="space-y-3 text-sm opacity-90">
            <li className="flex items-start">
              <FiPhone className="mt-1 mr-2" />
              <a href="tel:01709863222" className="hover:text-white">
                01709 863222<br />Mon-Fri: 8AM-6PM
              </a>
            </li>
            <li className="flex items-start">
              <FiMail className="mt-1 mr-2" />
              <a
                href="mailto:Js.automotive1@outlook.com"
                className="hover:text-white"
                target="_blank"
                rel="noopener noreferrer"
              >
                Js.automotive1@outlook.com
              </a>
            </li>
            <li className="flex items-start">
              <FiMapPin className="mt-1 mr-2" />
              <a
                href="https://www.google.com/maps?q=New+Edlington,+Doncaster+DN12+1DJ,+United+Kingdom"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
              >
                New Edlington,<br />
                Doncaster DN12 1DJ,<br />
                United Kingdom
              </a>
            </li>
            <li className="flex items-start">
              <FiClock className="mt-1 mr-2" />
              <span>
                Mon-Fri: 8AM-6PM<br />
                Sat: 8AM-4PM<br />
                Sun: Closed
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-[#009e87] text-sm text-white/90">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row justify-between items-center">
          <p>
            © 2025 JS Automotive Services. All rights reserved.<br />
            Professional automotive services in Sheffield since 2008
          </p>
          <div>
            Powered By{" "}
            <a
              href="https://www.ansely.co.uk/"
              className="hover:text-white hover:underline"
            >
              Ansely
            </a>
          </div>
          <div className="flex space-x-6 mt-2 md:mt-0">
            <Link to="/privacy" className="hover:text-white">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white">Terms of Service</Link>
            <Link to="/complaints" className="hover:text-white">Complaints</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
