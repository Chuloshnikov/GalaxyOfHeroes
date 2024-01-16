import React, {useState} from 'react';
import { FcGoogle } from "react-icons/fc";

const RegisterSection = () => {
  const [creatingUser, setCreatingUser] = useState(false);

  const createUser = () => {

  }
  return (
    <div
    className='p-4'
    >
      <form
      className='mx-auto flex flex-col gap-2 justify-center items-center'
      >
        <input className='border-2 border-accentBg2' type="email" placeholder={"email"}/>
        <input className='border-2 border-accentBg2' type="password" placeholder={"password"}/>
        <button 
            className='bg-mainBg text-accentBg font-semibold border-2 border-accentBg py-2 px-20 rounded-full mx-12'
            type="submit"
            disabled={creatingUser}
            >
                Register
            </button>
        <button
            className='bg-mainBg text-accentBg font-semibold border-2 border-accentBg py-2 px-7 rounded-full flex gap-2 items-center justify-center'
            type="button"
            onClick={() => signIn('google', {callbackUrl: '/'})}
            >
                <FcGoogle/>
                Login with google
            </button>
      </form>
      <div
      className='text-accentBg2 text-sm font-semibold px-7 mt-8 text-center'
      >
        <p>You can register or login with Google</p>
      </div>
    </div>
  )
}

export default RegisterSection