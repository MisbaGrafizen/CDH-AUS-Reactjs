import React, { useState } from 'react'
import DrAnandJashani from "../../public/DrAnand/image2.jpeg"
import { Calendar, MapPin, Clock, CheckCircle, ArrowRight } from "lucide-react"
export default function IntroDuction() {
      const [showForm, setShowForm] = useState(false)
    return (
        <>



            {/* <div className=' flex w-[100%] md:flex-row flex-col justify-between items-center mt-[60px] gap-[20px] md:gap-[40px]'>
                <div className=' flex g flex-col order-2 md:order-1 w-[96%] md:w-[55%]'>
                    <h1 className=' font-[600] leading-[39px] text-[30px] mb-[10px] md:text-[32px]'>
                        This June 2025 – A Rare Opportunity for<b className=' font-[700] CDH-gradiant' > UAE Patients! </b>
                    </h1>
                    <h3 className=' text-justify mt-[10px]'>
                    Looking for expert dental care in India? Now, you can meet India’s leading implantologist, Dr. Anand Jasani & CDH , right here in the UAE! As the Director of City Dental Hospital, Rajkot, Dr. Jasani brings decades of experience in dental implants, smile makeovers, and full-mouth rehabilitation — offering you world-class treatment planning at affordable costs.
                    </h3>
                    <h3 className=' text-justify mt-[5px]'>
                    This is your chance to be a part of One-on-One Dental Meet Up  without traveling to India. Discover how you can save up to 50%-70% on premium dental treatments while receiving honest advice, travel support, and a complete dental tourism experience. Book your Complimentary appointment today!
                    </h3>

                </div>
                <div className=' flex order-1 md:order-2 md:w-[430px] h-[430px]'>
                    <img className=' rounded-[10px] w-[100%] h-[100%] object-cover' src={DrAnandJashani} />
                </div>
            </div> */}


    <section className="pb-[40px] pt-[25px] ">
      <div className="container mx-auto md:px-4">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-center">
          {/* Left side - Doctor profile */}
          <div className="lg:w-5/12">
            <div className="relative">
              {/* Main image with decorative elements */}
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-xl border-4 border-white">
                <div className=" relative">
                  <img
                    src={DrAnandJashani}
                    alt="Dr. Anand Jasani"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute top-4 -left-4 w-24 h-24 rounded-full bg-blue-100 z-0"></div>
              <div className="absolute bottom-8 -right-6 w-32 h-32 rounded-full bg-purple-100 z-0"></div>

              {/* Credentials badge */}
              <div className="absolute -bottom-4  w-[200px] md:w-fit border border-[rgba(255,230,230,0.42)] left-1/2 transform -translate-x-1/2 bg-white shadow-lg rounded-full py-2 px-2 z-20">
                <p className="text-center text-[10px] md:text-[13px] font-medium text-gray-800">Director, City Dental Hospital</p>
              </div>
            </div>

            {/* Doctor info */}
            <div className="pt-8 text-center">
              <h3 className="text-2xl font-bold  ">Dr. Anand Jasani</h3>
              <p className="CDH-gradiant font-medium"> MDS (Implantologist & Periodontist) </p>
              <div className="mt-4 flex justify-center space-x-4">
                <span className="inline-flex items-center text-sm text-gray-600">
                  <MapPin className="w-4 h-4 mr-1" />
                  Rajkot, India
                </span>
                <span className="inline-flex items-center text-sm text-gray-600">
                  <Clock className="w-4 h-4 mr-1" />
                  25+ Years Experience
                </span>
              </div>
            </div>
          </div>

          {/* Right side - Content */}
          <div className="lg:w-7/12">
            <div className=" flex   text-[] bg-[#0d138432]  w-fit px-4 py-1 rounded-full text-sm font-medium mb-4">
              Limited Time Opportunity
            </div>

            <h2 className="text-[27px] md:text-4xl font-[700] leading-[33px] md:leading-[40px] mb-6">
              This September 2025 — A Rare Opportunity for <span className=" CDH-gradiant ">AUS Patients!</span>
            </h2>

            <p className="text-[15px] text-gray-700  text-justify mb-6">
              Looking for expert dental care in India? Now, you can meet India's leading implantologist , Dr. Anand
              Jasani & Team City Dental, right here in the AUS ! As the Director of City Dental Hospital, Rajkot, Dr. Jasani brings decades
              of experience in dental implants, smile makeovers, and full-mouth rehabilitation — offering you
              world-class treatment planning at affordable costs.
            </p>

            <div className="bg-white rounded-xl border shadow-md p-4 mb-8">
              <h3 className="font-bold text-lg mb-2">Benefits of This Special Opportunity:</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className=' text-[14px]'>One-on-One consultation without traveling to India</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className=' text-[14px]'>Save 50%-70% on premium dental treatments</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className=' text-[14px]'>Receive honest advice and personalized treatment plans</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className=' text-[14px]'>Complete dental tourism support and travel assistance</span>
                </li>
              </ul>
            </div>

           
   
          </div>
        </div>
      </div>
    </section>


        </>
    )
}
