import React, { useEffect, useRef, useState } from "react";

import logo1 from "../../public/cdhlogo.webp"
import logo2 from "../../public/cdh2logo.webp"
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function Header() {

  const location = useLocation(); // Get the current path
  const [selected, setSelected] = useState(location.pathname); // Track selected route


  const handleLinkClick = (path) => {
    setSelected(path);
  };


  return (
    <div className="bg-white flex w-full flex-col font-Poppins !z-[50] mx-auto fixed">

      <div className="flex md:w-[80%] 2xl:w-[1330px]   w-[90%] h-[40px] mt-[10px] md:mt-[23px] mx-auto  flex-col">
        <div className="flex w-full">
          <div className="flex w-full">
            <div className="flex w-full relative justify-between">
            <div className=" flex md:w-[79%] w-[59%] h-[1.5px] left-0 right-0 mx-auto absolute top-[36px] bg-[#0d277e8f]">

            </div>
              <div className=" flex items-center">


                <Link className="w-fit" to={"/"}>
                  <img className="flex w-[80px]   md:mt-[-18px] md:w-[115px]" src={logo1} alt="Basalt Logo" />
                </Link>
           
              </div>
              <div className="flex md:w-[65%] 2xl:w-[750px]  items-center md:items-start justify-between">
                <div>
                  <div className="xl:text-[15px] gap-[15px] text-[#000] items-center pl-[20px] font-Montserrat  flex font-[600] justify-end md36:hidden md:flex">
                    <Link
                      to="/"
                      onClick={() => handleLinkClick("/")}
                      className={`cursor-pointer font-[400] font-Poppins ${selected === "/"
                        ? "text-[#ff0a0a] font-[500] hover:text-[#ff0a0a]"
                        : " text-[#515151]"
                        }`}
                    >
                      Home
                    </Link>

                    <span className="flex h-[24px] w-[1px] bg-black"></span>

                    <Link
                      to="https://www.rajkotdentist.com/about/"
                      onClick={() => handleLinkClick("https://www.rajkotdentist.com/about/")}
                      className={`cursor-pointer font-[400] font-Poppins ${selected === "https://www.rajkotdentist.com/about/"
                        ? "text-[#ff0a0a] font-[500] hover:text-[#ff0a0a]"
                        : " text-[#515151]"
                        }`}
                    >
                      About us
                    </Link>

                    <span className="flex h-[24px] w-[1px] bg-black"></span>

                    <Link
                      to="https://www.rajkotdentist.com/why-choose-us/"
                      onClick={() => handleLinkClick("https://www.rajkotdentist.com/why-choose-us/")}
                      className={`cursor-pointer font-[400] font-Poppins ${selected === "https://www.rajkotdentist.com/why-choose-us/"
                        ? "text-[#ff0a0a] font-[500] hover:text-[#ff0a0a]"
                        : " text-[#515151]"
                        }`}
                    >
                      Why Choose Us
                    </Link>

                    <span className="flex h-[24px] w-[1px] bg-black"></span>

                    <Link
                      to="https://www.rajkotdentist.com/dental-tourism/"
                      onClick={() => handleLinkClick("https://www.rajkotdentist.com/dental-tourism/")}
                      className={`cursor-pointer font-[400] font-Poppins ${selected === "https://www.rajkotdentist.com/dental-tourism/"
                        ? "text-[#ff0a0a] font-[500] hover:text-[#ff0a0a]"
                        : " text-[#515151]"
                        }`}
                    >
                      Visiting From Abroad?
                    </Link>

                    {/* <span className="flex h-[24px] w-[1px] bg-black"></span>

                      <Link
                        to="/memories"
                        onClick={() => handleLinkClick("/memories")}
                        className={`cursor-pointer font-[400] font-Poppins ${selected === "/memories"
                          ? "text-[#ff0a0a] font-[500] hover:text-[#ff0a0a]"
                          : " text-[#515151]"
                          }`}
                      >
                        Memories
                      </Link> */}

                    <span className="flex h-[24px] w-[1px] bg-black"></span>


                    <Link
                      to="https://www.rajkotdentist.com/dental-implant/"
                      onClick={() => handleLinkClick("https://www.rajkotdentist.com/dental-implant/")}
                      className={`cursor-pointer font-[400] font-Poppins ${selected === "https://www.rajkotdentist.com/dental-implant/"
                        ? "text-[#ff0a0a] font-[500] hover:text-[#ff0a0a]"
                        : "  text-[#515151]"
                        }`}
                    >
                      Services
                    </Link>
                    <span className="flex h-[24px] w-[1px] bg-black"></span>

                    <Link
                      to="https://www.rajkotdentist.com/contact-us/"
                      onClick={() => handleLinkClick("https://www.rajkotdentist.com/contact-us/")}
                      className={`cursor-pointer font-[400] font-Poppins ${selected === "https://www.rajkotdentist.com/contact-us/"
                        ? "text-[#ff0a0a] font-[500] hover:text-[#ff0a0a]"
                        : "  text-[#515151]"
                        }`}
                    >
                      Contact Us
                    </Link>



                  </div>
                </div>




              </div>
              <Link className="w-fit pr-[10px]" to={"/"}>
                  <img className="flex w-[60px]  md:mt-[-3px]  mt-[6px]  md:w-[80px]" src={logo2} alt="Basalt Logo" />
                </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
