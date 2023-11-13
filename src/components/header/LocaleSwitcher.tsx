"use client"
import react, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { i18n } from '../../../i18n.config';
import { RiEnglishInput } from 'react-icons/ri';

const LocaleSwitcher = ({lang}: any) => {
    const pathName = usePathname();
    const [lengOpen, setLengOpen] = useState<boolean>(false)

    const redirectedPathName = (locale: string) => {
        if (!pathName) return '/'
        const segments = pathName.split('/')
        segments[1] = locale
        return segments.join('/')
    }
  return (
    <div
    className=''
    >
        {!lengOpen ? (
            <div 
            className='cursor-pointer font-medium'
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
                        {i18n.locales.map(locale => {
                        return (
                            <ul
                            className='flex flex-col gap-2 '
                            >
                                <li>
                                <Link href={redirectedPathName(locale)}>{locale.toUpperCase()}</Link>
                                </li>
                            </ul>
                        )
                        })}
                    </div>
                </div>
            </div>
        )
    }
    </div>
  )
}

export default LocaleSwitcher;