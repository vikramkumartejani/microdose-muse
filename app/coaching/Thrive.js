import Image from 'next/image'
import React from 'react'

const Thrive = () => {
  return (
    <div className="overflow-hidden relative w-full py-[100px] px-4 sm:px-8 lg:px-12 xl:px-16">
        <Image data-aos="fade-left" src='/assets/top-thrive.svg' alt='thrive' width={271.5} height={174} className='w-[150px] sm:w-[271px] absolute -top-0 -right-0'/>
        <Image data-aos="fade-right" src='/assets/bottom-thrive.svg' alt='thrive' width={271.5} height={174} className='w-[150px] sm:w-[271px] absolute bottom-0 left-0'/>
        {/* Content */}
        <div className='relative z-20 w-full max-w-[1121px] mx-auto text-center'>
            <h1 data-aos="fade-up" className='text-[30px] sm:text-[40px] font-alethia font-normal text-[#454545] sm:leading-[64px]'>THRIVE</h1>
            <h3 data-aos="fade-up" className='text-[16px] sm:text-[18px] font-normal text-[#454545] leading-[28.8px] sm:mt-1.5'>1:1 Coaching</h3>
            <h3 data-aos="fade-up" className='text-[16px] sm:text-[18px] font-normal text-[#454545] leading-[28.8px] sm:mt-1.5'>(a 3 month-container)</h3>
            <p data-aos="fade-up" className='text-[16px] sm:text-[20px] font-poppins text-[#454545] leading-normal mt-4 sm:mt-6'>Over a 3-month period, I will guide you through a customized empowerment journey anchored in industry-leading transformation processes: cognitive restructuring, goal setting and achievement, and habit-forming.</p>
            <p data-aos="fade-up" className='text-[16px] sm:text-[20px] font-poppins text-[#454545] leading-normal mt-4 sm:mt-6'>You will learn how to sustain your transformation and create healthy, enduring patterns to ensure exponential growth. Bring your goals to full fruition and move confidently in the direction of your dreams.</p>
            <div className='max-w-[930px] mx-auto relative mt-8 mb-8 sm:mb-12 bgcontentimage pt-[26px] pb-[40px] px-4 rounded-lg'>
                {/* overlay */}
                <div className='absolute inset-0 bg-[#DCB88C] opacity-90 rounded-lg'></div>
                <div className='relative z-10'>
                    <h1 data-aos="fade-right" className='text-[18px] sm:text-[21px] leading-[33px] font-semibold text-white mb-3'>THE DETAILS</h1>
                    <ul data-aos="fade-up" className='text-left text-white ml-3 sm:ml-4 flex flex-col gap-1.5 '>
                        <li className='list-disc text-[16px] sm:text-[18px] sm:leading-[28px] font-normal'>Weekly 1:1 coaching.</li>
                        <li className='list-disc text-[16px] sm:text-[18px] sm:leading-[28px] font-normal'>Clients have access to Microdose Muse M-F with comments or questions, expecting responses within 48 hours.</li>
                        <li className='list-disc text-[16px] sm:text-[18px] sm:leading-[28px] font-normal'>Once you commit to this program, Microdose Muse is committed to your growth and you can reach out to her at any time as needed.</li>
                        <li className='list-disc text-[16px] sm:text-[18px] sm:leading-[28px] font-normal'>Missed weeks due to travel or other commitments, will be put back on the calendar.</li>
                        <li className='list-disc text-[16px] sm:text-[18px] sm:leading-[28px] font-normal'>After completing the program,clients are welcome to continue on a month-to-month basis to dive deeper into necessary areas.</li>
                    </ul>
                </div>
            </div>
            <h2 data-aos="fade-up" className='text-[22px] sm:text-[28px] font-alethia font-normal text-[#454545]'>Want to find our if 1:1 coaching is right for you?</h2>
            <button data-aos="fade-up" className='mt-6 bg-[#DCB88C] rounded-lg w-[210px] sm:w-[226px] h-[40px] sm:h-[50px] text-[14px] sm:text-[16px] leading-[16px] font-medium text-white'>Book A Free Consultation</button>
        </div>
    </div>
  )
}

export default Thrive