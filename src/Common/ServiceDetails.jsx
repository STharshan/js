import React from 'react';
import { FiCheckCircle } from 'react-icons/fi';

const ServiceDetails = ({ includedItems, whyChooseItems }) => {
  const touchStart = () => {};

  const Card = ({ title, items, iconColorClass }) => (
    <div
      role="button"
      tabIndex={0}
      onTouchStart={touchStart}
      className="p-8 rounded-xl shadow-md transition-all duration-300
                 cursor-pointer select-none
                 hover:scale-105 
                 hover:shadow-[0_0_25px_#0d9488] 
                 active:shadow-[0_0_25px_#0d9488]
                 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
    >
      <h2 className="text-2xl font-semibold mb-6 dark:text-white">{title}</h2>
      <ul className="list-none space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed">
        {items.map((item, i) => (
          <li key={i} className="flex items-center space-x-3">
            <FiCheckCircle className={`h-6 w-6 ${iconColorClass} flex-shrink-0`} />
            <span className="text-base">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <section className="px-6 sm:px-8 lg:px-18 py-16 bg-white dark:bg-[#0E1625] transition-colors duration-300">
      <div className="grid md:grid-cols-2 gap-10">
        <Card 
          title="What's Included" 
          items={includedItems} 
          iconColorClass="text-teal-500 dark:text-teal-400" 
        />
        <Card 
          title="Why Choose Our Service" 
          items={whyChooseItems} 
          iconColorClass="text-orange-500 dark:text-orange-400" 
        />
      </div>
    </section>
  );
};

export default ServiceDetails;