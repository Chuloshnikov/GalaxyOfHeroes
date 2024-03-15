"use client"
import {useState, useEffect} from 'react';
import { useProfile } from '../profile/UseProfile';
import Link from 'next/link';

const UsersPage = ({text, lang}: {text:any, lang:any}) => {
    const [users, setUsers] = useState<any>([]);
    const {loading: profileLoading, data: profileData} = useProfile();

    useEffect(() => {
        fetch('/api/users').then(res => {
            res.json().then(users => {
                setUsers(users);
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
    className='mt-8 flex flex-col gap-2 ml-4 xl:ml-0'
    >
        <h2
        className='text-4xl text-accentBg font-medium'
        >
            {text.title}
        </h2>
        
    </div>
  )
}

export default UsersPage;