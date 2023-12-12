"use client"
import React, { useState } from 'react';
import { RiSearchLine, RiHeartLine } from 'react-icons/ri';
import { LuUserCircle2, LuShoppingCart } from 'react-icons/lu';
import {  HiMenuAlt2 } from 'react-icons/hi';
import LocaleSwitcher from './LocaleSwitcher';
import SearchBar from './SearchBar';
import MobileMenu from './MobileMenu';

const NavbarIcons = ({lang, searchPopup, navigation}) => {
    const [searchBarOpen, setSearchBarOpen] = useState(false);
    const [openMobileMenu, setOpenMobileMenu] = useState(false);

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
        <LuUserCircle2/>
        <LuShoppingCart/>
        <HiMenuAlt2
        onClick={handleMenuToggle}
        className="block lg:hidden"
        />
        {searchBarOpen && (
        <SearchBar 
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
    </div>
  )
}

export default NavbarIcons;