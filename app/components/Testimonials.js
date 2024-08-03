"use client";
import Image from 'next/image'
import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';


const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className='bg-[#BC985E] bg-opacity-80 sm:bg-opacity-100 w-[83px] h-[53px] absolute top-1/2 transform -translate-y-1/2 md:flex hidden  items-center justify-center rounded-[10px] -right-12 xl:-right-[50px] 2xl:-right-[120px] z-10 cursor-pointer'
      onClick={onClick}
      >
      <Image src='/assets/right-arrow.svg' alt='Arrow' width={18} height={13} />
    </div>
  );
};

const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div
    className='bg-[#BC985E] bg-opacity-80 sm:bg-opacity-100 w-[83px] h-[53px] md:flex hidden absolute top-1/2 transform -translate-y-1/2  items-center justify-center rounded-[10px] -left-12 xl:-left-[50px] 2xl:-left-[120px] z-10 cursor-pointer'
    onClick={onClick}
    >
    <Image src='/assets/left-arrow.svg' alt='Arrow' width={18} height={13} />
    </div>
  );
};


const Testimonials = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  return (
    <div className='relative px-4 pt-0 pb-28 md:py-[60px] lg:py-[100px] overflow-hidden'>
      <Image src='/assets/left.svg' alt='image' width={400} height={500} className=' absolute -top-[100px] -left-40 lg:left-0' />
      <Image src='/assets/right.svg' alt='image' width={400} height={500} className=' absolute top-[200px] -right-48 sm:-right-40 lg:right-0' />

      {/* Testimonials */}
      <div className='relative' data-aos="fade-up">
        <div className="relative max-w-[1150px] w-full mx-auto" style={{ height: '650px' }}>
          <h1 className="text-[#454545] text-[50px] md:text-[58px] leading-[81px] font-alethia font-normal text-center mt-24">Testimonials</h1>
          <Slider {...settings} className="mt-20 text-center">
            <div className="flex flex-col items-center justify-center">
              <div className='w-full flex items-center justify-center'>
                <Image src="/assets/comma.svg" alt="comma" width={42} height={39} className='' />
              </div>
              <p className="my-8 text-center max-w-[1197px] mx-auto w-full text-[18px] leading-[30px] md:text-[24px] md:leading-[36px] text-[#454545] font-poppins">
                High-end digital experiences. Created at the heart of Manhattan, we are a should human team. The driving force of all speeches, we believe that creation should be the point around which any strategy revolves.
              </p>
              <h3 className="text-custom-two text-[24px] leading-[36px] font-medium font-poppins">Aron Fernandez</h3>
              <h4 className="text-[#030211] text-[16px] leading-[21px] font-nunito mt-0.5">Founder of WiTechs.</h4>
            </div>

            <div className="flex flex-col items-center justify-center">
              <div className='w-full flex items-center justify-center'>
                <Image src="/assets/comma.svg" alt="comma" width={42} height={39} className='' />
              </div>
              <p className="my-8 text-center max-w-[1197px] mx-auto w-full text-[18px] leading-[30px] md:text-[24px] md:leading-[36px] text-[#454545] font-poppins">
                High-end digital experiences. Created at the heart of Manhattan, we are a should human team. The driving force of all speeches, we believe that creation should be the point around which any strategy revolves.
              </p>
              <h3 className="text-custom-two text-[24px] leading-[36px] font-medium font-poppins">Aron Fernandez</h3>
              <h4 className="text-[#030211] text-[16px] leading-[21px] font-nunito mt-0.5">Founder of WiTechs.</h4>
            </div>
          </Slider>
        </div>
      </div>

      {/* Banner */}
      <div data-aos="fade-up" className='mt:mt-[100px] relative max-w-[1500px] w-full mx-auto bg-cover bg-bottom min-h-[445px] rounded-[52px] py-10' style={{ backgroundImage: "url('/assets/testimonials.jpg')" }}>
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
