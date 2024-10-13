import React from 'react'
import Footer from '../components/Footer'
import Banner from '../components/Banner'
import SignMeUpPlease from '../components/SignMeUpPlease'
import Thrive from './Thrive'
import BeforeAfterPsychedelics from './BeforeAfterPsychedelics'
import Image from 'next/image'

const Coaching = () => {
    return (
        <div className='pt-[80px]'>
            <Image src='/assets/coaching-hero.svg' alt='coaching-hero' width={1500} height={500} />
            <BeforeAfterPsychedelics/>
            <div>
            I'm committed to helping you balance deep emotional work with intentional actions that create the change you seek.
            </div>
            {/* Microdose Muse */}
            <div className='bgmicrodosemuse pb-[74px] pt-[110px] w-full px-4 md:px-10'>
                <div className='mb-8 md:mb-20 w-full max-w-[1017px] mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-[60px]'>
                    <Image src='/assets/image1.svg' alt='image' width={478} height={294} />
                    <Image src='/assets/image2.svg' alt='image' width={478} height={294} />
                </div>
                <h2 className='text-[16px] sm:text-[24px] font-normal sm:leading-[38px] text-white text-center max-w-[1000px] mx-auto'>Outside of mushrooms and exploring the inner terrains of consciousness, I love gardening, espresso, being a Mama to baby boy Sol, and adventuring with my life partner Basil.</h2>
                <h2 className='mt-4 text-[#DCB88C] text-[20px] sm:text-[24px] leading-[38px] font-medium text-center'>-Microdose Muse</h2>
            </div>
            <Thrive />
            <SignMeUpPlease />
            <Banner />
            <Footer />
        </div>
    )
}

export default Coaching