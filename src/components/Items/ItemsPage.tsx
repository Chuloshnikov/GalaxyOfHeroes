"use client"
import {useState, useEffect} from 'react';
import Image from 'next/image';
import Avatar from "../../../public/avatar.png";

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
        className='mt-8 max-w-4xl mx-auto'
        >
            <div
            className='flex gap-4'
            >
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
                className='flex gap-2'
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
                className='flex gap-2'
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
                        <label>Genres</label>
                        <input
                        className='itemsInput'
                        type="text"
                        />
                    </div>
                        genres
                    </div>
                </div>
                <div>
                    <button 
                    className='bg-accentBg text-mainBg px-2 py-1 border-2 border-accentBg text-accentBg rounded-3xl'
                    type="submit"
                    >
                        Create
                    </button>
                </div>
            </div>
                <div
                        className="w-[300px] h-[300px] mt-2"
                        >
                       
                               
                        
                                <Image className="rounded-lg w-full mb-1" src={Avatar} width={250} height={250} alt={'avatar'} />
  
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