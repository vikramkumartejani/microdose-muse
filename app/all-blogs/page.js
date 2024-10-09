import React from 'react'
import Footer from '../components/Footer'
import Image from 'next/image'
import BlogCard from '../components/BlogCard';
import Link from 'next/link';

const AllBlogs = () => {
    const blogs = [
        {
          id: 1,
          title: 'Wakeup And Smell The Nature',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          image: '/assets/blog-one.svg',
        },
        {
          id: 2,
          title: 'Another Blog Post',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          image: '/assets/blog-two.svg',
        },
      ];
    return (
        <>
            <div className='pb-[30px] sm:pb-[60px] md:pb-[130px] pt-[130px] w-full px-2 sm:px-4 lg:px-10 xl:px-20 2xl:px-40'>
                <div className='flex items-center justify-center relative w-full max-w-[350px] mx-auto'>
                    <h1 className='font-alethia text-[40px] font-normal text-[#454545] -mt-5'>MUSINGS</h1>
                    <div className=' absolute right-0 w-[84px]'>
                        <img src='/assets/subtract-leaf.png' alt='leaf-two' />
                        <img src='/assets/Subtract.png' alt='leaf-two' className=' absolute top-4 right-0' />
                    </div>
                </div>
                <p className='text-[#4C535A] text-center mt-1 font-poppins text-[13px] font-medium'>The Microdose Muse Blog</p>
                
                {/* Blog Card Design */}
                <div className='w-full mt-[30px] flex items-start lg:flex-row flex-col gap-3 sm:gap-5'>
                    <div className='flex lg:flex-col flex-col-reverse gap-3 sm:gap-5 w-full'>
                        {/* Blog One */}
                        <div className='w-full rounded-lg shadow-lg overflow-hidden relative group'>
                            <img src='/assets/blog-seven.png' alt='blog-image' className="w-full h-[312px] object-cover " />
                            <div className="absolute bottom-0 w-full px-2.5 sm:px-6 py-4 ">
                                <div className='min-w-full flex sm:flex-row flex-col items-center justify-between gap-4'>
                                    <div className='w-full'>
                                        <h2 className="font-normal text-white text-[21px] leading-normal capitalize font-alethia">wakeup and smell the nature</h2>
                                        <p className="text-[#FFF] text-[12px] font-normal font-poppins w-full sm:max-w-[335px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
                                    </div>
                                    <Link href='/single-blog' className='text-white flex items-center justify-center min-w-full sm:min-w-[123px] min-h-[40px] bg-[#DCB88C] rounded-lg text-[14px] font-semibold leading-[14px]'>
                                        Read More
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className='flex items-center gap-1.5 sm:gap-5'>
                            {/* Blog Two */}
                            <div className='w-full rounded-lg shadow-lg overflow-hidden relative group'>
                                <img src='/assets/blog-one.png' alt='blog-image' className="w-full h-[394.83px] object-cover " />
                                <div className="absolute bottom-0 h-full flex items-end justify-end flex-col px-2.5 sm:px-5 py-4 ">
                                    <div className='w-full flex lg:items-center justify-between flex-col gap-1'>
                                        <h2 className="font-normal text-white text-[16px] sm:text-[21px] sm:leading-[25px] capitalize font-alethia">wakeup and smell the nature</h2>
                                        <p className="mb-1 text-[#FFF] text-[10px] sm:text-[12px] font-normal font-poppins">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
                                        <Link href='/single-blog' className='text-white flex items-center justify-center w-full min-h-[30px] sm:min-h-[40px] bg-[#DCB88C] rounded sm:rounded-lg text-[12px] sm:text-[14px] font-medium sm:font-semibold leading-[14px]'>
                                            Read More
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            {/* Blog Three */}
                            <div className='w-full rounded-lg shadow-lg overflow-hidden relative group'>
                                <img src='/assets/blog-two.png' alt='blog-image' className="w-full h-[394.83px] object-cover " />
                                <div className="absolute bottom-0 h-full flex items-end justify-end flex-col px-2.5 sm:px-5 py-4 ">
                                    <div className='w-full flex lg:items-center justify-between flex-col gap-1'>
                                        <h2 className="font-normal text-white text-[16px] sm:text-[21px] sm:leading-[25px] capitalize font-alethia">wakeup and smell the nature</h2>
                                        <p className="mb-1 text-[#FFF] text-[10px] sm:text-[12px] font-normal font-poppins">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
                                        <Link href='/single-blog' className='text-white flex items-center justify-center w-full min-h-[30px] sm:min-h-[40px] bg-[#DCB88C] rounded sm:rounded-lg text-[12px] sm:text-[14px] font-medium sm:font-semibold leading-[14px]'>
                                            Read More
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='flex flex-col gap-3 sm:gap-5 w-full'>        
                        <div className='flex items-center gap-1.5 sm:gap-5'>
                            {/* Blog Four */}
                            <div className='w-full rounded-lg shadow-lg overflow-hidden relative group'>
                                <img src='/assets/blog-three.png' alt='blog-image' className="w-full h-[394.83px] object-cover " />
                                <div className="absolute bottom-0 h-full flex items-end justify-end flex-col px-2.5 sm:px-5 py-4 ">
                                    <div className='w-full flex lg:items-center justify-between flex-col gap-1'>
                                        <h2 className="font-normal text-white text-[16px] sm:text-[21px] sm:leading-[25px] capitalize font-alethia">wakeup and smell the nature</h2>
                                        <p className="mb-1 text-[#FFF] text-[10px] sm:text-[12px] font-normal font-poppins">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
                                        <Link href='/single-blog' className='text-white flex items-center justify-center w-full min-h-[30px] sm:min-h-[40px] bg-[#DCB88C] rounded sm:rounded-lg text-[12px] sm:text-[14px] font-medium sm:font-semibold leading-[14px]'>
                                            Read More
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            {/* Blog Five */}
                            <div className='w-full rounded-lg shadow-lg overflow-hidden relative group'>
                                <img src='/assets/blog-four.png' alt='blog-image' className="w-full h-[394.83px] object-cover " />
                                <div className="absolute bottom-0 h-full flex items-end justify-end flex-col px-2.5 sm:px-5 py-4 ">
                                    <div className='w-full flex lg:items-center justify-between flex-col gap-1'>
                                        <h2 className="font-normal text-white text-[16px] sm:text-[21px] sm:leading-[25px] capitalize font-alethia">wakeup and smell the nature</h2>
                                        <p className="mb-1 text-[#FFF] text-[10px] sm:text-[12px] font-normal font-poppins">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
                                        <Link href='/single-blog' className='text-white flex items-center justify-center w-full min-h-[30px] sm:min-h-[40px] bg-[#DCB88C] rounded sm:rounded-lg text-[12px] sm:text-[14px] font-medium sm:font-semibold leading-[14px]'>
                                            Read More
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Blog Six */}
                        <div className='w-full rounded-lg shadow-lg overflow-hidden relative group'>
                            <img src='/assets/blog-eight.png' alt='blog-image' className="w-full h-[312px] object-cover " />
                            <div className="absolute bottom-0 w-full px-2.5 sm:px-6 py-4 ">
                                <div className='min-w-full flex sm:flex-row flex-col items-center justify-between gap-4'>
                                    <div className='w-full'>
                                        <h2 className="font-normal text-white text-[21px] leading-normal capitalize font-alethia">wakeup and smell the nature</h2>
                                        <p className="text-[#FFF] text-[12px] font-normal font-poppins w-full sm:max-w-[335px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
                                    </div>
                                    <Link href='/single-blog' className='text-white flex items-center justify-center min-w-full sm:min-w-[123px] min-h-[40px] bg-[#DCB88C] rounded-lg text-[14px] font-semibold leading-[14px]'>
                                        Read More
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default AllBlogs