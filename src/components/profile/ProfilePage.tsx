"use client"
import {useState, useEffect} from 'react';
import {useSession} from "next-auth/react";
import SavingBox from '../ui/SavingBox';
import {redirect} from "next/navigation";
import EditableImage from './EditableImage';


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


    useEffect(() => {
        if (status === 'authenticated') {
            setProfileFetched(true);
            fetch('/api/profile', ).then(response => {
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
            setProfileFetched(false);
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

    if (status === "unauthenticated") {
        return redirect('/');
    }

    if (profileFetched) {
        return "Profile fetching..."
    }
    
  return (
    <div>
        <form 
                onSubmit={handleProfileInfoUpdate}
                className="max-w-xl mx-auto mt-4"
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
                    {/*image container*/}
                    <div
                    className="flex gap-4"
                    >
                        <EditableImage 
                        link={image} 
                        setLink={setImage} 
                        text={text.avatarButton} 
                        setError={setIsError} 
                        setUploading={setIsUploading}
                        />
                        {/*form container*/}
                        <div
                        className="grow flex flex-col gap-2"
                        >
                            <label
                            className='text-xs font-medium text-accentBg -mb-2 ml-2'
                            >
                                {text.firstAndLastName}:
                            </label>
                            <input 
                            className='text-sm lg:text-base py-[2px] mdl:py-2 px-1 mdl:px-5 rounded-3xl placeholder:text-smouthText'
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
                            className='text-sm lg:text-base py-[2px] mdl:py-2 px-1 mdl:px-5 rounded-3xl placeholder:text-smouthText'
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
                            className=' text-sm lg:text-base py-[2px] mdl:py-2 px-1 mdl:px-5 rounded-3xl placeholder:text-smouthText'
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
                            className=' text-sm lg:text-base py-[2px] mdl:py-2 px-1 mdl:px-5 rounded-3xl placeholder:text-smouthText'
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
                            className=' text-sm lg:text-base py-[2px] mdl:py-2 px-1 mdl:px-5 rounded-3xl placeholder:text-smouthText'
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
                            className='text-sm lg:text-base py-[2px] mdl:py-2 px-1 mdl:px-5 rounded-3xl placeholder:text-smouthText'
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
    </div>
  )
}

export default ProfilePage