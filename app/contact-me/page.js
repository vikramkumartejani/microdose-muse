import React from 'react'
import Footer from '../components/Footer'
import Image from 'next/image'
import Link from 'next/link'

const ContactMe = () => {
  return (
    <>
      <div className='overflow-hidden w-full mt-[50px] px-4 lg:px-20 2xl:px-40 custom-background py-[100px] md:py-[200px]'>
        <div className="flex md:flex-row flex-col items-start gap-14 md:gap-7 lg:gap-10 xl:gap-[51px] w-full">
          <div className="text-white w-full md:max-w-[632px]" data-aos="fade-right">
            <h1 className='pb-[14.25px] font-alethia text-[30px] sm:text-[42px] font-normal'>Contact Me</h1>
            <p className='text-[14px] sm:text-[16px] sm:leading-[25.6px] font-normal'>Whether you&apos;re curious about microdosing, interested in coaching, or simply have questions, I&apos;m here to help. Let&apos;s connect and explore how I can support your growth, transformation, and the life you&apos;re ready to create. Reach out today—I&apos;d love to hear from you!</p>
            <div className='mt-8 sm:mt-[50px] flex items-center gap-3 sm:gap-8'>
              <Image src='/assets/tabler_mail-filled.svg' alt='lsdm' width={37.5} height={37.5} />
              <div>
               <h2 className='text-[20px] font-alethia font-normal '>Email</h2>
               <p className='font-poppins text-[14px] underline font-normal'>panda@microdosemuse.com</p>
              </div>
            </div>
          </div>

          <form data-aos="fade-left" className="form-bg text-white py-10 md:py-[78.75px] w-full md:max-w-[561px] text-center px-4 sm:px-7 lg:px-10 xl:px-[61px]">
            <h1 className='font-alethia text-[30px] sm:text-[40px] font-normal pb-[15px] leading-normal'>Ask a Question</h1>
            <p className='text-[14px] sm:text-[16px] sm:leading-[22.5px] font-normal mb-[18px]'>I&apos;d love to hear from you. Please fill out this form.</p>
            <div className='w-full flex sm:flex-row flex-col gap-[18px] sm:gap-6'>
              <div className='w-full flex items-start flex-col gap-[4.5px]'>
                <label htmlFor='name' className='text-[12px] font-normal'>First name</label>
                <input type='text' placeholder='First name' className='border border-[#D0D5DD] text-[#667085] text-[13px] font-normal w-full px-3 py-[9px] rounded-md outline-none ' required />
              </div>
              <div className='w-full flex items-start flex-col gap-[4.5px]'>
                <label htmlFor='name' className='text-[12px] font-normal'>Last name</label>
                <input type='text' placeholder='Last name' className='border border-[#D0D5DD] text-[#667085] text-[13px] font-normal w-full px-3 py-[9px] rounded-md outline-none ' required />
              </div>
            </div>
            <div className='mt-[18px] flex items-start flex-col gap-[4.5px]'>
                <label htmlFor='name' className='text-[12px] font-normal'>Email</label>
                <input type='email' placeholder='you@company.com' className='border border-[#D0D5DD] text-[#667085] text-[13px] font-normal w-full px-3 py-[9px] rounded-md outline-none ' required />
            </div>
            <div className='mt-[18px] flex items-start flex-col gap-[4.5px]'>
                <label htmlFor='name' className='text-[12px] font-normal'>Message</label>
                <textarea className='border border-[#D0D5DD] text-[#667085] h-[100px] resize-none text-[13px] font-normal w-full px-3 py-[9px] rounded-md outline-none ' required />
            </div>
            <div className='mt-[18px] mb-[24px] flex items-center gap-2.5'>
              <input type='checkbox' className='w-[15px] h-[15px]' />
              <p className='text-[12px] font-medium'>You agree to our friendly <Link href='/privacy-policy' className='font-normal underline underline-offset-2'>privacy policy</Link>.</p>
            </div>
            <button type='submit' className='w-full send-msg text-[16px] leading-[18px] py-[9px] font-medium text-white'>Send message</button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default ContactMe