import Link from 'next/link';
import React from 'react';

const FooterNav = ({footer, companyNavigation, navigation, lang}: {lang: Locale}) => {
  return (
    <div>
        <div
        className='flex gap-[56px] md:gap-[85px] lg:gap-[108px]'
        >
          <div>
            <h3
            className='text-smouthText'
            >
              {footer.navTitle}
            </h3>
            <ul
            className='text-mainBg mt-4 flex flex-col gap-3'
            >
              <li>
                    <Link
                    href={`/${lang}/superheroes`}
                    className=''
                    >
                        {navigation.superheroes}
                    </Link>
                </li>
                <li>
                    <Link
                    href={`/${lang}/horror`}
                    className=''
                    >
                        {navigation.horror}
                    </Link>
                </li>
                <li>
                    <Link
                    href={`/${lang}/mystery`}
                    className=''
                    >
                        {navigation.mystery}
                    </Link>
                </li>
                <li>
                    <Link
                    href={`/${lang}/adventure`}
                    className=''
                    >
                        {navigation.adventure}
                    </Link>
                </li>
                <li>
                    <Link
                    href={`/${lang}/manga`}
                    className=''
                    >
                        {navigation.manga}
                    </Link>
                </li>
                <li>
                    <Link
                    href={`/${lang}/historical`}
                    className=''
                    >
                        {navigation.historical}
                    </Link>
                </li>
            </ul>
          </div>
          <div>
            <h3
            className='text-smouthText'
            >
            {footer.companyTitle}
            </h3>
            <ul
            className='text-mainBg mt-4 flex flex-col gap-3'
            >
              <li><Link href={`/${lang}/about-us`}>{companyNavigation.aboutus}</Link></li>
              <li><Link href={`/${lang}/contacts`}>{companyNavigation.contact}</Link></li>
              <li><Link href={`/${lang}/blog`}>{companyNavigation.blog}</Link></li>
            </ul>
          </div>
        </div>
       

    </div>
  )
}

export default FooterNav;