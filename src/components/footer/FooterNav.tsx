"use client"
import Link from 'next/link';
import {useState, useEffect} from 'react';

const FooterNav = ({footer, companyNavigation, navigation, lang}: {lang: Locale}) => {
  const [navs, setNavs] = useState<any>("");

  useEffect(() => { 
    fetch('/api/categories').then(response => {
      response.json().then(categories => {
        setNavs(categories);
      })
    });
    }, []);

    console.log(navs)

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
             {navs && navs.filter(nav => nav.name in navigation).map(nav => (
                <li key={nav.name}>
                  <Link
                    href={`/${lang}/${nav.name}`}
                    className=''
                  >
                    {navigation[nav.name]}
                  </Link>
                </li>
                ))
              }
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