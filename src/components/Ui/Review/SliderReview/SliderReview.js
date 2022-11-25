import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom'
import { sliderReviewData } from './sliderData';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './SliderReview.css'
import { Navigation, Pagination, Autoplay } from 'swiper';

const SliderReview = () => {
  return (
    <div className='slider-review__container'>
      <Swiper
        className='slider-review'
        modules={[Navigation, Pagination, Autoplay]}
        breakpoints={{
          300: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          580: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          830: {
            slidesPerView: 4,
            spaceBetween: 25,
          },
          1140: {
            slidesPerView: 5,
            spaceBetween: 30,
          },
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
          sliderReviewData.map((item, index) => {
            return (
              <SwiperSlide key={index}>
                <Link className='link' to={item.link}>
                  <img className='image' src={item.image} alt="review" width="250" height="360"/>
                  <p className='text'>{item.name}</p>
                </Link>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </div>
  )
}

export default SliderReview