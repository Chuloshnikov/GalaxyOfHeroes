"use client"
import {useState, useEffect} from 'react';
import {useSession} from "next-auth/react";
import Image from 'next/image';
import Avatar from "../../../public/avatar.png";


const ProfilePage = ({lang}) => {
    const session = useSession();
    const {status} = session;
    const [userName, setUserName] = useState<string>('');
    const [userImage, setUserImage] = useState<string>('');
    const [user, setUser] = useState<any>(null);
    const [isAdmin, setIsAdmin] = useState(false);
    const [profileFetched, setProfileFetched] = useState(false);

    useEffect(() => {
        if (status === 'authenticated') {
            setUserName(session.data.user.name);
        }

    }, [session, status])


    const handleProfileInfoUpdate = async (e) => {
        e.preventDefault();
        const response = await fetch('/api/profile', {
                method: 'PUT',
                headers: {'Content-type': 'application/json'},
                body: JSON.stringify({name: userName})
            });
    }
    
  return (
    <div
    className=''
    >
        <form 
                onSubmit={handleProfileInfoUpdate}
                className="max-w-md mx-auto mt-4"
                >
                    <div
                    className="flex gap-4 items-center"
                    >
                        <div
                        className="p-2 rounded-lg relative"
                        >
                            <Image className="rounded-lg w-full h-full mb-1" src={userImage ? userImage : Avatar} width={250} height={250} alt={'avatar'} />
                            <button 
                            className='bg-mainBg py-1 px-2 rounded-xl text-assentBg font-semibold border-2 border-accentBg'
                            type="button"
                            >
                                Change avatar
                            </button>
                        </div>
                        <div
                        className="grow flex flex-col gap-2"
                        
                        >
                            <input 
                            className='bg-accentBg text-smouthText text-sm lg:text-base py-[2px] mdl:py-2 px-1 mdl:px-5 rounded-3xl placeholder:text-smouthText'
                            onChange={e => setUserName(e.target.value)}
                            type="text" 
                            placeholder={userName} 
                            value={userName} 
                            />
                            <input 
                            type="email" 
                            disabled={true} 
                            value={session.data?.user.email}
                            />
                            <button 
                            className='bg-mainBg py-2 px-4 rounded-3xl text-assentBg font-semibold border-2 border-accentBg'
                            type="submit"
                            >
                                Save
                            </button>
                        </div>
                    </div>
                </form>
    </div>
  )
}

export default ProfilePage