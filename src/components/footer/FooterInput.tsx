"use client"

import React from 'react';

type Props = {
    title: string;
    button: string;
}

const FooterInput = ({title, button}: Props) => {
  return (
    <div
    className='flex flex-col gap-3 mdl:gap-[32px]'
    >
        <h3
        className='text-2xl mdl:text-5xl'
        >
          {title}
        </h3>
        <form 
        className='border-[2px] border-accentBg2 rounded-3xl max-w-[377px] flex items-center justify-between p-[1px]'
        >
            <input
            className=' bg-accentBg text-smouthText text-sm lg:text-base py-[2px] mdl:py-2 px-1 mdl:px-5 rounded-3xl placeholder:text-smouthText subscribeInput'
            placeholder='email'
            />
            <button
            className='py-1 mdl:py-3 px-2 mdl:px-5 bg-accentBg2 hover:bg-smouthText rounded-3xl text-xs lg:text-sm duration-300'
            >
              {button}
            </button>
        </form>
    </div>
  )
}

export default FooterInput;