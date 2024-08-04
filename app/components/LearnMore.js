import Image from 'next/image'
import React from 'react'

const LearnMore = () => {
  return (
    <div className='w-full relative'>
      <Image src='/assets/line-design.svg' alt="line-design" width={1920} height={107} className="w-full absolute top-0 z-30"  data-aos="fade-up"  />
      <div className='bg-thrive py-20 md:py-[170px] lg:py-[265px] w-full px-4'>
        <div className='bg-[#FFFFFFCC] border border-[#FFFFFF] max-w-[1232px] w-full mx-auto py-10 px-4 text-center'  data-aos="fade-up">
          <h2 className='text-[#454545] text-[45px] leading-[63px] font-alethia font-normal'>THRIVE</h2>
          <p className='text-[#454545] text-[20px] md:text-[24px] leading-[36px] font-poppins font-light mt-8'>A 3-Month Empowerment Journey designed to rewire your brain and transform your inner landscape, empowering you to thrive in all areas of your life.</p>
          <h4 className='text-[#454545] text-[20px] md:text-[24px] leading-[36px] font-poppins font-light mt-10'>Only $49/month.</h4>
          <button className='bg-[#DCB88C] w-[264px] h-[73px] rounded-xl mt-10 text-white text-[25px] leading-[38px] font-medium'>Learn More</button>
        </div>
      </div>
    </div>
  )
}

export default LearnMore