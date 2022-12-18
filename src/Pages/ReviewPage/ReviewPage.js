import React from 'react'
import SliderShowRoomVideo from '../../components/Ui/SliderShowRoomVideo/SliderShowRoomVideo'
import SliderReview from '../../components/Ui/Review/SliderReview/SliderReview'
import Title from '../../components/Ui/Title/Title'
import Reviews from '../../components/Ui/Review/Reviews/Reviews'

import styles from './ReviewPage.module.css'
import SectionFeedback from '../../components/SectionFeedback/SectionFeedback'

const ReviewPage = () => {

  return (
    <>
      <main className={styles.main}>
        <Title title={'НАШИ ЗВЕЗДНЫЕ КЛИЕНТЫ И ОТЗЫВЫ'} />
        <SliderReview />
        <Reviews />
        <Title title={'ВИДЕО ПРИМЕРОК В ШОУРУМЕ'} />
        <SliderShowRoomVideo />
        <SectionFeedback />
      </main>
    </>
  )
}

export default ReviewPage