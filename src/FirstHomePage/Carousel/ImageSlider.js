import React, {useState} from 'react'
import { Carousel } from './Carousel'

const ImageSlider = () => {
  return (
    <>
    {Carousel.map((slide, index)=>{
        return(
            <img src={slide.urls} alt="food" />
        );
    })}
    </>
  )
}

export default ImageSlider