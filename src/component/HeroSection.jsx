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
        <div className="w-[100%] mx-auto min-h-[80vh]">
          {/* Left side - Content */}
          <div className="w-[100%] mx-auto flex flex-col gap-[10px]  justify-center items-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <div className=" flex border items-center bg-white/80 backdrop-blur-sm rounded-full w-fit mx-auto px-4 py-2 shadow-lg mb-6">
                <img
                  src={usaflag}
                  alt="Australia Flag"
                  className="w-6 h-6 rounded-full mr-2"
                />
                <span className="text-sm font-medium text-gray-700">Serving Australian Patients</span>
              </div>

              <h1 className="text-4xl md:text-6xl  flex gap-[10px] md:gap-[20px] font-bold leading-tight">
                <span className="text-gray-900">HELLO!</span>
             
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
              <p className="text-[16px] md:text-[18px] w-fit  text-center justify-center mx-auto  text-gray-700 leading-[20px] md:leading-relaxed">
                Are you looking for <span className="font-semibold   pr-[6px] CDH-gradiant">affordable, world-class    dental treatment</span>
      
            
                 ?
              </p>

              <p className="text-gray-600 text-center text-[13px]">
                Save up to 70% on premium dental procedures while experiencing the best of Indian hospitality and
                world-class medical facilities.
              </p>
                    <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative"
            >
 
              <div className="w-[300px] h-[300px] mx-auto relative">
                {/* <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full animate-pulse opacity-20"></div> */}
                <div className="absolute inset-4 to-purple-500 border  rounded-full flex items-center justify-center">
                  <img
                    src={usaflag}
                    alt="Australia Flag"
                    className="w-[240px] h-[240px] rounded-full shadow-2xl object-cover "
                  />
                </div>


            
              </div>
            </motion.div>
          </div> 
            </motion.div>

            {/* Rotating services showcase */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className=""
            >
          

          {/* --- OUR SPECIALTIES (now three boxes side-by-side) ------------------- */}
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, delay: 0.4 }}
  className=""
>
  <h3 className="text-lg font-semibold text-gray-800 pb-[10px] mb-2 text-center">
    Our Specialties
  </h3>

  {/* three cards in a row (stack vertically on small screens) */}
  <div className="flex flex-col sm:flex-row  pb-[10px] gap-4">
    {services.map((service, index) => (
      <motion.div
        key={index}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="flex flex-1 items-start gap-4 border rounded-xl p-4 shadow-md bg-white"
      >
        {/* colored icon bubble */}
        <div
          className={`w-12 h-12 shrink-0 rounded-full bg-gradient-to-r ${service.color} flex items-center justify-center text-2xl text-white`}
        >
          {service.icon}
        </div>

        {/* text */}
        <div>
          <h4 className="font-semibold text-gray-900">{service.title}</h4>
          <p className="text-sm text-gray-600">{service.description}</p>
        </div>
      </motion.div>
    ))}
  </div>
</motion.div>

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
