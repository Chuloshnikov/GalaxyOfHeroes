"use client"
import React, { useState } from 'react';
import { FcGoogle } from "react-icons/fc";
import {signIn} from "next-auth/react";

const LoginSection = ({ authMenuText, lang }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginInProgress, setLoginInProgress] = useState(false);
  const [error, setError] = useState<any>('');

  async function handleFormSubmit(e) {
    e.preventDefault();
    setLoginInProgress(true);

    const logIn = await signIn('credentials', {email, password, callbackUrl: `/${lang}`});
    if (logIn) {
      setLoginInProgress(false);
    } else {
      setError(toString(logIn));
      setLoginInProgress(false);
    }
  };

  return (
    <div
    className='p-4'
    >
      <form
      onSubmit={handleFormSubmit}
      className='mx-auto flex flex-col gap-2 justify-center items-center'
      >
        <input 
        onChange={e => setEmail(e.target.value)}
        className='border-2 border-accentBg2' 
        name="email"
        type="email" 
        placeholder={authMenuText.emailPlaceholder}
        />
        <input 
        onChange={e => setPassword(e.target.value)}
        className='border-2 border-accentBg2' 
        name="password"
        type="password" 
        placeholder={authMenuText.passwordPlaceholder}
        />
        <button 
            onClick={handleFormSubmit}
            className='bg-mainBg text-accentBg font-semibold border-2 border-accentBg py-2 px-[90px] rounded-full mx-8'
            type="submit"
            disabled={loginInProgress}
            >
                {authMenuText.loginButtonText}
            </button>
        <button
            className='bg-mainBg text-accentBg font-semibold border-2 border-accentBg py-2 px-7 rounded-full flex gap-2 items-center justify-center'
            type="button"
            onClick={() => signIn('google', {callbackUrl: `/${lang}`})}
            
            >
                <FcGoogle/>
                {authMenuText.googleButtonText}
            </button>
      </form>
      <div
      className='text-accentBg2 text-sm font-semibold px-7 mt-8 text-center'
      >
        <p>{authMenuText.loginText}</p>
      </div>
    </div>
  )
}

export default LoginSection;