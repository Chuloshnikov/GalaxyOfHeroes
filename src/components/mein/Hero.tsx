import React from 'react';
import Image from 'next/image';
import heroImg from '../../assets/hero1.png';
import mobileHeroImg from '../../assets/modilehero.png';

const Hero = () => {
  return (
    <div
    className='relative w-full rounded-b-3xl min-h-[570px] lg:max-h-[573px] -mt-[100px]'
    >
        <Image
        src={heroImg}
        alt='heroImg'
        className="hidden lg:block w-full min-h-[570px] lg:max-h-[573px] object-cover rounded-b-3xl"
        />
         <Image
        src={mobileHeroImg}
        alt='heroImg'
        className="lg:hidden w-full min-h-[500px] object-cover rounded-b-3xl"
        />
    </div>
  )
}

export default Hero;