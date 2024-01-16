"use client"
import React from 'react';
import { Rating } from '@mui/material';
import {LinearProgress} from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  components: {
    MuiLinearProgress: {
      styleOverrides: {
        barColorPrimary: {
          backgroundColor: "#582434",
        },
      },
    },
  },
});

const RewiewList = () => {
  return (
    <div
    className='bg-white rounded-xl mt-8 max-w-max flex p-5 flex flex-col pb-8'
    >
      <div>
        <p
        className='text-xl font-semibold'
        >
          Tony
        </p> 
        <span
        className='text-sm font-medium'
        >
          december 12, 2022
        </span>
      </div>
      <div
      className='mt-8 border-t-2 border-accentBg pt-8 flex flex-col gap-4'
      >
          <Rating name="half-rating-read" sx={{color: "#582434"}} defaultValue={2.5} precision={0.5} readOnly />
          <h4
          className='text-lg font-semibold'
          >
            Awesome
          </h4>
          <p
          className='text-base font-medium'
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
            Quo ipsam nihil deserunt magni et esse magnam facilis? Rerum dolores, 
            maiores voluptates, distinctio impedit consequuntur delectus 
            suscipit earum voluptate in cupiditate.
          </p>
          <div
          className='flex flex-col gap-2'
          >
              <p
              className='font-semibold text-lg'
              >
                  Quality
              </p>
          <ThemeProvider theme={theme}>
              <LinearProgress style={{backgroundColor: "#FDA172",  barColorPrimary: {backgroundColor: '#582434'}}} variant="determinate" value={30}/>
          </ThemeProvider>
            <div
            className='text-base font-semibold flex items-center justify-between'
            >
              <span>Poor</span>
              <span>Excellent</span>
            </div>
          </div>
         
      </div>
    </div>
  )
}

export default RewiewList;