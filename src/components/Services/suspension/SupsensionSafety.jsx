import React from 'react';

const SupsensionSafety = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-semibold text-center mb-8">
        Brake Safety Warning Signs
      </h1>
      <p className="text-lg text-center mb-8">
        Don't ignore these warning signs. Your brakes are your vehicle's most important safety system.
      </p>

      <div className="bg-red-100 p-4 rounded-md mb-8">
        <h2 className="text-xl font-semibold text-red-600 mb-4">When to Get Your Brakes Checked</h2>
        <ul className="list-disc list-inside text-lg text-red-600">
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

      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold text-teal-600 mb-4">Brake Pad Replacement</h3>
          <p className="text-lg mb-4">From £80</p>
          <ul className="list-disc list-inside text-lg">
            <li>Quality brake pads fitted</li>
            <li>Brake disc inspection</li>
            <li>Brake fluid level check</li>
            <li>Road test included</li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold text-teal-600 mb-4">Full Brake Service</h3>
          <p className="text-lg mb-4">From £150</p>
          <ul className="list-disc list-inside text-lg">
            <li>Brake pads and discs</li>
            <li>Brake fluid replacement</li>
            <li>Brake system inspection</li>
            <li>Handbrake adjustment</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SupsensionSafety;
