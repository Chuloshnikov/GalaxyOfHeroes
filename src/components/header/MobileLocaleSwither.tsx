"use client"
import { useState } from 'react';
import Link from 'next/link';


const MobileLocaleSwitcher = ({lang}: any) => {
    const [lengOpen, setLengOpen] = useState<boolean>(false)

  return (
        <ul
        className='flex gap-5 text-xl font-medium'
        >
            <li>
                <Link href={"/en"}>EN</Link>
            </li>
            <li>
                <Link href={"/de"}>DE</Link>
            </li>
            <li>
                <Link href={"ua"}>UA</Link>
            </li>
        </ul>
  )
}

export default MobileLocaleSwitcher;