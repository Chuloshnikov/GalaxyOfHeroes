"use client"
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';

const CookieMessage = ({ messageText }: any) => {
    const [cookieMessage, setCookieMessage] = useState(true);

    useEffect(() => {
        
        const cookieMessageShown = Cookies.get('cookieMessageShown');
        if (cookieMessageShown) {
          setCookieMessage(false); 
        }
      }, []);

    const handleOkClick = () => {
        setCookieMessage(false);
        Cookies.set('welcomeMessageShown', 'true', { expires: 365 });
    };


    if (cookieMessage) {
        return null;
    } else {
        return (
            <div
                className='absolute top-4 left-4 flex gap-5 items-center bg-mainBg p-4 rounded-xl shadow-xl border border-accentBg'
            >
                <div>
                    <p
                        className='text-accentBg font-medium'
                    >
                        {messageText.text}
                    </p>
                    <Link
                        className='text-red-500 font-medium underline'
                        href={"https://en.wikipedia.org/wiki/HTTP_cookie"}
                    >
                        {messageText.linkText}
                    </Link>
                </div>
                <div>
                    <button
                        onClick={handleOkClick}
                        className='py-2 px-6 text-mainBg font-semibold bg-accentBg hover:bg-smouthText duration-300 rounded-lg'
                    >
                        {messageText.btnText}
                    </button>
                </div>
            </div>
        );
    }
    
    
}

export default CookieMessage;