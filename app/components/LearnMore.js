import Image from 'next/image'
import React from 'react'

const LearnMore = () => {  
  // data-aos="fade-up"
  return (
    <div className='w-full relative'>
      <Image src='/assets/line-design.svg' alt="line-design" width={1920} height={107} className="w-full absolute top-0 z-30"   />
      <div className='bg-thrive pt-24 py-20 md:py-[170px] lg:py-[200px] w-full px-4'>
        <div className='bg-[#FFFFFFCC] border border-[#FFFFFF] max-w-[924px] w-full mx-auto py-10 px-4 text-center'>
          <h2 className='text-[#454545] text-[25px] sm:text-[34px] font-alethia font-normal'>FOUNDATION TO THRIVE</h2>
          <p className='text-[#454545] text-[16px] sm:text-[20px] font-poppins font-light mt-6 mb-8 max-w-[616px] mx-auto'>A 5-week microdosing journey designed to rewire your brain and transform you inner landscape.</p>
          {/* <h4 className='text-[#454545] text-[18px] sm:text-[20px] md:text-[24px] leading-[36px] font-poppins font-light mt-5 sm:mt-10'>Only $49/month.</h4> */}
          <button className='bg-[#DCB88C] w-[198px] h-[40px] sm:h-[54px] rounded-lg text-white text-[16px] sm:text-[18px] leading-[38px] font-medium'>Learn More</button>
        </div>
      </div>
    </div>
  )
}

export default LearnMore