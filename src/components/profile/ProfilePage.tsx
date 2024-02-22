"use client"
import {useState, useEffect} from 'react';
import {useSession} from "next-auth/react";
import Image from 'next/image';
import Avatar from "../../../public/avatar.png";
import SavingBox from '../ui/SavingBox';
import {redirect} from "next/navigation";


const ProfilePage = ({lang, text }: {lang: any, text: any}) => {
    const session = useSession();
    const {status} = session;
    const [userName, setUserName] = useState<string>('');
    const [image, setImage] = useState<string>('');
    const [phone, setPhone] = useState<string>('');
    const [streetAddress, setStreetAddress] = useState<string>('');
    const [postalCode, setPostalCode] = useState<string>('');
    const [city, setCity] = useState<string>('');
    const [country, setCountry] = useState<string>('');
    const [user, setUser] = useState<any>(null);
    const [isAdmin, setIsAdmin] = useState<boolean>(false);
    const [profileFetched, setProfileFetched] = useState<boolean>(false);
    const [saved, setSaved] = useState<boolean>(false);
    const [isSaving, setIsSaving] = useState<boolean>(false);
    const [isUploading, setIsUploading] = useState<boolean>(false);
    const [isError, setIsError] = useState<boolean>(false);
    console.log(text);

    useEffect(() => {
        if (status === 'authenticated') {
            fetch('/api/profile').then(response => {
                response.json().then(data => {
                    setUserName(data?.name);
                    setImage(data?.image);
                    setPhone(data?.phone);
                    setStreetAddress(data?.streetAddress);
                    setPostalCode(data?.postalCode);
                    setCity(data?.city);
                    setCountry(data?.country);
                    setIsAdmin(data?.admin);
                })
            })
        }

    }, [session, status]);

    useEffect(() => {
        if (saved) {
            setTimeout(() => {
                setSaved(false);
            }, 2000);
        } else if (isError) {
            setTimeout(() => {
                setIsError(false);
            }, 2000);
        }
    }, [saved, isError])


    const handleProfileInfoUpdate = async (e) => {
        e.preventDefault();
        setSaved(false);
        setIsSaving(true);

        const response = await fetch('/api/profile', {
                method: 'PUT',
                headers: {'Content-type': 'application/json'},
                body: JSON.stringify({
                    name: userName,
                    image,
                    phone,
                    streetAddress,
                    postalCode,
                    city,
                    country
                }),
            });
            if (response.ok) {
                setIsSaving(false);
                setSaved(true);   
            } else {
                setIsSaving(false);
                setIsError(true);
            }
    }

    const handleFileChange = async (e) => {
        const files = e.target.files;
        if (files?.length === 1) {
            const data = new FormData;
            data.set('file', files[0]);
            setIsUploading(true);
            const response = await fetch('api/upload', {
                method: 'POST',
                body: data,
            })

            const link = await response.json();
            setImage(link);
            setIsUploading(false);
        }
    }

    if (status === "unauthenticated") {
        return redirect('/');
    }
    
  return (
    <section>
        <form 
                onSubmit={handleProfileInfoUpdate}
                className="max-w-md mx-auto mt-4"
                >
                    {saved && (
                        <SavingBox text={text.profileSaved} frame="bg-green-100 border border-green-400"/>
                        
                    )}
                    {isSaving && (
                        <SavingBox text={text.saving} frame="bg-blue-200 border border-blue-400"/>
                    )}
                    {isUploading && (
                        <SavingBox text={text.uploading} frame="bg-blue-200 border border-blue-400"/>
                    )}
                    {isError && (
                        <SavingBox text={text.error} frame="bg-red-200 border border-bed-400"/>
                    )}
                    <div
                    className="flex gap-4"
                    >
                        <div
                        className="w-[200px] h-[200px] mt-2"
                        >
                            {image?.length ? (
                                <Image className="rounded-lg w-full mb-1" src={image} width={250} height={250} alt={'avatar'} />
                            ) : (
                                <Image className="rounded-lg w-full mb-1" src={Avatar} width={250} height={250} alt={'avatar'} />
                            )}
                            <label>
                                <input type="file" className='hidden' onChange={handleFileChange}/>
                                <span 
                                className='block max-w-max bg-mainBg py-1 px-2 rounded-xl 
                                text-assentBg font-semibold border-2 border-accentBg cursor-pointer text-xs sm:text-base'
                                >
                                    {text.avatarButton}
                                </span>
                            </label>
                        </div>
                        <div
                        className="grow flex flex-col gap-2"
                        
                        >
                            <label
                            className='text-xs font-medium text-accentBg -mb-2 ml-2'
                            >
                                {text.firstAndLastName}:
                            </label>
                            <input 
                            className='bg-accentBg text-smouthText text-sm lg:text-base py-[2px] mdl:py-2 px-1 mdl:px-5 rounded-3xl placeholder:text-smouthText'
                            onChange={e => setUserName(e.target.value)}
                            type="text" 
                            placeholder={text.firstAndLastName}
                            value={userName} 
                            />
                            <label
                            className='text-xs font-medium text-accentBg -mb-2 ml-2'
                            >
                                {text.email}:
                            </label>
                            <input 
                            type="email" 
                            disabled={true} 
                            value={session.data?.user.email}
                            />
                            <label
                            className='text-xs font-medium text-accentBg -mb-2 ml-2'
                            >
                                {text.phoneNumber}:
                            </label>
                            <input 
                            onChange={e => setPhone(e.target.value)}
                            className='bg-accentBg text-smouthText text-sm lg:text-base py-[2px] mdl:py-2 px-1 mdl:px-5 rounded-3xl placeholder:text-smouthText'
                            type="tel"
                            placeholder={text.phoneNumber}
                            value={phone}
                            />
                            <label
                            className='text-xs font-medium text-accentBg -mb-2 ml-2'
                            >
                                {text.streetAddress}:
                            </label>
                            <input 
                            onChange={e => setStreetAddress(e.target.value)}
                            className='bg-accentBg text-smouthText text-sm lg:text-base py-[2px] mdl:py-2 px-1 mdl:px-5 rounded-3xl placeholder:text-smouthText'
                            type="text" 
                            placeholder={text.streetAddress}
                            value={streetAddress}
                            />
                            <label
                            className='text-xs font-medium text-accentBg -mb-2 ml-2'
                            >
                                {text.postalCode}:
                            </label>
                            <input 
                            onChange={e => setPostalCode(e.target.value)}
                            className='bg-accentBg text-smouthText text-sm lg:text-base py-[2px] mdl:py-2 px-1 mdl:px-5 rounded-3xl placeholder:text-smouthText'
                            type="text" 
                            placeholder={text.postalCode}
                            value={postalCode}
                            />
                            <label
                            className='text-xs font-medium text-accentBg -mb-2 ml-2'
                            >
                                {text.city}:
                            </label>
                             <input 
                            onChange={e => setCity(e.target.value)}
                            className='bg-accentBg text-smouthText text-sm lg:text-base py-[2px] mdl:py-2 px-1 mdl:px-5 rounded-3xl placeholder:text-smouthText'
                            type="text" 
                            placeholder={text.city}
                            value={city}
                            />
                            <label
                            className='text-xs font-medium text-accentBg -mb-2 ml-2'
                            >
                                {text.country}:
                            </label>
                            <input 
                            onChange={e => setCountry(e.target.value)}
                            className='bg-accentBg text-smouthText text-sm lg:text-base py-[2px] mdl:py-2 px-1 mdl:px-5 rounded-3xl placeholder:text-smouthText'
                            type="text" 
                            placeholder={text.country}
                            value={country}
                            />
                            <button 
                            className='bg-mainBg py-2 px-4 rounded-3xl text-assentBg font-semibold border-2 border-accentBg'
                            type="submit"
                            >
                                {text.saveButton}
                            </button>
                        </div>
                    </div>
                </form>
    </section>
  )
}

export default ProfilePage