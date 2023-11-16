import React from 'react';
import FooterInput from './FooterInput';
import IconsContainer from './IconsContainer';
import FooterNav from './FooterNav';
import ScrollUpButton from './ScrollUpButton';
import Link from 'next/link';
import { getDictionary } from '../../lib/dictionary';

const Footer = async ({lang}: {lang: Locale}) => {
  const { footer } = await getDictionary(lang);
  const {companyNavigation} = await getDictionary(lang);
  const {navigation} = await getDictionary(lang);
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
          <FooterInput button={footer.button} title={footer.title}/>
          <IconsContainer title={footer.iconsTitle}/>
        </div>
        <div
        className='flex justify-between mdl:gap-4 mt-0 mdl:mt-[150px] lg:mt-0'
        >
          <FooterNav 
          companyNavigation={companyNavigation} 
          navigation={navigation} 
          lang={lang}
          footer={footer}
          />
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
              <Link href={"/"}>{footer.termsOfUse}</Link>
              <Link href={"/"}>{footer.privacyPolicy}</Link>
            </div>
            <p
              className='text-sm text-center'
              >
                {footer.allRights}
              </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;