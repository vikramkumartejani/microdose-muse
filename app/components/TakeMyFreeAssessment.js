import Image from 'next/image';
import React from 'react';

const TakeMyFreeAssessment = () => {
  return (
    <div
      className="relative h-screen w-full bg-cover bg-center"
      style={{ backgroundImage: "url('/assets/take-my-free-assessment.jpg')" }}
    >
      <div className="absolute inset-0 bg-custom opacity-70"></div> {/* Changed bg-custom to bg-black */}
      <div className="absolute inset-0 flex lg:flex-row flex-col items-center gap-20 lg:gap-0 justify-center text-white pl-10 xl:pl-15 2xl:pl-20 py-10 lg:py-24">
        <div>
          <h1 className="text-4xl 2xl:text-5xl leading-snug font-alethia font-normal mb-2">
            Welcome to Microdose Muse!
          </h1>
          <p className="text-xl 2xl:text-2xl font-poppins leading-relaxed font-light mb-4">
            Transformation coaching with psychedelics and mindset mastery.
          </p>
          <ul className="text-left xl:my-10 2xl:my-20">
            <li className="text-xl 2xl:text-2xl leading-relaxed font-poppins font-light">
              ✨ Discover profound personal growth and transformation.
            </li>
            <li className="text-xl 2xl:text-2xl leading-relaxed font-poppins font-light">
              ✨ Experience radical shifts in consciousness, safely.
            </li>
            <li className="text-xl 2xl:text-2xl leading-relaxed font-poppins font-light">
              ✨ Balance inward reflection with outward action.
            </li>
          </ul>
          <p className="mb-4 text-xl 2xl:text-2xl leading-relaxed font-poppins font-light">
            Ready to find out if microdosing is for you?
          </p>
          <button className="w-[321px] h-[62px] bg-[#DCB88C] rounded-xl text-white text-lg font-medium">
            Take My Free Assessment
          </button>
        </div>
        <div>
          <Image
            src="/assets/assessment.svg"
            alt="assessment"
            width={900}
            height={700} // Adjust height as needed
            className='lg:h-[900px] lg:w-[900px] w-full h-full'
          />
        </div>
      </div>
    </div>
  )
}

export default TakeMyFreeAssessment;
