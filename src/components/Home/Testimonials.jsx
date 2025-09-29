import React, { useEffect } from "react";
import { FaQuoteRight } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper/modules";

// Testimonials data
const testimonials = [
  {
    name: "Barry Harvey",
    service: "Full Servicing",
    feedback:
      "Best in area. Joe and team all do there best by you. Highly recommend prices and service 2nd to none",
    rating: 5,
  },
  {
    name: "David Reeve",
    service: "Regular Servicing",
    feedback:
      "Just had timing belt and water pump done on my C Max. Great customer service and at a very competitive price. Thank you so much folks. 🤩👍🏻",
    rating: 5,
  },
  {
    name: "Patricia Cross",
    service: "MOT Testing",
    feedback:
      "Very polite gent. He arrived at my house within 20 mins of me phoning him to fix my Toyota yaris. I will definitely be using him again and I highly recommend him.",
    rating: 5,
  },
  {
    name: "David Pryse",
    service: "Brake Service",
    feedback: `Was a pleasure to meet this young man, He managed to fit us in to his busy schedule.
               Delighted with his workmanship, above and beyond with helpfulness.
               And a very reasonable costing, would definitely recommend 👍`,
    rating: 5,
  },
  {
    name: "Katelynne Jane Williams",
    service: "Suspension Repair",
    feedback:
      "Joe looked at what was wrong with my car (lock on my boot). He sourced my part and then fitted it. He wouldn’t accept payment until he knew the completed works were to my satisfaction. Thank you Joe.",
    rating: 5,
  },
  {
    name: "Adam Lally",
    service: "General Repairs",
    feedback:
      "Absolutely fantastic service would definitely recommend, great value and professional service , will be using Joe again 100%",
    rating: 5,
  },
];

const Testimonials = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
  }, []);

  return (
    <section className="py-16 px-4 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto text-center">
        <h2
          className="text-4xl md:text-5xl font-semibold text-gray-900 dark:text-gray-100 mb-8"
          data-aos="fade-down"
        >
          What Our Customers Say
        </h2>
        <p
          className="text-xl max-w-4xl mx-auto font-semibold text-gray-800 dark:text-gray-300 mb-12"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Don't just take our word for it. Here's what our satisfied customers
          have to say about our automotive services.
        </p>

        {/* Swiper Slider */}
        <Swiper
          modules={[Pagination, Navigation, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          navigation
          loop
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="pb-12"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index} className="h-full">
              <div
                data-aos={index % 2 === 0 ? "fade-up" : "fade-down"}
                data-aos-delay={index * 100}
                className="
                  bg-white dark:bg-gray-800 
                  h-full min-h-[350px] flex flex-col justify-between
                  p-6 rounded-xl border border-gray-300 dark:border-gray-700 shadow-md
                  transform transition duration-300
                  hover:shadow-[0_0_25px_#00BFA5] hover:scale-105
                  active:shadow-[0_0_25px_#00BFA5]
                "
              >
                {/* Stars & Quote */}
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <div className="text-orange-500">
                      {Array.from({ length: testimonial.rating }).map(
                        (_, idx) => (
                          <span key={idx} className="text-xl">
                            ★
                          </span>
                        )
                      )}
                    </div>
                    <div className="ml-auto text-xl text-gray-400 dark:text-gray-500">
                      <FaQuoteRight />
                    </div>
                  </div>

                  {/* Feedback */}
                  <p className="text-lg text-gray-700 dark:text-gray-300 mb-4 text-left">
                    "{testimonial.feedback}"
                  </p>
                </div>

                {/* Footer (divider + name) */}
                <div>
                  <hr className="mb-4 border-gray-300 dark:border-gray-600" />
                  <p className="text-left font-semibold text-gray-900 dark:text-gray-100">
                    {testimonial.name}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Overall Rating Badge */}
        <div
          className="flex items-center gap-4 bg-orange-100 dark:bg-orange-900/40 border border-gray-300 dark:border-gray-600 px-6 py-2 rounded-full max-w-90 mx-auto mt-8"
          data-aos="zoom-in"
        >
          {/* Stars */}
          <div className="flex text-orange-500 text-2xl space-x-1">
            <span>★</span>
            <span>★</span>
            <span>★</span>
            <span>★</span>
            <span>★</span>
          </div>
          {/* Score */}
          <span className="text-sm mt-1 text-gray-800 dark:text-gray-200">
            4.9/5
          </span>
          {/* Reviews */}
          <span className="text-sm mt-1 text-gray-700 dark:text-gray-300">
            from 500+ reviews
          </span>
        </div>
      </div>

      {/* Swiper arrow color override */}
      <style jsx global>{`
        .swiper-button-next,
        .swiper-button-prev {
          color: #000 !important; /* black arrows */
        }
      `}</style>
    </section>
  );
};

export default Testimonials;
