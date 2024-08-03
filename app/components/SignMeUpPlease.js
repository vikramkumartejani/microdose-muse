import Image from 'next/image'
import React from 'react'

const SignMeUpPlease = () => {
  return (
    <div data-aos="fade-up" className='w-full imgbg relative  py-32 flex items-center justify-end px-4 md:px-10 xl:px-20'>
      <div className='flex items-center lg:items-start lg:flex-row flex-col gap-16 mb-80 lg:mb-24 xl:gap-32'>
        <Image src='/assets/book1.png' alt='Book' width={413} height={583} className='md:h-[583px] w-[413px] rounded-[15px] shadow-custom -rotate-2' />
        <div className='w-full'>
          <h2 className='max-w-[687px] w-full text-white text-[30px] md:text-[45px] leading-[46px] md:leading-[63px] font-alethia font-normal'>Curious how to create your own microdose regiment and rewire your brain?</h2>
          <p className='mt-7 max-w-[926px] w-full font-poppins font-normal text-white text-[20px] md:text-[28px] leading-[34px] md:leading-[42px]'>Experience the benefits of microdosing with our <span className='font-semibold font-poppins'> Free 3-Day Course, The Psilocybin Experience:  Safe and Effective Microdosing.</span> Over three days, you will learn the science of microdosing, set meaningful goals, and develop a safe and effective microdosing routine. Discover how to enhance your creativity, focus, and overall well-being while building a supportive community and access to additional resources for continued growth.</p>
          <button className='mt-7 bg-[#DCB88C] w-[249px] h-[70px] rounded-xl text-white text-[21.72px] leading-[21.72px] font-medium'>Sign Me Up Please</button>
        </div>
      </div>
      <Image src='/assets/tree.svg' alt='Tree' width={380} height={406} className='absolute bottom-0 left-0' />
    </div>
  )
}

export default SignMeUpPlease