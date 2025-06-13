import React, { useState } from 'react';
import { motion } from "framer-motion"
import { ArrowRight, Percent } from "lucide-react"
import usaflag from "../../public/uk/Aus.webp"
import india from "../../public/uk/india.jpg"


export default function ComParison() {
  const costComparisonData = [
    {
      treatment: "All-On 4 Dental Implant",
      indiaCost: "AED 20000",
      uaeCost: "AED 40000",
      savings: "50% Savings"
    },
    {
      treatment: "All-On 6 Dental Implant",
      indiaCost: "AED 24000",
      uaeCost: "AED 60000",
      savings: "55-65% Savings"
    },
    {
      treatment: "Full Mouth Dental Implant",
      indiaCost: "AED 30000",
      uaeCost: "AED 70000+",
      savings: "60-65% Savings"
    },
    {
      treatment: "Smile Designing",
      indiaCost: "AED 8000 - AED 15000",
      uaeCost: "AED 25000 - AED 40000",
      savings: "60-70% Savings"
    },
    {
      treatment: "Smile Makeover",
      indiaCost: "AED 8000 - AED 12000",
      uaeCost: "AED 20000 - AED 35000",
      savings: "60-70% Savings"
    },
    {
      treatment: "Emax Veneers",
      indiaCost: "AED 500 - AED 700",
      uaeCost: "AED 1800 - AED 2500",
      savings: "65-75% Savings"
    },
    {
      treatment: "Aligners",
      indiaCost: "AED 4000 - AED 6000",
      uaeCost: "AED 12000 - AED 18000",
      savings: "60-70% Savings"
    },
    {
      treatment: "Whitening",
      indiaCost: "AED 400 - AED 600",
      uaeCost: "AED 1200 - AED 2000",
      savings: "60-70% Savings"
    }
  ];

  const [hoveredRow, setHoveredRow] = useState(null)

  const treatments = [
    {
      id: 1,
      name: "All-On 4 Dental Implant",
      indiaPrice: "AED 20000",
      ausPrice: "AED 40000",
      savings: "50% Savings",
      savingsPercent: 50,
    },
    {
      id: 2,
      name: "All-On 6 Dental Implant",
      indiaPrice: "AED 24000",
      ausPrice: "AED 60000",
      savings: "55-65% Savings",
      savingsPercent: 60,
    },
    {
      id: 3,
      name: "Full Mouth Dental Implant",
      indiaPrice: "AED 30000",
      ausPrice: "AED 70000+",
      savings: "60-65% Savings",
      savingsPercent: 62,
    },
    {
      id: 4,
      name: "Smile Designing",
      indiaPrice: "AED 8000 - AED 15000",
      ausPrice: "AED 25000 - AED 40000",
      savings: "60-70% Savings",
      savingsPercent: 65,
    },
    {
      id: 5,
      name: "Smile Makeover",
      indiaPrice: "AED 8000 - AED 12000",
      ausPrice: "AED 20000 - AED 35000",
      savings: "60-70% Savings",
      savingsPercent: 65,
    },
    {
      id: 6,
      name: "Emax Veneers",
      indiaPrice: "AED 500 - AED 700",
      ausPrice: "AED 1800 - AED 2500",
      savings: "65-75% Savings",
      savingsPercent: 70,
    },
    {
      id: 7,
      name: "Aligners",
      indiaPrice: "AED 4000 - AED 6000",
      ausPrice: "AED 12000 - AED 18000",
      savings: "60-70% Savings",
      savingsPercent: 65,
    },
    {
      id: 8,
      name: "Whitening",
      indiaPrice: "AED 400 - AED 600",
      ausPrice: "AED 1200 - AED 2000",
      savings: "60-70% Savings",
      savingsPercent: 65,
    },
  ]


  return (
    <div className='flex flex-col pt-[0px] md:gap-[30px] w-[100%]'>
      <h1 className='font-[700] mx-auto text-[35px] md:text-[40px] md:flex gap-[20px]'>
        <b className='cdh-gradiant font-[700]'>Cost</b> Comparison
        <span className='md:flex hidden mx-auto md:text-[40px] text-[39px] items-center gap-[10px]'>
          AUS<p className='CDH-gradiant text-[25px]'>V/S</p> INDIA
        </span>
      </h1>

      <span className='md:hidden font-[700] flex mx-auto md:text-[40px] text-[39px] items-center gap-[10px]'>
        AUS <p className='CDH-gradiant text-[25px]'>V/S</p> INDIA
      </span>

      {/* <div className='md:w-[100%] px-[10px] pb-[50px] overflow-x-auto'>
        <div className="shadow-xl md:w-[100%] w-[600px] rounded-md border-[#20a3ba]">
          <table className="w-full rounded-md overflow-hidden border-collapse">
            <thead>
              <tr className="bg-gradient-to-r text-[#ff] from-[#00843e6f] to-[#c8102f83]">
                <th className="text-left font-[600] p-3">Treatment</th>
                <th className="text-left font-[600] p-3">Cost in India</th>
                <th className="text-left font-[600] p-3">AUS Cost</th>
                <th className="text-left font-[600] p-3"> Approx Savings</th>
              </tr>
            </thead>
            <tbody>
              {costComparisonData.map((row, index) => (
                <tr key={index} className="even:bg-white odd:bg-gradient-to-r odd:from-[#58c45f14] odd:to-[#f3f3f3]">
                  <td className="p-3">{row.treatment}</td>
                  <td className="p-3">{row.indiaCost}</td>
                  <td className="p-3">{row.uaeCost}</td>
                  <td className="p-3">{row.savings}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div> */}

     <div className="overflow-hidden  rounded-[10px] shadow-lg">
          <table className="w-full border-collapse border  ">
            {/* Table Header */}
            <thead>
              <tr>
                <th className="bg-gradient-to-r  font-[600] from-gray-100 to-gray-200 text-left py-4 px-6 rounded-tl-lg border-b-2 border-gray-300">
                  Treatment
                </th>
                <th className="bg-gradient-to-r from-orange-50 to-orange-100 text-center py-4 px-6 border-b-2 border-orange-200">
                  <div className="flex items-center justify-center">
                    <img
                      src={india}
                      alt="India Flag"
                      className="w-6 h-6 rounded-full mr-2"
                    />
                    <span className="text-orange-800 font-[600]">Cost in India</span>
                  </div>
                </th>
                <th className="bg-gradient-to-r from-blue-50 to-blue-100 text-center py-4 px-6 border-b-2 border-blue-200">
                  <div className="flex items-center justify-center">
                    <img
                      src={usaflag}
                      alt="Australia Flag"
                      className="w-6 h-6 rounded-full mr-2"
                    />
                    <span className="text-blue-800 font-[600]">AUS Cost</span>
                  </div>
                </th>
                <th className="bg-gradient-to-r from-green-50 to-green-100 text-center py-4 px-6 rounded-tr-lg border-b-2 border-green-200">
                  <span className="text-green-800 font-[600]">Approx Savings</span>
                </th>
              </tr>
            </thead>

            {/* Table Body */}
            <tbody>
              {treatments.map((treatment, index) => (
                <tr
                  key={treatment.id}
                  className={`${
                    index % 2 === 0 ? "bg-white" : "bg-gray-50"
                  } hover:bg-gray-100 transition-colors duration-150 ease-in-out`}
                  onMouseEnter={() => setHoveredRow(treatment.id)}
                  onMouseLeave={() => setHoveredRow(null)}
                >
                  <td className="py-3 px-6 border-b border-gray-200">
                    <div className="font-medium">{treatment.name}</div>
                  </td>
                  <td className="py-3 px-6 text-center border-b border-gray-200">
                    <div className="inline-block bg-orange-50 text-orange-800 py-1 px-3 rounded-full text-[14px] font-medium">
                      {treatment.indiaPrice}
                    </div>
                  </td>
                  <td className="py-3 px-6 text-center border-b border-gray-200">
                    <div className="inline-block bg-blue-50 text-[14px]  text-blue-800 py-1 px-3 rounded-full font-medium">
                      {treatment.ausPrice}
                    </div>
                  </td>
                  <td className="py-4 px-6 text-center border-b border-gray-200">
                    <div className="relative">
                      <div className="flex items-center justify-center">
                        <div
                          className={`h-8 bg-[#08ff313d] font-[600] text-[14px]  rounded-full flex items-center justify-center px-4 transition-all duration-300 ${
                            hoveredRow === treatment.id ? "w-fit" : "w-fit"
                          }`}
                        >
                          {treatment.savings}
                        </div>
                      </div>
                      {/* {hoveredRow === treatment.id && (
                        <div className="absolute -bottom-10 left-0 right-0 text-xs text-center text-gray-500">
                          Save up to {treatment.savingsPercent}% on this treatment
                        </div>
                      )} */}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
    </div>
  );
}
