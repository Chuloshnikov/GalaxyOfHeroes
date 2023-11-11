import Link from 'next/link';
import React from 'react';

const FooterNav = () => {
  return (
    <div>
        <div
        className='flex gap-[56px] md:gap-[85px] lg:gap-[108px]'
        >
          <div>
            <h3
            className='text-smouthText'
            >
              Categories
            </h3>
            <ul
            className='text-mainBg mt-4 flex flex-col gap-3'
            >
              <li>
                    <Link
                    href={"/"}
                    className=''
                    >
                        Superheroes
                    </Link>
                </li>
                <li>
                    <Link
                    href={"/"}
                    className=''
                    >
                        Horror
                    </Link>
                </li>
                <li>
                    <Link
                    href={"/"}
                    className=''
                    >
                        Mystery
                    </Link>
                </li>
                <li>
                    <Link
                    href={"/"}
                    className=''
                    >
                        Adventure
                    </Link>
                </li>
                <li>
                    <Link
                    href={"/"}
                    className=''
                    >
                        Manga
                    </Link>
                </li>
                <li>
                    <Link
                    href={"/"}
                    className=''
                    >
                        Historical
                    </Link>
                </li>
            </ul>
          </div>
          <div>
            <h3
            className='text-smouthText'
            >
              Company
            </h3>
            <ul
            className='text-mainBg mt-4 flex flex-col gap-3'
            >
              <li><Link href={"/"}>About Us</Link></li>
              <li><Link href={"/"}>Contacts</Link></li>
              <li><Link href={"/"}>Blog</Link></li>
            </ul>
          </div>
        </div>
       

    </div>
  )
}

export default FooterNav;