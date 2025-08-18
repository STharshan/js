import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { FiPhone, FiMail, FiMapPin, FiClock } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="bg-gray-50 text-gray-700 border-t">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        
        {/* Company Info */}
        <div>
          <div className="flex items-center mb-4">
            <div className="bg-teal-700 text-white w-10 h-10 flex items-center justify-center text-xl rounded-md font-bold">
              JS
            </div>
            <div className="ml-2">
              <h3 className="text-lg font-bold">JS Automotive</h3>
              <p className="text-sm">Services</p>
            </div>
          </div>
          <p className="text-sm max-w-50 mx-auto mb-4">
            Professional automotive services in Sheffield. Over 15 years of
            experience providing honest, reliable car repairs and maintenance.
          </p>
          <div className="flex space-x-4 text-teal-700 text-lg">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaInstagram /></a>
          </div>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Our Services</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#">MOT Testing</a></li>
            <li><a href="#">Full Servicing</a></li>
            <li><a href="#">Brake Services</a></li>
            <li><a href="#">Diagnostics</a></li>
            <li><a href="#">DPF Cleaning</a></li>
            <li><a href="#">Cam Belt Replacement</a></li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#">Home</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Book MOT</a></li>
            <li><a href="#">Get Quote</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start">
              <FiPhone className="mt-1 mr-2 text-teal-700" />
              <span>01709 863222<br />Mon-Fri: 8AM-6PM</span>
            </li>
            <li className="flex items-start">
              <FiMail className="mt-1 mr-2 text-teal-700" />
              <span>Js.automotive1@outlook.com</span>
            </li>
            <li className="flex items-start">
              <FiMapPin className="mt-1 mr-2 text-teal-700" />
              <span>Sheffield Based<br />Free customer parking</span>
            </li>
            <li className="flex items-start">
              <FiClock className="mt-1 mr-2 text-teal-700" />
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
      <div className="border-t text-sm text-gray-600">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row justify-between items-center">
          <p>
            © 2024 JS Automotive Services. All rights reserved.<br />
            Professional automotive services in Sheffield since 2008
          </p>
          <div className="flex space-x-6 mt-2 md:mt-0">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Complaints</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
