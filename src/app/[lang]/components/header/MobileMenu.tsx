"use client"
import React from 'react';
import Logo from '../../assets/logo.svg';
import { IoMdClose } from "react-icons/io";
import Image from 'next/image';
import Link from 'next/link';
import MobileLocaleSwitcher from './MobileLocaleSwither';


const MobileMenu = ({ lang, handleMenuToggle, handleMenuBackgroundClick, navigation}) => {
  return (
    <div
    className='absolute -top-5 left-0 bg-white/50 w-screen h-[1000%]'
    >
        <div
        className='z-50 absolute top-4 right-4 xl:right-[8%] shadow bg-mainBg w-[90%] h-screen rounded-2xl p-6 xl:p-10'
        >
            <div
            className='flex justify-between border-b-2 border-accentBg py-2'
            >
                <Image 
                src={Logo}
                width={32}
                height={32}
                alt='logoImage'
                />
                <IoMdClose
                onClick={handleMenuToggle}
                className="w-7 h-7"
                />
            </div>
            <div>
                <ul
                className='flex-flex-col gap-4 text-xl font-medium my-10 border-b-2 border-accentBg py-2'
                >
                    <li>
                        <Link
                        href={`/${lang}/superheroes`}
                        className=''
                        >
                            {navigation.superheroes}
                        </Link>
                    </li>
                    <li>
                        <Link
                        href={`/${lang}/horror`}
                        className=''
                        >
                            {navigation.horror}
                        </Link>
                    </li>
                    <li>
                        <Link
                        href={`/${lang}/mystery`}
                        className=''
                        >
                            {navigation.mystery}
                        </Link>
                    </li>
                    <li>
                        <Link
                        href={`/${lang}/adventure`}
                        className=''
                        >
                            {navigation.adventure}
                        </Link>
                    </li>
                    <li>
                        <Link
                        href={`/${lang}/manga`}
                        className=''
                        >
                            {navigation.manga}
                        </Link>
                    </li>
                    <li>
                        <Link
                        href={`/${lang}/historical`}
                        className=''
                        >
                            {navigation.historical}
                        </Link>
                    </li>
                </ul>
                <div>
                    <MobileLocaleSwitcher/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default MobileMenu;