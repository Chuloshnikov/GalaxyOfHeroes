"use client"
import {useState, useEffect} from 'react';
import Link from 'next/link';

const ItemsPage = () => {
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
                All Items
            </h2>
            <Link 
            className="block max-w-max bg-mainBg text-accentBg px-2 
            py-1 border-2 border-accentBg text-accentBg rounded-3xl
            cursor-pointer font-semibold"
            href={"/profile/items/new"}>
                Create new Item
            </Link>
        </div>
    </div>
  )
}

export default ItemsPage