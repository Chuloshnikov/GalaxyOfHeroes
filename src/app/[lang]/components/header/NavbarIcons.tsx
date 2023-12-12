"use client"
import React, { useState } from 'react';
import { RiSearchLine, RiHeartLine } from 'react-icons/ri';
import { LuUserCircle2, LuShoppingCart } from 'react-icons/lu';
import {  HiMenuAlt2 } from 'react-icons/hi';
import LocaleSwitcher from './LocaleSwitcher';
import SearchBar from './SearchBar';

const NavbarIcons = ({lang, searchPopup}) => {
    const [searchBarOpen, setSearchBarOpen] = useState(false);

    const handlePopupToggle = () => {
        setSearchBarOpen(!searchBarOpen);
      };

      const handleBackgroundClick = () => {
        setSearchBarOpen(false);
      };

      const handleSearchBarClick = (e) => {
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
        <LuUserCircle2/>
        <LuShoppingCart/>
        <HiMenuAlt2
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
    </div>
  )
}

export default NavbarIcons;