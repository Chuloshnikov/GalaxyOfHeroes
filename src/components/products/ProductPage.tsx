"use client"
import { useState, useEffect } from 'react';
import Image from "next/image";
import Link from 'next/link';
import ReviewsComponent from "../../components/ui/ReviewsComponent";
import StarRating from "../../components/ui/StarRating";
import ProductSection from "../../components/mein/ProductSection";
import LoaderSpinner from '../ui/LoaderSpinner';
import { redirect, useParams } from 'next/navigation';
import displayPrice from "../../lib/displayPrice";

const ProductPage = ({ text, lang }) => {
    const {_id} = useParams();
    const [loading, setLoading] = useState(false);
    const [item, setItem] = useState<any>("");
    const [images, setImages] = useState<any>("");
    const [titleImage, setTitleImage] = useState<any>("");
    const [tags, setTags] = useState<any>("");
    console.log(titleImage);

    useEffect(() => {
        setLoading(true);
        fetch('/api/items').then(res => {
            res.json().then(items => {
                const item = items.find(item => item._id === _id);
                setItem(item);
                setImages(item.images);
                setTags(item.tags);
                setLoading(false);
                setTitleImage(item.images[0]);
            });
        });
    }, [_id]);


    if (loading) {
        return (
          <div className='w-full h-full flex items-center justify-center pt-[10%] pb-[10%]'>
              <LoaderSpinner/>
          </div>
        )
      }
    
  return (
    <>
        <div
        className="flex gap-2 md:gap-5 flex-col lg:flex-row"
        >
        {/*PRODUCT IMAGE*/}
        <div
        className="relative max-w-[400px] min-h-[500px] rounded-xl p-8"
        >
          <p
            className="z-30 absolute top-9 left-10 text-sm py-[1px] px-2 rounded-3xl bg-[#E7414B] text-white"
            >
              {text.topSeller}
          </p>
          <Image 
          className="rounded-xl"
          src={titleImage} 
          width={400} 
          height={500} 
          alt="comics"
          />
          <div
          className="flex flex-wrap gap-2 mt-2 items-center justify-center"
          >
            {/*small images*/}
            {images?.length > 1 && images.map((img, index) => (
                <Image
                onClick={e => setTitleImage(img)}
                key={index}
                className="rounded-md"
                src={img} 
                width={60} 
                height={70} 
                alt={index}
                />
            ))}
          </div>
        </div>
        {/*PRODUCT DESCRIPTION*/}
        <div
        className="p-8 flex flex-col gap-2 text-accentBg"
        >
          <h1
          className="text-4xl font-semibold"
          >
            {item.title}
          </h1>
          <div
          className="flex gap-5"
          >
            {/* in stock or not */}
              
                {item.quantity > 0 ? (
                    <div
                    className="border-2 border-green-500 rounded-full px-1 sm:px-2 max-w-max"
                    >
                        <p
                        className="text-green-500 text-sm font-medium "
                        >
                            {text.stockOn}
                        </p>
                    </div>
                ) : (
                    <div
                    className="border-2 border-red-500 rounded-full px-1 sm:px-2 max-w-max"
                    >
                        <p
                        className="text-red-500 text-sm font-medium "
                        >
                            {text.stockOut}
                        </p>
                    </div>
                )}
              <StarRating/>
          </div>
          <div
          className="relative max-w-xl mt-4 flex flex-col gap-2"
          >
            {/*prise*/}
            {item.salePrice ? (
                <p
                className="absolute top-6 -right-4 sm:right-1 md:top-5 md:right-4 rounded-full flex flex-col gap-1 border-2 border-red-500 p-2 text-2xl font-bold text-red-500 items-center justify-center"
                >
                 <span>{displayPrice(item.salePrice, lang)}</span>
                 <span className='line-through text-accentBg text-sm'>{displayPrice(item.regularPrice, lang)}</span>
                </p>
            ) : (
                <p
                className="absolute top-6 -right-4 sm:right-1 md:-top-3 md:right-4 rounded-full bg-accentBg p-4 text-2xl font-bold text-mainBg"
                >
                  {displayPrice(item.regularPrice, lang)}
                </p>
            )}
           
            <p
            className="font-medium"
            >
            {item?.authors && ( item.authors)} {" "} {item?.illustrators && (item.illustrators)}
            </p>
            <p
            className="font-medium xs:mt-4 sm:mt-10 sml:mt-0"
            >
              {item?.format && (item.format)}
            </p>
            <p
            className="font-medium"
            >
              {item?.published && (item.published)} by {item?.brand && (item.brand)}
            </p>
            <p
            className="text-base font-medium"
            >
                {item?.description}
            </p>
            <div 
            className="flex flex-wrap gap-1 text-sm font-semibold mt-2"
            >
                {tags.length && tags.map((tag, index) => (
                     <span key={index} className="bg-accentBg py-1 px-2 text-mainBg items-center text-nowrap rounded-xl">{tag}</span>
                ))}
            </div>
          </div>
          <button
          className="bg-accentBg text-mainBg font-medium w-full px-4 py-2 rounded-xl mt-4"
          >
            {text.basketLink}
          </button>
          {/* ADITIONAL PRODUCTS*/}
          <div
          className="flex flex-col gap-1"
          >
            <h2
            className="text-xl font-bold"
            >
              Aditional Products
            </h2>
            {/*CARTS*/}
              <div
              className="flex gap-1 border border-accentBg rounded-xl p-1"
              >
                <Image 
                src={images[0]} 
                width={70} 
                height={80} 
                className="rounded-xl"
                alt="comics"
                />
                <div
                className="text-base font-medium"
                >
                  <h3>They All Fall Down, Part 2</h3>
                  <p>Juan Díaz Canales, {" "} Juanjo Guarnido</p>
                  <p>15.99$</p>
                  <button
                  className="py-1 px-2 bg-accentBg rounded-lg text-mainBg"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>  
              <div
              className="flex gap-1 border border-accentBg rounded-xl p-1"
              >
                <Image 
                src={images[0]} 
                width={70} 
                height={80} 
                className="rounded-xl"
                alt="comics"
                />
                <div
                className="text-base font-medium"
                >
                  <h3>They All Fall Down, Part 2</h3>
                  <p>Juan Díaz Canales, {" "} Juanjo Guarnido</p>
                  <p>15.99$</p>
                  <button
                  className="py-1 px-2 bg-accentBg rounded-lg text-mainBg"
                  >
                    Add to Cart
                  </button>
                </div>
              </div> 
              <div
              className="flex gap-1 border border-accentBg rounded-xl p-1"
              >
                <Image 
                src={images[0]} 
                width={70} 
                height={80} 
                className="rounded-xl"
                alt="comics"
                />
                <div
                className="text-base font-medium"
                >
                  <h3>They All Fall Down, Part 2</h3>
                  <p>Juan Díaz Canales, {" "} Juanjo Guarnido</p>
                  <p>15.99$</p>
                  <button
                  className="py-1 px-2 bg-accentBg rounded-lg text-mainBg"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>  
          </div>
        </div>
      </div>
      <div>
        <ReviewsComponent sectionText={text}/>
        {/*<ProductSection lang={lang} sectionText={text} data={item}/>*/}
      </div>
    </>
  )
}

export default ProductPage;