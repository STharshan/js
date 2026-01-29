import React from "react";
import { FaQuoteRight } from "react-icons/fa";
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
    name: "Katelynne Jane Williams",
    service: "Suspension Repair",
    feedback:
      "Joe looked at what was wrong with my car (lock on my boot). He sourced my part and then fitted it. Thank you Joe.",
    rating: 5,
  },
  {
    name: "Adam Lally",
    service: "General Repairs",
    feedback:
      "Absolutely fantastic service would definitely recommend, great value and professional service , will be using Joe again 100%",
    rating: 5,
  },
  {
    name: "smithypeart1",
    service: "General Repairs",
    feedback:
      "First time dealing with this garage as I am new around here and wasn't disappointed,I had to get them to come to me as well,which was very handy.They were friendly,helpful,and got the job done in time, will be going back there in the future 👍",
    rating: 5,
  },
  {
    name: "Melbourne Raceway Drag Racing UK",
    service: "General Repairs",
    feedback:
      "On 2 occasions had an emergency breakdown and thanks to Joe he got it sorted quickly for us. Thankyou",
    rating: 5,
  },
  {
    name: "Donny Diners Club",
    service: "General Repairs",
    feedback:
      "Absolute top class service from Joe and his team, cannot thank him enough. 👏",
    rating: 5,
  },
  {
    name: "Mbuzi Yanga",
    service: "General Repairs",
    feedback:
      "The customer service from JS automotive team is exceptional . And will always recommend these nice people . Car fixed in time and was well informed of the development . Thank you.",
    rating: 5,
  },
  {
    name: "Josh Sills",
    service: "General Repairs",
    feedback:
      "amazing service but then it comes at no supprise joe is a fantastic very knowledgable lad and as fair as they come did a cracking job on my audi a5 thankyou joe your a legend 😎👌",
    rating: 5,
  },

];

const Testimonials = () => {


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

        {/* Swiper */}
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
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index} className="flex py-20">
              <div
                data-aos={index % 2 === 0 ? "fade-up" : "fade-down"}
                data-aos-delay={index * 100}
                className="
                  bg-white dark:bg-gray-800
                  h-[300px]
                  w-full flex flex-col
                  p-6 rounded-xl
                  border border-gray-300 dark:border-gray-700
                  shadow-md transition duration-300
                  hover:shadow-[0_0_25px_#00BFA5] hover:scale-105
                "
              >
                {/* Content */}
                <div className="flex-1">
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
                    <FaQuoteRight className="text-xl text-gray-400 dark:text-gray-500" />
                  </div>

                  {/* Feedback */}
                  <p className="text-lg text-gray-700 dark:text-gray-300 text-left line-clamp-4">
                    "{testimonial.feedback}"
                  </p>
                </div>

                {/* Footer */}
                <div className="pt-6">
                  <hr className="mb-4 border-gray-300 dark:border-gray-600" />
                  <p className="font-semibold text-gray-900 dark:text-gray-100 text-left">
                    {testimonial.name}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Overall Rating */}
        <div
          className="flex items-center gap-4 bg-orange-100 dark:bg-orange-900/40
          border border-gray-300 dark:border-gray-600
          px-6 py-2 rounded-full max-w-fit mx-auto mt-10"
          data-aos="zoom-in"
        >
          <div className="flex text-orange-500 text-2xl space-x-1">
            <span>★</span>
            <span>★</span>
            <span>★</span>
            <span>★</span>
            <span>★</span>
          </div>

          <span className="text-sm text-gray-800 dark:text-gray-200">
            5/5
          </span>

          <span className="text-sm text-gray-700 dark:text-gray-300">
            from 33 reviews
          </span>
        </div>
      </div>

      {/* Swiper arrow color */}
      <style jsx global>{`
        .swiper-button-next,
        .swiper-button-prev {
          color: #000 !important;
        }
      `}</style>
    </section>
  );
};

export default Testimonials;
