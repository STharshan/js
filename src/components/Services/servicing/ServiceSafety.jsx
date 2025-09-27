import React from 'react';

const ServiceSafety = () => {
  // iOS Safari hack to trigger :active styles
  const touchStart = () => {};

  const services = [
    {
      name: "Basic Service",
      price: "£120",
      highlight: false,
      features: [
        "Oil and filter change",
        "Fluid level checks",
        "Battery test",
        "Tyre pressure check",
        "Basic safety inspection",
      ],
    },
    {
      name: "Full Service",
      price: "£180",
      highlight: true,
      features: [
        "Everything in Basic Service",
        "Comprehensive inspection",
        "Brake system check",
        "Suspension inspection",
        "Exhaust system check",
        "Detailed report",
      ],
    },
    {
      name: "Major Service",
      price: "£250",
      highlight: false,
      features: [
        "Everything in Full Service",
        "Timing belt inspection",
        "Coolant system service",
        "Air filter replacement",
        "Spark plug check/replace",
        "Comprehensive diagnostics",
      ],
    },
  ];

  return (
    <section className="container mx-auto px-6 sm:px-8 lg:px-12 py-16">
      <h2 className="text-4xl font-semibold text-center mb-6 text-gray-900">
        Service Intervals
      </h2>
      <p className="text-center text-lg mb-12 text-gray-700">
        Regular servicing keeps your vehicle running efficiently and helps prevent costly breakdowns.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {services.map((service, idx) => (
          <div
            key={idx}
            role="button"
            tabIndex={0}
            onTouchStart={touchStart}
            className={`
              p-8 rounded-xl shadow-md bg-white
              transition-all duration-300 cursor-pointer select-none
              hover:scale-105
              hover:shadow-[0_0_25px_#0d9488]
              active:shadow-[0_0_25px_#0d9488]
              ${service.highlight ? "bg-teal-50 border border-teal-200" : ""}
            `}
          >
            <h3 className="text-2xl font-semibold text-teal-600 mb-2">
              {service.name}
            </h3>
            <p className="text-xl font-bold text-teal-500">{service.price}</p>
            {service.highlight && (
              <p className="text-md text-orange-500 font-medium mt-1">
                Most Popular
              </p>
            )}
            <ul className="mt-5 space-y-2 text-gray-700">
              {service.features.map((feature, i) => (
                <li key={i}>• {feature}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServiceSafety;
