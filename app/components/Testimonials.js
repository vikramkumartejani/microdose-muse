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
      className='bg-[#BC985E] bg-opacity-80 sm:bg-opacity-100 w-[60px] h-[40px] absolute top-1/2 transform -translate-y-1/2 xl:flex hidden  items-center justify-center rounded-[10px] -right-12 xl:-right-[40px] 2xl:-right-[120px] z-10 cursor-pointer'
      onClick={onClick}
      >
      <Image src='/assets/right-arrow.svg' alt='Arrow' width={12} height={13} />
    </div>
  );
};

const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div
    className='bg-[#BC985E] bg-opacity-80 sm:bg-opacity-100 w-[60px] h-[40px] xl:flex hidden absolute top-1/2 transform -translate-y-1/2  items-center justify-center rounded-[10px] -left-12 xl:-left-[40px] 2xl:-left-[120px] z-10 cursor-pointer'
    onClick={onClick}
    >
    <Image src='/assets/left-arrow.svg' alt='Arrow' width={12} height={13} />
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
    <div className=' overflow-hidden relative px-4'>
      <Image src='/assets/left.svg' alt='image' width={250} height={300} className='absolute -top-[120px] md:-top-[50px] -left-[80px] lg:-left-0' />
      <Image src='/assets/right.svg' alt='image' width={250} height={300} className='absolute top-[150px] -right-[130px] md:-right-[80px] lg:-right-0 ' />
      {/* data-aos="fade-up" */}
      {/* Testimonials */}
      <div className='relative' >
        <div className="relative max-w-[1066px] w-full mx-auto ">
          <h1 className="text-[#454545] text-[35px] sm:text-[48px] font-alethia font-normal text-center pt-[80px] md:pt-[130px]">Testimonials</h1>
          <Slider {...settings} className="mt-14 text-center">
            <div className="flex flex-col items-center justify-center">
              <div className='w-full flex items-center justify-center'>
                <Image src="/assets/comma.svg" alt="comma" width={31} height={29} className='' />
              </div>
              <p className="my-8 text-center max-w-[900px] mx-auto w-full text-[16px] sm:text-[20px] leading-normal text-[#454545] font-poppins">
                High-end digital experiences. Created at the heart of Manhattan, we are a should human team. The driving force of all speeches, we believe that creation should be the point around which any strategy revolves.
              </p>
              <h3 className="text-custom-two text-[18px] font-medium font-poppins">Aron Fernandez</h3>
              <h4 className="text-[#030211] text-[12px] leading-[21px] font-nunito mt-0.5">Founder of WiTechs.</h4>
            </div>

            <div className="flex flex-col items-center justify-center">
              <div className='w-full flex items-center justify-center'>
                <Image src="/assets/comma.svg" alt="comma" width={42} height={39} className='' />
              </div>
              <p className="my-8 text-center max-w-[900px] mx-auto w-full text-[16px] sm:text-[20px] leading-normal text-[#454545] font-poppins">
                High-end digital experiences. Created at the heart of Manhattan, we are a should human team. The driving force of all speeches, we believe that creation should be the point around which any strategy revolves.
              </p>
              <h3 className="text-custom-two text-[18px] font-medium font-poppins">Aron Fernandez</h3>
              <h4 className="text-[#030211] text-[12px] leading-[21px] font-nunito mt-0.5">Founder of WiTechs.</h4>
            </div>
          </Slider>
        </div>
      </div>

      {/* Banner */}
      
    </div>
  )
}

export default Testimonials
