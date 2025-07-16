import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

// import logo from "../../../public/logo-black.avif"

export default function Testimonials() {
const testimonials = [
  {
    id: 1,
    name: "Kerry Scandolera",
    role: "All-on-4 Dental Implants",
    company: "City Dental Hospital",
    image: "https://ui-avatars.com/api/?name=Kerry+Scandolera&background=062f95&color=fff",
    text: "I found City Dental Hospital online while searching for All-on-4 Dental Implants experts. Not only did I get exceptional treatment, but I also had the chance to explore the beautiful city of Rajkot. The clinic, the care, and the city truly exceeded my expectations!",
    location: "Sunbury, Australia",
  },
  {
    id: 2,
    name: "Grant Scurrah",
    role: "Full Mouth Rehabilitation",
    company: "City Dental Hospital",
    image: "https://ui-avatars.com/api/?name=Grant+Scurrah&background=062f95&color=fff",
    text: "Sitting in Gold Coast, I never thought a website would lead me to such a life-changing experience. I chose City Dental Hospital for my Full Mouth Rehabilitation, and it turned out to be the best decision. They gave me not just new teeth, but a reason to smile again. 15 days in India — and a lifetime of confidence!",
    location: "Gold Coast, Australia",
  },
  {
    id: 3,
    name: "Susy Beven Hynes",
    role: "Full Mouth Rehabilitation",
    company: "City Dental Hospital",
    image: "https://ui-avatars.com/api/?name=Susy+Beven+Hynes&background=062f95&color=fff",
    text: "Our trip from Coraki, Australia to India was meant to be a relaxing vacation, but Beven had something more in mind. After days of exploring, we visited City Dental Hospital in Rajkot for Beven’s Full Mouth Rehabilitation. Watching his smile transform was truly the highlight of our journey!",
    location: "Coraki, Australia",
  },
  {
    id: 4,
    name: "Beven Hynes",
    role: "Full Mouth Implants",
    company: "City Dental Hospital",
    image: "https://ui-avatars.com/api/?name=Beven+Hynes&background=062f95&color=fff",
    text: "My wife Susy and I came to India from Coraki, Australia, for a much-awaited vacation. While exploring this beautiful country, I also decided it was time to fix my long-standing dental issues. Choosing City Dental Hospital in Rajkot for my Full Mouth Rehabilitation was the best decision I made!",
    location: "Coraki, Australia",
  },
  {
    id: 5,
    name: "George Heary",
    role: "All-on-4 Dental Implants",
    company: "City Dental Hospital",
    image: "https://ui-avatars.com/api/?name=George+Heary&background=062f95&color=fff",
    text: "I came from Sydney for Full Mouth Rehabilitation and I’m truly happy with the results. I underwent All-on-4 Dental Implants with Zirconia Crowns, and the outcome has been exceptional. City Dental Hospital made me feel confident and cared for every step of the way!",
    location: "Sydney, Australia",
  }
];



    const controls = useAnimation();

  useEffect(() => {
    const animate = async () => {
      while (true) {
        await controls.start({
          x: '-50%',
          transition: { duration: 30, ease: "linear" },
        });
        controls.set({ x: 0 }); // reset position
      }
    };
    animate();
  }, [controls]);

  return (
    <div className=" px-4 mt-[20px]">
      <div className="w-[100%] mx-auto">
        {/* Header Section */}
        <div className="text-center mb-7">
                 {/* <h3 className="text-[#062f95] border font-[600] px-[10px] bg-[#062f95]/10  rounded-full  py-[2px] border-[#062f95] w-fit uppercase tracking-widest text-[14px] mx-auto mb-2">TESTIMONIALS</h3> */}
          <h1 className="text-4xl md:text-[40px] font-[700] text-gray-900 mb-3">
            What Our Clients Say About
            <span className="CDH-gradiant ml-2">City Dental Hospital</span>
          </h1>
   
          <p className="text-[14px] text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Trusted by industry leaders worldwide, our commitment to excellence is reflected in the testimonials from
            our valued clients and partners.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="flex gap-[24px]   overflow-x-auto mb-2">
   <motion.div
          className="flex gap-6 w-max"
          animate={controls}
        >
          {[...testimonials, ...testimonials].map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-lg border mb-[20px] shadow-lg h-[250px] w-[400px] flex flex-col shrink-0 p-4 hover:shadow-md border-[#062f95] transition-shadow duration-300"
            >
              {/* Quote Icon */}
              <div className="mb-2">
                <svg className="w-4 h-4 text-[#062f95]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z" />
                </svg>
              </div>
              <blockquote className="text-gray-700 text-[13px] leading-[20px] mb-3 font-[400]">
                {testimonial.text}
              </blockquote>
              <div className="flex mt-[10px] items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover border border-[#062f95] mr-4"
                />
                <div className="flex-grow">
                  <div className="font-semibold text-gray-900 text-sm">{testimonial.name}</div>
                  <div className=" CDH-gradiant text-[12px] font-medium">{testimonial.role}</div>
                </div>
                {/* Stars */}
                <div className="flex-shrink-0 ml-4">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                    ))}
                  </div>
                  <div className="text-xs text-gray-500 mt-1 text-center">5.0</div>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
        </div>

      </div>
    </div>
  )
}
