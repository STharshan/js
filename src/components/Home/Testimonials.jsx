import React from 'react';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa'; // Importing the quote icons

const testimonials = [
    {
        name: 'Barry Harvey',
        service: 'Full Servicing',
        feedback: 'Best in area. Joe and team all do there best by you. Highly recommend prices and service 2nd to none',
        rating: 5,
    },
    {
        name: 'David Reeve',
        service: 'Regular Servicing',
        feedback: 'Just had timing belt and water pump done on my C Max. Great customer service and at a very competitive price. Thank you so much folks. 🤩👍🏻',
        rating: 5,
    },
    {
        name: 'Patricia Cross',
        service: 'MOT Testing',
        feedback: 'Very polite gent.he arrived at my house within 20 mins of me phoning him to fix my Toyota yaris.i will definitely be using him again and I highly recommend him.',
        rating: 5,
    },
    {
        name: 'David Pryse',
        service: 'Brake Service',
        feedback: `Was a pleasure to meet this young man, He managed to fit us in to his busy schedule
                   Delighted with his workmanship, above and beyond with helpfulness
                   And a very reasonable costing, would definitely recommend 👍`,
        rating: 5,
    },
    {
        name: 'katelynne jane williams',
        service: 'Suspension Repair',
        feedback: 'Joe looked at what was wrong with my car (lock on my boot). He sourced my part and then fitted it. He wouldn’t accept payment until he knew the completed works were to my satisfaction. Thank you Joe.',
        rating: 5,
    },
    {
        name: 'Adam Lally',
        service: 'General Repairs',
        feedback: 'Absolutely fantastic service would definitely recommend, great value and professional service , will be using Joe again 100%',
        rating: 5,
    },
];

const Testimonials = () => {
    return (
        <section className="py-16 px-4 bg-gray-50">
            <div className="max-w-7xl mx-auto text-center">
                <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-8">
                    What Our Customers Say
                </h2>
                <p className="text-xl max-w-4xl mx-auto font-semibold text-gray-800 mb-12">
                    Don't just take our word for it. Here's what our satisfied customers have to say about our automotive services.
                </p>
                <div className="grid md:grid-cols-3 gap-8 max-w-310 mx-auto">
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="bg-white p-6 rounded-xl border border-gray-300 shadow-md">
                            <div className="flex justify-between items-start mb-4">
                                <div className="text-orange-500">
                                    {Array.from({ length: testimonial.rating }).map((_, idx) => (
                                        <span key={idx} className="text-xl">★</span>
                                    ))}
                                </div>
                                <div className="ml-auto text-xl text-gray-400">
                                    <FaQuoteRight /> {/* Right quote icon */}
                                </div>
                            </div>
                            <p className="text-lg text-gray-700 mb-4 text-left">
                                "{testimonial.feedback}"
                            </p>
                            <hr className='mb-4 text-gray-300' />
                            <p className=" text-left font-semibold text-gray-900">{testimonial.name}</p>
                            {/* <p className="text-left text-sm text-gray-500">{testimonial.service}</p> */}
                        </div>
                    ))}
                </div>
                <div className="flex items-center gap-4 bg-orange-100 border-gray-600 px-6 py-2 rounded-full max-w-90 mx-auto mt-8">
                    {/* Stars */}
                    <div className="flex text-orange-500 text-2xl space-x-1">
                        <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                    </div>
                    {/* Score */}
                    <span className="text-sm mt-1">4.9/5 </span>
                    {/* Reviews */}
                    <span className=" text-sm mt-1 text-gray-700">from 500+ reviews</span>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
