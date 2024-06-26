"use client";
import React, { useState, useEffect } from 'react';
import { IoMdClose } from "react-icons/io";
import getData from "../../../data/data";
import Image from 'next/image';
import Link from 'next/link';

const SearchBar = ({ searchPopup, lang, handlePopupToggle, handleBackgroundClick, handleSearchBarClick, close }) => {
    const [filteredItems, setFilteredItems] = useState(null);
    const [data, setData] = useState<any>(null)
    const [query, setQuery] = useState("");
    const [isInputEmpty, setIsInputEmpty] = useState(true); // Додаємо стан для перевірки, чи інпут порожній

    useEffect(() => {

        const res = fetch('/api/items').then(res => {
            res.json().then(dataItems => setData(dataItems));
            if (!isInputEmpty) {
                const filtered = data.filter((item:any) =>
                    item.title.toLowerCase().includes(query.toLowerCase())
                );
                setFilteredItems(filtered);
            }
        })
        // Перевіряємо, чи інпут не порожній перед фільтрацією
        
    }, [query, isInputEmpty]);

    {/*
        const  displayPrice = (prices:any, lang:any) => {
        switch (lang) {
            case 'ua':
                return `${prices.uah.toFixed(2)} грн`;
            case 'de':
                return `${prices.eur.toFixed(2)} EUR`;
            case 'en':
                return `$${prices.usd.toFixed(2)}`;
            default:
                return `$${prices.usd.toFixed(2)}`;
        }
    };



        */ }

    

    return (
        <div
            onClick={handleBackgroundClick}
            className='absolute -top-5 left-0 bg-white/50 w-screen h-[1000%]'
        >
            <div
                onClick={handleSearchBarClick}
                className='z-50 absolute top-2 right-2 md:right-4 xl:right-[5%] shadow bg-mainBg w-[95%] xl:w-[90%] h-screen rounded-2xl p-6 xl:p-10'
            >
                <form
                    className='border-b-2 border-accentBg flex items-center'
                >
                    <input
                        className='searchInput'
                        type="text"
                        placeholder={searchPopup.inputHolder}
                        value={query}
                        onChange={(e) => {
                            setQuery(e.target.value);
                            setIsInputEmpty(e.target.value === '');
                        }}
                    />
                    <div
                        className='flex gap-2 items-center cursor-pointer'
                    >
                        <span
                            onClick={() => {
                                setQuery('');
                                setIsInputEmpty(true);
                            }}
                            className='text-base ml-2'
                        >
                            {searchPopup.clearBtn}
                        </span>
                        <IoMdClose
                            onClick={handlePopupToggle}
                            className="w-7 h-7"
                        />
                    </div>
                </form>
                <div 
                className='h-screen'
                >
                    {!isInputEmpty && filteredItems && filteredItems.length > 0 ? (
                        <ul 
                        className='flex flex-col gap-2 overflow-y-scroll pt-4'
                        >
                            {filteredItems.map(item => (
                                <li 
                                className='m'
                                key={item._id}
                                >
                                <Link
                                onClick={() => close(false)}
                                href={`/products/${item._id}`}
                                className='flex gap-2'
                                >
                                    <Image 
                                    className='rounded-xl'
                                    src={item.images[0]}
                                    width={50}
                                    height={50}
                                    alt="productImg"
                                    />
                                    <div
                                    className='flex flex-col gap-2'
                                    >
                                        <h4
                                        className='text-lg font-medium'
                                        >
                                            {item.title}
                                        </h4>
                                        <span>{item.sku}</span>
                                    </div>
                                </Link>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <div
                        className='h-full flex justify-center'
                        >
                            <p
                            className='text-4xl mt-[20%]'
                            >
                                {searchPopup.searchMessage}
                            </p>
                        </div>
                        
                    )}
                </div>
            </div>
        </div>
    )
}

export default SearchBar;