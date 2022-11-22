import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

import img1 from '../../../images/showRoom/showRoom1.jpg'
import img2 from '../../../images/showRoom/showRoom2.jpg'
import img3 from '../../../images/showRoom/showRoom3.jpg'
import img4 from '../../../images/showRoom/showRoom4.jpg'
import img5 from '../../../images/showRoom/showRoom5.jpg'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './SliderShowRoom.css'
import { Navigation, Pagination, Autoplay } from 'swiper';

const SliderShowRoom = () => {
  return (
    <div className='slider-showroom__container'>
      <Swiper
        className='slider-showroom'
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={4}
        breakpoints={{
          320: {
            slidesPerView: 1,
          },
          475: {
            slidesPerView: 2,
          },
          920: {
            slidesPerView: 3
          }
        }}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
      loop={true}
      speed={800}
      autoplay={{
        delay: 4500,
        disableOnInteraction: false,
      }}
      >
      <SwiperSlide>
        <img className='image' src={img1} alt="showRoom" />
      </SwiperSlide>
      <SwiperSlide>
        <img className='image' src={img2} alt="showRoom" />
      </SwiperSlide>
      <SwiperSlide>
        <img className='image' src={img3} alt="showRoom" />
      </SwiperSlide>
      <SwiperSlide>
        <img className='image' src={img4} alt="showRoom" />
      </SwiperSlide>
      <SwiperSlide>
        <img className='image' src={img5} alt="showRoom" />
      </SwiperSlide>
    </Swiper>
    </div >
  )
}

export default SliderShowRoom