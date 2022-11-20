import React from 'react'
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';

import slide1 from '../../images/slider_1.png'
import slide2 from '../../images/slider_2.png'
import slide3 from '../../images/slider_3.jpg'

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
        <SwiperSlide>
          <Link className='link' to='/catalog' >ВЫБЕРИТЕ СВОЙ СМОКИНГ</Link>
          <img className='image' src={slide1} alt="slide1" />
        </SwiperSlide>
        <SwiperSlide>
          <Link className='link' to='/catalog' >ВЫБЕРИТЕ СВОЙ СМОКИНГ</Link>
          <img className='image' src={slide2} alt="slide2" />
        </SwiperSlide>
        <SwiperSlide>
          <Link className='link' to='/catalog' >ВЫБЕРИТЕ СВОЙ СМОКИНГ</Link>
          <img className='image image-2' src={slide3} alt="slide3" />
        </SwiperSlide>
      </Swiper>
    </>

  );
};

export default MainSlider;
