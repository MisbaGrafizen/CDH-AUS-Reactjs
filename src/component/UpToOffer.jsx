


import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronRight, Check } from "lucide-react"

export default function UpToOffer() {

      const [activeService, setActiveService] = useState(null)

  const services = [
    {
      id: 1,
      title: "Implants",
      subtitle: "Single Tooth Replacement",
      description:
        "Single tooth replacement with premium dental implants. Includes consultation, surgery, and follow-up care.",
      benefits: ["Natural appearance", "Preserves bone structure", "Long-lasting solution"],
      icon: "🦷",
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
    },
    {
      id: 2,
      title: "Full Mouth Implants",
      subtitle: "Complete Restoration",
      description:
        "Complete restoration with full-arch dental implants. Transform your smile and regain full functionality. Painless, bloodless procedure at our clinic.",
      benefits: ["Entire arch restoration", "Improved chewing ability", "Prevents bone loss"],
      icon: "✨",
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200",
    },
    {
      id: 3,
      title: "Smile Makeover",
      subtitle: "Complete Transformation",
      description:
        "A smile makeover is a personalized combination of cosmetic dental procedures designed to enhance the appearance and health of your smile.",
      benefits: ["Custom treatment plan (Crowns and veneers)", "Enhance the appearance", "Function of your smile"],
      icon: "😊",
      color: "from-emerald-500 to-teal-500",
      bgColor: "bg-emerald-50",
      borderColor: "border-emerald-200",
    },
  ]

    return (
        // <div className="w-full md:px-[40px] px-[0px] py-[20px]  md:bg-[#1c94520e] mx-auto  rounded-2xl">
        //     <motion.div
        //         initial={{ opacity: 0, y: -20 }}
        //         animate={{ opacity: 1, y: 0 }}
        //         transition={{ duration: 0.8 }}
        //         className="text-center mb-12"
        //     >
        //         <h1 className='  font-[700] gap-[10px] text-[40px]  md:text-[60px]'>
        //         Upto
        //             <b className=' px-[10px] CDH-gradiant font-[700]'>
        //                 50% - 70%
        //             </b>
        //             Savings
        //         </h1>

        //     </motion.div>

        //     <div className="relative  mt-[150px]   md:h-[800px]">
        //         {/* Central vertical line */}
        //         <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-emerald-600 CDH-uae h-full rounded-full "></div>

        //         <div className="relative z-10 space-y-1">
        //             {services.map((service, index) => (
        //                 <div key={service.id} className="relative">
        //                     {/* Service node */}
        //                     <motion.div
        //                         initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
        //                         animate={{ opacity: 1, x: 0 }}
        //                         transition={{ duration: 0.6, delay: 0.3 * index }}
        //                         className={`flex ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"} items-center`}
        //                     >
        //                         {/* Service info */}
        //                         <div className={`md:w-1/2 ${index % 2 === 0 ? "md:pr-8  text-right" : "pl-8 text-left"}`}>
        //                             <div className="group inline-block h-[70px]">
        //                                 <h3 className="md:text-2xl flex flex-shrink-0 mt-[20px] font-bold group-hover:text-emerald-700 transition-colors">
        //                                     {service.name}
        //                                 </h3>
        //                             </div>
        //                         </div>

        //                         {/* Center node */}
        //                         <div className="absolute left-1/2 transform -translate-x-1/2">
        //                             <motion.div
        //                                 whileHover={{ scale: 1.2 }}
        //                                 whileTap={{ scale: 0.9 }}
        //                                 className={`w-10 h-10 rounded-full flex items-center justify-center cursor-pointer
        //               bg-white border-2 border-emerald-600`}
        //                             >
        //                                 <service.icon className="w-5 h-5 CDH-gradiant" />
        //                             </motion.div>
        //                         </div>
        //                     </motion.div>

        //                     {/* Always visible details */}
        //                     <motion.div
        //                         initial={{ opacity: 0, y: 10 }}
        //                         animate={{ opacity: 1, y: 0 }}
        //                         transition={{ duration: 0.3 }}
        //                         className={`mt-[]  relative md:top-[-180px]  border-[#00843D] border-[1.4px] max-w-md bg-white p-4 rounded-xl shadow-lg ${index % 2 === 0 ? "ml-auto pr-8" : "mr-auto pl-8"
        //                             }`}
        //                     >
        //                         <div className="flex justify-between items-start mb-4">
        //                             <div className="flex items-center">
        //                                 <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center mr-3">
        //                                     <service.icon className="w-5 h-5 text-emerald-600" />
        //                                 </div>
        //                                 <h4 className="text-xl font-bold">{service.name}</h4>
        //                             </div>
        //                             {/* <div className="flex flex-col items-end">
        //                                 <span className="text-sm text-gray-500 line-through">{service.originalPrice}</span>
        //                                 <span className="text-xl font-bold text-emerald-600">{service.discountedPrice}</span>
        //                             </div> */}
        //                         </div>
        //                         <p className="text-gray-600 mb-4">{service.description}</p>
        //                         <div className="space-y-2">
        //                             {service.features.map((feature, i) => (
        //                                 <div key={i} className="flex items-center">
        //                                     <div className="w-2 h-2 rounded-full bg-emerald-600 mr-2"></div>
        //                                     <span className="text-sm">{feature}</span>
        //                                 </div>
        //                             ))}
        //                         </div>

        //                     </motion.div>
        //                 </div>
        //             ))}
        //         </div>
        //     </div>
        // </div>

        <>





 

    <section className="py-16 ">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Upto{" "}
            <span className=" CDH-gradiant">50% - 70%</span>{" "}
            Savings
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
          You can save ₹10 L by choosing India without compromising on quality
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              className={`relative overflow-hidden   bg-[#fff] h-[340px] border rounded-2xl shadow-lg cursor-pointer transition-all duration-300 ${
                activeService === service.id ? "r" : ""
              }`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              onClick={() => setActiveService(activeService === service.id ? null : service.id)}
            >
              {/* Gradient background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-10`}></div>

              {/* Card content */}
              <div className="relative p-6 bg-white h-full">
                {/* Icon and title */}
                <div className="flex items-center mb-4">
                  <div
                    className={`w-12 h-12 rounded-full ${service.bgColor} flex items-center justify-center text-2xl mr-4`}
                  >
                    {service.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">{service.title}</h3>
                    <p className="text-sm text-gray-500">{service.subtitle}</p>
                  </div>
                </div>
                

                {/* Description */}
                <p className="text-gray-700 mb-4 leading-relaxed">{service.description}</p>

                {/* Benefits */}
                <div className="space-y-2 mb-6">
                  {service.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-start">
                      <Check className="w-4 h-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-600">{benefit}</span>
                    </div>
                  ))}
                </div>

                {/* Expand indicator */}
                {/* <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-500">
                    {activeService === service.id ? "Less details" : "More details"}
                  </span>
                  <motion.div
                    animate={{ rotate: activeService === service.id ? 90 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronRight className="w-5 h-5 text-gray-400" />
                  </motion.div>
                </div> */}

                {/* Expanded content */}
                {/* <AnimatePresence>
                  {activeService === service.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="mt-4 pt-4 border-t border-gray-100"
                    >
                      <div className="space-y-3">
                        <div>
                          <h4 className="font-medium text-gray-800 mb-1">Treatment Duration:</h4>
                          <p className="text-sm text-gray-600">
                            {service.id === 1
                              ? "1-2 visits over 3-6 months"
                              : service.id === 2
                                ? "2-3 visits over 4-6 months"
                                : "3-4 visits over 2-4 weeks"}
                          </p>
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-800 mb-1">Success Rate:</h4>
                          <p className="text-sm text-gray-600">95-98% success rate with proper care</p>
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-800 mb-1">Warranty:</h4>
                          <p className="text-sm text-gray-600">
                            {service.id === 1
                              ? "10-year implant warranty"
                              : service.id === 2
                                ? "15-year comprehensive warranty"
                                : "5-year aesthetic guarantee"}
                          </p>
                        </div>
                      </div>

                    </motion.div>
                  )}
                </AnimatePresence> */}
              </div>
            </motion.div>
          ))}
        </div>


      </div>
    </section>


        </>
    )
}
