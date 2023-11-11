"use client"

import React from 'react';

type Props = {
    title: string;
}

const FooterInput = ({title}: Props) => {
  return (
    <div
    className='flex flex-col gap-3 lg:gap-[32px]'
    >
        <h3
        className='text-lg lg:text-5xl'
        >
          {title}
        </h3>
        <form 
        className='border-[2px] border-accentBg2 rounded-3xl max-w-[377px] flex items-center justify-between p-[1px]'
        >
            <input
            type="email"
            className='bg-accentBg text-smouthText text-sm lg:text-base py-[2px] lg:py-2 px-1 lg:px-5 rounded-3xl placeholder:text-smouthText'
            placeholder='email'
            />
            <button
            className='py-[2px] lg:py-[10px] px-2 lg:px-5 bg-accentBg2 hover:bg-smouthText rounded-3xl text-sm duration-300'
            >
              Sign Up
            </button>
        </form>
    </div>
  )
}

export default FooterInput;