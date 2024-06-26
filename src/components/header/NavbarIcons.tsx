"use client"
import { useState, useEffect } from 'react';
import { RiSearchLine, RiHeartLine } from 'react-icons/ri';
import { LuUserCircle2, LuShoppingCart } from 'react-icons/lu';
import {  HiMenuAlt2 } from 'react-icons/hi';
import LocaleSwitcher from './LocaleSwitcher';
import SearchBar from './SearchBar';
import MobileMenu from './MobileMenu';
import AuthMenu from "./authmenu/AuthMenu";
import { useSession } from 'next-auth/react';
import Link from 'next/link';

const NavbarIcons = ({lang, searchPopup, navigation, authMenuText}) => {
  const session = useSession();
  console.log(session);
    const [searchBarOpen, setSearchBarOpen] = useState(false);
    const [openMobileMenu, setOpenMobileMenu] = useState(false);
    const [openAuthMenu, setOpenAuthMenu] =useState(false);

    const gmailCredentials = session.data?.user.email.indexOf("gmail");

    useEffect(() => {
      if (gmailCredentials) {
        fetch('/api/profile', {
          method: 'POST',
          headers: {'Content-type': 'application/json'},
          body: JSON.stringify({
              email: session.data?.user.email,
              name: session.data?.user.name,
              image: session.data?.user.image,
              password: "notshown",
          }),
      });
      }
    },[gmailCredentials]);

    const handlePopupToggle = () => {
        setSearchBarOpen(!searchBarOpen);
      };

      const handleBackgroundClick = () => {
        setSearchBarOpen(false);
      };

      const handleSearchBarClick = (e) => {
        e.stopPropagation();
      };
    
      const handleMenuToggle = () => {
        setOpenMobileMenu(!openMobileMenu);
      };

      const handleMenuBackgroundClick = () => {
        setOpenMobileMenu(false)
      }

      const handleAuthMenuBackgroundClick = () => {
        setOpenAuthMenu(!openAuthMenu)
      }

      const handleAuthMenuClick = (e) => {
        e.stopPropagation();
      };
  return (
    <div
    className='flex items-center gap-4 mdl:gap-5'
    >
        <RiSearchLine 
        className="cursor-pointer"
        onClick={handlePopupToggle}
        />
        <LocaleSwitcher lang={lang}/>
        <RiHeartLine/>
        {session.status === "authenticated" ? (
          <Link 
          className='relative'
          href={`/${lang}/profile`}
          >
            <LuUserCircle2 className="cursor-pointer relative"/>
          <span className='w-2 h-2 rounded-full bg-green-700 absolute -top-1 -right-1'></span>
          </Link>
        ) : (
          <LuUserCircle2 className="cursor-pointer" onClick={() => setOpenAuthMenu(!openAuthMenu)}/>
        )
        } 
        <LuShoppingCart/>
        <HiMenuAlt2
        onClick={handleMenuToggle}
        className="block lg:hidden"
        />
        {searchBarOpen && (
        <SearchBar 
        close={setSearchBarOpen}
        searchPopup={searchPopup}
        lang={lang}
        handlePopupToggle={handlePopupToggle} 
        handleBackgroundClick={handleBackgroundClick}
        handleSearchBarClick={handleSearchBarClick}
        />
        )}
        {openMobileMenu && (
            <MobileMenu
            lang={lang}
            navigation={navigation}
            handleMenuBackgroundClick={handleMenuBackgroundClick}
            handleMenuToggle={handleMenuToggle}
            />
        )}
        {openAuthMenu && (
          <AuthMenu
          lang={lang}
          authMenuText={authMenuText}
          close={setOpenAuthMenu}
          backgroundClick={handleAuthMenuBackgroundClick}
          handleAuthMenuClick={handleAuthMenuClick}

          />
        )}
    </div>
  )
}

export default NavbarIcons;