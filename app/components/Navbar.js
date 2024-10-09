"use client";
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="bg-black w-full fixed top-0 z-40">
      {/* Navbar Container */}
      <div className="border-b border-[#D9D9D9] max-w-[1920px] w-full mx-auto flex items-center justify-between py-[13.88px] px-4 lg:px-20 2xl:px-40">
        {/* Menu Button */}
        <button
          className="flex items-center justify-center"
          onClick={toggleMenu}
        >
          <Image
            src="/assets/menu.svg"
            alt="Menu"
            width={34.5}
            height={34.5}
            loading="lazy"
          />
        </button>

        {/* Logo */}
        <Image
          src="/assets/microdose-logo.svg"
          alt="Logo"
          width={240}
          height={62}
        />

        {/* Log In Button */}
        <button
          className="hidden md:block bg-[#DCB88C] rounded-[7.5px] w-[133px] h-[43.5px] text-white text-[16px] leading-[16px] font-semibold"
          data-aos="fade-bottom"
        >
          Log In
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 flex flex-col items-center justify-center bg-black z-50 transition-transform transform"
          data-aos-delay="500"
           data-aos="fade-right"
        >
          {/* Close Button */}
          <button
            className="absolute top-4 right-4"
            onClick={toggleMenu}
          >
            <AiOutlineClose className="text-white" size={30} />
          </button>

          {/* Menu Items */}
          <div className="flex flex-col items-center space-y-6">
            <button
              className="bg-[#DCB88C] rounded-[10px] w-[178px] h-[58px] text-white text-[18px] leading-[18px] font-semibold"
              data-aos-delay="400"
            >
              Log In
            </button>
            <Link href='/contact-me' className='bg-[#DCB88C] flex items-center justify-center rounded-[10px] w-[178px] h-[58px] text-white text-[18px] leading-[18px] font-semibold'>Contact us</Link>
            <Link href='/all-blogs' className='bg-[#DCB88C] flex items-center justify-center rounded-[10px] w-[178px] h-[58px] text-white text-[18px] leading-[18px] font-semibold'>All Blogs</Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
