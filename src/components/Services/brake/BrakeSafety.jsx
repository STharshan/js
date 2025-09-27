import React from 'react';

const BrakeSafety = () => {
  // iOS Safari hack to ensure :active triggers
  const touchStart = () => {};

  return (
    <section className="container mx-auto px-6 sm:px-8 lg:px-18 py-16">
      {/* Heading */}
      <h1 className="text-4xl font-bold text-center mb-6 text-gray-900">
        Brake Safety Warning Signs
      </h1>
      <p className="text-lg text-center mb-12 text-gray-700 max-w-3xl mx-auto">
        Don't ignore these warning signs. Your brakes are your vehicle's most important safety system.
      </p>

      {/* Warning Section */}
      <div className="bg-red-100 p-8 rounded-xl mb-12 shadow-md">
        <h2 className="text-2xl font-semibold text-red-600 mb-4">
          When to Get Your Brakes Checked
        </h2>
        <ul className="list-disc list-inside text-lg text-red-700 space-y-2">
          <li>Squealing or grinding noises</li>
          <li>Brake pedal feels spongy or soft</li>
          <li>Vehicle pulls to one side when braking</li>
          <li>Brake warning light is on</li>
          <li>Vibration when braking</li>
          <li>Longer stopping distances</li>
          <li>Brake pedal goes to the floor</li>
          <li>Burning smell after driving</li>
        </ul>
      </div>

      {/* Services Grid */}
      <div className="grid md:grid-cols-2 gap-10">
        {/* Brake Pad Replacement */}
        <div
          role="button"
          tabIndex={0}
          onTouchStart={touchStart}
          className="bg-white p-8 rounded-xl shadow-md transition-all duration-300 
                     hover:scale-105 hover:shadow-[0_0_25px_#0d9488] 
                     active:shadow-[0_0_25px_#0d9488] cursor-pointer select-none"
        >
          <h3 className="text-2xl font-semibold text-teal-600 mb-3">
            Brake Pad Replacement
          </h3>
          <p className="text-lg font-medium text-orange-600 mb-4">From £80</p>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Quality brake pads fitted</li>
            <li>Brake disc inspection</li>
            <li>Brake fluid level check</li>
            <li>Road test included</li>
          </ul>
        </div>

        {/* Full Brake Service */}
        <div
          role="button"
          tabIndex={0}
          onTouchStart={touchStart}
          className="bg-white p-8 rounded-xl shadow-md transition-all duration-300 
                     hover:scale-105 hover:shadow-[0_0_25px_#0d9488] 
                     active:shadow-[0_0_25px_#0d9488] cursor-pointer select-none"
        >
          <h3 className="text-2xl font-semibold text-teal-600 mb-3">
            Full Brake Service
          </h3>
          <p className="text-lg font-medium text-orange-600 mb-4">From £150</p>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Brake pads and discs</li>
            <li>Brake fluid replacement</li>
            <li>Brake system inspection</li>
            <li>Handbrake adjustment</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default BrakeSafety;
