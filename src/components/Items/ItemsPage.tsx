"use client"
import {useState, useEffect} from 'react';
import SavingBox from '../ui/SavingBox';
import { IoMdArrowDropdown } from "react-icons/io";
import { TiDelete } from "react-icons/ti";
import EditableItemsImages from './EditableItemsImages';
import { useProfile } from '../profile/UseProfile';


const ItemsPage = () => {
const [images, setImages] = useState<any>([]);
const [title, setTitle] = useState<string>('');
const [brand, setBrand] = useState<string>('');
const [authors, setAuthors] = useState<string>('');
const [illustrators, setIllustrators] = useState<string>('');
const [format, setFormat] = useState<string>('');
const [published, setPublished] = useState<string>('');
const [description, setDescription] = useState<string>('');
const [category, setCategory] = useState<string>('');
const [sku, setSku] = useState<string>('');
const [tagText, setTagText] = useState<string>('');
const [tags, setTags] = useState<any>([]);
const [language, setLanguage] = useState<string>('');
console.log(language);

{/*UI States*/}
const [isUploading, setIsUploading] = useState<boolean>(false);
const [isSaving, setIsSaving] = useState<boolean>(false);
const [isError, setIsError] = useState<boolean>(false);
const [saved, setSaved] = useState<boolean>(false);

{/*Admin State*/}
const {loading: profileLoading, data: profileData} = useProfile();

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


    const handleFormSubmit = async (e:ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        setSaved(false);
        setIsSaving(true);

        const data = {images, title, brand, authors, illustrators, format, published, description, sku, tags, language}
        const response = await fetch('/api/items', {
            method: 'POST',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify(data),
        })
        if (response.ok) {
            setIsSaving(false);
            setSaved(true);   
        } else {
            setIsSaving(false);
            setIsError(true);
        }
    }

    const handleTagInputChange = (e:ChangeEvent<HTMLInputElement>) => {
        setTagText(e.target.value);
      };

      const handleAddTag = () => {
        if (tagText.trim() !== '') {
          setTags([...tags, tagText]);
          setTagText('');
        }
      };

      const handleRemoveTag = (index) => {
        const newTags = [...tags];
        newTags.splice(index, 1);
        setTags(newTags);
      };

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
         <h2
         className='mt-8 text-4xl text-accentBg font-medium ml-4 xl:ml-0'
         >
            Item Details
        </h2>
            {saved && (
            <SavingBox text={"item saved"} frame="bg-green-100 border border-green-400"/>
            )}
            {isSaving && (
            <SavingBox text={"item saving"} frame="bg-blue-200 border border-blue-400"/>
            )}
            {isUploading && (
            <SavingBox text={"image uploading"} frame="bg-blue-200 border border-blue-400"/>
            )}
            {isError && (
            <SavingBox text={"error"} frame="bg-red-200 border border-bed-400"/>
            )}
        <form
        onSubmit={handleFormSubmit}
        className='formLabel mt-8 max-w-4xl mx-auto flex xs:flex-col-reverse lg:flex-row gap-4'
        >
            
        {/*form cantainer start*/}
            <div>
                <div
                className='flex flex-col'
                >
                    <label className='text-accentBg text-xs font-semibold'>Item name</label>
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
                    <label className='text-accentBg text-xs font-semibold'>Description</label>
                    <textarea 
                    onChange={e => setDescription(e.target.value)}
                    value={description}
                    className='itemsInput'
                    />
                </div>
                <div
                className='flex flex-col'
                >
                    <label className='text-accentBg text-xs font-semibold'>Category</label>
                    <input 
                    onChange={e => setCategory(e.target.value)}
                    value={category}
                    className='itemsInput'
                    type="text"
                    />
                </div>
                <div
                className='flex flex-col'
                >
                    <label className='text-accentBg text-xs font-semibold'>Brand name</label>
                    <input 
                    onChange={e => setBrand(e.target.value)}
                    value={brand}
                    className='itemsInput'
                    type="text"
                    />
                </div>
                <div
                className='flex flex-col'
                >
                    <label className='text-accentBg text-xs font-semibold'>Authors</label>
                    <input 
                    onChange={e => setAuthors(e.target.value)}
                    value={authors}
                    className='itemsInput'
                    type="text"
                    />
                </div>
                <div
                className='flex flex-col'
                >
                    <label className='text-accentBg text-xs font-semibold'>Illustrators</label>
                    <input 
                    onChange={e => setIllustrators(e.target.value)}
                    value={illustrators}
                    className='itemsInput'
                    type="text"
                    />
                </div>
                <div
                className='flex flex-col'
                >
                    <label className='text-accentBg text-xs font-semibold'>Published</label>
                    <input 
                    onChange={e => setPublished(e.target.value)}
                    value={published}
                    className='itemsInput'
                    type="text"
                    />
                </div>
                <div
                className='flex flex-col'
                >
                    <label className='text-accentBg text-xs font-semibold'>Format</label>
                    <input 
                    onChange={e => setFormat(e.target.value)}
                    value={format}
                    className='itemsInput'
                    type="text"
                    />
                </div>
                <div
                className='flex xs:flex-col mdl:flex-row gap-2'
                >
                    <div
                    className='flex flex-col'
                    >
                        <label className='text-accentBg text-xs font-semibold'>SKU</label>
                        <input
                        onChange={e => setSku(e.target.value)}
                        value={sku}
                        className='itemsInput'
                        type="text"
                        />
                    </div>
                    <div
                    className='flex flex-col'
                    >
                        <label className='text-accentBg text-xs font-semibold'>Stock Quantity</label>
                        <input
                        className='itemsInput'
                        type="text"
                        />
                    </div>
                </div>
                    <div
                    className='flex xs:flex-col mdl:flex-row gap-2'
                    >
                        <div
                        className='flex flex-col'
                        >
                            <label className='text-accentBg text-xs font-semibold'>Regular price</label>
                            <input
                            className='itemsInput'
                            type="text"
                            />
                        </div>
                        <div
                        className='flex flex-col'
                        >
                            <label className='text-accentBg text-xs font-semibold'>Sale price</label>
                            <input
                            className='itemsInput'
                            type="text"
                            />
                        </div>
                    </div>
                    <div>
                        <div>
                            <div
                            className='flex flex-col'
                            >
                                <label className='text-accentBg text-xs font-semibold'>Tags</label>
                                <input
                                value={tagText}
                                onChange={handleTagInputChange}
                                className='itemsInput'
                                type="text"
                                />
                                <span
                                className="mt-2 max-w-max bg-accentBg text-mainBg px-2 
                                py-1 border-2 border-accentBg text-accentBg rounded-3xl
                                cursor-pointer"
                                onClick={handleAddTag}
                                >
                                    Add Tag
                                </span>
                            </div>
                            <div>
                                <label className='text-accentBg text-xs font-semibold'>Tags list</label>
                                <div
                                className=' border-2 border-accentBg rounded-2xl min-h-[100px] max-w-[400px] p-1 flex flex-wrap gap-1'
                                >
                                    {tags?.length > 0 && tags.map((tag, index) => (
                                         <div
                                         key={index}
                                         className='bg-accentBg text-mainBg font-semibold 
                                         text-sm p-1 px-2 rounded-full max-w-max max-h-[28px]
                                         flex items-center gap-1'
                                         >
                                             {tag} 
                                             <button onClick={() => handleRemoveTag(index)}><TiDelete className="text-mainBg w-5 h-5"/></button>
                                         </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                    className='mt-2'
                    >
                        {/*form selection*/}
                    <label className='text-accentBg text-xs font-semibold'>Lenguage selection</label>
                        <div
                        className='relative border-2 solid border-accentBg rounded-full max-w-max flex items-center'>
                                <select 
                                onChange={e => setLanguage(e.target.value)}
                                defaultValue={"english"}
                                required={true}
                                className=' bg-mainBg font-semibold text-accentBg p-2 rounded-full mr-4'
                                name="select"
                                >
                                    <option value="default" disabled hidden></option>
                                    <option className='bg-mainBg font-semibold' value="english">English</option>
                                    <option className='bg-mainBg font-semibold' value="deutch">Deutch</option>
                                    <option className='bg-mainBg font-semibold' value="ukraine">Ukraine</option>
                                </select>
                                <IoMdArrowDropdown className="pointer-events-none absolute inset-y-0 right-0 top-2 text-accentBg w-7 h-7"/>
                        </div>
                    </div>
                    <div>
                        <button 
                        className='mt-2 w-full bg-accentBg text-mainBg px-2 py-1 border-2 border-accentBg text-accentBg rounded-3xl'
                        type="submit"
                        >
                            Create
                        </button>
                    </div>
            </div>
                {/*form container end*/}
                {/* image container*/}
                <EditableItemsImages 
                images={images} 
                setImages={setImages}
                setUploading={setIsUploading} 
                setError={setIsError}
                />
        </form>
    </div>
  )
}

export default ItemsPage;