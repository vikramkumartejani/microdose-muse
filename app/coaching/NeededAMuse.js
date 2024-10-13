import Image from 'next/image';
import React from 'react';

const NeededAMuse = () => {
    return (
        <div className='bg-needed-a-mouse w-full py-[80px] sm:py-[150px] md:py-[210px] relative overflow-hidden'>
            <Image
                src='/assets/leaf-one.png'
                alt='leaf'
                width={300}
                height={530}
                className='absolute -bottom-20 -right-28 -rotate-17'
            />
            <Image
                src='/assets/leaf-one.png'
                alt='leaf'
                width={300}
                height={530}
                className='absolute -top-[230px] -left-28 -rotate-210'
            />
            {/* Overlay */}
            <div className='absolute inset-0 bg-[#00000033] z-10' />
            <div className='relative z-20 max-w-[850px] mx-auto w-full text-white px-4'>
                <p className='text-[18px] sm:text-[22px] sm:leading-[33px] text-center font-poppins'>I felt trapped by my life. My career, my thoughts, my commitments: they were all in service of something other than myself.</p>
                <p className='text-[18px] sm:text-[22px] sm:leading-[33px] text-center font-poppins py-8'>My life didn’t look or feel the way I desired.</p>
                <p className='text-[18px] sm:text-[22px] sm:leading-[33px] text-center font-poppins'>What began as a slow realization soon became a profound awakening: choosing the life and thoughts I wanted was possible.</p>
                <h1 className='text-[#DCB88C] text-[24px] sm:text-[27px] sm:leading-[40px] font-poppins font-medium text-center mt-10'>I needed a muse... So, I became one.</h1>
            </div>
        </div>
    );
};

export default NeededAMuse;
