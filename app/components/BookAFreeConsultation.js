import Image from 'next/image'
import React from 'react'

const BookAFreeConsultation = () => {
  return (
    <div className='consultationbg w-full py-[60px] md:pt-[117px] md:pb-[97px] px-4 md:px-10 lg:px-14'>
      <div className='w-full flex justify-between lg:flex-row flex-col gap-16 lg:gap-5 max-w-[1920px] mx-auto' >
        <div data-aos="fade-up">
          <h2 className='text-white text-[24px] sm:text-[38px] font-alethia lg:max-w-[788px] w-full'>My mission is to connect individuals to their inner power, fostering their highest growth and transformation.</h2>
          <p className='text-white text-[18px] sm:text-[22px] font-poppins font-normal lg:max-w-[522px] w-full mt-6 sm:mt-10'>My journey with psychedelics has shown me their incredible potential to create radical shifts in consciousness, transforming life experiences. As modern-day wayshowers, they hold the power to guide profound changes, and I am dedicated to helping you experience these transformative shifts safely and effectively.</p>
        </div>
        <div className='flex items-center flex-col gap-10 md:gap-[60px]' data-aos="fade-up">
          <Image src='/assets/video.svg' alt='Video' width={438} height={401} />
          <button className='bg-[#DCB88C] w-[266.52px] h-[50.254px] rounded-lg text-white text-[16px] leading-[21px] font-medium'>Book A Free Consultation</button>
        </div>
      </div>
    </div>
  )
}

export default BookAFreeConsultation