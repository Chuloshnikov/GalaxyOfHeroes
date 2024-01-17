"use client"
import React, { useState } from 'react';
import { IoMdClose } from "react-icons/io";
import LoginSection from './LoginSection';
import RegisterSection from './RegisterSection';

const AuthMenu = ({close, backgroundClick, handleAuthMenuClick, authMenuText, lang}) => {
  const [authSelect, setAuthSelect] = useState("login");


  const selectedVariation = 'bg-accentBg text-mainBg border-2 border-accentBg';
  const unselectedVariation = 'bg-mainBg border-2 border-accentBg text-accentBg';
  return (
    <div
        onClick={backgroundClick}
        className='z-10 absolute -top-5 left-0 w-full h-[5100%]'
        >
          <div
          onClick={handleAuthMenuClick}
          className='z-20 bg-mainBg shadow-xl absolute top-5 right-3 md:right-6 w-[300px] h-[470px] flex flex-col rounded-xl'
          >
              <div
              className='flex items-center justify-end p-4'
              >
                <IoMdClose 
                className="w-6 h-6 cursor-pointer"
                onClick={() => close()}
                />
              </div>
              <div
              className='flex items-center justify-between text-xl font-semibold px-2'
              >
                <button
                onClick={() => setAuthSelect('register')}
                  className={`cursor-pointer py-4 w-[50%] rounded-l-xl ${authSelect === 'register' ? selectedVariation : unselectedVariation}`}
                >
                    {authMenuText.registerButtonText}
                </button>
                <button
                onClick={() => setAuthSelect('login')}
                className={`cursor-pointer py-4 w-[50%] rounded-r-xl ${authSelect === 'login' ? selectedVariation : unselectedVariation}`}
                >
                    {authMenuText.loginButtonText}
                </button>
              </div>
              {authSelect === "login" ? (<LoginSection authMenuText={authMenuText} lang={lang}/>) : (<RegisterSection authMenuText={authMenuText} lang={lang}/>) }
          </div>
    </div>
  )
}

export default AuthMenu;