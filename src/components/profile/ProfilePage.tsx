"use client"
import {useState, useEffect} from 'react';
import {useSession} from "next-auth/react";
import Image from 'next/image';
import Avatar from "../../../public/avatar.png";
import SavingBox from '../ui/SavingBox';


const ProfilePage = ({lang}: any) => {
    const session = useSession();
    const {status} = session;
    const [userName, setUserName] = useState<string>('');
    const [image, setImage] = useState('');
    const [phone, setPhone] = useState<string>('');
    const [streetAddress, setStreetAddress] = useState<string>('');
    const [postalCode, setPostalCode] = useState<string>('');
    const [city, setCity] = useState<string>('');
    const [country, setCountry] = useState<string>('');
    const [user, setUser] = useState<any>(null);
    const [isAdmin, setIsAdmin] = useState<boolean>(false);
    const [profileFetched, setProfileFetched] = useState<boolean>(false);
    const [saved, setSaved] = useState<boolean>(false);
    const [isSaving, setIsSaving] = useState<bolean>(false);
    const [isUploading, setUploading] = useState<bolean>(false);
    const [isError, setIsError] = useState<bolean>(false);

    useEffect(() => {
        if (status === 'authenticated') {
            setUserName(session.data.user.name);
        }

    }, [session, status]);

    useEffect(() => {
        if (saved) {
            setTimeout(() => {
                setSaved(false);
            }, 2000);
        }
    }, [saved])


    const handleProfileInfoUpdate = async (e) => {
        e.preventDefault();
        setSaved(false);
        setIsSaving(true);
        const response = await fetch('/api/profile', {
                method: 'PUT',
                headers: {'Content-type': 'application/json'},
                body: JSON.stringify({
                    name: userName,
                    phone,
    
                }),
            });
            if (response.ok) {
                setIsSaving(false);
                setSaved(true);   
            }
    }
    
  return (
    <div
    className=''
    >
        <form 
                onSubmit={handleProfileInfoUpdate}
                className="max-w-md mx-auto mt-4"
                >
                    {saved && (
                        <SavingBox text="Profile saved!" frame="bg-green-100 border border-green-400"/>
                        
                    )}
                    {isSaving && (
                        <SavingBox text="Saving..." frame="bg-blue-200 border border-blue-400"/>
                    )}
                    {isUploading && (
                        <SavingBox text="Uploading..." frame="bg-blue-200 border border-blue-400"/>
                    )}
                    {isError && (
                        <SavingBox text="Error" frame="bg-red-200 border border-bed-400"/>
                    )}
                    <div
                    className="flex gap-4"
                    >
                        <div
                        className="p-2 rounded-lg relative"
                        >
                            <Image className="rounded-lg w-full mb-1" src={image ? image : Avatar} width={250} height={250} alt={'avatar'} />
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
                            <input 
                            onChange={e => setPhone(e.target.value)}
                            className='bg-accentBg text-smouthText text-sm lg:text-base py-[2px] mdl:py-2 px-1 mdl:px-5 rounded-3xl placeholder:text-smouthText'
                            type="tel"
                            placeholder='Phone'
                            value={phone}
                            />
                            <input 
                            onChange={e => setStreetAddress(e.target.value)}
                            className='bg-accentBg text-smouthText text-sm lg:text-base py-[2px] mdl:py-2 px-1 mdl:px-5 rounded-3xl placeholder:text-smouthText'
                            type="text" 
                            placeholder='Street address'
                            value={streetAddress}
                            />
                            <input 
                            onChange={e => setPostalCode(e.target.value)}
                            className='bg-accentBg text-smouthText text-sm lg:text-base py-[2px] mdl:py-2 px-1 mdl:px-5 rounded-3xl placeholder:text-smouthText'
                            type="text" 
                            placeholder='Postal code'
                            value={postalCode}
                            />
                             <input 
                            onChange={e => setCity(e.target.value)}
                            className='bg-accentBg text-smouthText text-sm lg:text-base py-[2px] mdl:py-2 px-1 mdl:px-5 rounded-3xl placeholder:text-smouthText'
                            type="text" 
                            placeholder='City'
                            value={city}
                            />
                            <input 
                            onChange={e => setCCountry(e.target.value)}
                            className='bg-accentBg text-smouthText text-sm lg:text-base py-[2px] mdl:py-2 px-1 mdl:px-5 rounded-3xl placeholder:text-smouthText'
                            type="text" 
                            placeholder='Country'
                            value={country}
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