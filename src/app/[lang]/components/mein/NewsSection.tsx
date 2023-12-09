"use client"
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import NewsCard from './NewsCard';

import 'swiper/css';
import 'swiper/css/pagination';


import { Autoplay, Pagination } from 'swiper/modules';


const NewsSection = ({ data, sectionText }) => {
  return (
    <section
    className='max-w-contentContainer mdl:mx-10 xl:mx-auto my-[12px] lg:my-[56px]'
    >
          <h2
            className='text-[28px] mdl:text-[36px] lg:text-[46px] text-accentBg font-medium ml-4 xl:ml-0'
            >
                {sectionText.title}
          </h2>
            <div
            className='max-w-container mt-[34px] lg:mt-[40px] overflow-x-auto whitespace-no-wrap px-4'
            >
                <Swiper
                slidesPerView={1}
                spaceBetween={30}
                pagination={{
                  clickable: true,
                }}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                modules={[Autoplay, Pagination]}
                className="mySwiper"
                >
                {
                    data?.map(news => (
                      <SwiperSlide 
                      key={news._id}
                      >
                        <NewsCard news={news} />
                      </SwiperSlide> 
                    ))
                }
                </Swiper>
              </div>
    </section>
  )
}

export default NewsSection;