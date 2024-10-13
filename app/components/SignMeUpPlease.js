import Image from 'next/image'
import React from 'react'

const SignMeUpPlease = () => {
  return (
    <div className='w-full imgbg relative pt-[92px] pb-[133px] flex items-center justify-end px-4 sm:px-8 lg:px-12 xl:px-16'>
      <div className='flex items-center lg:items-start lg:flex-row flex-col gap-16 xl:gap-24 mb-[220px] lg:mb-0'>
        <Image src='/assets/book1.png' alt='Book' width={309} height={437} className=' rounded-[15px] shadow-custom -rotate-2 relative z-20' data-aos="fade-up" />
        <div className='w-full' data-aos="fade-up">
          <h2 className='lg:max-w-[515px] w-full text-white text-[22px] sm:text-[30px] md:text-[33px] font-alethia font-normal'>Curious how to create your own microdose regiment and rewire your brain?</h2>
          <p className='mt-7 lg:max-w-[679px] w-full font-poppins font-normal text-white text-[16px] sm:text-[22px]'>Experience the benefits of microdosing with our <span className='font-semibold font-poppins'> Free 3-Day Course, The Psilocybin Experience:  Safe and Effective Microdosing.</span> Over three days, you will learn the science of microdosing, set meaningful goals, and develop a safe and effective microdosing routine. Discover how to enhance your creativity, focus, and overall well-being while building a supportive community and access to additional resources for continued growth.</p>
          <button className='mt-7 bg-[#DCB88C] w-[160px] sm:w-[184px] h-[40px] sm:h-[52px] rounded-lg text-white text-[14px] sm:text-[16px] font-medium'>Sign Me Up Please</button>
        </div>
      </div>
      <Image src='/assets/tree.svg' alt='Tree' width={290} height={304} className='absolute bottom-0 left-0'  />
    </div>
  )
}

export default SignMeUpPlease