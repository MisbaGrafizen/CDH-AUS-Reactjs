"use client"

import { useState, useEffect } from "react"

import mainimage1 from "../../public/whyChoose/CDH-happy-clients1.webp"
import mainimage2 from "../../public/whyChoose/CDH-happy-clients2.webp"
import mainimage3 from "../../public/whyChoose/CDH-happy-clients3.webp"
import mainimage4 from "../../public/whyChoose/CDH-happy-clients4.webp"

import {
  Users,
  CheckCircle,
  Clock,
  Star,
  Plane,
  CreditCard,
} from "lucide-react";

import { motion } from "framer-motion";

const features = [
  {
    icon: <Users size={24} />,
    title: "3500+ International Patients",
    description:
      "We've successfully treated patients from around the globe with personalized care.",
    content:
      "Our international patient program has welcomed people from over 40 countries. We understand the unique needs of traveling patients and provide comprehensive support throughout your treatment journey.",
  },
  {
    icon: <CheckCircle size={20} />,
    title: "30,000+ Healthy Smiles",
    description:
      "We've delivered expert care and heartfelt service to over thirty thousand satisfied patients.",
    content:
      "Our commitment to excellence has transformed the lives of more than 30,000 patients. Each smile represents our dedication to providing exceptional care and creating lasting relationships with our patients.",
  },
  {
    icon: <Clock size={20} />,
    title: "One Visit Dental Implants",
    description:
      "Get your treatment completed in a single visit - no multiple trips required.",
    content:
      "Our advanced technology and specialized techniques allow us to complete your dental implant procedure in just one visit. This saves you time, reduces travel costs, and minimizes disruption to your schedule.",
  },
  {
    icon: <Star size={20} />,
    title: "4.9 Star Rated (2600+ Reviews)",
    description:
      "Our patients consistently rate us with top marks for our quality care.",
    content:
      "With over 2,600 verified Google reviews and a near-perfect 4.9-star rating, our reputation speaks for itself. We're proud that our patients take the time to share their positive experiences with our practice.",
  },
  {
    icon: <Plane size={20} />,
    title: "Special NRI Facilities",
    description:
      "Comprehensive support including airport pickup and travel assistance for non-resident patients.",
    content:
      "We go the extra mile for our non-resident patients with services including airport pickup, hotel discounts, local transportation assistance, and help with planning your medical travel itinerary.",
  },
  {
    icon: <CreditCard size={20} />,
    title: "Affordable Pricing",
    description:
      "Save 50%-70% compared to international rates while receiving world-class treatment.",
    content:
      "Experience significant cost savings without compromising on quality. Our transparent pricing model ensures you receive the best value for world-class dental care, with savings of 50-70% compared to international rates.",
  },
];

const FeatureCard = ({ icon, title, description, active, onClick }) => {
  return (
    <div
      className={`relative p-4 shadow-lg rounded-xl transition-all duration-300 cursor-pointer border ${active
        ? "bg-gradient-to-br from-teal-50 to-teal-100 border-teal-200 shadow-md"
        : "bg-white border-gray-100 hover:border-teal-100"
        }`}
      onClick={onClick}
    >
      <div className="flex flex-col items-start gap-1">
      <div className=" flex gap-[10px]">

    
        <div
          className={` w-[40px]  h-[40px] text-[12px] flex-shrink-0  flex justify-center items-center rounded-full ${active ? "bg-teal-600 text-white" : "bg-teal-100 text-teal-600"
            }`}
        >
          {icon}
        </div>
        <div>
          <h3 className="text-[16px] font-semibold mb-2">{title}</h3>

        </div>
          </div>
        <p className="text-gray-600 text-[12px]">{description}</p>
      </div>

      {active && (
        <motion.div
          className="absolute -bottom-1 left-1/2 w-4 h-4 bg-teal-100 rotate-45 transform -translate-x-1/2 translate-y-1/2 border-r border-b border-teal-200"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        />
      )}
    </div>
  );
};


export default function WhyChooseUs() {
  const [currentImage, setCurrentImage] = useState(0)
  const [activeIndex, setActiveIndex] = useState(null);

  const images = [
    mainimage1, mainimage2, mainimage3, mainimage4
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  const benefits = [
    {
      id: 1,
      title: "3500+ International Patients Treated",
      description: "We've successfully treated patients from around the globe.",
    },
    {
      id: 2,
      title: "Trusted by more than 30,000 healthy smiles.",
      description: "We’ve delivered 30,000+ healthy smiles with expert care and heartfelt service.",
    },
    {
      id: 3,
      title: "One Visit Dental Implants",
      description: "No Multiple Trips Required - get your treatment completed in a single visit.",
    },
    {
      id: 4,
      title: "2600+ Google Reviews — 4.9 Star Rated",
      description: "Our patients consistently rate us with top marks for our quality care.",
    },
    {
      id: 5,
      title: "Special NRI Facilities",
      description: "Airport Pickup, Hotel Discounts, Travel Help for non-resident patients.",
    },
    {
      id: 6,
      title: "Affordable Pricing",
      description: "Save up to 50%-70% compared to international rates while receiving the same world-class dental treatment.",
    }

  ]

  return (
    <div className=" w-[100%] pt-[50px]">
      <div className=" mx-auto">
  <h2 className=" !text-[60px] font-[500] text-gray-800 mb-2  mx-auto left-0 right-0 font-Cursive   top-[-30px] md:top-[-35px] text-center">Why Choose Us?</h2>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <section className="grid gap-[10px] md:gap-6 md:grid-cols-2 ">
            {features.map((feature, i) => (
              <FeatureCard
                key={i}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                active={activeIndex === i}
                onClick={() => setActiveIndex(i)}
              />
            ))}
          </section>
          <div className="relative h-[300px]     md:h-[450px] rounded-lg overflow-hidden shadow-xl">
            {images.map((image, index) => (
              <div
                key={index}
                className={`absolute inset-0 h-[100%] w-[100%] transition-opacity duration-1000 ${index === currentImage ? "opacity-100" : "opacity-0"
                  }`}
              >
                <img
                  src={image || "/placeholder.svg"}
                  alt={`Dental care image ${index + 1}`}
                  fill
                  className="object-cover w-[100%] h-[100%]"
                  priority={index === 0}
                />
              </div>
            ))}

            {/* Image indicators */}
            <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">


              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImage(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-colors ${index === currentImage ? "bg-white" : "bg-white/50"
                    }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Right side - Benefits list */}
          {/* <div className="">
            <ul className="space-y-6 container12 p-[15px] md:p-[20px] relative rounded-[10px] md:mt-[0px] mt-[40px]  border">

            <h2 className=" text-[45px] md:text-[45px] font-[500] text-gray-800 mb-8  mx-auto left-0 right-0 font-Cursive absolute  top-[-30px] md:top-[-35px] text-center">Why Choose Us?</h2>
              {benefits.map((benefit) => (
                <li key={benefit.id} className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className=" w-[15px] h-[15px] mt-[5px] rounded-full  bs-cdh flex items-center justify-center text-white font-bold">
                 
                    </div>
                  </div>
                  <div>
                    <h3 className="font-[600] text-lg text-gray-800">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div> */}
        </div>
      </div>
    </div>
  )
}
