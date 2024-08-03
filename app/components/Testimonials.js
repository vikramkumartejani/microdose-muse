import Image from 'next/image'
import React from 'react'

const Testimonials = () => {
  return (
    <div className='relative px-4 py-[60px] lg:py-[120px]'>
      {/* <Image src='/assets/left.svg' alt='image' width={400} height={500} className=' absolute -top-[100px] left-0' /> */}
      {/* <Image src='/assets/right.svg' alt='image' width={400} height={500} className=' absolute top-[200px] right-0' /> */}
      {/* Testimonials */}
      {/* <div className=''>
        <div className=' bg-no-repeat max-w-[1150px] w-full mx-auto bg-opacity-60' style={{backgroundImage:"url('/assets/tree-image.webp')", height:'710px', opacity:'60'}}>
          <div className='text-center'>
            <h1 className='text-[#454545] text-[58px] leading-[81px] font-alethia font-normal'>Testimonials</h1>
          </div>
        </div> 
      </div> */}

      {/* Banner */}
      <div className='  relative max-w-[1500px] w-full mx-auto bg-cover bg-bottom min-h-[445px] rounded-[52px] py-10' style={{backgroundImage:"url('/assets/testimonials.jpg')"}}>
      <div className='absolute inset-0 bg-custom-one opacity-50 rounded-[52px]'></div>
        <div className='relative flex items-center lg:flex-row flex-col-reverse justify-start px-5 md:px-16 gap-[50px] lg:gap-[100px]'>
          <div>
            <p className='max-w-[781px] text-white font-poppins font-normal text-base md:text-[20px] xl:text-[24px] leading-[26px] md:leading-[30px] xl:leading-[36px]'>Get my MUSINGS sent to your inbox twice a month, I’ll be diving into topics like the science of microdosing, new paradigms of transformation in mental health, the indigenous roots of psychedelic practice, and tips on how to integrate psychedelic journeys.</p>
            <button className='bg-[#DCB88C] mt-3 text-white text-[20px] md:text-[22px] leading-[34px] font-medium w-[200px] md:w-[217px] h-[50px] md:h-[65px] rounded-[5px]'>Yes, please!</button>
          </div>
          <Image src='/assets/female.svg' alt='Female' width={394} height={383} />
        </div>
      </div>
    </div>
  )
}

export default Testimonials