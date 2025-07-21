import React, { useState } from 'react';
import { Calendar, MapPin, Clock, Phone, ChevronDown, ChevronUp, Users, Star, ExternalLink } from "lucide-react"
import sydeny from "../../public/sydney.jpeg"
import melbourne from "../../public/melbourne.jpg"
import Brisbane from "../../public/Brisbane.jpg"



export default function ListOfAppoinments() {
  const [expandedMobileRow, setExpandedMobileRow] = useState(null);
  const events = [
    {
      id: 1,
      dates: "13,14 & 15 September 2025",
      location: "Sydney",
      timings: "10:00 AM to 6:00 PM",
      title: "Comprehensive Dental Screening Camp - Sydney",
      description:
        "A 2-day dental event by City Dental Hospital offering complete oral health evaluations, scaling, and X-rays at discounted rates.",
      image: sydeny,
      attendees: "200+",
      rating: 4.9,
      price: "$79",
      category: "Dental meet up 2025",
    },
        {
      id: 2,
  
          dates: "17 & 18 September 2025",
      location: "Brisbane",
      timings: "10:00 AM to 6:00 PM",
      title: "City Dental Camp - Brisbane",
      description:
        "2-day event with oral screenings, minor procedures, and hygiene workshops — organized by City Dental Hospital team.",
      image: Brisbane,
      attendees: "180+",
      rating: 4.8,
      price: "$89",
      category: "Dental meet up 2025",
    },
    {
      id: 3,
      dates: "19,20 & 21 september 2025",
      location: "Melbourne",
      timings: "10:00 AM to 6:00 PM",
      title: "Advanced Dental Care Camp - Melbourne",
      description:
        "One-day specialized dental camp covering oral diagnostics, fluoride treatments, and consultations by CDH senior dentists.",
      image: melbourne,
      attendees: "150+",
      rating: 4.7,
      price: "$99",
      category: "Dental meet up 2025",
    },

  ];

  // const events = [
  //     {
  //         id: 1,
  //         dates: "13 , 14 & 15 September",
  //         location: "Sydney",
  //         venue: "10am to 6pm",

  //     },
  //     {
  //         id: 2,
  //         dates: "17 & 18 September",
  //         location: "Brisbane",
  //         venue: "10am to 6pm",

  //     },
  //     {
  //         id: 3,
  //         dates: "19, 20 & 21 September",
  //         location: "Melbourne",
  //         venue: "10am to 6pm",
  //         // mapUrl: "https://maps.google.com/?q=Sharjah",
  //     },

  // ];

  const toggleMobileRow = (id) => {
    setExpandedMobileRow(expandedMobileRow === id ? null : id);
  };

  return (
    <div className="w-full mx-auto  mt-[50px] p-4">
      <h2 className="text-2xl md:text-[45px] font-[600] text-center mb-8">Event Schedule</h2>


      {/* <div className="hidden md:block overflow-hidden rounded-lg shadow">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="CDH-uae text-white">
                        <tr>
                            <th className="px-6 py-4 text-left text-sm font-semibold uppercase">Dates</th>
                            <th className="px-6 py-4 text-left text-sm font-semibold uppercase">Location</th>
                            <th className="px-6 py-4 text-left text-sm font-semibold uppercase">Timings</th>
                          
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {events.map((event, index) => (
                            <tr
                                key={event.id}
                                className={`${index % 2 === 0 ? "bg-white" : "bg-[#22683112]"} hover:bg-[#f9f9f9] transition-colors`}
                            >
                                <td className="px-6 py-4 text-sm font-medium text-blue-800 flex items-center">
                                    <Calendar className="w-4 h-4 mr-2 text-blue-600" />
                                    {event.dates}
                                </td>
                                <td className="px-6 py-4 text-sm text-gray-700">{event.location}</td>
                                <td className="px-6 py-4 text-sm text-gray-700">{event.venue}</td>
                               
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div> */}




      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {events.map((event) => (
          <div
            key={event.id}
            className="bg-white rounded-xl border shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
          >
            <div className="relative">
              <img src={event.image || "/placeholder.svg"} alt={event.title} className="w-full h-48 object-cover" />
              <div className="absolute top-4 left-4">
                <span className="CDH-uae text-white px-3 py-1 rounded-full text-sm font-medium">
                  {event.category}
                </span>
              </div>
              <div className="absolute top-4 right-4">
                <div className="bg-white/90 backdrop-blur-sm rounded-lg px-3 py-1">

                </div>
              </div>
            </div>

            <div className="p-3 ">
              <div className=' flex w-[100%] justify-between'>
                <div className="flex items-center gap-2 CDH-gradiant text-red-600 mb-2">
                  <Calendar className="w-4 h-4" />
                  <span className="font-semibold text-[14px]">{event.dates}</span>
                </div>


                <div className="flex items-center gap-2 CDH-gradiant text-red-600 mb-2">
                  <MapPin className="w-4 h-4" />
                  <span className="font-semibold">{event.location}</span>
                </div>
              </div>


              <div className="space-y-2  flex  justify-between mb-2">
     
                <div className="flex items-center justify-center w-fit mx-auto gap-2 font-[600] text-gray-900">
                  <Clock className="w-4 h-4" />
                  <span className="text-sm">{event.timings}</span>
                </div>
              </div>

       

              <a href="https://wa.me/917624080155?text=Hi%20I%20want%20to%20book%20a%20slot">
                <button className="w-full CDH-uae text-white py-2 ab rounded-lg CDH-uae transition-colors flex items-center justify-center gap-2">
                  <Phone className="w-4 h-4" />
                  Click Here To Book Your Slot
                         </button>
              </a>

            </div>
          </div>
        ))}
      </div>
    </div>

  );
}
