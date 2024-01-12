"use client"
import { Rating } from '@mui/material';
import {LinearProgress} from '@mui/material';
import React from 'react'
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  components: {
    MuiLinearProgress: {
      styleOverrides: {
        barColorPrimary: {
          backgroundColor: "#582467",
        },
      },
    },
  },
});

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
       className='bg-white rounded-xl mt-8 max-w-max flex p-5'
       >
            <div
            className='border-r-2 border-accentBg'
            >
                <div
                className='flex flex-col gap-1'
                >
                    <div
                    className='flex gap-2 items-center mr-5'
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
            <div
            className='ml-5 min-w-[170px] flex flex-col -mt-1 text-accentBg'
            >
                <p
                className='font-semibold text-sm'
                >
                    Quality
                </p>
                <ThemeProvider theme={theme}>
                    <LinearProgress style={{backgroundColor: "#B686C3",  barColorPrimary: {backgroundColor: 'green'}}} variant="determinate" value={30}/>
                </ThemeProvider>
                <div
                className='text-xs font-semibold flex items-center justify-between'
                >
                    <span>Poor</span>
                    <span>Excellent</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ReviewsComponent;