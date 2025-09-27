import React from 'react';
import { FaCar, FaShieldAlt } from 'react-icons/fa';  // Importing icons from react-icons

const OurStory = () => {
  return (
    <div className="bg-white py-10">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center mb-8">Our Story</h2>
        <p className="text-center text-lg mb-12">
          Built on a foundation of trust, expertise, and genuine care for our customers
        </p>

        {/* First Section */}
        <div className="max-w-4xl mx-auto">
          <div
            className="
              bg-white p-6 rounded-lg shadow-lg flex items-center
              transition-all duration-300
              hover:shadow-[0_0_25px_#00BFA5] 
              active:shadow-[0_0_25px_#00BFA5]
            "
          >
            <div>
              <h3 className="text-xl font-semibold mb-4">How It All Started</h3>
              <div className="max-w-xl mx-auto">
                <p>
                  JS Automotive Services was founded in 2008 with a simple mission: to provide honest, reliable automotive
                  services that Sheffield residents could trust. What started as a small garage has grown into one of the area's
                  most respected automotive service centers, but we've never lost sight of our core values.
                </p>
                <p className="mt-5">
                  Our founder, John Smith, began his automotive career over 20 years ago as an apprentice mechanic. His passion for cars and commitment to quality workmanship drove him to establish JS Automotive Services, where every customer is treated like family.
                </p>
              </div>
            </div>
            <div className="flex ml-6">
              <FaCar className="text-teal-500 bg-teal-100 rounded-full p-4 w-20 h-20" />
            </div>
          </div>
        </div>

        {/* Mission and Values Section */}
        <div className="flex flex-col lg:flex-row max-w-4xl mx-auto mt-5 gap-6">
          {/* Mission */}
          <div
            className="
              flex-1 bg-white p-6 rounded-lg shadow-lg
              transition-all duration-300
              hover:shadow-[0_0_25px_#00BFA5] 
              active:shadow-[0_0_25px_#00BFA5]
            "
          >
            <FaCar className="text-teal-500 mr-3 mb-2" size={30} />
            <div className="flex items-center mb-4">
              <h3 className="text-xl font-semibold">Our Mission</h3>
            </div>
            <p>
              To provide exceptional automotive services with complete transparency, fair pricing, and the highest standards of
              workmanship. We believe in building long-term relationships with our customers based on trust and reliability.
            </p>
          </div>

          {/* Values */}
          <div
            className="
              flex-1 bg-white p-6 rounded-lg shadow-lg
              transition-all duration-300
              hover:shadow-[0_0_25px_#00BFA5] 
              active:shadow-[0_0_25px_#00BFA5]
            "
          >
            <FaShieldAlt className="text-teal-500 mr-3 mb-2" size={30} />
            <div className="flex items-center mb-4">
              <h3 className="text-xl font-semibold">Our Values</h3>
            </div>
            <p>
              Honesty, integrity, and customer satisfaction are at the heart of everything we do. We only recommend work that’s
              necessary and always explain what we’re doing and why, ensuring you make informed decisions about your vehicle.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurStory;
