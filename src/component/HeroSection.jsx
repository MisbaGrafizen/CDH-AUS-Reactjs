// import React, { useState } from 'react'
// import usaflag from "../../public/uk/Aus.webp"



// export default function HeroSection() {


//     const [variant, setVariant] = useState("purple")

//     const data = [
//         { date: "30 & 31 May ", city: "Crawley" },
//         { date: "1st June ", city: "Wembley" },
//         { date: "3rd June ", city: " Harrow" },
//         { date: "4th & 5th June ", city: "Birmingham " },
//         { date: "7th & 8th June ", city: "Leicester " },



//     ]

//     const variants = {

//         ocean: {
//             container: "bg-gradient-to-br from-teal-50 to-blue-100 shadow-md rounded-lg",
//             header: "bg-gradient-to-r from-teal-500 to-blue-500 text-white",
//             headerRow: "bg-gradient-to-r from-teal-200 to-blue-200",
//             row: "even:bg-white odd:bg-gradient-to-r odd:from-teal-50 odd:to-blue-50",
//         },
//     }

//     const currentVariant = variants[variant]

//     return (
//         <>

//             <div className=' md:w-[100%] w-[96%] mx-auto font-Poppins flex  pt-[90px] md:pt-[140px] '>
//                 <div className=' mx-auto flex md:flex-row flex-col pt-[80px]  justify-between gap-[30px] rounded-[20px] md:px-[20px]   md:h-[480px]  w-[100%]'>
//                     <div className=' flex  flex-col gap-[10px]'>
//                         <div className=' flex  gap-[40px]'>
//                             <h1 className='  font-[700] md:leading-[65px] leading-[43px] text-[36px] md:text-[60px]  uppercase'>
//                                 <span className=' flex '>
//                                     Hello    !
//                                 </span>    <b className=' CDH-gradiant text- font-[700] flex-shrink-0'> AUSTRALIA </b>
//                             </h1>
//                             {/* <img className=' flex w-[180px] border ml-[0px] object-cover rounded-[10px] h-[110px]' src={ukFlag} /> */}
//                         </div>
//                         <div className=' flex flex-col '>
//                             <div className="  py-2  md:px-[14px] rounded-lg border border-white/20 mt-[14px] mb-4 max-w-2xl">
//                                 <h2 className="text- text-2xl md:text-[23px]  leading-[30px] font-medium">
//                                     Are you looking for affordable, world-class <b className=' font-medium CDH-gradiant'>dental treatment </b>?
//                                 </h2>
//                             </div>

//                             {/* Service highlights */}
//                             <div className= "flex md:flex-row flex-col  gap-4 mb-12 over">
//                                 <div className="bg-[#1f813088] container12 backdrop-blur-sm p-3 rounded-lg border border-white/20 ">
//                                     <h3 className="font-[600]  mb-1">Dental Implants</h3>
//                                     <p className="text-sm text-">Premium quality dental solutions</p>
//                                 </div>
//                                 <div className="bg-[#1f813088] container12 backdrop-blur-sm p-3 rounded-lg border border-white/20 ">
//                                     <h3 className="font-[600] mb-1">Smile Designing</h3>
//                                     <p className="text-sm text-">Aesthetic dental transformations</p>
//                                 </div>
//                                 <div className="bg-[#1f813088]  container12 backdrop-blur-sm p-3 rounded-lg border border-white/20 ">
//                                     <h3 className="font-[600] mb-1">Full Mouth Rehabilitation</h3>
//                                     <p className="text-sm text-">Complete dental restoration</p>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                     <div className={`md:w-[290px] w-[290px] h-[280px] mx-auto overflow-hidden bg-gradient-to-br shadow-md rounded-full`}>

//                         <img className=" w-full h-full " src={usaflag} />

//                     </div>
//                 </div>
//             </div>


//         </>
//     )
// }





import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { ArrowRight, Star, Users, Award } from "lucide-react"
import usaflag from "../../public/uk/Aus.webp"

export default function HeroSection() {
  const [currentService, setCurrentService] = useState(0)

  const services = [
    {
      title: "Dental Implants",
      description: "Premium quality dental solutions",
      icon: "🦷",
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Smile Designing",
      description: "Aesthetic dental transformations",
      icon: "✨",
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "Full Mouth Rehabilitation",
      description: "Complete dental restoration",
      icon: "😊",
      color: "from-emerald-500 to-teal-500",
    },
  ]

  const stats = [
    { icon: Users, value: "10,000+", label: "Happy Patients" },
    { icon: Star, value: "4.9", label: "Rating" },
    { icon: Award, value: "15+", label: "Years Experience" },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentService((prev) => (prev + 1) % services.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className=" relative overflow-hidden">
      {/* Animated background elements */}
      {/* <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
      </div> */}

      <div className="container mx-auto px-4  pt-[110px] relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left side - Content */}
          <div className="space-y-8">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <div className="inline-flex border items-center bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg mb-6">
                <img
                  src={usaflag}
                  alt="Australia Flag"
                  className="w-6 h-6 rounded-full mr-2"
                />
                <span className="text-sm font-medium text-gray-700">Serving Australian Patients</span>
              </div>

              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                <span className="text-gray-900">HELLO!</span>
                <br />
                <span className=" CDH-gradiant ">
                  AUSTRALIA
                </span>
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-4"
            >
              <p className="text-xl md:text-[18px] text-gray-700 leading-relaxed">
                Are you looking for <span className="font-semibold  CDH-gradiant">affordable, world-class</span>
                <br />
                <span className=" CDH-gradiant  font-bold">
                  dental treatment
                </span>
                ?
              </p>

              <p className="text-gray-600 text-[13px]">
                Save up to 70% on premium dental procedures while experiencing the best of Indian hospitality and
                world-class medical facilities.
              </p>
            </motion.div>

            {/* Rotating services showcase */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white/90 backdrop-blur-sm border rounded-2xl p-6 shadow-xl"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-800">Our Specialties</h3>
                <div className="flex space-x-1">
                  {services.map((_, index) => (
                    <div
                      key={index}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        index === currentService ? " CDH-uae w-6" : "bg-gray-300"
                      }`}
                    />
                  ))}
                </div>
              </div>

              <motion.div
                key={currentService}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5 }}
                className="flex items-center space-x-4"
              >
                <div
                  className={`w-12 h-12 rounded-full bg-gradient-to-r ${services[currentService].color} flex items-center justify-center text-2xl`}
                >
                  {services[currentService].icon}
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">{services[currentService].title}</h4>
                  <p className="text-gray-600">{services[currentService].description}</p>
                </div>
              </motion.div>
            </motion.div>

        
          </div>

          {/* Right side - Visual */}
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative"
            >
              {/* Main circular element */}
              <div className="w-96 h-96 mx-auto relative">
                {/* <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full animate-pulse opacity-20"></div> */}
                <div className="absolute inset-4 to-purple-500 border  rounded-full flex items-center justify-center">
                  <img
                    src={usaflag}
                    alt="Australia Flag"
                    className="w-[300px] h-[300px] rounded-full shadow-2xl object-cover "
                  />
                </div>

                {/* Floating service cards */}
                {services.map((service, index) => (
                  <motion.div
                    key={index}
                    className={`absolute w-24 h-24 bg-white rounded-2xl shadow-xl flex flex-col items-center justify-center ${
                      index === 0
                        ? "top-0 right-0"
                        : index === 1
                          ? "bottom-0 left-0"
                          : "top-1/2 -right-12 transform -translate-y-1/2"
                    }`}
                    animate={{
                      y: [0, -10, 0],
                      rotate: [0, 5, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Number.POSITIVE_INFINITY,
                      delay: index * 0.5,
                    }}
                  >
                    <div className="text-2xl mb-1">{service.icon}</div>
                    <div className="text-xs font-medium text-center px-1">{service.title.split(" ")[0]}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  )
}
