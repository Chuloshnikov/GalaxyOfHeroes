import React from 'react'
import Image from 'next/image';
import { IoMdTime } from "react-icons/io";
import DateConverter from '../ui/DateConverter';

const NewsCard = ({ news }) => {
  return (
      <div
      className="text-[16px] flex flex-col gap-2 w-full"
        key={news.id}
        >
          <div
          className="relative rounded-[30px] max-w-container max-h-[400px]"
          >
              <Image  
              width={600}
              height={800}
              loading="lazy" 
              className="object-cover rounded-[30px] max-w-container max-h-[400px]" 
              src={news.image}
              alt="NewsImg"
              />
              <span
              className="absolute top-3 left-5 text-base font-medium text-accentBg bg-mainBg text-center py-1 px-6 rounded-3xl"
              >
                  {news.topic}
              </span>
          </div>
        <div
          className="text-accentBg2 xs:text-sm mdl:text-base flex gap-3"
          >
            
            <DateConverter mongoDate={news.createdAt}/>
        </div>
        <h3
          className="text-accentBg font-medium text-base"
          >
          {news.title}
        </h3>
      </div>
  )
}

export default NewsCard;