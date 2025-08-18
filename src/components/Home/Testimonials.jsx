import React from 'react';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa'; // Importing the quote icons

const testimonials = [
    {
        name: 'Sarah Johnson',
        service: 'Engine Diagnostics',
        feedback: 'Excellent service! They diagnosed my car issue quickly and fixed it at a fair price. Very professional and trustworthy.',
        rating: 5,
    },
    {
        name: 'Mike Thompson',
        service: 'Regular Servicing',
        feedback: 'Been using JS Automotive for 3 years now. Always honest about what needs doing and what can wait. Highly recommend!',
        rating: 5,
    },
    {
        name: 'Emma Davis',
        service: 'MOT Testing',
        feedback: 'MOT test was thorough and they explained everything clearly. No pressure to do unnecessary work. Will definitely return.',
        rating: 5,
    },
    {
        name: 'James Wilson',
        service: 'Brake Service',
        feedback: 'Great work on my brake replacement. Competitive pricing and completed on time as promised. Very satisfied.',
        rating: 5,
    },
    {
        name: 'Lisa Brown',
        service: 'Suspension Repair',
        feedback: 'Professional service from start to finish. They kept me updated throughout and the work was completed to a high standard.',
        rating: 5,
    },
    {
        name: 'David Miller',
        service: 'General Repairs',
        feedback: 'Honest mechanics who won\'t try to sell you services you don’t need. Fair prices and quality work every time.',
        rating: 5,
    },
];

const Testimonials = () => {
    return (
        <section className="py-16 px-4 bg-gray-50">
            <div className="max-w-7xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
                    What Our Customers Say
                </h2>
                <p className="text-lg text-gray-600 mb-12">
                    Don't just take our word for it. Here's what our satisfied customers have to say about our automotive services.
                </p>
                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="bg-white p-6 rounded-xl shadow-md">
                            <div className="flex justify-between items-start mb-4">
                                <div className="text-yellow-500">
                                    {Array.from({ length: testimonial.rating }).map((_, idx) => (
                                        <span key={idx} className="text-xl">★</span>
                                    ))}
                                </div>
                                <div className="ml-auto text-xl text-gray-400">
                                    <FaQuoteRight /> {/* Right quote icon */}
                                </div>
                            </div>
                            <p className="text-lg text-gray-700 mb-4 text-left">
                                {testimonial.feedback}
                            </p>
                            <hr className='mb-4 text-gray-300' />
                            <p className=" text-left font-semibold text-gray-900">{testimonial.name}</p>
                            <p className="text-left text-sm text-gray-500">{testimonial.service}</p>
                        </div>
                    ))}
                </div>
                <div className="flex items-center gap-2 bg-orange-200 border-gray-600 px-6 py-2 rounded-full max-w-xs mx-auto mt-8">
                    {/* Stars */}
                    <div className="flex text-yellow-400 text-xs space-x-1">
                        <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                    </div>
                    {/* Score */}
                    <span className="text-sm">4.9/5 from</span>
                    {/* Reviews */}
                    <span className=" text-xs">500+ Reviews</span>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
