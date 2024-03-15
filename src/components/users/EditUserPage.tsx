"use client"
import {useState, useEffect} from 'react';
import {useSession} from "next-auth/react";
import {useProfile} from '../profile/UseProfile';
import { redirect, useParams } from 'next/navigation';
import SavingBox from '../ui/SavingBox';
import EditableImage from '../profile/EditableImage';
import Link from 'next/link';


const EditUserPage = ({lang, text }: {lang: any, text: any}) => {
    const {id} = useParams();
    const [userName, setUserName] = useState<string>('');
    const [email, setEmail] = useState('');
    const [image, setImage] = useState<string>('');
    const [phone, setPhone] = useState<string>('');
    const [streetAddress, setStreetAddress] = useState<string>('');
    const [postalCode, setPostalCode] = useState<string>('');
    const [city, setCity] = useState<string>('');
    const [country, setCountry] = useState<string>('');
    const [isAdmin, setIsAdmin] = useState<boolean>(false);
    const [profileFetched, setProfileFetched] = useState<boolean>(false);
    const [saved, setSaved] = useState<boolean>(false);
    const [isSaving, setIsSaving] = useState<boolean>(false);
    const [isUploading, setIsUploading] = useState<boolean>(false);
    const [isError, setIsError] = useState<boolean>(false);

    const [redirectToUsers, setRedirectToUsers] = useState(false);
    const {loading: profileLoading, data: profileData} = useProfile();


    useEffect(() => {
        if (id) {
            setProfileFetched(true);
            fetch('/api/users', ).then(response => {
                response.json().then(data => {
                    const user = data.find(users => users._id === id)
                    setUserName(user?.name);
                    setEmail(user?.email);
                    setImage(user?.image);
                    setPhone(user?.phone);
                    setStreetAddress(user?.streetAddress);
                    setPostalCode(user?.postalCode);
                    setCity(user?.city);
                    setCountry(user?.country);
                    setIsAdmin(user?.admin);
                })
            })
            setProfileFetched(false);
        }

    }, [id]);

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


    const handleUserInfoUpdate = async (e) => {
        e.preventDefault();
        setSaved(false);
        setIsSaving(true);
        const data = {
            _id: id,
            name: userName,
            email,
            image,
            phone,
            streetAddress,
            postalCode,
            city,
            country
        };
        const response = await fetch('/api/users', {
                method: 'PUT',
                headers: {'Content-type': 'application/json'},
                body: JSON.stringify(data),
            });
            if (response.ok) {
                setIsSaving(false);
                setSaved(true); 
                setRedirectToUsers(true);  
            } else {
                setIsSaving(false);
                setIsError(true);
            }
    }

    if (redirectToUsers) {
        return redirect('/profile/users');
    }

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
    <div>
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
            href={"/profile/users"}>
                {text.toAllUsers}
            </Link>
        </div>
        <form 
                onSubmit={handleUserInfoUpdate}
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
                            onChange={e => setEmail(e.target.value)}
                            type="email" 
                            value={email}
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
    </div>
  )
}

export default EditUserPage;