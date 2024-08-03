"use client";
import Image from 'next/image';
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
      <div className="border-b border-[#D9D9D9] max-w-[1920px] w-full mx-auto flex items-center justify-between h-[120px] px-4 lg:px-20 2xl:px-40">
        {/* Menu Button */}
        <button
          className="flex items-center justify-center"
          onClick={toggleMenu}
          data-aos="fade-bottom"
        >
          <Image
            src="/assets/menu.svg"
            alt="Menu"
            width={46}
            height={46}
            loading="lazy"
          />
        </button>

        {/* Logo */}
        <Image
          src="/assets/logo.svg"
          alt="Logo"
          width={321}
          height={83}
          className="md:w-[321px] w-[250px]"
           decoding="async"
            data-nimg="1"
            style="color:transparent"
            loading="lazy"
        />

        {/* Log In Button */}
        <button
          className="hidden md:block bg-[#DCB88C] rounded-[10px] w-[178px] h-[58px] text-white text-[18px] leading-[18px] font-semibold"
          data-aos="fade-bottom"
        >
          Log In
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 flex flex-col items-center justify-center bg-black z-50 transition-transform transform"
          data-aos="fade-in"
          data-aos-delay="500"
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
              data-aos="fade-bottom"
              data-aos-delay="400"
            >
              Log In
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
