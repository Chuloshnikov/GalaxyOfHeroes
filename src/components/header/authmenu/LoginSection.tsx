import React, { useState } from 'react';
import { FcGoogle } from "react-icons/fc";

const LoginSection = ({ authMenuText }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginInProgress, setLoginInProgress] = useState(false)
  return (
    <div
    className='p-4'
    >
      <form
      className='mx-auto flex flex-col gap-2 justify-center items-center'
      >
        <input 
        onChange={e => setEmail(e.target.value)}
        className='border-2 border-accentBg2' 
        type="email" 
        placeholder={authMenuText.emailPlaceholder}
        />
        <input 
        onChange={e => setPassword(e.target.value)}
        className='border-2 border-accentBg2' 
        type="password" 
        placeholder={authMenuText.passwordPlaceholder}
        />
        <button 
            className='bg-mainBg text-accentBg font-semibold border-2 border-accentBg py-2 px-[90px] rounded-full mx-8'
            type="submit"
            disabled={loginInProgress}
            >
                {authMenuText.loginButtonText}
            </button>
        <button
            className='bg-mainBg text-accentBg font-semibold border-2 border-accentBg py-2 px-7 rounded-full flex gap-2 items-center justify-center'
            type="button"
            onClick={() => signIn('google', {callbackUrl: '/'})}
            
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