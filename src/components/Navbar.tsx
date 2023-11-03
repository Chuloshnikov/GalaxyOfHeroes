"use client"
import React from 'react';
import Logo from '../assets/logo.svg';
import Image from 'next/image';
import Link from 'next/link';
import { RiEnglishInput, RiSearchLine, RiHeartLine } from 'react-icons/ri';
import { LuUserCircle2, LuShoppingCart } from 'react-icons/lu';
import {  HiMenuAlt2 } from 'react-icons/hi';




 
const Navbar = () => {
  return (
    <header
    className='w-full sticky top-0 z-50 px-4'
    >
        <nav
        className='max-w-contentContainer mt-5 mx-auto bg-mainBg py-5 px-8 rounded-[12px] flex justify-between items-center'
        >
            {/*Logo */}
            <Link
            href={"/"}
            >
                <Image
                src={Logo}
                width={32}
                height={32}
                alt='logoImage'
                />
            </Link>
            {/*nav links*/}
            <ul
            className='hidden lg:flex items-center gap-5'
            >
                <li>
                    <Link
                    href={"/"}
                    className=''
                    >
                        Superheroes
                    </Link>
                </li>
                <li>
                    <Link
                    href={"/"}
                    className=''
                    >
                        Horror
                    </Link>
                </li>
                <li>
                    <Link
                    href={"/"}
                    className=''
                    >
                        Mystery
                    </Link>
                </li>
                <li>
                    <Link
                    href={"/"}
                    className=''
                    >
                        Adventure
                    </Link>
                </li>
                <li>
                    <Link
                    href={"/"}
                    className=''
                    >
                        Manga
                    </Link>
                </li>
                <li>
                    <Link
                    href={"/"}
                    className=''
                    >
                        Historical
                    </Link>
                </li>
            </ul>
            {/*icons*/}
            <div
            className='flex items-center gap-5'
            >
                <RiSearchLine/>
                <RiEnglishInput/>
                <RiHeartLine/>
                <LuUserCircle2/>
                <LuShoppingCart/>
                <HiMenuAlt2
                className="block lg:hidden"
                />
            </div>
        </nav>
    </header>
  )
}

export default Navbar;