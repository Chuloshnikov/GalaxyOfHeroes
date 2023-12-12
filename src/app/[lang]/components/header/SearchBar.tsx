"use client";
import React, { useState, useEffect } from 'react';
import { IoMdClose } from "react-icons/io";
import getData from "../../../../../data/data";
import Image from 'next/image';

const SearchBar = ({ searchPopup, lang, handlePopupToggle, handleBackgroundClick, handleSearchBarClick }) => {
    const [filteredItems, setFilteredItems] = useState(null);
    const [query, setQuery] = useState("");
    const [isInputEmpty, setIsInputEmpty] = useState(true); // Додаємо стан для перевірки, чи інпут порожній
    const data = getData();

    useEffect(() => {
        // Перевіряємо, чи інпут не порожній перед фільтрацією
        if (!isInputEmpty) {
            const filtered = data.filter((item) =>
                item.title.toLowerCase().includes(query.toLowerCase())
            );
            setFilteredItems(filtered);
        }
    }, [query, isInputEmpty]);

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

    return (
        <div
            onClick={handleBackgroundClick}
            className='absolute -top-5 left-0 bg-white/50 w-screen h-screen'
        >
            <div
                onClick={handleSearchBarClick}
                className='z-50 absolute top-2 right-4 xl:right-[5%] shadow bg-mainBg w-[90%] h-[700%] rounded-2xl p-6 xl:p-10'
            >
                <form
                    className='border-b-2 border-accentBg flex items-center'
                >
                    <input
                        className='text-2xl text-accentBg placeholder:text-smouthText w-full px-3 py-2'
                        type="text"
                        placeholder={searchPopup.inputHolder}
                        value={query}
                        onChange={(e) => {
                            setQuery(e.target.value);
                            setIsInputEmpty(e.target.value === '');
                        }}
                    />
                    <div
                        className='flex gap-2 cursor-pointer'
                    >
                        <span
                            onClick={() => {
                                setQuery('');
                                setIsInputEmpty(true);
                            }}
                            className='text-base'
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
                        className='flex flex-col gap-2'
                        >
                            {filteredItems.map(item => (
                                <li 
                                className='flex gap-2'
                                key={item._id}
                                >
                                    <Image 
                                    src={item.img}
                                    width={50}
                                    height={50}
                                    alt="productImg"
                                    />
                                    <div
                                    className='flex items-center'
                                    >
                                        <h4
                                        className='text-lg font-medium'
                                        >
                                            {item.title}
                                        </h4>
                                        <span>{displayPrice(item.prices, lang)}</span>
                                    </div>
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