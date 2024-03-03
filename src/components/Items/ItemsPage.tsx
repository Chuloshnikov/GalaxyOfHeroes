"use client"
import {useState, useEffect} from 'react';
import Link from 'next/link';

const ItemsPage = ({text, lang}: {text:any, lang:any}) => {
  return (
    <div
    className=''
    >
        <div
        className='mt-8 flex flex-col gap-2 ml-4 xl:ml-0'
        >
            <h2
            className='text-4xl text-accentBg font-medium'
            >
                {text.title}
            </h2>
            <Link 
            className="block max-w-max bg-mainBg text-accentBg px-2 
            py-1 border-2 border-accentBg text-accentBg rounded-3xl
            cursor-pointer font-semibold"
            href={`/${lang}/profile/items/new`}>
                {text.newItemButton}
            </Link>
        </div>
    </div>
  )
}

export default ItemsPage