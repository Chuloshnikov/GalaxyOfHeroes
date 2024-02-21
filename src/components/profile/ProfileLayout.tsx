"use client"
import {useState, useEffect} from 'react';
import { signOut, useSession } from 'next-auth/react';
import Link from 'next/link';
import {redirect} from "next/navigation";
import { usePathname } from "next/navigation";
import LoaderSpinner from '../ui/LoaderSpinner';

const ProfileLayout = ({ children, lang, text }: { children: React.ReactNode, lang: any, text: any }) => {
  const session = useSession();
  const [isAdmin, setIsAdmin] = useState<boolean>(false);
  const status = session?.status;
  const pathname = usePathname();
  

  useEffect(() => {
    if (status === 'authenticated') {
        fetch('/api/profile').then(response => {
            response.json().then(data => {
                setIsAdmin(data.admin);
            })
        })
    }

}, [session, status]);


    const selectedVariation = 'bg-accentBg text-mainBg border-2 border-accentBg';
  const unselectedVariation = 'bg-mainBg border-2 border-accentBg text-accentBg';

  if (status === "loading") {
    return (
      <LoaderSpinner/>
    );
}

if (status === "unauthenticated") {
    return redirect('/');
}

  return (
    <div
    className='max-w-contentContainer mdl:mx-10 xl:mx-auto my-[12px] lg:my-[56px]'
    >
         <div
              className='flex xs:flex-col mdl:flex-row items-center justify-between font-semibold xs:text-sm mdl:text-xl'
              >
                <Link
                href={`/${lang}/profile`}
                  className={`cursor-pointer text-center py-4 xs:w-full mdl:w-[50%] xs:rounded-t-xl mdl:rounded-r-none mdl:rounded-l-xl ${pathname === `/${lang}/profile` ? selectedVariation : unselectedVariation}`}
                >
                    {text.profileInfo}
                </Link>
                {isAdmin && (
                  <>
                    <Link
                    href={`/${lang}/profile/categories`}
                    className={`cursor-pointer text-center py-4 xs:w-full mdl:w-[50%] ${pathname.includes('categories') ? selectedVariation : unselectedVariation}`}
                    >
                      {text.categories}
                    </Link>
                    <Link
                    href={`/${lang}/profile/items`}
                    className={`cursor-pointer text-center py-4 xs:w-full mdl:w-[50%] ${pathname.includes('items') ? selectedVariation : unselectedVariation}`}
                    >
                      {text.items}
                    </Link>
                    <Link
                    href={`/${lang}/profile/users`}
                    className={`cursor-pointer text-center py-4 xs:w-full mdl:w-[50%] ${pathname.includes('items') ? selectedVariation : unselectedVariation}`}
                    >
                      {text.users}
                    </Link>
                  </>
                 
                 
                  )}
                <button
                onClick={() => signOut()}
                className={`cursor-pointer text-center py-4 xs:w-full mdl:w-[50%] ${unselectedVariation}`}
                >
                  {text.logOut}
                </button>
                <Link
                href={`/${lang}/profile/customer-orders`}
                className={`cursor-pointer text-center py-4 xs:w-full mdl:w-[50%] xs:rounded-b-xl mdl:rounded-l-none mdl:rounded-r-xl ${pathname.includes('customer-orders') ? selectedVariation : unselectedVariation}`}
                >
                    {text.orders}
                </Link>
              </div>
        {children}
    </div>
  )
}

export default ProfileLayout