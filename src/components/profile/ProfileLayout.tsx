"use client"
import {useState, useEffect} from 'react';
import { signOut, useSession } from 'next-auth/react';
import Link from 'next/link';
import {redirect} from "next/navigation";
import { usePathname } from "next/navigation";
import LoaderSpinner from '../ui/LoaderSpinner';
import { useProfile } from './UseProfile';

const ProfileLayout = ({ children, lang, text }: { children: React.ReactNode, lang: any, text: any }) => {
  const session = useSession();
  const [isAdmin, setIsAdmin] = useState<boolean>(false);
  const [profileFetched, setProfileFetched] = useState<boolean>(false);
  const status = session?.status;
  const pathname = usePathname();
  const {loading: profileLoading, data: profileData} = useProfile();
  

  useEffect(() => {
    if (status === 'authenticated') {
        fetch('/api/profile').then(response => {
            response.json().then(data => {
                setIsAdmin(data?.admin);
                setProfileFetched(true);
            })
        })
    }

}, [session, status]);


   {}

  if (status === "loading") {
    return (
      <div
      className="pt-[200px] pb-[200px] w-full flex items-center justify-center"
      >
          <LoaderSpinner/>
      </div>
      
    );
}

if (status === "unauthenticated") {
    return redirect('/');
}

if (profileLoading) {
  return <div className='mt-20 w-full flex justify-center items-center'><LoaderSpinner/></div>;
}

  return (
    <div
    className='max-w-contentContainer mdl:mx-4 xl:mx-auto my-[12px] lg:my-[56px]'
    >
         <div
              className='flex xs:flex-col mdl:flex-row items-center justify-between font-semibold xs:text-sm mdl:text-xl'
              >
                <Link
                href={`/${lang}/profile`}
                  className={`cursor-pointer text-center py-4 xs:w-full mdl:w-[50%] xs:rounded-t-xl mdl:rounded-r-none mdl:rounded-l-xl ${pathname === `/${lang}/profile` ? 'selectedVariation' : 'unselectedVariation'}`}
                >
                    {text.profileInfo}
                </Link>
                {profileData.admin && (
                  <>
                    <Link
                    href={`/${lang}/profile/categories`}
                    className={`cursor-pointer text-center py-4 xs:w-full mdl:w-[50%] ${pathname.includes('categories') ? 'selectedVariation' : 'unselectedVariation'}`}
                    >
                      {text.categories}
                    </Link>
                    <Link
                    href={`/${lang}/profile/items`}
                    className={`cursor-pointer text-center py-4 xs:w-full mdl:w-[50%] ${pathname.includes('items') ? 'selectedVariation' : 'unselectedVariation'}`}
                    >
                      {text.items}
                    </Link>
                    <Link
                    href={`/${lang}/profile/news`}
                    className={`cursor-pointer text-center py-4 xs:w-full mdl:w-[50%] ${pathname.includes('news') ? 'selectedVariation' : 'unselectedVariation'}`}
                    >
                      {text.news}
                    </Link>
                    <Link
                    href={`/${lang}/profile/users`}
                    className={`cursor-pointer text-center py-4 xs:w-full mdl:w-[50%] ${pathname.includes('users') ? 'selectedVariation' : 'unselectedVariation'}`}
                    >
                      {text.users}
                    </Link>
                  </>
                 
                 
                  )}
                <button
                onClick={() => signOut()}
                className={`cursor-pointer text-center py-4 xs:w-full mdl:w-[50%] ${'unselectedVariation'}`}
                >
                  {text.logOut}
                </button>
                <Link
                href={`/${lang}/profile/customer-orders`}
                className={`cursor-pointer text-center py-4 xs:w-full mdl:w-[50%] xs:rounded-b-xl mdl:rounded-l-none mdl:rounded-r-xl ${pathname.includes('customer-orders') ? 'selectedVariation' : 'unselectedVariation'}`}
                >
                    {text.orders}
                </Link>
              </div>
        {children}
    </div>
  )
}

export default ProfileLayout