import Image from 'next/image'
import React from 'react'

const BeforeAfterPsychedelics = () => {
  return (
    <>
      <div className='w-full bg-image-one py-[75px] text-center'>
        <h2 className='text-[32px] leading-[51px] max-w-[600px] mx-auto font-alethia text-white'>I view my life as before psychedelics, and after psychedelics.</h2>
      </div>

      <div className='-mt-1 w-full bg-image-two'>
        <div>
            <Image src='/assets/profile-one.png' alt='profile-one' width={706} height={729} />
        </div>
      </div>

    </>
  )
}

export default BeforeAfterPsychedelics