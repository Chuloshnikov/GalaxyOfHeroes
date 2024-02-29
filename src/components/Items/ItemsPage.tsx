"use client"
import {useState, useEffect} from 'react';
import Image from 'next/image';
import Avatar from "../../../public/avatar.png";
import { IoMdArrowDropdown } from "react-icons/io";

const ItemsPage = () => {


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
        className='mt-8 max-w-4xl mx-auto flex xs:flex-col-reverse mdl:flex-row gap-4'
        >
        {/*form cantainer start*/}
            <div>
                <div
                className='flex flex-col'
                >
                    <label>Item name</label>
                    <input 
                    className='itemsInput'
                    type="text"
                    />
                </div>
                <div
                className='flex flex-col'
                >
                    <label>Description</label>
                    <textarea 
                    className='itemsInput'
                    />
                </div>
                <div
                className='flex flex-col'
                >
                    <label>Category</label>
                    <input 
                    className='itemsInput'
                    type="text"
                    />
                </div>
                <div
                className='flex flex-col'
                >
                    <label>Brand name</label>
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
                        <label>SKU</label>
                        <input
                        className='itemsInput'
                        type="text"
                        />
                    </div>
                    <div
                    className='flex flex-col'
                    >
                        <label>Stock Quantity</label>
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
                            <label>Regular price</label>
                            <input
                            className='itemsInput'
                            type="text"
                            />
                        </div>
                        <div
                        className='flex flex-col'
                        >
                            <label>Sale price</label>
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
                                <label>Tags</label>
                                <input
                                className='itemsInput'
                                type="text"
                                />
                            </div>
                            <div>
                                <label>Tags list</label>
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
                    <label>Lenguage selection</label>
                    <div
                    className='border-2 solid border-accentBg rounded-full max-w-max flex items-center'>
                        <select 
                        required="true"
                        className=' bg-mainBg font-semibold text-accentBg p-2 rounded-full'
                        name="select"
                        >
                            <option className='bg-mainBg font-semibold' value="english" selected>English</option>
                            <option className='bg-mainBg font-semibold' value="deutch">Deutch</option>
                            <option className='bg-mainBg font-semibold' value="ukraine">Ukraine</option>
                        </select>
                        
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
            
            >
                <label>Item image</label>
                <div
                className="xs:w-[300px] xs:h-[300px] mdl:w-[400px] mdl:w-[400px] mt-2  xs:mb-[30px] mdl:mb-0"
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
            </div>
        </form>
    </div>
  )
}

export default ItemsPage;