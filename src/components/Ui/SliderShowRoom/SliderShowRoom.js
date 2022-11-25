import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { sliderShowRoomData } from './sliderShowRoomData';
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
        spaceBetween={8}
        breakpoints={{
          300: {
            slidesPerView: 1,
            spaceBetween: 4,
          },
          475: {
            slidesPerView: 2,
            spaceBetween: 4,
          },
          920: {
            slidesPerView: 3,
            spaceBetween: 8
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
        {
          sliderShowRoomData.map((item, index) => {
            return (
              <SwiperSlide key={index}>
                <img className='image' src={item.image} alt="showRoom" width="446" height="552" />
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </div>
  )
}

export default SliderShowRoom