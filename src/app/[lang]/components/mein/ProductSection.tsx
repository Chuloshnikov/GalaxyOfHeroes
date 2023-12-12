import React from 'react'
import { Image } from 'next/dist/client/image-component';
import Link from 'next/link';
import { LuShoppingCart } from 'react-icons/lu';
import { RiHeartLine } from 'react-icons/ri';


const ProductSection = ({ data, sectionText, lang }) => {

    console.log(data);

    const  displayPrice = (prices:any, lang:any) => {
        switch (lang) {
            case 'ua':
                return `${prices.uah.toFixed(2)} грн`;
            case 'de':
                return `${prices.eur.toFixed(2)} EUR`;
            case 'en':
                return `${prices.usd.toFixed(2)} USD`;
            default:
                return `${prices.usd.toFixed(2)} USD`;
        }
    };

  return (
    <section
    className='max-w-contentContainer mx-auto my-[12px] lg:my-[56px]'
    >
            <h2
            className='text-[28px] mdl:text-[36px] lg:text-[46px] text-accentBg font-medium ml-4 xl:ml-0'
            >
                {sectionText.title}
            </h2>
            <div
            className='flex flex-wrap gap-5 mt-[34px] lg:mt-[40px] items-center justify-center'
            >
                {
                    data?.map(product => (
                        <div 
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
                                                            {sectionText.topSeller}
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
                                <Link
                                className="z-30 linkToShow absolute top-[85%] right-0 text-mainBg p-1 
                                lg:px-2 lg:py-1 rounded lg:rounded-md bg-accentBg mr-[18px] mb-[14px] 
                                text-[14px] flex lg:gap-[10px] items-center justify-center cursor-grab"
                                href={`/`}
                                >
                                <span
                                    className="xs:hidden lg:inline"
                                    >
                                    {sectionText.basketLink}
                                </span>
                                <LuShoppingCart className="w-4 h-4"/>
                                </Link>
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
                                    {displayPrice(product.prices, lang)}
                                </span>
                            </div>
                        </div>
                    ))
                }
            </div>
    </section>
  )
}

export default ProductSection