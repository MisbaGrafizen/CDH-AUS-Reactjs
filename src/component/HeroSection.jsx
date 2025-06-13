import React, { useState } from 'react'
import usaflag from "../../public/uk/Aus.webp"



export default function HeroSection() {


    const [variant, setVariant] = useState("purple")

    const data = [
        { date: "30 & 31 May ", city: "Crawley" },
        { date: "1st June ", city: "Wembley" },
        { date: "3rd June ", city: " Harrow" },
        { date: "4th & 5th June ", city: "Birmingham " },
        { date: "7th & 8th June ", city: "Leicester " },



    ]

    const variants = {

        ocean: {
            container: "bg-gradient-to-br from-teal-50 to-blue-100 shadow-md rounded-lg",
            header: "bg-gradient-to-r from-teal-500 to-blue-500 text-white",
            headerRow: "bg-gradient-to-r from-teal-200 to-blue-200",
            row: "even:bg-white odd:bg-gradient-to-r odd:from-teal-50 odd:to-blue-50",
        },
    }

    const currentVariant = variants[variant]

    return (
        <>

            <div className=' md:w-[100%] w-[96%] mx-auto font-Poppins flex  pt-[90px] md:pt-[140px] '>
                <div className=' mx-auto flex md:flex-row flex-col pt-[80px]  justify-between gap-[30px] rounded-[20px] md:px-[20px]   md:h-[480px]  w-[100%]'>
                    <div className=' flex  flex-col gap-[10px]'>
                        <div className=' flex  gap-[40px]'>
                            <h1 className='  font-[700] md:leading-[65px] leading-[43px] text-[36px] md:text-[60px]  uppercase'>
                                <span className=' flex '>
                                    Hello    !
                                </span>    <b className=' CDH-gradiant text- font-[700] flex-shrink-0'> AUSTRALIA </b>
                            </h1>
                            {/* <img className=' flex w-[180px] border ml-[0px] object-cover rounded-[10px] h-[110px]' src={ukFlag} /> */}
                        </div>
                        <div className=' flex flex-col '>
                            <div className="  py-2  md:px-[14px] rounded-lg border border-white/20 mt-[14px] mb-4 max-w-2xl">
                                <h2 className="text- text-2xl md:text-[23px]  leading-[30px] font-medium">
                                    Are you looking for affordable, world-class <b className=' font-medium CDH-gradiant'>dental treatment </b>?
                                </h2>
                            </div>

                            {/* Service highlights */}
                            <div className= "flex md:flex-row flex-col  gap-4 mb-12 over">
                                <div className="bg-[#1f813088] container12 backdrop-blur-sm p-3 rounded-lg border border-white/20 ">
                                    <h3 className="font-[600]  mb-1">Dental Implants</h3>
                                    <p className="text-sm text-">Premium quality dental solutions</p>
                                </div>
                                <div className="bg-[#1f813088] container12 backdrop-blur-sm p-3 rounded-lg border border-white/20 ">
                                    <h3 className="font-[600] mb-1">Smile Designing</h3>
                                    <p className="text-sm text-">Aesthetic dental transformations</p>
                                </div>
                                <div className="bg-[#1f813088]  container12 backdrop-blur-sm p-3 rounded-lg border border-white/20 ">
                                    <h3 className="font-[600] mb-1">Full Mouth Rehabilitation</h3>
                                    <p className="text-sm text-">Complete dental restoration</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={`md:w-[290px] w-[290px] h-[280px] mx-auto overflow-hidden bg-gradient-to-br shadow-md rounded-full`}>

                        <img className=" w-full h-full " src={usaflag} />

                    </div>
                </div>
            </div>


        </>
    )
}
