import Image from "next/image";
import React from "react";

const TakeMyFreeAssessment = () => {
  return (
    <div className="relative w-full bg-cover bg-center bg-take-my-free-assessment py-[60px] md:py-[123px] px-4 md:px-10 lg:px-12 xl:px-16">
      {/* Background Overlay with Linear Gradient */}
      <div className="absolute inset-0 bg-custom opacity-70" ></div>

      <div className="relative z-20 flex lg:flex-row flex-col lg:items-center gap-10 sm:gap-20 lg:gap-10 justify-center text-white" data-aos="fade-up">
        <div>
          <h1 className="text-[24px] sm:text-[40px] leading-normal font-normal font-alethia">Welcome to Microdose Muse!</h1>
          <p className="mt-2 md:mt-0 text-[18px] sm:text-[22px] font-poppins leading-normal font-light">
            Transformation coaching with psychedelics and mindset mastery.
          </p>
          <ul className="text-left my-7 sm:my-12 xl:mt-[66px] xl:mb-[78px] flex flex-col gap-4">
            <li className="text-[18px] sm:text-[22px] leading-normal font-poppins font-light">
              ✨ Discover profound personal growth and transformation.
            </li>
            <li className="text-[18px] sm:text-[22px] leading-normal font-poppins font-light">
              ✨ Experience radical shifts in consciousness, safely.
            </li>
            <li className="text-[18px] sm:text-[22px] leading-normal font-poppins font-light">
              ✨ Balance inward reflection with outward action.
            </li>
          </ul>
          <p className="text-[18px] sm:text-[22px] leading-normal font-poppins font-light">
            Ready to find out if microdosing is for you?
          </p>
          <button className="mt-4 w-[241px] h-[46px] bg-[#DCB88C] rounded-lg text-white text-[16px] font-medium">
            Take My Free Assessment
          </button>
        </div>
        <div className="relative flex items-center justify-center">
          <Image
            src="/assets/assessment.png"
            alt="assessment"
            width={550}
            height={550}
          />
          <Image
            src="/assets/mushroom.svg"
            alt="assessment"
            width={112}
            height={190}
            className=' absolute left-0 bottom-0 w-[80px] md:w-[112px] md:h-[190px]'
          />
        </div>
      </div>
    </div>
  );
};

export default TakeMyFreeAssessment;
