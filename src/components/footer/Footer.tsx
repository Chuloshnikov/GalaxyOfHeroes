import React from 'react';
import FooterInput from './FooterInput';
import IconsContainer from './IconsContainer';

const Footer = () => {
  return (
    <footer
    className='px-4'
    >
      <div
      className='max-w-contentContainer mx-auto bg-accentBg text-mainBg rounded-[12px] py-[32px] px-[14px] lg:px-[48px] mb-24 lg:mb-[34px]'
      >
        <div
        className='flex flex-col gap-7 lg:gap-[143px]'
        >
          <FooterInput title={"Let’s stay in touch."}/>
          <IconsContainer title={"Follow us"}/>
        </div>
        <div>
          
        </div>
      </div>
    </footer>
  )
}

export default Footer;