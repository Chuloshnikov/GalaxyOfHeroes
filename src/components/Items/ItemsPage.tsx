"use client"
import {useState, useEffect} from 'react';
import SavingBox from '../ui/SavingBox';
import { IoMdArrowDropdown } from "react-icons/io";
import EditableItemsImages from './EditableItemsImages';


const ItemsPage = () => {
const [images, setImages] = useState<any>([]);
const [isUploading, setIsUploading] = useState<boolean>(false);
const [isSaving, setIsSaving] = useState<boolean>(false);
const [isError, setIsError] = useState<boolean>(false);
const [saved, setSaved] = useState<boolean>(false);

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

    const handleFileChange = () => {

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
        className='formLabel mt-8 max-w-4xl mx-auto flex xs:flex-col-reverse lg:flex-row gap-4'
        >
            
        {/*form cantainer start*/}
            <div>
                <div
                className='flex flex-col'
                >
                    <label className='text-accentBg text-xs font-semibold'>Item name</label>
                    <input 
                    className='itemsInput'
                    type="text"
                    />
                </div>
                <div
                className='flex flex-col'
                >
                    <label className='text-accentBg text-xs font-semibold'>Description</label>
                    <textarea 
                    className='itemsInput'
                    />
                </div>
                <div
                className='flex flex-col'
                >
                    <label className='text-accentBg text-xs font-semibold'>Category</label>
                    <input 
                    className='itemsInput'
                    type="text"
                    />
                </div>
                <div
                className='flex flex-col'
                >
                    <label className='text-accentBg text-xs font-semibold'>Brand name</label>
                    <input 
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
                                className='itemsInput'
                                type="text"
                                />
                            </div>
                            <div>
                                <label className='text-accentBg text-xs font-semibold'>Tags list</label>
                                <div
                                className=' border-2 border-accentBg rounded-2xl min-h-[100px] p-1'
                                >
                                    <div
                                    className='bg-accentBg text-mainBg font-semibold text-sm p-1 px-2 rounded-full max-w-max'
                                    >
                                        mistic
                                    </div>
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
                                defaultValue={"english"}
                                required={true}
                                className=' bg-mainBg font-semibold text-accentBg p-2 rounded-full mr-4'
                                name="select"
                                >
                                    <option className='bg-mainBg font-semibold' value="english">English</option>
                                    <option className='bg-mainBg font-semibold' value="deutch">Deutch</option>
                                    <option className='bg-mainBg font-semibold' value="ukraine">Ukraine</option>
                                </select>
                                <IoMdArrowDropdown className="pointer-events-none absolute inset-y-0 right-0 top-2 text-accentBg w-7 h-7"/>
                        </div>
                    </div>
                    <div>
                        <button 
                        className=' mt-2 w-full bg-accentBg text-mainBg px-2 py-1 border-2 border-accentBg text-accentBg rounded-3xl'
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