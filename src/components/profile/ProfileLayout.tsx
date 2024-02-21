"use client"
import React from 'react';
import { signOut, useSession } from 'next-auth/react';
import Link from 'next/link';
import {redirect} from "next/navigation";

const ProfileLayout = ({ children, lang, text }: { children: React.ReactNode, lang: any, text: any }) => {
  const session = useSession();
  const status = session?.status;
    const pathname = "1";

    const selectedVariation = 'bg-accentBg text-mainBg border-2 border-accentBg';
  const unselectedVariation = 'bg-mainBg border-2 border-accentBg text-accentBg';

  if (status === "loading") {
    return 'loading...';
}

if (status === "unauthenticated") {
    return redirect('/');
}

  return (
    <div
    className='max-w-contentContainer mdl:mx-10 xl:mx-auto my-[12px] lg:my-[56px]'
    >
         <div
              className='flex xs:flex-col sm:flex-row items-center justify-between text-xl font-semibold'
              >
                <Link
                href={`/${lang}/profile`}
                  className={`cursor-pointer text-center py-4 xs:w-full sm:w-[50%] xs:rounded-t-xl sm:rounded-r-none sm:rounded-l-xl ${pathname === '1' ? selectedVariation : unselectedVariation}`}
                >
                    {text.profileInfo}
                </Link>
                <button
                onClick={() => signOut()}
                className={`cursor-pointer text-center py-4 xs:w-full sm:w-[50%] ${pathname === '2' ? selectedVariation : unselectedVariation}`}
                >
                  {text.logOut}
                </button>
                <button
                onClick={() => signOut()}
                className={`cursor-pointer text-center py-4 xs:w-full sm:w-[50%] ${pathname === '2' ? selectedVariation : unselectedVariation}`}
                >
                  {text.logOut}
                </button>
                <button
                onClick={() => signOut()}
                className={`cursor-pointer text-center py-4 xs:w-full sm:w-[50%] ${pathname === '2' ? selectedVariation : unselectedVariation}`}
                >
                  {text.logOut}
                </button>
                <button
                onClick={() => signOut()}
                className={`cursor-pointer text-center py-4 xs:w-full sm:w-[50%] ${pathname === '2' ? selectedVariation : unselectedVariation}`}
                >
                  {text.logOut}
                </button>
                <Link
                href={`/${lang}/profile/customer-orders`}
                className={`cursor-pointer text-center py-4 xs:w-full sm:w-[50%] xs:rounded-b-xl sm:rounded-l-none sm:rounded-r-xl ${pathname === '2' ? selectedVariation : unselectedVariation}`}
                >
                    {text.orders}
                </Link>
              </div>
        {children}
    </div>
  )
}

export default ProfileLayout