import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { SliderShowRoomVideoData } from './SliderShowRoomVideoData';
import useModal from '../../../services/hooks/useModal';
import Modal from '../Modals/Modal/Modal';

import videoIcon from '../../../images/showRoom/videoIcon.png'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './SliderShowRoomVideo.css'
import { Navigation, Pagination, Autoplay } from 'swiper';

const SliderShowRoomVideo = () => {
  const { isOpen, handleOpen, handleClose } = useModal()
  const [videoLink, setVideoLink] = useState(null);

  const handleOpenVideo = ({ link }) => {
    setVideoLink(link)
    handleOpen()
  }

  return (
    <div className='slider-showroomVideo__container'>
      <Swiper
        className='slider-showroomVideo'
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
          SliderShowRoomVideoData.map((item, index) => {
            return (
              <SwiperSlide key={index}>
                <img
                  onClick={() => handleOpenVideo({ link: item.link })}
                  className='image'
                  src={item.image}
                  alt="review" 
                  width="250" height="360"
                  />
                <p className='text'>{item.name}</p>
                <img className='video' src={videoIcon} alt='iconVideo'></img>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
      <Modal
        isOpen={isOpen}
        handleClose={handleClose}>
        <iframe className='iframe__SliderShowRoomVideo' src={videoLink} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      </Modal>
    </div>
  )
}

export default SliderShowRoomVideo
