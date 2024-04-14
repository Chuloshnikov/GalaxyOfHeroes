import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import { LuShoppingCart } from 'react-icons/lu';
import { RiHeartLine } from 'react-icons/ri';
import displayPrice from "../../lib/displayPrice";

const SelectedProducts = ({text, lang, products}) => {

    

  return (
    <div className='p-4 flex flex-wrap gap-4'>
        {products && products.map(product => (
            <Link
            href={`/${lang}/products/${product._id}`}
            key={product._id}
            >
                <div
                className='w-[280px] h-[300px] overflow-hidden rounded-xl hoverLinkParent relative cursor-pointer'
                >
                     {
                        product.topSeller && (
                                            <p
                                            className="z-30 absolute top-4 left-6 text-sm py-[1px] px-2 rounded-3xl bg-[#E7414B] text-white"
                                            >
                                                {text.topSeller}
                                            </p>
                        )
                    }
                    <RiHeartLine
                        className="w-6 h-6 text-mainBg z-30 absolute top-2 right-2 cursor-grab"
                        />
                    <Image 
                    src={"https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1637321508i/59653763.jpg"} 
                    width={300} 
                    height={300}
                    className='object-fill hover:scale-105 duration-300'
                    alt="productImg"
                    />
                    <button
                    className="z-30 linkToShow absolute top-[85%] right-0 text-mainBg p-1 
                    lg:px-2 lg:py-1 rounded lg:rounded-md bg-accentBg mr-[18px] mb-[14px] 
                    text-[14px] flex lg:gap-[10px] items-center justify-center cursor-grab"
                    href={`/`}
                    >
                    <span
                        className="xs:hidden lg:inline"
                        >
                        {text.basketLink}
                    </span>
                    <LuShoppingCart className="w-4 h-4"/>
                    </button>
                </div>
                <div>
                    <h3
                    className='text-sm mdl:text-base font-semibold text-accentBg'
                    >
                        {product.title}
                    </h3>
                    <span
                    className='text-sm text-smouthText font-medium'
                    >
                        {displayPrice(product.regularPrice, lang)}
                    </span>
                </div>
            </Link>
        ))}
    </div>
  )
}
export default SelectedProducts;