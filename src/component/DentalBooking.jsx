
import React, { useEffect, useRef, useState } from "react"
import { MapPin, Phone, User, ChevronDown, Calendar, Clock } from "lucide-react"

import { motion, AnimatePresence } from "framer-motion";

export default function DentalBooking() {
    const [phone, setPhone] = useState("");
    const [error, setError] = useState("");
    const validatePhone = (value) => {
        const onlyTenDigits = /^[0-9]{10}$/;
        if (!value) return "Phone number is required.";
        if (!onlyTenDigits.test(value)) return "Phone number must be exactly 10 digits.";
        return "";
    };

    const handleChange = (e) => {
        const value = e.target.value;

        // Allow only digits and limit to 10 characters
        if (/^\d{0,9}$/.test(value)) {
            setPhone(value);
        }
    };

    const treatments = [
        "Dental Implants",
        "All on 4/All on 6 Implants",
        "Full Mouth Dental Implants",
        "Smile Designing",
        "Veneers",
        "Zirconium Crown",
        "Bollywood Smile",

        "Others",
    ]

    const cities = [
        "Sydney (13, 14 & 15 September)",
        "Brisbane (17 & 18 September)",
        "Melbourne (19, 20 & 21 September)",

    ]

    const [treatment, setTreatment] = useState("");
    const [open, setOpen] = useState(false);
    const ref = useRef();
    const [city, setCity] = useState("");
    const [openCity, setOpencity] = useState(false);
    const refcity = useRef();


    useEffect(() => {
        const handleClickOutside = (e) => {
            if (ref.current && !ref.current.contains(e.target)) {
                setOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (refcity.current && !refcity.current.contains(e.target)) {
                setOpencity(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);




    return (
        <div className="">


            {/* Main Content */}
            <div className="md:w-[95%] mx-auto ">
                <div className="grid lg:grid-cols-2 items-center  gap-12 mt-8">
                    {/* Left Side - Dental Content */}
                    <div className="space-y-4">
                        {/* Hero Image Section */}
                        <div className="bg-white rounded-xl border p-3 shadow-md  border-gray-200 overflow-hidden relative">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full -translate-y-16 translate-x-16"></div>
                            <div className="relative z-10">
                                <div className=" flex   gap-[16px] mb-2">
                                    <div className="w-[45px] flex-shrink-0  h-[45px] p-[7px] mx-auto mb-2 bg-gradient-to-br from-blue-500 to-purple-600 rounded-[10px] flex items-center justify-center shadow-lg">
                                        <span className="text-xl">🦷</span>
                                    </div>
                                    <div className=" flex flex-col gap-[6px]">
                                        <h2 className="text-xl font-[600] text-gray-900">Perfect Smile Awaits</h2>
                                        <p className="text-[12px] text-gray-600  leading-[17px]">
                                            Experience world-class dental care with our team of expert dentists. From routine check-ups to
                                            complete smile makeovers, we're here to give you the confidence to smile brightly.
                                        </p>

                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Services Grid */}
                        <div className="grid md:grid-cols-2  gap-4">
                            <div className="bg-white rounded-xl p-4 shadow-md border border-gray-200 hover:shadow-xl transition-all duration-300">

                                <div className=" flex gap-[10px] ">
                                    <div className="w-12 h-12 bg-blue-200 flex-shrink-0  border-[1.3px] rounded-md flex items-center justify-center mb-2">

                                        <span className="text-2xl">🔬</span>
                                    </div>
                                    <h3 className="text-[17px] font-[600] text-gray-900 leading-[23px] ">Advanced Technology</h3>

                                </div>
                                <p className="text-gray-600 text-[13px] leading-[18px]">
                                    State-of-the-art equipment including 3D imaging, laser dentistry, and digital impressions for precise
                                    treatments.
                                </p>
                            </div>

                            <div className="bg-white rounded-xl p-4 shadow-md border border-gray-200 hover:shadow-xl transition-all duration-300">
                                <div className=" flex gap-[10px] ">
                                    <div className="w-12 h-12 bg-green-100  border-[1.3px] border-green-200 rounded-md flex items-center justify-center mb-2">
                                        <span className="text-2xl">👨‍⚕️</span>
                                    </div>
                                    <h3 className="text-[17px] font-[600] text-gray-900 ">Expert Dentists</h3>
                                </div>

                                <p className="text-gray-600 text-[13px] leading-[18px] text-jus">
                                    Board-certified dental professionals with 100+ years of combined experience in cosmetic and restorative
                                    dentistry.
                                </p>
                            </div>

                        </div>
                        <div className="bg-white rounded-2xl p-4 shadow-md border border-gray-100">
                            <h3 className="md:text-[30px] text-[23px] font-bold text-gray-900 CDH-gradiant mb-4 text-center">Our Success Numbers</h3>
                            <div className="grid grid-cols-3 gap-6 text-center">
                                <div>
                                    <div className="md:text-[30px] text-[25px] font-[700] text-blue-600 mb-2">30K+</div>
                                    <div className="md:text-sm text-[11px] text-gray-600">Happy Patients</div>
                                </div>
                                <div>
                                    <div className="md:text-[30px] text-[25px] font-[700] text-green-600 ">3500+</div>
                                    <div className="md:text-sm text-[11px] text-gray-600">international patients </div>
                                </div>
                                <div>
                                    <div className="md:text-[30px] text-[25px] font-[700] text-purple-600 mb-1">100+</div>
                                    <div className="md:text-sm text-[11px] text-gray-600">years of combined experience</div>
                                </div>
                            </div>
                        </div>


                    </div>

                    {/* Right Side - Form Only */}
                    <div className="lg:sticky lg:top-8 lg:self-start">
                        <div className="bg-white rounded-2xl  py-5  md:px-[30px] px-[20px] shadow-md border border-gray-200">
                            <div className="text-center mb-5">

                                <h2 className="text-2xl font-bold text-gray-900 mb-1">Book Your Consultation</h2>
                                <p className="text-gray-600 text-[13px]">Fill out the form below to schedule your free dental consultation</p>
                            </div>

                            <div className="space-y-4">
                                {/* Treatment Required Dropdown */}
                                <div className="space-y-1">
                                    {/* <label className="block text-sm font-semibold text-gray-700">Treatment Required</label> */}
                                    <div className="relative" ref={ref}>
                                        <button
                                            onClick={() => setOpen(!open)}
                                            className="w-full px-4 py-2 border border-gray-300  text-[15px] rounded-lg flex justify-between items-center text-left focus:ring-[0px] focus:ring-teal-500 focus:border-teal-500 outline-none transition-all"
                                        >
                                            <span className={treatment ? "text-black" : "text-gray-400"}>
                                                {treatment || "Select Treatment"}
                                            </span>
                                            <motion.div animate={{ rotate: open ? 180 : 0 }}>
                                                <ChevronDown className="h-5 w-5 text-gray-500" />
                                            </motion.div>
                                        </button>

                                        <AnimatePresence>
                                            {open && (
                                                <motion.ul
                                                    initial={{ opacity: 0, y: -5 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    exit={{ opacity: 0, y: -5 }}
                                                    transition={{ duration: 0.2 }}
                                                    className="absolute z-[100] mt-1 w-full bg-white border border-gray-200 rounded-lg shadow-md max-h-60 overflow-auto"
                                                >
                                                    {treatments.map((item) => (
                                                        <li key={item}>
                                                            <button
                                                                type="button"
                                                                onClick={() => {
                                                                    setTreatment(item);
                                                                    setOpen(false);
                                                                }}
                                                                className={`w-full text-left text-[15px] px-4 py-2 text-sm hover:bg-gray-100 ${treatment === item ? "bg-gray-100 font-medium" : ""
                                                                    }`}
                                                            >
                                                                {item}
                                                            </button>
                                                        </li>
                                                    ))}
                                                </motion.ul>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                </div>

                                {/* City Dropdown */}
                                <div className="space-y-2">
                                    <div className="relative" ref={refcity}>
                                        <button
                                            onClick={() => setOpencity(!openCity)}
                                            className="w-full px-4 py-2 border border-gray-300 text-[15px] focus:ring-[0px] focus:ring-teal-500 focus:border-teal-500 outline-none transition-all rounded-lg flex justify-between items-center text-left"
                                        >
                                            <span className={city ? "text-black" : "text-gray-400"}>
                                                {city || "Select City & Date"}
                                            </span>
                                            <motion.div animate={{ rotate: openCity ? 180 : 0 }}>
                                                <ChevronDown className="h-5 w-5 text-gray-500" />
                                            </motion.div>
                                        </button>

                                        <AnimatePresence>
                                            {openCity && (
                                                <motion.ul
                                                    initial={{ opacity: 0, y: -5 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    exit={{ opacity: 0, y: -5 }}
                                                    transition={{ duration: 0.2 }}
                                                    className="absolute z-[100] mt-1 w-full bg-white border border-gray-200 rounded-lg shadow-md max-h-60 overflow-auto"
                                                >
                                                    {cities.map((item) => (
                                                        <li key={item}>
                                                            <button
                                                                type="button"
                                                                onClick={() => {
                                                                    setCity(item);
                                                                    setOpencity(false);
                                                                }}
                                                                className={`w-full text-left px-4 py-2 text-[14px] hover:bg-gray-100 ${city === item ? "bg-gray-100 font-medium" : ""
                                                                    }`}
                                                            >
                                                                {item}
                                                            </button>
                                                        </li>
                                                    ))}
                                                </motion.ul>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                </div>

                                {/* Name */}
                                <div className="space-y-2">
                                    {/* <label className="block text-sm font-semibold text-gray-700">Full Name</label> */}
                                    <div className="relative">
                                        <User className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                                        <input
                                            type="text"

                                            placeholder="Enter your full name"
                                            className="w-full text-[15px] pl-[44px] p-2.5 border rounded-lg focus:ring-[0px] focus:ring-teal-500 focus:border-teal-500 outline-none transition-all border-gray-300"

                                        />
                                    </div>
                                </div>

                                {/* Phone */}
                                <div className="space-y-2">
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                            <Phone className="w-5 h-5 text-gray-400" />
                                        </div>

                                        {/* Country Code */}
                                        <div className="absolute left-8 top-1/2 transform -translate-y-1/2 z-10">
                                            <div className="text-[15px] font-[400] px-1 py-[2px] rounded-md bg-transparent text-gray-800 w-[40px] text-center">
                                                +61
                                            </div>
                                        </div>

                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            value={phone}
                                            onChange={handleChange}
                                            className={`w-full pl-[74px] text-[15px] p-2.5 border rounded-lg outline-none transition-all `}
                                            placeholder="Phone Number"
                                        />

                                    </div>
                                </div>

                                {/* Your City */}
                                <div className="space-y-2">

                                    <div className="relative">
                                        <MapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                                        <input
                                            type="text"

                                            placeholder="Enter your current city"
                                            className="w-full pl-[44px] p-2.5 border rounded-lg focus:ring-[0px] focus:ring-teal-500 focus:border-teal-500 outline-none transition-all border-gray-300"

                                        />
                                    </div>
                                </div>

                                {/* Submit Button */}
                                <button

                                    className="w-full py-2 text-white font-[600] text-lg rounded-[10px] transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                                    style={{
                                        background: "linear-gradient(130deg, #ff0000, #00008B)",
                                    }}
                                >
                                    Book My Free Consultation
                                </button>

                                <div className="text-center">
                                    <p className="text-xs text-gray-500 leading-relaxed">
                                        🔒 Your information is secure and confidential
                                        <br />📞 We'll contact you within 24 hours to confirm your appointment
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
