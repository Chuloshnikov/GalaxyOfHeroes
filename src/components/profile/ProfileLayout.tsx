import React from 'react'
import Link from 'next/link'

const ProfileLayout = ({ children, lang }: { children: React.ReactNode }) => {

    const pathname = "1"

    const selectedVariation = 'bg-accentBg text-mainBg border-2 border-accentBg';
  const unselectedVariation = 'bg-mainBg border-2 border-accentBg text-accentBg';
  return (
    <div
    className='max-w-contentContainer mdl:mx-10 xl:mx-auto my-[12px] lg:my-[56px]'
    >
         <div
              className='flex items-center justify-between text-xl font-semibold'
              >
                <Link
                href={`/${lang}/profile`}
                  className={`cursor-pointer text-center py-4 w-[50%] rounded-l-xl ${pathname === '1' ? selectedVariation : unselectedVariation}`}
                >
                    Profile Info
                </Link>
                <Link
                href={`/${lang}/profile/customer-orders`}
                className={`cursor-pointer text-center py-4 w-[50%] rounded-r-xl ${pathname === '2' ? selectedVariation : unselectedVariation}`}
                >
                    Orders
                </Link>
              </div>
        {children}
    </div>
  )
}

export default ProfileLayout