"use client"
import {useState, useEffect} from 'react';
import { useProfile } from '../profile/UseProfile';
import Link from 'next/link';

const UsersPage = ({text, lang}: {text:any, lang:any}) => {
    const [news, setNews] = useState<any>([]);
    const {loading: profileLoading, data: profileData} = useProfile();

    useEffect(() => {
        fetch('/api/users').then(res => {
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
    <div>UsersPage</div>
  )
}

export default UsersPage;