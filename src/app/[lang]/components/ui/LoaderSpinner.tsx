"use client"
import React from 'react'
import { Watch } from 'react-loader-spinner'

const LoaderSpinner = () => {
  return (
    <>
        <Watch
        visible={true}
        height="160"
        width="160"
         radius="48"
        color="#B56767"
        ariaLabel="watch-loading"
        wrapperStyle={{}}
        wrapperClass=""
        />
    </>
  )
}

export default LoaderSpinner