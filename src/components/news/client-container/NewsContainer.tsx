"use client"
import { useState, useEffect } from 'react';
import LoaderSpinner from '../../ui/LoaderSpinner';
import NewsItem from './NewsItem';

const NewsContainer = ({ lang }) => {
    const [loading, setLoading] = useState(false);
    const [news, setNews] = useState<any>("");
    console.log(news);

    useEffect(() => {
        setLoading(true);
        fetch('/api/news').then(response => {
            response.json().then(news => {
              const filteredNews = news.filter(newsItem => newsItem.language === lang);
              setNews(filteredNews);
              setLoading(false);
            })
          });
    }, []);


    if (loading) {
        return (
          <div className='w-full h-full flex items-center justify-center pt-[10%] pb-[10%]'>
              <LoaderSpinner/>
          </div>
        )
      }

  return (
    <div>
        {news && news.map(item => (
          <NewsItem item={item} key={item._id}/>
        ))
        }
    </div>
  )
}

export default NewsContainer;