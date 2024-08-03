import Image from "next/image";
import React from "react";

const TakeMyFreeAssessment = () => {
  return (
    <div
      //  data-aos="fade-up"
      className="relative lg:min-h-[120vh] md:min-h-[1300px] min-h-[1120px] w-full bg-cover bg-center pt-96"
      style={{
        backgroundImage: "url('/assets/take-my-free-assessment.jpg')",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="absolute inset-0 bg-custom opacity-70"></div>{" "}
      {/* Changed bg-custom to bg-black */}
      <div className="absolute inset-0 flex lg:flex-row flex-col items-center gap-10 md:gap-20 lg:gap-0 justify-center text-white px-5 sm:px-10 xl:pl-12 2xl:pl-16 py-24">
        <div>
          <h1 className="text-3xl md:text-4xl 2xl:text-5xl leading-snug font-alethia font-normal mb-2 mt-5">
            Welcome to Microdose Muse!
          </h1>
          <p className="text-xl 2xl:text-3xl font-poppins leading-relaxed font-light mt-2">
            Transformation coaching with psychedelics and mindset mastery.
          </p>
          <ul className="text-left xl:my-10 2xl:my-20 flex flex-col gap-2 md:gap-4 py-5 xl:py-10">
            <li className="text-xl 2xl:text-3xl leading-relaxed font-poppins font-light">
              ✨ Discover profound personal growth and transformation.
            </li>
            <li className="text-xl 2xl:text-3xl leading-relaxed font-poppins font-light">
              ✨ Experience radical shifts in consciousness, safely.
            </li>
            <li className="text-xl 2xl:text-3xl leading-relaxed font-poppins font-light">
              ✨ Balance inward reflection with outward action.
            </li>
          </ul>
          <p className="mb-4 text-xl 2xl:text-3xl leading-relaxed font-poppins font-light">
            Ready to find out if microdosing is for you?
          </p>
          <button className="w-[321px] h-[62px] bg-[#DCB88C] rounded-xl text-white text-lg font-medium">
            Take My Free Assessment
          </button>
        </div>
        <div className="-pr-[100px]">
          <Image
            src="/assets/assessment.svg"
            alt="assessment"
            width={100}
            height={100}
            className="lg:h-[900px] lg:w-[900px] w-full h-full"
          />
        </div>
      </div>
    </div>
  );
};

export default TakeMyFreeAssessment;
