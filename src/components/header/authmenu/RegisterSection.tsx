import React, {useState} from 'react';
import { FcGoogle } from "react-icons/fc";
import Link from 'next/link';
import {signIn} from "next-auth/react";

const RegisterSection = ({authMenuText, lang}: any) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [creatingUser, setCreatingUser] = useState(false);
  const [userCreated, setUserCreated] = useState(false);
  const [error, setError] = useState(false);

  async function handleFormSubmit(e: any) {
    e.preventDefault();
    setCreatingUser(true);
    setError(false);
    setUserCreated(false);
    const response = await fetch(`${lang}/api/register`, {
      method: 'POST',
      body: JSON.stringify({email, password}),
      headers: {'Content-Type': 'application/json'},
    });
    if (response.ok) {
      setUserCreated(true);
    }
    else {
      setError(true);
    }
    setCreatingUser(false);
  }
  return (
    <div
    className='p-4'
    > 
     {userCreated && (
        <div className="my-4 text-center">
          User created.<br />
          Now you can{' '}
          <Link className="underline text-green-700" href={`/${lang}/login`}>Login &raquo;</Link>
        </div>
      )}
      {error && (
        <div className="my-4 text-center">
          An error has occurred.<br />
          Please try again later
        </div>
      )}
      <form
      onSubmit={handleFormSubmit}
      className='mx-auto flex flex-col gap-2 justify-center items-center my-4'
      >
        <input 
        onChange={e => setEmail(e.target.value)}
        className='border-2 border-accentBg2' 
        type="email" 
        placeholder={authMenuText.emailPlaceholder}
        disabled={creatingUser}
        />
        <input 
        onChange={e => setPassword(e.target.value)}
        className='border-2 border-accentBg2' 
        type="password" 
        placeholder={authMenuText.passwordPlaceholder}
        disabled={creatingUser}
        />
        <button 
            className='bg-mainBg text-accentBg font-semibold border-2 border-accentBg py-2 px-20 rounded-full mx-12'
            type="submit"
            disabled={creatingUser}
            >
                {authMenuText.registerButtonText}
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
        <p>{authMenuText.registerText}</p>
      </div>
    </div>
  )
}

export default RegisterSection;