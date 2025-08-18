import React from "react";

const CallToAction = () => {
  return (
    <section className="bg-teal-500 py-16 px-4 text-center">
      <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4">
        Ready to Experience the JS Automotive Difference?
      </h2>
      <p className="text-lg text-white mb-8">
        Join hundreds of satisfied customers who trust us with their vehicles.
        Get in touch today for honest, professional automotive services.
      </p>
      <div className="flex justify-center gap-4">
        <a
          href="tel:01709863222"
          className="bg-orange-500 text-white py-2 px-6 rounded-lg text-lg flex items-center gap-2"
        >
          <span className="material-icons">call</span>
          Call 01709 863222
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

export default CallToAction;
