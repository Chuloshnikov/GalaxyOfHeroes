import Logo from '../../assets/logo.svg';
import Image from 'next/image';
import Link from 'next/link';

import { getDictionary } from '../../lib/dictionaries';

import CookieMessage from './CookieMessage';
import NavbarIcons from './NavbarIcons';




 
const Navbar = async ({lang}: {lang: Locale}) => {
    const { navigation, cookieMessageText, searchPopup, authMenuText } = await getDictionary(lang);
  return (
    <header
    className='w-full sticky top-0 z-50 px-4'
    >
        <nav
        className='shadow max-w-contentContainer mt-5 mx-auto bg-mainBg text-accentBg py-5 px-8 rounded-[12px] flex justify-between items-center'
        >
            {/*Logo */}
            <Link
            href={`/${lang}`}
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
                    href={`/${lang}/`}
                    className=''
                    >
                        {navigation.home}
                    </Link>
                </li>
                <li>
                    <Link
                    href={`/${lang}/horror`}
                    className=''
                    >
                        {navigation.market}
                    </Link>
                </li>
                <li>
                    <Link
                    href={`/${lang}/contacts`}
                    className=''
                    >
                        {navigation.contacts}
                    </Link>
                </li>
                <li>
                    <Link
                    href={`/${lang}/blog`}
                    className=''
                    >
                        {navigation.blog}
                    </Link>
                </li>
                <li>
                    <Link
                    href={`/${lang}/about-us`}
                    className=''
                    >
                        {navigation.aboutUs}
                    </Link>
                </li>
            </ul>
            {/*icons*/}
           <NavbarIcons 
           authMenuText={authMenuText}
           navigation={navigation}
           searchPopup={searchPopup} 
           lang={lang}
           />
        </nav>
        {/* cookie message*/}
        <CookieMessage messageText={cookieMessageText}/>
    </header>
  )
}

export default Navbar;