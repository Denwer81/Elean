import React from 'react'
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { mainSliderData } from './mainSliderData';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './MainSlider.css'
import { A11y, Navigation, Pagination, Autoplay } from 'swiper';

const MainSlider = () => {
  return (
    <>
      <Swiper
        className='main-swiper'
        modules={[Navigation, Pagination, A11y, Autoplay]}
        spaceBetween={10}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        loop={true}
        speed={800}
        centeredSlides={true}
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
        }}
      >
        {
          mainSliderData.map((item, index) => {
            return (
              <SwiperSlide key={index}>
                <Link className='link' to={item.link} >{item.title}</Link>
                <picture>
                  <source type="image/webp" srcSet={item.ImageLargeWebp} media='(min-width: 830px)' />
                  <source type="image/jpeg" srcSet={item.ImageLargeJpg} media='(min-width: 830px)' />
                  <source type="image/webp" srcSet={item.ImagesmallWebp} media='(max-width: 830px)' />
                  <img className='image' src={item.ImageSmallJpg} alt="about" width="1920" height="550" />
                </picture>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </>
  );
};

export default MainSlider;
