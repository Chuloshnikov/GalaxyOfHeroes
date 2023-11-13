import React from 'react';
import Image from 'next/image';
import heroImg from '../../assets/hero1.png';
import mobileHeroImg from '../../assets/modilehero.png';
import ScrollDownButton from './ScrollDownButton';
import { getDictionary } from '../../lib/dictionary';

const Hero = ({hero}) => {
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
        className="lg:hidden w-full min-h-[500px] object-cover rounded-b-3xl "
        />
        <div
        className='text-white absolute absolute top-[60%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col gap-5 items-center'
        >
          <h1
          className='text-2xl mdl:text-4xl font-bold uppercase text-center'
          >
            {hero.title}
          </h1>
          <p
          className="text-sm mdl:text-lg font-bold text-center text-center max-w-[500px]"
          >
            {hero.description}
          </p>
          <ScrollDownButton/>
        </div>
    </div>
  )
}

export default Hero;