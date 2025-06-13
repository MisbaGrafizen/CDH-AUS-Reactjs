import React from 'react';
import image1 from "../../public/testimonials/testi1.jpeg";
import image2 from "../../public/testimonials/testi2.jpeg";
// import image3 from "../../public/testimonials/new4.jpg";
import image4 from "../../public/testimonials/new2.jpg";
import image5 from "../../public/testimonials/testi5.jpeg";
import image6 from "../../public/testimonials/new5.jpeg";

export default function Testimonials() {
  const images = [image1, image2, image4, image5, image6];

  return (
    <>
      <div className='flex flex-col gap-[20px] pt-[50px] w-full overflow-hidden'>
        <div className='font-[600] text-center pb-[20px] text-[45px]'>
          Testimonials
        </div>

        {/* Outer container to hide overflow */}
        <div className='w-full overflow-hidden'>
          {/* Inner container with animation */}
          <div className='flex gap-[20px] pb-[20px] animate-slide'>
            {[...images, ...images].map((img, index) => (
              <img
                key={index}
                className='md:w-[500px] rounded-[8px] md:object-cover md:h-[320px] w-[360px] mb-[]  h-[330px] shadow-md flex-shrink-0'
                src={img}
                alt={`testimonial-${index}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* CSS animation */}
      <style jsx>{`
        @keyframes slide {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-slide {
          width: max-content;
          display: flex;
          animation: slide 40s linear infinite;
        }
      `}</style>
    </>
  );
}
