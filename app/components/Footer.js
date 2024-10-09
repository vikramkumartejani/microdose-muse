import Image from 'next/image';
import Link from 'next/link';
 
const Footer = () => {
  return (
    <div  className="bg-[#DCB88C] px-3 relative z-10" >
      <div className='w-full pt-[47.56px] flex items-center justify-center flex-col'   >
        <Image src='/assets/footer-logo.svg' alt='footer-logo' width={240} height={62}/>
        <nav className='flex gap-2 flex-wrap items-center justify-center sm:gap-[27.75px] py-[14.25px]'>
          <Link href='/about' className='text-white text-[14px] sm:text-[16px] leading-[24px] font-normal'>About</Link>
          <Link href='/coaching' className='text-white text-[14px] sm:text-[16px] leading-[24px] font-normal'>Coaching</Link>
          <Link href='/program' className='text-white text-[14px] sm:text-[16px] leading-[24px] font-normal'>Program</Link>
          <Link href='/musings' className='text-white text-[14px] sm:text-[16px] leading-[24px] font-normal'>Musings</Link>
          <Link href='/contactus' className='text-white text-[14px] sm:text-[16px] leading-[24px] font-normal'>Contact Us</Link>
        </nav>
        <div className='flex gap-2 pb-[15.94px]'>
          <Link href='/' className='text-white text-[24px]'>
            <Image src='/assets/instagram.svg' alt='Instagram' width={37} height={37} />
          </Link>
          <Link href='/' className='text-white text-[24px]'>
            <Image src='/assets/whatsapp.svg' alt='Whatsapp' width={37} height={37} />
          </Link>
          <Link href='/' className='text-white text-[24px]'>
            <Image src='/assets/telegram.svg' alt='Telegram' width={37} height={37} />
          </Link>
        </div>
        <div className='h-[1px] w-full max-w-[1600px] mx-auto bg-[#FFFFFF4D]'></div>
        <p className='pt-[9px] pb-[10.5px] text-white text-[12px] leading-[18px] font-roboto font-normal'>
          @Copyright<span className='font-bold font-roboto'>MICRODOSE MUSE</span>
        </p>
      </div>
    </div>
  );
};

export default Footer;
