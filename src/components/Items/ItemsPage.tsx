"use client"
import {useState, useEffect} from 'react';
import { useProfile } from '../profile/UseProfile';
import Link from 'next/link';
import Image from 'next/image';

const ItemsPage = ({text, lang}: {text:any, lang:any}) => {
    const [items, setItems] = useState([]);
    const {loading: profileLoading, data: profileData} = useProfile();

    useEffect(() => {
      fetch('/api/items').then(res => {
          res.json().then(items => {
              setItems(items);
          })
      })
  }, [])



    if (profileLoading) {
      return 'Loading user info...';
  }

  if (!profileData.admin) {
      return (
      <div
      className='mt-8 text-center text-lg text-red-500'
      >
          Error! Not an admin
      </div>
      )
  }

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
        <div>
          <div className='grid xs:grid-cols-2 lg:grid-cols-3 xl:mdl:grid-cols-4 gap-1'>
                {items?.length > 0 && items.map(item => (
                    <Link 
                    href={'/items/edit/' + item._id}
                    className='bg-mainBg shadow-md rounded-lg p-4 mx-auto'>
                        <div className='relative'>
                            <Image src={item.images[0]} alt="item image" width={300} height={300}/>
                        </div>
                        <div className='text-center flex flex-col gap-1'>
                            <span className='text-xl font-semibold text-accentBg'>{item.title}</span>
                            <span className='text-sm font-semibold'>{item.language}</span>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    </div>
  )
}

export default ItemsPage