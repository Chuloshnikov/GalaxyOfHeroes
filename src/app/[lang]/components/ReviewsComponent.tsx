import { Rating } from '@mui/material';
import React from 'react'

const ReviewsComponent = () => {
  return (
    <div
    className='text-accentBg mt-4'
    >
        <div
        className='flex gap-1 text-2xl font-semibold items-center'
        >
            <h4>Reviews</h4>
            <span>(25)</span>
        </div>
       <div 
       className='bg-white rounded-xl mt-8 max-w-max'
       >
            <div
            className='p-5 '
            >
                <div
                className='flex flex-col gap-1'
                >
                    <div
                    className='flex gap-2 items-center'
                    >
                        <div
                        className='text-xl font-bold'
                        >
                        5.0
                        </div>
                            <Rating name="half-rating-read" sx={{color: "#582467"}} defaultValue={2.5} precision={0.5} readOnly />
                        </div>
                    </div>
                   
            </div>
        </div>
    </div>
  )
}

export default ReviewsComponent;