import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Footer = () => {
  return (
    <div className="bg-[#DCB88C] px-3 relative z-10" >
      <div className='w-full pt-14 flex items-center justify-center flex-col' >
        <Image src='/assets/footer-logo.svg' alt='footer-logo' width={298} height={69} />
        <nav className='flex gap-5 flex-wrap items-center justify-center sm:gap-9 py-8'>
          <Link href='/about' className='text-white text-[16px] leading-[24px] font-normal'>About</Link>
          <Link href='/coaching' className='text-white text-[16px] leading-[24px] font-normal'>Coaching</Link>
          <Link href='/program' className='text-white text-[16px] leading-[24px] font-normal'>Program</Link>
          <Link href='/musings' className='text-white text-[16px] leading-[24px] font-normal'>Musings</Link>
          <Link href='/contactus' className='text-white text-[16px] leading-[24px] font-normal'>Contact Us</Link>
        </nav>
        <div className='flex gap-1.5 pb-4'>
          <Link href='/' className='text-white text-[24px]'>
            <Image src='/assets/instagram.svg' alt='Instagram' width={50} height={50} />
          </Link>
          <Link href='/' className='text-white text-[24px]'>
            <Image src='/assets/whatsapp.svg' alt='Whatsapp' width={50} height={50} />
          </Link>
          <Link href='/' className='text-white text-[24px]'>
            <Image src='/assets/telegram.svg' alt='Telegram' width={50} height={50} />
          </Link>
        </div>
        <div className='h-[1px] w-full max-w-[1600px] mx-auto bg-[#FFFFFF4D]'></div>
        <p className='pt-3 pb-3.5 text-white text-[16px] leading-[24px] font-roboto font-normal'>
          @Copyright<span className='font-bold font-roboto'>MICRODOSE MUSE</span>
        </p>
      </div>
    </div>
  );
};

export default Footer;
