import React from 'react';
import FooterInput from './FooterInput';
import IconsContainer from './IconsContainer';
import FooterNav from './FooterNav';
import ScrollUpButton from './ScrollUpButton';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer
    className='px-4'
    >
      <div
      className='max-w-contentContainer mx-auto bg-accentBg text-mainBg rounded-[12px] py-[32px] px-[14px] lg:px-[48px] mb-24 lg:mb-[34px]'
      >
        <div
        className='flex flex-col mdl:flex-row gap-11 mdl:justify-between'
        >
        <div
        className='flex flex-col gap-7 lg:gap-[143px]'
        >
          <FooterInput title={"Let’s stay in touch."}/>
          <IconsContainer title={"Follow us"}/>
        </div>
        <div
        className='flex justify-between mdl:gap-4 mt-0 mdl:mt-[150px] lg:mt-0'
        >
          <FooterNav/>
          <div
          className='flex flex-col justify-end'
          >
            <ScrollUpButton/>
          </div>
        </div>
        </div>
        <div
        className='text-smouthText'
        >
          <div
          className='flex flex-col lg:flex-row-reverse items-center gap-6 lg:justify-between mt-[50px] xl:mt-[73px] mb-4'
          >
            <div
            className='flex gap-10'
            >
              <Link href={"/"}>Terms Of Use</Link>
              <Link href={"/"}>Privacy Policy</Link>
            </div>
            <p
              className='text-sm text-center'
              >
                © 2023 | Galaxy of Heroes | All Rights Reserved
              </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;