import React from 'react'
import travelImage from "../../public/travelImage.jpg"

export default function NriComponent() {
   const benefits = [
    {
      icon: "💰",
      title: "Save up to 70%",
      description: "Save up to 70% vs. Aussie prices",
      highlight: "70% Savings",
    },
    {
      icon: "⭐",
      title: "World-class treatments",
      description: "World-class, painless treatments",
      highlight: "Premium Care",
    },
    {
      icon: "🏖️",
      title: "All-in-one package",
      description: "Surgery + Tourism + Recovery = All-in-one",
      highlight: "Complete Experience",
    },
    {
      icon: "🎯",
      title: "Free consultation",
      description: "Free quotes during our Australia visit",
      highlight: "No Cost Quote",
    },
  ]

    return (
        <>





    <div className=" pt-16 ">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 ">
          {/* Left Side - Content */}
          <div className="space-y-8">
            {/* Header */}
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <div className="p-2 CDH-uae  rounded-full">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-white">
                    <path
                      d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
                <span className="text-sm font-semibold text-orange-600 uppercase tracking-wide">Dental Tourism</span>
              </div>

              <h1 className="text-4xl lg:text-4xl font-bold text-gray-900 leading-tight">
                Why <span className="  CDH-gradiant">NRIs</span> Fly to <span className=" CDH-gradiant">India</span>{" "}
                for Dental Care
              </h1>

              <p className="text-[14px] text-gray-600 leading-relaxed">
                Discover world-class dental treatments at unbeatable prices, combined with an unforgettable travel
                experience.
              </p>
            </div>

            {/* Benefits Grid */}
            <div className="grid sm:grid-cols-2 gap-3">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="group p-3 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200"
                >
                  <div className="flex items-start gap-4">
                    <div className="text-2xl">{benefit.icon}</div>
                    <div className="space-y-2">
                      <h3 className="text-[15px] leading-[20px]  font-[600] text-gray-900 group-hover:text-blue-600 transition-colors">
                        {benefit.title}
                      </h3>
                      <p className="text-gray-600 text-[14px] leading-[20px]">{benefit.description}</p>
                      <div className="inline-block px-3 py-1 bg-gradient-to-r from-blue-100 to-orange-100 mt-[10px] text-blue-700 text-[12px] font-semibold rounded-full">
                        {benefit.highlight}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* Right Side - Visual */}
          <div className="relative">
            {/* Main Image Container */}
            <div className="relative rounded-xl h-[450px] mt-[30px] overflow-hidden shadow-2xl">
              {/* Placeholder for dental clinic image */}
     
           <img className=' object-cover h-[100%]' src={travelImage} />
      

              {/* Floating Stats */}
         


            </div>

            {/* Background Decorations */}
            <div className="absolute -z-10 top-8 right-8 w-32 h-32 bg-gradient-to-br from-blue-200 to-transparent rounded-full opacity-50"></div>
            <div className="absolute -z-10 bottom-8 left-8 w-24 h-24 bg-gradient-to-br from-orange-200 to-transparent rounded-full opacity-50"></div>
          </div>
        </div>
      </div>
    </div>

        </>
    )
}
