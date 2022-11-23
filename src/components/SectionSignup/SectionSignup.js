import React from 'react'
import Form from '../Ui/Form/Form'
import InputForm from '../Ui/Form/InputForm/InputForm'

import iconShowroom from '../../images/icons/showroom.svg'

const SectionSignup = () => {
  return (
    <Form
      icon={iconShowroom}
      title={'ЗАПИСАТЬСЯ НА ПРИМЕРКУ В ШОУРУМЕ'}
      placeHolder={'Добавить комментарий'}
      dashed={true}
    >
      <InputForm
        type={'text'}
        name={'name'}
        placeholder={'введите имя'}
      />
      <InputForm
        type={'phone'}
        name={'phone'}
        placeholder={'введите телефон'}
      />
      <InputForm
        type={'date'}
        name={'date'}
        placeholder={'введите имя'}
      />
    </Form>
  )
}

export default SectionSignup