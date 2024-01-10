"use client"
import React, { useState } from 'react';

const StarRating = () => {
  const [rating, setRating] = useState(0);

  const handleStarClick = (starValue) => {
    setRating(starValue);
  };

  return (
    <div
    className='flex gap-2 items-center'
    >
      
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          onClick={() => handleStarClick(star)}
          style={{
            cursor: 'pointer',
            color: star <= rating ? '#582467' : '#A9A9A9',
          }}
        >
          &#9733;
        </span>
      ))}
      <span
      className='text-accentBg text-sm font-semibold'
      >{rating} Reviews</span>
    </div>
  );
};

export default StarRating;