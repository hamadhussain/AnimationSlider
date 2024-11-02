'use client'
// components/SwiperComponent.js
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css'; // Import Swiper styles

// Import required modules (from the correct paths)
import { Navigation, Pagination } from 'swiper/modules';

const SwiperComponent = () => {
  return (
    <Swiper
      navigation
      pagination={{ clickable: true }}
      modules={[Navigation]}
      // style={{ height: '300px' }} // Customize height as needed
    >
      <SwiperSlide>
<div className=' h-screen'>slide1</div>   
   </SwiperSlide>
      <SwiperSlide>
<div className=' h-screen'>slide2</div>   
      </SwiperSlide>
      <SwiperSlide>
<div className=' h-screen'>slide3</div>   
      </SwiperSlide>
      <SwiperSlide>
<div className=' h-screen'>slide14</div>   
      </SwiperSlide>
    </Swiper>
  );
};

export default SwiperComponent;
 