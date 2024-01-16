"use client"
import Link from 'next/link';
import React, { useState, useEffect } from 'react';

const CookieMessage = ({ messageText }: any) => {
    const storedCookieMessage = localStorage.getItem('cookieMessage');
    const [cookieMessage, setCookieMessage] = useState(storedCookieMessage !== null ? JSON.parse(storedCookieMessage) : true);

    useEffect(() => {
        localStorage.setItem('cookieMessage', JSON.stringify(cookieMessage));
    }, [cookieMessage]);

    if (!cookieMessage) {
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
                        onClick={() => setCookieMessage(!cookieMessage)}
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