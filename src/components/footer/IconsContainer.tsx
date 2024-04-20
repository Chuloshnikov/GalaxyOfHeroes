import Link from 'next/link';
import React from 'react';
import { AiOutlineInstagram, AiOutlineTwitter, AiFillYoutube, AiFillLinkedin } from "react-icons/ai";
import { BiLogoTiktok } from "react-icons/bi";

type Props = {
    title: string;
}

const IconsContainer = ({title}: Props) => {
  return (
    <div
    className='flex flex-col gap-3'
    >
        <h3
        className='text-mainBg'
        >
            {title}
        </h3>
        <div
        className='flex gap-3'
        >
            <Link
            className='border-mainBg hover:border-smouthText hover:text-smouthText border-[1px] rounded-full p-[6px] duration-300'
            href={"/instagram"}
            >
                <AiOutlineInstagram/>
            </Link>
            <Link
            className='border-mainBg hover:border-smouthText hover:text-smouthText border-[1px] rounded-full p-[6px] duration-300'
            href={"/twitter"}
            >
                <AiOutlineTwitter/>
            </Link>
            <Link
            className='border-mainBg hover:border-smouthText hover:text-smouthText border-[1px] rounded-full p-[6px] duration-300'
            href={"/tictoc"}
            >
                <BiLogoTiktok/>
            </Link>
            <Link
            className='border-mainBg hover:border-smouthText hover:text-smouthText border-[1px] rounded-full p-[6px] duration-300'
            href={"/youtube"}
            >
                <AiFillYoutube/>
            </Link>
            <Link
            className='border-mainBg hover:border-smouthText hover:text-smouthText border-[1px] rounded-full p-[6px] duration-300'
            href={"/linkedin"}
            >
                <AiFillLinkedin/>
            </Link>
        </div>
    </div>
  )
}

export default IconsContainer;