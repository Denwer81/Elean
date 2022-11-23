import React from 'react'
import Reviews from '../Ui/Review/Reviews/Reviews'
import SliderReview from '../Ui/Review/SliderReview/SliderReview'
import Title from '../Ui/Title/Title'

import styles from './SectionReview.module.css'

const SectionReview = () => {
  return (
    <section className={styles.section}>
      <Title title={'НАШИ ЗВЕЗДНЫЕ КЛИЕНТЫ И ОТЗЫВЫ'} />
      <SliderReview />
      <Reviews />
    </section>
  )
}

export default SectionReview