import React from 'react'
import Form from '../Ui/Form/Form'
import InputForm from '../Ui/Form/InputForm/InputForm'

import reviewIcon from '../../images/review/review.svg'

const SectionFeedback = () => {
  return (
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
  )
}

export default SectionFeedback