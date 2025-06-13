// import React from 'react'

// export default function UpToOffer() {
//     return (
//         <>


//             <div className=' flex flex-col justify-center items-center font-Poppins w-[100%] mt-[50px] md:mt-[0px] px-[20px]'>
//                 <div>
// <h1 className='  font-[700] text-[50px] md:text-[60px]'>
//     UPTO <b className=' CDH-gradiant font-[700]'>
//         75%
//     </b>
// </h1>
//                 </div>

//                 <div className=' md:w-[700px]  relative mx-auto p-[20px] rounded-[10px]  h-[370px]'>
//                     <div className=' flex w-[100%] '>
//                         <div className='w-fit text-[#fff] h-[43px] font-[600] text-[19px] py-[6px] mx-auto rounded-md flex px-[20px] bs-cdh'>
//                             Savings
//                         </div>
//                         <div className=' flex w-[3px] top-[65px] left-0 right-0 mx-auto absolute h-[280px] md:h-[240px] anime-green-btn '>

//                         </div>


//                         <div className=' w-fit absolute md:left-[150px] left-[-61px]  top-[140px] '>
//                             <div className=' w-[20px] z-[10] h-[20px] right-[-10px] top-[-10px] rounded-[50%] absolute  bs-cdh'>

//                             </div>
//                             <div className=' flex gap-[5px]'>

//                                 <h1 className='  absolute top-[14px] left-[-30px]  md:top-[-18px] md:left-[-110px] font-[500] text-[18px] md:text-[20px]'>
//                                 Implants
//                                 </h1>
//                             </div>
//                             <div className=' md:w-[200px] w-[140px] border-t-[3px] rounded-tl-[20px] md:rounded-none  md:border-l-[0px] h-[45px]   border-[#177b1d] '>

//                             </div>


//                         </div>



//                         <div className=' w-fit absolute  md:right-[150px] right-[-61px] top-[220px] '>

//                             <div className=' w-[20px] h-[20px] left-[-10px] top-[-10px] rounded-[50%] absolute  bs-cdh'>

//                             </div>
//                             <div className=' md:w-[200px] w-[140px] border-t-[3px] h-[45px] rounded-tr-[20px] md:rounded-none  md:border-r-[0px]   border-[#177b1d] '>

//                             </div>
//                             <h1 className=' absolute  top-[18px]  md:top-[-14px] right-[-40px] md:right-[-220px] w-[160px] md:w-full font-[500] flex-shrink-0 text-[16px]  md:text-[20px]'>
//                             Full Mouth Implants
//                             </h1>
//                         </div>


//                         <div className=' w-fit absolute md:left-[150px] left-[-61px]  top-[300px] '>
//                             <div className=' w-[20px] z-[10] h-[20px] right-[-10px] top-[-10px] rounded-[50%] absolute  bs-cdh'>

//                             </div>

//                             <div className=' md:w-[200px] w-[140px] border-t-[3px] h-[45px] rounded-tl-[20px] md:rounded-none  md:border-l-[0px]   border-[#177b1d] '>

//                             </div>
//                             <h1 className=' absolute  top-[14px] left-[-45px]  md:top-[-16px] md:left-[-165px] w-[160px] font-[500] text-[16px] md:text-[20px]'>
//                             Smile Makeover 
//                             </h1>
//                         </div>










//                     </div>
//                 </div>
//             </div>
//         </>
//     )
// }



// import { motion } from "framer-motion"
// import { Sparkles, SmileIcon as Tooth, Smile } from "lucide-react"

// export default function UpToOffer() {
//   const container = {
//     hidden: { opacity: 0 },
//     show: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.3,
//         delayChildren: 0.3,
//       },
//     },
//   }

//   const item = {
//     hidden: { y: 20, opacity: 0 },
//     show: { y: 0, opacity: 1 },
//   }

//   return (
//     <div className="w-full max-w-6xl mx-auto py-16 px-4">
//       <motion.div
//         initial={{ opacity: 0, y: -30 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//         className="text-center mb-16"
//       >
//         <h2 className="text-7xl md:text-8xl font-extrabold tracking-tight">
//           <span className="text-black">UPTO</span>{" "}
//           <span className="bg-gradient-to-r from-red-700 to-amber-700 bg-clip-text text-transparent">75%</span>
//         </h2>
//         <motion.div
//           initial={{ scale: 0 }}
//           animate={{ scale: 1 }}
//           transition={{ duration: 0.5, delay: 0.5 }}
//           className="inline-block mt-4 bg-emerald-600 text-white px-10 py-3 rounded-lg text-xl font-medium shadow-lg"
//         >
//           Savings
//         </motion.div>
//       </motion.div>

//       <motion.div
//         variants={container}
//         initial="hidden"
//         animate="show"
//         className="grid grid-cols-1 md:grid-cols-3 gap-8"
//       >
//         <motion.div variants={item} className="group">
//           <div className="bg-white rounded-xl shadow-xl overflow-hidden transform transition-transform group-hover:scale-105">
//             <div className="h-2 bg-emerald-600"></div>
//             <div className="p-8">
//               <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-6">
//                 <Tooth className="w-8 h-8 text-emerald-600" />
//               </div>
//               <h3 className="text-2xl font-bold mb-4">Implants</h3>
//               <p className="text-gray-600">
//                 Replace missing teeth with natural-looking dental implants at a fraction of the cost.
//               </p>
//               <div className="mt-6 pt-6 border-t border-gray-100">
//                 <div className="flex items-center">
//                   <div className="w-3 h-3 rounded-full bg-emerald-600 mr-3"></div>
//                   <span className="text-sm text-gray-500">Premium quality materials</span>
//                 </div>
//                 <div className="flex items-center mt-2">
//                   <div className="w-3 h-3 rounded-full bg-emerald-600 mr-3"></div>
//                   <span className="text-sm text-gray-500">Lifetime warranty</span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </motion.div>

//         <motion.div variants={item} className="group">
//           <div className="bg-white rounded-xl shadow-xl overflow-hidden transform transition-transform group-hover:scale-105">
//             <div className="h-2 bg-emerald-600"></div>
//             <div className="p-8">
//               <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-6">
//                 <Sparkles className="w-8 h-8 text-emerald-600" />
//               </div>
//               <h3 className="text-2xl font-bold mb-4">Full Mouth Implants</h3>
//               <p className="text-gray-600">
//                 Complete restoration for your entire smile with our advanced full mouth implant solutions.
//               </p>
//               <div className="mt-6 pt-6 border-t border-gray-100">
//                 <div className="flex items-center">
//                   <div className="w-3 h-3 rounded-full bg-emerald-600 mr-3"></div>
//                   <span className="text-sm text-gray-500">Complete restoration</span>
//                 </div>
//                 <div className="flex items-center mt-2">
//                   <div className="w-3 h-3 rounded-full bg-emerald-600 mr-3"></div>
//                   <span className="text-sm text-gray-500">Customized treatment plan</span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </motion.div>

//         <motion.div variants={item} className="group">
//           <div className="bg-white rounded-xl shadow-xl overflow-hidden transform transition-transform group-hover:scale-105">
//             <div className="h-2 bg-emerald-600"></div>
//             <div className="p-8">
//               <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-6">
//                 <Smile className="w-8 h-8 text-emerald-600" />
//               </div>
//               <h3 className="text-2xl font-bold mb-4">Smile Makeover</h3>
//               <p className="text-gray-600">
//                 Transform your smile with our comprehensive makeover treatments tailored to your needs.
//               </p>
//               <div className="mt-6 pt-6 border-t border-gray-100">
//                 <div className="flex items-center">
//                   <div className="w-3 h-3 rounded-full bg-emerald-600 mr-3"></div>
//                   <span className="text-sm text-gray-500">Personalized design</span>
//                 </div>
//                 <div className="flex items-center mt-2">
//                   <div className="w-3 h-3 rounded-full bg-emerald-600 mr-3"></div>
//                   <span className="text-sm text-gray-500">Natural-looking results</span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </motion.div>
//       </motion.div>
//     </div>
//   )
// }


import { motion } from "framer-motion"
import { SmileIcon as Tooth, Sparkles, Smile } from "lucide-react"

export default function UpToOffer() {
    const services = [
        {
            id: "implants",
            name: "Implants",
            icon: Tooth,
            description:
                "Single tooth replacement with premium dental implants. Includes consultation, surgery, and follow-up care.",
            features: ["Natural appearance", "Preserves bone structure", "Long-lasting solution"],
            originalPrice: "$3,000",
            discountedPrice: "$1,500",
        },
        {
            id: "full-mouth",
            name: "Full Mouth Implants",
            icon: Sparkles,
            description:
                "Complete restoration with full-arch dental implants. Transform your smile and regain full functionality. Which is painless, blood less, flap less and suture less procedure at cdh",
            features: ["Entire arch restoration", "Improved chewing ability", "Prevents bone loss"],
            originalPrice: "$24,000",
            discountedPrice: "$12,000",
        },
        {
            id: "smile-makeover",
            name: "Smile Makeover",
            icon: Smile,
            description: "A smile makeover is a personalized combination of cosmetic dental procedures designed to enhance the appearance and health of your smile.",
            features: ["Custom treatment plan (Crowns and veneers)", "Enhance the appearance  ", "Function of your smile"],
            originalPrice: "$8,000",
            discountedPrice: "$4,000",
        },
    ]

    return (
        <div className="w-full md:px-[40px] px-[0px] py-[20px]  md:bg-[#1c94520e] mx-auto  rounded-2xl">
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center mb-12"
            >
                <h1 className='  font-[700] gap-[10px] text-[40px]  md:text-[60px]'>
                Upto
                    <b className=' px-[10px] CDH-gradiant font-[700]'>
                        50% - 70%
                    </b>
                    Savings
                </h1>

            </motion.div>

            <div className="relative  mt-[150px]   md:h-[800px]">
                {/* Central vertical line */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-emerald-600 CDH-uae h-full rounded-full "></div>

                <div className="relative z-10 space-y-1">
                    {services.map((service, index) => (
                        <div key={service.id} className="relative">
                            {/* Service node */}
                            <motion.div
                                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, delay: 0.3 * index }}
                                className={`flex ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"} items-center`}
                            >
                                {/* Service info */}
                                <div className={`md:w-1/2 ${index % 2 === 0 ? "md:pr-8  text-right" : "pl-8 text-left"}`}>
                                    <div className="group inline-block h-[70px]">
                                        <h3 className="md:text-2xl flex flex-shrink-0 mt-[20px] font-bold group-hover:text-emerald-700 transition-colors">
                                            {service.name}
                                        </h3>
                                    </div>
                                </div>

                                {/* Center node */}
                                <div className="absolute left-1/2 transform -translate-x-1/2">
                                    <motion.div
                                        whileHover={{ scale: 1.2 }}
                                        whileTap={{ scale: 0.9 }}
                                        className={`w-10 h-10 rounded-full flex items-center justify-center cursor-pointer
                      bg-white border-2 border-emerald-600`}
                                    >
                                        <service.icon className="w-5 h-5 CDH-gradiant" />
                                    </motion.div>
                                </div>
                            </motion.div>

                            {/* Always visible details */}
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3 }}
                                className={`mt-[]  relative md:top-[-180px]  border-[#00843D] border-[1.4px] max-w-md bg-white p-4 rounded-xl shadow-lg ${index % 2 === 0 ? "ml-auto pr-8" : "mr-auto pl-8"
                                    }`}
                            >
                                <div className="flex justify-between items-start mb-4">
                                    <div className="flex items-center">
                                        <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center mr-3">
                                            <service.icon className="w-5 h-5 text-emerald-600" />
                                        </div>
                                        <h4 className="text-xl font-bold">{service.name}</h4>
                                    </div>
                                    {/* <div className="flex flex-col items-end">
                                        <span className="text-sm text-gray-500 line-through">{service.originalPrice}</span>
                                        <span className="text-xl font-bold text-emerald-600">{service.discountedPrice}</span>
                                    </div> */}
                                </div>
                                <p className="text-gray-600 mb-4">{service.description}</p>
                                <div className="space-y-2">
                                    {service.features.map((feature, i) => (
                                        <div key={i} className="flex items-center">
                                            <div className="w-2 h-2 rounded-full bg-emerald-600 mr-2"></div>
                                            <span className="text-sm">{feature}</span>
                                        </div>
                                    ))}
                                </div>

                            </motion.div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
