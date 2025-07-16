import React, { useState } from 'react';
import { motion } from "framer-motion"
import { ArrowRight, Percent } from "lucide-react"
import usaflag from "../../public/uk/Aus.webp"
import india from "../../public/uk/india.jpg"


export default function ComParison() {

  const [hoveredRow, setHoveredRow] = useState(null)
    const [selectedTreatment, setSelectedTreatment] = useState(0)

  const treatmentsr = [
    {
      name: "All-On 4 & All-On 6 Dental Implant",
      shortName: "All-On 4 & 6",
      indiaPrice: "$ 7,500 - $ 12,000",
      ausPrice: "$ 25,000 - $ 50,000",
      savings: "60-65% Savings",
    },
    {
      name: "Full Mouth Dental Implant",
      shortName: "Full Mouth",
      indiaPrice: "$ 8,000 - $ 13,000",
      ausPrice: "$ 35,500 - $ 60,000",
      savings: "60-70% Savings",
    },
    {
      name: "Single Dental Implant",
      shortName: "Single Implant",
      indiaPrice: "$ 600 - $ 900",
      ausPrice: "$ 3,500 - $ 5,000",
      savings: "60-70% Savings",
    },
    {
      name: "Smile Makeover / Veneers",
      shortName: "Veneers",
      indiaPrice: "$ 150 - $ 400 per tooth",
      ausPrice: "$ 1,200 - $ 2,500 per tooth",
      savings: "65-75% Savings",
    },
  ]

const treatments = [
  



  {
    id:2,
    name: "All-On 4  & All-On 6 Dental Implant ",
    indiaPrice: "$ 7,500 - $ 12,000",
    ausPrice:  "$ 25,000 – $ 50,000",
    savings: "60–65% Savings",
    savingsPercent: 62,
  },

  {
    id: 4,
    name: "Full Mouth Dental Implant ",
    indiaPrice: "$ 8,000 - $ 13,000 ",
    ausPrice: "$ 35,500 – $ 60,000",
    savings: "60–70% Savings",
    savingsPercent: 65,
  },

  {
    id: 3,
    name: "Single Dental Implant",
    indiaPrice: "$ 600 – $ 900",
    ausPrice: "$ 3,500 – $ 5,000 ",
    savings: "60–70% Savings",
    savingsPercent: 65,
  },
  {
    id: 4,
    name: "Smile Makeover / Veneers",
    indiaPrice: "$ 150 - $ 400 per tooth",

    ausPrice: "$ 1,200 - $ 2,500 per tooth",
    savings: "65–75% Savings",
    savingsPercent: 70,
  },

];



  return (
    <div className='flex flex-col pt-[10px] md:gap-[30px] w-[100%]'>
      <h1 className='font-[700] mx-auto text-[35px] md:text-[40px] md:flex gap-[20px]'>
        <b className='cdh-gradiant font-[700]'>Cost</b> Comparison
        <span className='md:flex hidden mx-auto md:text-[40px] text-[39px] items-center gap-[10px]'>
          AUS<p className='CDH-gradiant text-[25px]'>V/S</p> INDIA
        </span>
      </h1>

      <span className='md:hidden font-[700] flex mx-auto md:text-[40px] text-[39px] items-center gap-[10px]'>
        AUS <p className='CDH-gradiant text-[25px]'>V/S</p> INDIA
      </span>



     <div className=" md:overflow-hidden overflow-x-auto md:block hidden  rounded-[10px] shadow-lg">
          <table className="w-full min-w-[1000px] border-collapse border  ">
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
                    <div className="inline-block bg-orange-50 text-orange-800 border-[1px] border-[#e0862c52] py-1 px-3 leading-[17px] rounded-full text-[13px] font-medium">
                      {treatment.indiaPrice}
                    </div>
                  </td>
                  <td className="py-3 px-6 text-center border-b border-gray-200">
                    <div className="inline-block bg-blue-50 text-[13px]  text-blue-800  border-[1px] border-[#241ae052] py-1 px-3 leading-[17px] rounded-full font-medium">
                      {treatment.ausPrice}
                    </div>
                  </td>
                  <td className="py-4 px-6 text-center border-b border-gray-200">
                    <div className="relative">
                      <div className="flex items-center justify-center">
                        <div
                          className={` bg-[#08ff313d] font-[500] py-[2px] text-[14px]  rounded-full flex items-center justify-center px-4 transition-all duration-300 ${
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

              <div className="md:hidden">

        {/* Mobile Treatment Tabs */}
        <div className="bg-white border-b overflow-x-auto">
          <div className="flex min-w-max px-4 py-3">
            {treatmentsr.map((treatment, index) => (
              <button
                key={index}
                onClick={() => setSelectedTreatment(index)}
                className={`px-4 py-2 mx-1 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                  selectedTreatment === index
                    ? "CDH-uae text-white shadow-md"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {treatment.shortName}
              </button>
            ))}
          </div>
        </div>

        {/* Mobile Treatment Details */}
        <div className="p-4">
          <div className="bg-white rounded-xl shadow-sm p-4 mb-4">
            <h2 className="text-lg font-semibold text-gray-800 mb-2">{treatmentsr[selectedTreatment].name}</h2>
          </div>

          {/* Mobile Cost Cards */}
          <div className="space-y-4">
            {/* India Cost Card */}
            <div className="bg-orange-50 border-2 border-orange-200 rounded-xl p-4">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 rounded-full bg-gradient-to-b from-orange-500 via-white to-green-600"></div>
                <h3 className="text-lg font-semibold text-orange-800">Cost in India</h3>
              </div>
              <p className="text-2xl font-bold text-orange-700">{treatmentsr[selectedTreatment].indiaPrice}</p>
            </div>

            {/* AUS Cost Card */}
            <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-4">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-800 via-white to-red-600"></div>
                <h3 className="text-lg font-semibold text-blue-800">AUS Cost</h3>
              </div>
              <p className="text-2xl font-bold text-blue-700">{treatmentsr[selectedTreatment].ausPrice}</p>
            </div>

            {/* Savings Card */}
            <div className="bg-green-50 border-2 border-green-200 rounded-xl p-4">
              <h3 className="text-lg font-semibold text-green-800 mb-3">Approx Savings</h3>
              <p className="text-2xl font-bold text-green-700">{treatmentsr[selectedTreatment].savings}</p>
              <div className="mt-3 bg-green-200 rounded-full h-2">
                <div
                  className="bg-green-600 h-2 rounded-full transition-all duration-500"
                  style={{ width: `${Number.parseInt(treatments[selectedTreatment].savings)}%` }}
                ></div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Quick Comparison */}
        <div className="p-4">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Quick Comparison</h3>
          <div className="bg-white rounded-xl  border shadow-sm overflow-hidden">
            {treatmentsr.map((treatment, index) => (
              <div
                key={index}
                onClick={() => setSelectedTreatment(index)}
                className={`p-4 border-b border-gray-100 cursor-pointer transition-all ${
                  selectedTreatment === index ? "bg-blue-50 border-l-4 border-l-blue-600" : "hover:bg-gray-50"
                }`}
              >
                <h4 className="font-semibold text-gray-800 mb-2">{treatment.shortName}</h4>
                <div className="flex justify-between items-center text-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded-full bg-gradient-to-b from-orange-500 via-white to-green-600"></div>
                    <span className="text-orange-700 font-medium">{treatment.indiaPrice}</span>
                  </div>
                  <div className="text-green-700 font-semibold">{treatment.savings}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
