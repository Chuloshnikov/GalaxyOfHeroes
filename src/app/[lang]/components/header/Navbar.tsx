import Logo from '../../assets/logo.svg';
import Image from 'next/image';
import Link from 'next/link';
import { RiSearchLine, RiHeartLine } from 'react-icons/ri';
import { LuUserCircle2, LuShoppingCart } from 'react-icons/lu';
import {  HiMenuAlt2 } from 'react-icons/hi';
import { getDictionary } from '../../lib/dictionaries';
import LocaleSwitcher from './LocaleSwitcher';
import CookieMessage from './CookieMessage';




 
const Navbar = async ({lang}: {lang: Locale}) => {
    const { navigation, cookieMessageText } = await getDictionary(lang);
    console.log(cookieMessageText)
  return (
    <header
    className='w-full sticky top-0 z-50 px-4'
    >
        <nav
        className='max-w-contentContainer mt-5 mx-auto bg-mainBg text-accentBg py-5 px-8 rounded-[12px] flex justify-between items-center'
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
            className='hidden lg:flex items-center gap-5 font-medium'
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
            {/*icons*/}
            <div
            className='flex items-center gap-5'
            >
                <RiSearchLine/>
                <LocaleSwitcher lang={lang}/>
                <RiHeartLine/>
                <LuUserCircle2/>
                <LuShoppingCart/>
                <HiMenuAlt2
                className="block lg:hidden"
                />
            </div>
        </nav>
        {/* cookie message*/}
        <CookieMessage messageText={cookieMessageText}/>
    </header>
  )
}

export default Navbar;