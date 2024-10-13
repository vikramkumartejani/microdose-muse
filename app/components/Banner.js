import Image from 'next/image'
import React from 'react'

const Banner = () => {
    return (
        <div className='px-4'>
            <div className='my-[60px] md:my-[120px] relative max-w-[1200px] w-full mx-auto bg-cover bg-bottom rounded-[30px] md:rounded-[52px] py-6' style={{ backgroundImage: "url('/assets/testimonials.jpg')" }}>
                <div className='absolute inset-0 bg-custom-one opacity-50 rounded-[30px] md:rounded-[52px]'></div>
                <div className='relative flex items-center lg:flex-row flex-col-reverse justify-start px-5 md:px-12 gap-[50px] lg:gap-[100px]'>
                    <div className='pb-5 lg:pb-0'>
                        <p className='lg:max-w-[585px] text-white font-poppins text-[16px] sm:text-[18px] font-normal text-balance'>Get my MUSINGS sent to your inbox twice a month, I’ll be diving into topics like the science of microdosing, new paradigms of transformation in mental health, the indigenous roots of psychedelic practice, and tips on how to integrate psychedelic journeys.</p>
                        <button className='bg-[#DCB88C] mt-3 text-white text-[16px] font-medium w-[162px] h-[50px] rounded-[5px]'>Yes, please!</button>
                    </div>
                    <Image src='/assets/female.svg' alt='Female' width={295} height={287} />
                </div>
            </div>
        </div>
    )
}

export default Banner