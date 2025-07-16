import React, { useState } from "react";
import faq from "../../public/faq.webp";

export default function Faqs() {
  const [activeIndex, setActiveIndex] = useState(null);
const faqs = [
  {
    question: "Will my consultation be free?",
    answer: "✅ Yes, the consultation is 100% free.\nDuring the meetup, you’ll receive a one-on-one discussion with Dr. Anand Jasani and Team City Dental regarding your dental concerns, treatment options, and cost-saving possibilities in India."
  },
  {
    question: "Can I book my surgery in India after this meetup?",
    answer: "✅ Absolutely.\nOur team will give you a complete treatment plan and quote during the meetup. If you’re ready, you can pre-book your India surgery dates directly with us—saving both your time and travel coordination. We will also assist with:\n• Travel planning\n• Airport pickup\n• Accommodation options\n• Day-by-day itinerary for your dental care in India"
  },
  {
    question: "What documents should I bring?",
    answer: "📑 We recommend you bring:\n• Any recent X-rays or scans\n• Dental reports or prescriptions (if any)\n• Photos (if you’ve had cosmetic concerns)\n• A list of your current medications (if applicable)\n\nDon’t worry if you don’t have anything—our team will guide you based on your clinical exam too."
  },
  {
    question: "How long is each appointment?",
    answer: "🕒 Each consultation will last around 15–20 minutes.\nYou will have dedicated time to:\n• Explain your dental issue\n• Review possible treatments\n• Understand expected costs, timeframes, and savings\n• Ask any questions freely\n\n✅ You are not rushed. This is a personalised, private one-on-one meetup with full attention to your needs."
  }
];




  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="md:w-[100%] w-[95%] pb-[50px]  px-[10px] flex flex-col gap-[30px]  mx-auto">
      <div className="w-[100%] flex flex-col md:gap-[10px]">
      <div className="flex flex-col">
          <h1 className="flex font-[600] text-[35px] font-Poppins">
          Frequently Asked <span className=" CDH-gradiant font-[700] pl-[10px]"> Questions</span>
          </h1>
   
        </div>

        <div className="flex w-[100%] gap-[30px] mt-[20px] flex-col justify-between">
          <div className="w-[100%] flex md:flex-row flex-col justify-between">
            <div className="md:w-[30%]  ">
              <img
                className=" w-[100%] md:h-[300px]  rounded-[10px]  shadow-md"
                src={faq}
                alt="FAQ"
              />
            </div>



            <div className="flex flex-col   gap-[20px] md:mt-[0px] mt-[30px] md:w-[65%]">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="font-Redhat rounded-[10px] border-[#2d07b8] border-[1.5px] overflow-hidden "
                >
                  <div
                    className={`font-[600] flex justify-between bg-white  text-[#5a5555] md:items-center m px-[15px] md:py-[14px] py-[10px] text-[15] md:text-[18px] cursor-pointer ${activeIndex === index
                        ? "border-b-[1.5px] rounded-b-[14px] "
                        : "  border-b-none"
                      }`}
                    onClick={() => toggleAnswer(index)}
                  >
                    <p className=" text-justify  font-Poppins font-[400]">{faq.question}</p>
                    <i
                      className={`fa-regular   ml-[10px] md:mt-0 mt-[5px] ${activeIndex === index
                          ? "fa-circle-minus rotate"
                          : "fa-circle-plus rotate-reverse"
                        }`}
                    ></i>
                  </div>
                  <div
                    className={`text-[15px]  text-[#646464] w-[90%] font-[500]  ${activeIndex === index
                        ? " px-[15px] py-[10px] max-h-[200px] opacity-100 flex"
                        : "max-h-0 opacity-0  px-[5px] py-[1px] "
                      }`}
                  >
                    <p className=" font-Poppins text-justify  leading-[22px] font-[300]">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Inline styles for icon rotation */}
      {/* <style jsx>{`
          .rotate {
            transform: rotate(180deg);
            transition: transform 0.7s ease-out;
          }
          .rotate-reverse {
            transform: rotate(0deg);
            transition: transform 0.7s ease-out;
          }
          .fa-circle-plus,
          .fa-circle-minus {
            transition: transform 0.7s ease-out;
          }
        `}</style> */}
    </div>
  );
}