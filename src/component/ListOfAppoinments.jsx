import React, { useState } from 'react';
import { Calendar, MapPin, ChevronDown, ExternalLink } from "lucide-react";

export default function ListOfAppoinments() {
    const [expandedMobileRow, setExpandedMobileRow] = useState(null);

    const events = [
        {
            id: 1,
            dates: "13 , 14 & 15 September",
            location: "Sydney",
            venue: "10am to 6pm",

        },
        {
            id: 2,
            dates: "17 & 18 September",
            location: "Brisbane",
            venue: "10am to 6pm",
           
        },
        {
            id: 3,
            dates: "19, 20 & 21 September",
            location: "Melbourne",
            venue: "10am to 6pm",
            // mapUrl: "https://maps.google.com/?q=Sharjah",
        },
 
    ];

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

            {/* Mobile Cards */}
            <div className=" space-y-4">
                {events.map((event) => (
                    <div key={event.id} className="bg-white border border-[#ff151547] rounded-lg shadow overflow-hidden">
                        <div
                            className="flex justify-between  items-center p-4 cursor-pointer  "
                            onClick={() => toggleMobileRow(event.id)}
                        >
                            <div className="flex items-center">
                                <Calendar className="w-5 h-5 mr-2 text-[#ab2929cc]" />
                                <span className="font-medium text-blue-800">{event.dates}</span>
                            </div>
                            <ChevronDown
                                className={`w-5 h-5 text-blue-600 transition-transform duration-300 ${expandedMobileRow === event.id ? "rotate-180" : ""
                                    }`}
                            />
                        </div>

                        <div
                            className={`px-4 overflow-hidden transition-all duration-300 ${expandedMobileRow === event.id ? "max-h-60 py-4" : "max-h-0"
                                }`}
                        >
                            <div className="space-y-3">
                                <div>
                                    <div className="text-xs text-gray-500">Location</div>
                                    <div className="text-gray-700">{event.location}</div>
                                </div>
                                <div>
                                    <div className="text-xs text-gray-500">Timings</div>
                                    <div className="text-gray-700">{event.venue}</div>
                                </div>
                             
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
