"use client"
import React, {useState, useEffect} from 'react';
import SavingBox from '../ui/SavingBox';
import EditableNewsImage from './EditableNewsImage';
import { useProfile } from '../profile/UseProfile';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import { IoMdArrowDropdown } from 'react-icons/io';

const NewNewsItemPage = ({text, lang}: {text: any, lang: any}) => {
  const [title, setTitle] = useState<string>('');
  const [image, setImage] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [topic, setTopic] = useState<string>('');
  const [language, setLanguage] = useState<string>('en');

  {/*Admin State*/}
const {loading: profileLoading, data: profileData} = useProfile();

  {/*UI States*/}
  const [saved, setSaved] = useState<boolean>(false);
  const [isSaving, setIsSaving] = useState<boolean>(false);
  const [isUploading, setIsUploading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);


  {/*redirect to items state*/}
const [redirectToNews, setRedirectToNews] = useState<boolean>(false);

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
}, [saved, isError]);

const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
  e.preventDefault();
  setSaved(false);
  setIsSaving(true);

  const data = {
      image,
      title, 
      description, 
      language, 
      topic, 
  };
  const response = await fetch('/api/news', {
      method: 'POST',
      headers: {'Content-type': 'application/json'},
      body: JSON.stringify(data),
  })
  if (response.ok) {
      setIsSaving(false);
      setSaved(true);   
      setRedirectToNews(true);
  } else {
      setIsSaving(false);
      setIsError(true);
  }
  
}

if (redirectToNews) {
  return redirect(`/${lang}/profile/news`);
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
            href={"/profile/news"}>
                {text.toAllNews}
            </Link>
        </div>
        <form
        onSubmit={handleFormSubmit}
        className='formLabel mt-8 w-full mx-auto flex flex-col'
        >
          <EditableNewsImage 
                link={image} 
                setLink={setImage} 
                text={text.addImageButton} 
                setError={setIsError} 
                setUploading={setIsUploading}
                />
                {/*form start*/}
                <div
                className='mt-8 max-w-4xl'
                >
                    <div
                    className='flex flex-col'
                    >
                        <label className='text-accentBg text-xs font-semibold'>{text.newsName}</label>
                        <input 
                        onChange={e => setTitle(e.target.value)}
                        value={title}
                        className='itemsInput'
                        type="text"
                        />
                    </div>
                    <div
                      className='flex flex-col'
                      >
                          <label className='text-accentBg text-xs font-semibold'>{text.newsCategory}</label>
                          <input 
                          onChange={e => setTopic(e.target.value)}
                          value={topic}
                          className='itemsInput'
                          type="text"
                          />
                      </div>
                    <div
                      className='flex flex-col'
                      >
                          <label className='text-accentBg text-xs font-semibold'>{text.newsDescription}</label>
                          <textarea 
                          onChange={e => setDescription(e.target.value)}
                          value={description}
                          className='itemsInput h-[200px]'
                          />
                    </div>
                      <div
                    className='mt-2'
                    >
                        {/*form selection*/}
                    <label className='text-accentBg text-xs font-semibold'>{text.newsLangSelectionText}</label>
                        <div
                        className='relative border-2 solid border-accentBg rounded-full max-w-max flex items-center'>
                                <select 
                                onChange={e => setLanguage(e.target.value)}
                                defaultValue={"english"}
                                required={true}
                                className=' bg-mainBg font-semibold text-accentBg p-2 rounded-full'
                                name="select"
                                >
                                    <option className='bg-mainBg font-semibold' value="en">English</option>
                                    <option className='bg-mainBg font-semibold' value="de">Deutch</option>
                                    <option className='bg-mainBg font-semibold' value="ua">Ukraine</option>
                                </select>
                        </div>
                    </div>
                    <div>
                        <button 
                        className='mt-2 w-full bg-accentBg text-mainBg px-2 py-1 border-2 border-accentBg text-accentBg rounded-3xl max-w-[200px]'
                        type="submit"
                        >
                            {text.createButton}
                        </button>
                    </div>
              </div>
        </form>
        {saved && (
                    <SavingBox text={text.itemSaved} frame="bg-green-100 border border-green-400"/>
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
    </div>
  )
}

export default NewNewsItemPage;