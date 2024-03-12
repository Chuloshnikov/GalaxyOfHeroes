"use client"
import {useState, useEffect} from 'react';
import { useProfile } from '../profile/UseProfile';
import Link from 'next/link';
import Image from 'next/image';

const NewsPage = ({text, lang}: {text:any, lang:any}) => {
  const [news, setNews] = useState<any>([]);
  const {loading: profileLoading, data: profileData} = useProfile();

  useEffect(() => {
    fetch('/api/news').then(res => {
        res.json().then(news => {
            setNews(news);
        })
    })
}, []);


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
            href={`/${lang}/profile/news/new`}>
                {text.newItemButton}
            </Link>
        </div>
        <div>
          <div className='flex flex-col gap-2 max-w-4xl mx-auto'>
                {news?.length > 0 && news.map(item => (
                    <Link 
                    key={item._id}
                    href={`news/edit/${item._id}`}
                    className='w-full bg-mainBg shadow-md rounded-lg flex xs:flex-col sml:flex-row gap-2 justify-center items-center'>
                        <div className='rounded-lg'>
                            <Image src={item.image} alt="news image" className='p-2 rounded-lg w-[150px] h-[100px]' width={200} height={100}/>
                        </div>
                        <div className='text-center flex flex-col gap-1 p-2'>
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

export default NewsPage