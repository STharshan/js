import { useEffect } from "react";
import { Link } from "react-router-dom";
import { FaPhoneAlt } from "react-icons/fa";
import { FiClock } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import AOS from "aos";
import "aos/dist/aos.css";

const HeroSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="relative bg-white dark:bg-gray-900 py-16 lg:py-24 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* ✅ Left side content */}
          <div
            className="space-y-8 text-center lg:text-left"
            data-aos="fade-right"
          >
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight text-gray-900 dark:text-gray-100">
              Professional{" "}
              <span className="text-teal-600 dark:text-teal-400">
                Automotive Services
              </span>
            </h1>

            <p
              className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 leading-relaxed"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              Expert car repairs, MOT testing, and maintenance services you can
              trust. Over 15 years of experience keeping Sheffield's vehicles
              running smoothly.
            </p>

            {/* Rating and Customer count */}
            <div
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-2 sm:gap-4"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <span className="text-orange-500 text-2xl">★★★★★</span>
              <p className="text-gray-600 dark:text-gray-300">4.9/5 Rating</p>
              <p className="text-gray-600 dark:text-gray-300">
                500+ Happy Customers
              </p>
            </div>

            {/* Buttons */}
            <div
              className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 sm:gap-6"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <Link
                to="/contact"
                className="bg-teal-500 text-white px-6 py-3 rounded-md hover:bg-teal-600 transition duration-300 flex items-center justify-center space-x-2"
              >
                <FaPhoneAlt className="w-4 h-4" />
                <span>Book Service Now</span>
              </Link>

              <Link
                to="/services/mot"
                className="bg-teal-500 text-white px-6 py-3 rounded-md hover:bg-teal-600 transition duration-300 text-center"
              >
                MOT Testing
              </Link>
            </div>

            {/* Details */}
            <div
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-8"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              {/* Clock */}
              <div className="flex items-center gap-2">
                <FiClock className="w-5 h-5 text-gray-600 dark:text-gray-300" />
                <div>
                  <p className="font-semibold text-gray-900 dark:text-gray-100">
                    Open Mon-Fri
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    8:00 AM - 5:00 PM
                  </p>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center gap-2">
                <IoLocationOutline className="w-5 h-5 text-gray-600 dark:text-gray-300" />
                <div className="text-gray-900 dark:text-gray-200 text-sm sm:text-base">
                  <span>
                    New Edlington,
                    <br />
                    Doncaster DN12 1DJ,
                    <br />
                    United Kingdom
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* ✅ Right side image */}
          <div className="relative" data-aos="zoom-in">
            <img
              src="empty.svg"
              alt="Automotive Service"
              className="object-cover w-full min-h-[250px] sm:min-h-[350px] rounded-md border border-gray-200 dark:border-gray-700"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
