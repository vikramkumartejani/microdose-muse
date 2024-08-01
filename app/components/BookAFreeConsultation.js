import Image from 'next/image'
import React from 'react'

const BookAFreeConsultation = () => {
  return (
    <div className='consultationbg w-full py-32 px-4 md:px-10 2xl:pl-[136px] 2xl:pr-20'>
      <div className='w-full flex justify-between lg:flex-row flex-col gap-16 lg:gap-5 max-w-[1920px] mx-auto'>
        <div>
          <h2 className='text-white text-[30px] md:text-[48px] leading-[42px] md:leading-[67px] font-alethia lg:max-w-[1043px] w-full'>My mission is to connect individuals to their inner power, fostering their highest growth and transformation.</h2>
          <p className='text-white text-[20px] md:text-[28px] leading-[32px] md:leading-[43px] font-poppins font-normal lg:max-w-[691px] w-full mt-10'>My journey with psychedelics has shown me their incredible potential to create radical shifts in consciousness, transforming life experiences. As modern-day wayshowers, they hold the power to guide profound changes, and I am dedicated to helping you experience these transformative shifts safely and effectively.</p>
        </div>
        <div className='flex items-center flex-col gap-10 md:gap-20'>
          <Image src='/assets/video.svg' alt='Video' width={580} height={535} />
          <button className='bg-[#DCB88C] w-[330px] sm:w-[352px] h-[67px] rounded-xl text-white text-[21px] leading-[21px] font-medium'>Book A Free Consultation</button>
        </div>
      </div>
    </div>
  )
}

export default BookAFreeConsultation