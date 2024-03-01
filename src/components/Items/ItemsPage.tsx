"use client"
import {useState, useEffect} from 'react';
import Image from 'next/image';
import Avatar from "../../../public/avatar.png";
import { IoMdArrowDropdown } from "react-icons/io";

const ItemsPage = () => {
const [images, setImages] = useState<any>('');

    const handleFileChange = () => {

    }


  return (
    <div>
         <h2
         className='mt-8 text-4xl text-accentBg font-medium ml-4 xl:ml-0'
         >
            Item Details
        </h2>
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
                    <label className='text-accentBg text-xs font-semibold'>Lenguage selection</label>
                    <div
                    className='relative border-2 solid border-accentBg rounded-full max-w-max flex items-center'>
                        <select 
                        required="true"
                        className=' bg-mainBg font-semibold text-accentBg p-2 rounded-full mr-4'
                        name="select"
                        >
                            <option className='bg-mainBg font-semibold' value="english" selected>English</option>
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
            <div
            className='flex gap-2 flex-col'
            >
                <label className='text-accentBg text-xs font-semibold'>Item image</label>
                <div
                className="xs:w-[270px] xs:h-[270px] lg:w-[400px] lg:w-[400px] mt-2 xs:mb-[70px] lg:mb-[200px]"
                >
                    <Image className="rounded-lg w-full mb-1" src={Avatar} width={400} height={400} alt={'avatar'} />
                    <label>
                        <input type="file" className='hidden' onChange={handleFileChange}/>
                            <span 
                            className='block max-w-max bg-mainBg py-1 px-2 rounded-xl 
                            text-assentBg font-semibold border-2 border-accentBg cursor-pointer text-xs sm:text-base'
                            >
                                Add
                            </span>
                    </label>
                </div>
                {!images?.length && (
                    <span
                    className='block text-accentBg font-semibold'
                    >
                        No photos in this item...
                    </span>
                )}
            </div>
        </form>
    </div>
  )
}

export default ItemsPage;