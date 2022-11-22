import React from 'react'
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';

import slide1_L_jpg from '../../images/mainSlider/slider_1.jpg'
import slide1_L_webp from '../../images/mainSlider/slider_1.webp'
import slide1_S_jpg from '../../images/mainSlider/slider_1_S.jpg'
import slide1_S_webp from '../../images/mainSlider/slider_1_S.webp'
import slide2_L_jpg from '../../images/mainSlider/slider_2.jpg'
import slide2_L_webp from '../../images/mainSlider/slider_2.webp'
import slide2_S_jpg from '../../images/mainSlider/slider_2_S.jpg'
import slide2_S_webp from '../../images/mainSlider/slider_2_S.webp'
import slide3_L_jpg from '../../images/mainSlider/slider_3.jpg'
import slide3_L_webp from '../../images/mainSlider/slider_3.webp'
import slide3_S_jpg from '../../images/mainSlider/slider_3_S.jpg'
import slide3_S_webp from '../../images/mainSlider/slider_3_S.webp'

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
          <picture>
            <source type="image/jpeg" srcSet={slide1_L_jpg} media='(min-width: 830px)' />
            <source type="image/webp" srcSet={slide1_L_webp} media='(min-width: 830px)' />
            <source type="image/webp" srcSet={slide1_S_webp} media='(max-width: 830px)' />
            <img className='image' src={slide1_S_jpg} alt="about" />
          </picture>
        </SwiperSlide>
        <SwiperSlide>
          <Link className='link' to='/catalog' >ВЫБЕРИТЕ СВОЙ СМОКИНГ</Link>
          <picture>
            <source type="image/jpeg" srcSet={slide2_L_jpg} media='(min-width: 830px)' />
            <source type="image/webp" srcSet={slide2_L_webp} media='(min-width: 830px)' />
            <source type="image/webp" srcSet={slide2_S_webp} media='(max-width: 830px)' />
            <img className='image' src={slide2_S_jpg} alt="about" />
          </picture>
        </SwiperSlide>
        <SwiperSlide>
          <Link className='link' to='/catalog' >ВЫБЕРИТЕ СВОЙ СМОКИНГ</Link>
          <picture>
            <source type="image/jpeg" srcSet={slide3_L_jpg} media='(min-width: 830px)' />
            <source type="image/webp" srcSet={slide3_L_webp} media='(min-width: 830px)' />
            <source type="image/webp" srcSet={slide3_S_webp} media='(max-width: 830px)' />
            <img className='image' src={slide3_S_jpg} alt="about" />
          </picture>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default MainSlider;
