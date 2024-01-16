"use client"
import { useState } from 'react';
import Link from 'next/link';


const LocaleSwitcher = ({lang}: any) => {
    const [lengOpen, setLengOpen] = useState<boolean>(false)

  return (
    <div
    className='hidden lg:flex'
    >
        {!lengOpen ? (
            <div 
            className='cursor-pointer font-medium '
            onClick={() => setLengOpen(!lengOpen)}
            >
                <span
                className='capitalize'
                >
                    {lang}
                </span>
            </div>
        ) : (
            <div>
                <span
                className='text-medium capitalize'
                >
                    {lang}
                </span>
                <div
                onClick={() => setLengOpen(!lengOpen)}
                className='absolute top-0 left-0 w-[100%] h-screen z-50'
                >
                    <div
                    className='absolute right-[20%] bg-mainBg py-5 px-10 shadow-xl rounded-[12px] max-w-[200px]'
                    >
                            <ul
                            className='flex flex-col gap-2 font-medium'
                            >
                                <li>
                                <Link href={"/en"}>EN</Link>
                                </li>
                                <li>
                                <Link href={"/de"}>DE</Link>
                                </li>
                                <li>
                                <Link href={"ua"}>UA</Link>
                                </li>
                            </ul>
                    </div>
                </div>
            </div>
        )
    }
    </div>
  )
}

export default LocaleSwitcher;