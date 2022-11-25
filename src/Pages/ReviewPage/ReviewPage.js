import React from 'react'
import Form from '../../components/Ui/Form/Form'
import InputForm from '../../components/Ui/Form/InputForm/InputForm'
import SliderShowRoomVideo from '../../components/Ui/SliderShowRoomVideo/SliderShowRoomVideo'
import SliderReview from '../../components/Ui/Review/SliderReview/SliderReview'
import Title from '../../components/Ui/Title/Title'
import Reviews from '../../components/Ui/Review/Reviews/Reviews'

import styles from './ReviewPage.module.css'
import reviewIcon from '../../images/review/review.svg'

const ReviewPage = () => {

  return (
    <>
      <main className={styles.main}>
        <Title title={'НАШИ ЗВЕЗДНЫЕ КЛИЕНТЫ И ОТЗЫВЫ'} />
        <SliderReview />
        <Reviews />
        <Title title={'ВИДЕО ПРИМЕРОК В ШОУРУМЕ'} />
        <SliderShowRoomVideo />
        <Form
          icon={reviewIcon}
          title={'ОСТАВИТЬ ОТЗЫВ'}
          placeHolder={'Добавить отзыв'}
          dashed={true}
        >
          <InputForm
            type={'text'}
            name={'name'}
            placeholder={'введите имя'}
          />
          <InputForm
            type={'email'}
            name={'email'}
            placeholder={'введите телефон'}
          />
          <InputForm
            type={'text'}
            name={'city'}
            placeholder={'введите город'}
          />
        </Form>
      </main>
    </>
  )
}

export default ReviewPage