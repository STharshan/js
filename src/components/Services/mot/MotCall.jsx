import React from "react";

const MOTCall = () => {
  return (
    <section className="bg-teal-500 py-16 px-4 text-center">
      <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4">
        Ready to Book Your MOT Testing?
      </h2>
      <p className="text-lg text-white mb-8">
Call us now or get a free quote online. We're here to keep your vehicle running safely and efficiently.
      </p>
      <div className="flex justify-center gap-4">
        <a
          href="tel:+441709863222"
          className="bg-orange-500 text-white py-2 px-6 rounded-lg text-lg flex items-center gap-2"
        >
          Call +44 1709 863222
        </a>
        <a
          href="#"
          className="bg-blue-500 text-white py-2 px-6 rounded-lg text-lg"
        >
          Get Free Quote
        </a>
      </div>
    </section>
  );
};

export default MOTCall;
