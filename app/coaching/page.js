import React from 'react'
import Footer from '../components/Footer'
import Banner from '../components/Banner'
import SignMeUpPlease from '../components/SignMeUpPlease'
import Thrive from './Thrive'
import BeforeAfterPsychedelics from './BeforeAfterPsychedelics'
import Image from 'next/image'
import NeededAMuse from './NeededAMuse'
import IamAmanda from './IamAmanda'

const Coaching = () => {
    return (
        <div className='pt-[80px] w-full'>
            {/* Hero */}
            <div className="relative w-full min-h-screen flex items-center justify-center overflow-hidden px-4">
                {/* Background Video */}
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute top-0 left-0 w-full h-screen object-cover"
                >
                    <source src="/assets/MMHeaderVideoMobile.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>

                {/* Content Overlay */}
                <div className="relative z-10 ">
                    <div className=" text-white max-w-[823px] mx-auto text-center">
                        <h1 className="text-[40px] md:text-[60px] sm:leading-[67px] font-alethia mb-[18px]">Microdose Muse</h1>
                        <h2 className='mb-9 text-[25px] md:text-[35px] sm:leading-[40px] font-alethia'>Transformation Coach & Microdosing Guide</h2>
                        <p className='text-[18px] md:text-[22px] sm:leading-[24px] font-alethia'>FOR DREAMERS, EXPANSION SEEKERS, AND SELF-EXPLORERS</p>
                    </div>
                </div>
            </div>

            {/* needed-a-muse */}
            <NeededAMuse/>

            {/* i'am-amanda */}
            <IamAmanda/>
            
            {/* BeforeAfterPsychedelics */}
            <BeforeAfterPsychedelics />

            <div className='bgcommitted-to-helping w-full py-[50px]'>
                <div className='bg-image-five w-full py-[50px] sm:py-[70px] px-4'>
                    <p className='text-white text-[25px] sm:text-[32px] sm:leading-[51px] font-alethia font-normal max-w-[1000px] mx-auto text-center'>I&lsquo;m committed to helping you balance deep emotional work with intentional actions that create the change you seek.</p>
                </div>
            </div>

            {/* Microdose Muse */}
            <div className='bgmicrodosemuse py-[50px] md:pb-[74px] md:pt-[110px] w-full px-4 md:px-10'>
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