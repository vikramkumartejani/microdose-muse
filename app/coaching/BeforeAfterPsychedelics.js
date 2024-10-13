import Image from 'next/image'
import React from 'react'

const BeforeAfterPsychedelics = () => {
  return (
    <div className='overflow-hidden'>
      <div>
        <Image src='/assets/psychedelics-topbar.svg' alt='profile-one' width={14000} height={729} className='-mb-0.5' />
        <div className='w-full bg-image-one py-[50px] sm:py-[60px] text-center px-4'>
          <h2 data-aos="fade-up" className='text-[25px] sm:text-[32px] sm:leading-[51px] max-w-[600px] mx-auto font-alethia text-white'>I view my life as before psychedelics, and after psychedelics.</h2>
        </div>
      </div>

      <div className='-mt-1 w-full bg-image-two flex lg:items-center lg:flex-row flex-col justify-between gap-10 xl:gap-20 relative'>
        <Image src='/assets/profile-one.png' alt='profile-one' width={706} height={729} className='xl:w-[706px] w-[600px]' data-aos="fade-right" />
        <div data-aos="fade-left" className='lg:max-w-[600px] mx-auto px-4 md:px-10 lg:pr-[40px] xl:pr-[127px] pt-[20px] pb-[50px] sm:pt-[40px] sm:pb-[60px] lg:py-[100px]'>
          <p className='text-[18px] sm:text-[24px] leading-normal font-normal font-poppins text-white'>Psychedelics have led me down a path of deep remembrance, reverence, and re-connection with what is significant. They have opened and expanded my heart, mind, and spirit in a way that profoundly altered my life path. </p>
          <p className='mt-8 text-[18px] sm:text-[24px] leading-normal font-normal font-poppins text-white'>I am now deeply committed to helping others safely commune with and integrate their own experiences with psychedelics, and with training and expertise in mindset coaching, support people through periods of transformation.</p>
        </div>
      </div>

      <div className='-mt-1 w-full bg-image-three flex lg:items-center lg:flex-row flex-col-reverse justify-between gap-10 xl:gap-20 relative'>
        <div data-aos="fade-right" className='lg:max-w-[800px] mx-auto px-4 md:px-10 lg:pl-[40px] xl:pl-[100px] pt-[20px] pb-[40px]'>
          <p className='text-[18px] sm:text-[22px] leading-normal font-normal font-poppins text-white'>After a decade building a career supporting people’s growth in the tech industry, I shifted my focus to personal transformation coaching. </p>
          <p className='mt-8 text-[18px] sm:text-[22px] leading-normal font-normal font-poppins text-white'>My coaching training is rooted in the gold standard program, Co-Active Institute, with additional certifications from Life Coach School.</p>
          <p className='mt-8 text-[18px] sm:text-[22px] leading-normal font-normal font-poppins text-white'>In 2023, I trained with Mushroom Mamasita to deepen my more feminine approach to guiding clients, and in 2024 rounded out a more holistic understanding of psychedelic healing through Pacifica University’s Psychedelics and Depth Psychology certificate program.</p>
        </div>
        <Image data-aos="fade-left" src='/assets/profile-two.png' alt='profile-one' width={706} height={729} className='xl:w-[706px] w-[600px]' />
      </div>


      <div className='-mt-1 w-full bg-image-four flex lg:items-center lg:flex-row flex-col justify-between gap-10 xl:gap-20 relative'>
        <Image data-aos="fade-right" src='/assets/profile-image-three.svg' alt='profile-one' width={706} height={729} className='xl:w-[706px] w-[600px]' />
        <div className='lg:max-w-[600px] mx-auto px-4 md:px-10 lg:pr-[40px] xl:pr-[127px] pt-[20px] pb-[40px] sm:pt-[40px] sm:pb-[60px] lg:py-[100px]'>
          <p data-aos="fade-left" className='text-[18px] sm:text-[24px] leading-normal font-normal font-poppins text-white'>As a coach, I help you get clear on your desires, purpose and dreams... and with that clarity as your muse, support you as you uncover and release inner blocks and subconscious patterning... and ultimately live an expanded, more fulfilled life.</p>
        </div>
      </div>

    </div>
  )
}

export default BeforeAfterPsychedelics